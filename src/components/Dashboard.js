import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {props.data.map(stock => (
          <li key={stock.symbol}>
            <Link to={`/stocks/${stock.symbol}`}>{stock.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
