import React, { useState, Fragment, useEffect, useRef, useMemo } from 'react'
import { Select, Checkbox } from 'antd'
import * as _ from 'lodash'
import ColorPicker from 'src/components/ColorPicker'
import LegendIcon from '../Icons'
import './index.less'

const DEFAULT_SIDE_NUMBER_MAX = 15

const LEGEND_RESET_ALL = [
    {
        id: -1,
        name: 'ALL',
    },
]

/**
 *  type Props = {
 *      data: Array<{
 *          id: number | string,
 *          name: string,
 *          type: PlotTraceType,
 *          mode: 'lines+markers' | 'markers' | 'lines',
 *          marker: {
 *              color: 'string',
 *              symbol: number | string,
 *              size: number
 *          }
 *      }>,
 *      sideNumberMax?: number,
 *      onChange?: Function,
 *      initialHeight?: Function,
 *      style?: Object,
 *      groups?: Boolean
 *  }
 */

export default (props) => {
    const { data = [], sideNumberMax = DEFAULT_SIDE_NUMBER_MAX, style, onChange } = props
    const [colorPickerVisible, setColorPickerVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [hideLegends, setHideLegends] = useState(LEGEND_RESET_ALL)
    const [resetValue, setResetValue] = useState(undefined)
    const [orderByGroup, setOrderByGroup] = useState(false)

    const ref = useRef(null)

    let time = null

    const handleClick = (e) => {
        if (time) {
            time = clearTimeout(time)
        }
        const convertData = () => {
            const result = data.filter((i) => i.id !== e.id)
            setHideLegends((state) => state.concat(e))
            setResetValue(undefined)
            onChange && onChange(result)
        }
        time = setTimeout(() => {
            convertData()
        }, 300)
    }

    const handleDoubleClick = (e) => {
        if (time) {
            time = clearTimeout(time)
        }

        const hideItem = data.filter((i) => i.id !== e.id)
        setHideLegends((state) => _.unionBy(state, hideItem))
        setResetValue(undefined)
        onChange && onChange([e])
    }

    const handleClickIcon = (e) => {
        if (time) {
            time = clearTimeout(time)
        }

        time = setTimeout(() => {
            setColorPickerVisible(true)
            setSelectedItem(e)
        }, 300)
    }

    const handleSelect = (e) => {
        if (!e) {
            return
        }
        let result = data
        if (e.value === -1) {
            const hide = hideLegends.filter((i) => i.id !== e.value)
            result = result.concat(hide)
            setHideLegends(LEGEND_RESET_ALL)
        } else {
            const current = hideLegends.filter((i) => i.id === e.value) || []
            result = current.concat(result)
            setHideLegends((state) => state.filter((i) => i.id !== e.value))
        }
        setResetValue(e)
        if (onChange && typeof onChange === 'function') {
            onChange(result)
        }
    }

    const handleColorChange = (e) => {
        const result = data.map((i) => {
            if (i.id === selectedItem.id) {
                return {
                    ...i,
                    marker: {
                        ...i?.marker,
                        color: e,
                    },
                }
            }
            return i
        })
        setColorPickerVisible(false)
        setSelectedItem(null)
        if (onChange && typeof onChange === 'function') {
            onChange(result)
        }
    }

    const displayExtra = (value) => {
        if (value) {
            if (orderByGroup) {
                return 'none'
            }
            return 'block'
        }
        return 'none'
    }

    const length = data.length > sideNumberMax * 2 ? data.length / 2 : sideNumberMax

    const listGroup = useMemo(() => {
        const concatData = data.concat()
        const lists = [concatData.splice(0, length), concatData].filter((i) => i?.[0])
        return {
            lists,
        }
    }, [data, length])

    const legends = listGroup.lists || []

    return (
        <Fragment>
            <div className={'react-plot-legend-container'} ref={ref} style={style}>
                <Select
                    placeholder="Reset"
                    allowClear
                    onChange={handleSelect}
                    size="small"
                    labelInValue
                    value={resetValue}
                    style={{ width: '100%', marginBottom: '5px' }}
                    data-html2canvas-ignore
                >
                    {hideLegends.map((i) => (
                        // TODO: options has groupInfo
                        <Select.Option key={i.id} value={i.id}>
                            {i.name}
                        </Select.Option>
                    ))}
                </Select>
                <div className="react-plot-legend-list">
                    {legends.map((list, index) => (
                        <div
                            key={index}
                            className="react-plot-legend-list-item"
                            style={{ width: `${100 / legends.length}%` }}
                        >
                            {list.map((item, i) => {
                                const isScatter = item.type?.includes('scatter')
                                return (
                                    <div className="react-plot-legend-item" key={item.id}>
                                        <div className="legend-content">
                                            <span
                                                title={'edit color'}
                                                className="legend-icon"
                                                style={{ height: '20px' }}
                                                onClick={() => handleClickIcon(item)}
                                                onDoubleClick={() => handleDoubleClick(item)}
                                            >
                                                <LegendIcon
                                                    {...{
                                                        ...item,
                                                        marker: {
                                                            ...item?.marker,
                                                            symbol: isScatter ? item?.marker?.symbol : 1,
                                                        },
                                                        mode: isScatter ? item?.mode : null,
                                                    }}
                                                />
                                            </span>
                                            <span
                                                title={item.name}
                                                className="legend-text"
                                                onClick={() => handleClick(item)}
                                                onDoubleClick={() => handleDoubleClick(item)}
                                            >
                                                {item.name}
                                            </span>
                                        </div>
                                        <div
                                            className="legend-extra-description"
                                            onClick={() => handleClick(item)}
                                            onDoubleClick={() => handleDoubleClick(item)}
                                            style={{ display: displayExtra(item.extra) }}
                                        >
                                            {item.extra}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>
            <ColorPicker
                visiable={colorPickerVisible}
                onClose={() => setColorPickerVisible(false)}
                onChange={handleColorChange}
            />
        </Fragment>
    )
}
