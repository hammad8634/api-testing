import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const tokenstring = localStorage.getItem("user");
  const usertoken = JSON.parse(tokenstring).token;
  // const [fname, setFName] = useState("");
  const [respData, setRespData] = useState("");
  let response;
  let responseData;

  console.log("usertoken: ", usertoken);
  console.log(`user ${usertoken}`);
  // console.log(usertoken.data);

  async function getprofile() {
    try {
      response = await axios
        .get("https://massab-hammad.herokuapp.com/api1/users/getme", {
          headers: { Authorization: `Bearer ${usertoken}` },
        })
        .then();
      // responseData = await response.json();
      // setRespData(responseData.data.data);
    } catch (err) {
      console.log("profile error: ", err);
    }
  }
  console.log("Resp: ", response);
  useEffect(() => {
    getprofile();
  });
  return (
    <>
      <div>
        <p>{respData.name}</p>
      </div>
      ;
    </>
  );
};

export default Profile;
