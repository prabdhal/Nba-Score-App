import React, { Component } from "react";
import Player from "./components/Player";
import Team from "./components/Team";
import Game from "./components/Game";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHidePlayer: false,
      showHideTeam: false,
      showHideGame: true,
    };
  }

  hideComponent = (name) => {
    console.log(name);
    switch (name) {
      case "showHidePlayer":
        this.setState({
          showHidePlayer: true,
          showHideTeam: false,
          showHideGame: false,
        });
        break;
      case "showHideTeam":
        this.setState({
          showHideTeam: true,
          showHidePlayer: false,
          showHideGame: false,
        });
        break;
      case "showHideGame":
        this.setState({
          showHideGame: true,
          showHidePlayer: false,
          showHideTeam: false,
        });
        break;
      default:
        this.setState({
          showHideGame: true,
          showHidePlayer: false,
          showHideTeam: false,
        });
    }
  };

  render() {
    const { showHidePlayer, showHideTeam, showHideGame } = this.state;
    return (
      <div className="App">
        <nav className="nav">
          <h3 className="nav-logo">Basketball Score App</h3>
          <div className="nav-btns">
            <button
              className="nav-btn"
              onClick={() => this.hideComponent("showHideGame")}
            >
              Game
            </button>
            <button
              className="nav-btn"
              onClick={() => this.hideComponent("showHidePlayer")}
            >
              Player
            </button>
            <button
              className="nav-btn"
              onClick={() => this.hideComponent("showHideTeam")}
            >
              Team
            </button>
          </div>
        </nav>
        {showHidePlayer && <Player />}
        {showHideTeam && <Team />}
        {showHideGame && <Game />}
      </div>
    );
  }
}

export default App;
