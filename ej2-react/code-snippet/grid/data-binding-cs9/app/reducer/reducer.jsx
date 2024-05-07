import { Grid_FetchData } from './action';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { createLazyLoadData, lazyLoadData } from '../datasource';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

const initialSorting = { columns: [{ field: 'ProductID', direction: 'Descending' }] }
const initialParams = new Query().addParams('Syncfusion_React_Grid', 'true');
const initialPaging = { allowPaging: true };
const initialState = {
    data: lazyLoadData,
    error: false,
    result: [],
    count: 0,
}

const applySorting = (query, sorted) => {
    if (sorted && sorted.length > 0) {
        sorted.forEach(sort => {
            const sortField = sort.name || sort.field;
            query.sortBy(sortField, sort.direction);
        });
    }
}

const applyPage = (query, page) => {
    if (page.take && page.skip) {
        const pageSkip = page.skip / page.take + 1;
        const pageTake = page.take;
        query.page(pageSkip, pageTake);
    }
    else if (page.skip === 0 && page.take) {
        query.page(1, page.take);
    }
}

const reducer = (state = initialState, action) => {
    createLazyLoadData();
    const dataSource = [...initialState.data];
    let query = new Query();
    switch (action.type) {
        case Grid_FetchData: {
            //sorting
            if (!isNullOrUndefined(action.payload.sorted)) {
                applySorting(query, action.payload.sorted);
            }

            //paging
            applyPage(query, action.payload);

            //addParams
            if (action.payload.params.length) {
                query.addParams('Syncfusion_React_Grid', 'true');
            }

            if (action.payload.requiresCounts) {
                query.isCountRequired = true;
            }
            const currentResult = new DataManager(dataSource).executeLocal(query);
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
            const currentResult = new DataManager(dataSource).executeLocal(query);
            return ({
                data: { result: currentResult.result, count: currentResult.count }
            })
    }
}
export default reducer;