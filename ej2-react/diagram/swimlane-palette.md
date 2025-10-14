---
layout: post
title: Swim lane in React Diagram Component | Syncfusion®
description: Learn how to add, configure, and customize swimlane shapes in the symbol palette of Syncfusion® React Diagram Component.
control: Swim lane in symbol palette 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Swimlane in Symbol Palette

The React Diagram component provides comprehensive support for adding swimlane shapes and phases to the symbol palette. Swimlanes help organize process flows by grouping related activities into lanes, making complex diagrams more readable and structured.

## Add Swimlane to Palette

The diagram component supports adding both swimlane containers and individual phases to the symbol palette. This enables users to drag and drop pre-configured swimlane elements into their diagrams.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/swimlane/es5Palette-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/swimlane/es5Palette-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/swimlane/es5Palette-cs1" %}

### Drag and Drop Swimlane to Palette

* The drag and drop support for swimlane shapes has been provided.
* Horizontal lanes can be added to vertical swimlanes, and vice versa.
* The phase will only drop on swimlane shape with same orientation. The following image illustrates how to drag symbol from palette.
![Drag Symbol from Palette](images/swimlane-drag-dropGif.gif)