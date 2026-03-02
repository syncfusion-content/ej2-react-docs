---
layout: post
title: Change radiobutton state in React Radio button component | Syncfusion
description: Learn here all about Change radiobutton state in Syncfusion React Radio button component of Syncfusion Essential JS 2 and more.
control: Change radiobutton state 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Change radiobutton state in React Radio button component

The RadioButton component has two visual states that indicate its selection status:
* **Checked** - An inner circle appears inside the RadioButton, indicating it is selected
* **Unchecked** - The RadioButton appears empty, indicating it is not selected

Use the [`checked`](https://ej2.syncfusion.com/react/documentation/api/radio-button/#checked) property to programmatically control the RadioButton's selection state. When `checked` is set to `true`, the inner circle visual indicator is displayed to users.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/radio-button/label-and-size-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/radio-button/label-and-size-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/radio-button/label-and-size-cs1" %}