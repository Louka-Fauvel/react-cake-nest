import styled from "styled-components";
import { theme } from "../../theme";
import { GiCupcake } from "react-icons/gi";
import { MdOutlineEuro } from "react-icons/md";
import { useContext, useState } from "react";
import { AdminContext } from "../../context/order/AdminContext";
import { useCallback } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";

export default function FormCard() {

    const {menus, setMenus} = useContext(AdminContext);
    const [isSuccess, setIsSuccess] = useState(false);
    const [imageSource, setImageSource] = useState("");

    const handleSubmit = useCallback((event) => {

        event.preventDefault();
        const data = {
            id: menus[menus.length-1].id + 1,
            imageSource: event.target.imageSource.value,
            title: event.target.title.value,
            price: event.target.price.value,
            quantity: 0,
            isAvailable: true,
            isAdvertised: false,
        };
        setMenus((m) => [...m, data]);
        setIsSuccess(true);
        event.target.reset();

    }, [menus]);

    return (
        <>
            <FlexForm>
                <div className="divImg">
                    {imageSource == "" ? 
                        <FrameNoImage>
                            Aucune image
                        </FrameNoImage>
                    : 
                        <FrameImage>
                            <img src={imageSource} alt="image"/>
                        </FrameImage>
                    }
                </div>
                <div className="divForm">
                    <form onSubmit={handleSubmit}>
                        <div className="divInput">
                            <GiCupcake className="self-center"/>
                            <Input type="text" placeholder="Nom du produit" name="title"/>
                        </div>
                        <div className="divInput">
                            <BsFillCameraFill className="self-center"/>
                            <Input 
                                type="text" 
                                placeholder="Lien de l'url d'une image" 
                                name="imageSource"
                                onChange={(e) => setImageSource(e.target.value)}
                            />
                        </div>
                        <div className="divInput">
                            <MdOutlineEuro className="self-center"/>
                            <Input type="number" placeholder="Prix" name="price" min="0" step="0.01"/>
                        </div>
                        <div className="divButton">
                            <FormButton>Ajouter un nouveau produit</FormButton>
                            {isSuccess &&
                                <>
                                    <FiCheck className="self-center circle"/>
                                    <p>Ajouté avec succès !</p>
                                </>
                            }
                        </div>
                    </form>
                </div>
            </FlexForm>
        </>
    );
}

const FlexForm = styled.div `
    display: flex;
    column-gap: ${theme.spacing.sm};

    .divImg {
        width: 20vw;
    }
    
    .divForm {
        width: 50vw;
    }
    .divInput {
        display: flex;
        width: 20vw;
        padding: ${theme.spacing.sm};
        margin-bottom: ${theme.spacing.sm};
        border: 2px solid;
        border-radius: ${theme.borderRadius.extraRound};
        border-color: ${theme.colors.greyLight};
        background-color: ${theme.colors.greyLight};
    }
    .self-center {
        align-self: center;
    }
    .divButton {
        display: flex;
        color: ${theme.colors.success};
        font-size: 13px;
    }
    .circle {
        margin-left: 2vw;
        margin-right: 0.5vw;
        border: 2px solid;
        border-radius: ${theme.borderRadius.circle};
        border-color: ${theme.colors.success};
    }
`

const Input = styled.input `
    width: 20vw;
    border: 1px solid;
    border-color: transparent;
    background-color: transparent;

    &&:focus {
        outline: none;
    };
`

const FormButton = styled.button `
    padding: ${theme.spacing.sm};
    border-width: 2px;
    border-style: solid;
    border-radius: ${theme.borderRadius.extraRound};
    border-color: ${theme.colors.success};
    background-color: ${theme.colors.white};
    color: ${theme.colors.success};
    cursor: pointer;

    &&:hover {
        background-color: ${theme.colors.success};
        border-color: ${theme.colors.success};
        color: ${theme.colors.white};
    }
`

const FrameNoImage = styled.div `
    padding: 5vh;
    border-width: 2px;
    border-style: solid;
    border-radius: ${theme.borderRadius.subtle};
    border-color: ${theme.colors.greyMedium};
    text-align: center;
`
const FrameImage = styled.div `
    text-align: center;
    img {
        width: 50%;
        object-fit: contain;
    }
`