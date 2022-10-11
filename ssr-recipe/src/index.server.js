import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
    <div> 서버렌더링 오하요</div>
);

console.log(html);