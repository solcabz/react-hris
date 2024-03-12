import { useLocation, Link } from "react-router-dom";
import { CaretDoubleRight } from "@phosphor-icons/react";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="font-bold my-4 max-sm:text-[12px]">
      <ul className="flex cursor-pointer">
        {pathnames.map((value, index) => {
          const name = value.toUpperCase();

          return (
            <li key={`${index}-${name}`}>
              <span className={`flex justify-center items-center mr-2`}>
                <Link to={`/${pathnames.slice(0, index + 1).join("/")}`}>
                  {name}
                </Link>
                {index < pathnames.length - 1 && (
                  <CaretDoubleRight size={18} className="ml-2" />
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
