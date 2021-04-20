const {add, findByName} = require('../index');

test('The add function adds two numbers and returns the sum', function () {
    // Arrange

    const number1 = 5;
    const number2 = 10;

    // Act

    const sum = add(number1, number2);

    // Assert

    expect(sum).toBe(15);
});

test('findByName will return an object from an array with the specified name', function (){
    //Arrange

    const usernames = [
        {name: 'Piet', id: 1},
        {name: 'Klaas', id: 2},
        {name: 'Henk', id:3},
    ];
    const userToFind = 'Klaas';

    // Act

    const result = findByName(usernames, userToFind);

    // Assert

    expect(result).toEqual({name: 'Klaas', id: 2});
})

test('findByName returns null if a user is not found', function () {
    //Arrange
    const usernames = [
        {name: 'Piet', id: 1},
        {name: 'Klaas', id: 2},
        {name: 'Henk', id:3},
    ];

    const userToFind = 'Beppie'

    //Act

    const result =  findByName(usernames, userToFind);

    //Assert

    expect(result).toBeNull();
})