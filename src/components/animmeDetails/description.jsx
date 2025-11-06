
import { ato } from '../../data/data.js'
import { useState } from 'react';
import { GNavBar } from '../navBar/genNavBar.jsx';
import './styles.css';
import { useRef } from 'react';



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
                <div className='mx-5 lg:flex lg:flex-row'>
                    {/* image */}
                    <div className='h-72  relative md:h-96 '>
                        <img className='object-cover  w-full h-full rounded-tl-3xl rounded-br-3xl' src={anime.posterImagePage} />
                        <div className='absolute bottom-0 pt-14 pl-7 text-3xl rounded-tl-3xl rounded-br-3xl from-gray-900 h-36  bg-gradient-to-t to-transparent w-full'>
                            {anime.name}
                            <div className='text-[20px] pl-1 -mt-1'>{anime.titles.length} Episodes </div>

                        </div>
                        <div className='absolute flex flex-col bottom-2 gap-3 right-5 text-[19px] '>
                            <button className='bg-yellow-200 flex items-center gap-1 text-black px-2 py-1 pointer rounded-tl-xl  rounded-br-xl '> <span className='before:content-["▶"] text-[15px]'></span> Write now</button>
                            <button className='bg-[rgb(160,65,255)] flex items-center gap-1 text-black py-1  px-2 rounded-tl-xl con rounded-br-xl'><span className='before:content-["+"] font-bold'></span> Add to list</button>

                        </div>
                    </div>
                    {/* Description */}
                    <div className=' lg:ml-6 lg:flex-1'>
                        <div className='font-bold mt-4  text-[16px]'>Overview:</div>
                        <div className='  relative h-32 flex flex-col'>
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



                </div>
            </div>
        </div>

    )
}