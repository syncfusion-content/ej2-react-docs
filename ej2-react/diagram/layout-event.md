---
layout: post
title: Layout events in React Diagram component | Syncfusion®
description: Learn here all about Layout events in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Layout events
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Layout events in React Diagram control

## DataLoaded event

The [`dataLoaded`](https://ej2.syncfusion.com/react/documentation/api/diagram/idataloadedeventargs/) event is triggered after the diagram is populated from the external data source.

The following code example explains the data loaded event in the diagram.

{% raw %}

```javascript
  function dataLoaded(args) {
    //we can get diagram instance in args.
    console.log(args);
  }
  <DiagramComponent id="diagram" width={'100%'} height={'600px'}
      nodes={nodes} connectors={connectors}
      // Event Triggers when the state of the layout rendering changes
      dataLoaded={dataLoaded}
      //Uses layout to auto-arrange nodes on the diagram page
      layout={{
          //Sets layout type
          type: 'HierarchicalTree',
      }}>
      {/* Inject necessary services for the diagram */}
      <Inject services={[HierarchicalTree]} />
  </DiagramComponent>
```
{% endraw %}

## ExpandStateChange event

The [`expandStateChange`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExpandStateChangeEventArgs/) will be triggered when the state of the expand and collapse icon change for a node.

The following code example explains the `expandStateChange` event in the diagram.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/layoutEvent-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/layoutEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/layoutEvent-cs1" %}


## Animation complete event

The [`animationComplete`](https://ej2.syncfusion.com/react/documentation/api/diagram/#animationcomplete) event is triggered after the animation of the diagram elements is completed. The following example demonstrates how to handle the animation complete event and customize based on the expand state of the root node.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/layoutEvent-cs2/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/layoutEvent-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/layoutEvent-cs2" %}

## Layout updated event

The [`layoutUpdated`](https://ej2.syncfusion.com/react/documentation/api/diagram/#layoutupdated) event is triggered when the layout rendering process in the diagram either starts or completes. This event allows users to track the state of the layout rendering process.

The following code example explains the layout updated event in the diagram.

{% raw %}

```javascript
function handleLayoutUpdated(args){
        if (args.state === 'Started') {
            console.log('Layout started rendering');
        }
}

<DiagramComponent id="diagram" width={'100%'} height={'550px'}
    nodes={nodes} connectors={connectors}
    layout={{ type: 'HierarchicalTree'}}
    // Event Triggers when the state of the layout rendering changes
    layoutUpdated={handleLayoutUpdated}>
    {/* Inject necessary services for the diagram */}
    <Inject services={[HierarchicalTree]} />
</DiagramComponent>

```
{% endraw %}