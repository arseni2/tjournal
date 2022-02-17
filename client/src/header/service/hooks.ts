import {MutableRefObject, useEffect} from "react";

export const useOutsideClick = (fn: () => void, ref: MutableRefObject<HTMLDivElement | null>, deps: any[]) => {
    useEffect(() => {
        const clickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                fn()
            }
        }
        document.addEventListener('click', clickOutside)
        return () => {
            document.removeEventListener('click', clickOutside)
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, deps)
}