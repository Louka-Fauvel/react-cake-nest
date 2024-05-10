import styled from "styled-components";
import Card from "./Card";
import { theme } from "../../theme";
import PanelAdmin from "./PanelAdmin";
import { useCallback, useContext } from "react";
import { AdminContext } from "../../context/order/AdminContext";
import { fakeMenu } from "../../fakeData/fakeMenu";

export default function Menu() {

    const {isAdmin, menus, setMenus} = useContext(AdminContext);
    const falseData = {
        id: 1,
        imageSource: "/img/cupcake-item.png",
        title: "",
        price: 0.00,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    };

    const onMenus = useCallback(() => {
        setMenus(() => fakeMenu);
    }, [menus]);

    return (
        <MenuDiv>
            <div className="menu">
                {menus.map((menu) => {
                    return(
                        <Card key={menu.id} menu={menu} falseMenu={false}/>
                    );
                })}
                {menus.length == 0 && <Card menu={falseData} falseMenu={true}/>}
            </div>
            {menus.length == 0 &&
                <>
                    {isAdmin ?
                        <div className="flexVoid">
                            <h1>
                                Il n'y a plus de produits disponibles ?<br/>
                                Cliquez ci-dessous pour les réinitialiser
                            </h1>
                            <Button onClick={onMenus}>Générer de nouveaux gâteaux</Button>
                        </div>
                    :
                        <div className="flexVoid">
                            <h1>
                                Victime de notre succès<br/>
                                De nouvelles recettes sont en préparation, revenez vite !
                            </h1>
                        </div>
                    }
                </>
            }
            <PanelAdmin/>
        </MenuDiv>
    );
}

const MenuDiv = styled.div `
    min-height: 60vh;
    box-shadow: 0px 8px 20px 8px #00000033 inset;
    padding: 50px 50px 150px;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

    .menu {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-row-gap: 60px;
        grid-column-gap: 80px;
    }

    h1 {
        font-family: ${theme.fonts.families.Pacifico};
        font-weight: ${theme.fonts.weights.regular};
        font-style: ${theme.fonts.styles.normal};
        color: ${theme.colors.greyDark};
        text-align: center;
    }
    .flexVoid {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

const Button = styled.button `
    padding: ${theme.spacing.sm};
    padding-left: ${theme.spacing.lg};
    padding-right: ${theme.spacing.lg};
    border-width: 2px;
    border-style: solid;
    border-radius: ${theme.borderRadius.extraRound};
    border-color: ${theme.colors.primary};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    cursor: pointer;

    &&:hover {
        background-color: ${theme.colors.blue};
        border-color: ${theme.colors.blue};
    }
`