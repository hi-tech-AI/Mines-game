import { createContext, useContext, useState } from "react";
import { storeDataType, storeType } from "../@types";
const initialState: storeDataType = {
    mineCount: 3
}
const initialValue: storeType = {
    params: initialState,
    setParams: () => { }
}
export const GlobalContext = createContext<storeType>(initialValue);
const StoreProvider = ({ children }: { children: JSX.Element }) => {

    const [params, setParams] = useState<storeDataType>(initialState)
    return (
        <GlobalContext.Provider value={{ params, setParams }}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGameParams = () => ({
    params: useContext(GlobalContext).params,
    setParams: useContext(GlobalContext).setParams
})
export default StoreProvider;
export { useGameParams };
