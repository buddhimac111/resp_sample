package com.resper.api.repo;

import com.resper.api.entity.RegisterInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepo extends JpaRepository<RegisterInfo, Integer> {
}
