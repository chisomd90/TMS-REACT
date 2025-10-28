import React from "react";

const TicketList = ({ tickets, onDelete, onUpdate }) => {
  if (tickets.length === 0)
    return <p className="text-gray-600">No tickets found.</p>;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="border p-4 rounded-lg bg-white shadow-md"
        >
          <h3 className="text-lg font-bold">{ticket.title}</h3>
          <p className="text-sm mb-2">{ticket.description}</p>
          <p className="text-xs text-gray-500 mb-3">Status: {ticket.status}</p>

          <div className="flex gap-3">
            <button
              onClick={() =>
                onUpdate(ticket.id, {
                  status: ticket.status === "Open" ? "Closed" : "Open",
                })
              }
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              {ticket.status === "Open" ? "Close" : "Reopen"}
            </button>
            <button
              onClick={() => onDelete(ticket.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
