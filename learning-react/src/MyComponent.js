import React from 'react';
const MyComponent = ({name, children}) =>{//ES6의 비구조화 할당 문법을 사용하여 내부 값을 바로 추출

    return (
        <>
            <p>나의 이름은{name}이오</p>
            <p>children 값은 {children}, 이겁니다.</p>
        </>
    )
};

MyComponent.defaultProps = {
    name:'name'
};

export default MyComponent;