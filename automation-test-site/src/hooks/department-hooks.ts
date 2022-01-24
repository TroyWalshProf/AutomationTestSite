import { useApplicationState, setApplicationState } from "./context-hooks";

const getDepartments = () => {
    const state = useApplicationState();

    return state.departments;
}

const useGetDepartment = () => {
    const state = useApplicationState();

    return (id: number) => {
        return state.departments.find(department => department.id == id);
    } 
}

const useCreateDepartment = () => {
    const state = useApplicationState();

    return (department: any) => {
        // TODO: Generate UUID
        department.id = -1;
        const newState = {...state};
        newState.departments.push(department);

        setApplicationState(newState);
    }
}

const useDeleteDepartment = () => {
    const state = useApplicationState();

    return (id: number) => {
        const newState = {...state};
        newState.departments.splice(newState.departments.findIndex(dept => dept.id == id), 1);

        setApplicationState(newState);
    }
}

const useEditDepartment = () => {
    const state = useApplicationState();

    return (id: number, department: any) => {
        const newState = {...state};
        const index = newState.departments.findIndex(dept => dept.id == id);
        newState.departments[index] = Object.assign(newState.departments[index], department);

        setApplicationState(newState);
    }
}

export { getDepartments, useGetDepartment, useCreateDepartment, useDeleteDepartment, useEditDepartment };