import styled from "styled-components";
import { theme } from "../../../theme";

export default function NavbarLogo() {

    return (
        <>
            <DivLogo onClick={() => window.location.reload()}>
                <span>CAKE</span>
                    <DivLogoImg src="/img/cupcake.png" alt="Logo cupcake" />
                <span>NEST</span>
            </DivLogo>
        </>
    );
}

const DivLogo = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${theme.fonts.size.P2};
    color: ${theme.colors.primary};
    cursor: pointer;
`

const DivLogoImg = styled.img `
    width: ${theme.fonts.size.P4};
`