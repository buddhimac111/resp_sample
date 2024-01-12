package com.resper.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

    @PostMapping ("/register")
    public String register(@RequestBody String body) {

        return body;

    }
}
