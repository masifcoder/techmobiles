import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './pages/DashboardLayout'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardHome from './pages/DashboardHome';
import Notfound from './pages/Notfound';
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Products from "./pages/dashboard/Products";
import CreateProductForm from './pages/dashboard/CreateProductForm';


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path='products' element={<Products />} />
          <Route path="create" element={<CreateProductForm />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
