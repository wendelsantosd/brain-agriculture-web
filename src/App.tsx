import React from "react";
import { BrainAgricultureProviderContext } from "./context/brainAgricultureProvider";
import { ReactRoutes } from "./routes";
import 'react-toastify/dist/ReactToastify.css';

export const App = (): React.ReactElement => {

  return <BrainAgricultureProviderContext>
      <ReactRoutes />
  </BrainAgricultureProviderContext>

}