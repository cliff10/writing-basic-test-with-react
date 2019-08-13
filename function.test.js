const functions = require('./function');
// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});
//not.toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//  CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUnDefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statemnet treats as false

//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});
// toEqual */ using toEqual is best to pass with deep equality instead of toBe
test('user should be Cliff Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Cliff',
        lastname: 'Traversy'
    });
});

//Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

//Less than and greater than or equal
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

// Arrays
test('Admin should be in username', () =>{
    usernames =['cliff', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})