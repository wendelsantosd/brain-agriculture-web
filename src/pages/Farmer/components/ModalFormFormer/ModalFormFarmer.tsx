import { useEffect, useState } from 'react';
import { ModalFormFarmerProps, StateEnum } from './interface';
import { IFarmer } from '../../../../services/api/farmer/protocols/getFarmers';
import { Loading } from '../../../../shared/components/Loading/Loading';
import { OPTIONS } from './constants';

export const ModalFormFarmer = ({ isOpen, onClose, action, loading, id, farmer }: ModalFormFarmerProps) => {
  const [formData, setFormData] = useState<IFarmer>({
    plantedCrops: [] as string[]
  } as IFarmer);
  const [controllerCheckedCrop, setControllerCheckedCrop] = useState<string[]>([])
  const isEdit = id !== '';

  useEffect(() => {
    farmer && setFormData({ ...farmer, state: StateEnum[farmer.state as keyof typeof StateEnum] });
    farmer && setControllerCheckedCrop(farmer.plantedCrops);
  }, [farmer])

  if (!isOpen) {
    return null;
  }

  return <>
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-md">
          <form className="max-w-md mx-auto p-4">
            <p className="text-center text-lg font-medium text-gray-600 mb-4">{!isEdit ? 'Cadastrar' : 'Editar'}</p>

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2" onClick={() => console.log(formData)}>
                Nome:
              </label>
              <input
                id="name"
                type="text"
                name="name"
                defaultValue={formData.name}
                onChange={e => {
                  const _formData = formData;
                  _formData.name = e.target.value;
                  setFormData(_formData);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite o nome"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="document" className="block text-gray-700 text-sm font-bold mb-2">
                CPF/CNJP:
              </label>
              <input
                id="document"
                type="text"
                name="document"
                defaultValue={formData.cpfCnpj}
                onChange={e => {
                  const _formData = formData;
                  _formData.cpfCnpj = e.target.value;
                  setFormData(_formData);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite o CPF/CNPJ"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="farmName" className="block text-gray-700 text-sm font-bold mb-2">
                Nome da fazenda:
              </label>
              <input
                id="farmName"
                name="farmName"
                type="text"
                defaultValue={formData.farmName}
                onChange={e => {
                  const _formData = formData;
                  _formData.farmName = e.target.value;
                  setFormData(_formData);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite o nome da fazenda"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
                Cidade:
              </label>
              <input
                id="city"
                name="city"
                type="text"
                defaultValue={formData.city}
                onChange={e => {
                  const _formData = formData;
                  _formData.city = e.target.value;
                  setFormData(_formData);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite a cidade"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
                Estado:
              </label>
              <select
                id="state"
                name="state"
                onChange={e => {
                  const _formData = formData;
                  _formData.state = e.target.value;
                  setFormData(_formData);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              >
                <option value="" disabled selected>
                  Selecione um estado
                </option>
                {OPTIONS.map(option => <option key={option.value} value={option.value} selected={formData.state === option.value}>{option.label}</option>)}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="totalArea" className="block text-gray-700 text-sm font-bold mb-2">
                Área total (ha):
              </label>
              <input
                id="totalArea"
                name="totalArea"
                type="number"
                defaultValue={formData.totalArea}
                onChange={e => {
                  const _formData = formData;
                  _formData.totalArea = +e.target.value;
                  setFormData(_formData);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite o nome"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="agriculturalArea" className="block text-gray-700 text-sm font-bold mb-2">
                Área de agricultura (ha):
              </label>
              <input
                id="agriculturalArea"
                name="agriculturalArea"
                type="number"
                defaultValue={formData.agriculturalArea}
                onChange={e => {
                  const _formData = formData;
                  _formData.agriculturalArea = +e.target.value;
                  setFormData(_formData);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite a área agricultural"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="vegetationArea" className="block text-gray-700 text-sm font-bold mb-2">
                Área de vegetação (ha):
              </label>
              <input
                id="vegetationArea"
                name="vegetationArea"
                type="number"
                defaultValue={formData.vegetationArea}
                onChange={e => {
                  const _formData = formData;
                  _formData.vegetationArea = +e.target.value;
                  setFormData(_formData);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite o nome"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="plantedCrops" className="block text-gray-700 text-sm font-bold mb-2">
                Culturas plantadas:
              </label>
              <div className="flex flex-col">
                {['Soja', 'Milho', 'Algodão', 'Café', 'Cana de Açucar'].map((crop) =>
                  <label key={crop} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      id={crop}
                      name="plantedCrops"
                      value={crop}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        if (isChecked) {
                          const _formData = formData;
                          _formData.plantedCrops.push(e.target.value);
                          setControllerCheckedCrop([...controllerCheckedCrop, e.target.value]);
                          setFormData(_formData);
                        } else {
                          const _formData = formData;
                          formData.plantedCrops = formData.plantedCrops.filter(
                            (selectedCrop) => selectedCrop !== e.target.value
                          );
                          setControllerCheckedCrop(controllerCheckedCrop.filter(
                            (selectedCrop) => selectedCrop !== e.target.value
                          ))
                          setFormData(_formData);
                        }
                      }}
                      checked={controllerCheckedCrop?.some(value => crop === value)}
                      className="form-checkbox h-5 w-5 text-green-500"
                    />
                    <span className="ml-2 text-gray-700">{crop}</span>
                  </label>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => {
                  action(formData);
                  setFormData({ plantedCrops: [] as string[] } as IFarmer);
                  setControllerCheckedCrop([]);
                }}
                disabled={loading}
              >
                {!isEdit ? 'Cadastrar' : 'Editar'}
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => {
                  onClose();
                  setFormData({ plantedCrops: [] as string[] } as IFarmer);
                  setControllerCheckedCrop([]);
                }}
                disabled={loading}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div >
    </div >
    {loading && <Loading />}
  </>
};