// import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const tokenstring = localStorage.getItem("user");
  const usertoken = JSON.parse(tokenstring).token;
  const [respData, setRespData] = useState([]);

  // console.log("usertoken: ", usertoken);

  useEffect(() => {
    const getprofile = async () => {
      let response;
      let responseData;
      try {
        response = await fetch(
          "https://massab-hammad.herokuapp.com/api1/users/getme",
          {
            
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${usertoken}`,
            },
          }
        ).then();
        responseData = await response.json();
        console.log("Ress: "  ,responseData);

        setRespData(responseData.data.data);
      } catch (err) {
        console.log("profile error: ", err);
      }
    };
    getprofile();
  });

  return (
    <>
      <div>
        <br />
        <p><b>Name is:</b> {respData.name}</p>
        <p><b>Email is:</b> {respData.email}</p>
        
      </div>
    </>
  );
};

export default Profile;
