import {Grid, Typography} from '@mui/material';
import React from 'react';
import {useSetContentWidth} from "../../utils/hooks";


const BookmarkPage = (props: any) => {
    useSetContentWidth(640)
    return (
        <Grid bgcolor={'#fff'} borderRadius={4} height={223} display={'flex'} alignItems={'center'}
              justifyContent={'center'}>
            <Typography>
                Вы ничего не добавляли в закладки
            </Typography>
        </Grid>
    );
};

export default React.memo(BookmarkPage);