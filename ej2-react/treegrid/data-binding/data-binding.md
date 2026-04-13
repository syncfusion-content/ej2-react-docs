---
layout: post
title: Data binding in React TreeGrid | Syncfusion
description: Learn about Data binding in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React TreeGrid

The TreeGrid uses the **DataManager**, which supports both RESTful JSON data service binding and local JavaScript object array binding. The [dataSource](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datasource/) property can be assigned an instance of [DataManager](https://ej2.syncfusion.com/documentation/data/data-binding/) or a JavaScript object array.

It supports two kinds of data binding methods:
* Local data
* Remote data

To get started quickly with data binding, watch this video:

{% youtube "https://www.youtube.com/watch?v=6XtJbCG8wAU" %}

## Binding with ajax

Use the TreeGrid [dataSource](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datasource) property to bind data returned from an external Fetch request. In the following example, data is fetched from the server using Fetch and then provided to the [dataSource](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datasource) property by using `onSuccess` event of the Fetch.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/data-binding-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/data-binding-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs1" %}

> When data is bound using this approach, it is treated as a local datasource in the TreeGrid. Server-side CRUD operations are not performed automatically.

## Handling expandStateMapping

To denote the expanded state of a parent row, define the TreeGrid [expandStateMapping](https://ej2.syncfusion.com/react/documentation/api/treegrid/#expandstatemapping) property.

The `expandStateMapping` property maps to a field in the datasource that indicates whether a parent record is expanded or collapsed and this is useful to renders parent row in expanded or collapsed state based on this mapping property value in datasource.

```ts

import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';


function App() {

    const dataManager: DataManager = new DataManager({
        adaptor: new UrlAdaptor,
        url: "Home/DataSource",
    });
    return <TreeGridComponent dataSource={dataManager} treeColumnIndex={1} idMapping= 'TaskID'
    parentIdMapping='ParentValue' hasChildMapping='isParent' expandStateMapping='IsExpanded'  height='400'>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='TaskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='Duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
    </TreeGridComponent>
};
export default App;

```

The following example defines the `expandStateMapping` property on the server:

```ts

public ActionResult ExpandStateMapping()
{
  return View();
}

public class TreeData
{
    public static List<TreeData> tree = new List<TreeData>();
    [System.ComponentModel.DataAnnotations.Key]
    public int TaskID { get; set; }
    public string TaskName { get; set; }

    public int Duration { get; set; }
    public int? ParentValue { get; set; }
    public bool? isParent { get; set; }

    public bool IsExpanded { get; set; }
    public TreeData() { }
    public static List<TreeData> GetTree()
    {
        if (tree.Count == 0)
        {
            int root = 0;
            for (var t = 1; t <= 500; t++)
            {
                Random ran = new Random();
                string math = (ran.Next() % 3) == 0 ? "High" : (ran.Next() % 2) == 0 ? "Release Breaker" : "Critical";
                string progr = (ran.Next() % 3) == 0 ? "Started" : (ran.Next() % 2) == 0 ? "Open" : "In Progress";
                root++;
                int rootItem = root;
                tree.Add(new TreeData() { TaskID = rootItem, TaskName = "Parent task " + rootItem.ToString(), isParent = true, IsExpanded = false, ParentValue = null, Duration = ran.Next(1, 50) });
                int parent = root;
                for (var d = 0; d < 1; d++)
                {
                    root++;
                    string value = ((parent + 1) % 3 == 0) ? "Low" : "Critical";
                    int par = parent + 1;
                    progr = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                    int iD = root;
                    tree.Add(new TreeData() { TaskID = iD, TaskName = "Child task " + iD.ToString(), isParent = true, IsExpanded = false, ParentValue = rootItem, Duration = ran.Next(1, 50) });
                    int subparent = root;
                    for (var c = 0; c < 500; c++)
                    {
                        root++;
                        string val = ((subparent + c + 1) % 3) == 0 ? "Low" : "Critical";
                        int subchild = subparent + c + 1;
                        string progress = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                        int childID = root ;
                        tree.Add(new TreeData() { TaskID = childID, TaskName = "sub Child task " + childID.ToString(), isParent = false, IsExpanded = false, ParentValue = subparent, Duration = ran.Next(1, 50) });
                    }
                }
            }
        }
        return tree;
    }
}

```

## Custom binding

Data processing can be handled externally and the result bound to the TreeGrid. This allows providing custom data logic. The TreeGrid expects the result of the custom logic to be an object containing the properties `result` and `count`.

> In this context, Fetch from the @syncfusion/ej2-base library is used for remote interaction. Any HTTP client can be used.

```ts

import React, { Component } from 'react';

import { Fetch, getValue } from '@syncfusion/ej2-base';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, Sort, PageSettingsModel, EditSettingsModel, DataStateChangeEventArgs } from '@syncfusion/ej2-react-treegrid';
import { DataResult } from '@syncfusion/ej2-data';

function App() {

  const fetch: Fetch = new Fetch({
      mode: true,
      onFailure: (e: Error) => false,
      type: 'GET'
  });


  /// this url is just a test url, provide the required url for fetching the data from server.
  const BASE_URL: string = 'http://localhost:51473/api/Tasks';

  const execute = (state: DataStateChangeEventArgs): Promise<DataResult> => {
      return getData(state);
  }

  const getData = (state: DataStateChangeEventArgs): Promise<DataResult> => {
      const pageQuery = `$skip=${state.skip}&$top=${state.take}`;

      /// filter query for fetching only the root level records
      const treegridQuery = "$filter='ParentId eq null'";

      fetch.url = `${BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`;

      return fetch.send().then((response: any) => {
          const data: any = response;
          return {
              count:  parseInt(getValue('d.__count', data), 10),
              result: getValue('d.results', data)
          };
      });
  }

  let treegridObj: TreeGridComponent | null | undefined;
  const pageSettings: PageSettingsModel = { pageSize: 2, pageSizeMode: 'Root' };
  const editSettings: EditSettingsModel = { allowAdding: true, allowDeleting:true, allowEditing: true, mode: 'Row' };

  const getDataSource = () => {
    if(treegridObj && (treegridObj.dataSource instanceof Array
      && !(treegridObj.dataSource as object[]).length)) {
      const state = { skip: 0, take: 2 };  /// take value should always be equal to the pageSize of  TreeGrid
      dataStateChange(state);
  }
  }

  const dataStateChange = (state : any): void => {
    execute(state).then(( treedata ) => {
      if(treegridObj) {
        treegridObj.dataSource = treedata
      }
    });
  }

  return (
    <div className="App">
      <TreeGridComponent dataSource={[]} dataBound={getDataSource}
        ref={treegrid => treegridObj = treegrid} hasChildMapping='isParent'
                          dataStateChange={dataStateChange} id="TreeGrid" idMapping='TaskId' parentIdMapping='ParentId' allowPaging={true} treeColumnIndex={1} pageSettings={pageSettings} editSettings={editSettings} >
        <ColumnsDirective>
          <ColumnDirective field='TaskId' headerText='ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='Task Name' headerText='Name' width='160'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
          <ColumnDirective field='Progress' headerText='Progress' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page, Edit, Sort]} />
      </TreeGridComponent>
    </div>
  );
}

export default App;

```

> Limitation: The Custom Binding feature works only for self-referential data binding with `pageSizeMode` set to `Root`.

### Handling child data

Using the custom binding feature, child data can be loaded for a parent record according to custom logic. When a parent record is expanded, the [dataStateChange](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datastatechange) event is triggered. Assign the child data to the `childData` property of the `dataStateChange` event arguments. After assigning the child data, call the `childDataBind` method from the `dataStateChange` event arguments to indicate that the data is bound.

> In this context, only parent records are assigned to the TreeGrid initially. The required child records are fetched in the `dataStateChange` event.

```ts

import React, { Component } from 'react';

import { Fetch, getValue } from '@syncfusion/ej2-base';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, Sort, PageSettingsModel, EditSettingsModel, DataStateChangeEventArgs } from '@syncfusion/ej2-react-treegrid';
import { DataResult } from '@syncfusion/ej2-data';

function App() {

  const fetch: Fetch = new Fetch({
      mode: true,
      onFailure: (e: Error) => false,
      type: 'GET'
  });
  const BASE_URL: string = 'http://localhost:51473/api/Tasks';

  const execute = (state: DataStateChangeEventArgs): Promise<DataResult> => {
    if (state.requestType === 'expand') {
      return getChildData(state);
    }
    else {
      return getData(state);
    }
  }

  const getData = (state: DataStateChangeEventArgs): Promise<DataResult> => {
      const pageQuery = `$skip=${state.skip}&$top=${state.take}`;

      /// filter query for fetching only the root level records
      const treegridQuery = "$filter='ParentId eq null'";

      fetch.url = `${BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`;

      return fetch.send().then((response: any) => {
          const data: any = response;
          return {
              count:  parseInt(getValue('d.__count', data), 10),
              result: getValue('d.results', data)
          };
      });
  }

  const getChildData = (state: DataStateChangeEventArgs): Promise<DataResult> => {
    let expandQuery: any;
    if(state.requestType === 'expand') {

      /// filter query for fetching the respective child records
      expandQuery = `$filter=${'ParentId eq ' + getValue('TaskId', state.data)}`;
    }

    fetch.url = `${BASE_URL}?&${expandQuery}&$inlinecount=allpages&$format=json`;

    return fetch.send().then((response: any) => {
        const data: any = response;
        return data;
    });
}

  let treegridObj: TreeGridComponent | null;
  const pageSettings: PageSettingsModel = { pageSize: 4, pageSizeMode: 'Root' };
  const editSettings: EditSettingsModel = { allowAdding: true, allowDeleting:true, allowEditing: true, mode: 'Row' };

  const getDatasource = (): void => {
    if(treegridObj && (treegridObj.dataSource instanceof Array
      && !(treegridObj.dataSource as object[]).length)) {
      const state = { skip: 0, take: 4 }; /// take value should always be equal to the pageSize of TreeGrid
      dataStateChange(state);
  }
  }

  const dataStateChange = (state : any): void => {
    if(state.requestType === 'expand'){
      execute(state).then((childData: any) => {
          state.childData = childData;
          state.childDataBind();
      });
    } else {
      execute(state).then(( treedata ) => {
        if(treegridObj) {
          treegridObj.dataSource = treedata
        }
      });
    }
  }

  return (
    <div className="App">
      <TreeGridComponent dataSource={[]} dataBound={getDatasource}
      ref={treegrid => treegridObj = treegrid} hasChildMapping='isParent'
                          dataStateChange={dataStateChange} id="TreeGrid" idMapping='TaskId' parentIdMapping='ParentId' allowPaging={true} treeColumnIndex={1} pageSettings={pageSettings} editSettings={editSettings} >
        <ColumnsDirective>
          <ColumnDirective field='TaskId' headerText='ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='Task Name' headerText='Name' width='160'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
          <ColumnDirective field='Progress' headerText='Progress' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page, Edit, Sort]} />
      </TreeGridComponent>
    </div>
  );
}

export default App;

```

### Handling TreeGrid actions

For TreeGrid actions such as paging and sorting, the `dataStateChange` event is invoked. Query and resolve data in this event using Fetch based on the state arguments.

```ts

import React, { Component } from 'react';

import { Fetch, getValue } from '@syncfusion/ej2-base';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, Sort, PageSettingsModel, EditSettingsModel, DataStateChangeEventArgs } from '@syncfusion/ej2-react-treegrid';
import { DataResult } from '@syncfusion/ej2-data';

function App() {

  const fetch: Fetch = new Fetch({
      mode: true,
      onFailure: (e: Error) => false,
      type: 'GET'
  });
  const BASE_URL: string = 'http://localhost:51473/api/Tasks';

  const execute = (state: DataStateChangeEventArgs): Promise<DataResult> => {
      return getData(state);
  }

  const getData = (state: DataStateChangeEventArgs): Promise<DataResult> => {
      const pageQuery = `$skip=${state.skip}&$top=${state.take}`;

      /// filter query for fetching only the root level records
      const treegridQuery = "$filter='ParentId eq null'";

      let sortQuery: string = '';
  
      if (state && (state.sorted || []).length) {
        sortQuery = `&$orderby=` + ((state).sorted as Sorts[]).map((obj: Sorts) => {
            return obj.direction === 'descending' ? `${obj.name} desc` : obj.name;
        }).reverse().join(',');
      }

      fetch.url = `${BASE_URL}?${pageQuery}&${treegridQuery}&${sortQuery}&$inlinecount=allpages&$format=json`;

      return fetch.send().then((response: any) => {
          const data: any = response;
          return {
              count:  parseInt(getValue('d.__count', data), 10),
              result: getValue('d.results', data)
          };
      });
  }

  let treegridObj: TreeGridComponent | null;
  const pageSettings: PageSettingsModel = { pageSize: 2, pageSizeMode: 'Root' };
  const editSettings: EditSettingsModel = { allowAdding: true, allowDeleting:true, allowEditing: true, mode: 'Row' };

  const getDataSource = (): void => {
    if(treegridObj && (treegridObj.dataSource instanceof Array
      && !(treegridObj.dataSource as object[]).length)) {
      const state = { skip: 0, take: 2 }; /// take value should always be equal to the pageSize of   TreeGrid
      dataStateChange(state);
  }
  }

  const dataStateChange = (state : any): void => {
    execute(state).then(( treedata ) => {
      if(treegridObj) {
        treegridObj.dataSource = treedata
      }
    });
  }

  return (
    <div className="App">
      <TreeGridComponent dataSource={[]} dataBound={getDataSource}
      ref={treegrid => treegridObj = treegrid} hasChildMapping='isParent'
                          dataStateChange={dataStateChange} id="TreeGrid" idMapping='TaskId' parentIdMapping='ParentId' allowPaging={true} treeColumnIndex={1} pageSettings={pageSettings} editSettings={editSettings} >
        <ColumnsDirective>
          <ColumnDirective field='TaskId' headerText='ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='Task Name' headerText='Name' width='160'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
          <ColumnDirective field='Progress' headerText='Progress' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page, Edit, Sort]} />
      </TreeGridComponent>
    </div>
  );
}

export default App;

```

### Performing CRUD actions

The [dataSourceChanged](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datasourcechanged) event is triggered when the grid data is updated. Perform the save operation based on the event arguments and call the `endEdit` method to indicate completion.

```ts

import * as React from 'react';

import { Fetch, getValue } from '@syncfusion/ej2-base';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, Sort, PageSettingsModel, EditSettingsModel, DataStateChangeEventArgs } from '@syncfusion/ej2-react-treegrid';
import { DataResult } from '@syncfusion/ej2-data';
import * as ReactDOM from 'react-dom';
import { DataSourceChangedEventArgs } from '@syncfusion/ej2-grids';

function App() {

    const fetch: Fetch = new Fetch({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'GET'
    });
    let BASE_URL: string = 'http://localhost:51473/api/Tasks';
  
    const execute = (state: DataStateChangeEventArgs): Promise<DataResult> => {
      if (state.requestType === 'expand') {
        return getChildData(state);
      } else {
        return getData(state);
      }
    }
  
    const getData = (state: DataStateChangeEventArgs): Promise<DataResult> => {
        const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
  
        /// filter query for fetching only the root level records
        const treegridQuery = "$filter='ParentId eq null'";
  
        fetch.url = `${BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`;
  
        return fetch.send().then((response: any) => {
            const data: any = response;
            return {
                count:  parseInt(getValue('d.__count', data), 10),
                result: getValue('d.results', data)
            };
        });
    }
  
    const getChildData = (state: DataStateChangeEventArgs): Promise<DataResult> => {
          let expandQuery: any;
          if(state.requestType === 'expand') {
          expandQuery = `$filter=${'ParentId eq ' + getValue('TaskId', state.data)}`;
          }
          fetch.url = `${BASE_URL}?&${expandQuery}&$inlinecount=allpages&$format=json`;
  
          return fetch.send().then((response: any) => {
              const data: any = response;
              return data;
          });
      }
  
      const addRecord = (state: DataSourceChangedEventArgs) : Promise<DataResult> => {
          const add: Fetch = new Fetch({
              mode: true,
              onFailure: (e: Error) => false,
              type: 'POST'
          });
          return add.send(JSON.stringify(state.data)).then((response: any) => {
              const data: any = response;
              return data;
          });
      }
      const updateRecord = (state: DataSourceChangedEventArgs) : Promise<DataResult> => {
          const update: Fetch = new Fetch({
              mode: true,
              onFailure: (e: Error) => false,
              type: 'PUT'
          });
          return update.send(JSON.stringify(state.data)).then((response: any) => {
              const data: any = response;
              return data;
          });
      }
      const deleteRecord = (state: any) : Promise<DataResult> => {
          const remove: Fetch = new Fetch({
              mode: true,
              onFailure: (e: Error) => false,
              type: 'DELETE'
          });
          return remove.send(JSON.stringify((state.data && state.data[0]))).then((response: any) => {
              const data: any = response;
              return data;
          });
      }

  let treegridObj: TreeGridComponent | null | undefined;
  const pageSettings: PageSettingsModel = { pageSize: 4, pageSizeMode: 'Root' };
  const editSettings: EditSettingsModel = { allowAdding: true, allowDeleting:true, allowEditing: true, mode: 'Row' };

  const getDataSource = (): void => {
    if(treegridObj && (treegridObj.dataSource instanceof Array
      && !(treegridObj.dataSource as object[]).length)) {
      const state = { skip: 0, take: 4 }; /// take value should always be equal to the pageSize of   TreeGrid
      dataStateChange(state);
  }
  }

  const dataStateChange = (state : any): void => {
    if (state.requestType === 'expand') {
      execute(state).then((childData: any) => {
          state.childData  = childData;
          state.childDataBind();
      });
    } else {
      execute(state).then(( treedata ) => {
        if(treegridObj) {
          treegridObj.dataSource = treedata;
        }
      });
    }
  }

  const dataSourceChanged = (state: any) => {
    if (state.action === 'add') {
        addRecord(state).then(() => state.endEdit());
      } else if (state.action === 'edit') {
        updateRecord(state).then(() => state.endEdit());
      } else if (state.requestType === 'delete') {
        deleteRecord(state).then(() => state.endEdit());
      }
  }

  return (
    <div className="App">
      <TreeGridComponent dataSource={[]} dataBound={getDataSource} ref={treegrid => treegridObj = treegrid} dataSourceChanged={dataSourceChanged} dataStateChange={dataStateChange} id="TreeGrid" idMapping='TaskId' parentIdMapping='ParentId' allowPaging={true} treeColumnIndex={1} pageSettings={pageSettings} editSettings={editSettings} hasChildMapping='isParent'>
        <ColumnsDirective>
          <ColumnDirective field='TaskId' headerText='ID' width='70' textAlign='Right' isPrimaryKey={true}/>
          <ColumnDirective field='Task Name' headerText='Name' width='160'/>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
          <ColumnDirective field='Progress' headerText='Progress' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page, Edit, Sort]} />
      </TreeGridComponent>
    </div>
  );
}

export default App;

```

### Calculate aggregates

Footer aggregate values should be calculated and sent along with the `dataSource` result. The `aggregates` property of the datasource response should contain aggregate values using the naming pattern `field - type`. For example, assign the **Sum** aggregate value for the **Duration** field to the property `Duration - sum`.

```
{
    result: [{..}, {..}, {..}, ...],
    count: 830,
    aggregates: { 'Freight - sum' : 450,'EmployeeID - min': 1 }
}
```

### Provide excel filter datasource

The [dataStateChange](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datastatechange) event is triggered with appropriate arguments when the Excel filter requests filter choice data. Resolve the Excel filter data by calling the `dataSource` resolver function from the state arguments, as shown below.

```ts

import React, { Component } from 'react';

import { Fetch, getValue } from '@syncfusion/ej2-base';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, Sort, PageSettingsModel, EditSettingsModel, FilterSettingsModel, DataStateChangeEventArgs } from '@syncfusion/ej2-react-treegrid';
import { DataResult } from '@syncfusion/ej2-data';

function App() {

  const fetch: Fetch = new Fetch({
      mode: true,
      onFailure: (e: Error) => false,
      type: 'GET'
  });


  /// this url is just a test url, provide the required url for fetching the data from server.
  const BASE_URL: string = 'http://localhost:51473/api/Tasks';

  const execute = (state: DataStateChangeEventArgs): Promise<DataResult> => {
      return getData(state);
  }

  const getData = (state: DataStateChangeEventArgs): Promise<DataResult> => {
      const pageQuery = `$skip=${state.skip}&$top=${state.take}`;

      /// filter query for fetching only the root level records
      const treegridQuery = "$filter='ParentId eq null'";

      fetch.url = `${BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`;

      return fetch.send().then((response: any) => {
          const data: any = response;
          return {
              count:  parseInt(getValue('d.__count', data), 10),
              result: getValue('d.results', data)
          };
      });
  }

  let treegridObj: TreeGridComponent | null ;
  const pageSettings: PageSettingsModel = { pageSize: 2, pageSizeMode: 'Root' };
  const filterSettings: FilterSettingsModel = { type: 'Excel' };
  const editSettings: EditSettingsModel = { allowAdding: true, allowDeleting:true, allowEditing: true, mode: 'Row' };

  const getDataSource = (): void => {
    if(treegridObj && (treegridObj.dataSource instanceof Array
      && !(treegridObj.dataSource as object[]).length)) {
      const state = { skip: 0, take: 2 };  /// take value should always be equal to the pageSize of  TreeGrid
      dataStateChange(state);
  }
  }

  const dataStateChange = (state : any): void => {
    if (state.action && (state.action.requestType === 'filterchoicerequest'
            || state.action.requestType ==='filtersearchbegin')) {
          execute(state).then((e) => state.dataSource && state.dataSource(e.result));
        }
   else {
      execute(state).then(( treedata ) => {
      if(treegridObj) {
        treegridObj.dataSource = treedata;
      }
    });
  }
  }

  return (
    <div className="App">
      <TreeGridComponent dataSource={[]} dataBound={getDataSource}
      ref={treegrid => treegridObj = treegrid} hasChildMapping='isParent'
                          dataStateChange={dataStateChange} id="TreeGrid" idMapping='TaskId' parentIdMapping='ParentId' allowPaging={true} treeColumnIndex={1} pageSettings={pageSettings} editSettings={editSettings} >
        <ColumnsDirective>
          <ColumnDirective field='TaskId' headerText='ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='Task Name' headerText='Name' width='160'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
          <ColumnDirective field='Progress' headerText='Progress' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page, Edit, Sort]} />
      </TreeGridComponent>
    </div>
  );
}

export default App;

```
## Refresh the datasource

Refreshing the datasource in a Syncfusion TreeGrid updates the data displayed dynamically. This operation reflects changes in the underlying data without reloading the entire page or component.

Records can be added or deleted through an external button. To reflect these changes in the TreeGrid, assign the modified data to the `dataSource` property.

**Steps to refresh the TreeGrid after datasource changes:**

**Step 1: Modify the datasource**

Add or delete records from the datasource using the following code:

```ts

    const dataSource: object = extendArray(treegridObj.dataSource as object[]);

    // Added a new record.
    (dataSource as object[]).unshift({ TaskID: 99, TaskName: "New Data", StartDate: new Date('02/03/2017'), Duration: 10 });

    // Delete a record.
    (dataSource as object[]).splice(selectedRow, 1);

```

**Step 2: Refresh the TreeGrid**

Assign the modified data to the `dataSource` property to refresh the TreeGrid.

```ts
    treegridObj.dataSource = dataSource; // Refresh the TreeGrid.
```

The following example demonstrates how to add and delete records from the datasource using an external button:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs8" %}

> Refer to our [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for key feature highlights. Explore our [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.