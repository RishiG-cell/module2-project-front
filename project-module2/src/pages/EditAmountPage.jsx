import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditAmountPage = () => {
  const { ticketId } = useParams();
  const [amount, setAmount] = useState(0);
  const nav = useNavigate();
  const [oneTicket, setOneTicket] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();

    axios
      .put(`${API_URL}/tickets/${ticketId}`, oneTicket)
      .then((res) => {
        nav(`/ticketcart`);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/tickets/${ticketId}`)
      .then((res) => {
        setOneTicket(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!oneTicket) {
    return <p>loading</p>;
  }
  return (
    <div className="tickets">
      <h1>Tickets</h1>
      <div>
        <ul>
          <li>{`${oneTicket?.festival.date} `}</li>
          <li>{`${oneTicket?.festival.name}`}</li>
          <li>{`${oneTicket?.festival.location}`}</li>
        </ul>
        <form onSubmit={handleChange}>
          <input
            type="number"
            name="amount"
            value={oneTicket.ticketAmount}
            onChange={(e) =>
              setOneTicket({ ...oneTicket, ticketAmount: e.target.value })
            }
          />
          <button>Add to cart</button>
        </form>
      </div>
    </div>
  );
};

export default EditAmountPage;
