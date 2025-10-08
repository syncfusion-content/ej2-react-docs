---
layout: post
title: Filter menu in React TreeGrid component | Syncfusion
description: Learn here all about Filter menu in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Filter menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in React TreeGrid

Enable the filter menu by setting [filterSettings.type](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettingsModel/#type) to `Menu`. The menu UI adapts to the column type and provides operator-based filtering.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs6" %}

> * [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowfiltering) must be set to true.
> * Setting [columns.allowFiltering](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#allowfiltering) to false disables the filter menu for that column.

## Custom component in filter menu

Customize a column’s filter menu input using a `filterTemplate`.

The following example demonstrates the way to use filter template for a column when using filter menu. In the following example, the DropdownList component is used to filter **duration** column using **filterTemplate**.

```ts
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, Filter, FilterSettingsModel } from '@syncfusion/ej2-react-treegrid';
import { Inject, TreeGrid, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';

import { sampleData } from './datasource';

function App() {
    let treegrid: TreeGridComponent | null;
    const FilterOptions: FilterSettingsModel = {
        type: 'Menu'
    };
    const templateOptions = (props:any): any => {
        const dataSource: number[] = [1,3,4,5,6,8,9];
        return (<DropDownListComponent id={props.column.field} popupHeight='250px' dataSource={dataSource} /> );
    }

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} filterSettings={FilterOptions} childMapping='subtasks' height='275' allowFiltering={true} ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='75' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' filterTemplate={templateOptions} />
        </ColumnsDirective>
        <Inject services={[Filter]}/>
    </TreeGridComponent>
};
export default App;
```

## Enable different filter dialog for a column

Both **Menu** and **Excel** filtering can be used in the same TreeGrid. Set [column.filter.type](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#filter) to **Menu** or **Excel** per column.

In the following sample, Menu filtering is enabled globally, and Excel filtering is applied to the **Task Name** column using [column.filter.type](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#filter).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs7" %}