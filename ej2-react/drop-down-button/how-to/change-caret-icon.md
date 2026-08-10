---
layout: post
title: How to change caret icon in React DropDownButton | Syncfusion
description: Swap the React DropDownButton caret icon based on popup state using the beforeOpen and beforeClose events to toggle the e-caret-up class.
control: Change caret icon 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to change caret icon in React DropDownButton

Customize the dropdown caret icon based on the popup state using the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#beforeopen) and [`beforeClose`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#beforeclose) events. These events allow you to change the icon appearance when the popup opens or closes.

The following example demonstrates how to update the caret icon dynamically by adding or removing the `e-caret-up` class in the `beforeOpen` and `beforeClose` events:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/updown-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/updown-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/updown-cs1" %}