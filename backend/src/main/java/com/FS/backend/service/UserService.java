package com.FS.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FS.backend.entity.User;
import com.FS.backend.repository.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public User saveUser(User user){
        return userRepo.save(user);
    }

    public String loginUser(String email, String password) {

    User user = userRepo.findByEmail(email);

    if (user == null) {
        return "User not found";
    }

    if (!user.getPassword().equals(password)) {
        return "Invalid Password";
    }

    return "Login Successful";
}
}
