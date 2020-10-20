export class Strength {
  constructor(
    public id: string,
    public code: number,
    public name: string,
    public weight: number,
    public recommendations: number,
    public media: any[],
    public created: Date
  ) {
  }
}
