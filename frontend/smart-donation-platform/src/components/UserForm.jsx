import React, { useState } from "react";
import axios from "axios";


const UserForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users', formData);
            if (response.status === 201 || response.status === 200) {
                setMessage('user created successfully');
                console.log("user created successfully");
                setFormData({ username: '', email: '', password: '' }); //reset form

            }
        } catch (error) {
            // console.log(error);
            console.error('error creating user: ', error.response?.data || error.message);
            setMessage('error creating user. please try again later.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Create User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Create User
            </button>
          </form>
          {message && (
            <div className="mt-4 text-center text-red-500">
              {message}
            </div>
          )}
        </div>
      );
};

export default UserForm;