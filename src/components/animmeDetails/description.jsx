
import { ato } from '../../data/data.js'
import { useState } from 'react';
import { GNavBar } from '../navBar/genNavBar.jsx';
import './styles.css';
import { useRef } from 'react';
import { AnimeSeason } from './animeSeasons.jsx'
import { Episode } from './episode.jsx';

export function Description({ animeId }) {
    console.log(animeId);
    const ref = useRef();
    const anime = ato[animeId - 1];
    console.log(anime.posterImagePage)
    const [isShowMore, setIsShowMore] = useState(false);
    return (
        <div className='flex flex-col  overflowhidden '>

            <GNavBar />
            <div className="text-white pt-8 flex   flex-col">
                <div className='mx-5 w-auto lg:flex lg:flex-row'>
                    {/* image */}
                    <div className='h-72 lg:flex lg:flex-col lg:items-center  relative md:h-96 '>
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
                        <div className='mt-5 font-bold text-3xl text-yellow-100'>Episodes</div>
                        <div className='items-center justify-center grid grid-flow-col  grid-rows-2 gap-2 '>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                            <div className=''><Episode/></div>
                        </div>
                        
                        {/* Description */}
                        <div className=' lg:ml-6 lg:flex-1'>

                            <div className='font-bold mt-4  text-[16px]'>Overview:</div>
                            <div className=' lg:h-full relative h-32 flex flex-col'>
                                <div
                                    ref={ref}
                                    className=' overflow-auto w-full '>
                                    {anime.description}
                                </div>
                                <div
                                    onClick={() => {
                                        if (!isShowMore) {
                                            ref.current.classList.remove('lign-acces');
                                            setIsShowMore(true);
                                        } else {
                                            ref.current.classList.add('lign-acces');
                                            setIsShowMore(false);
                                        }
                                    }}
                                    className='text-[15px] invisible lg:visible font-bold cursor-pointer '>{isShowMore ? " - Less" : "+ More"}</div>
                            </div>
                            

                        </div>
                        <div className='flex max-w-[770px] '>
                            <div className=' flex  overflow-y-hidden overflow-x-auto'>
                                {[1, 2, 3, 4].map((i) => {
                                    return (
                                        <AnimeSeason num={i} />
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}