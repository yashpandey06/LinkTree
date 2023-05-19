import { useState } from "react";
import Header from "./components/Header";
import Links from "./components/Links";

const App = () => {
  const [links] = useState([
    {
      id: 1,
      img: "hello",
      link:"https://github.com/yashpandey06",
      name: "Github",
    },
    {
      id: 2,
      img: "hello",
      link:"https://twitter.com/Yashpandey7052?t=LOQ6dVSfuTHG6RWUkDpOLA&s=08",
      name: "Twitter",
    },
    {
      id: 3,
      img: "hello",
      link:"https://www.linkedin.com/in/yash-pandey-53aa3a21b",
      name: "Linkedln",
    },
    {
      id: 4,
      img: "hello",
      link:"https://instagram.com/__yash_pandey__?igshid=MzNlNGNkZWQ4Mg==",
      name: "Instagram",
    },
  ]);
  return (
    <div className=" h-screen w-screen text-white bg-gradient-to-b from-gray-900 via-black to-gray-900 ">
      <Header />

      <Links key={links.id} links={links} />
    </div>
  );
};

export default App;
