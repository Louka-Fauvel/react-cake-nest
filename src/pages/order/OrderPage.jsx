import { Link, useParams } from "react-router-dom";

export default function OrderPage() {

    const { firstname } = useParams();

    return (
        <>
            <h1>Bonjour {firstname}</h1>
            <Link to="/">Déconnexion</Link>
        </>
    );
}