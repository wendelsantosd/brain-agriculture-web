import { useContext } from "react"
import { BoardValuesFarm } from "./components/BoardValuesFarm/BoardValuesFarm"
import { PizzasCharts } from "./components/PizzasCharts/PizzasCharts"
import { CreateBrainAgricultureContext } from "../../context/contex"

export const Dashboard = (): React.ReactElement => {
  const { dashboardValues } = useContext(CreateBrainAgricultureContext);

  return <>
    <BoardValuesFarm 
      totalFarms={dashboardValues?.totalFarms}
      totalArea={dashboardValues?.totalArea}
    />

    <div className="mt-3 w-100 flex justify-between items-center">
      <PizzasCharts />
      <PizzasCharts />
      <PizzasCharts />
    </div>
  </>
}