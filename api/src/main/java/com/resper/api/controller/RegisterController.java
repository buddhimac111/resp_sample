package com.resper.api.controller;

import com.resper.api.dto.RegisterInfoDto;
import com.resper.api.dto.ResponseDto;
import com.resper.api.service.RegisterInfoService;
import com.resper.api.utils.VarList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "*")
public class RegisterController {

    @Autowired
    private RegisterInfoService employeeService;

    @Autowired
    private ResponseDto responseDto;

    @PostMapping("/register")
    public ResponseEntity saveUser(@RequestBody RegisterInfoDto registerInfoDto) {

        try {
            String res = employeeService.saveUser(registerInfoDto);

            if (res.equals("00")) {
                responseDto.setCode(VarList.RSP_SUCCESS);
                responseDto.setMessage("Done");
                responseDto.setContent(registerInfoDto);

                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);

            } else if (res.equals("06")) {
                responseDto.setCode(VarList.RSP_DUPLICATED);
                responseDto.setMessage("User Duplicated");
                responseDto.setContent(registerInfoDto);

                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

            } else {
                responseDto.setCode(VarList.RSP_FAIL);
                responseDto.setMessage("Error");
                responseDto.setContent(null);

                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            responseDto.setCode(VarList.RSP_ERROR);
            responseDto.setMessage(e.getMessage());
            responseDto.setContent(null);

            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
