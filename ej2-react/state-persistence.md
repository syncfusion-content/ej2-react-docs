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

Syncfusion<sup style="font-size:70%">&reg;</sup> React library supports maintaining a component’s state across page refreshes or navigation. By setting the `enablePersistence` property to `true` on a component, its state is stored in the browser’s `localStorage` during the page `unload` event. This ensures that user settings and configurations are retained when the page is revisited.

Below is an example demonstrating how to enable state persistence on the Grid component:

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