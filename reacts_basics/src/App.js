import React from "react";

function App() {
  return <div>Welcome to react basics</div>;
}

export default App;


//---------------------------------------------------------------------------------------------------------------------------
/*
function App() {
  return (
    <>
    <section>
      <h1>Hello my name is vibhav</h1>
      <p>This is some content :-</p>
    </section>
    </>
  );
}

The JSX is converted into javascript code by ReactJS-

import React from "react";
function App(){
  return React.createElement(
    "section",
    null,
    React.createElement("h1",null,"Hello my name is vibhav"),
    React.createElement("p",null,"This is some content :- ")
  );
}

export default App;

*/

//-------------------------------------------------------JSX Rule---------------------------------------------------------

//1- JSX return a single root element
// To return multiple element from a component , wrap them with a single parent tag.

//2. Close all the tags.
// JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

// 3. className
// open your DevTools and read the error message
// const App = () => {
//   return (
//     <section class="section">
//       <h1 class="title">Hello HuXn</h1>
//     </section>
//   );
// };

// 4. forHTML
// open your DevTools and read the error message
// const App = () => {
//   return (
//     <section class="section">
//       <form>
//         <label for="name">Name</label>
//         <input type="text" placeholder="Enter Your Name" id="name" />
//       </form>
//     </section>
//   );
// };

//----------------------------------------------------------------------------------------------------------
// To import multiple component in ReactJS Example-
// import Greetings from "./components/Greetings";
// import Add from "./components/Add";

// const App = () => {
//   return (
//     <>
//       <Greetings />
//       <Add />
//     </>
//   );
// };

// export default App;

//--------------------------------------------------------------------------------------------------------------

// ********** Embedding Dynamic Content **********

// const App = () => {
//   const myName = "Vibhav Dubey";
//   const multiply = (a, b) => a * b;
//   const specialClass = "simple-class";

//   return (
//     <section>
//       {/* Rendering Variable Value */}
//       <h1>{myName}</h1>
//       {/* Rendering Expression */}
//       <p>4 + 2 = {4 + 2}</p>
//       {/* Rendering Array */}
//       <p>My Friends List: {["Siddhant", "Vaibhav", "Stuti", "Sakshi"]}</p>
//       {/* Rendering Function Value */}
//       <p>6 * 6 = {multiply(6, 6)}</p>
//       {/* Rendering Class */}
//       <p className={specialClass}>This is special class</p>
//     </section>
//   );
// };

// export default App;

//------------------------------------------------------------------------------------------------------------------------

// Let's iterate over lists and render them to the DOM.

// Example 1
// const App = () => {
//   const numbers = [1, 2, 3, 4, 5];

//   return (
//     <main>
//       {numbers.map((number) => (
//         <ul key={Math.random()*10}>
//           <li>{number}</li>
//         </ul>
//       ))}
//     </main>
//   );
// };

// Example 2
// const App = () => {
//   const usersInfo = [
//     {
//       username: "Vibhav",
//       email: "vibhav@gmail.com",
//       location: "India",
//     },
//     {
//       username: "Siddhant",
//       email: "siddhant@gmail.com",
//       location: "India",
//     },
//     {
//       username: "Vaibhav",
//       email: "vaibhav@gmail.com",
//       location: "USA",
//     },
//   ];

//   return (
//     <section>
//       {usersInfo.map((user) => (
//         <ul key={Math.random()*10}>
//           <li>{user.username}</li>
//           <li>{user.email}</li>
//           <li>{user.location}</li>
//         </ul>
//       ))}
//     </section>
//   );
// };

// Example 3
// import "./shopping.css";

// const Shopping = ({ items }) => {
//   return (
//     <section>
//       <ol>
//         {items.map((item) => (
//           <li key={Math.random() * 10}>{item}</li>
//         ))}
//       </ol>
//     </section>
//   );
// };

// const App = () => {
//   return (
//     <section>
//       <Shopping items={["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"]}/>
//     </section>
//   );
// };

// export default App;


//------------------------------------------------------------------- props --------------------------------------------------------------------------------

// React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

// const User = (props) => {
//   return (
//     <section>
//       <img src={props.img} alt={props.name} width={200} />
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//       <h4>Hobbies: {props.hobbies} </h4>
//     </section>
//   );
// };

// const App = () => {
//   return (
//     <User
//       img="https://avatars.githubusercontent.com/u/110058521?v=4"
//       name="Vibhav Dubey"
//       age={24}
//       hobbies={["Coding", "Reading", "Sleeping"]}
//     />
//   );
// };

// export default App;


//-------------------------------------------------------------Props Destructuring -----------------------------------------------------------------------

// const User = ({ img, name, age, isMarried, hobbies }) => {
//   return (
//     <section>
//       <img src={img} alt={name} width={200} />
//       <h1>Name: {name}</h1>
//       <h2>Age: {age}</h2>
//       <h4>Hobbies: {hobbies} </h4>
//     </section>
//   );
// };

// const App = () => {
//   return (
//     <User
//       img="https://avatars.githubusercontent.com/u/110058521?v=4"
//       name="Vibhav Dubey"
//       age={24}
//       hobbies={["Coding", "Reading", "Sleeping"]}
//     />
//   );
// };

// export default App;


//-------------------------------------------------------------Props Children -----------------------------------------------------------------------

// 1. Children lets you manipulate and transform the JSX you received as the children prop.
// 2. "Children" name is a special name for the nested JSX in a component.

// const App = () => {
//   return (
//     <User
//       img="https://avatars.githubusercontent.com/u/110058521?v=4"
//       name="Vibhav Dubey"
//       age={24}
//       hobbies={["Coding", "Reading", "Sleeping"]}
//     >
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste
//         molestias numquam, ratione adipisci atque quia et. Voluptas, soluta?
//         Quibusdam accusantium quis saepe. Aliquam facilis quia obcaecati odio
//         quo quos.
//       </p>
//     </User>
//   );
// };

// const User = () => {
//   const { img, name, age, hobbies, children } = this.props;

//   return (
//     <section>
//       <img src={img} alt={name} width={200} />
//       <h1>Name: {name}</h1>
//       <h2>Age: {age}</h2>
//       <h4>Hobbies: {hobbies} </h4>
//       <div>{children}</div>
//     </section>
//   );
// };

// export default App;

//--------------------------------------------------- Conditional Rendering -------------------------------------------------------------------

// ------------------  Example 1 (if) ------------------

// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// const Password = ({ isValid }) => {
//   if (isValid) {
//     return <ValidPassword />;
//   }
//   return <InvalidPassword />;
// };

// const App = () => {
//   return (
//     <section>
//       <Password isValid={true} />
//     </section>
//   );
// };


// ------------------  Example 2 (&&) ------------------

// function Cart() {
//   const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"];

//   return (
//     <>
//       <h1>Cart 🛒</h1>
//       {items.length > 0 && <h2>You have {items.length} items in your Cart.</h2>}

//       <ul>
//         <h4> 👇Products </h4>
//         {items.map((item) => (
//           <li key={Math.random()}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// const App = () => <Cart />;


// ------------------ Example 3 (Ternary Operator) ------------------
// condition ? true : false

// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// const Password = ({ isValid }) =>
//   isValid ? <ValidPassword /> : <InvalidPassword />;

// const App = () => {
//   return (
//     <section>
//       <Password isValid={true} />
//     </section>
//   );
// };

// export default App;


//--------------------------------------------------------------------------- Style -------------------------------------------------------------------

//--------------------------------------- Inline Style-----------------------------
// Adding Style

// 1. use double curly braces {{property: value}}
// you'd also need to use camelCase convention for styling.

// const App = () => {
//   return (
//     <section>
//       <h1 style={{ color: "white", backgroundColor: "teal", padding: "2rem" }}>
//         Inline Style
//       </h1>
//     </section>
//   );
// };

// 2. Seperate Styles and then interpolate it.
// const App = () => {
//   const styles = { color: "white", backgroundColor: "teal", padding: "2rem" };

//   return (
//     <section>
//       <h1 style={styles}>Inline Style</h1>
//     </section>
//   );
// };

// export default App;

//------------------------------------------External CSS ------------------------------------------------------

// import "./index.css";      // we have to import our css file in our components.

// const App = () => {
//   return (
//     <section>
//       <h1>Seperate File For Styling</h1>
//     </section>
//   );
// };

// export default App;


//----------------------------------------------- Events --------------------------------------------------------------------------------------------------

// Example 1
// const Button = () => {
//    //const handleClick = () => console.log("You Clicked Me");
//   const handleClick = () => console.log(Math.round(Math.random() * 10));
//   return <button onClick={handleClick}>Click</button>;
// };

// Example 2
// const Copy = () => {
//   function copyHandler() {
//     console.log("Stop Stealing My Content.");
//   }

//   return (
//     <p onCopy={copyHandler}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
//       voluptatibus libero, eius odit modi doloremque quos magni tempora. Debitis
//       laborum exercitationem perferendis. Veritatis fuga, quod quasi accusamus
//       eveniet voluptates suscipit.
//     </p>
//   );
// };

// Example 3
// const Move = () => {
//   function moveHandler() {
//     alert("Mouse Move Event Fired");
//     console.log("Mouse Move Event Fired");
//   }

//   return (
//     <p onMouseOver={moveHandler}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
//       voluptatibus libero, eius odit modi doloremque quos magni tempora. Debitis
//       laborum exercitationem perferendis. Veritatis fuga, quod quasi accusamus
//       eveniet voluptates suscipit.
//     </p>
//   );
// };

// const App = () => {
//   // return <Button />;
//   // return <Copy />;
//   return <Move />;
// };

// export default App;