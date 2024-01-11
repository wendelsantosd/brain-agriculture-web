import {  useEffect, useState } from "react"
import { IFarmer } from "../../services/api/farmer/protocols/getFarmers"
import { getFarmers } from "../../services/api/farmer/useCases/getFarmers"
import { formatBrazilianEIN, formatBrazilianSSN } from "../../shared/helpers/format/document"
import { ModalFormFarmer } from "./components/ModalFormFormer/ModalFormFarmer"
import { ICreateFarmerRequest } from "../../services/api/farmer/protocols/createFarmer"
import { ToastContainer, toast } from 'react-toastify';
import { createFarmer } from "../../services/api/farmer/useCases/createFarmer"
import { Loading } from "../../shared/components/Loading/Loading"

export const Farmer = (): React.ReactElement => {
  const [data, setData] = useState<IFarmer[]>()
  const [openModal, setIsOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetFarmers()
  }, [])

  const handleGetFarmers = async () => {
    try {
      setLoading(true);
      const response = await getFarmers();
      setData(response.farmers);
      setLoading(false);
      setIsOpenModal(false);
    } catch (error) {
      toast.error('Erro ao listar produtores')
    }
  }

  const handleSubmit = async (formData: ICreateFarmerRequest) => {
    try {
      setLoading(true);
      const response = await createFarmer(formData);
      console.log(response.message)
      setLoading(false);
      toast.success(response.message);
      setIsOpenModal(false)
      await handleGetFarmers()
    } catch (error) {
      toast.error('Erro ao adicionar produtor')
      setLoading(false)
      setIsOpenModal(false)
    }
  };

  return <>
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      <div className="flex flex-row gap-4 w-full">
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
          <div className="flex justify-between items-center">
            <strong className="text-gray-700 text-lg">Produtores</strong>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsOpenModal(true)}>
              Adicionar
            </button>
          </div>
          <div className="border-x border-gray-200 rounded-sm mt-3">
            <table className="w-full text-gray-700">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Cpf/Cnpj</th>
                  <th>Nome da fazenda</th>
                  <th>Cidade</th>
                  <th>Estado</th>
                  <th>Área total (ha)</th>
                  <th>Área de agricultura (ha)</th>
                  <th>Área de vegetação (ha)</th>
                  <th>Culturas plantadas</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.cpfCnpj.length === 11 ? formatBrazilianSSN(item.cpfCnpj) : formatBrazilianEIN(item.cpfCnpj)}</td>
                    <td>{item.farmName}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.totalArea}</td>
                    <td>{item.agriculturalArea}</td>
                    <td>{item.vegetationArea}</td>
                    <td>{item.plantedCrops.map((crop, index) => {
                      if (index === item.plantedCrops.length - 1) return `${crop}.`
                      return `${crop},`
                    })}
                    </td>
                    <td>
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Editar
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <ModalFormFarmer
      isOpen={openModal}
      onClose={() => setIsOpenModal(false)}
      action={handleSubmit}
      loading={loading}
    />
    <ToastContainer />
    {loading && <Loading />}
  </>
}