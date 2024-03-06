import HookUseState from "../components/HookUseState"
import HookUseReducer from "../components/HookUseReducer"
import HookUseEffect from "../components/HookUseEffect"
import { useUseContext } from "../components/useUseContext"

import { useContext } from "react"
import { SomeContext } from "../components/HookUseContext"

const Home = () => {
    const data = useUseContext()
    const data2 = useContext(SomeContext
    )
    
    return (
        <div>
            <h1>Home</h1>
            <HookUseState />
            <hr />
            <HookUseReducer />
            <hr />
            <HookUseEffect />
            <hr />
            <h3>Dados do context consumidos com hook: {data.contextValue}</h3>
            <h3>Dados do context consumidos sem hook: {data2.contextValue}</h3>
        </div>
    )
}

export default Home