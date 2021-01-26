import React from "react";
import Login from "./components/Login";
import { useImmer } from "use-immer";
import axios from "./utils/axios";

function App() {
  const [user, setUser] = useImmer({
    userName: "",
    mobileNumber: "",
  });

  async function sendSms() {
    console.log("Send Messge");
    await axios.post("/login", {
      to: user.mobileNumber,
      userName: user.userName,
    });
  }
  return (
    <div className="App">
      <Login user={user} setUser={setUser} sendSmsCode={sendSms} />
    </div>
  );
}

export default App;
