import React from 'react';
import {Avatar, Grid, Typography} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


interface PropsI {
    position?: any
}

const PostHeader = ({position}: PropsI) => {
    return (
        <>
            <Grid display={'flex'} justifyContent={'space-between'}>
                <Grid display={'flex'} alignItems={'center'}>
                    <Avatar src={'https://leonardo.osnova.io/2810b9bb-071f-8a49-2290-2f92ca6797cd/-/scale_crop/64x64'}
                            variant={'rounded'} sx={{width: 22, height: 22}} style={{position: position}}/>
                    <Typography pl={0.5} fontWeight={550} fontSize={14}>
                        Новости
                    </Typography>
                    <Typography pl={1} fontSize={14}>
                        Яна Ломакина
                    </Typography>
                    <Typography pl={1} fontSize={14} color={'#595959'}>
                        вчера
                    </Typography>
                </Grid>
                <MoreHorizIcon style={{color: '#595959'}}/>
            </Grid>
            <Grid mt={1}>
                <Typography gutterBottom fontSize={20} fontWeight={700}>
                    Юрист из Екатеринбурга, который был вынужден уехать из России из-за угроз гомофобов, стал депутатом
                    в Берлине
                </Typography>
                <Typography gutterBottom>
                    На прошедших в январе выборах он набрал 78% голосов.
                </Typography>
            </Grid>
        </>
    );
};

export default React.memo(PostHeader);