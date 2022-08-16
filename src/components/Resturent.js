import "./Resturent.css";
import MenuApi from "./MenuApi";
import { useState } from "react";
import MenuCard from "./MenuCard";
import MenuNavbar from "./MenuNavbar";

const uniqueList = [
  ...new Set(
    MenuApi.map((curElem) => {
      return curElem.category;
    })
  ),"All"
];
const Resturent = () => {
  const [menuData, setMenuData] = useState(MenuApi);
  const menuList = uniqueList;

  const filterItem = (category) => {

    if (category === "All"){
      return setMenuData(MenuApi);
    }
    const updatedList = MenuApi.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <MenuNavbar menuList={menuList} filterItem={filterItem}/>
      <MenuCard data={menuData} />
    </>
  );
};

export default Resturent;
