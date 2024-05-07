import { Query } from "@syncfusion/ej2-data";

export const Grid_FetchData = "Grid_FetchData";
export const Grid_Add = "Grid_Add";
export const Grid_Delete = "Grid_Delete";
export const Grid_Editing = "Grid_Editing";

export const fetchData = (state: any, query: Query) => ({
    type: "Grid_FetchData",
    payload: state,
    gridQuery: query
});

export const addRow = (state: any, query: Query) => ({
    type: "Grid_Add",
    payload: state,
    gridQuery: query
});

export const deleteRow = (state: any, query: Query) => ({
    type: "Grid_Delete",
    payload: state,
    gridQuery: query
});

export const updateRow = (state: any, query: Query) => ({
    type: "Grid_Editing",
    payload: state,
    gridQuery: query
});