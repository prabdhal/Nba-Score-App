import React, { Component } from "react";
import Player from "./components/Player";
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
    if (name === "showHidePlayer") {
      this.setState({
        showHidePlayer: true,
        showHideGame: false,
      });
    } else {
      this.setState({
        showHideGame: true,
        showHidePlayer: false,
      });
    }
  };

  toggleBtn = (state) => {
    let classes = "nba-nav-btn ";
    if (state === false) return classes;
    return classes + "selected";
  };

  render() {
    const { showHidePlayer, showHideTeam, showHideGame } = this.state;
    return (
      <div className="App">
        <nav className="nba-nav">
          <h3 className="nba-logo">Basketball Score App</h3>
          <div className="nba-nav-btns">
            <button
              className={this.toggleBtn(this.state.showHideGame)}
              onClick={() => this.hideComponent("showHideGame")}
            >
              Games
            </button>
            <button
              className={this.toggleBtn(this.state.showHidePlayer)}
              onClick={() => this.hideComponent("showHidePlayer")}
            >
              Players
            </button>
          </div>
        </nav>

        {showHideGame && <Game />}
        {showHidePlayer && <Player />}
      </div>
    );
  }
}

export default App;
