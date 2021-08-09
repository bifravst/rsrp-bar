import { dbmToPercent } from './dbmToPercent'

describe('dbmToPercent', () => {
	it.each([
		[-150, 0],
		[-140, 0],
		[-115, 25],
		[-90, 50],
		[-65, 75],
		[-40, 100],
		[-30, 100],
	])('%i: %i%%', (dbm, percent) => {
		expect(dbmToPercent({ dbm, min: -140, max: -40 }) * 100).toEqual(percent)
	})
})
