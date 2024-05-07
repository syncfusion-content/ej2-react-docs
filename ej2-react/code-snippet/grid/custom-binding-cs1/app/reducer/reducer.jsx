import { Grid_Add, Grid_Delete, Grid_Editing, Grid_FetchData } from './action';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { createLazyLoadData, lazyLoadData } from '../datasource';
import { DataStateChangeEventArgs, LazyLoadGroup } from '@syncfusion/ej2-react-grids';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

const initialGrouping = { columns: ['ProductName'], enableLazyLoading: true };
const initialFiltering = { columns: [{ field: 'CustomerName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Maria' }] }
const initialSorting = { columns: [{ field: 'ProductID', direction: 'Descending' }] }
const initialPaging = { allowPaging: true };
const initialState = {
    data: lazyLoadData,
    error: false,
    result: [],
    count: 0,
}

const applyFiltering = (query, filter) => {
    // Check if filter columns are specified
    if (filter.columns && filter.columns.length) {
        // Apply filtering for each specified column
        for (let i = 0; i < filter.columns.length; i++) {
            const field = filter.columns[i].field;
            const operator = filter.columns[i].operator;
            const value = filter.columns[i].value;
            query.where(field, operator, value);
        }
    }
    else {
        // Apply filtering based on direct filter conditions
        for (let i = 0; i < filter.length; i++) {
            const { fn, e } = filter[i];
            if (fn === 'onWhere') {
                query.where(e);
            }
        }
    }
}

const applySearching = (query, search) => {
    // Check if a search operation is requested
    if (search && search.length > 0) {
        // Extract the search key and fields from the search array
        const { fields, key } = search[0];
        // perform search operation using the field and key on the query
        query.search(key, fields);
    }
}

const applySorting = (query, sorted) => {
    // Check if sorting data is available
    if (sorted && sorted.length > 0) {
        // Iterate through each sorting info
        sorted.forEach(sort => {
            // get the sort field name either by name or field
            const sortField = sort.name || sort.field;
            // Perform sort operation using the query based on the field name and direction
            query.sortBy(sortField, sort.direction);
        });
    }
}

const applyGrouping = (query, group) => {
    // Check if grouping data is available
    if (group && group.length > 0) {
        for (let i = 0; i < group.length; i++) {
            // perform group operation using the column on the query
            query.group(group[i]);
        }
    }
}

const applyLazyLoad = (query, payload) => {
    // Configure lazy loading for the main data
    if (payload.isLazyLoad) {
        query.lazyLoad.push({ key: 'isLazyLoad', value: true });
        // If on-demand group loading is enabled, configure lazy loading for grouped data
        if (payload.onDemandGroupInfo) {
            query.lazyLoad.push({
                key: 'onDemandGroupInfo',
                value: payload.action.lazyLoadQuery,
            });
        }
    }
}

const applyPaging = (query, page) => {
    // Check if both 'take' and 'skip' values are available
    if (page.take && page.skip) {
        // Calculate pageSkip and pageTake values to get pageIndex and pageSize
        const pageSkip = page.skip / page.take + 1;
        const pageTake = page.take;
        query.page(pageSkip, pageTake);
    }
    // If if only 'take' is available and 'skip' is 0, apply paging for the first page.
    else if (page.skip === 0 && page.take) {
        query.page(1, page.take);
    }
}

const reducer = (state = initialState, action) => {
    createLazyLoadData();
    const dataSource = [...initialState.data];
    const gridData = new DataManager(dataSource);
    const query = new Query();
    let filter = [];
    if (action.gridQuery !== undefined) {
        filter = action.gridQuery.queries.filter((fn) => {
            return fn.fn === "onWhere"
        })
    }
    switch (action.type) {
        case Grid_FetchData: {
            // filtering
            if (action.payload.where) {
                applyFiltering(query, action.gridQuery.queries);
            }
            // searching
            if (!isNullOrUndefined(action.payload.search)) {
                applySearching(query, action.payload.search);
            }
            // sorting
            if (!isNullOrUndefined(action.payload.sorted)) {
                applySorting(query, action.payload.sorted);
            }
            // grouping
            if (!isNullOrUndefined(action.payload.group)) {
                applyGrouping(query, action.payload.group);
            }
            // lazy load goruping
            applyLazyLoad(query, action.payload);
            // paging
            applyPaging(query, action.payload);
            // To get the count of the data
            if (action.payload.requiresCounts) {
                query.isCountRequired = true;
            }
            // Execute local data operations using the provided query
            const currentResult = new DataManager(dataSource).executeLocal(query);
            // Return the result along with the count of total records
            return ({
                data: {
                    result: currentResult.result, // Result of the data
                    count: currentResult.count // Total record count
                }
            })
        }
        case Grid_Add: {
            // Perform add operation
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
            // Perform edit operation
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
            // perform delete operation
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
            // initial filtering
            if (initialFiltering.columns.length) {
                applyFiltering(query, initialFiltering.columns);
            }
            // initial sorting
            if (initialSorting.columns.length) {
                applySorting(query, initialSorting.columns);
            }
            // initial grouping
            if (initialGrouping.columns.length) {
                applyGrouping(query, initialGrouping.columns);
            }
            if (initialGrouping.enableLazyLoading) {
                query.lazyLoad.push({ key: 'isLazyLoad', value: true })
            }
            // initial paging
            if (initialPaging.allowPaging) {
                const pageSkip = 1;
                const pageTake = 12;
                query.page(pageSkip, pageTake);
            }
            // To get the count of the data
            query.isCountRequired = true;
            // Execute local data operations using the provided query
            const currentResult = new DataManager(dataSource).executeLocal(query);
            // Return the result along with the count of total records
            return ({
                data: {
                    result: currentResult.result, // Result of the data
                    count: currentResult.count // Total record count
                }
            })
        }
    }
}
export default reducer;
