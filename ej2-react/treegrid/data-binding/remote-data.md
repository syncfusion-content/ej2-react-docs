---
layout: post
title: Remote data in React TreeGrid | Syncfusion
description: Learn here all about Remote data in Syncfusion React TreeGrid of Syncfusion Essential JS 2 and more.
control: Remote data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Remote data in React TreeGrid 

To bind remote data to the TreeGrid, assign a service endpoint through an instance of **DataManager** to the [dataSource](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datasource) property. To interact with a remote datasource, provide the endpoint `url` and define the [hasChildMapping](https://ej2.syncfusion.com/react/documentation/api/treegrid/#haschildmapping) property of the TreeGrid.

The `hasChildMapping` property maps to a field in the datasource that indicates whether the current record contains child records. This is used internally to display the expand icon and load child data on demand.

The TreeGrid provides **Load on Demand** support for rendering remote data. Load on demand is applied in the following actions:

* Expanding root nodes.
* Navigating pages when paging is enabled in the TreeGrid.

When load on demand is enabled, all root nodes are rendered in a collapsed state initially.

When load on demand is enabled with paging, only the root nodes of the active page are rendered (collapsed) on initial load. On expanding a root node, the corresponding child nodes are fetched from the remote server.

When a root node is expanded, its child nodes are rendered and cached locally. Subsequent expand/collapse operations on the same root node use the cached child nodes instead of requesting them again from the server.

When navigating to a new page, the root nodes for that page are requested from the remote server and rendered accordingly.

> Remote data binding supports only self-referential data. By default, the `pageSizeMode` for remote data is `Root`. That is, only the root node count is shown in the pager when using remote data.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/data-binding-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/data-binding-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs4" %}

 **Service code snippet:**

```ts

namespace Controllers
{
    [Produces("application/json")]
    [Route("api/SelfReferenceData")]
    public class SelfReferenceDataController : Controller
    {
        public static List<SelfReferenceData> tree = new List<SelfReferenceData>();
        // GET: api/SelfReferenceData
        [HttpGet]

        public object Get()
        {
            var queryString = Request.Query;
            if (tree.Count == 0)
                tree = SelfReferenceData.GetTree();
            //Filtering
            if (queryString.Keys.Contains("$filter") && !queryString.Keys.Contains("$top"))
            {
                StringValues filter;
                queryString.TryGetValue("$filter", out filter);
                int fltr = Int32.Parse(filter[0].ToString().Split("eq")[1]);
                IQueryable<SelfReferenceData> data1 = tree.Where(f => f.ParentItem == fltr).AsQueryable();
                return new { result = data1.ToList(), count = data1.Count() };
            }
            List<SelfReferenceData> data = tree.ToList();
            if (queryString.Keys.Contains("$select"))
            {
                data = (from ord in tree
                        select new SelfReferenceData
                        {
                            ParentItem = ord.ParentItem
                        }
                        ).ToList();
                return data;
            }
            data = data.Where(p => p.ParentItem == null).ToList();
            int count = data.Count;
             //Paging
            if (queryString.Keys.Contains("$inlinecount"))
            {
                StringValues Skip;
                StringValues Take;
                
                int skip = (queryString.TryGetValue("$skip", out Skip)) ? Convert.ToInt32(Skip[0]) : 0;
                int top = (queryString.TryGetValue("$top", out Take)) ? Convert.ToInt32(Take[0]) : data.Count();
       
                return new { result = tree.Skip(skip).Take(top), count = tree.Count };
            }
            else
            {
                return SelfReferenceData.GetTree();
            }

                public class SelfReferenceData
        {

            [Key]
            public int TaskID { get; set; }
            public string TaskName { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public String Progress { get; set; }
            public String Priority { get; set; }
            public int Duration { get; set; }
            public int? ParentItem { get; set; }
            public bool? isParent { get; set; }
            public SelfReferenceData() { }
            public static List<SelfReferenceData> GetTree()
            {
                if (tree.Count == 0)
                {
                    int root = -1;
                    for (var t = 1; t <= 60; t++)
                    {
                        Random ran = new Random();
                        string math = (ran.Next() % 3) == 0 ? "High" : (ran.Next() % 2) == 0 ? "Release Breaker" : "Critical";
                        string progr = (ran.Next() % 3) == 0 ? "Started" : (ran.Next() % 2) == 0 ? "Open" : "In Progress";
                        root++;
                        int rootItem = tree.Count + root + 1;
                        tree.Add(new SelfReferenceData() { TaskID = rootItem, TaskName = "Parent Task " + rootItem.ToString(), StartDate = new DateTime(1992, 06, 07), EndDate = new DateTime(1994, 08, 25), isParent = true, ParentItem = null, Progress = progr, Priority = math, Duration = ran.Next(1, 50) });
                        int parent = tree.Count;
                        for (var c = 0; c < 10; c++)
                        {
                            root++;
                            string val = ((parent + c + 1) % 3 == 0) ? "Low" : "Critical";
                            int parn = parent + c + 1;
                            progr = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                            int iD = tree.Count + root + 1;
                            tree.Add(new SelfReferenceData() { TaskID = iD, TaskName = "Child Task " + iD.ToString(), StartDate = new DateTime(1992, 06, 07), EndDate = new DateTime(1994, 08, 25), isParent = (((parent + c + 1) % 3) == 0), ParentItem = rootItem, Progress = progr, Priority = val, Duration = ran.Next(1, 50) });
                            if ((((parent + c + 1) % 3) == 0))
                            {
                                int immParent = tree.Count;
                                for (var s = 0; s < 3; s++)
                                {
                                    root++;
                                    string Prior = (immParent % 2 == 0) ? "Validated" : "Normal";
                                    tree.Add(new SelfReferenceData() { TaskID = tree.Count + root + 1, TaskName = "Sub Task " + (tree.Count + root + 1).ToString(), StartDate = new DateTime(1992, 06, 07), EndDate = new DateTime(1994, 08, 25), isParent = false, ParentItem = iD, Progress = (immParent % 2 == 0) ? "On Progress" : "Closed", Priority = Prior, Duration = ran.Next(1, 50) });
                                }
                            }
                        }
                    }
                }
                return tree;
            }
        }
    }

```

> By default, **DataManager** uses the [ODataAdaptor](https://ej2.syncfusion.com/documentation/data/adaptors/#odata-adaptor/) for remote data binding.
> Based on the RESTful web services in use, set the corresponding adaptor on the DataManager. Refer to the [adaptor documentation](https://ej2.syncfusion.com/documentation/data/adaptors/?no-cache=1) for details.
> Filtering and searching as server-side operations are not supported when using load on demand.

## LoadChildOnDemand

When binding remote data to the TreeGrid, parent rows are rendered in a collapsed state by default. The TreeGrid provides an option to load child records during initial rendering for remote data binding by setting [loadChildOnDemand](https://ej2.syncfusion.com/react/documentation/api/treegrid/#loadchildondemand) to `false`.

When `loadChildOnDemand` is enabled (true), parent records are rendered in a collapsed state.

The following code example describes the behavior of the `loadChildOnDemand` feature of the TreeGrid.

```ts

import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';


function App() {

    const dataManager: DataManager = new DataManager({
        adaptor: new UrlAdaptor,
        insertUrl: "Home/Insert",
        removeUrl: "Home/Delete",
        updateUrl: "Home/Update",
        batchUrl: "Home/Remove",
        url: "Home/DataSource",
    });
    return <TreeGridComponent dataSource={dataManager} treeColumnIndex={1} idMapping= 'TaskID'
    parentIdMapping='parentID' loadChildOnDemand='true' height='270' allowPaging='true'>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='TaskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='StartDate' headerText='Start Date' width='90' textAlign='Right' format='yMd' type='date' />
            <ColumnDirective field='EndDate' headerText='End Date' width='90' format='yMd' textAlign='Right' />
            <ColumnDirective field='Priority' headerText='Priority' width='110'/>
        </ColumnsDirective>
    </TreeGridComponent>
};
export default App;

```

> Also, when using `loadChildOnDemand`, child records must be handled on the server. This applies to CRUD operations as well.

The following code example describes handling child records on the server.

```ts

public ActionResult UrlDatasource(DataManagerRequest dm)
{
    if (TreeData.tree.Count == 0)
          TreeData.GetTree();
    IEnumerable DataSource = TreeData.tree;

    DataOperations operation = new DataOperations();
    if (dm.Where != null && dm.Where.Count > 0)
    {
        DataSource = operation.PerformFiltering(DataSource, dm.Where, "and");    //perform filtering
    }
    if (dm.Sorted != null && dm.Sorted.Count > 0)
    {
        DataSource = operation.PerformSorting(DataSource, dm.Sorted);  //perform sorting
    }
    var count = DataSource.ToList<TreeData>().Count();
    if (dm.Skip != 0)
    {
        DataSource = operation.PerformSkip(DataSource, dm.Skip);   //Paging
    }
    if (dm.Take != 0)
    {
        DataSource = operation.PerformTake(DataSource, dm.Take);
    }
    if (dm.Where != null)
    {
        DataSource = CollectChildRecords(DataSource, dm);  // method to collect child records
    }

    return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);
}

 public IEnumerable CollectChildRecords(IEnumerable datasource, DataManagerRequest dm)
 {
     DataOperations operation = new DataOperations();
     IEnumerable DataSource = TreeData.tree;   // use the total DataSource here
     string IdMapping = "TaskID";     // define your IdMapping field name here
     int[] TaskIds = new int[0];
     foreach (var rec in datasource)
     {
        int taskid = (int)rec.GetType().GetProperty(IdMapping).GetValue(rec);
        TaskIds = TaskIds.Concat(new int[] { taskid }).ToArray();  //get the Parentrecord Ids based on IdMapping Field
     }
    IEnumerable ChildRecords = null;
     foreach (int id in TaskIds)
     {
        dm.Where[0].value = id;
        IEnumerable records = operation.PerformFiltering(DataSource, dm.Where, dm.Where[0].Operator);   //perform filtering to collect the childrecords based on Ids
        ChildRecords = ChildRecords == null || (ChildRecords.AsQueryable().Count() == 0) ? records : ((IEnumerable<object>)ChildRecords).Concat((IEnumerable<object>)records);  //concate the childrecords with dataSource
     }
     if (ChildRecords != null)
     {
        ChildRecords = CollectChildRecords(ChildRecords, dm);  // repeat the operation for inner level child
        if (dm.Sorted != null && dm.Sorted.Count > 0) // perform Sorting
        {
            ChildRecords = operation.PerformSorting(ChildRecords, dm.Sorted);
        }
        datasource = ((IEnumerable<object>)datasource).Concat((IEnumerable<object>)ChildRecords);  //concate the childrecords with dataSource
     }
    return datasource;
 }

```

## Offline mode

With remote data binding, actions such as paging and loading child records on demand are processed on the server. To avoid postback, configure the TreeGrid to load all data during initialization and process actions on the client. Enable this behavior by using the `offline` property of **DataManager**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/data-binding-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/data-binding-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs5" %}

## Custom adaptor

Create a custom adaptor by extending the built-in adaptors. The following demonstrates a custom adaptor approach that adds a serial number to records by overriding the built-in response processing through the `processResponse` method of the `ODataAdaptor`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/data-binding-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/data-binding-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="serialnoadaptor.jsx" %}
{% include code-snippet/treegrid/data-binding-cs6/app/serialNoAdaptor.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="serialnoadaptor.tsx" %}
{% include code-snippet/treegrid/data-binding-cs6/app/serialNoAdaptor.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs6" %}

## Sending additional parameters to the server

To add custom parameters to the data request, use the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method of the [Query](https://ej2.syncfusion.com/documentation/api/data/query/#query) class. Assign the configured `Query` object to the TreeGrid `Query` property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/data-binding-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/data-binding-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs7" %}

## Handling HTTP error

During server interaction, server-side exceptions may occur. Access error messages or exception details on the client by using the [actionFailure](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actionfailure) event.

The argument passed to the `actionFailure` event contains the error details returned from the server.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/data-binding-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/data-binding-cs8/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs8" %}

> The `actionFailure` event is triggered not only for server errors, but also when exceptions occur during TreeGrid action processing.

## Load on demand with virtualization

When binding remote data, parent rows are rendered in a collapsed state by default. On expanding a root node, the corresponding child nodes are loaded from the remote server.

Using virtualization with remote data binding improves performance when loading large datasets. Enable this by setting [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/treegrid/#enablevirtualization) to `true`. TreeGrid UI virtualization renders only the rows and columns visible within the viewport without buffering the entire datasource.

The [hasChildMapping](https://ej2.syncfusion.com/react/documentation/api/treegrid/#haschildmapping) property maps to a field in the datasource that indicates whether the current record contains child records. This is used internally to display the expand icon when binding child data on demand.

```ts

import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent, VirtualScroll, Sort, Filter, Edit, EditSettingsModel, Toolbar, ToolbarItems, PageSettingsModel } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';


function App() {

    const editOptions: EditSettingsModel = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Row',
        newRowPosition: 'Below'
    };
    const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

    const pageSettings: PageSettingsModel = { pageSize: 30 };

    const dataManager: DataManager = new DataManager({
        adaptor: new UrlAdaptor,
        insertUrl: "Home/Insert",
        removeUrl: "Home/Delete",
        updateUrl: "Home/Update",
        url: "Home/DataSource",
    });
    return <TreeGridComponent dataSource={dataManager} treeColumnIndex={1} idMapping= 'TaskID'
    parentIdMapping='ParentValue' hasChildMapping='isParent' expandStateMapping='IsExpanded' height='400' enableVirtualization={true} editSettings={editOptions} toolbar={toolbarOptions} allowFiltering={true} allowSorting={true} pageSettings={pageSettings}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
            <ColumnDirective field='TaskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='Duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Edit, VirtualScroll, Sort, Filter, Toolbar]} />
    </TreeGridComponent>
};
export default App;

```

The following code example describes handling load on demand on the server.

```ts

public ActionResult lazyLoading()
{
    TreeData.tree = new List<TreeData>();
    return View();
}
public ActionResult UrlDatasource(DataManagerRequest dm)
{
    List<TreeData> data = new List<TreeData>();
    data = TreeData.GetTree();
    DataOperations operation = new DataOperations();
    IEnumerable<TreeData> DataSource = data;
    List<TreeData> ExpandedParentRecords = new List<TreeData>();
    if (dm.Expand != null && dm.Expand[0] == "ExpandingAction") // setting the ExpandStateMapping property whether is true or false
    {
        var val = TreeData.GetTree().Where(ds => ds.TaskID == int.Parse(dm.Expand[1])).FirstOrDefault();
        val.IsExpanded = true;
    }
    else if (dm.Expand != null && dm.Expand[0] == "CollapsingAction")
    {
        var val = TreeData.GetTree().Where(ds => ds.TaskID == int.Parse(dm.Expand[1])).FirstOrDefault();
        val.IsExpanded = false;
    }
    if (!(dm.Where != null && dm.Where.Count > 1))
    {
        data = data.Where(p => p.ParentValue == null).ToList();
    }
    DataSource = data;
    if (dm.Search != null && dm.Search.Count > 0) // Searching
    {
        DataSource = operation.PerformSearching(DataSource, dm.Search);
    }
    if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // Sorting
    {
        DataSource = operation.PerformSorting(DataSource, dm.Sorted);
    }
    if (dm.Where != null && dm.Where.Count > 1) //filtering
    {
        DataSource = operation.PerformFiltering(DataSource, dm.Where, "and");
    }
    data = new List<TreeData>();
    foreach (var rec in DataSource)
    {
        if (rec.IsExpanded)
        {
            ExpandedParentRecords.Add(rec as TreeData); // saving the expanded parent records
        }
        data.Add(rec as TreeData);
    }
    var GroupData = TreeData.GetTree().ToList().GroupBy(rec => rec.ParentValue)
                        .Where(g => g.Key != null).ToDictionary(g => g.Key?.ToString(), g => g.ToList());
    if (ExpandedParentRecords.Count > 0)
    {
        foreach (var Record in ExpandedParentRecords.ToList())
        {
            var ChildGroup = GroupData[Record.TaskID.ToString()];
            if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // sorting the child records
            {
                IEnumerable ChildSort = ChildGroup;
                ChildSort = operation.PerformSorting(ChildSort, dm.Sorted);
                ChildGroup = new List<TreeData>();
                foreach (var rec in ChildSort)
                {
                    ChildGroup.Add(rec as TreeData);
                }
            }
            if (dm.Search != null && dm.Search.Count > 0) // searching the child records
            {
                IEnumerable ChildSearch = ChildGroup;
                ChildSearch = operation.PerformSearching(ChildSearch, dm.Search);
                ChildGroup = new List<TreeData>();
                foreach (var rec in ChildSearch)
                {
                    ChildGroup.Add(rec as TreeData);
                }
            }
            AppendChildren(dm, ChildGroup, Record, GroupData, data);
        }
    }
    DataSource = data;
    if (dm.Expand != null && dm.Expand[0] == "CollapsingAction") // setting the skip index based on collapsed parent
    {
        string IdMapping = "TaskID";
        List<WhereFilter> CollapseFilter = new List<WhereFilter>();
        CollapseFilter.Add(new WhereFilter() { Field = IdMapping, value = dm.Where[0].value, Operator = dm.Where[0].Operator });
        var CollapsedParentRecord = operation.PerformFiltering(DataSource, CollapseFilter, "and");
        var index = data.Cast<object>().ToList().IndexOf(CollapsedParentRecord.Cast<object>().ToList()[0]);
        dm.Skip = index;
    }
    else if (dm.Expand != null && dm.Expand[0] == "ExpandingAction") // setting the skip index based on expanded parent
    {
        string IdMapping = "TaskID";
        List<WhereFilter> ExpandFilter = new List<WhereFilter>();
        ExpandFilter.Add(new WhereFilter() { Field = IdMapping, value = dm.Where[0].value, Operator = dm.Where[0].Operator });
        var ExpandedParentRecord = operation.PerformFiltering(DataSource, ExpandFilter, "and");
        var index = data.Cast<object>().ToList().IndexOf(ExpandedParentRecord.Cast<object>().ToList()[0]);
        dm.Skip = index;
    }
    int count = data.Count;
    DataSource = data;
    if (dm.Skip != 0)
    {
        DataSource = operation.PerformSkip(DataSource, dm.Skip);   //Paging
    }
    if (dm.Take != 0)
    {
        DataSource = operation.PerformTake(DataSource, dm.Take);
    }
    return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);

}

private void AppendChildren(DataManagerRequest dm, List<TreeData> ChildRecords, TreeData ParentValue, Dictionary<string, List<TreeData>> GroupData, List<TreeData> data) // Getting child records for the respective parent
{
    string TaskId = ParentValue.TaskID.ToString();
    var index = data.IndexOf(ParentValue);
    DataOperations operation = new DataOperations();
    foreach (var Child in ChildRecords)
    {
        if (ParentValue.IsExpanded)
        {
            string ParentId = Child.ParentValue.ToString();
            if (TaskId == ParentId)
            {
                ((IList)data).Insert(++index, Child);
                if (GroupData.ContainsKey(Child.TaskID.ToString()))
                {
                    var DeepChildRecords = GroupData[Child.TaskID.ToString()];
                    if (DeepChildRecords?.Count > 0)
                    {
                        if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // sorting the child records
                        {
                            IEnumerable ChildSort = DeepChildRecords;
                            ChildSort = operation.PerformSorting(ChildSort, dm.Sorted);
                            DeepChildRecords = new List<TreeData>();
                            foreach (var rec in ChildSort)
                            {
                                DeepChildRecords.Add(rec as TreeData);
                            }
                        }
                        if (dm.Search != null && dm.Search.Count > 0) // searching the child records
                        {
                            IEnumerable ChildSearch = DeepChildRecords;
                            ChildSearch = operation.PerformSearching(ChildSearch, dm.Search);
                            DeepChildRecords = new List<TreeData>();
                            foreach (var rec in ChildSearch)
                            {
                                DeepChildRecords.Add(rec as TreeData);
                            }
                        }
                        AppendChildren(dm, DeepChildRecords, Child, GroupData, data);
                        if (Child.IsExpanded)
                        {
                            index += DeepChildRecords.Count;
                        }
                    }
                }
                else
                {
                    Child.isParent = false;
                }
            }
        }
    }

}

public ActionResult Update(CRUDModel<TreeData> value)
{
    List<TreeData> data = new List<TreeData>();
    data = TreeData.GetTree();
    var val = data.Where(ds => ds.TaskID == value.Value.TaskID).FirstOrDefault();
    val.TaskName = value.Value.TaskName;
    val.Duration = value.Value.Duration;
    return Json(val);
}

public ActionResult Insert(CRUDModel<TreeData> value)
{
    var c = 0;
    for (; c < TreeData.GetTree().Count; c++)
    {
        if (TreeData.GetTree()[c].TaskID == value.RelationalKey)
        {
            if (TreeData.GetTree()[c].isParent == null)
            {
                TreeData.GetTree()[c].isParent = true;
            }
            break;
        }
    }
    c += FindChildRecords(value.RelationalKey);
    TreeData.GetTree().Insert(c + 1, value.Value);

    return Json(value.Value);
}

public int FindChildRecords(int? id)
{
    var count = 0;
    for (var i = 0; i < TreeData.GetTree().Count; i++)
    {
        if (TreeData.GetTree()[i].ParentValue == id)
        {
            count++;
            count += FindChildRecords(TreeData.GetTree()[i].TaskID);
        }
    }
    return count;
}

public object Delete(CRUDModel<TreeData> value)
{
    if (value.deleted != null)
    {
        for (var i = 0; i < value.deleted.Count; i++)
        {
            TreeData.GetTree().Remove(TreeData.GetTree().Where(ds => ds.TaskID == value.deleted[i].TaskID).FirstOrDefault());
        }
    }
    else
    {
        TreeData.GetTree().Remove(TreeData.GetTree().Where(or => or.TaskID == int.Parse(value.Key.ToString())).FirstOrDefault());
    }
    return Json(value);
}

public class CRUDModel<T> where T : class
{

    public TreeData Value;
    public int Key { get; set; }
    public int RelationalKey { get; set; }
    public List<T> added { get; set; }
    public List<T> changed { get; set; }
    public List<T> deleted { get; set; }
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

### Load parent rows in expanded state with virtualization

The TreeGrid provides an option to load child records during initial rendering for remote data binding by setting [loadChildOnDemand](https://ej2.syncfusion.com/react/documentation/api/treegrid/#loadchildondemand) to true. When `loadChildOnDemand` is enabled, parent records are rendered in an expanded state.

When using virtualization together with `loadChildOnDemand`, performance is improved while loading child records during the initial render for remote data binding. Enable this by setting [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/treegrid/#enablevirtualization) to true and `loadChildOnDemand` to true.

```ts

import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent, VirtualScroll, Sort, Filter, Edit, EditSettingsModel, Toolbar, ToolbarItems, PageSettingsModel } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';


function App() {

    const editOptions: EditSettingsModel = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Row',
        newRowPosition: 'Below'
    };
    const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

    const pageSettings: PageSettingsModel = { pageSize: 30 };

    const dataManager: DataManager = new DataManager({
        adaptor: new UrlAdaptor,
        insertUrl: "Home/Insert",
        removeUrl: "Home/Delete",
        updateUrl: "Home/Update",
        url: "Home/DataSource",
    });
    return <TreeGridComponent dataSource={dataManager} treeColumnIndex={1} idMapping= 'TaskID'
    parentIdMapping='ParentValue' hasChildMapping='isParent' expandStateMapping='IsExpanded' loadChildOnDemand='true' height='400' enableVirtualization={true} editSettings={editOptions} toolbar={toolbarOptions} allowFiltering={true} allowSorting={true} pageSettings={pageSettings}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
            <ColumnDirective field='TaskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='Duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Edit, VirtualScroll, Sort, Filter, Toolbar]} />
    </TreeGridComponent>
};
export default App;

```

The following code example describes handling child records on the server.

```ts

public ActionResult loadChildOndemand()
{
    TreeData.tree = new List<TreeData>();
    return View();
}
public ActionResult UrlDatasource(DataManagerRequest dm)
{
    List<TreeData> data = new List<TreeData>();
    data = TreeData.GetTree();
    DataOperations operation = new DataOperations();
    IEnumerable<TreeData> DataSource = data;
    if (dm.Expand != null && dm.Expand[0] == "CollapsingAction") // setting the ExpandStateMapping property whether is true or false
    {
        var val = TreeData.GetTree().Where(ds => ds.TaskID == int.Parse(dm.Expand[1])).FirstOrDefault();
        val.IsExpanded = false;
    }
    else if (dm.Expand != null && dm.Expand[0] == "ExpandingAction")
    {
        var val = TreeData.GetTree().Where(ds => ds.TaskID == int.Parse(dm.Expand[1])).FirstOrDefault();
        val.IsExpanded = true;
    }
    if (!(dm.Where != null && dm.Where.Count > 1))
    {
        data = data.Where(p => p.ParentValue == null).ToList();
    }
    DataSource = data;
    if (dm.Search != null && dm.Search.Count > 0) // Searching
    {
        DataSource = operation.PerformSearching(DataSource, dm.Search);
    }
    if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // Sorting
    {
        DataSource = operation.PerformSorting(DataSource, dm.Sorted);
    }
    if (dm.Where != null && dm.Where.Count > 1) //filtering
    {
        DataSource = operation.PerformFiltering(DataSource, dm.Where, "and");
    }
    data = new List<TreeData>();
    foreach (var rec in DataSource)
    {
        data.Add(rec as TreeData);
    }
    var GroupData = TreeData.GetTree().ToList().GroupBy(rec => rec.ParentValue)
                        .Where(g => g.Key != null).ToDictionary(g => g.Key?.ToString(), g => g.ToList());
    foreach (var Record in data.ToList())
    {
        if (GroupData.ContainsKey(Record.TaskID.ToString()))
        {
            var ChildGroup = GroupData[Record.TaskID.ToString()];
            if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // Sorting the child records
            {
                IEnumerable ChildSort = ChildGroup;
                ChildSort = operation.PerformSorting(ChildSort, dm.Sorted);
                ChildGroup = new List<TreeData>();
                foreach (var rec in ChildSort)
                {
                    ChildGroup.Add(rec as TreeData);
                }
            }
            if (dm.Search != null && dm.Search.Count > 0) // Searching the child records
            {
                IEnumerable ChildSearch = ChildGroup;
                ChildSearch = operation.PerformSearching(ChildSearch, dm.Search);
                ChildGroup = new List<TreeData>();
                foreach (var rec in ChildSearch)
                {
                    ChildGroup.Add(rec as TreeData);
                }
            }
            if (ChildGroup?.Count > 0)
                AppendChildren(dm, ChildGroup, Record, GroupData, data);
        }
    }
    DataSource = data;
    if (dm.Expand != null && dm.Expand[0] == "CollapsingAction") // setting the skip index based on collapsed parent
    {
        string IdMapping = "TaskID";
        List<WhereFilter> CollapseFilter = new List<WhereFilter>();
        CollapseFilter.Add(new WhereFilter() { Field = IdMapping, value = dm.Where[0].value, Operator = dm.Where[0].Operator });
        var CollapsedParentRecord = operation.PerformFiltering(DataSource, CollapseFilter, "and");
        var index = data.Cast<object>().ToList().IndexOf(CollapsedParentRecord.Cast<object>().ToList()[0]);
        dm.Skip = index;
    }
    else if (dm.Expand != null && dm.Expand[0] == "ExpandingAction") // setting the skip index based on expanded parent
    {
        string IdMapping = "TaskID";
        List<WhereFilter> ExpandFilter = new List<WhereFilter>();
        ExpandFilter.Add(new WhereFilter() { Field = IdMapping, value = dm.Where[0].value, Operator = dm.Where[0].Operator });
        var ExpandedParentRecord = operation.PerformFiltering(DataSource, ExpandFilter, "and");
        var index = data.Cast<object>().ToList().IndexOf(ExpandedParentRecord.Cast<object>().ToList()[0]);
        dm.Skip = index;
    }
    int count = data.Count;
    DataSource = data;
    if (dm.Skip != 0)
    {
        DataSource = operation.PerformSkip(DataSource, dm.Skip);   //Paging
    }
    if (dm.Take != 0)
    {
        DataSource = operation.PerformTake(DataSource, dm.Take);
    }
    return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);

}

private void AppendChildren(DataManagerRequest dm, List<TreeData> ChildRecords, TreeData ParentValue, Dictionary<string, List<TreeData>> GroupData, List<TreeData> data) // Getting child records for the respective parent
{
    string TaskId = ParentValue.TaskID.ToString();
    var index = data.IndexOf(ParentValue);
    DataOperations operation = new DataOperations();
    foreach (var Child in ChildRecords)
    {
        if (ParentValue.IsExpanded)
        {
            string ParentId = Child.ParentValue.ToString();
            if (TaskId == ParentId)
            {
                ((IList)data).Insert(++index, Child);
                if (GroupData.ContainsKey(Child.TaskID.ToString()))
                {
                    var DeepChildRecords = GroupData[Child.TaskID.ToString()];
                    if (DeepChildRecords?.Count > 0)
                    {
                        if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // sorting the child records
                        {
                            IEnumerable ChildSort = DeepChildRecords;
                            ChildSort = operation.PerformSorting(ChildSort, dm.Sorted);
                            DeepChildRecords = new List<TreeData>();
                            foreach (var rec in ChildSort)
                            {
                                DeepChildRecords.Add(rec as TreeData);
                            }
                        }
                        if (dm.Search != null && dm.Search.Count > 0) // searching the child records
                        {
                            IEnumerable ChildSearch = DeepChildRecords;
                            ChildSearch = operation.PerformSearching(ChildSearch, dm.Search);
                            DeepChildRecords = new List<TreeData>();
                            foreach (var rec in ChildSearch)
                            {
                                DeepChildRecords.Add(rec as TreeData);
                            }
                        }
                        AppendChildren(dm, DeepChildRecords, Child, GroupData, data);
                        if (Child.IsExpanded)
                        {
                            index += DeepChildRecords.Count;
                        }
                    }
                }
            }
        }
    }

}

public ActionResult Update(CRUDModel<TreeData> value)
{
    List<TreeData> data = new List<TreeData>();
    data = TreeData.GetTree();
    var val = data.Where(ds => ds.TaskID == value.Value.TaskID).FirstOrDefault();
    val.TaskName = value.Value.TaskName;
    val.Duration = value.Value.Duration;
    return Json(val);
}

public ActionResult Insert(CRUDModel<TreeData> value)
{
    var c = 0;
    for (; c < TreeData.GetTree().Count; c++)
    {
        if (TreeData.GetTree()[c].TaskID == value.RelationalKey)
        {
            if (TreeData.GetTree()[c].isParent == null)
            {
                TreeData.GetTree()[c].isParent = true;
            }
            break;
        }
    }
    c += FindChildRecords(value.RelationalKey);
    TreeData.GetTree().Insert(c + 1, value.Value);

    return Json(value.Value);
}

public int FindChildRecords(int? id)
{
    var count = 0;
    for (var i = 0; i < TreeData.GetTree().Count; i++)
    {
        if (TreeData.GetTree()[i].ParentValue == id)
        {
            count++;
            count += FindChildRecords(TreeData.GetTree()[i].TaskID);
        }
    }
    return count;
}

public object Delete(CRUDModel<TreeData> value)
{
    if (value.deleted != null)
    {
        for (var i = 0; i < value.deleted.Count; i++)
        {
            TreeData.GetTree().Remove(TreeData.GetTree().Where(ds => ds.TaskID == value.deleted[i].TaskID).FirstOrDefault());
        }
    }
    else
    {
        TreeData.GetTree().Remove(TreeData.GetTree().Where(or => or.TaskID == int.Parse(value.Key.ToString())).FirstOrDefault());
    }
    return Json(value);
}

public class CRUDModel<T> where T : class
{

    public TreeData Value;
    public int Key { get; set; }
    public int RelationalKey { get; set; }
    public List<T> added { get; set; }
    public List<T> changed { get; set; }
    public List<T> deleted { get; set; }
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
            for (var t = 1; t <= 1500; t++)
            {
                Random ran = new Random();
                string math = (ran.Next() % 3) == 0 ? "High" : (ran.Next() % 2) == 0 ? "Release Breaker" : "Critical";
                string progr = (ran.Next() % 3) == 0 ? "Started" : (ran.Next() % 2) == 0 ? "Open" : "In Progress";
                root++;
                int rootItem = root;
                tree.Add(new TreeData() { TaskID = rootItem, TaskName = "Parent task " + rootItem.ToString(), isParent = true, IsExpanded = true, ParentValue = null, Duration = ran.Next(1, 50) });
                int parent = root;
                for (var d = 0; d < 1; d++)
                {
                    root++;
                    string value = ((parent + 1) % 3 == 0) ? "Low" : "Critical";
                    int par = parent + 1;
                    progr = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                    int iD = root;
                    tree.Add(new TreeData() { TaskID = iD, TaskName = "Child task " + iD.ToString(), isParent = true, IsExpanded = true, ParentValue = rootItem, Duration = ran.Next(1, 50) });
                    int subparent = root;
                    for (var c = 0; c < 6; c++)
                    {
                        root++;
                        string val = ((subparent + c + 1) % 3 == 0) ? "Low" : "Critical";
                        int subchild = subparent + c + 1;
                        string progress = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                        int childID = root ;
                        tree.Add(new TreeData() { TaskID = childID, TaskName = "sub Child task " + childID.ToString(), ParentValue = subparent, Duration = ran.Next(1, 50) });
                    }
                }
            }
        }
        return tree;
    }
}

```
