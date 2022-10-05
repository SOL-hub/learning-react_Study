const data = {
    sol1: {name : 솔, description:'리액트를 사랑하는 개발자'},
    sol2: {name : 똘, description:'지금 이 파일 생성한 사람'},
};

const Profile = () =>{
    const params = useParams();
    const profile = data[params.username];

    return (
        <>
        <h1>사용자 프로필</h1>
        {profile ? (
            <div>
                <h2>{profile.name}</h2>
                <p>{profile.description}</p>
            </div>
        )
    : (<p>존재하지 않는 프로필입니다.</p>)}
        </>
    )
}

export default Profile;