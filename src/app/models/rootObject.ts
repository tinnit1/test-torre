import {Person} from './person';
import {Stats} from './stats';
import {Strength} from './strength';
import {Interest} from './interest';
import {Experience} from './experience';
import {Job} from './job';
import {Education} from './education';
import {Opportunity} from './opportunity';
import {Language} from './language';

export class RootObject {
  constructor(
    public person: Person,
    public stats: Stats,
    public strengths: Strength[],
    public interests: Interest[],
    public experiences: Experience[],
    public awards: any[],
    public jobs: Job[],
    public projects: any[],
    public publications: any[],
    public education: Education[],
    public opportunities: Opportunity[],
    public languages: Language[],
  ) {
  }
}
