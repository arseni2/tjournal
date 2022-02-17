import React, {useRef, useState} from 'react';
import {alpha, styled} from "@mui/system";
import {Grid, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SearchInputPaperComplete from "./PaperComplete/SearchInputPaperComplete";
import {useOutsideClick} from "../service/hooks";


const StyledInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#f2e8d6',
        transition: '0.3s background',
        width: 270,
        paddingLeft: 32,
        '&:focus': {
            boxShadow: `${alpha('#f29949', 0.25)} 0 0 0 0.2rem`,
            border: '0.1px solid #f29949',
            backgroundColor: '#fff',
        },
        '&:hover': {
            backgroundColor: '#fff',
            boxShadow: `${alpha('#f29949', 0.25)} 0 0 0 0.2rem`,
            //border: '0.1px solid #f29949',
        },
        height: 40,
        boxSizing: 'border-box'
    },
}));
const SearchInput = (props: any) => {
    const [isFocus, setIsFocus] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)
    useOutsideClick(() => setIsFocus(false), ref, [isFocus])
    return <Grid ref={ref} display={'flex'} alignItems={'center'}>
        <SearchIcon style={{marginLeft: 5, zIndex: 2, color: '#68645c', position: 'absolute'}}/>
        <Grid display={'flex'} flexDirection={'column'}>
            <StyledInput placeholder={'Поиск'} onFocus={() => setIsFocus(true)}/>
            <Grid>
                <SearchInputPaperComplete open={isFocus}/>
            </Grid>
        </Grid>
    </Grid>
};

export default React.memo(SearchInput);