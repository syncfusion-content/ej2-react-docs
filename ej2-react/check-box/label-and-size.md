---
layout: post
title: Label and size in React Checkbox | Syncfusion
description: Set the React Checkbox caption via the label property, control label position with labelPosition, and configure the small or standard size.
control: Label and size 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Label and size in React Checkbox

This section explains the different sizes and labels available in the React Checkbox component.

## Label

Define the React Checkbox caption using the [`label`](https://ej2.syncfusion.com/react/documentation/api/check-box#label) property. This eliminates the need for separate label elements. Customize the label position before or after the React Checkbox using the [`labelPosition`](https://ej2.syncfusion.com/react/documentation/api/check-box#labelposition) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/label-and-size-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/label-and-size-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/label-and-size-cs1" %}

## Size

The React Checkbox component offers two size options: default and small. Apply the small size by setting the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/check-box#cssclass) property to `e-small`. Use small React Checkboxes in compact layouts or data tables.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/label-and-size-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/label-and-size-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/label-and-size-cs2" %}

## See Also

* [React Checkbox customization](./how-to/customized-checkbox)