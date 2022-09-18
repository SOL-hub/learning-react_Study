import React from 'react';

const MyComponent = (props) =>{
    return (
        <>
            <p>나의 이름은{props.name}이오</p>

            {/* MyComponent태그 사이에 작성한 리액트라는 문자열은 문자열은 MyComponent내부에서
            보여주려면 props.children값을 보여줘야한다. */}
            <p>children 값은 {props.children}, 이겁니다.</p>
        </>
    )
};

//props 값을 따로 지정하지 않았을 때 보여줄 기본 값을설정하는 defaultProps
MyComponent.defaultProps = {
    name:'name'
};

export default MyComponent;