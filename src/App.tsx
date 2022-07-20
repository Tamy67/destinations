import React, { useEffect, useReducer, useState } from 'react';
import {
  DestinationContext,
  DestinationProvider,
  initialState,
} from './contexts/DestinationContext/DestinationContextProvider';
import './App.css';
import ListDestination from './components/Destination/ListDestination';
import { destinationReducer } from './contexts/DestinationContext/DestinationReducer';
import { DestinationType, ImageType } from './common_types/Destination';

// const store = localStorage.getItem('key');

export const App = () => {
  const [destinationState, dispatch] = useReducer(destinationReducer, initialState);

  const [loaded, setLoaded] = useState(true);

  const [destinations, setDestinations] = useState<DestinationType[]>([]);

  const [destinationNm, setDestinationNm] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [image, setImage] = useState<ImageType>({ src: '', alt: '' });
  const [population, setPopulation] = useState<number>(0);
  const [hotels, setHotels] = useState<number>(0);
  const [revenue, setRevenue] = useState<number>(0);
  const [surface, setSurface] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  // useEffect(() => {
  //   if (!loaded) {
  //     setTimeout(() => {
  //       setLoaded(true);
  //     }, 300);
  //   } else {
  //     setLoaded(false);
  //   }
  // }, [loaded]);

  // if (loaded) {
  //   return <Spinner/>
  // }

  useEffect(() => {
    let raw = JSON.parse(localStorage.getItem('destinations') as string) || [];
    if (typeof raw === 'string') {
      return setDestinations(JSON.parse(raw));
    }
  }, []);

  useEffect(() => {
    let raw_key = localStorage.getItem('destinations');

    if (typeof raw_key === 'string') {
      JSON.stringify(destinations); //stringify object and store ; Retrieve the object from storage
    }
  }, [destinations]);

  const addDestination = (event: any) => {
    if (event.key === 'ENTER') {
      setDestinations([
        ...destinations,
        {
          id: new Date().getTime().toString(36) + '_',
          destinationName: destinationNm,
          address: address,
          image: { src: image.src, alt: image.alt },
          population: population,
          hotels: hotels,
          revenue: revenue,
          surface: surface,
          active: active,
        },
      ]),
        setDestinationNm('');
      setAddress('');
      setImage({ src: '', alt: '' });
      setPopulation(0);
      setHotels(0);
      setRevenue(0);
      setSurface(0);
      setActive(false);
    }
  };

  const toggleDestination = (id: string) => {
    setDestinations(
      destinations.map((dest) => {
        if (dest.id === id) {
          dest.active = !dest.active;
        }
        return dest;
      }),
    );
  };

  return (
    <main>
      <DestinationProvider>
        <ListDestination />
      </DestinationProvider>
    </main>
  );
};
