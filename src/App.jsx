import { useState } from "react";

export default function App() {

    const [isBoxAlert, setIsBoxAlert] = useState(false);
    const [firstname, setFirstname] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFirstname(event.target.firstname.value);
        setIsBoxAlert(true);
        event.target.reset();
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

            <div className="grid gap-2 justify-center">
                {isBoxAlert == true && firstname != "" ?
                    <p className="p-4 border-4 border-green-300 rounded-lg bg-green-400">Bonjour {firstname}</p>
                : isBoxAlert == true && firstname == "" ?
                    <p className="p-4 border-4 border-red-900 rounded-lg bg-red-500 text-white"><u>/!\</u> Erreur le champ prénom est obligatoire !</p>
                :
                    <p></p>
                }
            </div>
        </div>
    );
}