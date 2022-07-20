import { useContext } from "react"
import { DestinationContext } from "../contexts/DestinationContext/DestinationContextProvider"



export const useDestinations = () => {
    const { destinationList, addDest, getNm } = useContext(DestinationContext)
    const { destinations } = destinationList
    
    return {
        destinations: destinations,
        addDest: addDest,
        getNm: getNm
    }
}