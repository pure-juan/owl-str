export const str = <T>(payload: T) => (strings: TemplateStringsArray, ...args: (string | number | ((payload: T) => any))[]) => {
    let index = 0;
    return strings.reduce((accumulator, currentValue) => {
        let arg: any = '';
        if (args[index]) {
            const temp = args[index];
            if (typeof temp === 'function') {
                arg = temp(payload);
            } else {
                arg = temp;
            }
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