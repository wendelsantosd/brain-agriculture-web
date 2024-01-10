import React from "react"
import { BrainAgricultureProviderContext } from "./context/brainAgricultureProvider"
import { ReactRoutes } from "./routes"

export const App = (): React.ReactElement => {

  return <BrainAgricultureProviderContext>
      <ReactRoutes />
  </BrainAgricultureProviderContext>

}