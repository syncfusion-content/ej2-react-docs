---
layout: post
title: Hide the expand collapse icon in parent row in React Grid component | Syncfusion
description: Learn here all about Hide the expand collapse icon in parent row in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Hide the expand collapse icon in parent row 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Hide the expand collapse icon in parent row in React Grid component

By default, the expand/collapse icon will be visible even if the child grid is empty.

You can use [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#rowdatabound) event to hide the icon when there is no record in child grid.

To hide the expand/collapse icon in parent row with no record in child grid, follow the given steps:

**Step 1**:

Create CSS class with custom style to override the default style of Grid.

```css
    .e-row[aria-selected="true"] .e-customizedExpandcell {
        background-color: #e0e0e0;
    }

    .e-grid.e-gridhover tr[role='row']:hover {
        background-color: #eee;
    }

```

**Step 2**:

Add the CSS class to the Grid in the [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#rowdatabound) event handler of Grid.

```ts
   const rowDataBound = (args:any): void => {
    if (grid) {
      const filter:string = args.data.EmployeeID;
      const childrecord: object[] = new DataManager(grid.childGrid.dataSource as object[])
        .executeLocal(new Query().where("EmployeeID", "equal", parseInt(filter, 0), true));
      if(childrecord.length === 0) {
        // here hide which parent row has no child records
        args.row.querySelector('td').innerHTML=" ";
        args.row.querySelector('td').className = "e-customizedExpandcell";
      }
    }
  }

```

In the below demo, the expand/collapse icon in the row with *EmployeeID* as *1* is hidden as it does not have record in child Grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/customizedialog-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/customizedialog-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/customizedialog-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/customizedialog-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/customizedialog-cs7" %}
