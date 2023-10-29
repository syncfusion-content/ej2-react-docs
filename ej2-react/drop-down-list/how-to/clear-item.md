---
layout: post
title: Clear item in React Drop down list Component | Syncfusion
description: Learn here all about clear item in Syncfusion Essential React Drop down list component, it's elements and more.
control: Clear item 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Clear item in React Drop down list Component

You can clear the selected item in the below two different ways.

By clicking on the `clear icon` which is shown in DropDownList element, you can clear the selected item in DropDownList through **interaction**. By using[`showClearButton`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#showclearbutton) property, you can enable the clear icon in DropDownList element.

Through **programmatic** you can set `null` value to anyone of the index, text or value property to clear the selected item in DropDownList.

The following example demonstrate about how to clear the selected item in DropDownList.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/clear-text-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/clear-text-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/clear-text-cs1" %}