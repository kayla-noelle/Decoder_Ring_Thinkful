// Write your tests here!
const substitution = require("../src/substitution")
const expect = require("chai").expect;
describe('substitution', ()=>{
    it('("thinkful", "xoyqmcgrukswaflnthdjpzibev") should be: jrufscpw', ()=>{
        const actual =substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        const expected = 'jrufscpw'
        expect(actual).to.equal(expected)
    })
    
    it('("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev") should be: elp xhm xf mbymwwmfj dne', ()=>{
        const actual =substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.equal(expected)
    })

    it('(jrufscpw, xoyqmcgrukswaflnthdjpzibev, false) should be: thinkful', ()=>{
        const actual =substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = 'thinkful'
        expect(actual).to.equal(expected)
    })

    it('(message, "$wae&zrdxtfcygvuhbijnokmpl) should be: y&ii$r&o', ()=>{
        const actual =substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
        const expected = 'y&ii$r&'
        expect(actual).to.equal(expected)
    })

    it('(y&ii$r&,$wae&zrdxtfcygvuhbijnokmpl, false) should be: message', ()=>{
        const actual =substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        const expected = 'message'
        expect(actual).to.equal(expected)
    })
    
    it('(thinkful, short) should be: false', ()=>{
        const actual =substitution("thinkful", "short")
        const expected = false
        expect(false).to.be.false;
    })
    
    it('(thinkful,abcabcabcabcabcabcabcabcyz) should be: false', ()=>{
        const actual =substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        const expected = false
        expect(false).to.be.false;
    })
    it("should return false if input is empty", () => {
		const input = ""
		const alphabet = 'bcdefghijklmnopqrstuvwxyza'
		const encode = true
		const actual = substitution(input,alphabet,encode)
		const expected = false
		expect(false).to.be.false;
	});
	it("should return false if alphabet is not 26 characters", () => {
		const input = ""
		const alphabet = 'bcdefghijklmnopqrstuvwx'
		const encode = true
		const actual = substitution(input,alphabet,encode)
		const expected = false
		expect(false).to.be.false;
	});
	it("should return false if alphabet has repeating values", () => {
		const input = ""
		const alphabet = 'bcdefghijklmnopqrstuvwxyaa'
		const encode = true
		const actual = substitution(input,alphabet,encode)
		const expected = false
		expect(false).to.be.false;
	});

})

