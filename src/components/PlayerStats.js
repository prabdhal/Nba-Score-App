import React from "react";

function PlayerStats(playerStats) {
  function renderSeason(playerStats) {
    if (isNaN(parseInt(playerStats.playerStats.season))) return "-";

    console.log(playerStats.playerStats);
    return (
      playerStats.playerStats.season +
      " - " +
      (parseInt(playerStats.playerStats.season) + 1)
    );
  }

  function renderGamesPlayed(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.games_played))) return "-";

    return playerStats.playerStats.games_played.toFixed(0);
  }

  function renderMinutes(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.min))) return "-";

    return playerStats.playerStats.min;
  }

  function renderPoints(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.pts))) return "-";

    return (playerStats.playerStats.pts * 1).toFixed(1);
  }

  function renderRebounds(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.reb))) return "-";

    return (playerStats.playerStats.reb * 1).toFixed(1);
  }

  function renderAssists(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.ast))) return "-";

    return (playerStats.playerStats.ast * 1).toFixed(1);
  }

  function renderSteals(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.stl))) return "-";

    return (playerStats.playerStats.stl * 1).toFixed(1);
  }

  function renderBlocks(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.blk))) return "-";

    return (playerStats.playerStats.blk * 1).toFixed(1);
  }

  function renderTurnovers(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.turnover))) return "-";

    return (playerStats.playerStats.turnover * 1).toFixed(1);
  }

  function renderFreethrowMade(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.ftm))) return "-";

    return playerStats.playerStats.ftm.toFixed(1);
  }

  function renderFreethrowAttempts(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.fta))) return "-";

    return playerStats.playerStats.fta.toFixed(1);
  }

  function renderFreethrowPct(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.ft_pct))) return "-";

    return (playerStats.playerStats.ft_pct * 100).toFixed(1);
  }

  function renderFieldGoalMade(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.fgm))) return "-";

    return playerStats.playerStats.fgm.toFixed(1);
  }

  function renderFieldGoalAttempts(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.fga))) return "-";

    return playerStats.playerStats.fga.toFixed(1);
  }

  function renderFieldGoalPct(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.fg_pct))) return "-";

    return (playerStats.playerStats.fg_pct * 100).toFixed(1);
  }

  function renderThreePointMade(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.fg3m))) return "-";

    return playerStats.playerStats.fg3m.toFixed(1);
  }

  function renderThreePointAttempts(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.fg3a))) return "-";

    return playerStats.playerStats.fg3a.toFixed(1);
  }

  function renderThreePointPct(playerStats) {
    if (isNaN(parseFloat(playerStats.playerStats.fg3_pct))) return "-";

    return (playerStats.playerStats.fg3_pct * 100).toFixed(1);
  }

  return (
    <React.Fragment>
      <div className="stat-container">
        <h5 className="basic-stats-header">SEASON</h5>
        {renderSeason(playerStats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">GP</h5>{" "}
        {renderGamesPlayed(playerStats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">MPG</h5> {renderMinutes(playerStats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">PPG</h5> {renderPoints(playerStats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">RPG</h5>{" "}
        {renderRebounds(playerStats)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-stats-header">APG</h5> {renderAssists(playerStats)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-stats-header">SPG</h5> {renderSteals(playerStats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">BPG</h5> {renderBlocks(playerStats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">TOs</h5>{" "}
        {renderTurnovers(playerStats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">FGM</h5>{" "}
        {renderFieldGoalMade(playerStats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">FGA</h5>{" "}
        {renderFieldGoalAttempts(playerStats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">FG%</h5>{" "}
        {renderFieldGoalPct(playerStats)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-stats-header">3PTM</h5>{" "}
        {renderThreePointMade(playerStats)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-stats-header">3PTA</h5>{" "}
        {renderThreePointAttempts(playerStats)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-stats-header">3PT%</h5>{" "}
        {renderThreePointPct(playerStats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">FTM</h5>{" "}
        {renderFreethrowMade(playerStats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">FTA</h5>{" "}
        {renderFreethrowAttempts(playerStats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">FT%</h5>{" "}
        {renderFreethrowPct(playerStats)}
      </div>
    </React.Fragment>
  );
}

export default PlayerStats;
