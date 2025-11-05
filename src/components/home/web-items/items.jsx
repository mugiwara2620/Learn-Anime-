import { use, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
// import {menu} from 'img/menu.png'

export function Items() {
    const [isMunushowed, setIsMunushowed] = useState(false);
    const ref = useRef();
    const [isClick, setIsClick] = useState(true);
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
        // window.addEventListener('resize', handelerMenu)
        return () => {
            document.removeEventListener("mousedown", handelerMenu);
            document.removeEventListener('scroll', handelerMenu)
            window.removeEventListener('resize', handelerMenu)
        };
    }
        , [isClick])
    //   }, [isClick]);
    //    useEffect(() => {
    //     if (!isClick) return; // only listen when open
    //     const handelerMenu = (e) => {
    //       if (ref2.current && !ref2.current.contains(e.target)) {
    //         setIsClick(false);
    //       }
    //     };
    //     document.addEventListener("mousedown", handelerMenu);
    //     return () => document.removeEventListener("mousedown", handelerMenu);
    //   }, [isClick]);
    return (
        <div>
            <div ref={ref2} onClick={() => {
                setIsClick(!isClick);
            }} className="flex  text-lg items-center justify-center pt-12    text-yellow-100 -mb-7 font-semibold text-[15px] gap-3">
                <div

                    className=" flex items-center flex-col">
                    <img ref={ref} onClick={() => {
                        setIsClick(!isClick);
                    }} className="lg:hidden hover:scale-110 h-8 duration-300 transition-all cursor-pointer " src={isMunushowed ? 'img/close.png' : 'img/menu.png'} />
                    {isClick && <div className="lg:hidden flex flex-col gap-1 duration-300 transition-all text-lg items-center justify-center pt-2 lg:visible   text-yellow-100 -mb-7 font-semibold text-[15px] gap-3 ">
                        <NavLink className='hover:underline transition-transform duration-300' to='/'>Home</NavLink>
                        <NavLink className='hover:underline transition-transform duration-300' to='/list-page'>My list</NavLink>
                        <NavLink className='hover:underline transition-transform duration-300' to='/tendance-anime'>Anime</NavLink>
                        <NavLink className='hover:underline transition-transform duration-300' to='/about' > About </NavLink>
                    </div>}
                </div>
            </div>
            <div className="flex collapse text-lg items-center justify-center pt-12 lg:visible   text-yellow-100 -mb-7 font-semibold text-[15px] gap-3 ">
                <NavLink className='hover:underline transition-transform duration-300' to='/'>Home</NavLink>
                <NavLink className='hover:underline transition-transform duration-300' to='/list-page'>My list</NavLink>
                <NavLink className='hover:underline transition-transform duration-300' to='/tendance-anime'>Anime</NavLink>
                <NavLink className='hover:underline transition-transform duration-300' to='/about' > About </NavLink>
            </div>
        </div>
    )

    //   const [open, setOpen] = useState(false);
    //   const menuRef = useRef(null);

    // Close when clicking outside
    //   useEffect(() => {
    //     if (!open) return; // only listen when open
    //     const handleClickOutside = (e) => {
    //       if (menuRef.current && !menuRef.current.contains(e.target)) {
    //         setOpen(false);
    //       }
    //     };
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => document.removeEventListener("mousedown", handleClickOutside);
    //   }, [open]);

    //   return (
    //     <div className="menu-root bg-slate-600" ref={menuRef}>
    //       <button
    //         aria-haspopup="menu"
    //         aria-expanded={open}
    //         aria-controls="main-menu"
    //         onClick={() => setOpen((v) => !v)}
    //       >
    //         ☰ Menu
    //       </button>

    //       {open && (
    //         <div
    //           id="main-menu"
    //           role="menu"
    //           tabIndex={-1}
    //           className="menu"
    //           aria-label="Main"
    //         >
    //           <a role="menuitem" href="/">Home</a>
    //           <a role="menuitem" href="/my-list">My list</a>
    //           <a role="menuitem" href="/about">About</a>
    //         </div>
    //       )}
    //     </div>
    //   );
}

