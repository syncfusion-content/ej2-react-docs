---
layout: post
title: State persistence in React State persistence md component | Syncfusion
description: Learn here all about State persistence in Syncfusion React State persistence md component of Syncfusion Essential JS 2 and more.
control: State persistence 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State Persistence

Syncfusion<sup style="font-size:70%">&reg;</sup> React library has support for persisting component’s state across page refreshes or navigation. To enable this feature, set `enablePersistence` property as true to the required component.
This will store the component’s state in browser’s `localStorage` object on page `unload` event. For example, we have enabled persistence to grid component in the following code.


```ts

import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
class App extends React.Component<{}, {}>{

    render() {
        return <GridComponent dataSource={data} allowFiltering={true} allowPaging={true} enablePersistence={true} height={230}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' width='100' textAlign="right"></ColumnDirective>
                <ColumnDirective field='CustomerID' width='100'></ColumnDirective>
                <ColumnDirective field='EmployeeID' width='100' textAlign="right"></ColumnDirective>
                <ColumnDirective field='Freight' width='100' format="C2" textAlign="right"></ColumnDirective>
                <ColumnDirective field='ShipCountry' width='100'></ColumnDirective>
            </ColumnsDirective>
        </GridComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));

```