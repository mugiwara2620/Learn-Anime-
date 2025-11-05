// import {shearch} from 'chercher.png';


export function NavBar() {
    return (
        <div className=" gap-2 w-full flex items-center justify-center">
            <input className="border-2  w-full shadow-indigo-1000 pl-2 text-3 outline-none py-2 rounded-l-lg border-violet-900" placeholder="Anime Name..." />
            <button className="border -m-2  p-1 px-2 font-semibold bg-yellow-100 rounded-r-lg -ml-3 border-l-0 border-yellow-300 border-2 " ><img className="h-6 m-1" src='chercher.png'/></button>
        </div>
    )
}