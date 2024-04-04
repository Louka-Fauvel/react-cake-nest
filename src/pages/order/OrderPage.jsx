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
            <Navbar firstname={firstname}/>
            <Menu menus={fakeMenu}/>
        </Container>
    );
}

const Container = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    height: ${theme.height.screen};
    width: ${theme.width.screen};
`