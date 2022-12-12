import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login, Repositories, Profile } from "../screens";
import { PublicRoute } from "./publicRoute";
import { LOGIN, PROFILE, REPOSITORIES, SIGN_UP, STARRED_REPOSITORIES } from "./paths";
import { PrivateRoute } from "./privateRoute";
import { Navbar } from "../components";


export const AppRouter = (): React.ReactElement => {
  const [user, setUser] = useState<any>(null);

  return (
    <Router>
      <div className="w-full h-full">
        <Navbar isUser={!!user} setUser={setUser} />
        <Routes>
          <Route
            path={`${LOGIN}/*`}
            element={
              <PublicRoute isUser={!!user}>
                <Routes>
                  <Route path={"/"} element={<Login setUser={setUser} />} />
                  <Route path="*" element={<Navigate to={LOGIN} />} />
                </Routes>
              </PublicRoute>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute isUser={!!user}>
                <Routes>
                  <Route
                    path={REPOSITORIES}
                    element={<Repositories user={user?.user_metadata?.user_name} />}
                  />
                  <Route
                    path={STARRED_REPOSITORIES}
                    element={<Repositories user={user?.user_metadata?.user_name} />}
                  />
                  <Route
                    path={PROFILE}
                    element={<Profile user={user}/>}
                  />
                  <Route path="*" element={<Navigate to={REPOSITORIES} />} />
                </Routes>
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
