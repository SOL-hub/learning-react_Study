import React, {useState} from 'react';

const EventPractice = () => {

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername =  e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value)

    const onClick = ()=>{
        alert(username + ':' + message);
        setUsername('');
        setMessage('');
    };

    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick();
        }
    };

        return (
            <div>
                <p>이벤트 연습</p>
                <input name="username" placeholder='아무거나 입력하라' value={username} onChange={onChangeUsername} />
                <input name="username" placeholder='아무거나 입력하라' value={message} onChange={onChangeMessage} onKeyPress={onKeyPress} />

                <button onClick={onClick}>확인</button>
            </div>
        )
    }

export default EventPractice;