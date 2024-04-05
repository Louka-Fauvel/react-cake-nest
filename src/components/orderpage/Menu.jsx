import styled from "styled-components";
import Card from "./Card";
import { theme } from "../../theme";
import PanelAdmin from "./PanelAdmin";

export default function Menu({menus}) {

    return (
        <MenuDiv>
            <div className="menu">
                {menus.map((menu) => {
                    return(
                        <Card key={menu.id} menu={menu}/>
                    );
                })}
            </div>
            <PanelAdmin/>
        </MenuDiv>
    );
}

const MenuDiv = styled.div `
    box-shadow: 0px 8px 20px 8px #00000033 inset;
    padding: 50px 50px 150px;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

    .menu {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-row-gap: 60px;
        grid-column-gap: 80px;
    }
`