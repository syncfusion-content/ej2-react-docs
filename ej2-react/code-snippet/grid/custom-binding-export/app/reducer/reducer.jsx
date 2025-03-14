import {  Grid_FetchData } from './action';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { createLazyLoadData, lazyLoadData } from '../datasource';

const initialState = {
    data: lazyLoadData,
    error: false,
    result: [],
    count: 0,
}

const applyPaging = (query, page) => {
    // Check if both 'take' and 'skip' values are available.
    if (page.take && page.skip) {
        // Calculate pageSkip and pageTake values to get pageIndex and pageSize.
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
    const query = new Query();
    switch (action.type) {
        case Grid_FetchData: {
            applyPaging(query, action.payload);
            query.isCountRequired = true;
            const currentResult= new DataManager(dataSource).executeLocal(query);
            return {
                ...state,
                data: {
                    result: currentResult.result,
                    count: currentResult.count 
                }
            };
        }

        default: {
            query.page(1, 12);
            query.isCountRequired = true;
            const currentResult = new DataManager(dataSource).executeLocal(query);
            return {
                ...state,
                data: {
                    result: currentResult.result,
                    count: currentResult.count 
                }
            };
        }
    }
};

export default reducer;