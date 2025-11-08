import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import menu from '../../../assert/img/menu.png';
import close from '../../../assert/img/close.png'

export function Items() {
    const ref = useRef();
    const [isClick, setIsClick] = useState(false);
    const ref2 = useRef();
    console.log(isClick);
    useEffect(() => {
        if (!isClick) return;
        const handelerMenu = (event) => {
            console.log(event)
            if (ref.current && !ref.current.contains(event.target)) {
                setIsClick(false);
                console.log('ss')
            }
        };
        document.addEventListener('mousedown', handelerMenu);
        document.addEventListener('scroll', handelerMenu)
        return () => {
            document.removeEventListener("mousedown", handelerMenu);
            document.removeEventListener('scroll', handelerMenu)
        };
    }
        , [isClick])
    return (
        <div>
            <div ref={ref2} className="flex  text-lg items-center justify-center pt-12    text-yellow-100 -mb-7 font-semibold text-[15px] gap-3">
                <div
                    className=" flex items-center flex-col justify-center">
                    <div className="lg:hidden items-center flex gap-2"
                    >
                        {!isClick ? 'menu' : 'close'}
                        <img onClick={() => {
                            setIsClick(!isClick);
                        }} ref={ref} className="lg:hidden hover:scale-110 h-6 -ml-1 duration-300 transition-all cursor-pointer " src={!isClick ? menu : close} />
                    </div>
                </div>
            </div>
            {isClick && <div className="lg:hidden flex flex-col gap-1 duration-300 transition-all text-lg items-center justify-center pt-2 lg:visible   text-yellow-100 -mb-7 font-semibold text-[15px] gap-3 ">
                <NavLink className='hover:underline hover:scale-105 transition-transform duration-300' to='/'>Home</NavLink>
                <NavLink className='hover:underline hover:scale-105 transition-transform duration-300' to='/list-page'>My list</NavLink>
                <NavLink className='hover:underline hover:scale-105 transition-transform duration-300' to='/tendance-anime'>Anime</NavLink>
                <NavLink className='hover:underline hover:scale-105 transition-transform duration-300' to='/about' > About </NavLink>
            </div>}
            <div className="flex collapse text-lg items-center justify-center pt-12 lg:visible   text-yellow-100 -mb-7 font-semibold text-[15px] gap-3 ">
                <NavLink className='hover:underline transition-transform duration-300' to='/'>Home</NavLink>
                <NavLink className='hover:underline transition-transform duration-300' to='/list-page'>My list</NavLink>
                <NavLink className='hover:underline transition-transform duration-300' to='/tendance-anime'>Anime</NavLink>
                <NavLink className='hover:underline transition-transform duration-300' to='/about' > About </NavLink>
            </div>
        </div>
    )
}

