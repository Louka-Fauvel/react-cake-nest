import { createContext } from "react";

export const AdminContext = createContext({
    isAdmin: false, 
    setIsAdmin: () => {},

    isReduce: false,
    setIsReduce: () => {},
    isAdd: true,
    setIsAdd: () => {},

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

    selected: {
        id: 0,
        imageSource: "/img/cupcake-item.png",
        title: "",
        price: 0.00,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    setSelected: () => {},
});