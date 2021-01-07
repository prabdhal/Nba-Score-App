import React from "react";

function PlayerBaseInfo(playerBaseData) {
  function renderPlayerImg(fName, lName) {
    if (fName === null || lName === null) return "-";
    let imgUrl = `https://nba-players.herokuapp.com/players/${lName}/${fName}`;

    return <img src={imgUrl} height="75px" width="100px" />;
  }

  function renderName(playerData) {
    if (playerData === null) return "-";
    else {
      return (
        playerData.playerBaseData.first_name +
        " " +
        playerData.playerBaseData.last_name
      );
    }
  }

  function renderTeam(playerData) {
    if (playerData === null) return "-";
    if (playerData.playerBaseData.team === undefined) return null;
    return playerData.playerBaseData.team.abbreviation;
  }

  return (
    <div className="player-information-container">
      {renderPlayerImg(
        playerBaseData.playerBaseData.first_name,
        playerBaseData.playerBaseData.last_name
      )}
      <h4 className="player-name-text">{renderName(playerBaseData)}</h4>
      <span>
        <h5 className="player-information-text">
          Position: {playerBaseData.playerBaseData.position} | Team:{" "}
          {renderTeam(playerBaseData)}
        </h5>
      </span>
    </div>
  );
}

export default PlayerBaseInfo;
