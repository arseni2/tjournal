import React, {useState} from 'react';
import {MenuItem, Select, Typography, ListSubheader, Grid, Avatar, SelectChangeEvent} from "@mui/material";
import CreatePostDialogSelectItem from "./CreatePostDialogSelectItem";
import {styled} from "@mui/system";


const dataFromPropsMock = [
    {
        title: 'Science',
        src: 'https://leonardo.osnova.io/b5dd5863-6867-44ab-498f-b98e45ad142a'
    },
    {
        title: 'Social',
        src: 'https://leonardo.osnova.io/b5dd5863-6867-44ab-498f-b98e45ad142a'
    },
    {
        title: 'Comedy',
        src: 'https://leonardo.osnova.io/b5dd5863-6867-44ab-498f-b98e45ad142a'
    },
    {
        title: 'Some Name',
        src: 'https://leonardo.osnova.io/b5dd5863-6867-44ab-498f-b98e45ad142a'
    },
]

const SelectStyled = styled(Select)(() => ({
    height: 20,
    border: 'none',
    outline: 'none',
    '& .MuiSelect-select': {
        border: 'none',
        outline: 'none',
    },
    '& .MuiSelect-outlined': {
        border: 'none',
        outline: 'none',
    }
}))

const CreatePostDialogSelect = (props: any) => {
    const [selected, setSelected] = useState<string>('My blog')
    const onChangeSelect = (e: SelectChangeEvent<unknown>) => setSelected(e.target.value as string)
    const renderValue = (value: unknown) => <Typography>{value as string}</Typography>
    return (
        <SelectStyled
            onChange={onChangeSelect}
            renderValue={renderValue}
            value={selected}
            variant={'standard'}
        >
            <ListSubheader>Мои сообщества</ListSubheader>
            <MenuItem value={'My blog'}>
                <Grid display={'flex'}>
                    <Avatar src={'https://leonardo.osnova.io/b1f22755-7356-50c9-8445-41e88dd8bb24/-/scale_crop/108x108/-/format/webp'} sx={{width: 22, height: 22}} variant={'rounded'} />
                    <Typography pl={1}>
                        My blog
                    </Typography>
                </Grid>
            </MenuItem>
            <ListSubheader>Сообщества</ListSubheader>
            {dataFromPropsMock.map((item, i) => {
                return <MenuItem style={{paddingLeft: 24}} value={item.title} selected={item.title === selected}
                                 key={i}>
                    <CreatePostDialogSelectItem community={item} key={i}/>
                </MenuItem>
            })}
        </SelectStyled>
    );
};

export default React.memo(CreatePostDialogSelect);