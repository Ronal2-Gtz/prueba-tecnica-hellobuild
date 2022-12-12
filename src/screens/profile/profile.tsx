import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { REPOSITORIES } from "../../routes/paths";

type ProfileProps = {
  user: {
    phone: string;
    user_metadata: {
      avatar_url: string;
      email: string;
      full_name: string;
      user_name: string;
      sub: string;
    };
  };
};

export const Profile = ({ user }: ProfileProps): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <div className="w-11/12 lg:w-9/12 m-auto mt-10 ">
      <div>
        <p className="font-semibold text-3xl text-dark_blue">Perfil</p>
        <hr className="w-[7%] lg:w-[5%] xl:w-[3%] mt-5 " />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <img
          src={user.user_metadata.avatar_url}
          className="rounded-full border-[3px] border-primary p-3 my-10 w-3/12  "
        />
        <div className="flex items-center gap-x-5  w-10/12">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Correo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none  disabled:bg-white"
              type="text"
              disabled
              value={user.user_metadata.email}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-5  w-10/12">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none  disabled:bg-white"
              type="text"
              disabled
              value={user.user_metadata.user_name}
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              id
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none  disabled:bg-white"
              type="text"
              disabled
              value={user.user_metadata.sub}
            />
          </div>
        </div>
        <button
          onClick={() => navigate(REPOSITORIES)}
          className="my-10 py-2 px-4 rounded inline-flex items-center bg-primary text-dark_blue font-bold"
        >
          <BiArrowBack />
          <span className="ml-4">Regresar</span>
        </button>
      </div>
    </div>
  );
};
