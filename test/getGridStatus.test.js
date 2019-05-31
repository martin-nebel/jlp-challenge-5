const getGridStatus = require('../src/getGridStatus');

//--------------------------------------------------------------------------------
test('Empty grid', () => {
   expect(getGridStatus(['.......', '.......', '.......', '.......', '.......', '.......']))
            .toBe('Red plays next');
});

test('Grid with one red token', () => {
   expect(getGridStatus(['.......', '.......', '.......', '.......', '.......', '...R...']))
      .toBe('Yellow plays next');
});
