export type DestinationType = {
  id: string;
  destinationName: string;
  image: string;
  address: string;
  population: number;
  hotels: number;
  revenue: number;
  surface: number;
  active: boolean;
};

export type ToUploadType = {
  id?: string;
  destinationName?: string;
  image?: string;
  address?: string;
  population?: number;
  hotels?: number;
  revenue?: number;
  surface?: number;
  active?: boolean;
};

export type DestinationProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export type HandleChangeType = {
  target: { value: string; name?: string };
};

export type ValidationsType = {
  isEmpty: boolean;
  minLength: number;
  maxLength: number;
};
