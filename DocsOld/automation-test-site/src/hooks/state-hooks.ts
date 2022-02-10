import { useApplicationState, setApplicationState } from "./context-hooks";

const getStates = () => {
    const state = useApplicationState();

    return state.states;
}

const useGetState = () => {
    const state = useApplicationState();

    return (id: number) => {
        return state.states.find(stateLoc => stateLoc.id == id);
    } 
}

export { getStates, useGetState };