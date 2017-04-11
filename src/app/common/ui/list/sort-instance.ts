export enum SortType {
  ASC,
  DESC
}

export class SortInstance {
  field: string;
  direction: SortType = SortType.ASC;

  constructor(field: string, direction: SortType) {
    this.field = field;
    this.direction = direction;
  }

  isAscending() {
    return SortType.ASC === this.direction;
  }
}
