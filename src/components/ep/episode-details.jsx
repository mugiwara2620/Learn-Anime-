import { GNavBar } from "../navBar/genNavBar";
import { NavBar } from "../navBar/navBar";
import { ato } from "../../data/data";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";

export function Ep() {
    const { id, epId } = useParams();
    const anime = ato[id - 1];
    const titles = anime.titles;
    const [value, setvalue] = useState();
    const [isDone, setIsDone] = useState(false);
    const [isEpisodes, setIsEpisodes] = useState(false);
    console.log(anime);
    console.log(anime)

    function summryDone() {
        setIsDone(!isDone);
    }




    return (
        <div className="mb-96">
            <header><GNavBar /></header>
            {/* body */}
            <div className="flex ml-2  lg:items-start lg:justify-between flex-col mx-3 lg:gap-2 gap-10 lg:flex-row mt-5 ">

                <div className="w-full flex h-[450px]  lg:items-start  ">

                    <div className=" h-[300px]   ml-5 lg:mb-2  flex-col max-w-72 lg:mr-9 flex  lg:w-52  ">
                        {/* img */}

                        <img className="object-cover  lg:w-52 w-full rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl " src={anime.posterImagePage} />
                        {/* mobile list */}
                        <div className="items-center mx-auto flex text-yellow-100 mt-2 font-bold text-[19px]">
                            {anime.name}
                        </div>
                    </div>
                    {/* input */}
                    <div className="flex-1  flex lg:pl-0 pl-4 flex-col  justify-start ">
                        <div className="text-yellow-100 font-bold text-[24px]  mb-2 ">Ep.{epId}</div>
                        <textarea
                            disabled={isDone}
                            rows="4"
                            value={value}
                            placeholder="Enter you summry..."
                            onChange={(event) => {
                                setvalue(event.target.value)
                            }}

                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    setvalue(value => value + '\t')
                                    // treat as submit or move focus
                                    // onSubmit();
                                }
                            }}
                            className="   h-60  rounded-md pl-2 pt-1 pr-1   bg-gray-300/40 text-[17px] font-bold" />
                        <div className="flex justify-end gap-1 pr-3 w-full">
                            <button className={`flex flex-end  bg-purple-600 mt-1 ${isDone && 'hidden'} rounded-sm text-xl  px-3 `}>
                                Save
                            </button>
                            <button
                                onClick={summryDone}
                                className="flex flex-end  bg-yellow-200/90 mt-1 -mr-2 rounded-sm text-xl  px-3 ">
                                {!isDone ? 'Done' : 'Modify'}
                            </button>
                        </div>
                        <div className="max-lg:hidden lg:flex gap-5 w-full items-center justify-center">
                            <div className={`flex ${id == 1 && 'collapse'}  flex-col items-center h-full justify-center  gap-1 `}>
                                <NavLink
                                    to={`/anime-details/${id}/ep/${Number(epId) - 1}`}

                                    className="h-12 bg-yellow-200/90 pr-4 flex items-center   rounded-sm text-xl px-3  ">
                                    <span className=" text-[21px]">◀  </span>
                                </NavLink>
                                <div className="text-white  cursor-pointer hover:underline">ep.{Number(epId) - 1}</div>
                            </div>
                            <div className={`flex ${id == 1 && 'collapse'}  flex-col items-center h-full justify-center  gap-1 `}>
                                <NavLink
                                    to={`/anime-details/${id}/ep/${Number(epId) - 1}`}

                                    className="h-12 bg-yellow-200/90 pl-4 flex items-center   rounded-sm text-xl px-3  ">
                                    <span className=" text-[21px]"> ▶ </span>
                                </NavLink>
                                <div className="text-white  cursor-pointer hover:underline">ep.{Number(epId) + 1}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ep list */}
                <div className="flex lg:32 mt-5 lg:flex-1 lg:mx-0 lg:w-[100px]   mx-32  h-40 gap-6 justify-between ">
                    <div className={`flex  lg:hidden flex-col items-center h-full justify-center  gap-1 `}>
                        <NavLink
                            className="h-8   bg-yellow-200/90  pr-4  rounded-sm text-xl px-3  "
                            to={`/anime-details/${id}/ep/${Number(epId) - 1}`}>
                            <span className=" text-[21px]">◀</span>
                        </NavLink>
                        <div className="text-white cursor-pointer hover:underline">ep.{Number(epId) - 1 > 0 && Number(epId) - 1}</div>
                    </div>
                    <div className="lg:h-40 flex w-full items-center  flex-col lg:mt-4">
                        <div className="text-white  lg:flex lg:ml-2 w-full font-bold text-24 mb-1">Episodes</div>
                        <div className="shadow-white overflow-ellipsis overflow-x-hidden lg:h-64 ep-scroll-bar w-full  max-w-[500px] flex   flex-col gap-1 overflow-y-auto snap-y">
                            {titles && titles.map((title, i) => {
                                return (
                                    <div className="w-30  text-yellow-100  p-2 rounded-md  bordesr-[2px] snap-start   bg-black">ep{i + 1}. {title}</div>)
                            })}
                        </div>
                    </div>
                    <div className="flex lg:hidden  flex-col items-center h-full justify-center  gap-1  ">
                        <NavLink
                            to={`/anime-details/${id}/ep/${Number(epId) + 1}`}
                            className="h-8   bg-yellow-200/90  pl-4  rounded-sm text-xl px-3  ">
                            <span className=" text-[21px]">▶</span>
                        </NavLink>
                        <div className="text-white cursor-pointer hover:underline">ep. {Number(epId) + 1}</div>
                    </div>

                </div>





            </div>
        </div>
    )
}