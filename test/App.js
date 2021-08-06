import React from 'react'
import PlotlyLegend from 'src'

const getSymbol = (index) => {
    if (index >= 14 && index <= 16) {
        // those symbols like circle (index === 0)
        // use symbol-open
        return index - 14 + 100
    }
    if (index >= 22 && index <= 24) {
        // those symbols similar
        // use symbol-open(3, 4, 5)
        return index - 22 + 3 + 100
    }
    if (index >= 27 && index <= 29) {
        // those symbols similar
        // use symbol-open(17, 18, 19)
        return index - 27 + 17 + 100
    }
    return index
}

export default () => {
    const legends = Array.from(new Array(8), (_, index) => {
        return {
            id: index,
            name: `item_${index}`,
            mode: 'lines+markers',
            type: 'scatter',
            marker: {
                color: 'gray',
                symbol: getSymbol(index),
                size: 6,
            },
        }
    })
    return (
        <div>
            <h3>plotly-legend-react</h3>
            <PlotlyLegend
                data={legends}
                // onChange={(e) => setSelectedLegends(e)}
                // initialHeight={(e) => setLegendHeight(e)}
                // groups={groups}
                style={{ width: '240px' }}
            />
        </div>
    )
}