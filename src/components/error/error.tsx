type ErrorProps = {
    error: string
}

export const Error = ({error}: ErrorProps): React.ReactElement => {
  return (
    <main className=" h-4/5 w-full flex flex-col justify-center items-center ">
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-dark_blue tracking-widest">
          404
        </h1>
        <div className="bg-primary px-2 text-sm rounded rotate-12 absolute top-20 left-[70px]">
          Page Not Found
        </div>
      </div>
      <p className="text-2xl font-semibold md:text-3xl">
        Oops.. parece que tenemos un error
      </p>
      <p className="mt-4 mb-8 dark:text-gray-400">
        {error === 'Bad credentials' ? 'Error en el clientID de Github, porfavor intente cambiarlo' : 'Estamos trabajando para solucionarlo'}
      </p>

      {/* <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-primary border border-current">
            <button>Regresar</button>
          </span>
        </a>
      </button> */}
    </main>
  );
};
