// Write your tests here!
const caesar = require("../src/caesar")
const expect = require ("chai").expect

describe("caesar", ()=>{
    it('(thinkful,3) should be: wklqnixo', ()=>{
        const actual =caesar("thinkful",3)
        const expected = 'wklqnixo'
        expect(actual).to.equal(expected)
    })

    it('(thinkful,-3) should be: qefkhcri', ()=>{
        const actual =caesar("thinkful",3)
        const expected = 'wklqnixo'
        expect(actual).to.be.a("string")
    })

    it('(thinkful, 3, false) should be: thinkful', ()=>{
        const actual =caesar("wklqnixo",3, false)
        const expected = 'thinkful'
        expect(actual).to.equal(expected)
    })

    it(`(This is a secret message!, 8) should be: bpqa qa i amkzmb umaaiom!`, () => {
        const actual = caesar("This is a secret messge!", 8);
        const expected = 'bpqa qa i amkzmb umaaom!';
        expect(actual).to.equal(expected);
    })
    
    it('("BPQA qa I amkzmb umaaiom!", 8, false) should be: this is a secret message!', ()=>{
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
        const expected = 'this is a secret message!'
        expect(actual).to.equal(expected)
    })

    it('(thinkful) should be: false', ()=>{
        const actual =caesar("thinkful")
        const expected = false
        expect(false).to.be.false;
    })
    
    it('(thinkful, 99) should be: false', ()=>{
        const actual =caesar("thinkful",99)
        const expected = false
        expect(false).to.be.false;
    })

    it('(thinkful, -26) should be: false', ()=>{
        const actual =caesar("thinkful",-26)
        const expected = false
        expect(false).to.be.false;
    })
    
    it('(Zebra Magazine, 3) should be: cheud pdjdclqh', ()=>{
        const actual =caesar("Zebra Magazine",3)
        const expected = 'cheud pdjdclqh'
        expect(actual).to.equal(expected)
    })

    it("should return false if input is empty", () => {
		const input = ""
		const shift = 3
		const actual = caesar(input, shift)
		const expected = false
		expect(false).to.be.false;
	});

    it("should return false if shift is empty", () => {
		const input = 'thinkful'
		const shift = ''
		const actual = caesar(input, shift)
		const expected = false
		expect(false).to.be.false;
	});

    it("Cannot shift cannot equal 0", function () {
        const actual = caesar("thinkful", 0);
        const expected = false;
        expect(false).to.be.false;
      });

})




