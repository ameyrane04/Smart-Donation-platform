import React from "react";
import axios from "axios";
import { useState } from "react";

const DonationForm = () =>{
    const [donationData, setDonationData] = useState({
        amount:"",
        description:"",
        userId:"",
    });
    
    const [message, setMessage] = useState('');
    
    const handleChange = (e)=>{
        setDonationData({...donationData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            const token = localStorage.getItem("authToken");
            const response =  await axios.post('http://localhost:8080/api/donations', {
                amount: donationData.amount,
                description: donationData.description,
                user:{
                    id: donationData.userId,
                },
            },
        {
            headers: {
                Authorization: `Bearer ${token}`, //add token to headers
            },
        });

            setMessage("Donation successfully created!");
            setDonationData({amount:"",description:"",userId:""});
            console.log('donation saved ', response.data);

        }catch(error){
            setMessage(
                error.response?.data?.message || "donation failed."
            );
            console.error('error saving data: ', error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-lg font-bold mb-4">Make a Donation</h2>
            {message && <p className="text-red-500">{message}</p>}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                User ID
              </label>
              <input
                type="number"
                name="userId"
                value={donationData.userId}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your user Id"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Donation Amount
              </label>
              <input
                type="number"
                name="amount"
                value={donationData.amount}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter amount"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={donationData.description}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter a short description"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      );
};

export default DonationForm;