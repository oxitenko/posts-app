import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { getPostsFetch } from "./postsState";
import {useEffect} from "react";

function App() {

  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);
  console.log(posts)

  return (
    <div className="App">
      {
        posts.data?.map((post) => {
          return (
              <div>
                <h1>{post.title}</h1>
              </div>
          )
        })
      }
    </div>
  );
}

export default App;
