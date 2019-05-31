const getGridStatus = require('../src/getGridStatus');

//--------------------------------------------------------------------------------
test('Empty grid', () => {
   expect(getGridStatus(['.......', '.......', '.......', '.......', '.......', '.......']))
            .toBe('Red plays next');
});
