import {Organization2} from './organization2';

export class Job {
  constructor(
    public id: string,
    public category: string,
    public name: string,
    public organizations: Organization2[],
    public responsibilities: string[],
    public fromMonth: string,
    public fromYear: string,
    public toMonth: string,
    public toYear: string,
    public remote: boolean,
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
