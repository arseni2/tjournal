import React, {useState} from 'react';
import {Grid, TextField, Typography} from "@mui/material";
import Button from "../../../components/Button";
import {styled} from "@mui/system";


const ChangeDescriptionTypography = styled(Typography)(() => ({
    color: '#3766a9',
    '&:hover': {
        color: '#cd192e'
    },
    cursor: 'pointer',
    display: 'inline-block'
}))

const ProfileDescription = (props: any) => {
    const [isEditDes, setEditDes] = useState(false)
    return (
        <>
            {!isEditDes ?
                <>
                    <ChangeDescriptionTypography mt={2} onClick={() => setEditDes(true)}>
                        Изменить описание
                    </ChangeDescriptionTypography>
                    <Typography mt={2.5}>
                        На проекте с 25 янв 2022
                    </Typography>
                </>
                :
                <>
                    <TextField placeholder={'enter des'} value={'old description'}/>
                    <Grid display={'flex'} mt={1} alignItems={'center'}>
                        <Button onClick={() => setEditDes(false)} width={71} style={{marginRight: 10}}>
                            cancel
                        </Button>
                        <Button onClick={() => setEditDes(false)} colorFont={'#fff'} bgcolor={'#4683d9'}
                                bgcolorDarken={'#2a5fa4'} width={60} style={{height: 38}}>
                            save
                        </Button>
                    </Grid>
                </>
            }
        </>
    );
};

export default React.memo(ProfileDescription);