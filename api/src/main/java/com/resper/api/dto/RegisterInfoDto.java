package com.resper.api.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RegisterInfoDto {
    private int regId;
    private String name;
    private String email;
    private String password;
}
