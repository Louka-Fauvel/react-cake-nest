import styled from "styled-components";
import { theme } from "../../../theme";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export default function Admin() {

    const [isAdmin, setIsAdmin] = useState(false);

    const adminChange = () => {
        setIsAdmin(!isAdmin);
        if (isAdmin) {
            toast('Mode normal actif', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else {
            toast('Mode admin actif', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    return (
        <>
            {isAdmin ?
                <ButtonAdmin onClick={adminChange}>
                    DÉSACTIVER LE MODE ADMIN
                </ButtonAdmin>
            :
                <ButtonNotAdmin onClick={adminChange}>
                    ACTIVER LE MODE ADMIN
                </ButtonNotAdmin>
            }
            <ToastContainer/>
        </>
    );
}

const ButtonAdmin = styled.button `
    font-family: ${theme.fonts.families.OpenSans};
    font-weight: ${theme.fonts.weights.regular};
    font-style: ${theme.fonts.styles.normal};
    padding: ${theme.spacing.sm};
    padding-left: ${theme.spacing.lg};
    padding-right: ${theme.spacing.lg};
    border-width: 2px;
    border-style: solid;
    border-radius: ${theme.borderRadius.extraRound};
    border-color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    cursor: pointer;

    &&:hover {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    }
`

const ButtonNotAdmin = styled.button `
    font-family: ${theme.fonts.families.OpenSans};
    font-weight: ${theme.fonts.weights.regular};
    font-style: ${theme.fonts.styles.normal};
    padding: ${theme.spacing.sm};
    padding-left: ${theme.spacing.lg};
    padding-right: ${theme.spacing.lg};
    border-width: 2px;
    border-style: solid;
    border-radius: ${theme.borderRadius.extraRound};
    border-color: ${theme.colors.dark};
    background-color: ${theme.colors.dark};
    color: ${theme.colors.primary};
    cursor: pointer;

    &&:hover {
        color: ${theme.colors.white};
    }
`