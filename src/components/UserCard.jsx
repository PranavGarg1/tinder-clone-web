import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeUserFromFeed } from "../utils/feedSlice";
const UserCard = ({ user }) => {
  // console.log(user);

  const dispatch = useDispatch();
  const handelSendReqeust = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="card bg-base-300 w-96 shadow-2xl m-10">
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
            <button
              className="btn btn-primary w-25"
              onClick={() => handelSendReqeust("ignored", user._id)}>
              DisLike
            </button>
            <button
              className="btn btn-primary w-25"
              onClick={() => handelSendReqeust("intrested", user._id)}>
              Like
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
