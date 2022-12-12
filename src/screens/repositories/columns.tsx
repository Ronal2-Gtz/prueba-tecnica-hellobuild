import { Tooltip } from "antd";
import { AiOutlineEye } from "react-icons/ai";
import { TableColumnsType } from "antd";

type RepositoriesAccessors = {
  key: React.Key;
  name: string;
  description: string;
  createAt: string;
  isPrivate: boolean;
  url: string;
};

export const columns: TableColumnsType<RepositoriesAccessors> = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Descripcion",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Estado",
    dataIndex: "isPrivate",
    key: "isPrivate",
    render: (isPrivate) => (
      <>
        {
          <span className={`${isPrivate ? 'bg-red-500' : 'bg-primary'} text-white px-2 py-1 rounded-sm`}>
            {isPrivate ? "Privado" : "Publico"}
          </span>
        }
      </>
    ),
  },
  {
    title: "Fecha de creacion",
    dataIndex: "createAt",
    key: "createAt",
  },
  {
    title: "Acciones",
    key: "action",
    render: (_, { url }) => (
      <Tooltip title={"Ver"} placement="top">
        <button onClick={() => window.open(url, "_blank")}>
          <AiOutlineEye size={25} color="#63D09D" />
        </button>
      </Tooltip>
    ),
  },
];

export type { RepositoriesAccessors };
