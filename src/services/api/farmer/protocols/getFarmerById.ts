export interface IGetFarmerByIdResponse {
  id: string;
  name: string;
  cpfCnpj: string;
  farmName: string;
  city: string;
  state: string;
  totalArea: number;
  agriculturalArea: number;
  vegetationArea: number;
  plantedCrops: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IGetFarmerByIdRequest {
  id: string;
}
