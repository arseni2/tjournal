import React, {useState} from 'react';
import {Grid, Typography} from "@mui/material";
import DrawerLinks from "./DrawerLinks";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NavLinkStyled from '../../components/NavLinkStyled';


const DrawerContent = (props: any) => {
    const [community, setCommunity] = useState([
        {
            text: 'Наука',
            src: 'https://leonardo.osnova.io/b5dd5863-6867-44ab-498f-b98e45ad142a/-/scale_crop/64x64/-/format/webp'
        },
        {
            text: 'Наука',
            src: 'https://leonardo.osnova.io/b5dd5863-6867-44ab-498f-b98e45ad142a/-/scale_crop/64x64/-/format/webp'
        },
    ])
    const data = [
        {
            text: 'Наука',
            src: 'https://leonardo.osnova.io/b5dd5863-6867-44ab-498f-b98e45ad142a/-/scale_crop/64x64/-/format/webp'
        },
        {
            text: 'Наука',
            src: 'https://leonardo.osnova.io/b5dd5863-6867-44ab-498f-b98e45ad142a/-/scale_crop/64x64/-/format/webp'
        },
    ]
    const addMoreCommunity = () => community.length < 5 ? setCommunity([...community, ...data]) : setCommunity(data)
    return (
        <>
            <Grid>
                <NavLinkStyled to={'/'}>
                    {({isActive}) => (
                        <DrawerLinks icon={<WhatshotOutlinedIcon/>} text={'Популярное'} active={isActive}/>
                    )}
                </NavLinkStyled>
                <NavLinkStyled to={'/new_post'}>
                    {({isActive}) => (
                        <DrawerLinks icon={<AccessTimeIcon/>} text={'Свежее'} active={isActive}/>
                    )}
                </NavLinkStyled>
                <NavLinkStyled to={'/bookmark'}>
                    {({isActive}) => (
                        <DrawerLinks icon={<BookmarkBorderIcon/>} text={'Закладки'} active={isActive}/>
                    )}
                </NavLinkStyled>
                <NavLinkStyled to={'/rating'}>
                    {({isActive}) => (
                        <DrawerLinks icon={<TrendingUpIcon/>} text={'Рейтинг TJ'} active={isActive}/>
                    )}
                </NavLinkStyled>
                <NavLinkStyled to={'/subscribers'}>
                    {({isActive}) => (
                        <DrawerLinks icon={<FormatListBulletedOutlinedIcon/>} text={'Подписки'} active={isActive}/>
                    )}
                </NavLinkStyled>
            </Grid>

            <Grid mt={1.5}>
                {community.map((item, i) => {
                    return <NavLinkStyled to={'/subsite/111'}>
                        <DrawerLinks key={i} img_source={item.src} text={item.text}/>
                    </NavLinkStyled>
                })}
                <DrawerLinks img_source={'item.src'} text={'item.text'}/>
                <DrawerLinks img_source={'item.src'} text={'item.text'}/>
                <DrawerLinks img_source={'item.src'} text={'item.text'}/>
                <DrawerLinks img_source={'item.src'} text={'item.text'}/>
                <DrawerLinks img_source={'item.src'} text={'item.text'}/>
                <DrawerLinks img_source={'item.src'} text={'item.text'}/>
                <DrawerLinks img_source={'item.src'} text={'item.text'}/>
                <DrawerLinks img_source={'item.src'} text={'item.text'}/>
                <DrawerLinks img_source={'item.src'} text={'item.text'}/>
                <DrawerLinks img_source={'item.src'} text={'item.text'}/>
                <DrawerLinks img_source={'item.src'} text={'item.text'}/>
                <DrawerLinks img_source={'item.src'} text={'item.text'}/>
                <DrawerLinks img_source={'item.src'} text={'item.text'}/>
                <Grid display={'flex'} pl={2.4} style={{cursor: 'pointer'}} onClick={addMoreCommunity}>
                    {community.length < 5 ?
                        <><KeyboardArrowDownIcon/>
                            <Typography pl={1}>
                                Еще 14
                            </Typography></>
                        : <><KeyboardArrowUpIcon/>
                            <Typography pl={1}>
                                Свернуть
                            </Typography></>}
                </Grid>
            </Grid>
        </>
    );
};

export default React.memo(DrawerContent);