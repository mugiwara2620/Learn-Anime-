import clock from '../../assert/img/lock.png'

export function Episode({ ep }) {
    return (
        <div className='bg-gradient-to-t rounded-t-xl from-gray-100'>
            <img className='h-14' src={clock}/>
            <div className=" text-black items-center font-bold px-2 justify-center flex text-">
                Ep {ep}
            </div>
        </div>

    )
}