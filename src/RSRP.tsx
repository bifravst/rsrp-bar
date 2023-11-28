import React from 'react'
import { dbmToPercent } from './dbmToPercent.js'

/**
 * Renders the Reference Signal Received Power (RSRP).
 *
 * RSRP is the average power level received from a single reference signal in an LTE (Long-term Evolution) network.
 *
 * Valid dBm values are typically between -140 and -40 dBm
 */
export const RSRP = ({
	dbm,
	renderBar,
	renderInvalid,
	minValid,
	maxValid,
}: {
	dbm: number
	renderBar: (args: { dbm: number; quality: number }) => React.ReactElement<any>
	renderInvalid: () => React.ReactElement<any>
	minValid?: number
	maxValid?: number
}): React.ReactElement<any> => {
	const min = minValid ?? -140
	const max = maxValid ?? -40
	if (dbm < min) {
		return renderBar({ quality: 0, dbm })
	}

	if (dbm >= min && dbm <= max) {
		const quality = dbmToPercent({ dbm, min, max })
		return renderBar({ quality, dbm })
	}
	return renderInvalid()
}
