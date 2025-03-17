---
layout: post
title: States in React Check box component | Syncfusion
description: Learn here all about States in Syncfusion React Check box component of Syncfusion Essential JS 2 and more.
control: States 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# States in React Check box component

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 CheckBox contains 3 different states visually, they are:
* Checked
* Unchecked
* Indeterminate

## Checked and Unchecked

The CheckBox [`checked`](https://ej2.syncfusion.com/react/documentation/api/check-box#checked) property is used to handle the checked and unchecked state. In checked state a tick mark will be added to the visualization of CheckBox.

## Indeterminate

The CheckBox indeterminate state can be set through [`indeterminate`](https://ej2.syncfusion.com/react/documentation/api/check-box#indeterminate) property. CheckBox indeterminate state masks the real value of CheckBox visually. The Checkbox cannot be changed to indeterminate state through the user interface, this state can be achieved only through the property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/label-and-size-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/label-and-size-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/label-and-size-cs3" %}