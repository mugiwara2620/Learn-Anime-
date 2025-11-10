import clock from '../../assert/img/lock.png'

export function Episode({ ep, title }) {
    return (
        <div className='bg-gradient-to-t rounded-lg flex  items-center snap-end rounded-t-xl from-gray-100 mr-2'>
            <img className='h-6 justify-star flex items-start pl-2' src={clock} />
            <div className=" text-black truncate text-ellipsis whitespace-nowrap justify-start  py-4 font-bold px-2 text-">
                Ep {ep} {title}
            </div>
        </div>

    )
}