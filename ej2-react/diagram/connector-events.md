---
layout: post
title: Connector Events in React Diagram Component | Syncfusion®
description: Learn about connector events in Syncfusion® React Diagram Component, including click, selection, position, connection, and segment events with examples.
control: Connector Events
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connector Events in React Diagram

The Diagram component provides comprehensive event support for connectors, allowing developers to respond to various user interactions and programmatic changes. These events enable dynamic behavior and custom logic when users interact with connectors through clicking, dragging, connecting, or modifying segments.

## Click Event

Triggers when a connector is clicked by the user. This event is useful for implementing custom actions, showing context menus, or displaying connector-specific information.

The following code example demonstrates how to handle the [`click`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iClickEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ClickEvent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ClickEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ClickEvent-cs1" %}

## Selection Change Event

Triggers when a connector is selected or unselected. This event allows you to implement custom selection logic, update property panels, or perform actions based on selection state changes.

The following code example demonstrates how to handle the [`selectionChange`](https://ej2.syncfusion.com/react/documentation/api/diagram/#selectionchange) event in the diagram:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5SelectionChangeEvent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5SelectionChangeEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5SelectionChangeEvent-cs1" %}

 You can prevent selection by setting the `**cancel**` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/iselectionchangeeventargs/) to **true**, as shown in the code snippet below:

```js
  selectionChange= {  (args) => {
    if (args.state == 'Changing') {
      //Prevents selection
      args.cancel = true;
    }
   }
  },

```

## Position Change Event

Triggers when a connector's position changes during dragging operations. This event is essential for implementing validation, snapping behavior, or custom positioning logic.

The following code example demonstrates how to handle the  [`positionChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iDraggingEventArgs/) event in the diagram:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5PositionChangeEvent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5PositionChangeEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5PositionChangeEvent-cs1" %}

 You can prevent dragging by setting the `cancel` property of [`DraggingEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iDraggingEventArgs/) to **true**, as shown in the code snippet below.

 ```js
   positionChange={  (args) => {
    if (args.state == 'Progress') {
      //Prevents dragging
      args.cancel = true;
    }
   }
  },

```

## Connection Change Event

Triggers when a connector's source or target point connects to or disconnects from nodes. This event is crucial for implementing connection validation, automatic routing updates, or maintaining data relationships.

The following code example demonstrates how to handle the  [`connectionChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iConnectionChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectionChangeEvent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectionChangeEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectionChangeEvent-cs1" %}

## Source Point Change Event

Triggers when a connector's source point is modified through dragging or programmatic changes. This event enables validation of source connections and implementation of custom connection rules.

The following code example demonstrates how to handle the [`sourcePointChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iEndChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5SourcePointchange-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5SourcePointchange-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5SourcePointchange-cs1" %}

 You can prevent source point dragging by setting the `cancel` property of [`EndChangeEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iEndChangeEventArgs/) to **true**, as shown in the code snippet below:

```javascript

 sourcePointChange={  (args) => {
    if (args.state === 'Progress') {
      //Prevents source point dragging
      args.cancel = true;
      //Customize
      }
    }
  },

```

## Target Point Change Event

Triggers when a connector's target point is modified through dragging or programmatic changes. This event allows validation of target connections and enforcement of connection constraints.

The following code example demonstrates how to handle the [`targetPointChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iEndChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5TargetPontChange-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5TargetPontChange-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5TargetPontChange-cs1" %}

 You can prevent target point dragging by setting the `cancel` property of [`EndChangeEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iEndChangeEventArgs/) to **true**, as shown in the code snippet below.

```javascript

targetPointChange={  (args) => {
    if (args.state === 'Progress') {
      //Prevents target point dragging
      args.cancel = true;
      //Customize
      }
    }
  },

```

## Segment Collection Change Event

Triggers when connector segments are added or removed at runtime. This event is essential for tracking dynamic changes to connector paths and implementing custom segment management logic.

The following code example demonstrates how to handle the [`segmentCollectionChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iSegmentCollectionChangeEventArgs/) event in the diagram: 

Use **CTRL+Shift+Click** on connector to add/remove segments.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5SegmentCollChange-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5SegmentCollChange-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5SegmentCollChange-cs1" %}

## Segment Change Event

Triggers when connector segments are adjusted or edited by the user. This event enables custom validation and modification of segment positions during interactive editing.

The following code example demonstrates how to handle the [`segmentChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iSegmentChangeEventArgs/) event in the diagram:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5SegmentChangeEvent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5SegmentChangeEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5SegmentChangeEvent-cs1" %}

 You can prevent segment editing by setting the `cancel` property of [`SegmentChangeEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iSegmentChangeEventArgs/) to **true**, as shown in the code snippet below:

``` javascript
 segmentChange={  (args) => {
    if (args.state === 'Start') {
      //Prevents the segment editing
      args.cancel = true;
      }
    }
  },

```

## Collection Change Event

Triggers when connectors are added to or removed from the diagram. This event is fundamental for tracking diagram modifications and implementing undo/redo functionality or change tracking systems.

The following code example demonstrates how to handle the  [`collectionChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iCollectionChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5CollectionChange-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5CollectionChange-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5CollectionChange-cs1" %}

You can prevent changes to the diagram collection, such as adding or deleting connectors, by setting the `cancel` property of [`CollectionChangeEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iCollectionChangeEventArgs/) to **true**, as shown in the code snippet below:

``` javascript
collectionChange={  (args) => {
    if (args.state === 'Changing') {
      //Prevents collection change - Prevents Adding or deleting connectors
      args.cancel = true;
      }
    }
  },

````