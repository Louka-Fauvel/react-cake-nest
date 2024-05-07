import { createContext } from "react";

export const AdminContext = createContext({
    isAdmin: false, 
    setIsAdmin: () => {},
    menus: [
        {
            id: 1,
            imageSource: "/img/cupcake-item.png",
            title: "",
            price: 0.00,
            quantity: 0,
            isAvailable: true,
            isAdvertised: false,
        },
    ],
    setMenus: () => {},
});