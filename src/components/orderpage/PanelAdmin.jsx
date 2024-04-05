import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../theme";
import { useState } from "react";

export default function PanelAdmin() {

    const [isReduce, setIsReduce] = useState(false);
    const [isAdd, setIsAdd] = useState(true);

    const reduceOpen = () => {

        setIsReduce(!isReduce);
        if(isReduce) {
            document.getElementById("blockText").classList.remove("blockReduce");
            document.getElementById("blockText").classList.add("block");
        } else {
            document.getElementById("blockText").classList.remove("block");
            document.getElementById("blockText").classList.add("blockReduce");
        }
    };

    const panelAddModify = (isAdd) => {
        setIsAdd(isAdd);
        setIsReduce(false);
        document.getElementById("blockText").classList.remove("blockReduce");
        document.getElementById("blockText").classList.add("block");
    }

    return (
        <PanelContainer id="panelSystem">
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
            <div id="blockText" className="block">
                {isAdd ? 
                    <p>Ajouter un produit</p>
                : 
                    <p>Modifier un produit</p>
                }
            </div>
        </PanelContainer>
    );
}

const PanelContainer = styled.div `
    position: fixed;
    bottom: 0;
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
        padding: 0.5rem;
        width: 90vw;
        height: 20vh;
        background-color: ${theme.colors.white};
    }
    .blockReduce {
        font-family: ${theme.fonts.families.OpenSans};
        font-weight: ${theme.fonts.weights.regular};
        font-style: ${theme.fonts.styles.normal};
        margin-left: 5vw;
        margin-right: 5vw;
        padding: 0.5rem;
        width: 90vw;
        height: 0vh;
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
    border-color: ${theme.colors.white};
    background-color: ${theme.colors.white};
    cursor: pointer;

    &&:hover {
        background-color: ${theme.colors.greyLight};
        border-color: ${theme.colors.greyLight};
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
    border-color: ${theme.colors.dark};
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
    cursor: pointer;

    &&:hover {
        background-color: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};
    }
`