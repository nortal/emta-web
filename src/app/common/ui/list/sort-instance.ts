export enum SortType {
  ASC,
  DESC
}

export class SortInstance {
  public field: string;
  public direction: SortType = SortType.ASC;

  constructor(field: string, direction: SortType) {
    this.field = field;
    this.direction = direction;
  }

  public isAscending() {
    return SortType.ASC === this.direction;
  }
}
