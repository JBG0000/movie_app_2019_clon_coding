import React from "react";
import PropTypes from "prop-types";

// const foodILike = [
//   {
//     //name과 image가 있는 object, foodILike는 배열
//     id: 1,
//     name: "kamja",
//     image:
//       "https://mediahub.seoul.go.kr/wp-content/uploads/2016/09/61a2981f41200ac8c513a3cbc0010efe.jpg",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "kamjajun",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQOEuiXOth2d35Cen-K60VqVnzS0hZ4UEIw&usqp=CAU",
//     rating: 4.9,
//   },
//   {
//     id: 3,
//     name: "sayingkamja",
//     image: "https://s3.peing.net/t/uploads/user/icon/13022962/f9d6a089.jpeg",
//     rating: 4.8,
//   },
// ];

// // function Food(props) {
// //   console.log(props.fav);
// //   return <h1>I like Potato</h1>;
// // }

// function Food({ name, picture, rating }) {
//   //{}사용하면 props 안붙이고 그 요소중 특정한것만 빼내기 가능
//   return (
//     <>
//       {/* name, pricture props 사용 */}
//       <h2>I like {name}</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </>
//   );
// }

// // function renderFood(dish) {
// //   console.log(dish)
// //   return <Food name={dish.name} picture={dish.image} />
// // }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number
// };

// function App() {
//   return (
//     <div>
//       {/* {console.log(foodILike.map(renderFood))} */}
//       {foodILike.map((dish) => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    count: 0,
  };
  add=()=>{
    console.log("add");
  };
  minus=()=>{
    console.log("minus");
  };

  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>App</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
