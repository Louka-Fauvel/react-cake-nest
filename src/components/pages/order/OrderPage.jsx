import { useParams } from "react-router";

export default function OrderPage() {

    const { firstname } = useParams();

    return (
        <div className="md:container md:mx-auto px-5 md:px-32 lg:px-48">
            <h1 className="text-5xl text-center">Bonjour {firstname}</h1>
            <div className="grid grid-rows-2 gap-2 justify-center">
                <div>
                    <Link to="/" className="block w-full p-2 bg-cyan-400 rounded-lg hover:bg-cyan-300">
                        Déconnexion
                    </Link>
                </div>
            </div>
        </div>
    );
}