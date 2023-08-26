import React, { useState } from "react";
import "./GameRecord.css";
import MatchTimer from "./Components/MatchTimer";

const GameRecord = () => {
  const [teamAGoalsOnTarget, setTeamAGoalsOnTarget] = useState(0);
  const [teamBGoalsOnTarget, setTeamBGoalsOnTarget] = useState(0);

  const increment = (setter) => {
    setter((prevCount) => prevCount + 1);
  };

  const [teamAInterceptions, setTeamAInterceptions] = useState(0);
  const [teamBInterceptions, setTeamBInterceptions] = useState(0);


  const teamAGoalStyle = {
    backgroundColor: "#96c0ff",
    border: "1px solid #000000",
    borderColor: "#000000",
    borderRadius: "16px",
    height: "43px",
    width: "115px",
    position: "absolute",
    top: "304px",
    left: "13px",
    color: "#000000",
    cursor: "pointer",
  };

  const teamBGoalStyle = {
    backgroundColor: "#c05aff",
    border: "1px solid #000000",
    borderColor: "#000000",
    borderRadius: "16px",
    height: "43px",
    width: "115px",
    position: "absolute",
    top: "306px",
    left: "154px",
    color: "#000000",
    cursor: "pointer",
  };
  
  const teamAInterceptStyle = {
    backgroundColor: "#96c0ff",
    border: "1px solid",
    borderColor: "#000000",
    borderRadius: "16px",
    height: "43px",
    left: "13px",
    position: "absolute",
    top: "360px",
    width: "115px",
  };

  const teamBInterceptStyle = {
    backgroundColor: "#c05aff",
    border: "1px solid #000000",
    borderColor: "#000000",
    borderRadius: "16px",
    height: "43px",
    width: "115px",
    position: "absolute",
    top: "361px",
    left: "154px",
  };
  

  console.log( setTeamBInterceptions)
  

  return (
    
    <div className="frame">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="div" />
          <div className="rectangle-2" />
          <div className="takeovers-goals">
            Takeovers
            <br />2<br />
            Goals
            <br />{teamAGoalsOnTarget}<br />
            Ball Time
            <br />
            1:43
          </div>
          <div className="text-wrapper">
            Takeovers
            <br />3<br />
            Goals
            <br />{teamBGoalsOnTarget}<br />
            Ball Time
            <br />
            1:79
          </div>
          <div className="text-wrapper-2">Team C</div>
          <div className="text-wrapper-3">Team A</div>
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div>
              <button style={teamAInterceptStyle} onClick={() => increment(setTeamAInterceptions)}>
                +1 Intercept
              </button>
            </div>
            <div>
              <button  style= {teamBInterceptStyle} onClick={() => increment(setTeamBInterceptions)}>
                +1 Intercept
              </button>
            </div>          <div>
            <div>
              <button style={teamAGoalStyle} onClick={() => increment(setTeamAGoalsOnTarget)}>
                +1 Goal
              </button>
            </div>
            <div>
              <button style={teamBGoalStyle} onClick={() => increment(setTeamBGoalsOnTarget)}>
                +1 Goal
              </button>
            </div>
          </div>
          <div className="rectangle-10" />
          <div className="rectangle-11" />
          <div className="rectangle-12" />
          <div className="rectangle-13" />
          <div className="element-shot-on-target">
            +1 Shot on
            <br />
            target
          </div>
          <div className="text-wrapper-7">+1 Shot off <br/>target</div>
          <div className="text-wrapper-8">+1 Shot off target</div>
          <div className="element-shot-on-target-2">
            +1 Shot on
            <br />
            target
          </div>
          <div className="rectangle-14" />
          <div className="rectangle-15" />
          <img className="polygon" alt="Polygon" src="polygon-1.svg" />
          <img className="img" alt="Polygon" src="polygon-2.svg" />

          {/* Insert the MatchTimer component here */}
          <MatchTimer />
          
        </div>
      </div>
    </div>
  );
};

export default GameRecord;
