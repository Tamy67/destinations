export type DestinationType = {
    id: string;
    destinationName: string;
    image: ImageType;
    address: string;
    population: number;
    hotels: number;
    revenue: number;
    surface: number;
    active: boolean
}

export type DestinationListType = {
    data: DestinationType[];
};

export type BaseModalWrapperType = {
    isModalVisible: boolean;
    onBackdropClick: () => void;
};

export type ImageType = {
    src: string,
    alt?: string
}


  
  export interface DestinationProviderProps {
    children: JSX.Element | JSX.Element[];
  };


  export type HandleChangeType = {
    target: { value: string, name?: string };
  };



