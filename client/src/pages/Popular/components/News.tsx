import React, {useState} from 'react';
import {Collapse, Grid, Paper, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {styled} from "@mui/system";


const ShowMoreContainerGrid = styled(Grid)(() => ({
    cursor: 'pointer',
    display: 'flex',
    '&:hover': {
        color: '#3766a9'
    }
}))
const TitleNewsTypography = styled(Typography)(() => ({
    '&:hover': {
        color: '#3766a9'
    },
    cursor: 'pointer'
}))

const News = (props: any) => {
    const [collapse, setCollapse] = useState(false)
    const onClickCollapse = () => setCollapse(!collapse)
    return (
        <Paper sx={{maxHeight: 340, padding: 2.5}} elevation={0}>
            <Grid display={'flex'} justifyContent={'space-between'}>
                <Typography fontWeight={700}>
                    1 февраля, вторник
                </Typography>
                <Typography color={'#595959'} fontSize={13} style={{cursor: 'pointer', userSelect: 'none'}} onClick={onClickCollapse}>
                    свернуть
                </Typography>
            </Grid>
            <Collapse in={collapse}>
                <Grid pt={1} display={'flex'} pb={1}>
                    <Typography color={'#595959'} fontSize={13} mt={0.2}>
                        19:30
                    </Typography>
                    <TitleNewsTypography pl={1}>
                        Bloomberg: россияне вложили в криптовалюту 16,5 триллиона рублей — это 12% мировых активов
                    </TitleNewsTypography>
                </Grid>
                <Grid pt={1} display={'flex'} pb={1}>
                    <Typography color={'#595959'} fontSize={13} mt={0.2}>
                        19:30
                    </Typography>
                    <TitleNewsTypography pl={1}>
                        Bloomberg: россияне вложили в криптовалюту 16,5 триллиона рублей — это 12% мировых активов
                    </TitleNewsTypography>
                </Grid>
                <Grid pt={1} display={'flex'} pb={1}>
                    <Typography color={'#595959'} fontSize={13} mt={0.2}>
                        19:30
                    </Typography>
                    <TitleNewsTypography pl={1}>
                        Bloomberg: россияне вложили в криптовалюту 16,5 триллиона рублей — это 12% мировых активов
                    </TitleNewsTypography>
                </Grid>
                <Grid pt={1} display={'flex'} pb={1}>
                    <Typography color={'#595959'} fontSize={13} mt={0.2}>
                        19:30
                    </Typography>
                    <TitleNewsTypography pl={1}>
                        Bloomberg: россияне вложили в криптовалюту 16,5 триллиона рублей — это 12% мировых активов
                    </TitleNewsTypography>
                </Grid>
                <ShowMoreContainerGrid>
                    <Typography fontWeight={700}>
                        Показать ещё
                    </Typography>
                    <KeyboardArrowDownIcon/>
                </ShowMoreContainerGrid>
            </Collapse>
        </Paper>
    );
};

export default React.memo(News);