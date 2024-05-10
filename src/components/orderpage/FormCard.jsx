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

    const {menus, setMenus, isAdd, selected, setSelected} = useContext(AdminContext);
    const [isSuccess, setIsSuccess] = useState(false);
    const [title, setTitle] = useState("");
    const [imageSource, setImageSource] = useState("");
    const [price, setPrice] = useState("");

    const AddSubmit = useCallback((event) => {

        event.preventDefault();
        if(isAdd) {
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
            setTitle("");
            setImageSource("");
            setPrice("");
            setIsSuccess(true);
        }

    }, [menus]);

    const changeData = useCallback((selected) => {
        const index = menus.findIndex(i => i.id === selected.id);
        const newMenus = [...menus];
        newMenus[index] = selected;
        setMenus(newMenus);
    }, [menus]);

    const changeTitle = useCallback((event) => {

        let data = {};
        setSelected((s) => {
            data = {
                ...s,
                title: event.target.value,
            };
            changeData(data);
            return data;

        });

    }, [selected]);

    const changeImageSource = useCallback((event) => {
        
        let data = {};
        setSelected((s) => {
            data = {
                ...s,
                imageSource: event.target.value,
            };
            changeData(data);
            return data;

        });

    }, [selected]);

    const changePrice = useCallback((event) => {
        
        let data = {};
        setSelected((s) => {
            data = {
                ...s,
                price: event.target.value,
            };
            changeData(data);
            return data;

        });

    }, [selected]);

    return (
        <>
            <FlexForm>
                <div className="divImg">
                    {imageSource != "" || selected.imageSource != "" && !isAdd ? 
                        <FrameImage>
                            <img src={!isAdd ? selected.imageSource : imageSource} alt="image"/>
                        </FrameImage>
                    : 
                        <FrameNoImage>
                            Aucune image
                        </FrameNoImage>
                    }
                </div>
                <div className="divForm">
                    <form onSubmit={AddSubmit}>
                        <div className="divInput">
                            <GiCupcake className="self-center"/>
                            <Input 
                                type="text" 
                                placeholder="Nom du produit" 
                                name="title"
                                onChange={!isAdd ? changeTitle : (e) => setTitle(e.target.value)}
                                value={!isAdd ? selected.title : title}
                            />
                        </div>
                        <div className="divInput">
                            <BsFillCameraFill className="self-center"/>
                            <Input 
                                type="text" 
                                placeholder="Lien de l'url d'une image" 
                                name="imageSource"
                                onChange={!isAdd ? changeImageSource : (e) => setImageSource(e.target.value)}
                                value={!isAdd ? selected.imageSource : imageSource}
                            />
                        </div>
                        <div className="divInput">
                            <MdOutlineEuro className="self-center"/>
                            <Input 
                                type="number" 
                                placeholder="Prix" 
                                name="price" 
                                min="0" 
                                step="0.01"
                                onChange={!isAdd ? changePrice : (e) => setPrice(e.target.value)}
                                value={!isAdd ? selected.price : price}
                            />
                        </div>
                        {!isAdd && <input type="hidden" name="id" value={selected.id}/>}
                        <div className="divButton">
                            {!isAdd ?
                                <>
                                    <p style={{color: theme.colors.primary}}>Cliquer sur un produit pour le modifier en temps réel</p>
                                </>
                            :
                                <>
                                    <FormButton>Ajouter un nouveau produit</FormButton>
                                    {isSuccess &&
                                        <>
                                            <FiCheck className="self-center circle"/>
                                            <p>Ajouté avec succès !</p>
                                        </>
                                    }
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