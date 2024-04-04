import styled from "styled-components";
import Card from "./Card";

export default function Menu({menus}) {

    return (
        <MenuDiv>
            {menus.map((menu) => {
                
                return(
                    <Card key={menu.id} menu={menu}/>
                );
            })}
        </MenuDiv>
    );
}

const MenuDiv = styled.div `
    box-shadow: 0px 8px 20px 8px #00000033 inset;
    padding: 50px 50px 150px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-row-gap: 60px;
    grid-column-gap: 80px;
`