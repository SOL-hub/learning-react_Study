import React, {Component, useState} from 'react';

class EventPractice extends Component {
    render() {
        return (
            <div>
                <p>이벤트 연습</p>
                <input name="message" placeholder='아무거나 입력하라'  onChange={(e)=>{console.log(e)}} />
            </div>
        )
    }
}

export default EventPractice;