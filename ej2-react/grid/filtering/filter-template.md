---
layout: post
title: Filter template in React Grid component | Syncfusion
description: Learn here all about Filter template in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Filter template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filter template in React Grid component

Filter template provides an option to use the custom filter UI for a particular column by using the [columns.filterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate) property. The custom filter UI provided by [columns.filterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate) can be used by the filter bar, menu, and advanced filter from an excel filter.

> The [columns.filterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate) property value should be a React functional component.

## Template context

The filter template should be a React Component. You can access the column information inside the component.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|--------|
| <kbd>column</kbd> | Get the current column information.|

In the below code example, we have enabled the DropDownList which is used as filter UI for **CustomerID** column based on the [columns.allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowfiltering) property.

```typescript
function App() {
  let grid: Grid | null;
  const dropdata: string[] = DataUtil.distinct(data, 'CustomerID') as string[];
  const filterTemplate = (props: any): any => {
    dropdata.push('Clear');
    /** The enabled attributes will be added based on the column property. */
    return (<DropDownListComponent enabled={props.column.allowFiltering} id={props.column.field} popupHeight='250px'
      dataSource={dropdata} change={onChange} />);
  }
  const onChange = (args: any): any => {
    if (grid) {
      if (args.value === 'Clear') {
        grid.clearFiltering();
      } else {
        grid.filterByColumn('CustomerID', 'equal', args.value);
      }
    }
  }
  return <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} >
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign="Right" />
      <ColumnDirective field='EmployeeID' headerText='EmployeeID' width='140' textAlign="Right" />
      <ColumnDirective field='CustomerID' allowFiltering={false} filterTemplate={filterTemplate} width='140' />
      <ColumnDirective field='ShipName' width='170' textAlign="Right" />
    </ColumnsDirective>
    <Inject services={[Filter]} />
  </GridComponent>
};
export default App;
```
