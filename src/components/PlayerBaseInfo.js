import React from "react";

function PlayerBaseInfo({ player }) {
  function renderPlayerImg(playerData) {
    if (playerData === null || playerData === undefined) return "-";
    console.log(playerData);
    let fName = playerData.first_name;
    let lName = playerData.last_name;
    let imgUrl = `https://nba-players.herokuapp.com/players/${lName}/${fName}`;

    let fullName = `${fName} ${lName} image`;

    return <img src={imgUrl} alt={fullName} height="75px" width="100px" />;
  }

  function renderName(playerData) {
    if (playerData === null || playerData === undefined) return "-";
    else {
      return playerData.first_name + " " + playerData.last_name;
    }
  }

  function renderPosition(playerData) {
    if (playerData === null || playerData === undefined) return "-";
    if (playerData.position === undefined) return null;
    return playerData.position;
  }

  function renderTeam(playerData) {
    if (playerData === null || playerData === undefined) return "-";
    if (playerData.team === undefined) return null;
    return playerData.team.abbreviation;
  }

  return (
    <div className="player-information-container">
      {renderPlayerImg(player.info)}
      <h4 className="player-name-text">{renderName(player.info)}</h4>
      <span>
        <h5 className="player-information-text">
          Position: {renderPosition(player.info)} | Team:{" "}
          {renderTeam(player.info)}
        </h5>
      </span>
    </div>
  );
}

export default PlayerBaseInfo;
