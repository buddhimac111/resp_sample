package com.resper.api.service;

import com.resper.api.dto.RegisterInfoDto;
import com.resper.api.entity.RegisterInfo;
import com.resper.api.repo.RegistrationRepo;
import com.resper.api.utils.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class RegisterInfoService {
    @Autowired
    private RegistrationRepo registrationRepo;

    @Autowired
    private ModelMapper modelMapper;


    public String saveUser(RegisterInfoDto registerInfoDto) {
        if (registrationRepo.existsById(registerInfoDto.getRegId())) {
            return VarList.RSP_DUPLICATED;
        } else {
            registrationRepo.save(modelMapper.map(registerInfoDto, RegisterInfo.class));
            return VarList.RSP_SUCCESS;
        }
    }
}
