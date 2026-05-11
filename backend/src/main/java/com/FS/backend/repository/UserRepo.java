package com.FS.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FS.backend.entity.User;


public interface UserRepo extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
