import { useApplicationState, setApplicationState } from "./context-hooks";
import { useGetDepartment } from "./department-hooks";
import { useGetState } from "./state-hooks";

const getEmployees = () => {
    const state = useApplicationState();
    const getState = useGetState();
    const getDepartment = useGetDepartment();

    return state.employees.map(employee => {
        employee.state = getState(employee.stateId)?.state;
        employee.department = getDepartment(employee.departmentId)?.department;
        return employee;
    });
}

const useGetEmployee = () => {
    const state = useApplicationState();
    const getState = useGetState();
    const getDepartment = useGetDepartment();

    return (id: number) => {
        let employee = state.employees.find(empl => empl.id == id);
        employee.state = getState(employee.stateId).state;
        employee.department = getDepartment(employee.departmentId).department;
        return employee;
    } 
}

const useCreateEmployee = () => {
    const state = useApplicationState();

    return (employee: any) => {
        // TODO: Generate UUID
        employee.id = -1;
        const newState = {...state};
        newState.employees.push(employee);

        setApplicationState(newState);
    }
}

const useDeleteEmployee = () => {
    const state = useApplicationState();

    return (id: number) => {
        const newState = {...state};
        newState.employees.splice(newState.employees.findIndex(empl => empl.id == id), 1);

        setApplicationState(newState);
    }
}

const useEditEmployee = () => {
    const state = useApplicationState();

    return (id: number, employee: any) => {
        const newState = {...state};
        const index = newState.employees.findIndex(empl => empl.id == id);
        newState.employees[index] = Object.assign(newState.employees[index], employee);

        setApplicationState(newState);
    }
}

export { getEmployees, useCreateEmployee, useDeleteEmployee, useGetEmployee, useEditEmployee };