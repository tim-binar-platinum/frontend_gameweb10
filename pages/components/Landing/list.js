import React from "react";
import Item from "./item";
import { Container, Table } from "reactstrap";

export default function List({ data }) {
  return (
    <Container style={{paddingLeft:"10%", paddingRight:"10%"}} className="d-flex flex-column justify-content-center align-items-center">
    <h3 className="fw-bold">LeaderBoard</h3>
    <Table>
    <thead>
        <tr>
            <th>Username</th>
            <th>Score</th>
        </tr>
    </thead>
    <tbody>
      {data.map(row => (
        <Item row={row} key={row.id} />
      ))}
    </tbody>
    </Table>
    </Container>
  );
}
