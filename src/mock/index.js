const scatterData = [
    {
        marker: { color: 'rgb(96, 123, 139)', symbol: 3 },
        mode: 'markers',
        name: 'vulva',
        pointpos: 0,
        showlegend: false,
        type: 'scatter',
        x: [2.200781626046198],
        y: [8.37],
    },
    {
        marker: { color: 'rgb(0, 0, 0)', symbol: 4 },
        mode: 'markers',
        name: 'uterus',
        pointpos: 0,
        showlegend: false,
        type: 'scatter',
        x: [
            3.718982605078496, 1.9021565674106136, 21.6023895510918, 1.8126432333167848, 2.388230359301048,
            33.9987075805908, 2.39421215918226,
        ],
        y: [7.82, 23.66, 69.04, 33.07, 11.15, 16.78, 42.11],
    },
    {
        marker: { color: 'rgb(255, 127, 14)' },
        mode: 'lines',
        name: 'urinary_tract',
        pointpos: 0,
        showlegend: false,
        type: 'scatter',
        x: [2.2538289045266517, 2.3565217547957205, 2.3179476757511903, 2.735555829989183, 2.7300152308245837],
        y: [48.5, 10.89, 57.99, 35.32, 47.25],
    },
    {
        marker: { color: 'rgb(139, 101, 8)', symbol: 5 },
        mode: 'markers + lines',
        name: 'embryo',
        pointpos: 0,
        showlegend: false,
        type: 'scatter',
        x: [3.2343504344984293, 4.726545030784776],
        y: [8.37, 36.85],
    },
    {
        marker: { color: 'rgb(96, 123, 19)', symbol: 6 },
        mode: 'markers',
        name: 'aa',
        pointpos: 0,
        showlegend: false,
        type: 'scatter',
        x: [3.200781626046198],
        y: [5.37],
    },
    {
        marker: { color: 'rgb(0, 120, 0)', symbol: 7 },
        mode: 'markers',
        name: 'bb',
        pointpos: 0,
        showlegend: false,
        type: 'scatter',
        x: [
            5.718982605078496, 6.9021565674106136, 18.6023895510918, 0.8126432333167848, 3.388230359301048,
            24.9987075805908, 12.39421215918226,
        ],
        y: [7.82, 23.66, 69.04, 33.07, 11.15, 16.78, 42.11],
    },
    {
        marker: { color: 'rgb(25, 127, 14)', symbol: 8 },
        mode: 'markers',
        name: 'cc',
        pointpos: 0,
        showlegend: false,
        type: 'scatter',
        x: [6.2538289045266517, 2.3565217547957205, 2.3179476757511903, 0.735555829989183, 7.7300152308245837],
        y: [50.5, 15.89, 50.99, 325.32, 47.25],
    },
    {
        marker: { color: 'rgb(139, 101, 8)', symbol: 9 },
        mode: 'markers',
        name: 'bb',
        pointpos: 0,
        showlegend: false,
        type: 'scatter',
        x: [3.2343504344984293, 4.726545030784776],
        y: [23.37, 89.85],
    },
]

const boxData = (() => {
    const y0 = []
    const y1 = []
    for (let i = 0; i < 50; i += 1) {
        y0[i] = Math.random()
        y1[i] = Math.random() + 1
    }

    const trace1 = {
        y: y0,
        type: 'box',
    }

    const trace2 = {
        y: y1,
        type: 'box',
    }

    return [trace1, trace2]
})()

const barData = [
    {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
        type: 'bar',
    },
    // {
    //     x: ['giraffes', 'orangutans', 'monkeys'],
    //     y: [12, 18, 29],
    //     name: 'LA Zoo',
    //     type: 'bar'
    // }
]

export { barData, boxData, scatterData }
