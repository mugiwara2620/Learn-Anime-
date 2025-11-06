
import { useParams } from 'react-router-dom'
import {Description} from '../../components/animmeDetails/description'





export function AnimeDetails() {
    const {id} = useParams();
    return (
        <div className=''>
            <Description animeId={id}/>
        </div>
    )
}