import React from 'react';
import {Grid, Tab, Tabs, Typography} from "@mui/material";
import {styled} from "@mui/system";
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import {TabsValuesType} from "../RatingPage";


const TabStyled = styled(Tab)(() => ({
    textTransform: 'none',
    color: '#000',
    '&:hover': {
        color: '#e5a040'
    },
    fontWeight: 500,
    '&.Mui-selected': {
        color: '#000',
        fontWeight: 600
    }
}))
const TabsStyled = styled(Tabs)(() => ({
    color: '#000',
    '& .MuiTabs-indicator': {
        backgroundColor: '#4683d9'
    }
}))

interface PropsI {
    value: TabsValuesType
    onChange: (event: React.SyntheticEvent, value: TabsValuesType) => void
}

const CommunityRatingTabs = ({value, onChange}: PropsI) => {
    const current_month = format(new Date(), 'LLLL', { locale: ru })
    return (
        <Grid bgcolor={'#fff'} p={2}>
            <Typography fontSize={30} fontWeight={600}>
                Рейтинг сообществ и блогов
            </Typography>
            <Typography fontSize={15}>
                Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из рейтинга по
                итогам месяца бесплатно получают Plus-аккаунт на месяц.
            </Typography>
            <TabsStyled value={value} onChange={onChange}>
                <TabStyled label={current_month} value={'month'} />
                <TabStyled label="3 месяца" value={'3_month'} />
                <TabStyled label="За все время" value={'all_time'} />
            </TabsStyled>
        </Grid>
    );
};

export default React.memo(CommunityRatingTabs);