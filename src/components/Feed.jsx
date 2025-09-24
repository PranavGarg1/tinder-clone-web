import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  // console.log(feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get("http://localhost:3000/feed", {
        withCredentials: true,
      });
      // console.log(res);
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed && (
      <>
        <div>
          <h1 className="flex justify-center my-10 ">
            <UserCard user={feed[1]} />
          </h1>
        </div>
      </>
    )
  );
};

export default Feed;
