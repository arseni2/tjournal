import React, {useState} from 'react';
import {Grid} from "@mui/material";
import CommunityTable from "./components/CommunityTable";
import PersonalBlogTable from "./components/PersonalBlogTable";
import CommunityRatingTabs from "./components/CommunityRatingTabs";
import {useSetContentWidth} from "../../utils/hooks";


export type TabsValuesType = 'month' | '3_month' | 'all_time'
const RatingPage = (props: any) => {
    useSetContentWidth(640)
    const [value, setValue] = useState<TabsValuesType>('month')
    const handleChange = (event: React.SyntheticEvent, newValue: TabsValuesType) => {
        setValue(newValue);
    }
    return (
        <>
            <CommunityRatingTabs value={value} onChange={handleChange}/>
            <Grid>
                <CommunityTable/>
                <PersonalBlogTable/>
            </Grid>
        </>
    );
};

export default React.memo(RatingPage);