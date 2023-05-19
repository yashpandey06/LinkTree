import { useState } from "react";
import Header from "./components/Header";
import Links from "./components/Links";
import { BsTwitter } from "react-icons/bs";
import {RiLinkedinFill} from "react-icons/Ri"
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Footer from "./components/Footer";


const App = () => {
  const [links] = useState([
    {
      id: 1,
      img: <BsGithub className="" size={25} />,
      link:"https://github.com/yashpandey06",
      name: "Github",
    },
    {
      id: 2,
      img:  <BsTwitter className="" size={25} />,
      link:"https://twitter.com/Yashpandey7052?t=LOQ6dVSfuTHG6RWUkDpOLA&s=08",
      name: "Twitter",
    },
    {
      id: 3,
      img:  <RiLinkedinFill className="" size={25} />,
      link:"https://www.linkedin.com/in/yash-pandey-53aa3a21b",
      name: "Linkedln",
    },
    {
      id: 4,
      img: <BsInstagram  size={25}/>,
      link:"https://instagram.com/__yash_pandey__?igshid=MzNlNGNkZWQ4Mg==",
      name: "Instagram",
    },
  ]);
  return (
    <div className=" h-screen w-screen text-white bg-gradient-to-b from-gray-900 via-black to-gray-900 ">
      <Header />

      <Links key={links.id} links={links} />
      <Footer />
    </div>
  );
};

export default App;
