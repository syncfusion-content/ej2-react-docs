---
layout: post
title: React Grid - Empty Record Template | Syncfusion
description: React Grid empty record template enables customization patterns, examples, and guidance to show meaningful messages and actions when no data exists.
control: Customize the Empty Record Template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Empty Record Template in React Grid Component

The empty record template allows custom content such as images, text, or components to be displayed when the grid has no data, replacing the default "No records to display" message.

To enable this feature, set the [emptyRecordTemplate](https://ej2.syncfusion.com/react/documentation/api/grid#emptyrecordtemplate) property of the grid. This property accepts an HTML element or a function that returns one.

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
