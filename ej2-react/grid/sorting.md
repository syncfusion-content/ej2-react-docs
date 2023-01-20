---
layout: post
title: Sorting in React Grid component | Syncfusion
description: Learn here all about Sorting in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Sorting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in React Grid component

The Grid component has support to sort data bound columns in **Ascending** or **Descending** order.
This can be achieved by setting [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowsorting) property as true.

To dynamically sort a particular column, click on its column header.
The order switch between **Ascending** and **Descending** each time you click a column header for sorting.

To use Sorting, inject **Sort** module in Grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs1" %}

> * Grid column sorted in **Ascending** order. If you click on already sorted column, Grid toggles the sort direction.
> * You can apply and clear sorting by invoking [`sortColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/#sortcolumn) and [`clearSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#clearsorting) methods.
> * To disable Sorting for a particular column, by specifying [`columns.allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowsorting) to **false**.

## Initial Sort

To apply sort at initial rendering, set the [`field`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel/#field) and [`direction`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel/#direction) in [`sortSettings.columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortSettingsModel/#columns).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs2" %}

## Multi-column sorting

You can sort more than one column in a Grid. To sort multiple columns, press and hold the **CTRL** key and click the column header. The sorting order will be displayed in the header while performing multi-column sorting.

To clear sorting for a particular column, press the **Shift + mouse left click**.

> The [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowsorting) must be true while enabling multi-column sort.
> Set [`allowMultiSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowmultisorting) property as **false** to disable multi-column sorting.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs3" %}

## Sort order

By default, the sorting order will be as **ascending -> descending -> none**.

When first click a column header it sorts the column in ascending. Again click the same column header, it will sort the column in descending. A repetitive third click on the same column header will clear the sorting.

## Sort foreign key column based on Text

For local data in Grid, sorting will be performed based on the [`foreignKeyValue`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyvalue).

For remote data in Grid, sorting will be performed based on the [`foreignKeyField`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyfield), we need to handle the sorting operation at the server side.

```ts
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, ForeignKey, GridComponent, Inject, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
  const data = new DataManager({
    adaptor: new ODataV4Adaptor,
    url: '/OData/Items'
  });
  const employeeData = new DataManager({
    adaptor: new ODataV4Adaptor,
    url: '/OData/Brands'
  });
  return <GridComponent dataSource={data} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='EmployeeID' foreignKeyValue='FirstName'
        foreignKeyField='EmployeeID' dataSource={employeeData} headerText='Employee Name' width='150' />
      <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
    </ColumnsDirective>
    <Inject services={[ForeignKey, Sort]} />
  </GridComponent>
};
export default App;
```

The following code example describes the handling of sorting operation at the server side.

```cs
    public class ItemsController : ODataController
    {
        [EnableQuery]
        public IQueryable<Item> Get()
        {
            List<Item> GridData = JsonConvert.DeserializeObject<Item[]>(Properties.Resources.ItemsJson).AsQueryable().ToList();
            List<Brand> empData = JsonConvert.DeserializeObject<Brand[]>(Properties.Resources.BrandsJson).AsQueryable().ToList();
            let queryString = HttpContext.Current.Request.QueryString;
            let allUrlKeyValues = ControllerContext.Request.GetQueryNameValuePairs();
            string key = allUrlKeyValues.LastOrDefault(x => x.Key == "$orderby").Value;
            if (key != null)
            {
                if (key == "EmployeeID") {
                    GridData = SortFor(key); //Only for foreignKey Column ascending
                }
                else if(key == "EmployeeID desc") {
                    GridData = SortFor(key); //Only for foreignKey Column descending
                }
            }
            let count = GridData.Count();
            let data = GridData.AsQueryable();
            return data;
        }

        public List<Item> SortFor(String Sorted)
        {
            List<Item> GridData = JsonConvert.DeserializeObject<Item[]>(Properties.Resources.ItemsJson).AsQueryable().ToList();
            List<Brand> empData = JsonConvert.DeserializeObject<Brand[]>(Properties.Resources.BrandsJson).AsQueryable().ToList();
            if (Sorted == "EmployeeID") //check whether ascending or descending
                empData = empData.OrderBy(e => e.FirstName).ToList();
            else if(Sorted == "EmployeeID desc")
                empData = empData.OrderByDescending(e => e.FirstName).ToList();
            List<Item> or = new List<Item>();
            for (int i = 0; i < empData.Count(); i++) {
                //Select the Field matching records
                IEnumerable<Item> list = GridData.Where(pred => pred.EmployeeID == empData[i].EmployeeID).ToList();
                or.AddRange(list);
            }
            return or;
        }
    }
```

## Sorting Events

During the sort action, the Grid component triggers two events. [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event triggers before the sort action starts, and [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event triggers after the sort action complete. Using these events you can perform the needed actions.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs4" %}

> [`args.requestType`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs/#requesttype) retrieves the current action name.
For example in sorting, the [`args.requestType`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs/#requesttype) value is **sorting**.

## Custom sort comparer

You can customize the default sort action for a column by defining the [`column.sortComparer`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#sortcomparer) property.
The sort comparer function has the same functionality like [`Array.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) sort comparer.

In the following example, custom sort comparer function was defined in the **Customer ID** column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs5" %}

> The sort comparer function will work only for the local data.

## Touch Interaction

When you tap the grid header on touchscreen devices, the selected column header is sorted. A popup ![Sorting](images/sorting.jpg) is displayed for multi-column sorting.
To sort multiple columns, tap the popup![Multi Sorting](images/msorting.jpg), and then tap the desired grid headers.

The [`allowMultiSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowmultisorting) and [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowsorting) should be **true** then only the popup will be shown.

The following screenshot shows grid touch sorting.

![Touch Interaction](images/touch-sorting.jpg)
