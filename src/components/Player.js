import React, { Component } from "react";
import axios from "axios";
import PlayerBaseInfo from "./PlayerBaseInfo";
import SeasonAverages from "./SeasonAverages";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedPlayers: [],
      playerName: null,
      season: "2020",
      activePlayersList: [],
    };
  }

  // gets player id when form is submitted
  handleSubmit = (e) => {
    e.preventDefault();
    const names = e.target[0].value;
    console.log(names);
    this.getPlayerInformation();
    e.target[0].value = null;
  };

  // handles player name via input
  handleChange = (event) => {
    const replace = event.target.value;
    if (replace.length > 0) {
      this.setState({ playerName: replace });
    }
  };

  // handles player season via dropdown
  handleSelect = (event) => {
    const year = event.target.value;
    this.setState({ season: year });
    console.log(year + " State Year: " + this.state.season);
  };

  getPlayerInformation = () => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`
      )
      .then(async (res) => {
        // get all neccessary player data
        let data = res.data.data;
        let newPlayerId = res.data.data[0].id;
        if (this.checkPlayerExistenceInList(newPlayerId)) return;
        let newPlayerInfo = res.data.data[0];
        await this.getPlayerSeasonAverages(newPlayerId)
          .then((res) => {
            if (newPlayerInfo === undefined) {
              alert(
                `This player did not exist during the ${this.state.season} season!`
              );
            } else if (data.length > 1) {
              alert("Please specify the name more!");
            } else {
              if (res === null) return;

              return this.addPlayerToList(newPlayerId, newPlayerInfo, res);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        return alert(
          `This player did not exist during the ${this.state.season} season!`
        );
        console.log(err);
      });
  };

  checkPlayerExistenceInList = (id) => {
    let playerExists = false;
    this.state.activePlayersList.find((player) => {
      if (player.id === id && "" + player.stats.season === this.state.season) {
        playerExists = true;
      }
    });
    if (playerExists) return true;
    return false;
  };

  getPlayerSeasonAverages = (playerId) => {
    return axios
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?season=${this.state.season}&player_ids[]=${playerId}&postseason=false`
      )
      .then((res) => {
        console.log(res.data.data[0]);
        if (res.data.data[0].season === undefined) return;
        else {
          return res.data.data[0];
        }
      })
      .catch((err) => {
        console.log(err);
        alert(
          `${this.state.playerName} was not active during the ${this.state.season} season`
        );
        return null;
      });
  };

  addPlayerToList = (playerId, playerInfo, seasonAverages) => {
    // filter out duplicates
    const newPlayersList = [...this.state.activePlayersList];
    this.setState({
      activePlayersList: [
        ...newPlayersList,
        { id: playerId, info: playerInfo, averages: seasonAverages },
      ],
    });
  };

  removePlayerFromList = (id, season) => {
    const newPlayerList = [...this.state.activePlayersList].filter(
      (player) => player.id !== id
    );

    this.setState({ activePlayersList: newPlayerList });
  };

  render() {
    return (
      <div className="center">
        <form className="nba-form" onSubmit={this.handleSubmit}>
          <span>
            <div className="nba-header">Compare Player Stats</div>
            <input
              className="nba-input"
              required
              type="text"
              value={this.state.value}
              autoComplete="off"
              onChange={this.handleChange}
              placeholder="Enter Player Name..."
              name="player"
              id="player"
            ></input>
            <button className="nba-btn">Submit</button>
          </span>
        </form>

        <div className="player-container">
          {this.state.activePlayersList.map((player) => {
            return (
              <React.Fragment>
                {console.log(player)}
                <PlayerBaseInfo
                  key={player.id}
                  player={player}
                  removePlayerFromList={this.removePlayerFromList}
                />
                <div className="basic-stats">
                  <SeasonAverages key={player.id} player={player} />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Player;
