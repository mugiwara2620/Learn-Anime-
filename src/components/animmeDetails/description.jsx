
import { ato } from '../../data/data.js'
import { useEffect, useState } from 'react';
import { GNavBar } from '../navBar/genNavBar.jsx';
import './styles.css';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { AnimeSeason } from './animeSeasons.jsx'
import { Episode } from './episode.jsx';
export function Description({ animeId }) {
    const ref = useRef();
    const ref3 = useRef();
    const anime = ato[animeId - 1];
    const [isShowMore, setIsShowMore] = useState(false);
    const [ischange, setIschange] = useState(false);
    function handel() {
        console.log('11')

        const elem = document.querySelector('.dd');

        if (isShowMore) {
            elem.classList.add('lign-acces');
            setIsShowMore(false)
        } else {
            elem.classList.remove('lign-acces');
            setIsShowMore(true)
        }





    }


    useEffect(() => {
        setIsShowMore(false);
        handel();


    }, [ischange])

    function EpTitle({i,title}) {
        const [isOpen, setIsOpen] = useState(true);

        return (

            <NavLink to={`/anime-details/${animeId}/ep/${i + 1}`} className='pb-2 '>
                <Episode ep={i + 1} title={title} isOpen={isOpen} setIsOpen={setIsOpen} />
            </NavLink>
        )
    }


    return (
        <div className='flex wer flex-col  overflowhidden '>

            <GNavBar />
            <div className="text-white pt-8 flex   flex-col">
                <div className='mx-5 w-auto lg:flex lg:flex-row'>
                    {/* image */}
                    <div className='h-72 lg:w-72 lg:mt-12 lg:flex lg:flex-col lg:items-center  relative md:h-96 '>
                        <img className='object-cover   w-full h-full rounded-tl-3xl rounded-br-3xl' src={anime.posterImagePage} />
                        <div className='absolute lg:static lg:pt-0 lg:pl-0  bottom-0 lg:flex lg:flex-col lg:items-center lg:bg-transparent lg:justify-center pt-14 pl-7 text-3xl rounded-tl-3xl rounded-br-3xl from-gray-900 h-36  bg-gradient-to-t to-transparent w-full'>

                            <div className='lg:flex lg:justify-center whitespace-nowrap lg:items-center'>{anime.name}</div>
                            <div className='text-[20px] pl-1 -mt-1'>{anime.titles.length} Episodes </div>

                        </div>
                        <div className='absolute lg:static lg:mt-5 flex flex-col lg:flex-row whitespace-nowrap lg:justify-center lg:items-center lg:-bottom-10 bottom-2 gap-3 right-5 text-[19px] '>
                            <button className='bg-yellow-200 lg:flex  items-center gap-1 text-black px-2 py-1 pointer rounded-tl-xl  rounded-br-xl '> <span className='before:content-["▶"] lg:text-[35px] text-[15px]'></span><span className='lg:hidden'>Write now</span> </button>
                            <button className='bg-[rgb(160,65,255)] flex  whitespace-nowrap items-center gap-1 text-black py-1  px-2 rounded-tl-xl con rounded-br-xl'><span className='before:content-["+"] lg:text-[35px] lg:w-32  font-bold'></span> <div className='lg:hidden'>Add to list</div></button>

                        </div>
                    </div>
                    <div className='  lg:ml-6 lg:flex-1'>
                        {/* Description */}
                        <div
                            className=' lg:ml-6 lg:flex-1'>
                            <div className='font-bold mt-4  text-[16px]'>Overview:</div>
                            {/* description fix */}
                            <div className=' lg:h-full max-lg:flex lg:hidden lg:lign-acces  relative h-32  flex-col'>
                                <div
                                    className={`overflow-auto w-full `}>
                                    {anime.description}
                                </div>
                            </div>
                            {/* description mobile */}
                            <div className=' lg:h-full  lg:flex max-lg:hidden relative h-32 flex flex-col'>
                                <div
                                    className={`dd lign-acces   overflow-auto w-full `}>
                                    {anime.description}
                                </div>
                                <div
                                    onClick={() => {
                                        setIschange(!ischange);
                                    }}
                                    className='text-[15px]  font-bold cursor-pointer '>{isShowMore ? " - Less" : "+ More"}</div>
                            </div>


                        </div>
                        <div className='mt-5 mb-5   font-bold text-3xl text-yellow-100'>Episodes</div>
                        <div className='mx-auto  grid grid-cols-3 lg:grid-cols-4 '>
                            {anime.titles.map((title, i) => {
                                return <EpTitle title={title} i={i} />
                            }
                            )}
                        </div>


                        {/* Seasons */}
                        <div className='flex-col flex'>
                            <div className='mt-5  font-bold text-3xl text-yellow-100'>Seasons</div>

                            <div className='flex  relative items-center anime-seasons w-full '>

                                <div
                                    ref3={ref3}
                                    className='anime-seasons  scrolling-seasons  mx-auto lg:mx-8 lg:w-[800px]  flex gap-4   snap-x overflow-y-hidden overflow-x-auto'
                                    onClick={() => { }}>
                                    {[1, 2, 3, 4].map((i) => {
                                        return (
                                            <AnimeSeason num={i} animeId={animeId} />



                                        )
                                    })}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}