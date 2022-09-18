import React from 'react';
const MyComponent = (props) =>{
    
    //ES6의 비구조화 할당 문법을 사용하여 내부 값을 바로 추출하자했잖소,이거요. 
    const {name, children} = props;

    return (
        <>
            <p>나의 이름은{name}이오</p>

            {/* MyComponent태그 사이에 작성한 리액트라는 문자열은 문자열은 MyComponent내부에서
            보여주려면 props.children값을 보여줘야한다. */}
            <p>children 값은 {children}, 이겁니다.</p>
        </>
    )
};

//props 값을 따로 지정하지 않았을 때 보여줄 기본 값을설정하는 defaultProps
MyComponent.defaultProps = {
    name:'name'
};

export default MyComponent;