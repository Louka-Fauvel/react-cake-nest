import styled from "styled-components";
import { theme } from "../../theme";
import { formatPrice } from "../../utils/maths";
import { TiDelete } from "react-icons/ti";
import { useCallback, useContext } from "react";
import { AdminContext } from "../../context/order/AdminContext";

export default function Card({menu, falseMenu}) {

    const {isAdmin, setIsAdd, setIsReduce, menus, setMenus, selected, setSelected} = useContext(AdminContext);
    const priceFormat = formatPrice(menu.price);

    const onDelete = useCallback((menu) => {
        const index = menus.indexOf(menu);
        console.log(index);
        if(index > -1) {
            menus.splice(index, 1);
        }
        setMenus((m) => [...m]);
    }, [menus]);

    const onModidfy = useCallback((menu) => {
        setSelected(menu);
        setIsAdd(false);
        setIsReduce(false);
    }, [selected]);

    return (
        <>
            {falseMenu == false ?
                <>
                    {isAdmin && selected.id == menu.id ?
                        <CardDivSelect>
                            {isAdmin &&
                                <div className="divDelete">
                                    <TiDelete className="buttonDelete" onClick={() => onDelete(menu)}/>
                                </div>
                            }
                            <img src={menu.imageSource} alt={menu.title}/>
                            <H2>{menu.title}</H2>
                            <div>
                                <p>{priceFormat}</p>
                                <button className="button">Ajouter</button>
                            </div>
                        </CardDivSelect>
                    :
                        <CardDiv onClick={() => onModidfy(menu)}>
                            {isAdmin &&
                                <div className="divDelete">
                                    <TiDelete className="buttonDelete" onClick={() => onDelete(menu)}/>
                                </div>
                            }
                            <img src={menu.imageSource} alt={menu.title}/>
                            <H2>{menu.title}</H2>
                            <div>
                                <p>{priceFormat}</p>
                                <button className="button">Ajouter</button>
                            </div>
                        </CardDiv>
                    }
                </>
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

    .button {
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
    }
    .button:hover {
        background-color: ${theme.colors.blue};
        border-color: ${theme.colors.blue};
    }
    .divDelete {
        justify-content: end !important;
    }
    .buttonDelete {
        font-size: 35px;
        color: ${theme.colors.primary};
        cursor: pointer;
    }
    .buttonDelete:hover {
        color: ${theme.colors.blue};
    }
`

const CardDivSelect = styled.div `
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    padding: 2rem;
    border-radius: ${theme.borderRadius.extraRound};
    text-align: center;
    font-family: ${theme.fonts.families.OpenSans};
    font-weight: ${theme.fonts.weights.regular};
    font-style: ${theme.fonts.styles.normal};
    background-color: ${theme.colors.primary};

    img {
        width: 100%;
        object-fit: contain;
    }

    div {
        display: flex;
        justify-content: space-between;

        p {
            color: ${theme.colors.white};
        }
    }

    .button {
        padding: ${theme.spacing.sm};
        padding-left: ${theme.spacing.lg};
        padding-right: ${theme.spacing.lg};
        border-width: 2px;
        border-style: solid;
        border-radius: ${theme.borderRadius.extraRound};
        border-color: ${theme.colors.white};
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        cursor: pointer;
    }
    .button:hover {
        background-color: ${theme.colors.greyLight};
        border-color: ${theme.colors.greyLight};
    }
    .divDelete {
        justify-content: end !important;
    }
    .buttonDelete {
        font-size: 35px;
        color: ${theme.colors.white};
        cursor: pointer;
    }
    .buttonDelete:hover {
        color: ${theme.colors.greyLight};
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