import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../theme";
import Menu from "../../components/orderpage/Menu";
import { fakeMenu, fakeSmallMenu } from "../../fakeData/fakeMenu";
import { createContext } from "react";

export default function OrderPage() {

    const { firstname } = useParams();
    const [isAdmin, setIsAdmin] = useState(false);
    const AdminContext = createContext();

    return (
        <Container>
            <Outline>
                <AdminContext.Provider value={isAdmin}>
                    <Navbar firstname={firstname}/>
                    <Menu menus={fakeMenu}/>
                </AdminContext.Provider>
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