package com.heartofthecity.hotel.repository;

import com.heartofthecity.hotel.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Ek sorgu metotları burada tanımlanabilir
}
