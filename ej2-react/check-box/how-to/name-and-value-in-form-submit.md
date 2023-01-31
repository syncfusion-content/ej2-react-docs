---
layout: post
title: Name and value in form submit in React Check box component | Syncfusion
description: Learn here all about Name and value in form submit in Syncfusion React Check box component of Syncfusion Essential JS 2 and more.
control: Name and value in form submit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Name and value in form submit in React Check box component

The [`name`](https://ej2.syncfusion.com/react/documentation/api/check-box/#name) attribute of the CheckBox is used to group Checkboxes. When the Checkboxes are grouped in form, the checked items [`value`](https://ej2.syncfusion.com/react/documentation/api/check-box/#value) attribute will post to the server on form submit which can be retrieved through the name. The disabled and unchecked CheckBox value will not be sent to the server on form submit.

In the following code snippet, Cricket and Hockey are in the checked state, Tennis is in [`disabled`](https://ej2.syncfusion.com/react/documentation/api/check-box/#disabled) state and Basketball is in unchecked state. Now, the value that is in checked state only be sent on form submit.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/form-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/form-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/form-cs1" %}