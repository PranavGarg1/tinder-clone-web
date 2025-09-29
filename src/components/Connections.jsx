import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Connections = () => {
  const [connections, setConnections] = useState([]);
  const getchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      // console.log(res.data?.data);
      setConnections(res.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getchConnections();
  }, []);

  if (connections.length === 0) return <div>Loading</div>;
  return (
    <>
      <div className=" my-10">
        <h1 className="text-bold text-xl mx-10">Connections</h1>
        {connections.map((item) => {
          return (
            <div
              key={item._id}
              className="card card-border bg-base-300 w-96 m-10 ">
              <div className="card-body">
                <h2 className="card-title">
                  {item.firstName} {item.lastName} ({item.age}, {item.gender})
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Connections;
