const { mean, mode, median } = require('./operations.js')

describe("mean function", function () {

    test('return mean', function () {
      let meanResult = mean([1,2,3,4,5]);
      expect(meanResult).toEqual(3);
    });
  
    test('return Nan with non numbers', function () {
      let meanResult = mean(['foo', 1, 'faa']);
      expect(meanResult).toEqual(NaN);
    });
  
  });

  describe("median function", function () {

    test('return median', function () {
      let medianResult = median([1,2,3,4,5]);
      expect(medianResult).toEqual(3);
    });

    test('return array of numbers with two mids', function () {
        let medianResult = median([1,2,3,4,5,6]);
        expect(medianResult).toEqual([3,4]);
      });
  
  });

  describe("mode function", function () {

    test('return mode', function () {
      let modeResult = mode([1,2,3,4,5,5,5]);
      expect(modeResult).toEqual('5');
    });

    test('return entire array when there is no highest occuring', function () {
        let modeResult = mode([1,2,3,4,5]);
        expect(modeResult).toEqual(['1','2','3','4','5']);
    });

    test('return all highest occuring even when more than one', function () {
        let modeResult = mode([1,2,3,3,2,4,5]);
        expect(modeResult).toEqual(['2','3']);
    });
  
  });