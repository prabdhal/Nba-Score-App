import React from "react";

function PlayerBaseInfo({ player, removePlayerFromList }) {
  function renderPlayerImg(playerData) {
    if (playerData === null || playerData === undefined) return "-";

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

  function handleCloseButton(id, season) {
    removePlayerFromList(id, season);
  }

  return (
    <div className="player-information-container spaced-row">
      <div className="player-border">
        {renderPlayerImg(player.info)}
        <h4 className="player-name-text">{renderName(player.info)}</h4>
        <span>
          <h5 className="player-information-text">
            Position: {renderPosition(player.info)} | Team:{" "}
            {renderTeam(player.info)}
          </h5>
        </span>
      </div>
      <div>
        <button
          className="nba-close-btn"
          onClick={() => handleCloseButton(player.id, player.averages.season)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default PlayerBaseInfo;
