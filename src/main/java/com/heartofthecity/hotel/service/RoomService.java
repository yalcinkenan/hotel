package com.heartofthecity.hotel.service;

import com.heartofthecity.hotel.model.Room;
import com.heartofthecity.hotel.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

    // Güncelleme ve silme işlemleri de eklenebilir
}
