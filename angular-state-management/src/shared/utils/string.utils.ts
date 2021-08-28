export function isEmptyString(aString): boolean {
  switch (aString) {
    case "":
    case 0:
    case "0":
    case null:
    case false:
    case typeof (aString) == "undefined":
      return true;
    default:
      return false;
  }
}

export function trimString(aString: string): string {
  if (isEmptyString(aString)) {
    throw 'Invalid String:' + aString;
  } else {
    let result = aString.trim();
    if (result.length == 0) {
      throw 'Empty String after trimming';
    }
    return result;
  }
}

export const EMPTY_STRING = '';
