const reverseString = require('./reverseString');

test('reverseString function exits', () => {
    expect(reverseString).toBeDefined();
});

test('String reverse', () => {
    expect(reverseString('hello')).toEqual('olleh');
})

test('String reverse with uppercase', () => {
    expect(reverseString('hello')).toEqual('olleh');
})