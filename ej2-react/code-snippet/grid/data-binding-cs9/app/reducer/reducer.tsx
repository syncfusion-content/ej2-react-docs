import { Grid_FetchData } from './action';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { createLazyLoadData, lazyLoadData } from '../datasource';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-react-grids';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

interface sortInfo {
    name?: string;
    field?: string;
    direction: string
}

const initialSorting = { columns: [{ field: 'ProductID', direction: 'Descending' }] }
const initialParams = new Query().addParams('Syncfusion_React_Grid', 'true');
const initialPaging = { allowPaging: true };
const initialState: any = {
    data: lazyLoadData,
    error: false,
    result: [],
    count: 0,
}

const applySorting = (query: Query, sorted: sortInfo[]) => {
    if (sorted && sorted.length > 0) {
        sorted.forEach(sort => {
            const sortField = sort.name || sort.field;
            query.sortBy(sortField as string, sort.direction);
        });
    }
}

const applyPage = (query: Query, page: DataStateChangeEventArgs) => {
    if (page.take && page.skip) {
        const pageSkip = page.skip / page.take + 1;
        const pageTake = page.take;
        query.page(pageSkip, pageTake);
    }
    else if (page.skip === 0 && page.take) {
        query.page(1, page.take);
    }
}

const reducer = (state = initialState, action: any) => {
    createLazyLoadData();
    const dataSource = [...initialState.data];
    let query = new Query();
    switch (action.type) {
        case Grid_FetchData: {
            // sorting
            if (!isNullOrUndefined(action.payload.sorted)) {
                applySorting(query, action.payload.sorted);
            }

            // paging
            applyPage(query, action.payload);

            //addParams
            if (action.payload.params.length) {
                query.addParams('Syncfusion_React_Grid', 'true');
            }

            // To get the count of the data
            if (action.payload.requiresCounts) {
                query.isCountRequired = true;
            }
            const currentResult: any = new DataManager(dataSource).executeLocal(query);
            return ({
                data: {
                    result: currentResult.result,
                    count: currentResult.count
                } 
            })
        }

        default:
            if (initialSorting.columns.length) {
                applySorting(query, initialSorting.columns);
            }
            if (initialPaging.allowPaging) {
                const pageSkip = 1;
                const pageTake = 12;
                query.page(pageSkip, pageTake);
            }
            if (initialParams.params.length) {
                query.addParams('Syncfusion_React_Grid', 'true');
            }
            query.isCountRequired = true;
            const currentResult: any = new DataManager(dataSource).executeLocal(query);
            return ({
                data: { result: currentResult.result, count: currentResult.count }
            })
    }
}
export default reducer;
