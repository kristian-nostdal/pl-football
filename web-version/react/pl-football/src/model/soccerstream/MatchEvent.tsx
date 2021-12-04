import { Score } from "./Score";
import { Team } from "./Team";
import { Status } from "./Status";

export class MatchEvent{
  public id: number;
  public leagueId: number;
  public localteamId: number;
  public visitorteamId: number;
  public startTime: string;
  public slug: string;
  public startDate: string;
  public startTimestamp: number;
  public hScore: number;
  public vScore: number;
  public homeScore: Score;
  public awayScore: Score;
  public homeTeam: Team;
  public awayTeam: Team;
  public statusDescription: string;
  public minute: number;
  public status: Status;
  public hasStreams: boolean;
  public hasHighlights: boolean;
  public redditEventLink: any;
  public eventLink: string;

  constructor(
     id: number,
     leagueId: number,
     localteamId: number,
     visitorteamId: number,
     startTime: string,
     slug: string,
     startDate: string,
     startTimestamp: number,
     hScore: number,
     vScore: number,
     homeScore: Score,
     awayScore: Score,
     homeTeam: Team,
     awayTeam: Team,
     statusDescription: string,
     minute: number,
     status: Status,
     hasStreams: boolean,
     hasHighlights: boolean,
     redditEventLink: any,
     eventLink: string
    ) {
      this.id = id,
      this.leagueId = leagueId,
      this.localteamId = localteamId,
      this.visitorteamId = visitorteamId,
      this.startTime = startTime,
      this.slug = slug,
      this.startDate = startDate,
      this.startTimestamp = startTimestamp,
      this.hScore = hScore,
      this.vScore = vScore,
      this.homeScore = homeScore,
      this.awayScore = awayScore,
      this.homeTeam = homeTeam,
      this.awayTeam = awayTeam,
      this.statusDescription = statusDescription,
      this.minute = minute,
      this.status = status,
      this.hasStreams = hasStreams,
      this.hasHighlights = hasHighlights,
      this.redditEventLink = redditEventLink,
      this.eventLink = eventLink
  }
}