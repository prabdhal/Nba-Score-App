import React from "react";

function ScoreCard({ gameInfo, renderGameDate1 }) {
  function renderScore(game, isHome) {
    if (game.period === 0) return null;
    else if (isHome) return game.home_team_score;
    else return game.visitor_team_score;
  }

  function renderPostSeason(game) {
    if (game.id === null || game.is === undefined) return null;
    if (game.postseason) return "Playoffs";
    return "Regular";
  }

  function renderTeamName(game, isHome) {
    if (isHome) {
      if (game.home_team === null || game.home_team === undefined) return null;
      return game.home_team.name;
    } else if (!isHome) {
      if (game.visitor_team === null || game.visitor_team === undefined)
        return null;
      return game.visitor_team.name;
    }
  }

  function renderLogo(game, isHome) {
    let classes = "team-logo ";
    switch (renderTeamName(game, isHome)) {
      case "Hawks":
        return (classes += "hawks");
      case "Celtics":
        return (classes += "celtics");
      case "Nets":
        return (classes += "nets");
      case "Hornets":
        return (classes += "hornets");
      case "Bulls":
        return (classes += "bulls");
      case "Cavaliers":
        return (classes += "cavaliers");
      case "Mavericks":
        return (classes += "mavericks");
      case "Nuggets":
        return (classes += "nuggets");
      case "Pistons":
        return (classes += "pistons");
      case "Warriors":
        return (classes += "warriors");
      case "Rockets":
        return (classes += "rockets");
      case "Pacers":
        return (classes += "pacers");
      case "Clippers":
        return (classes += "clippers");
      case "Lakers":
        return (classes += "lakers");
      case "Grizzlies":
        return (classes += "grizzlies");
      case "Heat":
        return (classes += "heat");
      case "Bucks":
        return (classes += "bucks");
      case "Timberwolves":
        return (classes += "timberwolves");
      case "Pelicans":
        return (classes += "pelicans");
      case "Trail Blazers":
        return (classes += "blazers");
      case "Knicks":
        return (classes += "knicks");
      case "Thunder":
        return (classes += "thunder");
      case "Magic":
        return (classes += "magic");
      case "76ers":
        return (classes += "sixers");
      case "Suns":
        return (classes += "suns");
      case "Kings":
        return (classes += "kings");
      case "Spurs":
        return (classes += "spurs");
      case "Raptors":
        return (classes += "raptors");
      case "Jazz":
        return (classes += "jazz");
      case "Wizards":
        return (classes += "wizards");
      default:
        break;
    }
  }

  function handleRenderDate(game) {
    return renderGameDate1(game);
  }

  function toggleScoreClass(game, isHome) {
    let classes = "team-score ";
    if (game.status === "Final") {
      if (isHome && game.home_team_score > game.visitor_team_score) {
        return (classes += "green");
      } else if (isHome && game.home_team_score < game.visitor_team_score) {
        return (classes += "red");
      } else if (!isHome && game.home_team_score > game.visitor_team_score) {
        return (classes += "red");
      } else if (!isHome && game.home_team_score < game.visitor_team_score) {
        return (classes += "green");
      }
    }
    return classes;
  }

  return (
    <div className="game-block">
      <div className="team-score-block">
        <div>
          <div className={renderLogo(gameInfo, false)}></div>
          <h2 className="team-name-text">{renderTeamName(gameInfo, false)}</h2>
        </div>
        <div className={toggleScoreClass(gameInfo, false)}>
          <h4>{renderScore(gameInfo, false)}</h4>
        </div>
      </div>
      <div className="game-information">
        <div className="game-date">{handleRenderDate(gameInfo)}</div>
        <div className="game-status">{gameInfo.status}</div>
        <div>{renderPostSeason(gameInfo)}</div>
        <div>{gameInfo.time}</div>
      </div>
      <div className="team-score-block">
        <div>
          <div className={renderLogo(gameInfo, true)}></div>
          <h2 className="team-name-text">{renderTeamName(gameInfo, true)}</h2>
        </div>
        <div className={toggleScoreClass(gameInfo, true)}>
          <h4>{renderScore(gameInfo, true)}</h4>
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;
