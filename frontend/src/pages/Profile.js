import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../services/api';
import './Auth.css';

function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await getProfile();
            setUser(response.data);
        } catch (err) {
            console.error('Failed to fetch profile:', err);
            // If unauthorized, redirect to login
            if (err.response?.status === 401) {
                localStorage.clear();
                navigate('/login');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    if (loading) {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <h2>Loading...</h2>
                </div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>User Profile</h2>
                
                <div className="profile-info">
                    <div className="info-row">
                        <strong>Username:</strong>
                        <span>{user.username}</span>
                    </div>
                    
                    <div className="info-row">
                        <strong>Email:</strong>
                        <span>{user.email}</span>
                    </div>
                    
                    <div className="info-row">
                        <strong>Name:</strong>
                        <span>{user.first_name} {user.last_name}</span>
                    </div>
                    
                    <div className="info-row">
                        <strong>Role:</strong>
                        <span className={`role-badge role-${user.role}`}>
                            {user.role}
                        </span>
                    </div>
                    
                    {user.phone && (
                        <div className="info-row">
                            <strong>Phone:</strong>
                            <span>{user.phone}</span>
                        </div>
                    )}
                    
                    {user.address && (
                        <div className="info-row">
                            <strong>Address:</strong>
                            <span>{user.address}</span>
                        </div>
                    )}
                </div>

                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Profile;