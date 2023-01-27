---
layout: post
title: Appearance customization in React Gantt component | Syncfusion
description: Learn here all about Appearance customization in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Appearance customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Appearance customization in React Gantt component

## Taskbar customization

### Taskbar Height

Height of child taskbars and parent taskbars can be customized by using [`taskbarHeight`](https://ej2.syncfusion.com/react/documentation/api/gantt/#taskbarheight) property. The following code example shows how to use the property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/appearanceandstyle-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearanceandstyle-cs1" %}

> NOTE
The [`taskbarHeight`](https://ej2.syncfusion.com/react/documentation/api/gantt/#taskbarheight) value should be lower than the [`rowHeight`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowheight) property value and these properties accept only pixel values.

### Conditional formatting

The default taskbar UI can be replaced with custom templates using the [`queryTaskbarInfo`](https://ej2.syncfusion.com/react/documentation/api/gantt/#querytaskbarinfo) event. The following code example shows customizing the taskbar UI based on task progress values in the Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/appearanceandstyle-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearanceandstyle-cs2" %}

### Taskbar template

You can design your own taskbars to view the tasks in Gantt by using [`taskbarTemplate`](https://ej2.syncfusion.com/react/documentation/api/gantt/#taskbartemplate) property. And it is possible to map the template script element’s ID value to this property. It is also possible to customize the parent taskbars and milestones with custom templates by using [`parentTaskbarTemplate`](https://ej2.syncfusion.com/react/documentation/api/gantt/#parenttaskbartemplate) and [`milestoneTemplate`](https://ej2.syncfusion.com/react/documentation/api/gantt/#milestonetemplate) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/customization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/customization-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/customization-cs1" %}

### Change gripper icon in taskbar

You can change the gripper icon in the taskbar by applying styles to their respective class elements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/change-gripper-icon-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/change-gripper-icon-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/change-gripper-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/change-gripper-icon-cs1" %}

## Task labels

The Gantt component maps any data source fields to task labels using the [`labelSettings.leftLabel`](https://ej2.syncfusion.com/react/documentation/api/gantt/labelSettings/#leftlabel), [`labelSettings.rightLabel`](https://ej2.syncfusion.com/react/documentation/api/gantt/labelSettings/#rightlabel), and [`labelSettings.taskLabel`](https://ej2.syncfusion.com/react/documentation/api/gantt/labelSettings/#tasklabel) properties. You can customize the task labels with templates.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/customization1-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/customization1-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/customization1-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/customization1-cs1" %}

## Connector lines

The width and background color of connector lines in Gantt can be customized using the [`connectorLineWidth`](https://ej2.syncfusion.com/react/documentation/api/gantt/#connectorlinewidth) and [`connectorLineBackground`](https://ej2.syncfusion.com/react/documentation/api/gantt/#connectorlinebackground) properties. The following code example shows how to use these properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/appearanceandstyle-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearanceandstyle-cs3" %}

## Customize rows and cells

While rendering the TreeGrid part in Gantt, the [`rowDataBound`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowdatabound) and [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/gantt/#querycellinfo) events trigger for every row and cell. Using these events, you can customize the rows and cells. The following code example shows how to customize the cell and row elements using these events.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/appearanceandstyle-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearanceandstyle-cs4" %}

## Grid lines

In the Gantt component, you can show or hide the grid lines in the TreeGrid side and chart side by using the [`gridLines`](https://ej2.syncfusion.com/react/documentation/api/gantt/gridLine/) property.

The following options are available in the Gantt component for rendering the grid lines:

* Horizontal: The horizontal grid lines alone will be visible.
* Vertical: The vertical grid lines alone will be visible.
* Both: Both the horizontal and vertical grid lines will be visible on the TreeGrid and chart sides.
* None: Gridlines will not be visible on TreeGrid and chart sides.

> By default, the [`gridLines`](https://ej2.syncfusion.com/react/documentation/api/gantt/gridLine/) property is set to `Horizontal` type.

The following code example shows how to change the gridlines rendering mode in the Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/appearanceandstyle-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearanceandstyle-cs5" %}

## Splitter

In the Gantt component, the Splitter separates the TreeGrid section from the Chart section. You can change the position of the Splitter when loading the Gantt component using the [`splitterSettings`](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings/) property. By splitting the TreeGrid from the chart, the width of the TreeGrid and chart sections will vary in the component. The [`splitterSettings.position`](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings/#position) property denotes the percentage of the TreeGrid section’s width to be rendered and this property supports both pixels and percentage values. You can define the splitter position as column index value using the [`splitterSettings.columnIndex`](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings/#columnindex) property. You can also define the splitter position with built-in splitter view modes by using the [`splitterSettings.view`](https://ej2.syncfusion.com/react/documentation/api/gantt/splitterSettings/#view) property. The following list is the possible values for this property:

* `Default`: Shows Grid side and Gantt side.
* `Grid`: Shows Grid side alone in Gantt.
* `Chart`: Shows chart side alone in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/how-to splitter-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/how-to splitter-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to splitter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to splitter-cs1" %}

### Change splitter position dynamically

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
