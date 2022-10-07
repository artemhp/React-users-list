import "../src/Post.css";

function Post({ position, img, sername, name, hw, points }) {
  return (
    <article className="article">
      <div className="user-info">
        <div className="user-avatar-and-name">
          <div className="user-position">{position}</div>
          <img className="avatar" alt="" src={img} />
          <div className="user-name">
            <div>{name}</div>
            <div>{sername}</div>
          </div>
        </div>

        <div className="user-lessons-points-and-level">
          <div className="user-lessons-and-points">
            <div>{hw}</div>
            <div>{points}</div>
          </div>

          <div className="user-level">
            <div className="exelent">ex</div>
            <div className="very-good">vg</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Post;
