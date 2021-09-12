import React from "react";

// function Food(props) {
//   console.log(props.fav);
//   return <h1>I like Potato</h1>;
// }

function Food({ name, picture }) {
  //{}사용하면 props 안붙이고 그 요소중 특정한것만 빼내기 가능
  return (
    <>
    {/* name, pricture props 사용 */}
      <h2>I like {name}</h2>  
      <img src={picture}></img> 
    </>
  );
}

const foodILike = [
  {
    //name과 image가 있는 object, foodILike는 배열
    name: "kamja",
    image:
      "https://mediahub.seoul.go.kr/wp-content/uploads/2016/09/61a2981f41200ac8c513a3cbc0010efe.jpg",
  },
  {
    name: "kamjajun",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQOEuiXOth2d35Cen-K60VqVnzS0hZ4UEIw&usqp=CAU",
  },
  {
    name: "sayingkamja",
    image: "https://s3.peing.net/t/uploads/user/icon/13022962/f9d6a089.jpeg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}{" "}
      {/* dish는 object!!*/}
    </div>
  );
}

export default App;
