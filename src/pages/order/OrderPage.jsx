import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../theme";
import Menu from "../../components/orderpage/Menu";
import { fakeMenu, fakeSmallMenu } from "../../fakeData/fakeMenu";

export default function OrderPage() {

    const { firstname } = useParams();

    return (
        <Container>
            <Outline>
                <Navbar firstname={firstname}/>
                <Menu menus={fakeMenu}/>
            </Outline>
        </Container>
    );
}

const Container = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${theme.colors.primary};
`

const Outline = styled.div `
    position: relative;
    margin-top: 5vh;
    margin-bottom: 5vh;
    margin-left: 5vw;
    margin-right: 5vw;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound};
`