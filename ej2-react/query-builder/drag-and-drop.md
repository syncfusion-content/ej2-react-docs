---
layout: post
title: Drag and Drop in React Query Builder UI | Syncfusion
description: Rearrange rules and groups in the React Query Builder UI by drag and drop with the allowDragAndDrop property and dragStart, drag, and drop events.
control: QueryBuilder
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop in React Query Builder UI

Reposition rules or groups within the Query Builder using drag-and-drop interactions for intuitive query construction. Enable this feature with the [`allowDragAndDrop`](https://ej2.syncfusion.com/react/documentation/api/query-builder#allowDragAndDrop) property (default: `false`). When enabled, a drag handle appears next to each rule and group, and the mouse cursor changes to a move cursor on hover to indicate the element is draggable.

The component provides lifecycle events to monitor drag operations:

| Event | Triggered when | Callback arguments |
| --- | --- | --- |
| [`dragStart`](https://ej2.syncfusion.com/react/documentation/api/query-builder#dragStart) | A rule/group begins to be dragged. | `(event: DragEvent, ruleModel: RuleModel)` |
| [`drag`](https://ej2.syncfusion.com/react/documentation/api/query-builder#drag) | The dragged element moves within the Query Builder. | `(event: DragEvent, ruleModel: RuleModel)` |
| [`drop`](https://ej2.syncfusion.com/react/documentation/api/query-builder#drop) | A rule/group is successfully dropped at a new position. | `(event: DragEvent, ruleModel: RuleModel)` |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/drag-and-drop-cs1" %}