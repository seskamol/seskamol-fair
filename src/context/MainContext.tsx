import { createContext, useContext } from "react";

interface DataType {
    opened: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    openedModalConnect: boolean;
    setOpenModalConnect: React.Dispatch<React.SetStateAction<boolean>>
}

const MainContext = createContext<DataType | null>(null)

export {
    MainContext,
    useContext
}