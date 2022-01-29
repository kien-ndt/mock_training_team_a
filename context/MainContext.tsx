import { createContext, useContext, useEffect, useState } from "react";
import { listSidebarId } from "../components/layout/sidebar/sidebar.item";

export type mainContextType = {
    contentComponentId: string
    updateContentComponentId: (params: keyof typeof listSidebarId) => void
}

const defaultContext: mainContextType = {
    contentComponentId: "0",
    updateContentComponentId: (params: keyof typeof listSidebarId) => {return}
}

export const MainContext = createContext<mainContextType>(defaultContext)

function MainContextProvider(props: {children: any}){

    type contextState = {
        contentComponentId: string,
    }
    const [state, setState] = useState<contextState>({
        contentComponentId: "0"
    })

    const updateContentComponentId = (contentComponentId: keyof typeof listSidebarId) => {
        setState({
            ...state,
            contentComponentId: listSidebarId[contentComponentId]
        })
    }

    return(
        <MainContext.Provider value={{
            contentComponentId: state.contentComponentId,
            updateContentComponentId: (contentComponentId: keyof typeof listSidebarId) => updateContentComponentId(contentComponentId)
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export {MainContextProvider};

