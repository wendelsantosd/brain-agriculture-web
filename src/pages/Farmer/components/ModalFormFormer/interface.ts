import { ICreateFarmerRequest } from "../../../../services/api/farmer/protocols/createFarmer";

export interface ModalFormFarmerProps {
  isOpen:  boolean;
  onClose: () => void;
  action: (data: ICreateFarmerRequest) => void;
  loading: boolean;
}