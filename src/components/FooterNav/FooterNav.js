import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import "./FooterNav.css"

const FooterNav = props => (
    <BottomNavigation {...props}>
        {props.children}
    </BottomNavigation>
)

export default FooterNav;