import { useNavigate } from "react-router";

export default function LoginPage() {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {

        event.preventDefault();
        const firstname = event.target.firstname.value;
        event.target.reset();
        navigate("/order/"+firstname);

    }

    return (
        <div className="md:container md:mx-auto px-5 md:px-32 lg:px-48">
            <h1 className="text-5xl text-center">Bienvenue chez nous !</h1>
            <h2 className="text-2xl text-center">Connectez-vous</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-rows-2 gap-2 justify-center">
                    <div>
                        <input 
                            type="text" 
                            className="block w-full p-2 border-2 border-gray-400 rounded-lg bg-white focus:outline-none focus:border-cyan-300" 
                            placeholder="Entrez votre prénom..." 
                            name="firstname"
                        />
                    </div>
                    <div>
                        <button 
                            className="block w-full p-2 bg-cyan-400 rounded-lg hover:bg-cyan-300"
                        >
                            Accéder à votre espace
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}