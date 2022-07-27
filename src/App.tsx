import React from 'react';
import { DestinationType } from './common_types/Destination';
import paris from '../src/images/paris.jpg';
import copenHagen from '../src/images/copenhagen.jpeg';
import newYork from '../src/images/newYork.jpeg';
import tehran from '../src/images/tehran.jpeg';
import london from '../src/images/london.jpeg';
import tokyo from '../src/images/tokyo.jpeg';
import DestinationProfileContextProvider from './contexts/DestinationProfileContext';
import ListDestination from './components/Destination/ListDestination';

import './App.css';

export const data: DestinationType[] = [
  {
    id: '1',
    destinationName: 'Copenhagen',
    address: `Rådhuspladsen 1, 1550 København, Denmark`,
    image: copenHagen,
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
    image: tehran,
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
    image: paris,
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
    image: london,
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
    image: tokyo,
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
    image: newYork,
    population: 8400000,
    hotels: 12000,
    revenue: 100000,
    surface: 783.8,
    active: false,
  },
];

const App = () => {
  return (
    <main>
      <DestinationProfileContextProvider>
        <ListDestination />
      </DestinationProfileContextProvider>
    </main>
  );
};

export default App;
