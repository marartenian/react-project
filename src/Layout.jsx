import { Outlet , Link , NavLink} from "react-router-dom"

export const Layout = ()=>{
    return <div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="add">Add</NavLink>
        </nav>
        <Outlet/>
    </div>
}