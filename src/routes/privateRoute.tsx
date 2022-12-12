import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: React.ReactElement;
  isUser: boolean;
};

export const PrivateRoute = ({
  children,
  isUser,
}: PrivateRouteProps): React.ReactElement => {
  return isUser ? children : <Navigate to="/login" />;
};
