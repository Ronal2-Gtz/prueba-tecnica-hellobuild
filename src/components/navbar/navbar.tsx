import { Link } from "react-router-dom";
import { supabase } from "../../client";
import {
  PROFILE,
  REPOSITORIES,
  STARRED_REPOSITORIES,
} from "../../routes/paths";

type NavbarProps = {
  setUser: React.Dispatch<any>;
  isUser: boolean;
};

const url = `https://github.com/signup?source=login`;

export const Navbar = ({
  isUser,
  setUser,
}: NavbarProps): React.ReactElement => {
  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-md min-h-[16px] ">
      <div className="flex md:flex-wrap justify-between items-center w-full mx-auto max-w-screen-xl">
        <Link to={"/"} className="flex items-center">
          <span className="text-dark_blue self-center text-2xl font-bold whitespace-nowrap ">
            Prueba Tecnica
          </span>
        </Link>

        <div className="flex flex-col md:flex-row md:items-center lg:order-2">
          {isUser ? (
            <>
              <Link
                to={REPOSITORIES}
                className=" focus:ring-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Repositorios
              </Link>
              <Link
                to={STARRED_REPOSITORIES}
                className=" focus:ring-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Repositorios favoritos
              </Link>
              <Link
                to={PROFILE}
                className=" focus:ring-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Perfil
              </Link>
              <button
                onClick={signOut}
                className=" text-dark_blue  bg-primary hover:bg-green_500 font-bold rounded-lg text-sm py-3 px-9 mr-2"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => window.open(url, "_blank")}
                className=" text-dark_blue  bg-primary hover:bg-green_500 font-bold rounded-lg text-sm py-3 px-9 mr-2"
              >
                Crear cuenta nueva
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
