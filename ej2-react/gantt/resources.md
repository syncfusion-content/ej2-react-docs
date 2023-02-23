---
layout: post
title: Resources in React Gantt component | Syncfusion
description: Learn here all about Resources in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Resources 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resources in React Gantt component

In Gantt, the resources are represented by staff, equipment and materials etc. In Gantt component you can show or allocate the resources (human resources) for each task.

To get start quickly with Resource Allocation for each task and to know about Resource view Gantt, you can check on this video

{% youtube "https://www.youtube.com/watch?v=Fb5irtrZZUg" %}

## Resource collection

The resource collection contains details about resources that are used in the project. Resources are JSON object that contains id, name, unit and group of the resources and this collection is mapped to the Gantt control using the [`resources`](https://ej2.syncfusion.com/react/documentation/api/gantt/#resources) property. These resource fields are mapped to the Gantt control using the [`resourceFields`](https://ej2.syncfusion.com/react/documentation/api/gantt/#resourceFields) property.

Resource fields | Description
-----|-----
[`id`](https://ej2.syncfusion.com/react/documentation/api/gantt/resourceFields/#id) | This field is used to assign resources to the tasks.
[`name`](https://ej2.syncfusion.com/react/documentation/api/gantt/resourceFields/#name) | This field is used to map the resource names. These names are displayed as one of Gantt columns and also can display as labels using the [`labelSettings`](https://ej2.syncfusion.com/react/documentation/api/gantt/labelSettings) property.
[`unit`](https://ej2.syncfusion.com/react/documentation/api/gantt/resourceFields/#unit) | It indicates the amount of work that can be done by a resource for the task in a day.
[`group`](https://ej2.syncfusion.com/react/documentation/api/gantt/resourceFields/#group) | This field is used to group the resources and the tasks assigned to that particular resource into category.

The following code snippets shows resource collection and how it assigned to Gantt control.

```ts

let projectResources: object[] =  resources: [
    { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team', resourceUnit: 50},
    { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team', resourceUnit: 70 },
    { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team' },
    { resourceId: 4, resourceName: 'Fuller King', resourceGroup: 'Development Team' },
    { resourceId: 5, resourceName: 'Davolio Fuller', resourceGroup: 'Approval Team' },
    { resourceId: 6, resourceName: 'Van Jack', resourceGroup: 'Development Team', resourceUnit: 40 },
];

class App extends React.Component<{}, {}>{
    render() {
        return <GanttComponent dataSource={data}
        resourceFields: {
        id: 'resourceId', //resource Id Mapping
        name: 'resourceName', //resource Name mapping
        unit: 'resourceUnit', //resource Unit mapping
        group: 'resourceGroup' //resource Group mapping
    },
    resources: projectResources //resource collection dataSource

        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));

```

## Assign resource

We can assign resources for a task at initial load, using the resource id value of the resources as a collection. This collection is mapped from the dataSource to the Gantt control using the [`resourceInfo`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#resourceinfo) property.

Resources are assigned to tasks in following ways.

### Assign resource alone

If the unit is not specified for specific resource, the amount of work done will be consider as 100% by default. In such cases, the resource unit will not be displayed in Gantt UI.

```ts

    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50,resources: [2, 3] }

```

### Assign resources with unit

We can assign the quantity of work done by the resources for the specific task as like below code snippet.

```ts

 { TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4,
    resources: [{resourceId: 2, resourceUnit: 70}, {resourceId: 1, resourceUnit: 70}] },

```

When resource unit is defined in resource collection, the amount of work done by that particular resource will be same for all the tasks.

The following code snippet shows how to assign the resource for each task and map to Gantt control.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/resource-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/resource-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/resource-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/resource-cs2" %}

## Add/Edit resource collection

By using cell/ dialog edit option, we can add/remove the multiple resources for a particular task. Resource Unit can be change for a each task on resource tab in edit dialog by double click on the unit cell.

![Cell Edit](images/cellEdit-resource.png)

![Dialog Edit](images/dialogedit-resource.png)
