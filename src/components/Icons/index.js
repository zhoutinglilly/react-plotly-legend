import React from 'react'
import { isNumeric } from 'src/utils'
import Path from './config'

const DOTPATH = 'M0,0.5L0.5,0L0,-0.5L-0.5,0Z'

export default (props) => {
    const { type, mode = 'markers', line = {}, marker = {} } = props

    const defaultSymbol = (() => {
        if (!marker.symbol) {
            if (type.includes('scatter')) {
                return 0
            }
            return 1
        }
        return marker.symbol
    })()
    const { color = 'grey', symbol = defaultSymbol, size = 6, opacity = 1 } = marker
    const useSize = (() => {
        if (type.includes('scatter')) {
            return size / 2
        }
        return size
    })()

    const symbolNumber = (s) => {
        if (isNumeric(s)) {
            return +s
        }

        if (typeof s === 'string') {
            let base = 0
            let newSymbol = s
            if (s.indexOf('-open') > 0) {
                base = 100
                newSymbol = newSymbol.replace('-open', '')
            }
            if (s.indexOf('-dot') > 0) {
                base += 200
                newSymbol = newSymbol.replace('-dot', '')
            }
            return (Path[newSymbol]?.n || 0) + base
        }
        return 0
    }
    const number = symbolNumber(symbol) % 100
    const currentSymbol = Object.values(Path)[number]
    const path = (() => {
        if (symbolNumber(symbol) >= 200 && !currentSymbol?.noDot) {
            return currentSymbol?.getPath(useSize) + DOTPATH
        }
        return currentSymbol?.getPath(useSize)
    })()

    const needLine = currentSymbol?.needLine
    const symbolStyles = (() => {
        const isOpen = symbolNumber(symbol) >= 300 || (symbolNumber(symbol) >= 100 && symbolNumber(symbol) < 200)
        if (type === 'box') {
            return {
                strokeWidth: '2px',
                fill: color,
                fillOpacity: 0.5,
                stroke: color,
                strokeOpacity: 1,
            }
        }
        if (isOpen) {
            return {
                stroke: color,
                strokeOpacity: opacity,
                strokeWidth: '1px',
                fill: 'none',
            }
        }
        return {
            strokeWidth: 0,
            fill: color,
            fillOpacity: opacity,
        }
    })()
    const hasLine = !!mode?.includes('line')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="20px" viewBox="0 -10 40 20" version="1.1">
            <path
                d="M5,0h30"
                style={{
                    fill: 'none',
                    stroke: line?.color || color,
                    strokeOpacity: hasLine || needLine ? line.opacity || opacity : 0,
                    strokeWidth: line?.width || '2px',
                }}
            />
            <path
                transform="translate(20)"
                d={path}
                style={{ opacity: mode === 'lines' ? 0 : opacity, ...symbolStyles }}
            />
        </svg>
    )
}
