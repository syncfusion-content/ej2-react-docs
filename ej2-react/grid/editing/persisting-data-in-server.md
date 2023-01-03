---
layout: post
title: Persisting data in server in React Grid component | Syncfusion
description: Learn here all about Persisting data in server in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Persisting data in server 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Persisting data in server in React Grid component

Edited data can be persisted in the database using the RESTful web services.

All the CRUD operations in the grid are done through [`DataManager`](../../data).
The **DataManager** has an option to bind all the CRUD related data in server-side.

> For your information, the ODataAdaptor persists data in the server as per OData protocol.

To learn about how to handle the CRUD actions in server side, you can check on this video for React Grid.

{% youtube "https://www.youtube.com/watch?v=TfqwtSjnQs8" %}

In the below section, we have explained how to get the edited data details on the server-side using the [`UrlAdaptor`](../../data/adaptors/#url-adaptor).

## Using URL adaptor

You can use the [`UrlAdaptor`](../../data/adaptors/#url-adaptor) of **DataManager** when binding data source from remote data.
In the initial load of grid, data are fetched from remote data and bound to the grid using **url** property of **DataManager**.
You can map The CRUD operation in grid can be mapped to server-side Controller actions using the properties **insertUrl**, **removeUrl**, **updateUrl**, **crudUrl** and **batchUrl**.

The following code example describes the above behavior.

```typescript
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const dataManager: DataManager = new DataManager({
    adaptor: new UrlAdaptor,
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    updateUrl: "Home/Update",
    url: "Home/DataSource"
  });
  return <GridComponent dataSource={dataManager} editSettings={editOptions}
    toolbar={toolbarOptions} height={265} >
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;
```

Also, when using the **UrlAdaptor**, you need to return the data as JSON from the controller action and the JSON object must contain a property as **result** with dataSource as its value and one more property **count** with the dataSource total records count as its value.

The following code example describes the above behavior.

```typescript
public ActionResult DataSource(DataManagerRequest dm)
{
    let DataSource = OrderRepository.GetAllRecords();
    DataResult result = new DataResult();
    result.result = DataSource.Skip(dm.Skip).Take(dm.Take).ToList();
    result.count = result.result.Count;
    return Json(result, JsonRequestBehavior.AllowGet);
}

public class DataResult
{
    public List<EditableOrder> result { get; set; }
    public int count { get; set; }
}

```

### Insert record

Using the **insertUrl** property, you can specify the controller action mapping URL to perform insert operation on the server-side.

The following code example describes the above behavior.

```typescript
public ActionResult Insert(EditableOrder value)
{
    //Insert record in database
}

```

The newly added record details are bound to the **value** parameter. Please refer to the following screenshot.

![Insert](../images/insert.jpg)

### Update record

Using the **updateUrl** property, the controller action mapping URL can be specified to perform save/update operation on the server-side.

The following code example describes the previous behavior.

```typescript
public ActionResult Update(EditableOrder value)
{
    //Update record in database
}

```

The updated record details are bound to the **value** parameter. Please refer to the following screenshot.

![Update](../images/update.jpg)

### Delete record

Using the **removeUrl** property, the controller action mapping URL can be specified to perform delete operation on the server-side.

The following code example describes the previous behavior.

```typescript
public ActionResult Delete(int key)
{
    //Delete record in database
}

```

The deleted record primary key value is bound to the **key** parameter. Please refer to the following screenshot.

![Delete](../images/delete.jpg)

### CRUD URL

Using the **crudUrl** property, the controller action mapping URL can be specified to perform all the CRUD operation at server-side using a
single method instead of specifying separate controller action method for CRUD (insert, update and delete) operations.

The action parameter of **crudUrl** is used to get the corresponding CRUD action.

The following code example describes the above behavior.

```typescript
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const dataManager: DataManager = new DataManager({
    adaptor: new UrlAdaptor,
    crudUrl: "Home/CrudUpdate",
    url: "Home/DataSource"
  });
  return <GridComponent dataSource={dataManager} editSettings={editOptions}
    toolbar={toolbarOptions} height={265} >
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;
```

```typescript
public ActionResult CrudUpdate(EditableOrder value, string action)
{
    if(action == "update"){
        //Update record in database
    }
    else if (action == "insert")
    {
        //Insert record in database
    }
    else
    {
        //Delete record in database
    }
}

```

Please refer to the following screenshot to know about the action parameter.

![CRUD update](../images/crudupdate.jpg)

> If you specify `insertUrl` along with `crudUrl`, then while adding `insertUrl` only will be invoked.

### Batch URL

The **batchUrl** property supports only for batch editing mode.
You can specify the controller action mapping URL to perform batch operation on the server-side.

The following code example describes the above behavior.

```typescript
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const dataManager: DataManager = new DataManager({
    adaptor: new UrlAdaptor,
    batchUrl: "Home/BatchUpdate",
    url: "Home/DataSource"
  });
  return <GridComponent dataSource={dataManager} editSettings={editOptions}
    toolbar={toolbarOptions} height={265} >
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;
```

```typescript
public ActionResult BatchUpdate(string action, List<EditableOrder> added, List<EditableOrder> changed, List<EditableOrder> deleted, int? key)
{
//Save the batch changes in database
}
```

![Batch](../images/batch.jpg)
