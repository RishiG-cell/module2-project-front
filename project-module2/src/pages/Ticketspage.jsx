import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Ticketspage = ({ festivals }) => {
  const { festId } = useParams();
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const oneFest = festivals.find((oneFestival) => {
    if (oneFestival.id === festId) {
      return true;
    }
  });

  const handleSale = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${API_URL}/tickets`, {
      festival: oneFest,
      ticketAmount: amount,
    });

    navigate("/ticketcart");
  };

  return (
    <div className="tickets">
      <h1>Tickets</h1>
      <div>
        <ul>
          <li>{`${oneFest?.date} `}</li>
          <li>{`${oneFest?.name} `}</li>
          <li>{`${oneFest?.location}`}</li>
        </ul>
        <form onSubmit={handleSale}>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button>Add to cart</button>
        </form>
      </div>
    </div>
  );
};

export default Ticketspage;
