export const Grid_Filtering = "Grid_Filtering";
export const Grid_Sorting = "Grid_Sorting";
export const Grid_Paging = "Grid_Paging";
export const Grid_Add = "Grid_Add";
export const Grid_Editing = "Grid_Editing";
export const Grid_Delete = "Grid_Delete";

export const filterRow = (state: any , query: any) => ({
  type: "Grid_Filtering",
  payload: state,
  gridQuery: query
});

export const sortRow = (state: any , query: any) => ({
  type: "Grid_Sorting",
  payload: state,
  gridQuery: query
});

export const pageRow = (state: any , query: any) => ({
  type: "Grid_Paging",
  payload: state,
  gridQuery: query
});
  
export const addRow = (state: any , query: any) => ({
  type: "Grid_Add",
  payload: state,
  gridQuery: query
});
  
export const deleteRow = (state: any , query: any) => ({
  type: "Grid_Delete",
  payload: state,
  gridQuery: query
});

export const updateRow = (state: any , query: any) => ({
  type: "Grid_Editing",
  payload: state,
  gridQuery: query
});
