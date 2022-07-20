import React, { createContext, useState } from 'react';
import { DestinationType, ImageType } from '../common_types/Destination';

type DestinationProfileContextType = {
  id?: string;
  destinationName: string;
  image: ImageType;
  address: string;
  population: number;
  hotels: number;
  revenue: number;
  surface: number;
  active: boolean;
  setDestinationProfileContext: (info: DestinationType) => void;
};
export const DestinationProfileContext = createContext<DestinationProfileContextType>(
  {} as DestinationProfileContextType,
);

export type DestinationProfileContextProviderType = {
  children: JSX.Element | JSX.Element[];
  //   value: DestinationProfileContextType;
};

const DestinationProfileContextProvider = ({ children }: DestinationProfileContextProviderType) => {
  const destinationProfileState: DestinationProfileContextType = {
    id: '',
    destinationName: '',
    image: { src: '', alt: '' },
    address: '',
    population: 0,
    hotels: 0,
    revenue: 0,
    surface: 0,
    active: false,
    setDestinationProfileContext: (info) =>
      setDestinationProfile((prevState) => ({
        ...prevState,
        id: info.id,
        destinationName: info.destinationName,
        address: info.address,
        image: { src: info.image.src, alt: info.image.alt },
        population: info.population,
        hotels: info.hotels,
        revenue: info.revenue,
        surface: info.surface,
        active: info.active,
      })),
  };
  const [destinationProfile, setDestinationProfile] = useState<DestinationProfileContextType>(destinationProfileState);

  return <DestinationProfileContext.Provider value={destinationProfile}>{children}</DestinationProfileContext.Provider>;
};

export default DestinationProfileContextProvider;
