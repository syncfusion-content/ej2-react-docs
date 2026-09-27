---
layout: post
title: Manually Refresh Layout in React Scheduler | Syncfusion
description: Learn how to manually refresh specific templates and the overall layout in the Syncfusion React Scheduler without re-rendering the entire component.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Manually Refresh Layout in React Scheduler

## Refresh template

In the [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler), you can refresh specific template elements without re-rendering the entire component by using the [`refreshTemplates`](https://ej2.syncfusion.com/react/documentation/api/schedule#refreshtemplates) public method. You can use this method to refresh specific templates or all templates together. The following template names are accepted as arguments when you want to refresh them individually:

* `eventTemplate`
* `dateHeaderTemplate`
* `resourceHeaderTemplate`
* `quickInfoTemplates`
* `editorTemplate`
* `tooltipTemplate`
* `headerTooltipTemplate`

The following code example shows how to use the `refreshTemplates` method to refresh multiple templates. Here, the following Scheduler templates are used: [`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#celltemplate), [`dateHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#dateheadertemplate), [`eventTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#eventtemplate), and [`resourceHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#resourceheadertemplate).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/refresh-templates-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/refresh-templates-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/refresh-templates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/refresh-templates-cs1" %}

## Refresh layout

In the Scheduler, you can refresh the layout manually without re-rendering the DOM element by using the [`refreshLayout`](https://ej2.syncfusion.com/react/documentation/api/schedule#refreshlayout) public method. The following code example shows how to use the `refreshLayout` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/refresh-layout-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/refresh-layout-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/refresh-layout-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/refresh-layout-cs1" %}
