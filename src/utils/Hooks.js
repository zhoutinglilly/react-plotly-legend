import { useEffect, useRef } from 'react'
import * as _ from 'lodash'

export const useDeepEffect = (fn, deps = []) => {
    const isFirst = useRef(true)
    const prevDeps = useRef(deps)
    useEffect(() => {
        const isSame = prevDeps.current.every((obj, index) => _.isEqual(obj, deps[index]))
        if (isFirst.current || !isSame) {
            fn()
        }
        isFirst.current = false
        prevDeps.current = deps
        // // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
}
