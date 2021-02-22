import { strictEqual, throws } from 'assert'
import { distance } from "../app";

describe('distance', function () {
	it('returns 1', function () {
		strictEqual(distance('book', 'books'), 1)
	})
	it('returns 4', function () {
		strictEqual(distance('cats', 'placate'), 4)
	})
	it('throws an exception', function () {
		throws(() => distance([], 'c'), { message: 'InvalidType' })
	})
	it('returns 0', function () {
		strictEqual(distance('', ''), 0)
	})
	it('returns 2', function () {
		strictEqual(distance('bring', 'fringe'), 2)
	})
})