import { makeRequest } from "../../helpers/makeRequest";
import { IDeleteFarmerRequest, IDeleteFarmerResponse } from "../protocols/deleteFarmer";

export const deleteFarmer = async (
  data: IDeleteFarmerRequest
): Promise<IDeleteFarmerResponse> => {
  const request = makeRequest();
  const response = await request.delete<IDeleteFarmerResponse>({
    url: `/farmer/${data.id}`,
  });

  return response.data;
};
