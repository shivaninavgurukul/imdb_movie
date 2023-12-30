import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          marginLeft: "10%",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            width: "70%",
            display: "flex",
            justifyContent: "left",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <img src="./logo.png" style={{ height: 60, width: 60 }} />
          <h1 style={{ fontSize: 50, fontWeight: 1000 }}>Movies Hub</h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
            width: "30%",
            alignContent: "center",
          }}
        >
          <h1>Watch</h1>
          <h1>Add Move</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
