---
layout: post
title: Tooltip in React Stepper | Syncfusion
description: Show a hover tooltip on each Syncfusion React Stepper step by setting `showTooltip` to `true` and customize it with the `tooltipTemplate` property.
control: Stepper
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in React Stepper

The React Stepper component supports tooltip to show additional information in the steps by setting the [showTooltip](https://ej2.syncfusion.com/react/documentation/api/stepper/#showtooltip) property to `true`. 

The tooltip appears when the user hovers over the step, providing the information such as the label or text. By default, the `showTooltip` property is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/tooltip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/tooltip/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/tooltip/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/tooltip" %}

## Tooltip template

You can use the [tooltipTemplate](https://ej2.syncfusion.com/react/documentation/api/stepper#tooltiptemplate) property to specify a custom template for the tooltips, providing detailed information about the steps.

When hovering over the step, the current step model is passed in the template context, allowing you to include dynamic information about the step.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/tooltip-template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/tooltip-template/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/tooltip-template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/tooltip-template" %}

