import {useOutletContext} from "react-router-dom";
import {useOutletContextInterface} from "../pages/Profile/Profile";
import {useEffect} from "react";



export const useSetContentWidth = (width: number) => {
    const {setContentWidth} = useOutletContext<useOutletContextInterface>();
    useEffect(() => {
        setContentWidth(width)
        /* eslint-disable */
    }, [])
}