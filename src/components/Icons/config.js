import { round } from 'src/utils'

/** Marker symbol definitions
 * users can specify markers either by number or name
 * add 100 (or '-open') and you get an open marker
 *  open markers have no fill and use line color as the stroke color
 * add 200 (or '-dot') and you get a dot in the middle
 * add both and you get both
 */

export default {
    circle: {
        n: 0,
        getPath: function (r) {
            var rs = round(r, 2)
            return (
                'M' +
                rs +
                ',0A' +
                rs +
                ',' +
                rs +
                ' 0 1,1 0,-' +
                rs +
                'A' +
                rs +
                ',' +
                rs +
                ' 0 0,1 ' +
                rs +
                ',0Z'
            )
        },
    },
    square: {
        n: 1,
        getPath: function (r) {
            var rs = round(r, 2)
            return 'M' + rs + ',' + rs + 'H-' + rs + 'V-' + rs + 'H' + rs + 'Z'
        },
    },
    diamond: {
        n: 2,
        getPath: function (r) {
            var rd = round(r * 1.3, 2)
            return 'M' + rd + ',0L0,' + rd + 'L-' + rd + ',0L0,-' + rd + 'Z'
        },
    },
    cross: {
        n: 3,
        getPath: function (r) {
            var rc = round(r * 0.4, 2)
            var rc2 = round(r * 1.2, 2)
            return (
                'M' +
                rc2 +
                ',' +
                rc +
                'H' +
                rc +
                'V' +
                rc2 +
                'H-' +
                rc +
                'V' +
                rc +
                'H-' +
                rc2 +
                'V-' +
                rc +
                'H-' +
                rc +
                'V-' +
                rc2 +
                'H' +
                rc +
                'V-' +
                rc +
                'H' +
                rc2 +
                'Z'
            )
        },
    },
    x: {
        n: 4,
        getPath: function (r) {
            var rx = round((r * 0.8) / Math.sqrt(2), 2)
            var ne = 'l' + rx + ',' + rx
            var se = 'l' + rx + ',-' + rx
            var sw = 'l-' + rx + ',-' + rx
            var nw = 'l-' + rx + ',' + rx
            return 'M0,' + rx + ne + se + sw + se + sw + nw + sw + nw + ne + nw + ne + 'Z'
        },
    },
    'triangle-up': {
        n: 5,
        getPath: function (r) {
            var rt = round((r * 2) / Math.sqrt(3), 2)
            var r2 = round(r / 2, 2)
            var rs = round(r, 2)
            return 'M-' + rt + ',' + r2 + 'H' + rt + 'L0,-' + rs + 'Z'
        },
    },
    'triangle-down': {
        n: 6,
        getPath: function (r) {
            var rt = round((r * 2) / Math.sqrt(3), 2)
            var r2 = round(r / 2, 2)
            var rs = round(r, 2)
            return 'M-' + rt + ',-' + r2 + 'H' + rt + 'L0,' + rs + 'Z'
        },
    },
    'triangle-left': {
        n: 7,
        getPath: function (r) {
            var rt = round((r * 2) / Math.sqrt(3), 2)
            var r2 = round(r / 2, 2)
            var rs = round(r, 2)
            return 'M' + r2 + ',-' + rt + 'V' + rt + 'L-' + rs + ',0Z'
        },
    },
    'triangle-right': {
        n: 8,
        getPath: function (r) {
            var rt = round((r * 2) / Math.sqrt(3), 2)
            var r2 = round(r / 2, 2)
            var rs = round(r, 2)
            return 'M-' + r2 + ',-' + rt + 'V' + rt + 'L' + rs + ',0Z'
        },
    },
    'triangle-ne': {
        n: 9,
        getPath: function (r) {
            var r1 = round(r * 0.6, 2)
            var r2 = round(r * 1.2, 2)
            return 'M-' + r2 + ',-' + r1 + 'H' + r1 + 'V' + r2 + 'Z'
        },
    },
    'triangle-se': {
        n: 10,
        getPath: function (r) {
            var r1 = round(r * 0.6, 2)
            var r2 = round(r * 1.2, 2)
            return 'M' + r1 + ',-' + r2 + 'V' + r1 + 'H-' + r2 + 'Z'
        },
    },
    'triangle-sw': {
        n: 11,
        getPath: function (r) {
            var r1 = round(r * 0.6, 2)
            var r2 = round(r * 1.2, 2)
            return 'M' + r2 + ',' + r1 + 'H-' + r1 + 'V-' + r2 + 'Z'
        },
    },
    'triangle-nw': {
        n: 12,
        getPath: function (r) {
            var r1 = round(r * 0.6, 2)
            var r2 = round(r * 1.2, 2)
            return 'M-' + r1 + ',' + r2 + 'V-' + r1 + 'H' + r2 + 'Z'
        },
    },
    pentagon: {
        n: 13,
        getPath: function (r) {
            var x1 = round(r * 0.951, 2)
            var x2 = round(r * 0.588, 2)
            var y0 = round(-r, 2)
            var y1 = round(r * -0.309, 2)
            var y2 = round(r * 0.809, 2)
            return (
                'M' +
                x1 +
                ',' +
                y1 +
                'L' +
                x2 +
                ',' +
                y2 +
                'H-' +
                x2 +
                'L-' +
                x1 +
                ',' +
                y1 +
                'L0,' +
                y0 +
                'Z'
            )
        },
    },
    hexagon: {
        n: 14,
        getPath: function (r) {
            var y0 = round(r, 2)
            var y1 = round(r / 2, 2)
            var x = round((r * Math.sqrt(3)) / 2, 2)
            return (
                'M' +
                x +
                ',-' +
                y1 +
                'V' +
                y1 +
                'L0,' +
                y0 +
                'L-' +
                x +
                ',' +
                y1 +
                'V-' +
                y1 +
                'L0,-' +
                y0 +
                'Z'
            )
        },
    },
    hexagon2: {
        n: 15,
        getPath: function (r) {
            var x0 = round(r, 2)
            var x1 = round(r / 2, 2)
            var y = round((r * Math.sqrt(3)) / 2, 2)
            return (
                'M-' +
                x1 +
                ',' +
                y +
                'H' +
                x1 +
                'L' +
                x0 +
                ',0L' +
                x1 +
                ',-' +
                y +
                'H-' +
                x1 +
                'L-' +
                x0 +
                ',0Z'
            )
        },
    },
    octagon: {
        n: 16,
        getPath: function (r) {
            var a = round(r * 0.924, 2)
            var b = round(r * 0.383, 2)
            return (
                'M-' +
                b +
                ',-' +
                a +
                'H' +
                b +
                'L' +
                a +
                ',-' +
                b +
                'V' +
                b +
                'L' +
                b +
                ',' +
                a +
                'H-' +
                b +
                'L-' +
                a +
                ',' +
                b +
                'V-' +
                b +
                'Z'
            )
        },
    },
    star: {
        n: 17,
        getPath: function (r) {
            var rs = r * 1.4
            var x1 = round(rs * 0.225, 2)
            var x2 = round(rs * 0.951, 2)
            var x3 = round(rs * 0.363, 2)
            var x4 = round(rs * 0.588, 2)
            var y0 = round(-rs, 2)
            var y1 = round(rs * -0.309, 2)
            var y3 = round(rs * 0.118, 2)
            var y4 = round(rs * 0.809, 2)
            var y5 = round(rs * 0.382, 2)
            return (
                'M' +
                x1 +
                ',' +
                y1 +
                'H' +
                x2 +
                'L' +
                x3 +
                ',' +
                y3 +
                'L' +
                x4 +
                ',' +
                y4 +
                'L0,' +
                y5 +
                'L-' +
                x4 +
                ',' +
                y4 +
                'L-' +
                x3 +
                ',' +
                y3 +
                'L-' +
                x2 +
                ',' +
                y1 +
                'H-' +
                x1 +
                'L0,' +
                y0 +
                'Z'
            )
        },
    },
    hexagram: {
        n: 18,
        getPath: function (r) {
            var y = round(r * 0.66, 2)
            var x1 = round(r * 0.38, 2)
            var x2 = round(r * 0.76, 2)
            return (
                'M-' +
                x2 +
                ',0l-' +
                x1 +
                ',-' +
                y +
                'h' +
                x2 +
                'l' +
                x1 +
                ',-' +
                y +
                'l' +
                x1 +
                ',' +
                y +
                'h' +
                x2 +
                'l-' +
                x1 +
                ',' +
                y +
                'l' +
                x1 +
                ',' +
                y +
                'h-' +
                x2 +
                'l-' +
                x1 +
                ',' +
                y +
                'l-' +
                x1 +
                ',-' +
                y +
                'h-' +
                x2 +
                'Z'
            )
        },
    },
    'star-triangle-up': {
        n: 19,
        getPath: function (r) {
            var x = round(r * Math.sqrt(3) * 0.8, 2)
            var y1 = round(r * 0.8, 2)
            var y2 = round(r * 1.6, 2)
            var rc = round(r * 4, 2)
            var aPart = 'A ' + rc + ',' + rc + ' 0 0 1 '
            return (
                'M-' +
                x +
                ',' +
                y1 +
                aPart +
                x +
                ',' +
                y1 +
                aPart +
                '0,-' +
                y2 +
                aPart +
                '-' +
                x +
                ',' +
                y1 +
                'Z'
            )
        },
    },
    'star-triangle-down': {
        n: 20,
        getPath: function (r) {
            var x = round(r * Math.sqrt(3) * 0.8, 2)
            var y1 = round(r * 0.8, 2)
            var y2 = round(r * 1.6, 2)
            var rc = round(r * 4, 2)
            var aPart = 'A ' + rc + ',' + rc + ' 0 0 1 '
            return (
                'M' +
                x +
                ',-' +
                y1 +
                aPart +
                '-' +
                x +
                ',-' +
                y1 +
                aPart +
                '0,' +
                y2 +
                aPart +
                x +
                ',-' +
                y1 +
                'Z'
            )
        },
    },
    'star-square': {
        n: 21,
        getPath: function (r) {
            var rp = round(r * 1.1, 2)
            var rc = round(r * 2, 2)
            var aPart = 'A ' + rc + ',' + rc + ' 0 0 1 '
            return (
                'M-' +
                rp +
                ',-' +
                rp +
                aPart +
                '-' +
                rp +
                ',' +
                rp +
                aPart +
                rp +
                ',' +
                rp +
                aPart +
                rp +
                ',-' +
                rp +
                aPart +
                '-' +
                rp +
                ',-' +
                rp +
                'Z'
            )
        },
    },
    'star-diamond': {
        n: 22,
        getPath: function (r) {
            var rp = round(r * 1.4, 2)
            var rc = round(r * 1.9, 2)
            var aPart = 'A ' + rc + ',' + rc + ' 0 0 1 '
            return (
                'M-' +
                rp +
                ',0' +
                aPart +
                '0,' +
                rp +
                aPart +
                rp +
                ',0' +
                aPart +
                '0,-' +
                rp +
                aPart +
                '-' +
                rp +
                ',0Z'
            )
        },
    },
    'diamond-tall': {
        n: 23,
        getPath: function (r) {
            var x = round(r * 0.7, 2)
            var y = round(r * 1.4, 2)
            return 'M0,' + y + 'L' + x + ',0L0,-' + y + 'L-' + x + ',0Z'
        },
    },
    'diamond-wide': {
        n: 24,
        getPath: function (r) {
            var x = round(r * 1.4, 2)
            var y = round(r * 0.7, 2)
            return 'M0,' + y + 'L' + x + ',0L0,-' + y + 'L-' + x + ',0Z'
        },
    },
    hourglass: {
        n: 25,
        getPath: function (r) {
            var rs = round(r, 2)
            return 'M' + rs + ',' + rs + 'H-' + rs + 'L' + rs + ',-' + rs + 'H-' + rs + 'Z'
        },
        noDot: true,
    },
    bowtie: {
        n: 26,
        getPath: function (r) {
            var rs = round(r, 2)
            return 'M' + rs + ',' + rs + 'V-' + rs + 'L-' + rs + ',' + rs + 'V-' + rs + 'Z'
        },
        noDot: true,
    },
    'circle-cross': {
        n: 27,
        getPath: function (r) {
            var rs = round(r, 2)
            return (
                'M0,' +
                rs +
                'V-' +
                rs +
                'M' +
                rs +
                ',0H-' +
                rs +
                'M' +
                rs +
                ',0A' +
                rs +
                ',' +
                rs +
                ' 0 1,1 0,-' +
                rs +
                'A' +
                rs +
                ',' +
                rs +
                ' 0 0,1 ' +
                rs +
                ',0Z'
            )
        },
        needLine: true,
        noDot: true,
    },
    'circle-x': {
        n: 28,
        getPath: function (r) {
            var rs = round(r, 2)
            var rc = round(r / Math.sqrt(2), 2)
            return (
                'M' +
                rc +
                ',' +
                rc +
                'L-' +
                rc +
                ',-' +
                rc +
                'M' +
                rc +
                ',-' +
                rc +
                'L-' +
                rc +
                ',' +
                rc +
                'M' +
                rs +
                ',0A' +
                rs +
                ',' +
                rs +
                ' 0 1,1 0,-' +
                rs +
                'A' +
                rs +
                ',' +
                rs +
                ' 0 0,1 ' +
                rs +
                ',0Z'
            )
        },
        needLine: true,
        noDot: true,
    },
    'square-cross': {
        n: 29,
        getPath: function (r) {
            var rs = round(r, 2)
            return (
                'M0,' +
                rs +
                'V-' +
                rs +
                'M' +
                rs +
                ',0H-' +
                rs +
                'M' +
                rs +
                ',' +
                rs +
                'H-' +
                rs +
                'V-' +
                rs +
                'H' +
                rs +
                'Z'
            )
        },
        needLine: true,
        noDot: true,
    },
    'square-x': {
        n: 30,
        getPath: function (r) {
            var rs = round(r, 2)
            return (
                'M' +
                rs +
                ',' +
                rs +
                'L-' +
                rs +
                ',-' +
                rs +
                'M' +
                rs +
                ',-' +
                rs +
                'L-' +
                rs +
                ',' +
                rs +
                'M' +
                rs +
                ',' +
                rs +
                'H-' +
                rs +
                'V-' +
                rs +
                'H' +
                rs +
                'Z'
            )
        },
        needLine: true,
        noDot: true,
    },
    'diamond-cross': {
        n: 31,
        getPath: function (r) {
            var rd = round(r * 1.3, 2)
            return (
                'M' +
                rd +
                ',0L0,' +
                rd +
                'L-' +
                rd +
                ',0L0,-' +
                rd +
                'Z' +
                'M0,-' +
                rd +
                'V' +
                rd +
                'M-' +
                rd +
                ',0H' +
                rd
            )
        },
        needLine: true,
        noDot: true,
    },
    'diamond-x': {
        n: 32,
        getPath: function (r) {
            var rd = round(r * 1.3, 2)
            var r2 = round(r * 0.65, 2)
            return (
                'M' +
                rd +
                ',0L0,' +
                rd +
                'L-' +
                rd +
                ',0L0,-' +
                rd +
                'Z' +
                'M-' +
                r2 +
                ',-' +
                r2 +
                'L' +
                r2 +
                ',' +
                r2 +
                'M-' +
                r2 +
                ',' +
                r2 +
                'L' +
                r2 +
                ',-' +
                r2
            )
        },
        needLine: true,
        noDot: true,
    },
    'cross-thin': {
        n: 33,
        getPath: function (r) {
            var rc = round(r * 1.4, 2)
            return 'M0,' + rc + 'V-' + rc + 'M' + rc + ',0H-' + rc
        },
        needLine: true,
        noDot: true,
        noFill: true,
    },
    'x-thin': {
        n: 34,
        getPath: function (r) {
            var rx = round(r, 2)
            return (
                'M' +
                rx +
                ',' +
                rx +
                'L-' +
                rx +
                ',-' +
                rx +
                'M' +
                rx +
                ',-' +
                rx +
                'L-' +
                rx +
                ',' +
                rx
            )
        },
        needLine: true,
        noDot: true,
        noFill: true,
    },
    asterisk: {
        n: 35,
        getPath: function (r) {
            var rc = round(r * 1.2, 2)
            var rs = round(r * 0.85, 2)
            return (
                'M0,' +
                rc +
                'V-' +
                rc +
                'M' +
                rc +
                ',0H-' +
                rc +
                'M' +
                rs +
                ',' +
                rs +
                'L-' +
                rs +
                ',-' +
                rs +
                'M' +
                rs +
                ',-' +
                rs +
                'L-' +
                rs +
                ',' +
                rs
            )
        },
        needLine: true,
        noDot: true,
        noFill: true,
    },
    hash: {
        n: 36,
        getPath: function (r) {
            var r1 = round(r / 2, 2)
            var r2 = round(r, 2)
            return (
                'M' +
                r1 +
                ',' +
                r2 +
                'V-' +
                r2 +
                'm-' +
                r2 +
                ',0V' +
                r2 +
                'M' +
                r2 +
                ',' +
                r1 +
                'H-' +
                r2 +
                'm0,-' +
                r2 +
                'H' +
                r2
            )
        },
        needLine: true,
        noFill: true,
    },
    'y-up': {
        n: 37,
        getPath: function (r) {
            var x = round(r * 1.2, 2)
            var y0 = round(r * 1.6, 2)
            var y1 = round(r * 0.8, 2)
            return 'M-' + x + ',' + y1 + 'L0,0M' + x + ',' + y1 + 'L0,0M0,-' + y0 + 'L0,0'
        },
        needLine: true,
        noDot: true,
        noFill: true,
    },
    'y-down': {
        n: 38,
        getPath: function (r) {
            var x = round(r * 1.2, 2)
            var y0 = round(r * 1.6, 2)
            var y1 = round(r * 0.8, 2)
            return 'M-' + x + ',-' + y1 + 'L0,0M' + x + ',-' + y1 + 'L0,0M0,' + y0 + 'L0,0'
        },
        needLine: true,
        noDot: true,
        noFill: true,
    },
    'y-left': {
        n: 39,
        getPath: function (r) {
            var y = round(r * 1.2, 2)
            var x0 = round(r * 1.6, 2)
            var x1 = round(r * 0.8, 2)
            return 'M' + x1 + ',' + y + 'L0,0M' + x1 + ',-' + y + 'L0,0M-' + x0 + ',0L0,0'
        },
        needLine: true,
        noDot: true,
        noFill: true,
    },
    'y-right': {
        n: 40,
        getPath: function (r) {
            var y = round(r * 1.2, 2)
            var x0 = round(r * 1.6, 2)
            var x1 = round(r * 0.8, 2)
            return 'M-' + x1 + ',' + y + 'L0,0M-' + x1 + ',-' + y + 'L0,0M' + x0 + ',0L0,0'
        },
        needLine: true,
        noDot: true,
        noFill: true,
    },
    'line-ew': {
        n: 41,
        getPath: function (r) {
            var rc = round(r * 1.4, 2)
            return 'M' + rc + ',0H-' + rc
        },
        needLine: true,
        noDot: true,
        noFill: true,
    },
    'line-ns': {
        n: 42,
        getPath: function (r) {
            var rc = round(r * 1.4, 2)
            return 'M0,' + rc + 'V-' + rc
        },
        needLine: true,
        noDot: true,
        noFill: true,
    },
    'line-ne': {
        n: 43,
        getPath: function (r) {
            var rx = round(r, 2)
            return 'M' + rx + ',-' + rx + 'L-' + rx + ',' + rx
        },
        needLine: true,
        noDot: true,
        noFill: true,
    },
    'line-nw': {
        n: 44,
        getPath: function (r) {
            var rx = round(r, 2)
            return 'M' + rx + ',' + rx + 'L-' + rx + ',-' + rx
        },
        needLine: true,
        noDot: true,
        noFill: true,
    },
    'arrow-up': {
        n: 45,
        getPath: function (r) {
            var rx = round(r, 2)
            var ry = round(r * 2, 2)
            return 'M0,0L-' + rx + ',' + ry + 'H' + rx + 'Z'
        },
        noDot: true,
    },
    'arrow-down': {
        n: 46,
        getPath: function (r) {
            var rx = round(r, 2)
            var ry = round(r * 2, 2)
            return 'M0,0L-' + rx + ',-' + ry + 'H' + rx + 'Z'
        },
        noDot: true,
    },
    'arrow-left': {
        n: 47,
        getPath: function (r) {
            var rx = round(r * 2, 2)
            var ry = round(r, 2)
            return 'M0,0L' + rx + ',-' + ry + 'V' + ry + 'Z'
        },
        noDot: true,
    },
    'arrow-right': {
        n: 48,
        getPath: function (r) {
            var rx = round(r * 2, 2)
            var ry = round(r, 2)
            return 'M0,0L-' + rx + ',-' + ry + 'V' + ry + 'Z'
        },
        noDot: true,
    },
    'arrow-bar-up': {
        n: 49,
        getPath: function (r) {
            var rx = round(r, 2)
            var ry = round(r * 2, 2)
            return 'M-' + rx + ',0H' + rx + 'M0,0L-' + rx + ',' + ry + 'H' + rx + 'Z'
        },
        needLine: true,
        noDot: true,
    },
    'arrow-bar-down': {
        n: 50,
        getPath: function (r) {
            var rx = round(r, 2)
            var ry = round(r * 2, 2)
            return 'M-' + rx + ',0H' + rx + 'M0,0L-' + rx + ',-' + ry + 'H' + rx + 'Z'
        },
        needLine: true,
        noDot: true,
    },
    'arrow-bar-left': {
        n: 51,
        getPath: function (r) {
            var rx = round(r * 2, 2)
            var ry = round(r, 2)
            return 'M0,-' + ry + 'V' + ry + 'M0,0L' + rx + ',-' + ry + 'V' + ry + 'Z'
        },
        needLine: true,
        noDot: true,
    },
    'arrow-bar-right': {
        n: 52,
        getPath: function (r) {
            var rx = round(r * 2, 2)
            var ry = round(r, 2)
            return 'M0,-' + ry + 'V' + ry + 'M0,0L-' + rx + ',-' + ry + 'V' + ry + 'Z'
        },
        needLine: true,
        noDot: true,
    },
}
