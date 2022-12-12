import { Navigate } from "react-router-dom";
import { REPOSITORIES } from "./paths";

type PrivateRouteProps = {
  children: React.ReactElement;
  isUser: boolean;
};

export const PublicRoute = ({
  children,
  isUser
}: PrivateRouteProps): React.ReactElement => {
  return !isUser ? children : <Navigate to={REPOSITORIES} />;
};
