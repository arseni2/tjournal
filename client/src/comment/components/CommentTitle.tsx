import React from 'react';
import {Grid, Typography} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const CommentTitle = (props: any) => {
    return (
        <Grid
            display={'flex'}
            style={{cursor: 'pointer'}}
            mt={3}
            alignItems={'center'}
        >
            <Typography fontWeight={700} fontSize={18}>
                Комментарии
            </Typography>
            <ChevronRightIcon/>
        </Grid>
    );
};

export default React.memo(CommentTitle);