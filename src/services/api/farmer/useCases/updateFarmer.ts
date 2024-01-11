import { makeRequest } from "../../helpers/makeRequest";
import { IUpdateFarmerRequest, IUpdateFarmerResponse } from "../protocols/updateFarmer";

export const updateFarmer = async (
  data: IUpdateFarmerRequest
): Promise<IUpdateFarmerResponse> => {
  const request = makeRequest();
  const response = await request.put<IUpdateFarmerResponse>({
    url: `/farmer/${data.id}`,
    body: data.farmerData,
  });

  return response.data;
};
