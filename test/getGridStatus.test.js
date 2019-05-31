const getGridStatus = require('../src/getGridStatus');

//--------------------------------------------------------------------------------
test('Empty grid', () => {
   expect(getGridStatus(['.......', 
                         '.......', 
                         '.......', 
                         '.......', 
                         '.......', 
                         '.......']))
            .toBe('Red plays next');
});

test('Grid with one red token', () => {
   expect(getGridStatus(['.......', 
                         '.......', 
                         '.......', 
                         '.......', 
                         '.......', 
                         '...R...']))
      .toBe('Yellow plays next');
});

test('Grid with one red and one yellow token', () => {
   expect(getGridStatus(['.......', 
                         '.......', 
                         '.......', 
                         '.......', 
                         '.......', 
                         '...rY..']))
      .toBe('Red plays next');
});

test('Red wins horizontally', () => {
   expect(getGridStatus(['.......', 
                         '.......', 
                         '.......', 
                         '.......', 
                         '..yyy..', 
                         '..rrrR.']))
      .toBe('Red wins');
});

