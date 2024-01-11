export interface IGetFarmersResponse {
    farmers: IFarmer[],
    metadata: {
        count: number
    }
}

export interface IFarmer {
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
