import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const Request = () => {
  const [requests, setRequests] = useState([]);

  const getRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      // console.log(res.data.coonnectionRequests);
      setRequests(res.data.coonnectionRequests);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      getRequests();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div>
          <h1 className="text-bold">Requests</h1>
          {requests.map((item) => {
            return (
              <div
                key={item.fromUserId._id}
                className="card bg-base-300 w-96 shadow-sm m-10">
                <div className="card-body">
                  <h2 className="card-title">
                    {item.fromUserId.firstName} {item.fromUserId.lastName}
                  </h2>
                  <p>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() =>
                        reviewRequest("accepted", item.fromUserId._id)
                      }>
                      Accept
                    </button>
                    <button
                      className="btn btn-error"
                      onClick={() =>
                        reviewRequest("rejected", item.fromUserId._id)
                      }>
                      Reject
                    </button>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Request;
