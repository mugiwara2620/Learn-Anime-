import clock from '../../assert/img/lock.png'

export function Episode({ ep,title }) {
    return (
        <div className='bg-gradient-to-t snap-end rounded-t-xl from-gray-100'>
            <img className='h-14' src={clock}/>
            <div className=" text-black items-center font-bold px-2 justify-center flex text-">
                Ep {ep} {title}
            </div>
        </div>

    )
}