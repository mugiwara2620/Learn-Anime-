
import { NavLink } from "react-router-dom"
import { ato } from "../../data/data";


export function AnimeSeason({ num }) {
    const anime = ato[num - 1];
    return (
        <NavLink to={`/anime-details/${num}`} className="relative  snap-center w-64 hover:scale-110 transition-transform   py-9 h-full  flex justify-center items-center  rounded-lg ">
            <div className="overflow-hidden relative  rounded-lg h-56 w-44">
                <img className="object-cover  h-full w-full  " src={anime.posterImagePage} />
                <div className="flex items-center w-full justify-center absolute bottom-0 h-[58px] from-black to-transparent bg-gradient-to-t bg-gray-900/10  text-white text-[20px]   ">Attack on titan S{num}</div>
ss
            </div>

        </NavLink>
    )
}