import { useEffect, useState, useMemo, useRef } from "react";
import { Table } from "antd";
import { useLocation } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClear } from "react-icons/ai";
import dayjs from "dayjs";
import { getRepositories, getStarredRepositories, Repository } from "../../services/repositories";
import { RepositoriesAccessors, columns } from "./columns";
import { Error, InputSearch } from "../../components";
import { REPOSITORIES } from "../../routes/paths";
import { AxiosError } from "axios";

type RepositoriesProps = {
  user: string;
};

type ErrorReponse = {
  isError: boolean;
  message: {
    message?: string;
  };
};
export const Repositories = ({
  user,
}: RepositoriesProps): React.ReactElement => {
  const [repositories, setRepositories] = useState<Array<Repository>>([]);
  const [copyRepositories, setCopyRepositories] = useState<Array<Repository>>(
    []
  );
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorReponse>({
    isError: false,
    message: {},
  });
  const location = useLocation();
  const debounceRef = useRef<any>();

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const tableData = copyRepositories?.map<RepositoriesAccessors>((item) => ({
    key: item.node.id,
    description: item.node.description ? item.node.description : "N/A",
    createAt: dayjs(item.node.createdAt).format("DD MMM, YYYY"),
    isPrivate: item.node.isPrivate,
    name: item.node.name,
    url: item.node.url,
  }));

  const table = useMemo(
    () => (
      <Table
        columns={columns}
        dataSource={tableData}
        scroll={{ x: 1000 }}
        loading={isLoading}
      />
    ),
    [tableData]
  );

  const handleClearFilter = () => {
    setSearch("");
    setCopyRepositories(repositories);
  };

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      location.pathname === REPOSITORIES
        ? getRepositories(user)
            .then((resp) => {
              const data = resp.data as Array<Repository>;
              setRepositories(data);
              setCopyRepositories(data);
            })
            .catch((e: AxiosError) =>
              setError({ isError: true, message: e.response?.data ?? "" })
            )
            .finally(() => setIsLoading(false))
        : getStarredRepositories(user)
            .then((resp) => {
              const data = resp.data as Array<Repository>;
              setRepositories(data);
              setCopyRepositories(data);
            })
            .catch((e: AxiosError) =>
              setError({ isError: true, message: e.response?.data ?? "" })
            )
            .finally(() => setIsLoading(false));
    }
  }, [location.pathname]);

  useEffect(() => {
    if (search) {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        const filterRepository = repositories.filter((repository) =>
          repository.node.name.toUpperCase().includes(search.toUpperCase())
        );
        setCopyRepositories(filterRepository);
      }, 500);
    }
    if (!search) setCopyRepositories(repositories);
  }, [search]);

  if (error.isError) {

    return <Error error={error.message?.message ?? ''}/>;
  }

  return (
    <div className="w-11/12 lg:w-9/12 m-auto mt-10 ">
      <div>
        <p className="font-semibold text-3xl text-dark_blue  ">
          Repositorios {location.pathname === REPOSITORIES ? "" : "Favoritos"}
        </p>
        <hr className="w-[7%] lg:w-[5%] xl:w-[3%] mt-5 " />
      </div>
      <div className="w-full grid grid-cols-12 items-end md:gap-3 mt-10 mb-5 ">
        <div className="col-span-12 my-4 md:col-span-6">
          <InputSearch
            Icon={<AiOutlineSearch />}
            name="search"
            value={search}
            placeholder="Buscar por nombre"
            onChange={handleFilter}
          />
        </div>
        <div className="col-span-1 my-4">
          <button
            onClick={handleClearFilter}
            className=" text-dark_blue border-2 border-gray-400  font-bold rounded-lg text-sm p-2 mr-2"
          >
            <AiOutlineClear size={"20"} />
          </button>
        </div>
      </div>
      {table}
    </div>
  );
};
