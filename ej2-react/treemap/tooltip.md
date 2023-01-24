---
layout: post
title: Tooltip in React Treemap component | Syncfusion
description: Learn here all about Tooltip in Syncfusion React Treemap component of Syncfusion Essential JS 2 and more.
control: Tooltip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in React Treemap component

Tooltip is used to display details about the items in the TreeMap. When space constraints prevent us from displaying the information using Data Labels, the tooltip comes in handy.

## Default tooltip

The tooltip is not visible by default, to make it visible, set the [`visible`](https://ej2.syncfusion.com/react/documentation/api/treemap/tooltipSettingsModel/#visible) property in the [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/treemap/#tooltipsettings) to **true** and injecting the `TreeMapTooltip` module.

<<<<<<
{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/tooltip-cs1" %}

## Format tooltip

The tooltip content is displayed by default based on the [`weightValuePath`](https://ej2.syncfusion.com/react/documentation/api/treemap/#weightvaluepath). In addition, to show more information in the tooltip, use the [`format`](https://ej2.syncfusion.com/react/documentation/api/treemap/tooltipSettingsModel/#format) property and define field from the data source as `${datafield}`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/tooltip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/tooltip-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/tooltip-cs2" %}

## Tooltip template

Tooltip can be rendered as a custom component using the [`template`](https://ej2.syncfusion.com/react/documentation/api/treemap/tooltipSettingsModel/#template) property in the [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/treemap/#tooltipsettings) which accepts one or more UI elements as an input, that can be rendered as a part of the tooltip rendering. You can use `${datafield}` as placeholder in HTML element to display the values from data source.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/tooltip-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/tooltip-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/tooltip-cs3" %}