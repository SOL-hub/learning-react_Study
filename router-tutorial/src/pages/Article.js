import { useParams } from "react-router-dom";
import { Link } from "readt-router-dom";

const Article = () => {

    const {id} = useParams();

  return (
   <>
    <Link to="">게시글 {id}</Link>
   </>
  );
};

export default Article;
