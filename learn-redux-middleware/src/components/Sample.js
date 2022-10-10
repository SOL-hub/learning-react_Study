const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <>
      <section>
        <h1>post</h1>
        {loadingPost && "로딩 중 ~,~"}
        {!loadingPost && post && (
          <div>
            <h2>{post.title}</h2>
            <h2>{post.body}</h2>
          </div>
        )}
      </section>

      <hr />
      <section>
        <h1>사용자 목록</h1>
        {loadingUsers && "로딩 중 ~,~"}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Sample;
