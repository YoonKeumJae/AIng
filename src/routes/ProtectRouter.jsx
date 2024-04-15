import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";

const ProtectRouter = ({ children }) => {
  const user = auth.currentUser;
  if (!user) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};

export default ProtectRouter;
