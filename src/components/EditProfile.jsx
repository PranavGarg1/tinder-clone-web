import { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const EditProfile = ({ user }) => {
  // console.log(user);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [error, setError] = useState("");

  const saveProfile = async () => {
    try {
      axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName },
        { withCredentials: true }
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="flex justify-between m-10">
        <div>
          <h1 className="text-xl">Your profile</h1>
          <UserCard user={user} />
        </div>
        <div className="flex justify-center my-10 ">
          <div className="card card-dash bg-base-300 w-96">
            <div className="card-body ">
              <h2 className="card-title  justify-center">Edit Profile</h2>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">FirstName</legend>
                  <input
                    type="text"
                    value={firstName}
                    className="input"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">LastName</legend>
                  <input
                    type="text"
                    value={lastName}
                    className="input"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </fieldset>
              </div>
              <p className="text-red-600">{error}</p>
              <div className="card-actions justify-center m-4">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
