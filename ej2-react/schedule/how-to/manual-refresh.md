---
layout: post
title: Manual refresh in React Schedule component | Syncfusion
description: Learn here all about Manual refresh in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Manual refresh 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Manual refresh in React Schedule component

## Refresh Template

In Scheduler, we can able to refresh the elements of the template alone instead of the entire scheduler by using the [`refreshTemplates`](https://ej2.syncfusion.com/react/documentation/api/schedule#refreshtemplates) public method. We can provide an additional option to refresh specific templates alone or all templates together by using this method. The following template names are accepted as an argument to refresh it specifically.

* eventTemplate
* dateHeaderTemplate
* resourceHeaderTemplate
* quickInfoTemplates
* editorTemplate
* tooltipTemplate
* headerTooltipTemplate

In the following code example, you can see how to use the refreshTemplates method to refresh multiple templates. Here, we have added the following scheduler templates such as [`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#celltemplate), [`dateHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#dateheadertemplate), [`eventTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#eventtemplate) and [`resourceHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#resourceheadertemplate)

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

## Refresh Layout

In Scheduler, we can able to refresh the layout manually without re-render the DOM element by using the [`refreshLayout`](https://ej2.syncfusion.com/react/documentation/api/schedule#refreshlayout) public method.  The following example code explains to know how to use the refreshLayout method.

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
