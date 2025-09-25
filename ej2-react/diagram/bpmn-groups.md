---
layout: post
title: BPMN Group in React Diagram Component | Syncfusion®
description: Learn how to create and customize BPMN group shapes for organizing related elements in Syncfusion® React Diagram Component.
control: Bpmn Group 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# BPMN Group in React Diagram Component

## Overview

A BPMN group is a visual mechanism used to organize and frame related elements within a business process diagram. Groups indicate that the enclosed elements logically belong together while providing no additional semantic meaning beyond visual organization. Unlike other BPMN constructs, groups serve purely as organizational containers to improve diagram readability and structure.

## Creating a BPMN Group

To create a BPMN group, set the [`shape`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnShapes/) property of the node to **group**. The group appears as a rounded rectangle with dashed borders that encompasses the grouped elements.

![BPMN Group Shape](images/Group.png)

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Group-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Group-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Group-cs1" %}
