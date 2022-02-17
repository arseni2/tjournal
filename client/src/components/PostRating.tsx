import React from 'react';
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {Grid, Typography} from "@mui/material";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const PostRating = (props: any) => {
    return (
        <Grid display={'flex'} alignItems={'center'}>
            <KeyboardArrowDownOutlinedIcon sx={{fontSize: 28, color: '#595959'}}/>
            <Typography color={'#2ea83a'} fontWeight={600} fontSize={14} ml={0.5} mr={0.5}>100</Typography>
            <KeyboardArrowUpOutlinedIcon sx={{fontSize: 28, color: '#595959'}}/>
        </Grid>
    );
};

export default React.memo(PostRating);