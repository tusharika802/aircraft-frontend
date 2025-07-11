import { Partner } from "./partner";

export interface Contract {
  id: number;
  title: string;
  isActive: boolean;
  // contractPartner: { id: number; name: string; contractId: number }[];
  contractPartner: Partner[]; // NOT a string


}
