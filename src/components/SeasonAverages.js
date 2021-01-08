import React from "react";

function SeasonAverages({ player }) {
  function renderSeason(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseInt(seasonAverages.season))) return "-";

    return (
      seasonAverages.season + " - " + (parseInt(seasonAverages.season) + 1)
    );
  }

  function renderGamesPlayed(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.games_played))) return "-";

    return seasonAverages.games_played.toFixed(0);
  }

  function renderMinutes(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.min))) return "-";

    return seasonAverages.min;
  }

  function renderPoints(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.pts))) return "-";

    return (seasonAverages.pts * 1).toFixed(1);
  }

  function renderRebounds(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.reb))) return "-";

    return (seasonAverages.reb * 1).toFixed(1);
  }

  function renderAssists(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.ast))) return "-";

    return (seasonAverages.ast * 1).toFixed(1);
  }

  function renderSteals(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.stl))) return "-";

    return (seasonAverages.stl * 1).toFixed(1);
  }

  function renderBlocks(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.blk))) return "-";

    return (seasonAverages.blk * 1).toFixed(1);
  }

  function renderTurnovers(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.turnover))) return "-";

    return (seasonAverages.turnover * 1).toFixed(1);
  }

  function renderFreethrowMade(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.ftm))) return "-";

    return seasonAverages.ftm.toFixed(1);
  }

  function renderFreethrowAttempts(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.fta))) return "-";

    return seasonAverages.fta.toFixed(1);
  }

  function renderFreethrowPct(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.ft_pct))) return "-";

    return (seasonAverages.ft_pct * 100).toFixed(1);
  }

  function renderFieldGoalMade(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.fgm))) return "-";

    return seasonAverages.fgm.toFixed(1);
  }

  function renderFieldGoalAttempts(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.fga))) return "-";

    return seasonAverages.fga.toFixed(1);
  }

  function renderFieldGoalPct(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.fg_pct))) return "-";

    return (seasonAverages.fg_pct * 100).toFixed(1);
  }

  function renderThreePointMade(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.fg3m))) return "-";

    return seasonAverages.fg3m.toFixed(1);
  }

  function renderThreePointAttempts(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.fg3a))) return "-";

    return seasonAverages.fg3a.toFixed(1);
  }

  function renderThreePointPct(seasonAverages) {
    if (seasonAverages === null || seasonAverages === undefined) return;
    if (isNaN(parseFloat(seasonAverages.fg3_pct))) return "-";

    return (seasonAverages.fg3_pct * 100).toFixed(1);
  }

  return (
    <React.Fragment>
      <div className="stat-container">
        <h5 className="basic-averages-header">SEASON</h5>
        {renderSeason(player.averages)}
      </div>
      <div className="stat-container">
        <h5 className="basic-averages-header">GP</h5>{" "}
        {renderGamesPlayed(player.averages)}
      </div>
      <div className="stat-container">
        <h5 className="basic-averages-header">MPG</h5>{" "}
        {renderMinutes(player.averages)}
      </div>
      <div className="stat-container">
        <h5 className="basic-averages-header">PPG</h5>{" "}
        {renderPoints(player.averages)}
      </div>
      <div className="stat-container">
        <h5 className="basic-averages-header">RPG</h5>{" "}
        {renderRebounds(player.averages)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-averages-header">APG</h5>{" "}
        {renderAssists(player.averages)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-averages-header">SPG</h5>{" "}
        {renderSteals(player.averages)}
      </div>
      <div className="stat-container">
        <h5 className="basic-averages-header">BPG</h5>{" "}
        {renderBlocks(player.averages)}
      </div>
      <div className="stat-container">
        <h5 className="basic-averages-header">TOs</h5>{" "}
        {renderTurnovers(player.averages)}
      </div>
      <div className="stat-container">
        <h5 className="basic-averages-header">FGM</h5>{" "}
        {renderFieldGoalMade(player.averages)}
      </div>
      <div className="stat-container">
        <h5 className="basic-averages-header">FGA</h5>{" "}
        {renderFieldGoalAttempts(player.averages)}
      </div>
      <div className="stat-container">
        <h5 className="basic-averages-header">FG%</h5>{" "}
        {renderFieldGoalPct(player.averages)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-averages-header">3PTM</h5>{" "}
        {renderThreePointMade(player.averages)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-averages-header">3PTA</h5>{" "}
        {renderThreePointAttempts(player.averages)}
      </div>
      <div className="stat-container">
        {" "}
        <h5 className="basic-averages-header">3PT%</h5>{" "}
        {renderThreePointPct(player.averages)}
      </div>
      <div className="stat-container">
        <h5 className="basic-averages-header">FTM</h5>{" "}
        {renderFreethrowMade(player.averages)}
      </div>
      <div className="stat-container">
        <h5 className="basic-averages-header">FTA</h5>{" "}
        {renderFreethrowAttempts(player.averages)}
      </div>
      <div className="stat-container">
        <h5 className="basic-averages-header">FT%</h5>{" "}
        {renderFreethrowPct(player.averages)}
      </div>
    </React.Fragment>
  );
}

export default SeasonAverages;
