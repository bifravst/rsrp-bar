import React from 'react'
import ReactDOM from 'react-dom'
import { RSRP } from './RSRP'
import { RSRPBar } from './RSRPBar'
import { dbmToRSRP } from './dbmToRSRP'

const renderForDBM = (dbm: number) => (
	<RSRP
		rsrp={dbmToRSRP(dbm)}
		renderBar={({ quality }) =>
			quality === 0 ? (
				<>
					<td>
						<RSRPBar quality={0} />
					</td>
					<td>Not known or not detectable</td>
				</>
			) : (
				<>
					<td>
						<RSRPBar quality={quality} />
					</td>
					<td>-</td>
				</>
			)
		}
		renderInvalid={() => (
			<>
				<td>❎</td>
				<td>Unexpected value reported!</td>
			</>
		)}
	/>
)

ReactDOM.render(
	<table>
		<thead>
			<tr>
				<th>dbm</th>
				<th>icon</th>
				<th>info</th>
			</tr>
		</thead>
		<tbody>
			{[
				1000,
				100,
				10,
				-0,
				-70,
				-75,
				-80,
				-85,
				-90,
				-95,
				-100,
				-105,
				-110,
				-140,
				-150,
				-1000,
			].map((dbm, key) => (
				<tr key={key}>
					<td>{dbm}</td>
					{renderForDBM(dbm)}
				</tr>
			))}
		</tbody>
	</table>,
	document.querySelector('#root'),
)
