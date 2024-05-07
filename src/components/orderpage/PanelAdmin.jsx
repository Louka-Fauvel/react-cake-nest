import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../theme";
import { useContext, useState } from "react";
import { AdminContext } from "../../context/order/AdminContext";
import FormCard from "./FormCard";

export default function PanelAdmin() {

    const {isAdmin} = useContext(AdminContext);

    const [isReduce, setIsReduce] = useState(false);
    const [isAdd, setIsAdd] = useState(true);

    const reduceOpen = () => {
        setIsReduce(!isReduce);
    };

    const panelAddModify = (isAdd) => {
        setIsAdd(isAdd);
        setIsReduce(false);
    }

    return (
        <>
            {isAdmin &&
                <PanelContainer>
                    <div className="panelSystem">
                        {isReduce ?
                            <ButtonBlack onClick={reduceOpen}><FiChevronUp/></ButtonBlack>
                        :
                            <ButtonWhite onClick={reduceOpen}><FiChevronDown/></ButtonWhite>
                        }
                        {isAdd ?
                            <>
                                <ButtonBlack onClick={() => panelAddModify(true)}><AiOutlinePlus/> Ajouter un produit</ButtonBlack>
                                <ButtonWhite onClick={() => panelAddModify(false)}><MdModeEditOutline/> Modifier un produit</ButtonWhite>
                            </>
                        :
                            <>
                                <ButtonWhite onClick={() => panelAddModify(true)}><AiOutlinePlus/> Ajouter un produit</ButtonWhite>
                                <ButtonBlack onClick={() => panelAddModify(false)}><MdModeEditOutline/> Modifier un produit</ButtonBlack>
                            </>
                        }
                    </div>
                    {isReduce ? 
                        <div className="blockReduce"></div>
                    :
                        <div className="block">
                            {isAdd ? 
                                <FormCard/>
                            : 
                                <p>Modifier un produit</p>
                            }
                        </div>
                    }
                </PanelContainer>
            }
        </>
    );
}

const PanelContainer = styled.div `
    position: fixed;
    bottom: -1vh;
    left: 0;

    .hidden {
        display: none;
    }

    .panelSystem {
        margin-left: 10vw;
    }

    .block {
        font-family: ${theme.fonts.families.OpenSans};
        font-weight: ${theme.fonts.weights.regular};
        font-style: ${theme.fonts.styles.normal};
        margin-left: 5vw;
        margin-right: 5vw;
        padding: 2vw;
        width: 85vw;
        height: 30vh;
        border-width: 0.5vw;
        border-style: solid;
        border-color: ${theme.colors.greyMedium};
        border-top-left-radius: ${theme.borderRadius.extraRound};
        border-top-right-radius: ${theme.borderRadius.extraRound};
        background-color: ${theme.colors.white};
        box-shadow: 0px -10px 8px -2px rgba(0, 0, 0, 0.1);
    }
    .blockReduce {
        font-family: ${theme.fonts.families.OpenSans};
        font-weight: ${theme.fonts.weights.regular};
        font-style: ${theme.fonts.styles.normal};
        margin-left: 5vw;
        margin-right: 5vw;
        padding: 2vw;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        width: 85vw;
        height: 1vh;
        border-width: 0.5vw;
        border-style: solid;
        border-color: ${theme.colors.greyMedium};
        border-top-left-radius: ${theme.borderRadius.extraRound};
        border-top-right-radius: ${theme.borderRadius.extraRound};
        background-color: ${theme.colors.white};
    }
`

const ButtonWhite = styled.button `
    font-family: ${theme.fonts.families.OpenSans};
    font-weight: ${theme.fonts.weights.regular};
    font-style: ${theme.fonts.styles.normal};
    padding: ${theme.spacing.sm};
    padding-left: ${theme.spacing.md};
    padding-right: ${theme.spacing.md};
    border-style: solid;
    border-radius: ${theme.borderRadius.round};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-color: ${theme.colors.white};
    border-left-color: ${theme.colors.greyLight};
    border-right-color: ${theme.colors.greyLight};
    border-top-color: ${theme.colors.greyLight};
    background-color: ${theme.colors.white};
    cursor: pointer;

    &&:hover {
        background-color: ${theme.colors.greyLight};
        border-color: ${theme.colors.greyLight};
        border-left-color: ${theme.colors.greyMedium};
        border-right-color: ${theme.colors.greyMedium};
        border-top-color: ${theme.colors.greyMedium};
    }
`

const ButtonBlack = styled.button `
    font-family: ${theme.fonts.families.OpenSans};
    font-weight: ${theme.fonts.weights.regular};
    font-style: ${theme.fonts.styles.normal};
    padding: ${theme.spacing.sm};
    padding-left: ${theme.spacing.md};
    padding-right: ${theme.spacing.md};
    border-style: solid;
    border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-color: ${theme.colors.dark};
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
    cursor: pointer;

    &&:hover {
        background-color: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};
    }
`