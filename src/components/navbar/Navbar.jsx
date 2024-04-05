import styled from "styled-components";
import { theme } from "../../theme";
import NavbarLogo from "./left/NavbarLogo";
import Profile from "./right/Profil";
import Admin from "./right/Admin";

export default function Navbar({ firstname }) {

    return (
        <NavbarDiv>
            <NavbarFlex>
                <NavbarLogo/>
                <div className="right">
                    <Admin/>
                    <div>
                        <Profile firstname={firstname}/>
                    </div>
                </div>
            </NavbarFlex>
        </NavbarDiv>
    );
}

const NavbarDiv = styled.nav `
    box-shadow: ${theme.shadows.medium};
    padding: ${theme.spacing.md};
    font-family: ${theme.fonts.families.OpenSans};
`

const NavbarFlex = styled.div `
    display: flex;
    justify-content: space-between;
    .right {
        display: flex;
        flex-direction: row;
    }
`