import React, { Component } from "react";
import axios from "axios";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerInfo: {},
      playerTeamInfo: {},
      playerName: null,
      season: "2020",
      playerStats: {},
      activePlayersId: [{}],
      activePlayersStats: [{}],
    };
  }

  // finds player when form is submitted
  handleSubmit = (e) => {
    e.preventDefault();
    this.getPlayerId();
  };

  // handles player name via input
  handleChange = (event) => {
    const replace = event.target.value;
    if (replace.length > 0) {
      this.setState({ playerName: replace });
    } else {
      alert("Please type player name!");
    }
  };

  // handles player season via dropdown
  handleSelect = (event) => {
    const year = event.target.value;
    this.setState({ season: year });
  };

  getPlayerId = () => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`
      )
      .then(async (res) => {
        // find player based on the inputted name
        if (res.data.data[0] === undefined) {
          alert(
            `This player did not exist during the ${this.state.season} season!`
          );
        } else if (res.data.data.length > 1) {
          alert("Please specify the name more!");
        } else {
          await this.getPlayerStats(res.data.data[0].id);
          await this.setState({ playerInfo: res.data.data[0] });
          await this.setState({
            activePlayers: this.state.activePlayersId.push(res.data.data["0"]),
          });
          console.log(this.state.activePlayers);
          // get the players full name
          this.state.playerName =
            res.data.data[0].first_name + " " + res.data.data[0].last_name;
          this.state.playerTeamInfo = res.data.data[0].team;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getPlayerStats = (playerId) => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?season=${this.state.season}&player_ids[]=${playerId}`
      )
      .then(async (res) => {
        console.log(res.data.data[0]);
        if (res.data.data[0].season === undefined) return;
        else {
          await this.setState({ playerStats: res.data.data[0] });
          await this.setState({
            activePlayers: this.state.activePlayersStats.concat(
              res.data.data[0].id
            ),
          });
        }
      })
      .catch((err) => {
        console.log(err);
        alert(
          `${this.state.playerName} was not active during the ${this.state.season} season`
        );
      });
  };

  renderName = (playerId) => {
    if (playerId.first_name === undefined) return "-";
    else {
      return playerId.first_name + " " + playerId["last_name"];
    }
  };

  renderTeam = (playerId) => {
    if (playerId.team === undefined) return null;
    return playerId.team.abbreviation;
  };

  renderSeason = (playerStats) => {
    console.log(playerStats.season);
    if (isNaN(parseInt(playerStats.season))) return "-";

    return playerStats.season + " - " + (parseInt(playerStats.season) + 1);
  };

  renderGamesPlayed = (playerStats) => {
    if (isNaN(parseFloat(playerStats.games_played))) return "-";

    return (playerStats.games_played * 100).toFixed(1);
  };

  renderMinutes = (playerStats) => {
    if (isNaN(parseFloat(playerStats.min))) return "-";

    return (playerStats.min * 100).toFixed(1);
  };

  renderPoints = (playerStats) => {
    if (isNaN(parseFloat(playerStats.pts))) return "-";

    return (playerStats.pts * 1).toFixed(1);
  };

  renderRebounds = (playerStats) => {
    if (isNaN(parseFloat(playerStats.reb))) return "-";

    return (playerStats.reb * 1).toFixed(1);
  };

  renderAssists = (playerStats) => {
    if (isNaN(parseFloat(playerStats.ast))) return "-";

    return (playerStats.ast * 1).toFixed(1);
  };

  renderSteals = (playerStats) => {
    if (isNaN(parseFloat(playerStats.stl))) return "-";

    return (playerStats.stl * 1).toFixed(1);
  };

  renderBlocks = (playerStats) => {
    if (isNaN(parseFloat(playerStats.blk))) return "-";

    return (playerStats.blk * 1).toFixed(1);
  };

  renderTurnovers = (playerStats) => {
    if (isNaN(parseFloat(playerStats.turnover))) return "-";

    return (playerStats.turnover * 1).toFixed(1);
  };

  renderFieldGoal = (playerStats) => {
    if (isNaN(parseFloat(playerStats.fg_pct))) return "-";

    return (playerStats.fg_pct * 100).toFixed(1);
  };

  renderThreePoint = (playerStats) => {
    if (isNaN(parseFloat(playerStats.fg3_pct))) return "-";

    return (playerStats.fg3_pct * 100).toFixed(1);
  };

  renderFreethrow = (playerStats) => {
    if (isNaN(parseFloat(playerStats.ft_pct))) return "-";

    return (playerStats.ft_pct * 100).toFixed(1);
  };

  render() {
    return (
      <div className="center">
        <form onSubmit={this.handleSubmit}>
          <span>
            <input
              required
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Enter Player Name..."
              name="player"
              id="player"
            ></input>
            <select
              required
              id="season"
              className="select-box"
              defaultValue="2020"
              onChange={this.handleSelect}
            >
              <option value="1979">1979</option>
              <option value="1980">1980</option>
              <option value="1981">1981</option>
              <option value="1982">1982</option>
              <option value="1983">1983</option>
              <option value="1984">1984</option>
              <option value="1985">1985</option>
              <option value="1986">1986</option>
              <option value="1987">1987</option>
              <option value="1988">1988</option>
              <option value="1989">1989</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>
            <button className="btn">Submit</button>
          </span>
        </form>

        {this.state.activePlayersId.map((playerId, index) => {
          let playerStats = this.state.activePlayersStats[index];
          <div key={playerId.id} className="player-container">
            <div className="player-information-container">
              <h4 className="player-name-text">{this.renderName(playerId)}</h4>
              <span>
                <h5 className="player-information-text">
                  Position: {this.state.playerInfo.position} | Team:{" "}
                  {this.renderTeam(playerId)}
                </h5>
              </span>
            </div>

            <div key={playerStats.id} className="basic-stats">
              <div className="stat-container">
                <h5 className="basic-stats-header">SEASON</h5>
                {this.renderSeason(playerStats)}
              </div>
              <div className="stat-container">
                <h5 className="basic-stats-header">GP</h5>{" "}
                {this.renderGamesPlayed(playerStats)}
              </div>
              <div className="stat-container">
                <h5 className="basic-stats-header">MIN</h5>{" "}
                {this.renderMinutes(playerStats)}
              </div>
              <div className="stat-container">
                <h5 className="basic-stats-header">PPG</h5>{" "}
                {this.renderPoints(playerStats)}
              </div>
              <div className="stat-container">
                <h5 className="basic-stats-header">RPG</h5>{" "}
                {this.renderRebounds(playerStats)}
              </div>
              <div className="stat-container">
                {" "}
                <h5 className="basic-stats-header">APG</h5>{" "}
                {this.renderAssists(playerStats)}
              </div>
              <div className="stat-container">
                {" "}
                <h5 className="basic-stats-header">SPG</h5>{" "}
                {this.renderSteals(playerStats)}
              </div>
              <div className="stat-container">
                <h5 className="basic-stats-header">BPG</h5>{" "}
                {this.renderBlocks(playerStats)}
              </div>
              <div className="stat-container">
                <h5 className="basic-stats-header">TOs</h5>{" "}
                {this.renderTurnovers(playerStats)}
              </div>
              <div className="stat-container">
                <h5 className="basic-stats-header">FG%</h5>{" "}
                {this.renderFieldGoal(playerStats)}
              </div>
              <div className="stat-container">
                {" "}
                <h5 className="basic-stats-header">3PT%</h5>{" "}
                {this.renderThreePoint(playerStats)}
              </div>
              <div className="stat-container">
                <h5 className="basic-stats-header">FT%</h5>{" "}
                {this.renderFreethrow(playerStats)}
              </div>
            </div>
          </div>;
        })}
      </div>
    );
  }
}

export default Player;
