import { HomeDetails } from "../../components/home/animeTop/homeDetails";
import { SearchHome } from "../../components/home/search/searchHome";
import { Comment } from "../../components/home/comments/comment";
import { Items } from "../../components/home/web-items/items";

export function Home(){
    return(
        <div>
            <Items/>
            <SearchHome />
            <HomeDetails/>
            <Comment />
        </div>
    )
}