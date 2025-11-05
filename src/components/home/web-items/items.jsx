import { NavLink } from "react-router-dom";


export function Items() {
    <div className="flex text-lg bg-black text-white gap-3 ">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/list-page'>My list</NavLink>
        <NavLink to ='/tendance-anime'>Anime</NavLink>
    </div>
}