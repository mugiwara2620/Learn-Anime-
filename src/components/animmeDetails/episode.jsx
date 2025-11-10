import clock from '../../assert/img/lock.svg'
import unlock from '../../assert/img/unlock.svg'
export function Episode({ ep, title,isOpen}) {
    return (
        <div className={`bg-gradient-to-t  rounded-lg flex  items-center snap-end rounded-t-xl border-spacing-5 border from-gray-100 mr-2 ${isOpen &&'opacity-20' }`}>
            <img className='h-6 justify-star flex items-start pl-2 ' src={ isOpen ? unlock :clock} />
            <div className=" text-black truncate text-ellipsis whitespace-nowrap justify-start  py-4 font-bold px-2 text-">
                Ep {ep} {title}
            </div>
        </div>

    )
}