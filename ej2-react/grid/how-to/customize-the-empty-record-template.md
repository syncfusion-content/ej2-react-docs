---
layout: post
title: React Grid - Empty Record Template | Syncfusion
description: Learn here all about Customize the Empty Record Template in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Customize the Empty Record Template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Empty Record Template in React Grid component

The empty record template feature in the Grid allows you to use custom content such as images, text, or other components, when the grid doesn't contain any records to display. This feature replaces the default message of 'No records to display' typically shown in the grid.

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides the ability to customize the content displayed when no records are available. Instead of the default "No records to display" message, custom elements such as images, styled text, or components can be rendered using the [emptyRecordTemplate](https://ej2.syncfusion.com/react/documentation/api/grid#emptyrecordtemplate) property.

This property accepts either a static HTML element or a function that returns a React element, allowing full flexibility in defining the empty state appearance.

To activate this feature, set the `emptyRecordTemplate` property of the Grid. The `emptyRecordTemplate` property expects the HTML element or a function that returns the HTML element.

The empty record template allows custom content such as images, text, or components to be displayed when the grid has no data, replacing the default “No records to display” message.
To enable this feature, set the emptyRecordTemplate property of the Grid. This property accepts an HTML element or a function that returns one.
The following example shows how an image and text can be rendered as a custom template when the grid has no records.

In the following example, an image and text have been rendered as a template to indicate that the grid has no data to display.


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/empty-record-template-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/empty-record-template-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/empty-record-template-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/empty-record-template-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/empty-record-template-cs1" %}
