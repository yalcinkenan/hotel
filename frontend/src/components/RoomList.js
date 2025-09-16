import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosConfig';

const RoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axiosInstance.get('/rooms');
                setRooms(response.data);
            } catch (err) {
                setError('Oda verileri alınırken hata oluştu.');
            } finally {
                setLoading(false);
            }
        };
        fetchRooms();
    }, []);

    if (loading) return <p>Yükleniyor...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Oda Listesi</h2>
            <ul>
                {rooms.map(room => (
                    <li key={room.id}>
                        {room.roomNumber} - {room.type} - {room.price}₺ - {room.available ? 'Müsait' : 'Dolu'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomList;