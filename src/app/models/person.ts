import {Link} from './link';
import {Flags} from './flags';

export class Person {
  constructor(
    public professionalHeadline: string,
    public completion: number,
    public showPhone: boolean,
    public created: Date,
    public verified: boolean,
    public flags: Flags,
    public weight: number,
    public locale: string,
    public subjectId: string,
    public picture: string,
    public hasEmail: boolean,
    public name: string,
    public links: Link[],
    public location: Location,
    public theme: string,
    public id: string,
    public pictureThumbnail: string,
    public claimant: boolean,
    public summaryOfBio: string,
    public weightGraph: string,
    public publicId: string
  ) {
  }
}

