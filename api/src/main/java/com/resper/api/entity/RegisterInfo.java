package com.resper.api.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "RegisterInfo")
public class RegisterInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int regId;
    private String name;
    private String email;
    private String password;
}
