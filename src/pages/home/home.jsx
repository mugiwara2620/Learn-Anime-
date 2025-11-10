import { HomeDetails } from "../../components/home/animeTop/homeDetails";
import { SearchHome } from "../../components/home/search/searchHome";
import { Comment } from "../../components/home/comments/comment";
import { Items } from "../../components/home/web-items/items";
import { useState } from "react";

export function Home() {
    const [animesDescription, setAnimesDescription] = useState([]);

    return (
        <div>
            <Items />
            <SearchHome />
            <HomeDetails
                animesDescription={animesDescription}
                setAnimesDescription={animesDescription} />
            <Comment />
        </div>
    )
}