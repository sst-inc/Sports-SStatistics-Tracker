import React, { useState, useEffect } from "react";
import "./StartPage.css";
import gapi from 'gapi-client';

const App = () => {
  const [teamAGoalsOnTarget, setTeamAGoalsOnTarget] = useState(0);
  const [teamBGoalsOnTarget, setTeamBGoalsOnTarget] = useState(0);

//state variables 
  const [teamAInterceptions, setTeamAInterceptions] = useState(0);
  const [teamBInterceptions, setTeamBInterceptions] = useState(0);
  const [teamAShotsOnTarget, setTeamAShotsOnTarget] = useState(0);
  const [teamAShotsOffTarget, setTeamAShotsOffTarget] = useState(0);
  const [teamBShotsOnTarget, setTeamBShotsOnTarget] = useState(0);
  const [teamBShotsOffTarget, setTeamBShotsOffTarget] = useState(0);
  const [possessionTeamA, setPossessionTeamA] = useState(0);
  const [possessionTeamB, setPossessionTeamB] = useState(0);
  const [formattedPossessionTeamA, setFormattedPossessionTeamA] = useState("0:00");
  const [formattedPossessionTeamB, setFormattedPossessionTeamB] = useState("0:00");
  const [activeTeam, setActiveTeam] = useState("None");
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [gameTime, setGameTime] = useState(20);
  const [team1Name, setTeam1Name] = useState("A");
  const [team2Name, setTeam2Name] = useState("B");
  const [route, setRoute] = useState('startPage');
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [comments, setComments] = useState("");




  //App functions 

// Function to initialize Google Sheets API and create/update Google Sheets
function generateCSVData() {
  const csvData = [];
  
  // Add headers
  
  // Add team1Name and comments
  csvData.push([team1Name, team1Name, "", comments]);
  
  // Add headers for team stats
  csvData.push(["", "Goals", "Interceptions", "Shots on Target", "Shots off Target", "Formatted Possession Time"]);
  
  // Add Team A stats
  csvData.push([team1Name, teamAGoalsOnTarget, teamAInterceptions, teamAShotsOnTarget, teamAShotsOffTarget, formattedPossessionTeamA]);
  
  // Add Team B stats
  csvData.push([team2Name, teamBGoalsOnTarget, teamBInterceptions, teamBShotsOnTarget, teamBShotsOffTarget, formattedPossessionTeamB]);
  
  // Convert to CSV format
  const csvContent = csvData.map((row) => row.join(",")).join("\n");
  
  return csvContent;
}

function exportToCSV() {
  const csvContent = generateCSVData();
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "game_stats.csv";
  a.click();
  URL.revokeObjectURL(url);
}

const handleDoneButtonClick = () => {
  // Set the route to 'startPage' when the button is clicked
  setRoute('startPage');
};




// Call the initializeAndCreateUpdateGoogleSheets function whenever the button is clicked
// This will initialize the Google Sheets API and create/update a new spreadsheet with the data


  const increment = (setter) => {
    setter((prevCount) => prevCount + 1);
  };
  const handleEnd = () => {
    setIsPaused(true); // Pause the match timer
    setRoute('endPage'); // Replace 'nextPage' with your desired route name
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const startTimer = (team) => {
    setActiveTeam(team);
    setIsRunning(true);
  };

  const stopTimer = () => {
    const totalSeconds = activeTeam === "Team A" ? possessionTeamA + timer : possessionTeamB + timer;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = formatTime(minutes, seconds);

    if (activeTeam === "Team A") {
      setPossessionTeamA(totalSeconds);
      setFormattedPossessionTeamA(formattedTime);
    } else if (activeTeam === "Team B") {
      setPossessionTeamB(totalSeconds);
      setFormattedPossessionTeamB(formattedTime);
    }

    setTimer(0);
    setActiveTeam("None");
    setIsRunning(false);
  };

  // Function to format the time as "1:00"
  const formatTime = (minutes, seconds) => {
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

    const handleGameTimeChange = (event) => {
      setGameTime(parseInt(event.target.value));
    };


    useEffect(() => {
      let interval;
  
      if (!isPaused) {
        interval = setInterval(() => {
          setTotalSeconds(prevTotalSeconds => prevTotalSeconds + 1);
        }, 1000);
      }
  
      return () => clearInterval(interval);
    }, [isPaused]);
  
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
  
    const handleTogglePause = () => {
      setIsPaused(prevIsPaused => !prevIsPaused);
    };
  
    const handleReset = () => {
      setTotalSeconds(0);
      setIsPaused(true);
    };





    
//styles
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
  
    const teamAShotsOnTargetStyle = {
      backgroundColor: "#96c0ff",
      border: "1px solid #000000",
      borderColor: "#000000",
      borderRadius: "16px",
      height: "43px",
      width: "115px",
      position: "absolute",
      top: "416px",
      left: "15px",
    };
    const teamBShotsOnTargetStyle = {
      backgroundColor: "#c05aff",
      border: "1px solid #000000",
      borderColor: "#000000",
      borderRadius: "16px",
      height: "43px",
      width: "115px",
      position: "absolute",
      top: "416px",
      left: "154px",
    };
    
    const teamAShotsOffTargetStyle = {
      backgroundColor: "#96c0ff",
      border: "1px solid #000000",
      borderColor: "#000000",
      borderRadius: "16px",
      height: "43px",
      width: "115px",
      position: "absolute",
      top: "480px",
      left: "15px",
    };
  
    const teamBShotsOffTargetStyle = {
      backgroundColor: "#c05aff",
      border: "1px solid #000000",
      borderColor: "#000000",
      borderRadius: "16px",
      height: "43px",
      width: "115px",
      position: "absolute",
      top: "480px",
      left: "154px",
    };
  
    const teamAPossessionStyle = {
      backgroundColor: "#fcb001",
      border: "1px solid #000000",
      borderRadius: "19px",
      height: "49px",
      left: "15px",
      position: "absolute",
      top: "532px",
      width: "89px"
    };
  
    const teamBPossessionStyle = {
      backgroundColor: "#fcb001",
      border: "1px solid #000000",
      borderRadius: "19px",
      height: "49px",
      left: "183px",
      position: "absolute",
      top: "532px",
      width: "86px"
    };
  
    const stopPossessionStyle = {
      backgroundColor: "#fcb001",
      border: "1px solid #000000",
      borderRadius: "19px",
      height: "55px",
      left: "117px",
      position: "absolute",
      top: "530px",
      width: "55px"
    };
    
    //app pages 
    const generateGameRecordPage = () => {
      return (
      
        <div className="frame">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="div" />
              <div className="rectangle-2" />
              <div className="takeovers-goals">
                Interceptions
                <br />{teamAInterceptions}<br />
                Goals
                <br />{teamAGoalsOnTarget}<br />
                Ball Time
                <br />
                {formattedPossessionTeamB}
              </div>
              <div className="text-wrapper">
                Interceptions
                <br />{teamBInterceptions}<br />
                Goals
                <br />{teamBGoalsOnTarget}<br />
                Ball Time
                <br />
                {formattedPossessionTeamA}
              </div>
              <div className="text-wrapper-2">{team1Name}</div>
              <div className="text-wrapper-3">{team2Name}</div>
              <button style={stopPossessionStyle} onClick={stopTimer}></button>
              <button style={teamAPossessionStyle} onClick={() => startTimer("Team B")} />
              <button style={teamBPossessionStyle} onClick={() => startTimer("Team A")} />
              <div>
                  <button style={teamAInterceptStyle} onClick={() => increment(setTeamAInterceptions)}>
                    +1 Intercept
                  </button>
                </div>
                <div>
                  <button  style= {teamBInterceptStyle} onClick={() => increment(setTeamBInterceptions)}>
                    +1 Intercept
                  </button>
                </div>          
                <div>
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
              <button style= {teamAShotsOnTargetStyle} onClick={() => increment(setTeamAShotsOnTarget)}>+1 Shot on target</button>         
              <button style ={teamAShotsOffTargetStyle} onClick={() => increment(setTeamAShotsOffTarget)}>+1 shot off target</button>
              <button style={teamBShotsOnTargetStyle} onClick={() => increment(setTeamBShotsOnTarget)}>+1 Shot on Target</button>
              <button style={teamBShotsOffTargetStyle} onClick={() => increment(setTeamBShotsOffTarget)}>+1 Shot off Target</button>
              <div className="element-shot-on-target">
              </div>
              <div className="rectangle-14" />
              <div className="rectangle-15" />
              <img className="polygon" alt="Polygon" src="polygon-1.svg" />
              <img className="img" alt="Polygon" src="polygon-2.svg" />
              <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              style={{
                backgroundColor: '#b4b4b4',
                border: '1px solid #000000',
                borderRadius: '15px',
                height: '36px',
                width: '110px', // Adjusted width
                color: '#000000',
                cursor: 'pointer',
                marginRight: '50px',
              }}
              onClick={handleTogglePause}
            >
              {isPaused ? `Start (${minutes}:${seconds.toString().padStart(2, '0')})` : `Pause (${minutes}:${seconds.toString().padStart(2, '0')})`}
            </button>
            <button
              style={{
                backgroundColor: '#ff0000',
                border: '1px solid #000000',
                borderRadius: '19px',
                height: '45px',
                width: '58px',
                color: '#000000',
                cursor: 'pointer',
                marginLeft: '50px',
              }}
              onClick={handleReset}
            >
                Reset
              </button>
              <button
            style={{
              backgroundColor: '#ff0000',
              border: '1px solid #000000',
              borderRadius: '19px',
              height: '45px',
              width: '58px',
              color: '#000000',
              cursor: 'pointer',
              marginLeft: '10px', // Adjust the margin as needed
            }}
            onClick={handleEnd}
          >
            End
          </button>
            
              </div>
            </div>
          </div>
        </div>
      );
    }

    const generateStartPage = () => {
      return (
        <div className="android-small">
          <div className="div">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="text-wrapper">Creating Game</div>
              <div className="team-name">
                Team 1 Name
                <br />
                <input
                  type="text"
                  id="Team1Name"
                  value={team1Name}
                  onChange={(e) => setTeam1Name(e.target.value)}
                  placeholder=""
                />
              </div>
              <div className="game-time">
                Game Time
                <br />
                <input
                  type="range"
                  min="0"
                  max="60"
                  step="1"
                  className="slider"
                  value={gameTime}
                  onChange={handleGameTimeChange}
                />
                <br />
                <span className="slider-value">{gameTime}:00</span>
              </div>
              <div className="team-name-2">
                Team 2 Name
                <br />
                <input
                  type="text"
                  id="Team2Name"
                  value={team2Name}
                  onChange={(e) => setTeam2Name(e.target.value)}
                  placeholder=""
                />
              </div>
              <div className="rectangle-4" />
            </div>
            <div className="button-container">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <button onClick={() => setRoute('gameRecord')} className="yellow-button">Start</button>
            </div>
          </div>
        </div>
      );
    };
  
    const generateEndGame = () => {
      return (
        <div className="end-game">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="div" />
                    <div className="text-wrapper">End Game Statistics</div>
                    <div className="comments-xiao-ming">
                        <input
                          type="text"
                          id="comments"
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                          placeholder="Enter your comments"
                    />
                    </div>
                    <div className="rectangle-2" />
                    <div className="rectangle-3" />
                    <div className="takeovers-goals">
                        Interceptions
                        <br />{teamAInterceptions}<br />
                        Goals
                        <br />{teamAGoalsOnTarget}<br />
                        Ball Time
                        <br />
                        {formattedPossessionTeamA}
                    </div>
                    <div className="takeovers-goals-2">
                        Interceptions
                        <br />{teamBInterceptions}<br />
                        Goals
                        <br />{teamBGoalsOnTarget}<br />
                        Ball Time
                        <br />
                        {formattedPossessionTeamB}
                    </div>
                    <div className="text-wrapper-2">{team1Name}</div>
                    <div className="text-wrapper-3">{team2Name}</div>
                    <div className="rectangle-4" />
                    <button className="rectangle-5" onClick={exportToCSV}>
                      Export to Spreadsheet
                    </button>
                    <div className="text-wrapper-5">
                      <button onClick={handleDoneButtonClick}>
                        Done
                      </button>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

//goofy manual routing 
    const renderComponent = () => {
      switch (route) {
        case 'startPage':
          return generateStartPage();
        case 'gameRecord':
          return generateGameRecordPage();
        case 'endPage':
          return generateEndGame();
        default:
          return null;
      }
    };

    return (
      <div>
        {renderComponent()}
      </div>
    );

    };

    export default App;