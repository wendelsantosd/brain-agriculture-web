import { makeRequest } from "../../helpers/makeRequest";
import {
  ICreateFarmerRequest,
  ICreateFarmerResponse,
} from "../protocols/createFarmer";

export const createFarmer = async (
  data: ICreateFarmerRequest
): Promise<ICreateFarmerResponse> => {
  const request = makeRequest();
  const response = await request.post<ICreateFarmerResponse>({
    url: "/farmer",
    body: data,
  });

  return response.data;
};
