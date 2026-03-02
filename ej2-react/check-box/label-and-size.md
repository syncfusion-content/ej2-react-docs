---
layout: post
title: Label and size in React Check box component | Syncfusion
description: Learn here all about Label and size in Syncfusion React Check box component of Syncfusion Essential JS 2 and more.
control: Label and size 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Label and size in React Check box component

This section explains the different sizes and labels available in the CheckBox component.

## Label

Define the CheckBox caption using the [`label`](https://ej2.syncfusion.com/react/documentation/api/check-box#label) property. This eliminates the need for separate label elements. Customize the label position before or after the CheckBox using the [`labelPosition`](https://ej2.syncfusion.com/react/documentation/api/check-box#labelposition) property.

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

The CheckBox component offers two size options: default and small. Apply the small size by setting the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/check-box#cssclass) property to `e-small`. Use small checkboxes in compact layouts or data tables.

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

* [CheckBox customization](./how-to/customized-checkbox)