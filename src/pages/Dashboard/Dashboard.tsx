import { useContext } from "react"
import { BoardValuesFarm } from "./components/BoardValuesFarm/BoardValuesFarm"
import { PizzasCharts } from "./components/PizzasCharts/PizzasCharts"
import { CreateBrainAgricultureContext } from "../../context/contex"
import { AreaEnum, CropEnum } from "./interface"

export const Dashboard = (): React.ReactElement => {
  const { dashboardValues } = useContext(CreateBrainAgricultureContext);
  const totalPerState = dashboardValues?.totalPerState;
  const totalPerCulture = dashboardValues?.totalPerCulture;
  const totalAreaAgriculturalAndVegetation = dashboardValues?.totalAreaAgriculturalAndVegetation;

  const dataPerState = totalPerState && Object.entries(totalPerState).map(([name, value]) => ({ name, value }));
  const dataPerCulture = totalPerCulture && Object.entries(totalPerCulture).map(([name, value]) => ({ name: CropEnum[name as keyof typeof CropEnum], value }));
  const dataPerAreaAgriculturalAndVegetation = totalAreaAgriculturalAndVegetation && Object.entries(totalAreaAgriculturalAndVegetation).map(([name, value]) => ({ name: AreaEnum[name as keyof typeof AreaEnum], value }));

  return <>
    <BoardValuesFarm
      totalFarms={dashboardValues?.totalFarms}
      totalArea={dashboardValues?.totalArea}
    />

    <div className="mt-3 w-100 flex justify-between items-center">
      <PizzasCharts
        data={dataPerState}
        title="Por Estado"
      />

      <PizzasCharts
        data={dataPerCulture}
        title="Por Cultura"
      />

      <PizzasCharts
        data={dataPerAreaAgriculturalAndVegetation}
        title="Por Área de Agricultura e Vegetação"
      />
    </div>
  </>
}