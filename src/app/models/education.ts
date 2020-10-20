export class Education {
  constructor(
    public id: string,
    public category: string,
    public name: string,
    public organizations: any[],
    public responsibilities: any[],
    public fromMonth: string,
    public fromYear: string,
    public toMonth: string,
    public toYear: string,
    public additionalInfo: string,
    public highlighted: boolean,
    public weight: number,
    public verifications: number,
    public recommendations: number,
    public media: any[],
    public rank: number
  ) {
  }
}
