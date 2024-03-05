import HookUseState from "../components/HookUseState"
import HookUseReducer from "../components/HookUseReducer"

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <HookUseState />
            <hr />
            <HookUseReducer />
            <hr />
        </div>
    )
}

export default Home