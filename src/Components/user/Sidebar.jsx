import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoHorizontal from "../../assets/LogoHorizontal.png";
import Left from "../../assets/chevrons-left.png";
import {
  AddressBook,
  NewspaperClipping,
  Gear,
  ListPlus,
  Heart,
  Chalkboard,
  CaretDown,
} from "@phosphor-icons/react";

function Sidebar() {
  const [open, setOpen] = useState(true);

  const Menus = [
    {
      title: "Manage",
      submenu: true,
      submenuItems: [
        {
          title: "Persona Request",
          link: "manage/personarequest",
        },
        {
          title: "Daily Time Record",
          link: "manage/dailytimerecord",
        },
        { title: "Job Info", link: "manage/jobinfo" },
      ],
    },
    {
      title: "Reports",
      icon: <NewspaperClipping />,
      submenu: true,
      submenuItems: [
        { title: "201 Files", link: "reports/201files" },
        { title: "Retention Report", link: "reports/retentionreport" },
      ],
    },
    {
      title: "Database Tables",
      icon: <ListPlus />,
      submenu: true,
      submenuItems: [
        { title: "Profile", link: "databasetable/profile" },
        { title: "Management", link: "databasetable/management" },
        { title: "Upkeep", link: "databasetable/upkeep" },
      ],
    },
    {
      title: "System Settings",
      icon: <Gear />,
      submenu: true,
      submenuItems: [
        { title: "System Access", link: "settings/systemaccess" },
        { title: "User List", link: "settings/userlist" },
      ],
    },
  ];

  const [submenuOpen, setSubmenuOpen] = useState(Menus.map(() => false)); // Initialize with false for each submenu

  const toggleSubmenu = (index) => {
    const newSubmenuOpen = [...submenuOpen];

    // Close other open submenus
    for (let i = 0; i < newSubmenuOpen.length; i++) {
      if (i !== index) {
        newSubmenuOpen[i] = false;
      }
    }

    // Toggle the state for the current submenu
    newSubmenuOpen[index] = !newSubmenuOpen[index];
    setSubmenuOpen(newSubmenuOpen);
  };

  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div
      className={`${
        open ? "w-72" : "w-24"
      } duration-300 p-6 pt-8 bg-blue-500 h-screen relative flex flex-col justify-between`}
    >
      <div>
        <img
          src={Left}
          alt="./src/assets/chevrons-left.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-2 border-white bg-blue-500 rounded-lg duration-300 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="cursor-pointer flex gap-x-4 items-center">
          <img
            src={LogoHorizontal}
            className={` cursor-pointer transition duration-500`}
            alt="Logo"
          />
          <div>
            <h1
              className={`text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              HRIS
            </h1>
          </div>
        </div>
        <div className="text-white pt-6 ">
          <Link
            to=""
            className="flex gap-x-4 items-center cursor-pointer p-3 shadow shadow-gray-900 hover:bg-blue-500 rounded-xl duration-200"
          >
            <span className="text-2xl">
              <Chalkboard />
            </span>
            <span className={`${!open && "scale-0, hidden"} `}>
              Admin Dashboard
            </span>
          </Link>
        </div>

        <div className={``}>
          <ul className={`pt-1`}>
            {Menus.map((menu, index) => (
              <React.Fragment key={index}>
                <li
                  className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-3 hover:bg-blue-500 rounded-xl mt-2 `}
                  onClick={() => {
                    if (menu.submenu) {
                      toggleSubmenu(index);
                    } else {
                      // Handle the click for non-submenu items (if needed)
                    }
                  }}
                >
                  <span className="text-2xl block float-left mr-4">
                    {menu.icon ? menu.icon : <AddressBook />}
                  </span>
                  <span
                    className={`text-base font-medium origin-left flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    <Link to={menu.link}>{menu.title}</Link>
                  </span>
                  {menu.submenu && open && (
                    <CaretDown
                      className={` ${
                        submenuOpen[index] && "duration-300 rotate-180"
                      }`}
                      onClick={() => toggleSubmenu(index)}
                    />
                  )}
                </li>
                {menu.submenu && open && submenuOpen[index] && (
                  <ul key={`${index}-submenu`}>
                    {menu.submenuItems.map((submenuItem, subIndex) => (
                      <li
                        key={`${index}-${subIndex}`}
                        className={`text-white text-sm flex items-center gap-x-4 cursor-pointer  hover:bg-blue-500 rounded-xl mt-2`}
                      >
                        <Link to={submenuItem.link} className="p-2 px-6 w-full">
                          {submenuItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>

      {/* date Time on footer */}
      <div
        className={`border-t flex py-3  ${
          !open && "justify-center" ? "justify-center" : "justify-between"
        }`}
      >
        <div
          className={`flex flex-col ${!open && "scale-0, hidden"} duration-300`}
        >
          <span className="text-m block  text-white">
            {date.toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="text-m block text-white">
            {date.toLocaleTimeString()}
          </span>
        </div>
        <div className="p-4 bg-white rounded-md cursor-pointer">
          <Heart className="fill-blue-500 " />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
