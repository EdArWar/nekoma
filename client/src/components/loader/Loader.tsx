import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_auth, api_getAllProducts } from "../../api/API";
import "./Loader.scss";

export default function Loader() {
  const dispatch = useDispatch();

  // console.log = console.warn = console.error = () => {};

  // // Look ma, no error!
  // console.error("Something bad happened.");
  useEffect(() => {
    dispatch(api_auth());
    dispatch(api_getAllProducts());
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
