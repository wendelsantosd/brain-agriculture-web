import { IoGolf, IoPieChart } from "react-icons/io5"
import { BoardValuesFarmProps, BoxWrapperProps } from "./interface"

export const BoardValuesFarm = ({ totalArea, totalFarms }: BoardValuesFarmProps): React.ReactElement => {

  return <div className="flex gap-4">
    <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
        <IoGolf className="text-2xl text-white" />
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Quantidade total de fazendas</span>
        <div className="flex items-center">
          <strong className="text-xl text-gray-700 font-semibold">{totalFarms ?? 0}</strong>
          <span className="text-sm text-gray-500 pl-2">unidade(s)</span>
        </div>
      </div>
    </BoxWrapper>
    <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
        <IoPieChart className="text-2xl text-white" />
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Área total de fazendas</span>
        <div className="flex items-center">
          <strong className="text-xl text-gray-700 font-semibold">{totalArea ?? 0}</strong>
          <span className="text-sm text-gray-500 pl-2">hectare(s)</span>
        </div>
      </div>
    </BoxWrapper>
  </div>
}

const BoxWrapper = ({ children }: BoxWrapperProps) =>
  <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
