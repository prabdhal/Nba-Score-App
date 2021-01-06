import React, { Component } from "react";
import axios from "axios";
import Calender from "./Calender";

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
      gameId: "7",
      gameInfos: [{}],
      homeTeams: {},
      homeTeamScores: {},
      awayTeams: {},
      awayTeamScores: {},
      selectDate: date,
    };
  }

  // finds player when form is submitted
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

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

  formatDate = (date) => {
    var newDate = new Date();
    return (newDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
  };

  getFormattedDay = (day) => {
    if (day < 10) return "" + 0 + day;
    return day;
  };

  getWeekDay = (day) => {
    const weekdayAry = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

    return weekdayAry[day];
  };

  getFormattedMonth = (month) => {
    if (month < 10) return "" + 0 + month;
    return month;
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

  renderDate = (game) => {
    let gameDate = new Date(game.date);

    console.log(gameDate);

    let date =
      this.getWeekDay(gameDate.getDay()) +
      "., " +
      this.getFormattedDay(gameDate.getDate()) +
      "-" +
      this.getFormattedMonth(gameDate.getMonth() + 1);
    return date;
  };

  renderScore = (game, isHome) => {
    if (game.period === 0) return null;
    else if (isHome) return game.home_team_score;
    else return game.visitor_team_score;
  };

  renderPostSeason = (game) => {
    console.log(game.id);
    if (game.id === null || game.is === undefined) return null;
    if (game.postseason) return "Playoffs";
    return "Regular";
  };

  renderTeamCity = (game, isHome) => {
    if (isHome) {
      if (game.home_team === null || game.home_team === undefined) return null;
      return game.home_team.city;
    } else if (!isHome) {
      if (game.visitor_team === null || game.visitor_team === undefined)
        return null;
      return game.visitor_team.city;
    }
  };

  renderTeamName = (game, isHome) => {
    if (isHome) {
      if (game.home_team === null || game.home_team === undefined) return null;
      return game.home_team.name;
    } else if (!isHome) {
      if (game.visitor_team === null || game.visitor_team === undefined)
        return null;
      return game.visitor_team.name;
    }
  };

  renderLogo = (game, isHome) => {
    let classes = "team-logo ";
    switch (this.renderTeamName(game, isHome)) {
      case "Hawks":
        return (classes += "hawks");
        break;
      case "Celtics":
        return (classes += "celtics");
        break;
      case "Nets":
        return (classes += "nets");
        break;
      case "Hornets":
        return (classes += "hornets");
        break;
      case "Bulls":
        return (classes += "bulls");
        break;
      case "Cavaliers":
        return (classes += "cavaliers");
        break;
      case "Mavericks":
        return (classes += "mavericks");
        break;
      case "Nuggets":
        return (classes += "nuggets");
        break;
      case "Pistons":
        return (classes += "pistons");
        break;
      case "Warriors":
        return (classes += "warriors");
        break;
      case "Rockets":
        return (classes += "rockets");
        break;
      case "Pacers":
        return (classes += "pacers");
        break;
      case "Clippers":
        return (classes += "clippers");
        break;
      case "Lakers":
        return (classes += "lakers");
        break;
      case "Grizzlies":
        return (classes += "grizzlies");
        break;
      case "Heat":
        return (classes += "heat");
        break;
      case "Bucks":
        return (classes += "bucks");
        break;
      case "Timberwolves":
        return (classes += "timberwolves");
        break;
      case "Pelicans":
        return (classes += "pelicans");
        break;
      case "Knicks":
        return (classes += "knicks");
        break;
      case "Thunder":
        return (classes += "thunder");
        break;
      case "Magic":
        return (classes += "magic");
        break;
      case "76ers":
        return (classes += "sixers");
        break;
      case "Suns":
        return (classes += "suns");
        break;
      case "Kings":
        return (classes += "kings");
        break;
      case "Spurs":
        return (classes += "spurs");
        break;
      case "Raptors":
        return (classes += "raptors");
        break;
      case "Jazz":
        return (classes += "jazz");
        break;
      case "Wizards":
        return (classes += "wizards");
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="center">
        <form onSubmit={this.handleSubmit}>
          <span>
            <Calender getSelectedDate={this.getSelectedDate} />
            <button className="btn">Submit</button>
          </span>
        </form>

        <main className="games-today center">
          {this.state.gameInfos
            .sort((a, b) =>
              this.getGameTime(a) > this.getGameTime(b) ? 1 : -1
            )
            .map((gameInfo) => (
              <div key={gameInfo.id} className="game-block">
                <div className="team-score-block">
                  <div>
                    <div className={this.renderLogo(gameInfo, false)}></div>
                    <h2 className="team-name-text">
                      {this.renderTeamName(gameInfo, false)}
                    </h2>
                  </div>
                  <div className="team-score">
                    <h4>{this.renderScore(gameInfo, false)}</h4>
                  </div>
                </div>
                <div className="game-status">
                  <div>{this.renderDate(gameInfo)}</div>
                  <div>{gameInfo.status}</div>
                  <div>{this.renderPostSeason(gameInfo)}</div>
                  <div>{gameInfo.time}</div>
                </div>
                <div className="team-score-block">
                  <div>
                    <div className={this.renderLogo(gameInfo, true)}></div>
                    <h2 className="team-name-text">
                      {this.renderTeamName(gameInfo, true)}
                    </h2>
                  </div>
                  <div className="team-score">
                    <h4>{this.renderScore(gameInfo, true)}</h4>
                  </div>
                </div>
              </div>
            ))}
        </main>
      </div>
    );
  }
}

export default Game;
