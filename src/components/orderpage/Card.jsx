import styled from "styled-components";
import { theme } from "../../theme";
import { formatPrice } from "../../utils/maths";

export default function Card({menu}) {

    const priceFormat = formatPrice(menu.price);

    return (
        <CardDiv>
            <img src={menu.imageSource} alt={menu.title}/>
            <H2>{menu.title}</H2>
            <div>
                <p>{priceFormat}</p>
                <Button>Ajouter</Button>
            </div>
        </CardDiv>
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
        width: 300px;
    }

    div {
        display: flex;
        justify-content: space-between;

        p {
            color: ${theme.colors.primary};;
        }
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