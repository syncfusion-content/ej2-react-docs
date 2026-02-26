---
layout: post
title: Layout events in React Diagram Component | Syncfusion®
description: Learn here all about Layout events in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Layout events
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Layout events in React Diagram Component
Layout events in the React Diagram component provide developers with hooks to respond to various stages of automatic layout processing. These events are particularly useful when working with hierarchical data structures and need to customize behavior during layout rendering, data loading, or node expansion/collapse operations.

The diagram component supports several layout-specific events that fire during different phases of the layout life cycle, enabling fine-grained control over layout behavior and user interactions.

## DataLoaded Event

The [`dataLoaded`](https://ej2.syncfusion.com/react/documentation/api/diagram/idataloadedeventargs) event triggers after the diagram successfully populates from an external data source. This event provides access to the loaded data and diagram instance, making it ideal for performing post-load customizations such as applying custom styling, setting initial node states, or configuring layout-specific properties.

The event fires once the data binding process completes but before the initial layout calculation begins, providing an opportunity to modify nodes or connectors before they are positioned.

The following code example explains the data loaded event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/reactCurlyExamples/layout-event-cs1/app/index.jsx %}
{% endhighlight %}
{% endtabs %}

## ExpandStateChange Event

The [`expandStateChange`](https://ej2.syncfusion.com/react/documentation/api/diagram/iexpandstatechangeeventargs) event fires when a user clicks the expand or collapse icon of a node in a hierarchical layout. This event occurs before the layout update begins, allowing developers to prevent the state change, modify the expansion behavior, or trigger custom actions based on the node's new state.

The event provides information about the affected node, its current state, and whether the operation can be canceled. This makes it valuable for implementing conditional expansion, loading child data on-demand, or applying custom animations.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/layoutEvent-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/layoutEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/layoutEvent-cs1" %}


## Animation Complete Event

The [`animationComplete`](https://ej2.syncfusion.com/react/documentation/api/diagram/index-default#animationcomplete) event triggers after the diagram finishes animating layout changes, particularly during expand and collapse operations. This event is essential for detecting when visual transitions have completed, enabling developers to perform follow-up actions such as scrolling to specific nodes, updating UI indicators, or triggering additional layout adjustments.

The event fires at the end of the animation cycle, ensuring that all visual updates are complete before any subsequent operations begin.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/layoutEvent-cs2/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/layoutEvent-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/layoutEvent-cs2" %}

## Layout Updated Event

The [`layoutUpdated`](https://ej2.syncfusion.com/react/documentation/api/diagram/index-default#layoutupdated) event fires at both the beginning and completion of the layout rendering process. This event enables tracking of layout calculation progress and provides timing information for performance monitoring or progress indication purposes.

The event includes a state parameter that indicates whether the layout process is starting or finishing, allowing developers to implement loading indicators, measure layout performance, or coordinate with other application components that depend on layout completion.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/reactCurlyExamples/layout-event-cs2/app/index.jsx %}
{% endhighlight %}
{% endtabs %}

These layout events work together to provide comprehensive control over the automatic layout life cycle, from initial data loading through final rendering completion. They enable developers to create responsive, interactive diagram experiences with proper feedback and customization capabilities.