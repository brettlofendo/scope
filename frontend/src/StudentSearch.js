import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
// import { Text, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//     baseText: {
//         fontFamily: "Cochin"
//     },
//     titleText: {
//         fontSize: 20,
//         fontWeight: "bold"
//     }
// });

class StudentSearch extends Component {

    emptyItem = {
        netId: '',
    };


    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            value: "hello"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const group = await (await fetch(`/api/course/${this.props.match.params.id}`)).json();
            this.setState({item: group});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        const response = await fetch('api/course/' + item.crn);
        const data = await response.json();
        this.setState({ value: data.toString() })

        //this.props.history.push('/students');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{'Search Class'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="crn">CRN</Label>
                        <Input type="text" name="crn" id="crn" value={item.crn || ''}
                               onChange={this.handleChange} autoComplete="crn"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Search</Button>{' '}
                        <Button color="secondary" tag={Link} to="/students">Cancel</Button>
                    </FormGroup>
                </Form>
                {/*<Text style={styles.baseText}>*/}
                {/*    <Text numberOfLines={5}>{this.state.value}</Text>*/}
                {/*</Text>*/}
                <p>
                    {this.state.value}
                </p>

            </Container>
        </div>
    }
}

export default withRouter(StudentSearch);