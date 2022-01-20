import React, { useContext, createContext, useState } from "react";
import employeeList from "../data/employee-list.json";
import departmentList from "../data/department-list.json";
import stateList from "../data/state-list.json"

// TODO: Cleanup once POC is functional.

const Context = createContext<{employees: any[], departments: any[], states: any[]}>({
    employees: [],
    departments: [],
    states: []
});

// ApplicationContext can only be initialized once in the React DOM
// If mutliple simultaneous contexts are needed, this is going to need to get a lot more complicated...
let setState: React.Dispatch<React.SetStateAction<{employees: any[], departments: any[], states: any[]}>> | undefined = undefined;

const ApplicationContext = (props: any) => {
    const [context, setContext] = useState<{employees: any[], departments: any[], states: any[]}>({
        employees: employeeList.employees,
        departments: departmentList.departments,
        states: stateList.states
    })

    setState = setContext;

    return (
        <Context.Provider value={context}>
            {props.children}
        </Context.Provider>
    )
};

const useApplicationState = () => {
    const state = useContext<{employees: any[], departments: any[], states: any[]}>(Context);

    if (state === undefined) {
        throw new Error(
            "Must be used in a ApplicationContext!"
        );
    };

    return state;
}

const setApplicationState = (state: {employees: any[], departments: any[], states: any[]}) => {
    if (setState === undefined) {
        throw new Error(
            "ApplicationContext MUST be initialized to set the state"
        );
    };

    setState(state);
}

export { ApplicationContext, useApplicationState, setApplicationState };