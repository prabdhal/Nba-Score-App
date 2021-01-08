import React, { Component } from "react";
import axios from "axios";
import Calender from "./Calender";
import ScoreCard from "./ScoreCard";

class Game extends Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    this.state = {
      season: "2020",
      playerStats: {},
      gameId: {},
      gameInfos: [{}],
      homeTeams: {},
      homeTeamScores: {},
      awayTeams: {},
      awayTeamScores: {},
      selectDate: date,
      time: Date.now(),
    };
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }, () => this.getGames()),
      60000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getGames = () => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/games?start_date=${this.state.selectDate}&end_date=${this.state.selectDate}`
      )
      .then(async (res) => {
        console.log(res.data.data);
        console.log(res.data.data.home_team);
        console.log(res.data.data.visitor_team);
        await this.setState({ gameInfos: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getSelectedDate = (selectedDate) => {
    let newDate = this.formatDate(selectedDate);
    this.setState({ selectDate: newDate }, () => this.getGames());
  };

  getGameTime = (game) => {
    // game order doesnt matter if game in finished
    if (game.status === "Final") return;

    // game has started so use period to check most recent game
    // display older games before recent games
    if (game.period !== 0) return -parseInt(game.period);

    // game has not started so status is in time format
    let timeStringAry = ("" + game.status).split(" ");
    let timeFloatAry = timeStringAry[0].split(":");

    let time = "" + timeFloatAry[0] + timeFloatAry[1];

    return parseFloat(time);
  };

  formatDate = (date) => {
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  };

  render() {
    return (
      <div className="center">
        <form onSubmit={this.handleSubmit}>
          <span>
            <div>Select a date</div>
            <Calender getSelectedDate={this.getSelectedDate} />
          </span>
        </form>

        <main className="games-today center">
          {this.state.gameInfos
            .sort((a, b) =>
              this.getGameTime(a) > this.getGameTime(b) ? 1 : -1
            )
            .map((gameInfo) => {
              return <ScoreCard key={gameInfo.id} gameInfo={gameInfo} />;
            })}
        </main>
      </div>
    );
  }
}

export default Game;
