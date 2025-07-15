export interface Contract {
  id?: number;
  title: string;
  isActive: boolean;
  partnerIds: number[]; // Changed to number[] to match frontend usage
  // partnerNames?: string[]; // Optional for display
}