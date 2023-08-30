---
layout: post
title: Data binding in React Treegrid component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React Treegrid component

The TreeGrid uses **DataManager**, which supports both RESTful JSON data services binding and local JavaScript object array binding. The [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#dataSource) property can be assigned either with the instance of [`DataManager`](https://ej2.syncfusion.com/documentation/data/data-binding/) or JavaScript object array collection.
It supports two kinds of data binding method:
* Local data
* Remote data

To get start quickly with Data Binding, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=6XtJbCG8wAU" %}

## Binding with ajax

You can use TreeGrid [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datasource) property to bind the data source to TreeGrid from external Ajax request. In the below code we have fetched the data source from the server with the help of Ajax request and provided that to [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datasource) property by using `onSuccess` event of the Ajax.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/data-binding-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/data-binding-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs1" %}

> If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.

## Handling expandStateMapping

To denotes the expand status of parent row, define the [`expandStateMapping`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#expandstatemapping) property of tree grid.

The `expandStateMapping` property maps the field name in data source, that denotes whether parent record is in expanded or collapsed state and this is useful to renders parent row in expanded or collapsed state based on this mapping property value in data source.

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

The following code example defines `expandStateMapping` property at server end.

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
                        string val = ((subparent + c + 1) % 3 == 0) ? "Low" : "Critical";
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

It is possible to handle data processing externally and bind the result to the TreeGrid. This helps you to provide your own custom data logic. TreeGrid expects an object as the result of the custom logic and the emitted value should be an object with properties result and count.

>In this context, we are going to use Ajax from our @syncfusion/ej2-base library for handling remote interaction, you can choose any HTTP client as per your choice.

```ts

import React, { Component } from 'react';

import { Ajax, getValue } from '@syncfusion/ej2-base';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, Sort, PageSettingsModel, EditSettingsModel, DataStateChangeEventArgs } from '@syncfusion/ej2-react-treegrid';
import { DataResult } from '@syncfusion/ej2-data';

function App() {

  const ajax: Ajax = new Ajax({
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

      ajax.url = `${BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`;

      return ajax.send().then((response: any) => {
          const data: any = JSON.parse(response);
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

> We have a limitation for Custom Binding feature of TreeGrid. This feature works only for Self Referential data binding with `pageSizeMode` as `Root`.

### Handling child data

Using the custom binding feature you can bind the child data for a parent record as per your custom logic. When a parent record is expanded, [`dataStateChange`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datastatechange) event is triggered in which you can assign your custom data to the `childData` property of the `dataStateChange`](../../api/treegrid/#datastatechange) event arguments.After assigning the child data, `childDataBind` method should be called from the[`dataStateChange`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datastatechange) event arguments to indicate that the data is bound.

> In this context, initially we have assigned only the parent records to the treegrid dataSource and fetched the required child records in the [`dataStateChange`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datastatechange) event.

```ts

import React, { Component } from 'react';

import { Ajax, getValue } from '@syncfusion/ej2-base';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, Sort, PageSettingsModel, EditSettingsModel, DataStateChangeEventArgs } from '@syncfusion/ej2-react-treegrid';
import { DataResult } from '@syncfusion/ej2-data';

function App() {

  const ajax: Ajax = new Ajax({
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

      ajax.url = `${BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`;

      return ajax.send().then((response: any) => {
          const data: any = JSON.parse(response);
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

    ajax.url = `${BASE_URL}?&${expandQuery}&$inlinecount=allpages&$format=json`;

    return ajax.send().then((response: any) => {
        const data: any = JSON.parse(response);
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

### Handling Tree Grid actions

For TreeGrid actions such as paging, sorting, etc dataStateChange event will be invoked. You have to query and resolve data using Ajax in this event based on the state arguments.

```ts

import React, { Component } from 'react';

import { Ajax, getValue } from '@syncfusion/ej2-base';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, Sort, PageSettingsModel, EditSettingsModel, DataStateChangeEventArgs } from '@syncfusion/ej2-react-treegrid';
import { DataResult } from '@syncfusion/ej2-data';

function App() {

  const ajax: Ajax = new Ajax({
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

      ajax.url = `${BASE_URL}?${pageQuery}&${treegridQuery}&${sortQuery}&$inlinecount=allpages&$format=json`;

      return ajax.send().then((response: any) => {
          const data: any = JSON.parse(response);
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

The [`dataSourceChanged`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datasourcechanged) event will be triggered for updating the grid data. You can perform the save operation based on the event arguments and call the endEdit method to indicate the completion of save operation.

```ts

import * as React from 'react';

import { Ajax, getValue } from '@syncfusion/ej2-base';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, Sort, PageSettingsModel, EditSettingsModel, DataStateChangeEventArgs } from '@syncfusion/ej2-react-treegrid';
import { DataResult } from '@syncfusion/ej2-data';
import * as ReactDOM from 'react-dom';
import { DataSourceChangedEventArgs } from '@syncfusion/ej2-grids';

function App() {

    const ajax: Ajax = new Ajax({
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
  
        ajax.url = `${BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`;
  
        return ajax.send().then((response: any) => {
            const data: any = JSON.parse(response);
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
          ajax.url = `${BASE_URL}?&${expandQuery}&$inlinecount=allpages&$format=json`;
  
          return ajax.send().then((response: any) => {
              const data: any = JSON.parse(response);
              return data;
          });
      }
  
      const addRecord = (state: DataSourceChangedEventArgs) : Promise<DataResult> => {
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
      const updateRecord = (state: DataSourceChangedEventArgs) : Promise<DataResult> => {
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
      const deleteRecord = (state: any) : Promise<DataResult> => {
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

The footer aggregate values  should be calculated and sent along with the **dataSource** property as follows. The aggregate property of the data source should contain the aggregate value assigned to the property named in the **field – type** format. For example, the **Sum** aggregate value for the **Duration** field should be assigned to the property named as **Duration - sum**.

```
{
    result: [{..}, {..}, {..}, ...],
    count: 830,
    aggregates: { 'Freight - sum' : 450,'EmployeeID - min': 1 }
}
```

### Provide excel filter data source

The [`dataStateChange`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datastatechange) event will be triggered with appropriate arguments when the excel filter requests the filter choice data source. You need to resolve the excel filter data source using the **dataSource** resolver function from the state argument as follows.

```ts

import React, { Component } from 'react';

import { Ajax, getValue } from '@syncfusion/ej2-base';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, Sort, PageSettingsModel, EditSettingsModel, FilterSettingsModel, DataStateChangeEventArgs } from '@syncfusion/ej2-react-treegrid';
import { DataResult } from '@syncfusion/ej2-data';

function App() {

  const ajax: Ajax = new Ajax({
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

      ajax.url = `${BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`;

      return ajax.send().then((response: any) => {
          const data: any = JSON.parse(response);
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

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.