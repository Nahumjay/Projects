const { theDate, transformDate, YearLeap } = require('../input');

describe("Formation of Date", () => {

    it("correct transformation of years ", () => {
        let input = "20210301T120000"; // 
        let expectedOutput = "March 1,2021, at 12 pm"; // This is the correct output
        expect(theDate(input)).toEqual(expectedOutput);
    });

    it(" Correct leap Year", () => { // expected leap Year
        let year = 2000;
        expect(YearLeap(year)).toBeTrue();
    });

    it(" error thrown for false year that is not a leap year", () => {
        let input = "20210229T120000"; // 2021 is not a leap year 
        expect(() => {
            theDate(input);
        }).toThrowError("Invalid date");
    });

});



describe("Formation of aspects", () => {

    it("error thrown for day that is invalid", () => {
        let input = "20090439T120000"; // April does not have 39 days
        expect(function() {
            theDate(input);
        }).toThrowError("Invalid date");
    });



    it("error for incrorect number of months ", () => {
        let input = "20211301T120000"; // value of month does not make sense 
        expect(function() {
            theDate(input);
        }).toThrowError("Invalid date");
    });



});








