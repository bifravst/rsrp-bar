import React from 'react'
import ReactDOM from 'react-dom'
import { RSRP } from './RSRP'
import { SignalQualityTriangle } from './SignalQualityTriangle'

const colors = [
	'#03a8a0',
	'#039c4b',
	'#66d313',
	'#fedf17',
	'#ff0984',
	'#21409a',
	'#04adff',
	'#e48873',
	'#f16623',
	'#f44546',
]

const color = function* () {
	let i = 0
	while (true) {
		yield colors[i]
		i = (i + 1) % colors.length
	}
}

const colorGenerator = color()

const renderForDBM = (dbm: number) => (
	<RSRP
		dbm={dbm}
		renderBar={({ quality }) => (
			<>
				<td>
					<SignalQualityTriangle
						quality={quality}
						style={{
							color: colorGenerator.next().value,
						}}
					/>
				</td>
				<td>-</td>
			</>
		)}
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
				1000, 100, 10, -0, -40, -50, -60, -70, -80, -90, -100, -110, -120, -130,
				-140, -150, -200, -1000,
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
