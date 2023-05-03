import React from "react"
import ReactDOM from "react-dom/client"
// ReactDOM.render(<h1 className="header">Hello,Everyone</h1>, document.getElementById("root"));

// ReactDOM.render(
//   <ul>
//     <li>Zainab Hasan</li>
//     <li>Aisha Hasan</li>
//   </ul>,
//   document.querySelector(".my-list")
// );

// function MainContent() {
//     return (
//         <h1>I'm leaning React</h1>
//     )
// }

// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>, document.getElementById("root")
// );

// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element);

//JSX

// const page =
//     (
//       <div>
//         <h1>This a JSX</h1>
//         <p>This is a paragraph</p>
//      </div>
//     )
//     console.log(page);
// ReactDOM.render(
//     page, document.getElementById("root")
// )


// const navBar = (
//     <nav>
//         <h1>I-Slot Trading Store</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navBar,document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root.render(nabBa""))

const ReactFunFact = (
  <div>
    <img src="./react-logo.png" width="40px" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan</li>
    </ul>
  </div>
);

ReactDOM.render(ReactFunFact, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

const ChoiceOfReact = <h1>Hi</h1>;

ReactDOM.render(ChoiceOfReact(), document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width="40px " />
        </nav>
      </header>

      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>

      <footer> © 2023 Ogundele development. All rights reserved </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));