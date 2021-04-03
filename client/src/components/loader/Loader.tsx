import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_auth } from "../../api/API";
import "./Loader.scss";

export default function Loader() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Loader");

    // dispatch(auth());
    dispatch(api_auth());
  }, []);
  return (
    <div className="loader_wrap">
      <div>
        <img
          srcSet="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
          alt=""
        />
      </div>
    </div>
  );
}
