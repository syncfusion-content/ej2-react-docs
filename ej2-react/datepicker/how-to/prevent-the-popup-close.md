---
layout: post
title: Prevent the DatePicker popup from closing in React Datepicker component | Syncfusion
description: Learn here all about Prevent the DatePicker popup from closing in Syncfusion React Datepicker component of Syncfusion Essential JS 2 and more.
control: Prevent the DatePicker popup from closing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Prevent the DatePicker popup from closing in React Datepicker component

The DatePicker popup can be prevented from closing by calling the `preventDefault` method within the `close` event. This is useful for scenarios where additional validation or confirmation is required before allowing the popup to dismiss.

The following example demonstrates how to prevent the DatePicker popup from closing by intercepting the close event:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs16" %}