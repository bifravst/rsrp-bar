export const dbmToPercent = ({
	dbm,
	min,
	max,
}: {
	dbm: number
	min: number
	max: number
}): number => {
	if (dbm <= min) return 0
	if (dbm < max) {
		return (dbm - min) / Math.abs(min - max)
	}
	return 1
}
