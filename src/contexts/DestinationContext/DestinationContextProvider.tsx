import React, { createContext, useContext, useReducer, useState } from 'react';
import { DestinationProviderProps, DestinationType } from '../../common_types/Destination';
import { destinationReducer, DestinationStateType } from './DestinationReducer';
import paris from '../../images/paris.jpg';
import copenHagen from '../../images/copenhagen.jpeg';
import newYork from '../../images/newYork.jpeg';
import tehran from '../../images/tehran.jpeg';
import london from '../../images/london.jpeg';
import tokyo from '../../images/tokyo.jpeg';

export const DestinationContext = createContext<DestinationContextPropsType>({} as DestinationContextPropsType);

export const initialState: DestinationStateType = {
  destinations: [
    {
      id: '1',
      destinationName: 'Copenhagen',
      address: `Rådhuspladsen 1, 1550 København, Denmark`,
      image: { src: copenHagen, alt: 'Copenhagen' },
      population: 3400000,
      hotels: 5000,
      revenue: 70000,
      surface: 88.25,
      active: false,
    },
    {
      id: '2',
      destinationName: 'Tehran',
      address: `Tehran, Azadi Square, Iran`,
      image: { src: tehran, alt: 'Tehran' },
      population: 8600000,
      hotels: 400,
      revenue: 30000,
      surface: 730,
      active: false,
    },
    {
      id: '3',
      destinationName: 'Paris',
      address: `Pl. de l'Hôtel de Ville, 75004 Paris`,
      image: { src: paris, alt: 'Paris' },
      population: 2100000,
      hotels: 7500,
      revenue: 50000,
      surface: 105.4,
      active: true,
    },

    {
      id: '4',
      destinationName: 'London',
      address: `London SW1A 0AA, United Kingdom`,
      image: { src: london, alt: 'London' },
      population: 8600000,
      hotels: 10000,
      revenue: 90000,
      surface: 157.2,
      active: true,
    },
    {
      id: '5',
      destinationName: 'Tokyo',
      address: `4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan `,
      image: { src: tokyo, alt: 'Tokyo' },
      population: 13900000,
      hotels: 7000,
      revenue: 70000,
      surface: 627.6,
      active: true,
    },
    {
      id: '6',
      destinationName: 'New York',
      address: `New York, NY 10004, United States`,
      image: { src: newYork, alt: 'New York' },
      population: 8400000,
      hotels: 12000,
      revenue: 100000,
      surface: 783.8,
      active: false,
    },
  ],
};

export type DestinationContextPropsType = {
  destinationList: DestinationStateType;
  getNm?: () => void;
  addDest: (destination: DestinationType) => void;
  toggleDestination?: (active: boolean) => void;
};

export const DestinationProvider = ({ children }: DestinationProviderProps) => {
  // const [destinationState, dispatch] = useReducer(destinationReducer, initialState);

  const [destinationList, setDestinationList] = useState<any>(initialState);

  const getNm = () => destinationList.destinations.length;

  const addDest = (newDest: DestinationType) => {
    setDestinationList([newDest, ...destinationList]);
  };

  const contextValue: DestinationContextPropsType = {
    getNm,
    destinationList,
    addDest,
  };

  // const toggleDestination = (active: boolean) => {
  //   console.log('toggle', active);
  // };

  // const destinationsDispatcher = (dispatch: Dispatch<DestinationActionType>) => {
  //   return {
  //     addDestination: (destination: DestinationType) => dispatch({ type: 'ADD_DESTINATION', payload: destination }),
  //   };
  // };

  return <DestinationContext.Provider value={contextValue}>{children}</DestinationContext.Provider>;
};
