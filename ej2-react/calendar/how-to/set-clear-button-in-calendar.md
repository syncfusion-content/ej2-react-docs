---
layout: post
title: Set clear button in calendar in React Calendar component | Syncfusion
description: Learn here all about Set clear button in calendar in Syncfusion React Calendar component of Syncfusion Essential JS 2 and more.
control: Set clear button in calendar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set clear button in calendar in React Calendar component

The following steps illustrate how to configure a clear button in the Calendar UI.

* During the Calendar's [`created`](https://ej2.syncfusion.com/react/documentation/api/calendar#created) event, add the required elements for the clear button. This example uses a div with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Button component.

* Add the `e-footer` class to the div to make it act as the footer.

* Use the button to clear the selected date.

* Bind the necessary event handler to the button to update the Calendar's value.

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