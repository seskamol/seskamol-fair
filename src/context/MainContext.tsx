import { createContext, useContext } from "react";

interface DataType {
    opened: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    anchorEl: null | HTMLElement;
    setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>
}

const MainContext = createContext<DataType | null>(null)

export {
    MainContext,
    useContext
}