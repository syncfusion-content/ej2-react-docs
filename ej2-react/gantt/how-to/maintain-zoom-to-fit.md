---
layout: post
title: Maintain Zoom to Fit in React Gantt Chart Component | Syncfusion
description: Learn here all about Maintain zoom to fit in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Maintain zoom to fit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Maintain Zoom to Fit in React Gantt Chart Component

In the Gantt control, While performing edit actions or dynamically change dataSource, the timeline gets refreshed. When zoomToFit toolbar item is clicked and perform editing actions or dynamically change dataSource, the timeline gets refreshed. So that, the timeline will not fit to the project any more.

## Maintain zoomToFit after edit actions

We can maintain `zoomToFit` after editing actions(cell edit,dialog edit,taskbar edit) by using [fitToProject](https://ej2.syncfusion.com/react/documentation/api/gantt#fittoproject) method in `actionComplete` and `taskbarEdited` event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/how-to-maintainzoomtofit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/how-to-maintainzoomtofit-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-maintainzoomtofit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to-maintainzoomtofit-cs1" %}

## Maintain zoomToFit after change dataSource dynamically

We can maintain `zoomToFit` after change dataSource dynamically, by calling [fitToProject](https://ej2.syncfusion.com/react/documentation/api/gantt#fittoproject) method in dataBound event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/how-to-maintainzoomtofitdatasource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/how-to-maintainzoomtofitdatasource-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-maintainzoomtofitdatasource-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to-maintainzoomtofitdatasource-cs1" %}