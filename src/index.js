import React, { useState, Fragment, useEffect, useRef, useMemo } from 'react'
// import { Select, Checkbox } from 'antd'
// import * as _ from 'lodash'
// import ColorPicker from 'src/components/ColorPicker'
import LegendIcon from 'src/components/Icons'
// import './index.scss'

const DEFAULT_SIDE_NUMBER_MAX = 15

const Legend_Reset_ALL = {
    id: -1,
    name: 'ALL',
}

const PlotlyLegend = (props) => {
    const {
        data = [],
        sideNumberMax = DEFAULT_SIDE_NUMBER_MAX,
        style,
        onChange,
        initialHeight,
        groups,
    } = props
    const [colorPickerVisible, setColorPickerVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [hideLegends, setHideLegends] = useState([Legend_Reset_ALL])
    const [resetValue, setResetValue] = useState(undefined)
    const [orderByGroup, setOrderByGroup] = useState(false)

    const ref = useRef(null)

    let time = null

    useEffect(() => {
        const resize = () => {
            if (ref.current && initialHeight && typeof initialHeight === 'function') {
                initialHeight(ref.current.offsetHeight)
            }
        }
        resize()
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialHeight, orderByGroup])

    const handleClick = (e) => {
        if (time) {
            time = clearTimeout(time)
        }
        const convertData = () => {
            const result = data.filter((i) => i.id !== e.id)
            const hideList = hideLegends.concat(e)
            setHideLegends(hideList)
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
            setHideLegends([Legend_Reset_ALL])
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

    const handleClickGroupName = (e) => {
        const name = e?.name === 'No Group' ? '' : e?.name
        const hideItem = data.filter((i) => i.extra === name)
        setHideLegends((state) => state.concat(hideItem))
        setResetValue(undefined)
        if (onChange && typeof onChange === 'function') {
            onChange(data.filter((i) => i.extra !== name))
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
        if (orderByGroup) {
            const groupsList = [...new Set(data.map((i) => i.extra))]
                .sort((a, b) => {
                    if (a > b) {
                        return -1
                    }
                    return 1
                })
                .map((e) => {
                    const currentGroup = data.filter((i) => i.extra === e)
                    return {
                        value: currentGroup,
                        name: currentGroup[0]?.extra || 'No Group',
                    }
                })
            const legendList = groupsList.map((i) => i.value).flat()
            const spliceList = legendList.concat()
            const list = [spliceList.splice(0, length), spliceList].filter((i) => i && i[0])
            return {
                list,
                groupInfo: groupsList.map((i) => {
                    const findIndex = legendList.findIndex((e) => {
                        if (i.name === 'No Group') {
                            // TODO: extra is 0
                            return !e.extra
                        }
                        return e.extra === i.name
                    })
                    return {
                        name: i.name,
                        index: findIndex,
                    }
                }),
            }
        }
        const lists = data.concat()
        const result = [lists.splice(0, length), lists].filter((i) => i && i[0])
        return {
            list: result,
        }
    }, [data, length, orderByGroup])

    const legends = listGroup.list || []

    // const sortHideLegend = hideLegends.sort((a, b) => a?.id - b?.id)

    return (
        <Fragment>
            <div className={'expanded-plot-legend'} ref={ref} style={style}>
                {/* <Select
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
                </Select> */}
                {groups && (
                    <div data-html2canvas-ignore>
                        {/* <Checkbox
                            style={{ width: '100%', marginBottom: '5px' }}
                            checked={orderByGroup}
                            onChange={(e) => setOrderByGroup(e.target.checked)}
                        >
                            Order by Group
                        </Checkbox> */}
                    </div>
                )}
                <div className="plot-legend-group">
                    {legends.map((list, index) => (
                        <div
                            key={index}
                            className="plot-legend-group-item"
                            style={{ width: `${100 / legends.length}%` }}
                        >
                            {list.map((item, i) => {
                                const isScatter = item.type?.includes('scatter')
                                const findInfo = (listGroup.groupInfo || []).find(
                                    (e) => e.index === length * index + i
                                )
                                return (
                                    <div className="plot-legend" key={item.id}>
                                        {orderByGroup && findInfo && (
                                            <div
                                                className="legend-text-extra"
                                                style={{ margin: '10px 0' }}
                                                onClick={() => handleClickGroupName(findInfo)}
                                            >
                                                {findInfo.name}:
                                            </div>
                                        )}
                                        <div className="legend-text">
                                            <span
                                                title={'edit color'}
                                                className="legend-icon"
                                                style={{ height: '20px' }}
                                                onClick={() => handleClickIcon(item)}
                                                onDoubleClick={() => handleDoubleClick(item)}
                                            >
                                                <LegendIcon
                                                    {...{
                                                        marker: {
                                                            ...item?.marker,
                                                            symbol: isScatter
                                                                ? item?.marker?.symbol
                                                                : 1,
                                                        },
                                                        line: item?.line,
                                                        mode: isScatter ? item?.mode : null,
                                                    }}
                                                />
                                            </span>
                                            <span
                                                title={item.name}
                                                className="legend-word"
                                                onClick={() => handleClick(item)}
                                                onDoubleClick={() => handleDoubleClick(item)}
                                            >
                                                {item.name}
                                            </span>
                                        </div>
                                        <div
                                            className="legend-text-extra"
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
            {/* <ColorPicker
                visiable={colorPickerVisible}
                onClose={() => setColorPickerVisible(false)}
                onChange={handleColorChange}
            /> */}
        </Fragment>
    )
}

export default PlotlyLegend
