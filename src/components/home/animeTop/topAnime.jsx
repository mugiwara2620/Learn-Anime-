import { ato } from "../../../data/data"
import './topAnime.css';
export function TopAnime({ num }) {
    const anime = ato[num - 1];
    return (
        <div className="relative  snap-center w-64 hover:scale-110 transition-transform  mr-8 py-9 h-full  flex justify-center items-center  rounded-lg ">
            <div className="overflow-hidden  rounded-lg h-56 w-44">
                <img className="object-cover  h-full w-full  " src={anime.posterImagePage} />
            </div>
            <div className="  absolute my-auto rotate-90 text-yellow-100  text-3xl ml-52 truncate  ">Attack on titan S{num}</div>

            <div className="absolute  -left-10 font-bold text-9xl text-black  text-shadow  text-shadow">{num}</div>
        </div>
    )
}