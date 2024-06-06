import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main";
import Home from "../../pages/Home";
import Stats from "../../pages/Stats";
import PointsTable from "../../pages/PointsTable";
import MatchSchedule from "../../pages/MatchSchedule";
import LiveScore from "../../pages/LiveScore";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Stats></Stats>,
      },
      {
        path: "/pointstable",
        element: <PointsTable></PointsTable>,
      },
      {
        path: "/matchschedule",
        element: <MatchSchedule></MatchSchedule>,
      },
      {
        path: "/livescore",
        element: <LiveScore></LiveScore>,
      },
    ],
  },
]);