import { dbmToPercent } from './dbmToPercent.js'
import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

void describe('dbmToPercent', () => {
	for (const [dbm, percent] of [
		[-150, 0],
		[-140, 0],
		[-115, 25],
		[-90, 50],
		[-65, 75],
		[-40, 100],
		[-30, 100],
	] as [number, number][]) {
		void it(`%${dbm}: ${percent}%`, () =>
			assert.equal(dbmToPercent({ dbm, min: -140, max: -40 }) * 100, percent))
	}
})
