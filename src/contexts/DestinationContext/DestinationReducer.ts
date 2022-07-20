import {DestinationType} from "../../common_types/Destination";

export type DestinationStateType = {
  destinations: DestinationType[];
}

export const ADD_DESTINATION = 'ADD_DESTINATION',
  TOGGLE_DESTINATION = 'TOGGLE_DESTINATION',
  UPDATE_DESTINATION = 'UPDATE_DESTINATION'

export type DestinationActionType = | { type: 'ADD_DESTINATION', payload: DestinationType } | { type: 'TOGGLE_DESTINATION', payload: {id: string}} |  { type: 'UPDATE_DESTINATION', payload: DestinationType}

 export const destinationReducer = (state: DestinationStateType, action: DestinationActionType): DestinationStateType => {
    const { type, payload } = action;
   switch (type) {
     case UPDATE_DESTINATION:
       let dest = {
         id: payload.id,
         destinationName: payload.destinationName,
         address: payload.address,
         image: {src: payload.image.src, alt: payload.image.alt},
         population: payload.population,
         hotels: payload.hotels,
         revenue: payload.revenue,
         surface: payload.surface,
         active: payload.active
       }
       let copiDestinations = [dest, ...state.destinations]
       return {
        ...state,
        destinations: copiDestinations,
      };
        case ADD_DESTINATION:
        return {
          ...state,
          destinations: [payload, ...state.destinations],
        };
        case TOGGLE_DESTINATION:
        return {
          ...state,
          destinations: state.destinations.map(({ ...destination }) => {
            if (destination.id === payload.id) {
              destination.active = !destination.active
            }
            return destination;
          })
            }
        default:
            return state;
    }
  };
  