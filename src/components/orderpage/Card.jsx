import styled from "styled-components";
import { theme } from "../../theme";
import { formatPrice } from "../../utils/maths";
import { TiDelete } from "react-icons/ti";
import { useCallback, useContext } from "react";
import { AdminContext } from "../../context/order/AdminContext";

export default function Card({menu, falseMenu}) {

    const {isAdmin, menus, setMenus} = useContext(AdminContext);
    const priceFormat = formatPrice(menu.price);

    const onDelete = useCallback((menu) => {
        const index = menus.indexOf(menu);
        if(index > -1) {
            menus.splice(index, 1);
        }
        setMenus((m) => [...m]);
    }, [menus]);

    return (
        <>
            {falseMenu == false ?
                <CardDiv>
                    {isAdmin &&
                        <DivDelete>
                            <TiDelete className="buttonDelete" onClick={() => onDelete(menu)}/>
                        </DivDelete>
                    }
                    <img src={menu.imageSource} alt={menu.title}/>
                    <H2>{menu.title}</H2>
                    <div>
                        <p>{priceFormat}</p>
                        <Button>Ajouter</Button>
                    </div>
                </CardDiv>
            :
                <CardFalse>
                    <img src={menu.imageSource} alt={menu.title}/>
                </CardFalse>
            }
        </>
    );
}

const CardDiv = styled.div `
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    padding: 2rem;
    border-radius: ${theme.borderRadius.extraRound};
    text-align: center;
    font-family: ${theme.fonts.families.OpenSans};
    font-weight: ${theme.fonts.weights.regular};
    font-style: ${theme.fonts.styles.normal};

    img {
        width: 100%;
        object-fit: contain;
    }

    div {
        display: flex;
        justify-content: space-between;

        p {
            color: ${theme.colors.primary};
        }
    }
`

const CardFalse = styled.div `
    padding: 2rem;
    opacity: 0;

    img {
        width: 100%;
        object-fit: contain;
    }
`

const H2 = styled.h2 `
    font-family: ${theme.fonts.families.Pacifico};
    font-weight: ${theme.fonts.weights.regular};
    font-style: ${theme.fonts.styles.normal};
    text-align: start;
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

const DivDelete = styled.div `
    justify-content: end !important;

    .buttonDelete {
        font-size: 35px;
        color: ${theme.colors.primary};
        cursor: pointer;
    }
    .buttonDelete:hover {
        color: ${theme.colors.blue};
    }
`
