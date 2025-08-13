import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";
import AddBusForm from "./AddBusForm";
import UpdateDeleteBusForm from "./UpdateDeleteBusForm";
import AddBookingForm from "./AddBookingForm";
import UpdateDeleteBookingForm from "./UpdateDeleteBookingForm";
import UploadFile from "./UploadFile";
import "./Admin.css";

function Admin() {
  const [buses, setBuses] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBuses();
    fetchBookings();
  }, []);

  const fetchBuses = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5555/buses");
      setBuses(await res.json());
    } catch (err) {
      console.error("Error fetching buses:", err);
    }
  };

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5555/bookings");
      setBookings(await res.json());
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  const addBus = async (newBus) => {
    try {
      const res = await fetch("http://127.0.0.1:5555/buses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBus),
      });
      const data = await res.json();
      setBuses([...buses, data]);
    } catch (err) {
      console.error("Error adding bus:", err);
    }
  };

  const updateBus = async (id, updatedBus) => {
    try {
      const res = await fetch(`http://127.0.0.1:5555/buses/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBus),
      });
      const data = await res.json();
      setBuses(buses.map((bus) => (bus.id === id ? data : bus)));
    } catch (err) {
      console.error("Error updating bus:", err);
    }
  };

  const deleteBus = async (id) => {
    try {
      await fetch(`http://127.0.0.1:5555/buses/${id}`, { method: "DELETE" });
      setBuses(buses.filter((bus) => bus.id !== id));
    } catch (err) {
      console.error("Error deleting bus:", err);
    }
  };

  const addBooking = async (newBooking) => {
    try {
      const res = await fetch("http://127.0.0.1:5555/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBooking),
      });
      const data = await res.json();
      setBookings([...bookings, data]);
    } catch (err) {
      console.error("Error adding booking:", err);
    }
  };

  const updateBooking = async (id, updatedBooking) => {
    try {
      const res = await fetch(`http://127.0.0.1:5555/bookings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBooking),
      });
      const data = await res.json();
      setBookings(bookings.map((b) => (b.id === id ? data : b)));
    } catch (err) {
      console.error("Error updating booking:", err);
    }
  };

  const deleteBooking = async (id) => {
    try {
      await fetch(`http://127.0.0.1:5555/bookings/${id}`, { method: "DELETE" });
      setBookings(bookings.filter((b) => b.id !== id));
    } catch (err) {
      console.error("Error deleting booking:", err);
    }
  };

  const data = [
    { name: "Jan", income: 20000, expenses: 15000 },
    { name: "Feb", income: 18000, expenses: 12000 },
    { name: "Mar", income: 25000, expenses: 18000 },
    { name: "Apr", income: 22000, expenses: 16000 },
    { name: "May", income: 24000, expenses: 17000 },
    { name: "Jun", income: 28000, expenses: 20000 },
  ];

  const companyComparisonData = [
    { name: "Company A", income: 10000 },
    { name: "Company B", income: 12000 },
    { name: "Company C", income: 8000 },
    { name: "Company D", income: 15000 },
    { name: "Company E", income: 9000 },
  ];

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="stats-section">
        <div className="stat-card">Total Income <p>Ksh 30,000</p></div>
        <div className="stat-card">Total Expenses <p>Ksh 20,000</p></div>
        <div className="stat-card">Total Customers <p>500</p></div>
        <div className="stat-card">Total Buses <p>50</p></div>
        <div className="stat-card">Total Bookings <p>300</p></div>
        <div className="stat-card">Total Routes <p>30</p></div>
      </div>

      <div className="chart-section">
        <div className="chart-box">
          <h2>Company Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                dataKey="income"
                data={companyComparisonData}
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {companyComparisonData.map((_, index) => (
                  <Cell key={index} fill={`#${index + 8}42ca9d`} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h2>Income vs Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#8884d8" />
              <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="forms-section">
        <AddBusForm onAddBus={addBus} />
        <UpdateDeleteBusForm buses={buses} onUpdateBus={updateBus} onDeleteBus={deleteBus} />
        <AddBookingForm onAddBooking={addBooking} />
        <UpdateDeleteBookingForm bookings={bookings} onUpdateBooking={updateBooking} onDeleteBooking={deleteBooking} />
        <UploadFile />
      </div>
    </div>
  );
}

export default Admin;
