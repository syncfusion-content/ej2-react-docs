---
layout: post
title: Redux service in React Grid component | Syncfusion
description: Learn here all about Redux service in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Redux service 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Redux service in React Grid Component

The Syncfusion Grid component provides support for integrating data from a Redux service using the [observable binding](https://ej2.syncfusion.com/react/documentation/grid/data-binding/data-binding#custom-binding) feature. This allows you to connect the grid component to your [Redux](https://react-redux.js.org/introduction/getting-started) `store` and perform various data operations such as sorting, filtering, paging, and CRUD actions. In this section, we will guide you through the process of enabling and integrating the Redux service with the Syncfusion Grid.

## The steps below to create a Redux service.

**Step 1 : Install Dependencies**

In your terminal, navigate to your project directory and run the following command to install the required packages:

```
npm install --save redux react-redux
```
The above command installs the redux package, which is the core Redux library, and the react-redux package, which provides integration between Redux and React.

**Step 2 : Set Up Redux Store**

Once the dependencies are installed, you need to set up a Redux [store](https://redux.js.org/api/store) in your application. Add the following code to the **store.tsx** file.

1. Create a new file called store.tsx in your project's directory.

2. In the store.tsx file, import the necessary Redux functions and create your store:
    ```ts
    import { createStore } from 'redux';
    import reducer from "../reducer";
    const store = createStore(reducer);
    export default store;
    ```
    In the above code, you import the `createStore` function from the `redux` package and your reducer from the appropriate file. Then, you create your Redux `store` using the `createStore` function, passing in your reducer function.

3. Now, you have set up your Redux store. You can customize it further by adding middleware, enhancers, or other configurations as needed.

**Step 3 : Connect Redux Provider**

To make the Redux `store` available to your React components, you need to wrap your application with the Redux [Provider](https://react-redux.js.org/api/provider) component. It uses the Redux `store` as a prop and connects all the components in its hierarchy. Follow these steps to connect the Redux provider:

1. Open your root component file (usually index.tsx).

2. Import the necessary dependencies:

    ```ts
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { Provider } from 'react-redux';
    import store from './store';
    ```
3. Wrap your application component with the `Provider` component and pass the Redux `store` as a prop:

    ```ts
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
    document.getElementById('root'));
    ```

**Step 4: Create a Actions**

According to Redux documentation, the Redux [actions](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#designing-actions) are plain JavaScript objects that describe changes to be made to the application's state. These actions are dispatched to the Redux `store`, and `reducers` handle them to update the state accordingly.

The action type defines the name of the action that will be performed from your application. Each action type is a string that describes the specific operation being performed. 

Here's an example of a Redux action definition for sort operation . you can add the code in the **action.tsx** file.

```ts
  export const Grid_Sorting = "Grid_Sorting";

  // Action for sorting
  export const sortRow = (state: any , query: any) => ({
    //the necessary parameters for the sort operation
    type: "Grid_Sorting",
    payload: state,
    gridQuery: query
  });
```

**Step 5: Create a Reducer**

According to the Redux documentation, the Redux [reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#writing-reducers) are functions responsible for handling actions and updating the state of the application. Reducers specify how the state should change in response to different actions dispatched to the Redux `store`.

Here's an example of a Redux reducer definition for sorting operations. You can add the reducer code in the  **reducer.tsx** file.

```ts
//You can also set the page size based on your application.
const initialPage = { skip: 0, take: 12 }
const initialState: any = {
  data: data,
  error: false,
  result: [],
  count: 0,
}

const reducer = (state = initialState, action) => {
  const dataSource = [...initialState.data];
  const gridData = new DataManager(dataSource);
  // we execute the Data Grid action and perform CRUD by using the DataManager. 
  switch(action.type) {
    case Grid_Sorting: {
      // we have executed grid query using DataManager.
      const sortData = gridData.executeLocal(action.gridQuery);
      // Execute the Grid page query... based on your skip and take values.
      const currentPageData = new DataManager(sortData).executeLocal(new Query().skip(action.payload.skip).take(action.payload.take));
      // The grid data should be returned as the result and count with the object type.
      return ({
        data: { result: currentPageData, count: sortData.length }
      })
    }
    default: {
      // The grid data should be returned as the result and count with the object type.
      const defaultCount = state.data.length;
      const defaultData = { data: { result: state.data.slice(initialPage.skip, initialPage.take), count: defaultCount } }
      return defaultData;
    }
  }
}
export default reducer;
```
> The grid expects an object  as result and count format.

**Step 6: Create a Dispatch**

According the Redux documentation, the [dispatch](https://redux.js.org/api/store#dispatchaction) function is a method provided by the Redux `store`. It is used to send actions to the `store`, triggering the state update process. Dispatching an action is the primary way to update the state in a Redux application.

When performing actions such as adding, updating, or deleting a row in the grid, it dispatches the corresponding actions to modify the data in the `store` and trigger updates to the grid component.

When the [dataSourceChanged](https://ej2.syncfusion.com/react/documentation/api/grid/#datasourcechanged) and [dataStateChange](https://ej2.syncfusion.com/react/documentation/api/grid/#datastatechange) event occur, the `dispatch` method is called according to their grid actions.

Add the following code to the **App.tsx** file.

```ts
  const dataStateChange = (args: DataStateChangeEventArgs) => {
    // This event will be triggered when performing any grid action.
    if (args.action.requestType === 'sorting') {
      dispatch(sortRow(state, query));    
    }
  }

  const dataSourceChanged = (state: DataSourceChangedEventArgs) => {
    // This event will be triggered when performing any grid action.
    if (state.requestType === 'delete') {
      dispatch(deleteRow(state, query));
    }
  }
```

**Step 7: Fetching Grid Data using useEffect**

To fetch grid data and populate the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/#datasource) property of the grid, you can use the [useEffect](https://react.dev/reference/react/useEffect) hook in React. The useEffect hook allows you to perform side effects, such as fetching data, after the component has rendered. Here's an example of how to fetch grid data using useEffect:

Add the following code to the **App.tsx** file.
```js
  useEffect(() => {
    if (gridInstance) {
      gridInstance.dataSource = state.data
    }
  }) 
```

## Handling Paging, Filtering, and Sorting

The [dataStateChange](https://ej2.syncfusion.com/react/documentation/api/grid/#datastatechange) event will be triggered when performing the grid actions such as sorting, paging, grouping etc,. You can get the query of related grid actions in the `dataStateChange` event of grid. Here's an example code of Redux `action`, `reducer` for handling the data operations . You can add the following code in the App.tsx file.

**App.tsx**

```ts
  const dataStateChange = (args: DataStateChangeEventArgs) => {
    // This event will be triggered when performing any grid action.
    const query = gridInstance.getDataModule().generateQuery(true);
    if(args.action){
      // Dispatch the filtering query.
      if (args.action.requestType === 'filtering') {
        dispatch(filterRow(args, query));
      }
      // Dispatch the sorting query.
      if (args.action.requestType === 'sorting') {
        dispatch(sortRow(args, query));    
      }
      // Dispatch the paging query.
      if (args.action.requestType === "paging" || args.action?.requestType === "refresh" || args.action.requestType === "delete") {
        dispatch(pageRow(args, query));
      }
    }
  }
```

The action takes the necessary parameters for the grid operation and returns an action object with properties - type, payload and query.

The `type` property is set to the corresponding grid action type constant defined earlier. 

The `payload` property contains the grid data associated with the action, such as data to be created, data to be updated, or row data to be deleted.

The `query` property will be sent along with the data request for every grid action.

**action.tsx**

```ts
export const Grid_Paging = "Grid_Paging";
export const Grid_Filtering = "Grid_Filtering";
export const Grid_Sorting = "Grid_Sorting";

// Action for filtering
export const filterRow = (state: any , query: any) => ({
    type: "Grid_Filtering",
    payload: state,
    gridQuery: query
});
// Action for sorting
export const sortRow = (state: any , query: any) => ({
    type: "Grid_Sorting",
    payload: state,
    gridQuery: query
});
// Action for paging
export const pageRow = (state: any , query: any) => ({
    type: "Grid_Paging",
    payload: state,
    gridQuery: query
});
```

In this demo, Execute the grid action and perform paging, filtering and sorting actions by using the `DataManager`.

The `executeLocal` method to execute a local query on the gridData object and `store` the response to this query.

Then, creates a new instance of `DataManager` with the gridData array as its data source. It executes a local query on the currentPageData object using the `executeLocal` method.

The default value for the data grid's `pageSize` parameter (skip 0, take 12) is used to set the `skip` and `take` values. 

Fetch the current page records and the total number of records from your `dataSource` using the `result` and `count` formats. 

**reducer.tsx**

```ts
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
  switch(action.type) {
    case Grid_Filtering: {
      // Here, we have executed the grid query by using the DataManager.
      const filterData = gridData.executeLocal(action.gridQuery);
      // Execute the grid page query... based on your skip and take values.
      const currentPageData = new DataManager(filterData).executeLocal(new Query().skip(action.payload.skip).take(action.payload.take))
      // We need to return the Grid data as result and count with object type.
      return ({
        data: { result: currentPageData, count: filterData.length }
      })
    }
    case Grid_Sorting: {
      // Execute the grid sort query...
      const sortData = gridData.executeLocal(action.gridQuery);
      // Execute the grid page query... based on your skip and take values.
      const currentPageData = new DataManager(sortData).executeLocal(new Query().skip(action.payload.skip).take(action.payload.take));
      // We need to return the Grid data as result and count with object type.
      return ({
        data: { result: currentPageData, count: sortData.length }
      })
    }
    case Grid_Paging: {
      // we have executed the grid query by using DataManager.
      const pageData = gridData.executeLocal(new Query());
      // Execute the grid query except pagination....
      const result = action.gridQuery !== undefined ? new DataManager(pageData).executeLocal(action.gridQuery) : pageData;
      // Execute the grid page query... based on your skip and take values.
      const currentPageData = new DataManager(result).executeLocal(new Query().skip(action.payload.skip).take(action.payload.take));
      // We need to return the Grid data as result and count with object type.
      return ({
        data: { result: currentPageData, count: filter.length ? result.length : pageData.length }
      })
    }         
    default: {
      // We need to return the Grid data as result and count with object type.
      const defaultCount = state.data.length;
      const defaultData = { data: { result: state.data.slice(initialPage.skip, initialPage.take), count: defaultCount } }
      return defaultData;
    }
  }
}
export default reducer;
```

## Performing CRUD operations

To perform CRUD (Create, Read, Update, Delete) operations in the Syncfusion Grid component, you can utilize the [dataSourceChanged](https://ej2.syncfusion.com/react/documentation/api/grid/#datasourcechanged) event. This event is triggered when a CRUD action is performed in the grid, allowing you to capture the changes and update the Redux `store` or perform any other necessary operations.

Here's an example code of Redux `action`, `reducer` for handling the CRUD operations. You can add the following code in the App.tsx file.

**App.tsx**

```ts
  const dataSourceChanged = (state: DataSourceChangedEventArgs) => {
    // This event will be triggered when we perform a CRUD action.
    const query = gridInstance.getDataModule().generateQuery(true);  
    if (state.requestType === "save") {
      // Dispatch the adding action.
      if (state.action === "add") {
        dispatch(addRow(state, query));
      }
      // Dispatch the editing action.
      else if (state.action === "edit") {
        dispatch(updateRow(state, query));
      }
    }
    // Dispatch the deleting action.
    if (state.requestType === 'delete') {
      dispatch(deleteRow(state, query));
    }
  }
```

**action.tsx**

```ts
export const Grid_Add = "Grid_Add";
export const Grid_Editing = "Grid_Editing";
export const Grid_Delete = "Grid_Delete";

// Action for adding
export const addRow = (state: any , query: any) => ({
    type: "Grid_Add",
    payload: state,
    gridQuery: query
});
  
// Action for deleting
export const deleteRow = (state: any , query: any) => ({
    type: "Grid_Delete",
    payload: state,
    gridQuery: query
});

// Action for editing
export const updateRow = (state: any , query: any) => ({
    type: "Grid_Editing",
    payload: state,
    gridQuery: query
});
```

The `insert`, `update` and `delete` methods should be used to add, update, and delete. Then we can fetch the current page records and the total number of records from your `dataSource` using the `result` and `count` formats. 


**reducer.tsx**

```ts
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
  switch(action.type) {      
    case Grid_Add: {
      // Here, we will perform the insert action using the DataManager.
      gridData.insert(action.payload.data, '', undefined, 0);
      const addedData = gridData.executeLocal(new Query());
      // Update the original state.
      initialState.data = [...addedData];
      const count = addedData.length;
      const result = new DataManager(addedData).executeLocal(action.gridQuery);
      // Execute the grid page query... based on your skip and take values.
      const currentPageData = new DataManager(result).executeLocal(new Query().skip(action.payload.state.skip).take(action.payload.state.take));
      // We need to return the grid data as result and count with object type.
      return ({
        data: { result: currentPageData, count: filter.length ? result.length : count },
      })
    }
    case Grid_Editing: {
      // Here, we are going to perform update action by using the DataManager.
      gridData.update('OrderID', action.payload.data);
      const updatedData = gridData.executeLocal(new Query());
      initialState.data = [...updatedData];
      const count = updatedData.length;
      const result = new DataManager(updatedData).executeLocal(action.gridQuery);
      // Execute the grid page query... based on your skip and take values.
      const currentPageData = new DataManager(result).executeLocal(new Query().skip(action.payload.state.skip).take(action.payload.state.take));
      // We need to return the grid data as result and count with object type.
      return ({
        data: { result: currentPageData, count: filter.length ? result.length : count }
      })
    }
    case Grid_Delete: {
      // Here, we will perform the delete action by using DataManager.
      gridData.remove('OrderID', { OrderID: action.payload.data[0]['OrderID'] });
      const updatedData = gridData.executeLocal(new Query());
      initialState.data = [...updatedData];
      const count = updatedData.length;
      const result = new DataManager(updatedData).executeLocal(action.gridQuery);
      // Execute the grid page query... based on your skip and take values.
      const currentPageData = new DataManager(result).executeLocal(new Query().skip(action.payload.state.skip).take(action.payload.state.take));
      // We need to return the grid data as result and count with object type.
      return ({
        data: { result: currentPageData, count: filter.length ? result.length : count }
      })
    }
    default: {     
      // We need to return the grid data as result and count with object type.
      const defaultCount = state.data.length;
      const defaultData = { data: { result: state.data.slice(initialPage.skip, initialPage.take), count: defaultCount } }
      return defaultData;
    }
  }
}
export default reducer;
```

**index.tsx**

```ts
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import store from './store'

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

> You can find the sample of the Syncfusion DataGrid with Redux [here](https://github.com/SyncfusionExamples/DataGrid-React-Redux/).

