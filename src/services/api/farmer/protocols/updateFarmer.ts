export interface IUpdateFarmerRequest {
  id: string;
  farmerData: {
    name: string;
    cpfCnpj: string;
    farmName: string;
    city: string;
    state: string;
    totalArea: number;
    agriculturalArea: number;
    vegetationArea: number;
    plantedCrops: string[];
  };
}

export interface IUpdateFarmerResponse {
  message: string;
}
