import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../theme";
import Menu from "../../components/orderpage/Menu";
import { fakeMenu } from "../../fakeData/fakeMenu";
import { useState } from "react";
import { AdminContext } from "../../context/order/AdminContext";

export default function OrderPage() {

    const { firstname } = useParams();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isReduce, setIsReduce] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const [menus, setMenus] = useState(fakeMenu);
    const [selected, setSelected] = useState({
        id: 0,
        imageSource: "/img/cupcake-item.png",
        title: "",
        price: 0.00,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    });

    return (
        <Container>
            <Outline>
                <AdminContext.Provider value={{isAdmin, setIsAdmin, isReduce, setIsReduce, isAdd, setIsAdd, menus, setMenus, selected, setSelected}}>
                    <Navbar firstname={firstname}/>
                    <Menu/>
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