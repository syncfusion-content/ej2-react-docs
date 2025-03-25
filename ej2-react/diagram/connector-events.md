---
layout: post
title: Connector Events in React Diagram component | Syncfusion®
description: Learn here all about Connectors in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Connector Events
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events

Diagram provides some events support for connectors that triggers when interacting with the connector.

## Click event

Triggers when the connector is clicked. The following code example explains how to get the [`click`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iClickEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ClickEvent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ClickEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ClickEvent-cs1" %}

## Selection change event

When selecting/unselecting the connector, the selection change event will be triggered.
The following code example explains how to get the [`selection change`](https://ej2.syncfusion.com/react/documentation/api/diagram/#selectionchange) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5SelectionChangeEvent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5SelectionChangeEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5SelectionChangeEvent-cs1" %}

 You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/iselectionchangeeventargs/) to true, as shown in the code snippet below.

```js
  selectionChange= {  (args) => {
    if (args.state == 'Changing') {
      //Prevents selection
      args.cancel = true;
    }
   }
  },

```

## Position change event

Triggers when the connector's position is changed in diagram.
The following code example explains how to get the [`position change`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iDraggingEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5PositionChangeEvent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5PositionChangeEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5PositionChangeEvent-cs1" %}

 You can prevent dragging by setting the `cancel` property of [`DraggingEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iDraggingEventArgs/) to true, as shown in the code snippet below.

 ```js
   positionChange={  (args) => {
    if (args.state == 'Progress') {
      //Prevents dragging
      args.cancel = true;
    }
   }
  },

```

## Connection change event

Triggers when the connector’s source or target point is connected or disconnected from the source or target.
The following code example explains how to get the [`connection change`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iConnectionChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectionChangeEvent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectionChangeEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectionChangeEvent-cs1" %}

## Source Point change event

Triggers when the connector's source point is changed.
The following code example explains how to get the [`source Point change`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iEndChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5SourcePointchange-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5SourcePointchange-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5SourcePointchange-cs1" %}

 You can prevent source point dragging by setting the `cancel` property of [`EndChangeEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iEndChangeEventArgs/) to true, as shown in the code snippet below.

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

## Target Point change event

Triggers when the connector's target point is changed.
The following code example explains how to get the [`target Point change`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iEndChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5TargetPontChange-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5TargetPontChange-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5TargetPontChange-cs1" %}

 You can prevent target point dragging by setting the `cancel` property of [`EndChangeEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iEndChangeEventArgs/) to true, as shown in the code snippet below.

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

## Segment Collection Change event

Triggers when the connector's segments added or removed at runtime.
The following code example explains how to get the [`segment collection change`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iSegmentCollectionChangeEventArgs/) event in the diagram. 

Use `CTRL+Shift+Click` on connector to add/remove segments.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5SegmentCollChange-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5SegmentCollChange-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5SegmentCollChange-cs1" %}

## Segment Change event

Triggers when the connector's segments were adjusted or edited.
The following code example explains how to get the [`segment change`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iSegmentChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5SegmentChangeEvent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5SegmentChangeEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5SegmentChangeEvent-cs1" %}

 You can prevent segment editing by setting the `cancel` property of [`SegmentChangeEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iSegmentChangeEventArgs/) to true, as shown in the code snippet below.

``` javascript
 segmentChange={  (args) => {
    if (args.state === 'Start') {
      //Prevents the segment editing
      args.cancel = true;
      }
    }
  },

```

## Collection change event

Triggers when the connector is added or removed from diagram.
The following code example explains how to get the [`collection change`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iCollectionChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5CollectionChange-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5CollectionChange-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5CollectionChange-cs1" %}

You can prevent changes to the diagram collection, such as adding or deleting connectors, by setting the `cancel` property of [`CollectionChangeEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iCollectionChangeEventArgs/) to true, as shown in the code snippet below.

``` javascript
collectionChange={  (args) => {
    if (args.state === 'Changing') {
      //Prevents collection change - Prevents Adding or deleting connectors
      args.cancel = true;
      }
    }
  },

````