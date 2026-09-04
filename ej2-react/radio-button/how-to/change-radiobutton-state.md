---
layout: post
title: How to change state in React Radio Button | Syncfusion
description: Toggle the React Radio Button checked state programmatically via the checked property to display or hide the inner selection indicator.
control: Change radiobutton state 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to change state in React Radio Button

The React Radio Button component has two visual states that indicate its selection status:
* **Checked** - An inner circle appears inside the React Radio Button, indicating it is selected
* **Unchecked** - The React Radio Button appears empty, indicating it is not selected

Use the [`checked`](https://ej2.syncfusion.com/react/documentation/api/radio-button/#checked) property to programmatically control the React Radio Button's selection state. When `checked` is set to `true`, the inner circle visual indicator is displayed to users.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/radio-button/label-and-size-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/radio-button/label-and-size-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/radio-button/label-and-size-cs1" %}