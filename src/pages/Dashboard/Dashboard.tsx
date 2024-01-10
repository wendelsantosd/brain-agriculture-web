import { BoardValuesFarm } from "./components/BoardValuesFarm/BoardValuesFarm"
import { PizzasCharts } from "./components/PizzasCharts/PizzasCharts"

export const Dashboard = (): React.ReactElement => {
  return <>
    <BoardValuesFarm />

    <div className="mt-3 w-100 flex justify-between items-center">
      <PizzasCharts />
      <PizzasCharts />
      <PizzasCharts />
    </div>
  </>
}