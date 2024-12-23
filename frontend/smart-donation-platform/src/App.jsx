import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './components/UserForm'
import DonationForm from './components/DonationForm'
function App() {
  

  return (
    <>
    <h1>Smart Donate</h1>
    {/* <UserForm /> */}
    <DonationForm/>
    </>
  );
}

export default App
