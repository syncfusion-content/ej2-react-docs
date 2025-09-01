---
layout: post
title: Customize the Empty Record Template in React Treegrid component | Syncfusion
description: Learn here all about Customize the Empty Record Template in Syncfusion React TreeGrid of Syncfusion Essential JS 2 and more.
control: Customize the Empty Record Template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize the empty record template in React TreeGrid
The empty record template feature in the TreeGrid allows you to use custom content such as images, text, or other components, when the TreeGrid doesn't contain any records to display. This feature replaces the default message of **No records to display** typically shown in the TreeGrid.
To activate this feature, set the `emptyRecordTemplate` property of the TreeGrid. The `emptyRecordTemplate` property expects the HTML element or a function that returns the HTML element.
In the following example, an image and text have been rendered as a template to indicate that the TreeGrid has no data to display.


In the below example, we have changed the dialog's header text for editing and adding records.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/emptyrecordtemplate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/emptyrecordtemplate-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/emptyrecordtemplate-cs1" %}
