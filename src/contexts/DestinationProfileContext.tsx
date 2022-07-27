import React, { createContext, useContext, useState } from 'react';
import { DestinationType } from '../common_types/Destination';
import { data } from '../App';

type DestinationProfileContextType = {
  destinations: DestinationType[];
  toUpload: (destination: DestinationType) => void;
  toggleDestination?: (id: string) => void;
};

type ProviderType = {
  children: JSX.Element | JSX.Element[];
};

// Create Contexte
const DestinationProfileContext = createContext<DestinationProfileContextType>({} as DestinationProfileContextType);

// Custom Hook useDestination
export const useDestination = () => {
  const { destinations, toUpload, toggleDestination } = useContext(DestinationProfileContext);
  return {
    destinations,
    toUpload,
    toggleDestination,
  };
};

// Destination Provider
const DestinationProfileContextProvider = ({ children }: ProviderType) => {
  const [destinations, setDestinations] = useState<DestinationType[]>(data);

  // function to add a new destination
  const toUpload = (destination: DestinationType) => {
    if (destination) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        destinationName: destination.destinationName,
        image: destination.image,
        address: destination.address,
        hotels: destination.hotels,
        population: destination.population,
        revenue: destination.revenue,
        surface: destination.surface,
        active: destination.active,
      };
      console.log('newItem', newItem);
      setDestinations([newItem, ...destinations]);
    }
  };

  // function to activate button toggle active and inactive
  const toggleDestination = (id: string) => {
    destinations.filter((destination) => {
      if (destination.id === id) {
        destination.active = true;
        setDestinations([...destinations]);
      }
    });
  };
  return (
    <DestinationProfileContext.Provider value={{ destinations, toUpload, toggleDestination }}>
      {children}
    </DestinationProfileContext.Provider>
  );
};

export default DestinationProfileContextProvider;
