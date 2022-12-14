import React from 'react';
import propsTypes from 'prop-types';
const MyComponent = ({name, favoriteNumber, children}) =>{

    return (
        <>
            <p>나의 이름은{name}이오</p>
            <p>children 값은 {children}, 이겁니다.</p>
            <br/>
            <p>아이 라이크 페이브뤄릿 넘버 이즈 {favoriteNumber}</p>
        </>
    )
};


MyComponent.defaultProps = {
    name:'name'
};

MyComponent.propsTypes = {
    name : propsTypes.string, //값은 무조건 문자열형태로 전달해야한다고 설정
    favoriteNumber: propsTypes.number.isRequired
};

export default MyComponent;