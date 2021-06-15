// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;
describe('polybius', ()=>{
    it('(thinkful) should be: 4432423352125413', ()=>{
        const actual =polybius("thinkful")
        const expected = '4432423352125413'
        expect(actual).to.equal(expected)
    })
    
    it('(Hello world) should be: 3251131343 2543241341', ()=>{
        const actual =polybius("Hello world")
        const expected = '3251131343 2543241341'
        expect(actual).to.equal(expected)
    })

    it('(3251131343 2543241341, false) should be: hello world', ()=>{
        const actual =polybius("3251131343 2543241341", false)
        const expected = 'hello world'
        expect(actual).to.equal(expected)
    })

    it('(4432423352125413, false) should be: th(i/j)nkful', ()=>{
        const actual =polybius("4432423352125413", false)
        const expected = 'th(i/j)nkful'
        expect(actual).to.equal(expected)
    })


    it('(4432423352125413, false) should be: false', ()=>{
        const actual =polybius("44324233521254134", false)
        const expected = false
        expect(false).to.be.false;
    })
    it("should return false", () => {
		const input = ""
		const encode = true
		const actual = polybius(input, encode)
		const expected = false
		expect(false).to.be.false;
	});
	it("should return false", () => {
		const input = '1234567'
		const encode = false
		const actual = polybius(input, encode)
		const expected = false
		expect(false).to.be.false;
	});
})

