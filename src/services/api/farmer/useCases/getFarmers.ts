import { makeRequest } from "../../helpers/makeRequest";
import { IGetFarmersResponse } from "../protocols/getFarmers";

export const getFarmers = async (): Promise<IGetFarmersResponse> => {
  const request = makeRequest();
  const response = await request.get<IGetFarmersResponse>({
    url: "/farmer",
  });

  return response.data;
};
