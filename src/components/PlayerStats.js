import React from "react";

function PlayerStats({ player }) {
  function renderSeason(playerStats) {
    console.log(playerStats);
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseInt(playerStats.season))) return "-";

    console.log(playerStats.stats);
    return playerStats.season + " - " + (parseInt(playerStats.season) + 1);
  }

  function renderGamesPlayed(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.games_played))) return "-";

    return playerStats.games_played.toFixed(0);
  }

  function renderMinutes(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.min))) return "-";

    return playerStats.min;
  }

  function renderPoints(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.pts))) return "-";

    return (playerStats.pts * 1).toFixed(1);
  }

  function renderRebounds(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.reb))) return "-";

    return (playerStats.reb * 1).toFixed(1);
  }

  function renderAssists(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.ast))) return "-";

    return (playerStats.ast * 1).toFixed(1);
  }

  function renderSteals(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.stl))) return "-";

    return (playerStats.stl * 1).toFixed(1);
  }

  function renderBlocks(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.blk))) return "-";

    return (playerStats.blk * 1).toFixed(1);
  }

  function renderTurnovers(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.turnover))) return "-";

    return (playerStats.turnover * 1).toFixed(1);
  }

  function renderFreethrowMade(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.ftm))) return "-";

    return playerStats.ftm.toFixed(1);
  }

  function renderFreethrowAttempts(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.fta))) return "-";

    return playerStats.fta.toFixed(1);
  }

  function renderFreethrowPct(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.ft_pct))) return "-";

    return (playerStats.ft_pct * 100).toFixed(1);
  }

  function renderFieldGoalMade(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.fgm))) return "-";

    return playerStats.fgm.toFixed(1);
  }

  function renderFieldGoalAttempts(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.fga))) return "-";

    return playerStats.fga.toFixed(1);
  }

  function renderFieldGoalPct(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.fg_pct))) return "-";

    return (playerStats.fg_pct * 100).toFixed(1);
  }

  function renderThreePointMade(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.fg3m))) return "-";

    return playerStats.fg3m.toFixed(1);
  }

  function renderThreePointAttempts(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.fg3a))) return "-";

    return playerStats.fg3a.toFixed(1);
  }

  function renderThreePointPct(playerStats) {
    if (playerStats === null || playerStats === undefined) return;
    if (isNaN(parseFloat(playerStats.fg3_pct))) return "-";

    return (playerStats.fg3_pct * 100).toFixed(1);
  }

  return (
    <React.Fragment>
      <div className="stat-container">
        <h5 className="basic-stats-header">SEASON</h5>
        {renderSeason(player.stats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">GP</h5>{" "}
        {renderGamesPlayed(player.stats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">MPG</h5>{" "}
        {renderMinutes(player.stats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">PPG</h5> {renderPoints(player.stats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">RPG</h5>{" "}
        {renderRebounds(player.stats)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-stats-header">APG</h5>{" "}
        {renderAssists(player.stats)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-stats-header">SPG</h5> {renderSteals(player.stats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">BPG</h5> {renderBlocks(player.stats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">TOs</h5>{" "}
        {renderTurnovers(player.stats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">FGM</h5>{" "}
        {renderFieldGoalMade(player.stats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">FGA</h5>{" "}
        {renderFieldGoalAttempts(player.stats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">FG%</h5>{" "}
        {renderFieldGoalPct(player.stats)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-stats-header">3PTM</h5>{" "}
        {renderThreePointMade(player.stats)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-stats-header">3PTA</h5>{" "}
        {renderThreePointAttempts(player.stats)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-stats-header">3PT%</h5>{" "}
        {renderThreePointPct(player.stats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">FTM</h5>{" "}
        {renderFreethrowMade(player.stats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">FTA</h5>{" "}
        {renderFreethrowAttempts(player.stats)}
      </div>
      <div className="stat-container">
        <h5 className="basic-stats-header">FT%</h5>{" "}
        {renderFreethrowPct(player.stats)}
      </div>
    </React.Fragment>
  );
}

export default PlayerStats;
