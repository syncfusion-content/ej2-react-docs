---
layout: post
title: BPMN Data Source in React Diagram | Syncfusion®
description: Add BPMN data source shapes to the React Diagram to represent databases, files, and other repositories that business processes read from or write to.
control: Bpmn DataSource 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# BPMN Data Source in React Diagram

## Overview

BPMN data sources represent information that is required for or produced by business process activities. Data sources are essential elements in business process modeling that indicate where data comes from, how it flows through the process, and where it is stored or accessed.

## Creating a Data Source

To create a BPMN data source shape in the React Diagram component, set the shape type as **BPMN** and specify the shape property as **DataSource**. Data sources are typically used to represent databases, files, or other data repositories that business processes interact with.

![DataSource BPMN Shape](images/Datasource.png)

The following code example demonstrates how to create a basic BPMN data source shape:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Datasource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Datasource-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Datasource-cs1" %}

## See also

* [BPMN Activities](./bpmn-activities)
* [BPMN Events](./bpmn-events)
* [BPMN Data Object](./bpmn-dataObject)