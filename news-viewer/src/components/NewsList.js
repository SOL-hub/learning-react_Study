import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen adn (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  describe: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      'https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e259b374afc843ab8b59e694d70f4970',
    );
  }, [category]);

  //대기 중일 때
  if (loading) {
    return <NewsListBlock>대기중</NewsListBlock>;
  }

  //아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  //에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  //response 값이 유효할 때
  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
