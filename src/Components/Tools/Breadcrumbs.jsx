import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-costum-blue hover:text-hover-active font-bold my-4 max-sm:text-[12px]">
      <ul className="flex cursor-pointer">
        {pathnames.map((value, index) => {
          const name = value.toUpperCase();

          return (
            <li key={`${index}-${name}`}>
              <span className={`mr-2`}>
                <Link to={`/${pathnames.slice(0, index + 1).join("/")}`}>
                  {name}
                </Link>
                {index < pathnames.length - 1 && " / "}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
