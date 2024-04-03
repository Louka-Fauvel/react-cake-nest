import styled from "styled-components";
import { theme } from "../../theme";
import NavbarLogo from "./left/NavbarLogo";
import Profile from "./right/Profil";

export default function Navbar({ firstname }) {

    return (
        <NavbarDiv>
            <NavbarFlex>
                <NavbarLogo/>
                <Profile firstname={firstname}/>
            </NavbarFlex>
        </NavbarDiv>
    );
}

const NavbarDiv = styled.nav `
    position: sticky;
    top: 0%;
    left: 0%;
    right: 0%;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.medium};
    padding: ${theme.spacing.md};
    font-family: ${theme.fonts.families.OpenSans};
`

const NavbarFlex = styled.div `
    display: flex;
    justify-content: space-between;
`