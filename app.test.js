const add = require ('./app');

describe('add testing',()=> {
    test('2+3=5',()=>{
        expect(add(2,3)).toEqual(5)
    })
})

