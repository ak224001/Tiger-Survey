// import React, { useEffect, useState } from "react";
// // import '../styles/App.css';
// import "./App.css";

// export default function App() {
//   const [data, setdata] = useState();
//   const [display, setdisplay] = useState("");
//   // api
//   useEffect(() => {
//     getUser();
//   }, []);

//   const handleClickAge = () => {
//     setdisplay(data?.dob?.age);
//   };

//   const handleClickEmail = () => {
//     setdisplay(data.email);
//   };

//   const handleClickPhone = () => {
//     setdisplay(data.phone);
//   };

//   const getUser = () => {
//     fetch("https://randomuser.me/api/")
//       .then((response) => response.json())
//       .then((data) => setdata(data?.results[0]));
//   };

//   return (
//     <div>
//       <div>
//         <img src={data?.picture?.large} alt="Profile" />
//       </div>
//       <span className="fullName">
//         {data && data?.name?.first + " "}
//         {data && data?.name?.last}
//       </span>
//       <div className="buttons">
//         <button data-attr="age" onClick={handleClickAge}>
//           Age
//         </button>
//         <button data-attr="email" onClick={handleClickEmail}>
//           Email
//         </button>
//         <button data-attr="phone" onClick={handleClickPhone}>
//           Phone
//         </button>
//       </div>
//       <section>
//         <h1>additional info</h1>
//         <span>{display}</span>
//       </section>
//       <div>
//         <button id="getUser" onClick={getUser} style={{ marginTop: "10px" }}>
//           Get User
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import "./App.css";
// function App() {
//   const [data, setdata] = useState([]);
//   const [displayData, setDisplayData] = useState("");

//   useEffect(() => {
//     fetch("https://randomuser.me/api/")
//       .then((response) => response.json())
//       .then((data) => setdata(data.results && data.results[0]));
//   }, []);

//   const getNewUser = () => {
//     fetch("https://randomuser.me/api/")
//       .then((response) => response.json())
//       .then((data) => setdata(data.results && data.results[0]));
//   };
//   return (
//     <div id="main" className="App">
//       <div className="profile">
//         <img src={data?.picture?.large} alt="" />
//         <span className="name">
//           {data?.name?.first + " "} {data?.name?.last}
//         </span>
//       </div>
//       <div className="buttons">
//         <button id="age" onClick={() => setDisplayData(data?.dob?.age)}>
//           Age
//         </button>
//         <button id="email" onClick={() => setDisplayData(data?.email)}>
//           Email
//         </button>
//         <button id="phone" onClick={() => setDisplayData(data?.phone)}>
//           Phone
//         </button>
//       </div>
//       <section>
//         <h1>Additinal Info</h1>
//         <span>{displayData}</span>
//       </section>
//       <div className="newUser">
//         <button id="getUser" onClick={getNewUser}>
//           Get New User
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [user, setUser] = useState({});
//   const [display, setDisplay] = useState(null);

//   useEffect(() => {
//     getUser();
//   }, []);

//   const getUser = async () => {
//     const response = await fetch("https://randomuser.me/api/");
//     const data = await response.json();
//     setUser(data.results[0]);
//   };

//   const handleButtonClick = (event) => {
//     setDisplay(event.target.getAttribute("data-attr"));
//   };

//   return (
//     <div>
//       <img src={user.picture ? user.picture.large : ""} alt="User" />
//       <p>{`${user.name ? user.name.first : ""} ${
//         user.name ? user.name.last : ""
//       }`}</p>
//       <div>
//         <button data-attr="age" onClick={handleButtonClick}>
//           Age
//         </button>
//         <button data-attr="email" onClick={handleButtonClick}>
//           Email
//         </button>
//         <button data-attr="phone" onClick={handleButtonClick}>
//           Phone
//         </button>
//       </div>
//       {display === "age" && <p>{user.dob ? user.dob.age : ""}</p>}
//       {display === "email" && <p>{user.email ? user.email : ""}</p>}
//       {display === "phone" && <p>{user.phone ? user.phone : ""}</p>}
//       <button id="getUser" onClick={getUser}>
//         Get User
//       </button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import "./App.css";
// function ChangeTextColor() {
//   const [pClass, setpClass] = useState("initialClass");
//   const changeColor = () => {
//     if (pClass == "initialClass") {
//       setpClass("AfterButtonClickClass");
//     } else {
//       setpClass("initialClass");
//     }
//   };

//   console.log(pClass);

//   return (
//     <div>
//       <p className={pClass}>Newton School</p>
//       <button onClick={changeColor}>Change Style</button>
//     </div>
//   );
// }

// export default ChangeTextColor;

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// const Home = () => {
//   return <h1>Home</h1>;
// };

// const Blogs = () => {
//   return <h1>Blogs</h1>;
// };

// const Contact = () => {
//   return <h1>Contact</h1>;
// };

// const NoPage = () => {};

// function App() {
//   return (
//     <div>
//       <h1>This is the home page</h1>
//       <Link to="blogs">Click to view our about page</Link>
//       <Link to="contact">Click to view our contact page</Link>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="blogs" element={<Blogs />} />
//         <Route path="contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App2.css";
// import Table from "./components/Table";

const App = () => {
  const [page, setPage] = useState("home");

  const Home = () => {
    return (
      <>
        <button onClick={() => setPage("Create Survey")}>Take Survey</button>
        <br />
        <br />
        <button onClick={() => setPage("Create Survey")}>Create Survey</button>
      </>
    );
  };

  const CreateSurvey = () => {
    return (
      <>
        <select placeholder="Select Question Type">
          <option value="BMW"> BMW</option>
          <option value="Mercedes"> Mercedes</option>
        </select>
      </>
    );
  };

  return (
    <div className="App">
      <h1>Survey Tiger</h1>
      {page == "home" ? <Home /> : null}
      {page == "Create Survey" ? <CreateSurvey /> : null}
    </div>
  );
};

export default App;
