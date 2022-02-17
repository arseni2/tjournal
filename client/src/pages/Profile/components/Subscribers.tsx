import React from 'react';
import {Avatar, Grid, Typography} from "@mui/material";

const Subscribers = (props: any) => {
    return (
        <Grid bgcolor={'#fff'} borderRadius={2} width={'50%'} mt={1} p={2} ml={1}>
            <Typography fontWeight={600}>
                Подписки
            </Typography>
            <Grid mt={1.5}>
                <Grid mt={1} display={'flex'}>
                    <Avatar variant={'rounded'}
                            src={'https://leonardo.osnova.io/e2dc43da-f3af-4e4d-6f0e-e3bfaf1119cb/-/scale_crop/108x108/-/format/webp'}
                            sx={{width: 24, height: 24}}/>
                    <Typography ml={1}>
                        Джонни Мнемоников
                    </Typography>
                </Grid>
                <Grid mt={1} display={'flex'}>
                    <Avatar variant={'rounded'}
                            src={'https://leonardo.osnova.io/e2dc43da-f3af-4e4d-6f0e-e3bfaf1119cb/-/scale_crop/108x108/-/format/webp'}
                            sx={{width: 24, height: 24}}/>
                    <Typography ml={1}>
                        Джонни Мнемоников
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default React.memo(Subscribers);