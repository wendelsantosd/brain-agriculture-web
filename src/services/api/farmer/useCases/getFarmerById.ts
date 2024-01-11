import { makeRequest } from "../../helpers/makeRequest";
import {
  IGetFarmerByIdRequest,
  IGetFarmerByIdResponse,
} from "../protocols/getFarmerById";

export const getFarmerById = async (
  data: IGetFarmerByIdRequest
): Promise<IGetFarmerByIdResponse> => {
  const request = makeRequest();
  const response = await request.get<IGetFarmerByIdResponse>({
    url: `/farmer/${data.id}`,
  });

  return response.data;
};
