import {EMPTY_STRING, trimString} from "src/shared/utils/string.utils";

export class Customer {
  name: string = EMPTY_STRING;

  constructor(aName: string) {
    this.name = trimString(aName);
  }
}
