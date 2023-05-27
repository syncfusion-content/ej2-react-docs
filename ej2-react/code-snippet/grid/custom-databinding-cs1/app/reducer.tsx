import { Grid_Filtering, Grid_Sorting, Grid_Paging, Grid_Add, Grid_Editing, Grid_Delete } from './action';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from './datasource';

const initialPage = { skip: 0, take: 12 }
const initialState: any = {
  data: data,
  error: false,
  result: [],
  count: 0,
}

const reducer = (state = initialState, action: any) => {
  const dataSource = [...initialState.data];
  let filter = [];
  const gridData = new DataManager(dataSource);
  if (action.gridQuery !== undefined) {
    filter = action.gridQuery.queries.filter((fn: any) => {
      return fn.fn === "onWhere"
    })
  }
  switch (action.type) {
    case Grid_Filtering: {
      const filterData = gridData.executeLocal(action.gridQuery);
      const currentPageData = new DataManager(filterData).executeLocal(new Query().skip(action.payload.skip).take(action.payload.take))
      return ({
        data: { result: currentPageData, count: filterData.length }
      })
    }
    case Grid_Sorting: {
      const sortData = gridData.executeLocal(action.gridQuery);
      const currentPageData = new DataManager(sortData).executeLocal(new Query().skip(action.payload.skip).take(action.payload.take));
      return ({
        data: { result: currentPageData, count: sortData.length }
      })
    }
    case Grid_Paging: {
      const pageData = gridData.executeLocal(new Query());
      const result = action.gridQuery !== undefined ? new DataManager(pageData).executeLocal(action.gridQuery) : pageData;
      const currentPageData = new DataManager(result).executeLocal(new Query().skip(action.payload.skip).take(action.payload.take));
      return ({
        data: { result: currentPageData, count: filter.length ? result.length : pageData.length }
      })
    }
    case Grid_Add: {
      gridData.insert(action.payload.data, '', undefined, 0);
      const addedData = gridData.executeLocal(new Query());
      initialState.data = [...addedData];
      const count = addedData.length;
      const result = new DataManager(addedData).executeLocal(action.gridQuery);
      const currentPageData = new DataManager(result).executeLocal(new Query().skip(action.payload.state.skip).take(action.payload.state.take));
      return ({
        data: { result: currentPageData, count: filter.length ? result.length : count },
      })
    }
    case Grid_Editing: {
      gridData.update('OrderID', action.payload.data);
      const updatedData = gridData.executeLocal(new Query());
      initialState.data = [...updatedData];
      const count = updatedData.length;
      const result = new DataManager(updatedData).executeLocal(action.gridQuery);
      const currentPageData = new DataManager(result).executeLocal(new Query().skip(action.payload.state.skip).take(action.payload.state.take));
      return ({
        data: { result: currentPageData, count: filter.length ? result.length : count }
      })
    }
    case Grid_Delete: {
      gridData.remove('OrderID', { OrderID: action.payload.data[0]['OrderID'] });
      const updatedData = gridData.executeLocal(new Query());
      initialState.data = [...updatedData];
      const count = updatedData.length;
      const result = new DataManager(updatedData).executeLocal(action.gridQuery);
      const currentPageData = new DataManager(result).executeLocal(new Query().skip(action.payload.state.skip).take(action.payload.state.take));
      return ({
        data: { result: currentPageData, count: filter.length ? result.length : count }
      })
    }
    default: {
      const defaultCount = state.data.length;
      const defaultData = { data: { result: state.data.slice(initialPage.skip, initialPage.take), count: defaultCount } }
      return defaultData;
    }
  }
}
export default reducer;