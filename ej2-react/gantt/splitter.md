---
layout: post
title: Splitter in React Gantt component | Syncfusion
description: Learn here all about Splitter in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Splitter 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Splitter in React Gantt component

## Splitter

In the Gantt component, the Splitter separates the TreeGrid section from the Chart section. You can change the position of the Splitter when loading the Gantt component using the [`splitterSettings`](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings/) property. By splitting the TreeGrid from the chart, the width of the TreeGrid and chart sections will vary in the component. The [`splitterSettings.position`](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings/#position) property denotes the percentage of the TreeGrid section’s width to be rendered and this property supports both pixels and percentage values. You can define the splitter position as column index value using the [`splitterSettings.columnIndex`](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings/#columnindex) property. You can also define the splitter position with built-in splitter view modes by using the [`splitterSettings.view`](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings/#view) property. The following list is the possible values for this property:

* `Default`: Shows Grid side and Gantt side.
* `Grid`: Shows Grid side alone in Gantt.
* `Chart`: Shows chart side alone in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/how-to-splitter-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/how-to-splitter-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-splitter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to-splitter-cs1" %}

## Changing splitter view

In the Gantt component, it is possible to change the view of the component to a grid view, a chart view, or both using the dropdown menu. This can be achieved by customizing the toolbar, which allows to add  custom toolbar items using the `template` attribute.
Refer below link for more details.

* [To Add Custom Toolbar items](https://ej2.syncfusion.com/react/documentation/gantt/tool-bar)

To add a custom dropdown menu to the toolbar, use the `DropDownList` component which is available in `@syncfusion/ej2-react-dropdowns` library.

After enabling the dropdown menu in the toolbar, pass the data to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/dropDownListModel/#datasource) property. To modify the component's view, use the [`change`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/dropDownListModel/#change) property. To do this, call the [`setSplitterPosition`](https://ej2.syncfusion.com/react/documentation/api/gantt/#setsplitterposition) method on the `ganttInstance` with the `value` and `type` of splitter property as an parameter, after checking with the user's choice and the given data condition is true.

The following code example shows, how to enable the dropdown menu in the Toolbar and change view of the Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/changeSplitterDynamically-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/changeSplitterDynamically-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/changeSplitterDynamically-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/changeSplitterDynamically-cs2" %}

## Change splitter position dynamically

In Gantt, we can change the splitter position dynamically by using [`setSplitterPosition`](https://ej2.syncfusion.com/react/documentation/api/gantt/#setsplitterposition) method. We can change the splitter position by passing value and type parameter to [`setSplitterPosition`](https://ej2.syncfusion.com/react/documentation/api/gantt/#setsplitterposition) method. Type parameter will accept one of the following values 'position', 'columnIndex', 'viewType'. The following code example shows how to use this method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/changeSplitterDynamically-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/changeSplitterDynamically-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/changeSplitterDynamically-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/changeSplitterDynamically-cs1" %}
