import logo from "./logo.svg";
import "./App.css";
import Post from "../src/post";

function App(props) {
  return (
    <div className="wrapper">
      {props.usersList.map((user, i) => {
        return (
          <Post
            position={i + 1}
            name={user.name}
            sername={user.sername}
            hw={user.hw}
            points={user.points}
            img={user.img}
          />
        );
      })}
    </div>
  );
}

export default App;
