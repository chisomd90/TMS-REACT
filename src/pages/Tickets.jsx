import React, { useState, useEffect } from "react";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  // Fetch tickets from localStorage
  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);
  }, []);

  // Add a new ticket
  const addTicket = (ticket) => {
    const updatedTickets = [...tickets, ticket];
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };

  // Update a ticket
  const updateTicket = (id, updatedData) => {
    const updatedTickets = tickets.map((t) =>
      t.id === id ? { ...t, ...updatedData } : t
    );
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };

  // Delete a ticket
  const deleteTicket = (id) => {
    const filtered = tickets.filter((t) => t.id !== id);
    setTickets(filtered);
    localStorage.setItem("tickets", JSON.stringify(filtered));
  };

  return (
    <div className="p-6 text-black">
      <h1 className="text-3xl font-bold mb-6">Ticket Management</h1>
      <TicketForm onAdd={addTicket} />
      <TicketList
        tickets={tickets}
        onDelete={deleteTicket}
        onUpdate={updateTicket}
      />
    </div>
  );
};

export default Tickets;
