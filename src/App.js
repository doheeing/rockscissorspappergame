import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
const choice = {
  rock : {
    name : "rock",
    img : "https://i0.wp.com/DaveGipson.net/wp-content/uploads/2021/11/img_0271.jpg?fit=980%2C653&ssl=1&w=640"
  },
  scissor:{
    name : "scissor",
    img : "https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png"
  },
  paper:{
    name : "paper",
    img : "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null)


  const play = (userChoice) =>{
    setUserSelect(choice[userChoice])
  }
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect}/>
        {/* <Box title="Computor" item={userSelect}/> */}
      </div>
      <div className="button">
      <button onClick={()=>play("scissor")}>가위</button>
      <button onClick={()=>play("rock")}>바위</button>
      <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
