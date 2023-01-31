---
layout: post
title: Form submit in React Button group component | Syncfusion
description: Learn here all about Form submit in Syncfusion React Button group component of Syncfusion Essential JS 2 and more.
control: Form submit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Form submit in React Button group component

The name attribute of the input element is used to group the radio/checkbox type ButtonGroup. When the radio/checkbox type are grouped in the form, the checked items value attribute will be posted to the server on form submit that can be retrieved through the name. The disabled radio/checkbox type value will not be sent to the server on form submit.

In the following code snippet, the radio type ButtonGroup is explained with male value as checked. Now, the value that is in checked state will be sent on form submit.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/form-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/form-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/form-cs1" %}