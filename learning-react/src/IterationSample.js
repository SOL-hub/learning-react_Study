import { useState } from "react";

const IterationSample = () =>{

    const [names, setNames] = useState([{id : 1, text:'아이스라떼'}, {id:2, text:'바닐라라떼'}, {id:3, text:'말차라떼'}]);

    const [inputText, setInputText] = useState('');

    const [nextId, setNaextId] = useState(4); //새로운 항목 추가할 때 사용할 id

    const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
    return <ul>
        {{namesList}}
    </ul>
}

export default InterationSample;