import React from "react";
// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function User() {
  //   const { userId } = useParams();
  const [information, setInformation] = useState({});
  const fetchName = () => {
    const info = JSON.parse(localStorage.getItem("contactInfo"));
    console.log(setInformation);
    if (info) {
      setInformation(info);
    }
  };

  useEffect(() => {
    fetchName();
  }, [setInformation]);
  console.log("information: ", information);
  return (
    <div>
      <h1 className="bg-red-200 text-2xl font-bold text-center">
        USER: {information.name}
      </h1>
    </div>
  );
}

export default User;
