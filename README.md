## plotly-legend-react
A simple rewrite legends component for plotly
```
<div>
    <PlotLegend/>
</div>
```
### Install & Usage
`yarn add plotly-legend-react`
#### Include the Component
```
import React from 'react'
import LegendPlot from 'react-plotly-legend'

export default () => {
    return (
        <LegendPlot data={data} layout={layout} />
    )
}
```
LegendPlot's props is the same as plotly
### Demo
![Drag Racing](https://github.com/zhoutinglilly/react-plotly-legend/blob/master/test/demo1.png)