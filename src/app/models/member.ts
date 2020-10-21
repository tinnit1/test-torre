export class Member {
  constructor(
    public subjectId: string,
    public name: string,
    public username: string,
    public professionalHeadline: string,
    public picture: string,
    public member: boolean,
    public manager: boolean,
    public poster: boolean,
    public weight: number
  ) {
  }
}
