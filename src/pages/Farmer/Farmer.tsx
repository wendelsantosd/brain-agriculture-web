import { useContext, useEffect, useState } from "react"
import { IFarmer } from "../../services/api/farmer/protocols/getFarmers"
import { getFarmers } from "../../services/api/farmer/useCases/getFarmers"
import { formatBrazilianEIN, formatBrazilianSSN } from "../../shared/helpers/format/document"
import { ModalFormFarmer } from "./components/ModalFormFormer/ModalFormFarmer"
import { ToastContainer, toast } from 'react-toastify';
import { createFarmer } from "../../services/api/farmer/useCases/createFarmer"
import { Loading } from "../../shared/components/Loading/Loading"
import { CreateBrainAgricultureContext } from "../../context/contex"
import { getDashboardValues } from "../../services/api/farmer/useCases/getDashboardValues"
import { getFarmerById } from "../../services/api/farmer/useCases/getFarmerById"
import { updateFarmer } from "../../services/api/farmer/useCases/updateFarmer"

export const Farmer = (): React.ReactElement => {
  const [data, setData] = useState<IFarmer[]>()
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const { setDashboardValues } = useContext(CreateBrainAgricultureContext);
  const [farmer, setFarmer] = useState<IFarmer>({} as IFarmer);

  useEffect(() => {
    handleGetFarmers()
  }, [])

  const handleGetFarmers = async () => {
    try {
      setLoading(true);
      const response = await getFarmers();
      setData(response.farmers);
      setLoading(false);
      setOpenModal(false);
    } catch (error) {
      toast.error('Erro ao listar produtores')
    }
  }

  const handleSubmit = async (formData: IFarmer) => {
    try {
      setLoading(true);
      const response = id === '' ? await createFarmer(formData) : await updateFarmer({ id, farmerData: formData });
      toast.success(response.message);
      await handleGetFarmers()
      const data = await getDashboardValues();
      onClose();
      setDashboardValues && setDashboardValues(data);
    } catch (error) {
      id === '' ? toast.error('Erro ao adicionar produtor') : toast.error('Erro ao alterar produtor')
      onClose()
    }
  };

  const handleGetFarmer = async (id: string) => {
    try {
      setLoading(true);
      const response = await getFarmerById({ id })
      setFarmer(response)
      setLoading(false);
    } catch (error) {
      toast.error('Ocorreu um erro ao carregar os dados do produtor')
      onClose()
    }
  }


  const onClose = () => {
    setOpenModal(false);
    setLoading(false);
    setId('');
  }

  return <>
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      <div className="flex flex-row gap-4 w-full">
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
          <div className="flex justify-between items-center">
            <strong className="text-gray-700 text-lg">Produtores</strong>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpenModal(true)}>
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
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={async () => {
                        setId(item.id);
                        await handleGetFarmer(item.id);
                        setOpenModal(true);
                      }}>
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
      onClose={onClose}
      action={handleSubmit}
      loading={loading}
      id={id}
      farmer={farmer}
    />
    <ToastContainer />
    {loading && <Loading />}
  </>
}