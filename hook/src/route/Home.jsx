import HookUseState from "../components/HookUseState"
import HookUseReducer from "../components/HookUseReducer"
import HookUseEffect from "../components/HookUseEffect"

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <HookUseState />
            <hr />
            <HookUseReducer />
            <hr />
            <HookUseEffect />
            <hr />
        </div>
    )
}

export default Home