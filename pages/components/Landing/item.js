import React from "react";
import { Table } from "reactstrap";

export default function Item({ row }) {
  return (

    <tr>
        <td className="item__name">{row.username}</td>
        <td className="item__score">{row.points}</td>
    </tr>
 
  );
}
