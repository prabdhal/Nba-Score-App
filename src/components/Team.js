import React, { Component } from "react";
import axios from "axios";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [{}],
      season: "2020",
      teamId: null,
      teamName: null,
      teamInfo: {},
      totalPages: 60,
    };
  }

  // finds player when form is submitted
  handleSubmit = async (e) => {
    e.preventDefault();
    this.getTeamId();
  };

  // handles player name via input
  handleChange = async (event) => {
    const name = event.target.value;

    if (name.length > 0) {
      await this.setState({ teamName: name.toLowerCase() });
    } else {
      alert("Please type team name!");
    }
  };

  getTeamId = () => {
    //get team id from team name via switch statements
    console.log(this.state.teamName);
    if (
      this.state.teamName === "atlanta" ||
      this.state.teamName === "hawks" ||
      this.state.teamName === "atl" ||
      this.state.teamName === "atlanta hawks"
    ) {
      this.state.teamId = 1;
    }

    if (
      this.state.teamName === "boston" ||
      this.state.teamName === "celtics" ||
      this.state.teamName === "bos" ||
      this.state.teamName === "boston celtics"
    ) {
      this.state.teamId = 2;
    }

    if (
      this.state.teamName === "brooklyn" ||
      this.state.teamName === "nets" ||
      this.state.teamName === "bkn" ||
      this.state.teamName === "brooklyn nets"
    ) {
      this.state.teamId = 3;
    }

    if (
      this.state.teamName === "charlotte" ||
      this.state.teamName === "hornets" ||
      this.state.teamName === "cha" ||
      this.state.teamName === "charlotte hornets"
    ) {
      this.state.teamId = 4;
    }

    if (
      this.state.teamName === "chicago" ||
      this.state.teamName === "bulls" ||
      this.state.teamName === "chi" ||
      this.state.teamName === "chicago bulls"
    ) {
      this.state.teamId = 5;
    }

    if (
      this.state.teamName === "cleveland" ||
      this.state.teamName === "cavaliers" ||
      this.state.teamName === "cle" ||
      this.state.teamName === "cleveland cavaliers"
    ) {
      this.state.teamId = 6;
    }

    if (
      this.state.teamName === "dallas" ||
      this.state.teamName === "mavericks" ||
      this.state.teamName === "dal" ||
      this.state.teamName === "dallas mavericks"
    ) {
      this.state.teamId = 7;
    }

    if (
      this.state.teamName === "denver" ||
      this.state.teamName === "nuggets" ||
      this.state.teamName === "den" ||
      this.state.teamName === "denver nuggets"
    ) {
      this.state.teamId = 8;
    }

    if (
      this.state.teamName === "detroit" ||
      this.state.teamName === "pistons" ||
      this.state.teamName === "det" ||
      this.state.teamName === "detroit pistons"
    ) {
      this.state.teamId = 9;
    }

    if (
      this.state.teamName === "golden state" ||
      this.state.teamName === "warriors" ||
      this.state.teamName === "gsw" ||
      this.state.teamName === "golden state warriors"
    ) {
      this.state.teamId = 10;
    }

    if (
      this.state.teamName === "houston" ||
      this.state.teamName === "rockets" ||
      this.state.teamName === "hou" ||
      this.state.teamName === "houston rockets"
    ) {
      this.state.teamId = 11;
    }

    if (
      this.state.teamName === "indiana" ||
      this.state.teamName === "pacers" ||
      this.state.teamName === "ind" ||
      this.state.teamName === "indiana pacers"
    ) {
      this.state.teamId = 12;
    }

    if (
      this.state.teamName === "los angeles" ||
      this.state.teamName === "clippers" ||
      this.state.teamName === "lac" ||
      this.state.teamName === "los angeles clippers"
    ) {
      this.state.teamId = 13;
    }

    if (
      this.state.teamName === "los angeles" ||
      this.state.teamName === "lakers" ||
      this.state.teamName === "lal" ||
      this.state.teamName === "los angeles lakers"
    ) {
      this.state.teamId = 14;
    }

    if (
      this.state.teamName === "memphis" ||
      this.state.teamName === "grizzlies" ||
      this.state.teamName === "mem" ||
      this.state.teamName === "memphis grizzlies"
    ) {
      this.state.teamId = 15;
    }

    if (
      this.state.teamName === "miami" ||
      this.state.teamName === "heat" ||
      this.state.teamName === "mia" ||
      this.state.teamName === "miami heat"
    ) {
      this.state.teamId = 16;
    }

    if (
      this.state.teamName === "milwaukee" ||
      this.state.teamName === "bucks" ||
      this.state.teamName === "mil" ||
      this.state.teamName === "milwaukee bucks"
    ) {
      this.state.teamId = 17;
    }

    if (
      this.state.teamName === "minnesota" ||
      this.state.teamName === "timberwolves" ||
      this.state.teamName === "min" ||
      this.state.teamName === "minnesota timberwolves"
    ) {
      this.state.teamId = 18;
    }

    if (
      this.state.teamName === "new orleans" ||
      this.state.teamName === "pelicans" ||
      this.state.teamName === "nop" ||
      this.state.teamName === "new orleans pelicans"
    ) {
      this.state.teamId = 19;
    }

    if (
      this.state.teamName === "new york" ||
      this.state.teamName === "knicks" ||
      this.state.teamName === "nyk" ||
      this.state.teamName === "new york knicks"
    ) {
      this.state.teamId = 20;
    }

    if (
      this.state.teamName === "oklahoma city" ||
      this.state.teamName === "thunder" ||
      this.state.teamName === "okc" ||
      this.state.teamName === "oklahoma city thunder"
    ) {
      this.state.teamId = 21;
    }

    if (
      this.state.teamName === "orlando" ||
      this.state.teamName === "magic" ||
      this.state.teamName === "orl" ||
      this.state.teamName === "orlando magic"
    ) {
      this.state.teamId = 22;
    }

    if (
      this.state.teamName === "philadelphia" ||
      this.state.teamName === "76ers" ||
      this.state.teamName === "phi" ||
      this.state.teamName === "philadelphia 76ers"
    ) {
      this.state.teamId = 23;
    }

    if (
      this.state.teamName === "phoenix" ||
      this.state.teamName === "suns" ||
      this.state.teamName === "phx" ||
      this.state.teamName === "phoenix suns"
    ) {
      this.state.teamId = 24;
    }

    if (
      this.state.teamName === "portland" ||
      this.state.teamName === "trail blazers" ||
      this.state.teamName === "por" ||
      this.state.teamName === "portland trail blazers"
    ) {
      this.state.teamId = 25;
    }

    if (
      this.state.teamName === "sacramento" ||
      this.state.teamName === "kings" ||
      this.state.teamName === "sac" ||
      this.state.teamName === "sacramento kings"
    ) {
      this.state.teamId = 26;
    }

    if (
      this.state.teamName === "san antonio" ||
      this.state.teamName === "spurs" ||
      this.state.teamName === "sas" ||
      this.state.teamName === "san antonia spurs"
    ) {
      this.state.teamId = 27;
    }

    if (
      this.state.teamName === "toronto" ||
      this.state.teamName === "raptors" ||
      this.state.teamName === "tor" ||
      this.state.teamName === "toronto raptors"
    ) {
      this.state.teamId = 28;
    }

    if (
      this.state.teamName === "utah" ||
      this.state.teamName === "jazz" ||
      this.state.teamName === "uth" ||
      this.state.teamName === "utah jazz"
    ) {
      this.state.teamId = 29;
    }

    if (
      this.state.teamName === "washington" ||
      this.state.teamName === "wizards" ||
      this.state.teamName === "was" ||
      this.state.teamName === "washington wizards"
    ) {
      this.state.teamId = 30;
    }
    this.getTeam();
  };

  getTeam = () => {
    axios
      .get(`https://www.balldontlie.io/api/v1/teams/${this.state.teamId}`)
      .then(async (res) => {
        console.log(res.data);
        await this.setState({ teamInfo: res.data });
        await this.getPlayers();
      })
      .catch((err) => {
        console.log(err);
        alert(`Enter a valid team name or team abbreviation`);
      });
  };

  getPlayers = async () => {
    let page = 1;
    console.log(`starting page ${page}`);
    let stopLoop = false;
    while (page <= this.state.totalPages || stopLoop === false) {
      await axios
        .get(
          `https://www.balldontlie.io/api/v1/players?per_page=100&&page=${page}`
        )
        .then(async (res) => {
          console.log(res.data.data);
          await this.setState({
            players: this.state.players.concat(res.data.data),
          });
          console.log(page);
          page++;
        })
        .catch((err) => {
          stopLoop = true;
          console.log(err);
        });
    }
    console.log(
      `successfully scanned through ${page} pages of ${this.state.totalPages}`
    );
  };

  filterPlayers = (player) => {
    if (player === undefined) return null;
    console.log(`filtering through players like ${player.first_name}`);
    if (player.team === undefined) return null;
    console.log("filtering through players");
    if (this.state.teamInfo === undefined) return null;
    console.log(
      `${player.first_name} ${player.last_name} players for the ${player.team.full_name}`
    );
    console.log(this.state.teamInfo.full_name);
    if (player.team.full_name === this.state.teamInfo.full_name)
      return `${player.first_name} ${player.last_name}`;
  };

  renderPlayers = (player) => {
    if (player === undefined) return null;
    if (player.team === undefined) return null;
    if (this.state.teamInfo === undefined) return null;
    if (player.team.full_name === this.state.teamInfo.full_name)
      return (
        <div>
          `${player.first_name} ${player.last_name}`
        </div>
      );
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
              placeholder="Enter Team Name..."
              name="team"
              id="team"
            ></input>
            <button className="btn">Submit</button>
          </span>
        </form>
        <div className="center">
          <div className="row center">
            <div className="player-name">
              <h5 className="playerInfo-header">TEAM</h5>{" "}
              {this.state.teamInfo["full_name"]}
            </div>
          </div>
          <div className="row center">
            <div className="player-position">
              <h5 className="playerInfo-header">CONFERENCE</h5>{" "}
              {this.state.teamInfo["conference"]}
            </div>
            <div className="player-team">
              <h5 className="playerInfo-header">DIVISION</h5>{" "}
              {this.state.teamInfo["division"]}
            </div>
            <div className="player-conference">
              <h5 className="playerInfo-header">ABBREVIATION</h5>{" "}
              {this.state.teamInfo["abbreviation"]}
            </div>
          </div>
        </div>
        <ul className="players-list p-20">
          <h2>Players</h2>
          {this.state.players
            .filter((player) => this.filterPlayers(player))
            .map((filteredPlayer) => (
              <div key={filteredPlayer.id} className="container-box">
                {this.renderPlayers(filteredPlayer)}
              </div>
            ))}
        </ul>
      </div>
    );
  }
}

export default Team;
