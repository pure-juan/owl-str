export const str = (strings: TemplateStringsArray, ...args: any[]) => {
    let index = 0;
    return strings.reduce((accumulator, currentValue) => {
        let arg: any = '';
        if (args[index]) {
            arg = args[index];
            index++;
        }
        return accumulator + currentValue + arg;
    }, '');
}

export const emptyStr = (_strings: TemplateStringsArray, ..._args: any[]) => '';

export const isNotEmpty = (arg: any) => arg !== null && arg !== undefined ? str: emptyStr;

export const isEmpty = (arg: any) => arg !== null && arg !== undefined ? emptyStr: str;

export const isTrue = (flag: boolean) => flag ? str: emptyStr;

export const isFalse = (flag: boolean) => flag ? emptyStr: str;