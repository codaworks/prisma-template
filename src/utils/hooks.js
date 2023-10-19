import { useCallback, useEffect, useRef } from 'react'

export const useCallbackRef = callback => {
    const savedCallback = useRef()
    savedCallback.current = callback

    return savedCallback
}

export const useEvent = handler => {
    const handlerRef = useCallbackRef(handler)

    return useCallback((...args) => {
        const fn = handlerRef.current
        return fn(...args)
    }, [handlerRef]);
}

export const useInterval = (callback, delay) => {
    const savedCallback = useCallbackRef(callback)

    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay != null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay, savedCallback])
}
