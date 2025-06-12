import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TicketCartPage = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const nav = useNavigate();

  const getAllTickets = () => {
    axios
      .get(`${API_URL}/tickets`)
      .then((res) => {
        setAllTickets(res.data);
        let subtotal = 0;
        for (let i = 0; i < res.data.length; i++) {
          subtotal += totalPrice(res.data[i]);
        }
        setGrandTotal(subtotal);
        console.log(subtotal);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllTickets();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/tickets/${id}`)
      .then((res) => {
        getAllTickets();
      })
      .catch((err) => console.log(err));
  };

  const totalPrice = (oneTicket) => {
    return oneTicket.festival.price * oneTicket.ticketAmount;
  };

  return (
    <div>
      {allTickets.map((oneTicket) => {
        return (
          <div key={oneTicket.id}>
            <div className="ticketcart">
              <h1>{oneTicket.festival.date}</h1>
              <h2>{oneTicket.festival.name}</h2>

              <h2>{oneTicket.ticketAmount}</h2>
              <h2>€{oneTicket.festival.price}p.p.</h2>

              <button
                id="deleteBtn"
                onClick={() => {
                  handleDelete(oneTicket.id);
                }}
              >
                Delete
              </button>
              <Link
                to={`/edit-ticket/${oneTicket.festival.id}/${oneTicket.id}`}
              >
                <button>Update ticket</button>
              </Link>
            </div>
            <div className="total-price">Total : €{totalPrice(oneTicket)}</div>
          </div>
        );
      })}
      <div className="grand-total"> Grand-total : €{grandTotal} </div>
    </div>
  );
};

export default TicketCartPage;
