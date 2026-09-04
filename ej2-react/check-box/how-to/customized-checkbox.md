---
layout: post
title: Customize in React Checkbox | Syncfusion
description: Customize the React Checkbox look with custom CSS classes. Build variant styles for primary, success, warning, danger, and informational states.
control: Customized checkbox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize in React Checkbox

## Customize React Checkbox appearance

Customize the React Checkbox component's appearance by defining CSS rules and assigning the class name to the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/check-box#cssclass) property. Custom CSS allows you to modify colors, borders, and visual styles for different React Checkbox variants.

The following example demonstrates how to create React Checkbox variants by customizing the background and border colors to represent primary, success, warning, danger, and informational states:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/howto-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/howto-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/howto-cs1" %}

## Custom frame

Customize the React Checkbox frame by adding CSS rules to modify its shape and appearance. The following example demonstrates how to create round React Checkboxes by setting the `border-radius` to `100%` using the `e-custom` class:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/custom-frame-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/custom-frame-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/custom-frame-cs1" %}

## Custom check icon

Customize the React Checkbox check icon by adding CSS rules to modify the icon content, background, and border colors. The following example demonstrates how to customize the check icon appearance in focus and hovered states using the `e-checkicon` class:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/custom-frame-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/custom-frame-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/custom-frame-cs2" %}