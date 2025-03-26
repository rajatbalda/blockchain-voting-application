import React, { useEffect, useState } from "react";
import { StyleRoot } from "radium";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { loadBlockchainData, loadWeb3 } from "../../Helpers/Web3Helpers";
export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    loadWeb3();
  }, []);
  useEffect(() => {
    loadBlockchainData(dispatch);
  }, [dispatch]);
  const account = useSelector((state) => state.account.account);
  const GradBVA = useSelector((state) => state.GradBVA.GradBVA);
  const signUp = async () => {
    setLoading(true);
    if (!username || !email || !password) {
      alert("please fill all details");
      setLoading(false);
      return;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      alert("please enter valid email address");
      setLoading(false);
      return;
    }
    try {
      await GradBVA.methods
        .createUser(username, email, password, "")
        .send({ from: account });
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      setLoading(false);
      navigate("/Login");
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  };
  return (
    <StyleRoot>
      <div style={rootDiv}>
      <div style={leftDiv}>
  <div style={{ textAlign: "center", color: "white" }}>
    <h2>Graduate Seminar Project</h2>
    <p style={{ fontSize: "18px", marginTop: "10px" }}>
      By Rajat Balda
    </p>
    <p style={{ fontSize: "18px", marginTop: "10px" }}>
      Student ID: 1288909
    </p>
  </div>
</div>
        <div style={rightDiv}>

          <div style={inputDiv}>
            <h3 style={{ color: "white", fontSize: 23 }}>SignUp</h3>
            <h3 style={labels}>
              Username <span style={{ color: "red" }}>*</span>
            </h3>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputs}
              placeholder="Username"
              type="text"
            />
            <h3 style={labels}>
              Email <span style={{ color: "red" }}>*</span>
            </h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputs}
              placeholder="Email"
              type="email"
            />
            <h3 style={labels}>
              Password <span style={{ color: "red" }}>*</span>
            </h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputs}
              placeholder="Password"
              type="password"
            />
            <Button onClick={signUp} style={button} variant="contained">
              {loading ? (
                <ReactLoading
                  height={30}
                  width={30}
                  type={"spinningBubbles"}
                  color="white"
                />
              ) : (
                " SignUp"
              )}
            </Button>
            <Button href="/Login" style={create}>
              Already Have an account
            </Button>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}
const rootDiv = {
  backgroundColor: "#17202A",
  display: "flex",
  flex: 1,
  flexDirection: "row",
  height: "100vh",
  "@media (max-width: 500px)": {
    height: "100vh",
  },
};
const leftDiv = {
  backgroundColor: "#17202A",

  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 500px)": {
    height: "100vh",
    display: "none",
  },
};

const rightDiv = {
  backgroundColor: "#17202A",
  height: "100vh",
  flex: 0.8,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  "@media (max-width: 500px)": {
    height: "100vh",
    flex: 1,
  },
};

const inputDiv = {
  width: "80%",
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 500px)": {},
};
const inputs = {
  backgroundColor: "white",
  display: "flex",
  padding: 12,
  borderRadius: 20,
  margin: 5,
  flex: 1,
  fontSize: 17,
  fontWeight: "bold",
  fontColor: "black",
  border: "1px solid grey",
  outline: "none",
  width: "73%",
  "@media (max-width: 500px)": {
    width: "80%",
  },
};
const labels = {
  margin: 5,
  fontWeight: "bold",
  color: "white",
};
const button = {
  width: "78%",
  display: "flex",
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 8,
  marginTop: 15,
  height: 43,
  //backgroundColor: "#8F93EB",
  "@media (max-width: 500px)": {},
};
const create = {
  fontSize: 13,
  fontWeight: "bold",
  //color: "#8F93EB",
  margin: 10,
  "@media (max-width: 500px)": {},
};
