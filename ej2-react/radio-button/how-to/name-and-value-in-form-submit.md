---
layout: post
title: Name and value in React Radio Button Component | Syncfusion
description: Learn here all about name and value in form submit in Syncfusion Essential React Radio button component, it's elements and more.
control: Name and value in form submit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Name and value in React Radio Button Component

The [`name`](https://ej2.syncfusion.com/react/documentation/api/radio-button/#name) attribute of the RadioButton is used to group RadioButton. When the RadioButton are grouped in form, the checked items [`value`](https://ej2.syncfusion.com/react/documentation/api/radio-button/#value) attribute will be post to server on form submit that can be retrieved through the name. The disabled and unchecked RadioButton value will not be sent to the server on form submit.

In the following code snippet, Credit / Debit card is in checked state.Now, the value that is in checked state will be sent on form submit.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/radio-button/form-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/radio-button/form-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/radio-button/form-cs1" %}