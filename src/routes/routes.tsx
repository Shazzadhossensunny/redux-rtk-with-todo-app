import App from "@/App";
import { Tasks } from "@/pages/tasks";
import { Users } from "@/pages/users";

import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // when default route show in home then use index true;
        element: <Tasks />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

export default routes;
