import React from "react";
import "./GameRecord.css";
import PossessionTracker from "./Components/PossessionTracker"
import MatchTimer from "./Components/MatchTimer"
import Notetaking from "./Components/Notetaking"
import ShotsTracker from "./Components/ShotsTracker"

const GameRecord = () => {
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
            <br />0<br />
            Ball Time
            <br />
            1:43
          </div>
          <div className="text-wrapper">
            Takeovers
            <br />3<br />
            Goals
            <br />1<br />
            Ball Time
            <br />
            1:79
          </div>
          <div className="text-wrapper-2">Team C</div>
          <div className="text-wrapper-3">Team A</div>
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="rectangle-6" />
          <div className="rectangle-7" />
          <div className="rectangle-8" />
          <div className="text-wrapper-4">+1 Goal</div>
          <div className="rectangle-9" />
          <div className="rectangle-10" />
          <div className="rectangle-11" />
          <div className="rectangle-12" />
          <div className="rectangle-13" />
          <div className="text-wrapper-5">+1 Interceptions</div>
          <div className="text-wrapper-6">+1 Interceptions</div>
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
          <div className="text-wrapper-9">+1 Goal</div>

          {/* Insert the MatchTimer component here */}
          <MatchTimer />
          
        </div>
      </div>
    </div>
  );
};

export default GameRecord;
