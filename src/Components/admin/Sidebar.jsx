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
        open ? "w-72 h-screen" : "w-24"
      } duration-300 p-6 pt-8 bg-costum-blue relative flex flex-col justify-between max-sm:p-2`}
    >
      <div>
        <img
          src={Left}
          alt="./src/assets/chevrons-left.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-2 border-white bg-costum-blue rounded-lg duration-300 ${
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
          <div
            className={`text-white origin-left font-medium duration-300 ${
              !open && "scale-0"
            }`}
          >
            <h1>Sol cabreza</h1>
            <span>Frontend Developer</span>
          </div>
        </div>
        <div className="text-white pt-6 ">
          <Link
            to=""
            className="flex gap-x-4 items-center cursor-pointer p-3 shadow shadow-gray-900 hover:bg-blue-950 rounded-xl duration-200"
          >
            <span className="text-2xl">
              <Chalkboard />
            </span>
            <span className={`${!open && "scale-0, hidden"} text-sm`}>
              Admin Dashboard
            </span>
          </Link>
        </div>

        <div className={``}>
          <ul className={`pt-1`}>
            {Menus.map((menu, index) => (
              <React.Fragment key={index}>
                <li
                  className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-3 hover:bg-blue-950 rounded-xl mt-2 max-sm:text-sm[12px],gap-[15px]`}
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
                        className={`text-white text-sm flex items-center gap-x-4 cursor-pointer  hover:bg-blue-950 rounded-xl mt-2`}
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
          <span className="text-sm block  text-white max-sm:text-[12px]">
            {date.toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="text-sm block text-white max-sm:text-[12px]">
            {date.toLocaleTimeString()}
          </span>
        </div>
        <div className="p-2.5 bg-white h-[36px] w-[36px] align-middle justify-center rounded-md cursor-pointer">
          <Heart className="fill-costum-blue " />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
