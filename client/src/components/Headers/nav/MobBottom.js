import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { HiMenuAlt2, HiShoppingCart } from "react-icons/hi";
import { BsFillBoxFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CustomDrawer from "../../custom/Drawer/CustomDrawer";
const MobBottom = () => {
  const [active2, setActive2] = useState("");

  const [toggle, settoggle] = useState(false);
  const [loc, setLoc] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    setLoc(path);
    settoggle(false);
  }, [toggle]);

  const data = [
    {
      icon: <AiFillHome />,
      name: "Home",
      path: "/",
    },
    {
      icon: <BsFillBoxFill />,
      name: "Products",
      path: "/products",
    },
    {
      icon: <HiShoppingCart />,
      name: "Cart",
      path: "/Cart",
    },
    {
      icon: <HiMenuAlt2 />,
      name: "Options",
      path: "",
    },
  ];

  const navigate = useNavigate();

  const HandleClick = (activePath) => {
    settoggle(true);
    navigate(activePath);
  };

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  
  return (
    <>
    <CustomDrawer isOpen={show} setIsOpen={handleClose} />
      <div class="navigation">
        <ul>
          {data.map((items, idx) => {
            return (
              <li
                onClick={items.name === "Options" ? ()=> setShow(true) : () => HandleClick(items.path)  }
                key={idx}
                className={`menu_item ${loc === items.path ? "active2" : ""}`}
              >
                <a>
                  <span className="icon">{items.icon}</span>
                  <span className="text">{items.name}</span>
                </a>
              </li>
            );
          })}
          <div className="indicator"></div>
        </ul>
      </div>
    </>
  );
};

export default MobBottom;
