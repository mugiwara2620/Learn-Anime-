
import { NavLink } from "react-router-dom"
import { ato } from "../../data/data";
import { useEffect, useState } from "react";


export function AnimeSeason({ num, animeId }) {
    const anime = ato[num - 1];
    const [isfocusing, setIsfocusing] = useState(animeId === num);
    useEffect(() => {
        console.log(animeId);
        setIsfocusing(animeId == num);
        console.log(animeId === num);
    }, [animeId]);
    return (
        <NavLink
        
            to={`/anime-details/${num}`}

            className={`relative snap-end focus:will-change-scroll aspect-auto season-marker  w-64 ${isfocusing && 'scale-110'} transition-transform   py-9 h-full  flex justify-center items-center  rounded-lg `}>
            <div className="overflow-hidden relative  rounded-lg h-56 w-44">
                <img className={`object-cover  h-full border-yellow-200 ${isfocusing && 'border-[2px]'} rounded-xl w-full  `} src={anime.posterImagePage} />
                <div className="flex items-center w-full justify-center absolute bottom-0 h-[58px] from-black to-transparent bg-gradient-to-t bg-gray-900/10  text-white text-[20px]   ">Attack on titan S{num}</div>
            </div>

        </NavLink>
    )
}