---
layout: post
title: Set clear button in React Calendar Component | Syncfusion
description: Learn here all about set clear button support in Syncfusion Essential React Calendar component, it's elements and more.
control: Set clear button in calendar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set clear button in React Calendar Component

The following steps illustrate how to configure clear button in Calendar UI.

* On [`created`](https://ej2.syncfusion.com/react/documentation/api/calendar/#created) event of Calendar add the required elements to have clear button. Here we have used div with Essential JS 2 Button component.

* Use the `e-footer` class to the div tag to act as the footer.

* And use the button to clear the selected date.

* Bind the required event handler to the button tags to update the value.

Below is the code example

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/how-to-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/how-to-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/how-to-cs1" %}