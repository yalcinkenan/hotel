import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosConfig';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axiosInstance.get('/users');
                setUsers(response.data);
            } catch (err) {
                setError('Kullanıcı verileri alınırken hata oluştu.');
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (loading) return <p>Yükleniyor...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Kullanıcı Listesi</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} - {user.email} - {user.phoneNumber}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;