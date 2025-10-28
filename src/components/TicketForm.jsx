import React, { useState } from "react";

const TicketForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Title is required!");

    const newTicket = {
      id: Date.now(),
      title,
      description,
      status: "Open",
    };

    onAdd(newTicket);
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-green-200 p-4 rounded-lg mb-6 max-w-lg"
    >
      <h2 className="text-xl font-semibold mb-3">Create Ticket</h2>
      <input
        type="text"
        placeholder="Ticket title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-3"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mb-3"
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Add Ticket
      </button>
    </form>
  );
};

export default TicketForm;
