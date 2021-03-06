package com.Scope.scopeapi.model;


import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name = "enrollment")
@EntityListeners(AuditingEntityListener.class)
public class Enrollment {
    @Id
    @GeneratedValue
    private int id;
    @Column(name="net_id")
    private String net_id;
    @Column(name="CRN")
    private String CRN;

    public Enrollment(){
    }

    public Enrollment(String net_id, String CRN) {
        this.net_id = net_id;
        this.CRN = CRN;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNet_id() {
        return net_id;
    }

    public void setNet_id(String net_id) {
        this.net_id = net_id;
    }

    public String getCRN() {
        return CRN;
    }

    public void setCRN(String CRN) {
        this.CRN = CRN;
    }
}
