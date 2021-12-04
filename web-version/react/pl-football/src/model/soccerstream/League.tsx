
import { Country } from "./Country";
import { MatchEvent } from "./MatchEvent";

export class League{
  public id: number;
  public countryId: number;
  public name: string;
  public slug: string;
  public logo: string;
  public uniqueName: string;
  public popular: number;
  public order: number;
  public country: Country;
  public events: MatchEvent[];

  constructor(
    id: number,
    countryId: number,
    name: string,
    slug: string,
    logo: string,
    uniqueName: string,
    popular: number,
    order: number,
    country: Country,
    events: MatchEvent[]) {
      this.id = id;
      this.countryId = countryId;
      this.name = name;
      this.slug = slug;
      this.logo = logo;
      this.uniqueName = uniqueName;
      this.popular = popular;
      this.order = order;
      this.country = country;
      this.events = events;
  }
}