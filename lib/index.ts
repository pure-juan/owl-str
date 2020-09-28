export const raw = (strings: TemplateStringsArray, ...args: any[]) => {
  let index = 0;
  return strings.reduce((accumulator, currentValue) => {
    let arg: any = "";
    if (args[index]) {
      arg = args[index];
      index++;
    }
    return accumulator + currentValue + arg;
  }, "");
};

export const str = <T>(
  strings: TemplateStringsArray,
  ...args: (string | number | ((payload: T) => any))[]
): ((payload: T) => string) => {
  return (payload: T): string => {
    let index = 0;
    const result = strings.reduce((accumulator, currentValue) => {
      let arg: any = "";
      if (args[index] !== undefined) {
        const temp = args[index];
        if (typeof temp === "function") {
          arg = temp(payload);
        } else {
          arg = temp;
        }
      }
      index++;
      return accumulator + currentValue + arg;
    }, "");

    return result;
  };
};

export const emptyStr = (_strings: TemplateStringsArray, ..._args: any[]) => "";

export const isNotEmpty = (arg: any) =>
  arg !== null && arg !== undefined ? raw : emptyStr;

export const isEmpty = (arg: any) =>
  arg !== null && arg !== undefined ? emptyStr : raw;

export const isTrue = (flag: boolean) => (flag ? raw : emptyStr);

export const isFalse = (flag: boolean) => (flag ? emptyStr : raw);
