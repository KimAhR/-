import { useState } from "react";
import Effect from "./components/Effect";
import UserList from "./components/UserList";
import Users from "./components/Users";

function App() {
  const [active, setActive] = useState(true);

  return (
    <>
      {/* <button onClick={() => setActive(!active)}>토글</button>
      {active && <Effect />} */}

      <Users />
    </>
  );
}

export default App;
