import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todoFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const todo = useRecoilValue(todoFamily(id));

  return (
    <>
      {todo.id + "."} {todo.title}
      <br /> {todo.id + "."} {todo.description}
      <br />
    </>
  );
}

export default App;
