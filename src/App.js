/** @jsx jsx */
import React from "react";
import { ReactComponent as Octagon } from "./octagon.svg";
import { jsx } from "@emotion/core";

function App() {
  const [info, SetInfo] = React.useState("ALTO EN");

  function handleChange(event) {
    SetInfo(event.target.value);
  }

  const styleAppContainer = {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "90vh",
    maxWidth: "600px",
    margin: "0 auto"
  };

  const styleTitle = {
    textAlign: "center"
  };

  const styleOctagonContainer = {
    position: "relative",
    width: "80%"
  };

  const styleContainerSVG = {};

  const styleTextContainer = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "9vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    flexDirection: "column",
    lineHeight: "1.2em",
    "@media (min-width: 600px)": {
      fontSize: "55px"
    }
  };

  const styleText = {
    margin: "1.2em"
  };

  const styleTextArea = {
    marginTop: "2em",
    width: "50%",
    height: "50px",
    resize: "none",
    outline: "none",
    textAlign: "center",
    borderStyle: "none",
    border: "2px solid black",
    padding: "1em",
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      borderRadius: "10px",
      backgroundColor: "#F5F5F5"
    },
    "&::-webkit-scrollbar": {
      width: "12px",
      backgroundColor: "#F5F5F5"
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      boxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
      backgroundColor: "#000"
    }
  };

  const styleFooter = {
    fontSize: "1.3em"
  };

  const styleLinks = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer"
  };

  return (
    <div css={styleAppContainer}>
      <h1 css={styleTitle}>OCTAGONAL WARNING</h1>
      <div css={styleOctagonContainer}>
        <div css={styleContainerSVG}>
          <Octagon />
        </div>
        <div css={styleTextContainer}>
          <p css={styleText}>{info.toUpperCase()}</p>
        </div>
      </div>
      <textarea
        type="text"
        name="info"
        id="info"
        onChange={handleChange}
        value={info}
        css={styleTextArea}
        placeholder="The text inside the octagone goes here"
      />
      <div css={styleFooter}>
        <span>
          Created by{" "}
          <a
            href="https://twitter.com/cristianbgp"
            target="blank"
            rel="noopener"
            css={styleLinks}
          >
            @cristianbgp
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
