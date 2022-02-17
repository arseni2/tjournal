import React from 'react';
import {NavLink, NavLinkProps} from "react-router-dom";
import {styled} from "@mui/system";

const LinkStyled = styled(NavLink)(() => ({
    textDecoration: 'none',
    color: 'inherit'
}))

const NavLinkStyled = (props: NavLinkProps) => {
    return <LinkStyled {...props}>{props.children}</LinkStyled>
};

export default React.memo(NavLinkStyled);