import Hasher from 'constants/hasher';

describe('Sample test', () => {
    test('Shoul have id property', () => {
        expect({ id: 'asds' }).toHaveProperty('id');
    });

    test('Should verify "secret" hash from Hasher', () => {
        const hash = Hasher.hash('secret');
        const verified = Hasher.verify('secret', hash);
        expect(verified).toBe(true);
    });
});