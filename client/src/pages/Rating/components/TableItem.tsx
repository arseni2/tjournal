import React from 'react';
import {Avatar, Divider, Grid, Typography} from "@mui/material";
import Button from "../../../components/Button";
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const TableItem = (props: any) => {
    return (
        <>
            <Grid display={'flex'} alignItems={'center'} mt={1.875}>
                <Grid display={'flex'} alignItems={'center'} width={'69%'}>
                    <Typography mr={2}>
                        1
                    </Typography>
                    <Avatar
                        src={'https://leonardo.osnova.io/b2c66863-97b2-5c84-af89-eaba368c3e64/-/scale_crop/64x64/-/format/webp/'}
                        variant={'rounded'}
                        sx={{width: 30, height: 30}}
                    />
                    <Typography ml={1} fontSize={15} fontWeight={600}>
                        Лига инцелов
                    </Typography>
                </Grid>

                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'31%'}>
                    <Typography>
                        900
                    </Typography>
                    <Button>
                        <PersonAddIcon/>
                    </Button>
                </Grid>
            </Grid>
            <Divider style={{margin: '15px -16px 0px -16px'}} />
        </>
    );
};

export default React.memo(TableItem);