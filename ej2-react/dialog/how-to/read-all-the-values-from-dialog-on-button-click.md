---
layout: post
title: Read all values on button click in React Dialog | Syncfusion
description: Read all input element values from a React Dialog on footer button click by binding a handler to the buttons property's click action.
control: Read all the values from dialog on button click 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Read all values on button click in React Dialog

Input element values within the Dialog can be read by binding a click handler to the footer buttons. The [`buttons`](https://ej2.syncfusion.com/react/documentation/api/dialog#buttons) property accepts an array of button configurations, each with a `click` handler. Each button configuration uses a `buttonModel` field that follows the Syncfusion [`ButtonModel`](https://ej2.syncfusion.com/react/documentation/api/button#buttonmodel) interface (for example, `content`, `cssClass`, `isPrimary`). For detailed information, refer to the [footer](../template#footer) section.

The approach is as follows:

1. Use React refs (`ref`) on each input element inside the Dialog content.
2. In the footer button's `click` handler, read the `.value` property of each ref to retrieve the input values.
3. Display the values in a confirmation dialog.

> The sample uses Bootstrap CSS classes (`form-group`, `form-control`, `row`, `col-xs-6`, `col-sm-6`, `col-lg-6`, `col-md-6`) for the form and grid layout. Ensure Bootstrap CSS (or an equivalent grid stylesheet) is loaded in your application for the sample to render correctly.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-values-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-values-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-values-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-values-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-values-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-values-cs2" %}