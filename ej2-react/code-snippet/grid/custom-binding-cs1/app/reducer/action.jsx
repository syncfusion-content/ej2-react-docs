import { Query } from "@syncfusion/ej2-data";

export const Grid_FetchData = "Grid_FetchData";
export const Grid_Add = "Grid_Add";
export const Grid_Delete = "Grid_Delete";
export const Grid_Editing = "Grid_Editing";

export const fetchData = (state, query) => ({
    type: "Grid_FetchData",
    payload: state,
    gridQuery: query
});

export const addRow = (state, query) => ({
    type: "Grid_Add",
    payload: state,
    gridQuery: query
});

export const deleteRow = (state, query) => ({
    type: "Grid_Delete",
    payload: state,
    gridQuery: query
});

export const updateRow = (state, query) => ({
    type: "Grid_Editing",
    payload: state,
    gridQuery: query
});