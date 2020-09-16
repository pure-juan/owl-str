import { str, emptyStr, isNotEmpty, isEmpty, isTrue, isFalse } from './';

describe("owl-str test", () => {
    test('test str function', () => {
        const payload = {
            first: true,
            second: false
        }
        const exp = str(payload)`
            testing...
            ${true ? 'asd': ''}
            ${false ? 'asd': ''}
            ${({first}) => first ? 'TRUE': 'FALSE'}
            ${({second}) => second ? 'TRUE': 'FALSE'}
        `;

        expect(exp).toMatch(`
            testing...
            asd
            TRUE
            FALSE
        `);
    });

    test('test emptyStr function', () => {
        expect(emptyStr`
            testing...
        `).toBe('')
    });

    test('test isNotEmpty', () => {
        { // null
            let exp = isNotEmpty(null)`
                testing...
            `;
            expect(exp).toBe('');
            exp = isNotEmpty('')`
                testing...
            `;
            expect(exp).toBe(`
                testing...
            `);
        }

        { // undefined
            let exp = isNotEmpty(undefined)`
                testing...
            `;
            expect(exp).toBe('');
            exp = isNotEmpty('')`
                testing...
            `;
            expect(exp).toBe(`
                testing...
            `);
        }
    });

    test('test isEmpty function', () => {
        let exp = isEmpty({})`
            testing...
        `;
        expect(exp).toBe('');
        exp = isEmpty(null)`
            testing...
        `;
        expect(exp).toBe(`
            testing...
        `);
    });

    test('test isTrue function', () => {
        let exp = isTrue(false)`
            testing...
        `;
        expect(exp).toBe('');
        exp = isTrue(true)`
            testing...
        `;
        expect(exp).toBe(`
            testing...
        `);
    });

    test('test isFalse function', () => {
        let exp = isFalse(true)`
            testing...
        `;
        expect(exp).toBe('');
        exp = isFalse(false)`
            testing...
        `;
        expect(exp).toBe(`
            testing...
        `);
    });
});