import React, { useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        bio: '',
    });

    const [file, setFile] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('username', userData.username);
        formData.append('email', userData.email);
        formData.append('bio', userData.bio);
        formData.append('file', file);

        try {
            const response = await axios.post(
                'http://localhost:8080/api/users/create',
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }
            );
            alert('User profile created successfully!');
        } catch (error) {
            console.error(
                'Error creating user profile:',
                error.response ? error.response.data : error.message
            );
            alert(
                'Error creating user profile. Please check the console for more details.'
            );
        }
    };

    return (
        <div>
            <h2>Create User Profile</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={userData.username}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <textarea
                    name="bio"
                    placeholder="Bio"
                    value={userData.bio}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <input type="file" onChange={handleFileChange} required />
                <button type="submit">Create Profile</button>
            </form>
        </div>
    );
};

export default UserProfile;
