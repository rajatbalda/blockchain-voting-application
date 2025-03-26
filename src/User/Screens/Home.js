import React, { useEffect } from "react";
import { StyleRoot } from "radium";
import Button from "@mui/material/Button";
import { loadBlockchainData, loadWeb3 } from "../../Helpers/Web3Helpers";
import { useDispatch } from "react-redux";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    loadWeb3();
  }, []);
  useEffect(() => {
    loadBlockchainData(dispatch);
  }, [dispatch]);
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
          <h1 style={rightTitle}>Blockchain Voting Application</h1>
        
          <div style={buttonsDiv}>
            <Button href="/Login" style={button} variant="contained">
              user login
            </Button>
            <Button href="/AdminLogin" style={button} variant="contained">
              Admin login
            </Button>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}
const rootDiv = {
  backgroundColor: "#17202A",
  height: "100vh",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  flex: 1,
  flexDirection: "row",
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
  display: "flex",
  flexDirection: "column",
  padding: 10,
  flex: 0.5,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#17202A",
  "@media (max-width: 500px)": {
    height: "100vh",
    flex: 1,
  },
};
const rightTitle = {
  color: "white",
  margin: 0,
  padding: 10,
  fontSize: 33,
  fontWeight: "bold",
  "@media (max-width: 500px)": {
    color: "white",
  },
};
// eslint-disable-next-line no-unused-vars
const rightCatption = {
  color: "grey",
  margin: 0,
  padding: 10,
  fontSize: 26,
  fontWeight: "bold",
  "@media (max-width: 500px)": {
    color: "white",
  },
};
const buttonsDiv = {
  display: "flex",
  flexDirection: "row",
};
const button = {
  margin: 10,
};
