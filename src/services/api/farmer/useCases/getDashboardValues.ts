import { makeRequest } from "../../helpers/makeRequest";
import { IGetDashboardValuesResponse } from "../protocols/getDashboardValues";

export const getDashboardValues = async (): Promise<IGetDashboardValuesResponse> => {
  const request = makeRequest();
  const response = await request.get<IGetDashboardValuesResponse>({
    url: "/farmer/calculate",
  });

  return response.data;
};
