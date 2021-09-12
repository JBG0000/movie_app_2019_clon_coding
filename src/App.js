import React from "react";

// function Food(props) {
//   console.log(props.fav);
//   return <h1>I like Potato</h1>;
// }

//위 코드와 동일 작동
function Food({fav}) {  //{}사용하면 props 안붙이고 그 요소중 특정한것만 빼내기 가능
  console.log(fav);
  return <h1>I like {fav}</h1>  //props 사용
}

function App() {
  return (
    <div>
      <h1>Hello!!!!!</h1>
      <Food fav="kimchi"></Food> {/* props */}
      <Food fav="ramen"></Food>
      <Food fav="samgiopsal"></Food>
      <Food fav="JJukumi"></Food>
    </div>
  );
}

export default App;
