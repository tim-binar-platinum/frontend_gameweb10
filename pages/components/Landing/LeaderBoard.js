import React, { useState, useEffect } from "react";
import List from "./list";
import axiosConfig from "../../api/axiosConfig";

function LeaderBoard() {
  const [data, setData] = useState([]);
  const userDatas = async () =>  {
    const {data} = await axiosConfig.get(
    "/users",
    );
    setData(data.data);
  }

  useEffect(() => {
    userDatas()
  }, []);

  return (
    <div className="App">
      <List data={data} />
    </div>
  );
}

export default LeaderBoard
