import { NavLink } from 'react-router-dom';
import { Items } from '../home/web-items/items.jsx';
import { NavBar } from '../navBar/navBar.jsx';



export function GNavBar(){
    return(
        <div className=" mt-8 overflow-hidden flex lg:items-center lg:w-full items-start justify-between  ">
                <NavLink to='/' className="text-[32px] lg:mr-24 rounded-bl-sm rounded-tr-sm rounded-tl-2xl rounded-br-2xl bg-purple-700 h-14 w-[70px] lg:w-auto flex items-center justify-center ml-12    font-bold " >
                    <div className="text-yellow-100 rotate-3 text-[62px] ">L</div>
                    <div className=" hidden lg:block -ml-[13px]">Anime</div>
                    <div className='-ml-[22px] mb-1 lg:hidden text-[36px]'>a</div>
                </NavLink>
                <div className='flex-1  pl-9'>
                    <NavBar />
                </div>
                <div className='lg:ml-24 -ml-10 -mt-10  lg:-mt-24 -mr-8  lg:pr-24 '>
                    <Items />
                </div>
            </div>
    )
}