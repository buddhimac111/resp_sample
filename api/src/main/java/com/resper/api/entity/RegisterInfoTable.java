package com.resper.api.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "register_info")
public class RegisterInfoTable {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private int regId;
    private String email;
    private String name;
    private String password;
    private String active;
}
