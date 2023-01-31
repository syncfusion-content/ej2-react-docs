---
layout: post
title: Filter menu in React Treegrid component | Syncfusion
description: Learn here all about Filter menu in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Filter menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in React Treegrid component

You can enable filter menu by setting the [`filterSettings.type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettingsModel/#type) as *Menu*. The filter menu UI will be rendered based on its column type, which allows you to filter data. You can filter the records with different operators.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs6" %}

> * [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowfiltering) must be set as true to enable filter menu.
> * Setting [`columns.allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#allowfiltering) as false will prevent filter menu rendering for a particular column.

## Custom component in filter menu

You can customize default filter menu component of a column by custom component using **filterTemplate**.

The following example demonstrates the way to use filter template for a column when using filter menu. In the following example, the DropdownList component is used to filter **duration** column using **filterTemplate**.



```ts
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, Filter, FilterSettingsModel } from '@syncfusion/ej2-react-treegrid';
import { Inject, TreeGrid, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
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

You can use both *Menu* and *Excel* filter in a same TreeGrid. To do so, set the [`column.filter.type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#filter) as *Menu* or *Excel*.

In the following sample menu filter is enabled by default and excel filter is enabled for the Task Name column using the [`column.filter.type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#filter).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs7" %}