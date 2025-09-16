package com.heartofthecity.hotel.service;

import com.heartofthecity.hotel.model.User;
import com.heartofthecity.hotel.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // İsterseniz update ve delete işlemleri de eklenebilir
}
