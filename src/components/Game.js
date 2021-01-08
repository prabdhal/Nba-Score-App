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
      gameInfos: [{}],
      selectDate: date,
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

  getFormattedDay = (day) => {
    if (day < 10) return "" + 0 + day;
    return day;
  };

  getWeekDay = (day, full) => {
    let weekdayAry = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    if (full) {
      weekdayAry = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
    }

    return weekdayAry[day];
  };

  getMonthDay = (month) => {
    let monthAry = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "Novemeber",
      "December",
    ];

    return monthAry[month];
  };

  getFormattedMonth = (month) => {
    if (month < 10) return "" + 0 + month;
    return month;
  };

  formatDate = (date) => {
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  };

  renderGameDate = (game) => {
    let newDate = "" + game.date;
    let updatedDate = newDate.replace(/-/g, "/").replace(/T.+/, "");
    let gameDate = new Date(updatedDate);

    let date =
      this.getWeekDay(gameDate.getDay(), false) +
      "., " +
      this.getFormattedDay(gameDate.getDate()) +
      "-" +
      this.getFormattedMonth(gameDate.getMonth() + 1);
    return date;
  };

  renderFullDate = (game) => {
    if (game === null || game === undefined) return;
    let newDate = "" + game.date;
    let updatedDate = newDate.replace(/-/g, "/").replace(/T.+/, "");
    let gameDate = new Date(updatedDate);

    let date =
      this.getWeekDay(gameDate.getDay(), true) +
      ", " +
      this.getMonthDay(gameDate.getMonth()) +
      " " +
      this.getFormattedDay(gameDate.getDate() + " " + gameDate.getFullYear());
    return date;
  };

  render() {
    return (
      <div className="center">
        <form className="nba-form" onSubmit={this.handleSubmit}>
          <span>
            <div className="nba-header">Select a date</div>
            <Calender getSelectedDate={this.getSelectedDate} />
          </span>
        </form>

        <main className="games-today center">
          <h3 className="nba-header">
            {this.renderFullDate(this.state.gameInfos[0])}
          </h3>
          {this.state.gameInfos
            .sort((a, b) =>
              this.getGameTime(a) > this.getGameTime(b) ? 1 : -1
            )
            .map((gameInfo) => {
              return (
                <ScoreCard
                  key={gameInfo.id}
                  gameInfo={gameInfo}
                  renderGameDate={this.renderGameDate}
                />
              );
            })}
        </main>
      </div>
    );
  }
}

export default Game;
