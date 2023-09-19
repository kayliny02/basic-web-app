import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrewID description', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My Andrew ID is kayliny"
          ));
    });
    test('should answer name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "kaylin"
        ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('finds the max', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 94, 42, 56?")).toEqual("94");
        expect(QueryProcessor("Which of the following numbers is the largest: 1, 7, 73?")).toEqual("73");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 5 multiplied by 5?")).toEqual("25");
        expect(QueryProcessor("What is 12 multiplied by 1?")).toEqual("12");
    });

    test('should subtract numbers', () => {
        expect(QueryProcessor("What is 5 minus 5?")).toEqual("0");
        expect(QueryProcessor("What is 12 minus 1?")).toEqual("11");
    });

    // test('should get prime numbers', () => {
    //     expect(QueryProcessor("Which of the following numbers are primes: 65, 35, 2, 3, 44?")).toEqual("2, 3");
    //     expect(QueryProcessor("Which of the following numbers are primes: 65, 35, 12, 3, 5?")).toEqual("3, 5");
    // });

});