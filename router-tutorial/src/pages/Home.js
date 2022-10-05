import {Link} from 'react-router-dom';

const Home = () =>{
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저보여지는 요것은 홈페이지</p>
            <Link to="/about">About페이지</Link>
        </div>
    )
};

export default Home;