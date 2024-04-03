import { Link } from "react-router-dom";

export default function ErrorPage() {

    return (
        <>
            <h1>Erreur</h1>
            <Link to="/">Retourner vers la page d'accueil</Link>
        </>
    );
}