const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    it('runs searchCandies with "Ma" & 10', () => {
        expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
    });
    it('runs searchCandies with "Ma" & 2', () => {
        expect(searchCandies('Ma', 2)).toEqual([ 'Mars']);
    });
    it('runs searchCandies with "S" & 10', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
    });
    it('runs searchCandies with "S" & 4', () => {
        expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
    });

});