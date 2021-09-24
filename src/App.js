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

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("hello"); //컴포넌트가 실행(mount)되자마자 실행
//   }
//   state = {
//     count: 0,
//   };
//   add=()=>{
//     this.setState(current => ({count: current.count + 1 })); //state 직접변경 안됌, setState 사용으로 refresh(변화가 있는 부분만 react가 업데이트)
//   };  //current, state를 set할 때 react에서 외부의 상태에 의존하지 않는 방법

//   //setState 함수를 호출할 때마다 react는 rerender
//   minus=()=>{
//     this.setState(current => ({count: current.count - 1 }));
//   };
//   componentDidMount() {
//     console.log("component rendered"); //render 된 다음에 실행
//   }
//   componentDidUpdate() {
//     console.log("I'm just update")  //컴포넌트가 업데이트될 때 실행
//   }
//   componentWillUnmount() {
//     console.log("Goodbye, cruel world"); //컴포넌트가 unmount되면 실행(동작 확인은 어렵지만 동작함!)
//   }
//   render() {
//     console.log("I'm rendering")
//     return (
//       <div>
//         <h1>The number is : {this.state.count}</h1>
//         <button onClick={this.add}>App</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount(){
    setTimeout(() => {  //deley time 함수 : date fetch가 완료되기까지 로딩 걸리는 동안 로딩이라는 상태 나타내기 
      this.setState({isLoading: false, book: true}); //setState 사용시 변수?를 미리 선언할 필요는 없다(book은 선언되어 있지 않지만 에러는 발생하지 않음)
    }, 6000)  //6초 false 유지라는 뜻인듯
  }
  render() {
    const {isLoading} = this.state;
    return <div>{this.state.isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
