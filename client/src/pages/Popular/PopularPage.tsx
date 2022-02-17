import React from 'react';
import {Grid} from "@mui/material";
import News from "./components/News";
import Posts from "./components/Posts";
import {useSetContentWidth} from "../../utils/hooks";


const PopularPage = () => {
    useSetContentWidth(640)
    return (
        <>
            <Grid>
                <News />
            </Grid>
            <Grid>
                <Posts />
            </Grid>
        </>
    );
};

export default React.memo(PopularPage);