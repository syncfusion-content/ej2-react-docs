---
layout: post
title: Data binding in React Grid component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React Grid component

The Grid uses **DataManager** which supports both RESTful JSON data services binding and local JavaScript object array binding.
The [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/#datasource) property can be assigned either with the instance of [DataManager](https://ej2.syncfusion.com/react/documentation/data/getting-started) or JavaScript object collection.
It supports two kind of data binding method they are,
* Local data
* Remote data

To get start quickly with Data Binding, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=UgeX6JMoqfs" %}

## Sending additional parameters to the server

To add a custom parameter to the data request, use the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method of [Query](https://ej2.syncfusion.com/documentation/api/data/query/#query) class.
Assign the [Query](https://ej2.syncfusion.com/documentation/api/data/query/#query) object with additional parameters to the grid [query](https://ej2.syncfusion.com/react/documentation/api/grid/#query) property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/data-binding-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/data-binding-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/data-binding-cs1" %}

> The parameters added using the [query](https://ej2.syncfusion.com/react/documentation/api/grid/#query) property will be sent along with the data request for every grid action.

## Handling HTTP error

During server interaction from the grid, some server-side exceptions may occur, and you can acquire those error messages or exception details in client-side using the [actionFailure](https://ej2.syncfusion.com/react/documentation/api/grid/#actionfailure) event.

The argument passed to the [actionFailure](https://ej2.syncfusion.com/react/documentation/api/grid/#actionfailure) Grid event contains the error details returned from server.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/data-binding-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/data-binding-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/data-binding-cs2" %}

> The [actionFailure](https://ej2.syncfusion.com/react/documentation/api/grid/#actionfailure) event will be triggered not only for the server errors, but also when there is an exception while processing the Grid actions.

## Binding with ajax

You can use Grid [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/#datasource) property to bind the datasource to Grid from external ajax request. In the below code we have fetched the datasource from the server with the help of ajax request and provided that to [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/#datasource) property by using **onSuccess** event of the ajax.

```ts
import { Ajax } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
    let grid: Grid
    const componentDidMount = () => {
        const ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/Orders", "GET");
        ajax.send();
        ajax.onSuccess = (data: any) => {
            if (grid) {
                grid.dataSource = JSON.parse(data);
            }
        }
    }
    return <div className='control-pane'>
        <div className='control-section'>
            <GridComponent >
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' textAlign='Right' width='120' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' textAlign='Right' width='120' />
                    <ColumnDirective field='EmployeeID' headerText='Employee ID' textAlign='Right' width='120' />
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' textAlign='Right' width='120' />
                </ColumnsDirective>
            </GridComponent>
        </div>
    </div>

};
export default App;
```

> If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.

## Custom binding

It is possible to handle data processing externally and bind the result to the Grid. This help you to provide your own custom data logic. Grid expects an object as the result of the custom logic and the emitted value should be an object with properties **result** and **count**.

> In this context, we are going to use [Ajax](https://ej2.syncfusion.com/documentation/api/base/ajax/) from our **@syncfusion/ej2-base** library for handling remote interaction, you can choose any HTTP client as per your choice.

```ts
import { Ajax, getValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, DataStateChangeEventArgs, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { DataResult } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
    let grid: Grid | null;
    let data: any;
    const orderService: OrderService = new OrderService();
    const pageSettings: PageSettingsModel = { pageSize: 10 };
    const renderComplete = () => {
        if (grid && (grid.dataSource instanceof Array
            && !(grid.dataSource as object[]).length)) {
            const state = { skip: 0, take: 10 };
            dataStateChange(state);
        }
    }
    const dataStateChange = (state: DataStateChangeEventArgs) => {
        orderService.execute(state).then((gridData) => {
            if (grid) {
                grid.dataSource = gridData
            }
        });
    }
    return <div className='control-pane'>
        <div className='control-section'>
            <GridComponent dataSource={data} pageSettings={pageSettings} ref={g => grid = g}
                dataBound={renderComplete} dataStateChange={dataStateChange} allowPaging={true}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' />
                    <ColumnDirective field='CustomerID' headerText='Customer Name' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='120' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                </ColumnsDirective>
                <Inject services={[Page]} />
            </GridComponent>
        </div>
    </div>
};
export default App;


export class OrderService {
    public ajax: Ajax = new Ajax({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'GET'
    });
    private BASE_URL: string = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

    public execute(state: DataStateChangeEventArgs): Promise<DataResult> {
        return this.getData(state);
    }

    private getData(state: DataStateChangeEventArgs): Promise<DataResult> {
        const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
        this.ajax.url = `${this.BASE_URL}?${pageQuery}&$inlinecount=allpages&$format=json`;

        return this.ajax.send().then((response: any) => {
            const data: any = JSON.parse(response);
            return {
                count: parseInt(getValue('d.__count', data), 10),
                result: getValue('d.results', data)
            };
        });
    }
};
```

## Handling Grid actions

For grid actions such as **paging**, **grouping**, **sorting** etc, the [dataStateChange](https://ej2.syncfusion.com/react/documentation/api/grid/#datastatechange) event will be invoked. You have to query and resolve data using [Ajax](https://ej2.syncfusion.com/documentation/api/base/ajax/) in this event based on the state arguments.

```ts
import { Ajax, getValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, DataStateChangeEventArgs, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { Group, Inject, Page, PageSettingsModel, Sort } from '@syncfusion/ej2-react-grids';
import { DataResult, Sorts } from '@syncfusion/ej2-react-grids';
import * as React from 'react';


function App() {
    const orderService: OrderService = new OrderService();
    let grid: Grid | null;
    let data: any;
    const pageSettings: PageSettingsModel = { pageSize: 10 };
    const renderComplete = () => {
        if (grid && (grid.dataSource instanceof Array
            && !(grid.dataSource as object[]).length)) {
            const state = { skip: 0, take: 10 };
            dataStateChange(state);
        }
    }
    const dataStateChange = (state: DataStateChangeEventArgs) => {
        orderService.execute(state).then((gridData) => {
            if (grid) {
                grid.dataSource = gridData
            }
        });
    }

    return <div className='control-pane'>
        <div className='control-section'>
            <GridComponent dataSource={data} ref={g => grid = g} pageSettings={pageSettings}
                dataBound={renderComplete} dataStateChange={dataStateChange} allowPaging={true}
                allowGrouping={true} allowSorting={true}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' />
                    <ColumnDirective field='CustomerID' headerText='Customer Name' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='120' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                </ColumnsDirective>
                <Inject services={[Page, Sort, Group]} />
            </GridComponent>
        </div>
    </div>
};
export default App;

export class OrderService {
    public ajax: Ajax = new Ajax({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'GET'
    });
    private BASE_URL: string = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

    public execute(state: DataStateChangeEventArgs): Promise<DataResult> {
        return this.getData(state);
    }

    private getData(state: DataStateChangeEventArgs): Promise<DataResult> {
        const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
        let sortQuery: string = '';

        if (state && (state.sorted || []).length) {
            sortQuery = `&$orderby=` + ((state).sorted as Sorts[]).map((obj: Sorts) => {
                return obj.direction === 'descending' ? `${obj.name} desc` : obj.name;
            }).reverse().join(',');
        }

        this.ajax.url = `${this.BASE_URL}?${pageQuery}${sortQuery}&$inlinecount=allpages&$format=json`;

        return this.ajax.send().then((response: any) => {
            const data: any = JSON.parse(response);
            return {
                count: parseInt(getValue('d.__count', data), 10),
                result: getValue('d.results', data)
            };
        });
    }
};
```

> While initial rendering, the [dataStateChange](https://ej2.syncfusion.com/react/documentation/api/grid/#datastatechange) event will not be triggered. You can perform the operation in the **componentDidMount** or when you want the grid to show record.

## Perform CRUD operations

The [dataSourceChanged](https://ej2.syncfusion.com/react/documentation/api/grid/#datasourcechanged) event will be triggered for updating the grid data. You can perform the save operation based on the event arguments and call the [endEdit](https://ej2.syncfusion.com/react/documentation/api/grid/#endedit) method to indicate the completion of save operation.

```ts
import { Ajax, getValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, DataStateChangeEventArgs, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DataResult, DataSourceChangedEventArgs, Edit, Inject, Page, PageSettingsModel, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
    const orderService: OrderService = new OrderService();
    let grid: Grid | null;
    let data: any;
    const toolbarOptions: any = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editSettings: any = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const pageSettings: PageSettingsModel = { pageSize: 10 };
    const renderComplete = () => {
        if (grid && (grid.dataSource instanceof Array
            && !(grid.dataSource as object[]).length)) {
            const state = { skip: 0, take: 10 };
            dataStateChange(state);
        }
    }
    const dataStateChange = (state: DataStateChangeEventArgs) => {
        orderService.execute(state).then((gridData) => {
            if (grid) {
                grid.dataSource = gridData
            }
        });
    }
    const dataSourceChanged = (state: DataSourceChangedEventArgs): void => {
        if (state.action === 'add') {
            orderService.addRecord(state).then(() => state.endEdit());
        } else if (state.action === 'edit') {
            orderService.updateRecord(state).then(() => state.endEdit());
        } else if (state.requestType === 'delete') {
            orderService.deleteRecord(state).then(() => state.endEdit());
        }
    }
    return <div className='control-pane'>
        <div className='control-section'>
            <GridComponent dataSource={data} ref={g => grid = g} editSettings={editSettings}
                toolbar={toolbarOptions} allowPaging={true} allowSorting={true} pageSettings={pageSettings}
                allowGrouping={true} dataStateChange={dataStateChange}
                dataSourceChanged={dataSourceChanged} dataBound={renderComplete}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' />
                    <ColumnDirective field='CustomerID' headerText='Customer Name' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='120' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                </ColumnsDirective>
                <Inject services={[Page, Edit, Toolbar]} />
            </GridComponent>
        </div>
    </div>
};
export default App;


export class OrderService {
    public ajax: Ajax = new Ajax({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'GET'
    });
    private BASE_URL: string = '/api/Orders';

    public execute(state: DataStateChangeEventArgs): Promise<DataResult> {
        return this.getData(state);
    }
    public addRecord(state: DataSourceChangedEventArgs): Promise<DataResult> {
        const add: Ajax = new Ajax({
            mode: true,
            onFailure: (e: Error) => false,
            type: 'POST'
        });
        return add.send(JSON.stringify(state.data)).then((response: any) => {
            const data: any = JSON.parse(response);
            return data;
        });
    }
    public updateRecord(state: DataSourceChangedEventArgs): Promise<DataResult> {
        const update: Ajax = new Ajax({
            mode: true,
            onFailure: (e: Error) => false,
            type: 'PUT'
        });
        return update.send(JSON.stringify(state.data)).then((response: any) => {
            const data: any = JSON.parse(response);
            return data;
        });
    }
    public deleteRecord(state: DataSourceChangedEventArgs): Promise<DataResult> {
        const remove: Ajax = new Ajax({
            mode: true,
            onFailure: (e: Error) => false,
            type: 'DELETE'
        });
        return remove.send(JSON.stringify((state.data && state.data[0]))).then((response: any) => {
            const data: any = JSON.parse(response);
            return data;
        });
    }
    private getData(state: DataStateChangeEventArgs): Promise<DataResult> {
        const pageQuery = state.skip ? `$skip=${state.skip}&$top=${state.take}` : `$top=${state.take}`;
        this.ajax.url = `${this.BASE_URL}?${pageQuery}&$inlinecount=allpages&$format=json`;

        return this.ajax.send().then((response: any) => {
            const data: any = JSON.parse(response);
            return {
                count: parseInt(getValue('d.__count', data), 10),
                result: getValue('d.results', data)
            };
        });
    }
};
```

## Calculate aggregates

The footer aggregate values  should be calculated and send along with the **dataSource** property as follows. The aggregate property of the data source should contain the aggregate value assigned to the property named in the **field – type** format. For example, the **Sum** aggregate value for the **Freight** field should be assigned to the property named as **Freight - sum**.

```
{
    result: [{..}, {..}, {..}, ...],
    count: 830,
    aggregates: { 'Freight - sum' : 450,'EmployeeID - min': 1 }
}
```

> The group footer and caption aggregate values will be calculated by the Grid itself.

## Provide excel filter data source

The [dataStateChange](https://ej2.syncfusion.com/react/documentation/api/grid/#datastatechange) event will be triggered with appropriate arguments when the excel filter requests the filter choice data source. You need to resolve the excel filter data source using the **dataSource** resolver function from the state argument as follows.

```ts
import { ColumnDirective, ColumnsDirective, DataStateChangeEventArgs, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { OrderService } from './OrderService';

function App() {
    const orderService: OrderService = new OrderService();
    let grid: Grid | null;
    let data: any;
    const filterSettings: FilterSettingsModel = { type: 'Excel' };
    const pageOptions: PageSettingsModel = { pageCount: 4, pageSize: 10 };
    const renderComplete = () => {
        if (grid && (grid.dataSource instanceof Array
            && !(grid.dataSource as object[]).length)) {
            const state = { skip: 0, take: 10 };
            dataStateChange(state);
        }
    }
    const dataStateChange = (state: DataStateChangeEventArgs) => {
        if (state.action && (state.action.requestType === 'filterchoicerequest'
            || state.action.requestType === 'filtersearchbegin')) {
            orderService.execute(state).then((e) => state.dataSource && state.dataSource(e));
        } else {
            orderService.execute(state).then((gridData) => {
                if (grid) {
                    grid.dataSource = gridData
                }
            });
        }
    }
    return <div className='control-pane'>
        <div className='control-section'>
            <GridComponent dataSource={data} ref={g => grid = g} allowFiltering={true} allowPaging={true}
                pageSettings={pageOptions} dataStateChange={dataStateChange}
                dataBound={renderComplete} filterSettings={filterSettings}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' />
                    <ColumnDirective field='CustomerID' headerText='Customer Name' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='120' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                </ColumnsDirective>
                <Inject services={[Page, Filter]} />
            </GridComponent>
        </div>
    </div>
};
export default App;
```

## See Also

* [How to perform filtering, sorting operation using custom service in React Grid](https://www.syncfusion.com/forums/166390/how-to-perform-filtering-sorting-operation-using-custom-service-in-react-grid)
* [Custom binding approach to bind data in React Grid](https://www.syncfusion.com/forums/159221/custom-binding-approach-to-bind-data-in-react-grid)
* [How to customize query parameters while performing sorting and filtering in React Grid](https://www.syncfusion.com/forums/158697/how-to-customize-query-parameters-while-performing-sorting-and-filtering-in-react-grid)
* [How to bind SQL Server data in React DataGrid using SqlClient data provider](https://support.syncfusion.com/kb/article/11684/how-to-bind-sql-server-data-in-react-datagrid-using-sqlclient-data-provider)
* [How to show the spinner in React Grid while binding custom data source](https://support.syncfusion.com/kb/article/11657/how-to-show-the-spinner-in-react-grid-while-binding-custom-data-source)