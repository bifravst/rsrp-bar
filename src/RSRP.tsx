import React from 'react'
import { rsrpToPercent } from './rsrpToPercent'

/**
 * Renders the Reference Signal Received Power (RSRP).
 *
 * RSRP is the average power level received from a single reference signal in an LTE (Long-term Evolution) network.
 *
 * 0: RSRP < −140 dBm
 * 1: – When −140 dBm ≤ RSRP < −139 dBm
 * 2: When −139 dBm ≤ RSRP < −138 dBm
 * ..95: When −46 dBm ≤ RSRP < −45 dBm
 * 96: When −45 dBm ≤ RSRP < −44 dBm
 * 97: When −44 dBm ≤ RSRP
 * 255: Not known or not detectable
 */
export const RSRP = ({
	rsrp,
	renderBar,
	renderInvalid,
}: {
	rsrp: number
	renderBar: (args: {
		dbm?: number
		quality: number
	}) => React.ReactElement<any>
	renderInvalid: () => React.ReactElement<any>
}) => {
	if (rsrp === 255) {
		return renderBar({ quality: 0 })
	}

	if (rsrp >= 0 && rsrp <= 140) {
		const dbm = -140 + rsrp
		const quality = rsrpToPercent(dbm)
		return renderBar({ quality, dbm })
	}
	return renderInvalid()
}
