import { useContext } from "react"
import { SomeContext } from "./HookUseContext"

export const useUseContext = () => {
    const data = useContext(SomeContext)
    
    return data
}