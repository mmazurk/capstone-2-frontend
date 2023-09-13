
import { useParams } from "react-router-dom";

function SearchCardDetail() {
    const { searchId } = useParams();
    return (
        <h1>This is the Search Card Detail page for {searchId}.</h1>
    )
}

export default SearchCardDetail;