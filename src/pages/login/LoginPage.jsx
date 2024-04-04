import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../theme";

export default function LoginPage() {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {

        event.preventDefault();
        const firstname = event.target.firstname.value;
        event.target.reset();
        navigate("/order/"+firstname);

    }

    return (
        <Container>
            <div>
                <DivLogo>
                    <span>CAKE</span>
                    <DivLogoImg src="/img/cupcake.png" alt="Logo cupcake" />
                    <span>NEST</span>
                </DivLogo>
                <H1><H1Span>Bienvenue chez nous !</H1Span></H1>
                <H2>Connectez-vous</H2>
                <form onSubmit={handleSubmit}>
                    <FormDiv>
                        <div>
                            <Input type="text" placeholder="Entrez votre prénom" name="firstname"/>
                        </div>
                        <div>
                            <FormButton>Mon espace</FormButton>
                        </div>
                    </FormDiv>
                </form>
            </div>
        </Container>
    );
}

const Container = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    background-image: ${theme.backgrounds.images.tarts};
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    background-color: #00000050;
    height: ${theme.height.screen};
    width: ${theme.width.screen};
`

const DivLogo = styled.div `
    margin-top: 10vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: ${theme.fonts.families.OpenSans};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.primary};
`

const DivLogoImg = styled.img `
    width: ${theme.fonts.size.P6};
`

const H1 = styled.h1 `
    font-family: ${theme.fonts.families.Pacifico};
    font-weight: ${theme.fonts.weights.regular};
    font-style: ${theme.fonts.styles.normal};
    color: ${theme.colors.white};
    text-align: center;
`

const H1Span = styled.span `
    border-bottom: 4px solid;
    border-color: ${theme.colors.loginLine};
`

const H2 = styled.h2 `
    font-family: ${theme.fonts.families.Pacifico};
    font-weight: ${theme.fonts.weights.regular};
    font-style: ${theme.fonts.styles.normal};
    color: ${theme.colors.white};
    text-align: center;
`

const FormDiv = styled.div `
    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
    justify-items: center;
`

const Input = styled.input `
    padding: ${theme.spacing.sm};
    border: 2px solid;
    border-radius: ${theme.borderRadius.extraRound};
    border-color: ${theme.colors.white};
    background-color: ${theme.colors.white};

    &&:focus {
        outline: none;
        border-color: ${theme.colors.blue};
    };
`

const FormButton = styled.button `
    padding: ${theme.spacing.sm};
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