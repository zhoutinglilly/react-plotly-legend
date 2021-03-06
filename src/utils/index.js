export const round = (r, n) => {
    if (!n) {
        return Math.round(r)
    }
    const num = 10 ** n
    return Math.round(r * num) / num
}

export const isNumeric = (v) => {
    const type = typeof v
    if (type === 'string') {
        if (Number.isNaN(Number(v))) {
            return false
        }
        return true
    }
    if (type === 'number') {
        return true
    }
    return false
}
