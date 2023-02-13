---
layout: post
title: Data binding in React Gantt component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React Gantt component

The Gantt component uses `DataManager` for binding the data source, which supports both RESTful JSON data services and local JavaScript object array. The [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/gantt/#datasource) property can be assigned either with the instance of DataManager or JavaScript object array collection. The Gantt component supports binding two types of data:
* Local data
* Remote data

The following video explains about the types of data binding and how to use it on the Gantt Chart component:

{% youtube "https://www.youtube.com/watch?v=MlKuX7TeMtw" %}

## Local data

To bind local data to Gantt, you can assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/gantt/#datasource) property. The local data source can also be provided as an instance of the `DataManager`.

In local data binding, the data source for rendering the Gantt component is retrieved from the same application locally.

The following are the two types of data binding possible with the Gantt component:

* Hierarchical data binding.
* Self-referential data binding (Flat data).

### Hierarchical data binding

The [`child`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#child) property is used to map the child records in hierarchical data.

The following code example shows how to bind the hierarchical local data into the Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/databinding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/databinding-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/databinding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/databinding-cs1" %}

### Self-referential data binding (Flat data)

The Gantt component can be bound with self-referential data by mapping the data source field values to the [`id`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#id) and [`parentID`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#parentid) properties.

* ID field: This field contains unique values used to identify each individual task and it is mapped to the [`id`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#id) property.
* Parent ID field: This field contains values that indicate parent tasks and it is mapped to the [`parentID`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#parentid) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/databinding-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/databinding-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/databinding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/databinding-cs2" %}

## Remote data

To bind remote data to the Gantt component, assign service data as an instance of `DataManager` to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/gantt/#datasource) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/databinding-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/databinding-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/databinding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/databinding-cs3" %}

### URL Adaptor

In Gantt, we can fetch data from SQL database using `ADO.NET` Entity Data Model and update the changes on CRUD action to the server by using `DataManager` support. To communicate with the remote data we are using `UrlAdaptor` of DataManager property to call the server method and get back resultant data in JSON format. We can know more about `UrlAdaptor` from [`here`](https://ej2.syncfusion.com/javascript/documentation/data/adaptors/?no-cache=1).

> Please refer the [link](https://docs.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/models-data/creating-model-classes-with-the-entity-framework-cs) to create the `ADO.NET` Entity Data Model in Visual studio,

We can define data source for Gantt as instance of DataManager using `url` property of DataManager. Please Check the below code snippet to assign data source to Gantt.

```ts

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    dependency: 'Predecessor',
    child: 'SubTasks'
  };
  public dataSource: DataManager = new DataManager({
    url: '/Home/UrlDatasource',
    adaptor: new UrlAdaptor
  });
    render() {
        return <GanttComponent dataSource={this.dataSource} taskFields={this.taskFields} height = '450px'>
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));

```

```ts
GanttDataSourceEntities db = new GanttDataSourceEntities();
public ActionResult UrlDatasource(DataManagerRequest dm)
{
    List<GanttData>DataList = db.GanttDatas.ToList();
    var count = DataList.Count();
    return Json(new { result = DataList, count = count });
}

```

### Remote Save Adaptor

You may need to perform all Gantt Actions on the client-side except the CRUD operations, which should be interacted with the server-side to persist data. It can be achieved in Gantt by using **RemoteSaveAdaptor**.

Datasource must be set to the **json** property and set **RemoteSaveAdaptor** to the **adaptor** property. CRUD operations can be mapped to the server-side using the **batchUrl** properties.

You can use the following code example to use **RemoteSaveAdaptor** in Gantt.

```ts

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { DataManager, RemoteSaveAdaptor } from '@syncfusion/ej2-data';

class App extends React.Component<{}, {}>{
    public taskFields: any = {
        id: 'taskId',
        name: 'taskName',
        startDate: 'startDate',
        duration: 'duration',
        progress: 'progress',
        parentID: 'parentID',
        dependency: 'predecessor',
    },
   toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'],
   editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
  public dataSource: DataManager = new DataManager({
    batchUrl: '/Home/BatchUpdate',
    adaptor: new RemoteSaveAdaptor
  });
    render() {
        return <GanttComponent dataSource={this.dataSource} taskFields={this.taskFields} height = '450px'>
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));

```

The following code example describes the CRUD operations handled at server-side.

```
    public IActionResult BatchUpdate([FromBody] CRUDModel batchmodel)
    {
        public class CRUDModel
        {
            public List<GanttDataSource> added { get; set; }
            public List<GanttDataSource> changed { get; set; }
            public List<GanttDataSource> deleted { get; set; }
            public object key { get; set; }
            public string action { get; set; }
            public string table { get; set; }
        }

        public IActionResult BatchUpdate([FromBody] CRUDModel batchmodel)
        {
            if (batchmodel.changed != null)
            {
                for (var i = 0; i < batchmodel.changed.Count(); i++)
                {
                    var value = batchmodel.changed[i];
                    GanttDataSource result = DataList.Where(or => or.taskId == value.taskId).FirstOrDefault();
                    result.taskId = value.taskId;
                    result.taskName = value.taskName;
                    result.startDate = value.startDate;
                    result.endDate = value.endDate;
                    result.duration = value.duration;
                    result.progress = value.progress;
                    result.parentID = value.parentID;
                }
            }
            if (batchmodel.deleted != null)
            {
                for (var i = 0; i < batchmodel.deleted.Count(); i++)
                {
                    DataList.Remove(DataList.Where(or => or.taskId.Equals(batchmodel.deleted[i].taskId)).FirstOrDefault());
                    RemoveChildRecords(batchmodel.deleted[i].taskId);
                }
            }
            if (batchmodel.added != null)
            {
                for (var i = 0; i < batchmodel.added.Count(); i++)
                {
                    DataList.Add(batchmodel.added[i]);
                }
            }
            return Json(new { addedRecords = batchmodel.added, changedRecords = batchmodel.changed, deletedRecords = batchmodel.deleted });
        }

       public void RemoveChildRecords(int key)
        {
            var childList = DataList.Where(x => x.parentID == key).ToList();
            foreach (var item in childList)
            {
                DataList.Remove(item);
                RemoveChildRecords(item.taskId);
            }
        }
        return Json(new { addedRecords = batchmodel.added, changedRecords = batchmodel.changed, deletedRecords = batchmodel.deleted });
    }

```

### Sending additional parameters to the server

We can pass additional parameters using [`addParams`](https://ej2.syncfusion.com/react/documentation/api/data/query/#addparams) method of [`Query`](https://ej2.syncfusion.com/react/documentation/api/data/query/) class.
In server side we have inherited and shown the additional parameter value in Syncfusion DataManager class itself. We pass an additional parameter in load time using [`load`](https://ej2.syncfusion.com/react/documentation/api/gantt#load) event. We can also pass additional parameter to the CRUD model. Please Check the below code snippet to send additional parameter to Gantt.

```ts

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Toolbar } from '@syncfusion/ej2-react-gantt';
import { DataManager, UrlAdaptor, Query } from '@syncfusion/ej2-data';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    dependency: 'Predecessor',
    parentID: 'parentID',
  };
    this.editOptions = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
   };
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'ExpandAll', 'CollapseAll'];
  public dataSource: DataManager = new DataManager({
    url: 'http://localhost:50039/Home/UrlDatasource',
    adaptor: new UrlAdaptor,
    batchUrl: 'http://localhost:50039/Home/BatchSave',
  });
  load(args) {
      this.ganttInstance.query = new Query().addParams('ej2Gantt', "test");
    }
    render() {
        return <GanttComponent dataSource={this.dataSource} taskFields={this.taskFields} editSettings={this.editOptions} toolbar={this.toolbarOptions} load={this.load.bind(this)} height = '450px' ref={gantt => this.ganttInstance = gantt}>
         <Inject services={[Edit, Toolbar]}/>
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));

```

```ts

namespace URLAdaptor.Controllers
{
    public class HomeController : Controller
    {
        ...///
        //inherit the class to show age as property of DataManager
        public class Test : DataManagerRequest
        {
            public string ej2Gantt { get; set; }
        }

        public ActionResult UrlDatasource([FromBody]Test dm)
        {
            if (DataList == null)
            {
                ProjectData datasource = new ProjectData();
                DataList = datasource.GetUrlDataSource();
            }
            var count = DataList.Count();
            return Json(new { result = DataList, count = count }, JsonRequestBehavior.AllowGet);
        }

        ...///

        public class ICRUDModel<T> where T : class
        {

            public object key { get; set; }

            public T value { get; set; }

            public List<T> added { get; set; }

            public List<T> changed { get; set; }

            public List<T> deleted { get; set; }

            public IDictionary<string, object> @params { get; set; }

        }
        ...///
    }
}

```

You can find the full sample from here.

#### Handling HTTP error

During server interaction from the Gantt, some server-side exceptions may occur, and you can acquire those error messages or exception details in client-side using the [`actionFailure`](https://ej2.syncfusion.com/react/documentation/api/gantt#actionfailure) event.

The argument passed to the `actionFailure` event contains the error details returned from the server.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/databinding-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/databinding-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/databinding-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/databinding-cs4" %}

#### Binding with Ajax

You can use Gantt [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/gantt#datasource) property to bind the data source to Gantt from external Ajax request. In the below code we have fetched the data source from the server with the help of Ajax request and provided that to `dataSource` property by using [`onSuccess`](https://ej2.syncfusion.com/react/documentation/api/base/ajax/#onsuccess) event of the Ajax.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/databinding-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/databinding-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/databinding-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/databinding-cs5" %}

>Note: If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.

## Split task

The `Split-task` feature allows you to split a task or interrupt the work during planned or unforeseen circumstances.
We can split the task either in load time or dynamically, by defining the segments either in hierarchical or self-referential way.

### Hierarchical

To split a task at load time in hierarchical way, we need to define the segment details in datasource and this field should be mapped by using the [`taskFields.segments`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#segments) property.

```ts

[
    {
        TaskID: 1, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50,
        Segments: [
            { StartDate: new Date("04/02/2019"), Duration: 2 },
            { StartDate: new Date("04/04/2019"), Duration: 2 }
        ]
    }
]

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/databinding-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/databinding-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/databinding-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/databinding-cs6" %}

### Self-referential

We can also define segment details as a flat data and this collection can be mapped by using [`segmentData`](https://ej2.syncfusion.com/react/documentation/api/gantt/#segmentData) property. The segment id field of this collection is mapped by using the [`taskFields.segmentId`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#segmentId) property.

```ts

  taskFields: {
    segmentId: "segmentId"
  },
  segmentData: [
    { segmentId: 1, StartDate: new Date("02/04/2019"), Duration: 2 },
    { segmentId: 1, StartDate: new Date("02/05/2019"), Duration: 5 },
    { segmentId: 4, StartDate: new Date("04/02/2019"), Duration: 2 },
    { segmentId: 4, StartDate: new Date("04/04/2019"), Duration: 2 }
  ],

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/databinding-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/databinding-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/databinding-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/databinding-cs7" %}

>Note: Segment id field contains id of a task which should be split at load time.

## Limitations

Gantt has the support for both Hierarchical and Self-Referential data binding. When rendering the Gantt control with SQL database, we suggest you to use the Self-Referential data binding to maintain the parent-child relation. Because the complex json structure is very difficult to manage it in SQL tables, we need to write a complex queries and we have to write a complex algorithm to find out the proper record details while updating/deleting the inner level task in Gantt data source. We cannot implement both data binding for Gantt control and this is not a recommended way. If  both child and parentID are mapped, the records will not render properly because, when task id of a record defined in the hierarchy structure is assigned to parent id of another record, in such case the records will not properly render. As the self-referential will search the record with particular id in flat data only, not in the inner level of records. If we map the parentID field,  it will be prioritized and Gantt will be rendered based on the parentID values.
