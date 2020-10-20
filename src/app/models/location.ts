export class Location {
  constructor(
    public name: string,
    public shortName: string,
    public latitude: number,
    public longitude: number,
    public timezone: string,
    public timezoneOffSet: number
  ) {
  }
}
