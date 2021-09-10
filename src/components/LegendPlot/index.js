import React, { useState, useRef } from 'react'
import Plotly from 'plotly.js'
import Plot from 'react-plotly.js'
import html2canvas from 'html2canvas'
import { notification } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useDeepEffect } from '../../utils/Hooks'
import { DEFAULT_COLOR } from '../../utils/constant'
import PlotLegend from '../Legend'

export default React.memo((props) => {
    const { data = [], layout = {}, config = {}, style, ...plotProps } = props
    const [selectedLegends, setSelectedLegends] = useState()
    const [plotData, setPlotData] = useState(data)
    const [legendHeight, setLegendHeight] = useState(450)
    const ref = useRef()

    let time = null

    useDeepEffect(() => {
        const legends = data.map((i, index) => ({
            id: index,
            name: i.name || `trace ${index}`,
            type: i.type,
            marker: {
                color: DEFAULT_COLOR[index],
                ...i.marker,
            }, // if no use default
            mode: i.mode,
        }))
        setSelectedLegends(legends)
    }, [data])

    useDeepEffect(() => {
        if (selectedLegends) {
            const newData = selectedLegends
                .concat()
                .reverse()
                .map((i) => {
                    const existData = data.find((d, index) => {
                        if (d.name) {
                            return d.name === i.name
                        }
                        return `trace ${index}` === i.name
                    })
                    return {
                        ...existData,
                        marker: i.marker,
                    }
                })
            setPlotData(newData)
        }
    }, [selectedLegends])

    const openNotification = () => {
        notification.open({
            message: 'Download plot as a png, loading',
            icon: <LoadingOutlined style={{ color: '#1890ff' }} />,
            description: 'you are downloading plot, please wait a minute',
            key: 'download',
            duration: 0,
            onClose: () => {
                if (time) {
                    time = clearTimeout(time)
                }
            },
        })
    }

    const download = async () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop
        if (ref.current) {
            const canvas = await html2canvas(ref.current, {
                useCORS: true,
                scrollY: -scrollPos,
                scrollX: 0,
            })

            const imgUrl = canvas.toDataURL('image/png')
            const a = document.createElement('a') // 创建a标签
            a.setAttribute('download', 'plot') // download属性
            a.setAttribute('href', imgUrl) // href链接
            a.click()
            // close loading notification
            notification.close('download')
        }
    }

    const handleLegendsChange = (e) => {
        setSelectedLegends(e)
    }

    const configLayout = {
        ...layout,
        margin: {
            ...(layout.margin || {}),
            r: layout.showlegend !== false ? 260 : 30,
        },
        showlegend: false,
    }

    return (
        <div
            ref={ref}
            style={{
                width: '100%',
                height: legendHeight > 460 ? `${legendHeight + 60}px` : '470px',
                marginBottom: '15px',
                ...style,
            }}
            className={'react-plot-legend-container'}
        >
            <Plot
                {...plotProps}
                data={plotData}
                layout={configLayout}
                style={{ width: '100%' }}
                config={{
                    ...config,
                    modeBarButtonsToRemove: ['toImage'].concat(config.modeBarButtonsToRemove || []),
                    modeBarButtonsToAdd: [
                        {
                            name: 'Download plot as a png',
                            icon: Plotly.Icons.camera,
                            click: () => {
                                openNotification()
                                // wait notification open
                                if (time) {
                                    time = clearTimeout(time)
                                }
                                time = setTimeout(() => {
                                    download()
                                }, 400)
                            },
                        },
                    ].concat(config.modeBarButtonsToAdd || []),
                }}
            />
            {layout.showlegend !== false && (
                <PlotLegend data={selectedLegends} onChange={handleLegendsChange} style={{ width: '240px' }} />
            )}
        </div>
    )
})
