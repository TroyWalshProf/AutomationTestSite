import { useApplicationState, setApplicationState } from "./context-hooks";

const getDepartments = () => {
    const state = useApplicationState();

    return state.departments;
}

const useGetDepartment = () => {
    const state = useApplicationState();

    return (id: number) => {
        return state.departments.find(stateLoc => stateLoc.id == id);
    } 
}

export { getDepartments, useGetDepartment };