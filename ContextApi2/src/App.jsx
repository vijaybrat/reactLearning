import { useState } from "react";
import { MyContext } from "./MyContext";
import MyComponent from "./MyComponent";

function App() {
  const[text,setText]=useState("")
  console.log(MyContext.Provider);
  return <div>
    <MyContext.Provider value={{text,setText}}>
      <MyComponent/>
    </MyContext.Provider>
  </div>;
}

export default App;
