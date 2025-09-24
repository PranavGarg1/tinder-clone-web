import React from "react";

const UserCard = ({ user }) => {
  // console.log(user);
  return (
    <>
      <div className="card bg-base-300 w-96 shadow-2xl">
        <figure>
          <img className=" h-80 w-full" src={user.photoUrl} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {user.firstName} {user.lastName}
          </h2>
          <h2 className="card-title text-sm">
            {user.age}, {user.gender}
          </h2>
          <p>Description</p>
          <div className="card-actions justify-between">
            <button className="btn btn-primary w-25">DisLike</button>
            <button className="btn btn-primary w-25">Like</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
