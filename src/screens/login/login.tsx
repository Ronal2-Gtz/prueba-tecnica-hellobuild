import { useEffect } from "react";
import { supabase } from "../../client";
import githubIcon from '../../assets/githubIcon.png';

type LoginProps = {
  setUser: React.Dispatch<any>;
};

const url = `https://github.com/signup?source=login`

export const Login = ({ setUser }: LoginProps): React.ReactElement => {
  const checkUser = async (): Promise<void> => {
    const { data } = await supabase.auth.getUser();
    setUser(data.user);
  };

  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const handleNavigateToSignUp = () => window.open(url, "_blank")

  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", () => checkUser());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-4/5">
      <div className="flex flex-col gap-y-10 border-2 px-7 py-14 md:px-32 rounded-md shadow-lg">
        <div className="text-center">
          <p className="font-semibold text-3xl">Bienvenido</p>
          <p className="text-gray-400 text-base font-medium">Acceda con github</p>
          <button
            onClick={signInWithGithub}
            className=" font-semibold my-10 py-2 px-4 rounded inline-flex items-center border-2"
          >
            <span>Iniciar sesión con Github</span>
            <img className="w-7 h-7 ml-2" src={githubIcon} alt="" />
          </button>

          <p className="text-gray-400 text-base font-medium">Aun no tienes cuenta? <button onClick={handleNavigateToSignUp} className="underline">registrate</button></p>
        </div>
      </div>
    </div>
  );
};
