// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// function App() {
// return <h1>Hello React!</h1>;
// }
// export default App;

// function App() {
// const name = "React"
//    return (
//   <div>
//   <h1>안녕하세요, {name}!</h1>
//   <p>첫 번째 리액트 앱입니다.</p>
//   </div>
//   )
// }
// export default App;

// import Header from "./components/Header";
// import ProfileCard from "./components/ProfileCard";
// import Counter from "./components/Counter";
// import LikeToggle from "./components/LikeToggle";
// import StudentList from "./components/StudentList";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <div className="container">
//       <Header />
//       <ProfileCard
//         name="홍길동"
//         major="인공지능"
//         interests={["ML", "Web", "Music"]}
//       />
//       <Counter />
//       <LikeToggle />
//       <StudentList />
//       <Footer />
//     </div>
//   );
// }

// import ColorText from "./components/ColorText";

// function App() {
//   return (
//     <div>
//       <h1>React 예제</h1>
//       <ColorText />
//     </div>
//   );
// }

// export default App;

// App.js

import FruitList from "./components/FruitList";
import ColorText from "./components/ColorText";

function App() {
  const fruitArray = ["사과", "바나나", "포도", "딸기"];

  return (
    <div className="container" style={{ padding: 24 }}>
      <h1>실습 예제 데모</h1>

      {/* 예제 1: 과일 리스트 */}
      {<FruitList fruits={fruitArray} />}

      {/* 예제 2: 색상 변경 */}
      <ColorText />
    </div>
  );
}

export default App;
