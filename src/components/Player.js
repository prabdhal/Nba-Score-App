import React, { Component } from "react";
import axios from "axios";
import PlayerBaseInfo from "./PlayerBaseInfo";
import PlayerStats from "./PlayerStats";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerBaseData: {},
      playerId: null,
      season: "2020",
      playerStats: {},
      activePlayersId: [{}],
      activePlayersStats: [{}],
    };
  }

  // gets player id when form is submitted
  handleSubmit = (e) => {
    e.preventDefault();
    this.getPlayerId();
    e.target[0].value = null;
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
      .then((res) => {
        // find player based on the inputted name
        if (res.data.data[0] === undefined) {
          alert(
            `This player did not exist during the ${this.state.season} season!`
          );
        } else if (res.data.data.length > 1) {
          alert("Please specify the name more!");
        } else {
          this.setState({ playerId: res.data.data[0].id });
          this.setState({ playerBaseData: res.data.data[0] });
          this.getPlayerStats(res.data.data[0].id);
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
      .then((res) => {
        console.log(res.data.data[0]);
        if (res.data.data[0].season === undefined) return;
        else {
          this.setState({ playerStats: res.data.data[0] });
        }
      })
      .catch((err) => {
        console.log(err);
        alert(
          `${this.state.playerName} was not active during the ${this.state.season} season`
        );
      });
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

        <div className="player-container">
          <PlayerBaseInfo playerBaseData={this.state.playerBaseData} />

          <div className="basic-stats">
            <PlayerStats playerStats={this.state.playerStats} />
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
