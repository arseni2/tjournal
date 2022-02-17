import React from 'react';
import {Grid, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SubSearchInput = (props: any) => {
    return (
        <Grid display={'flex'} alignItems={'center'} pt={1.7} borderTop={'1px solid #f2f2f2'} pb={1.7}>
                <SearchIcon style={{color: '#595959'}} />
                <InputBase
                    sx={{ ml: 1, flex: 1, fontSize: 15 }}
                    placeholder="Поиск"
                />
        </Grid>
    );
};

export default React.memo(SubSearchInput);