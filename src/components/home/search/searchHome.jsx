import { NavBar } from "../../navBar/navBar";

export function SearchHome() {
    return (
        <div className="sm:mx-24 md:10 pb-10 mt-24 pt-10 mx-2 rounded-3xl pr-5  bg-purple-400/20">
            <div className="text-[32px] flex items-center  ml-7 font-bold " ><div className="text-yellow-100 rotate-3 text-[54px] pt-6">L</div> <div className="mt-4 -ml-[13px]">Anime</div></div>
            <div className=" mx-9 sm:mr-20 lg:w-[600px]">
                <NavBar />
            </div>
            
            <div className="ml-7  text-white text-sm flex-row lg:mt-3 lg:w-[570px] mr-28 mt-[3px]  ">
                <span className="font-bold ">Top search:

                </span>
                <span className="text-[14px] ">One PieceChainsaw Man the Movie: Reze ArcOne-Punch Man Season 3My Hero Academia Final SeasonDemon Slayer: Kimetsu no Yaiba Infinity CastleMy Hero Academia Season 7Attack on TitanChainsaw ManSpy x Family Season 3Demon Slayer: Kimetsu no Yaiba

                </span>
            </div>
        </div>

    )
}