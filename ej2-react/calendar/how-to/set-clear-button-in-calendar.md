---
layout: post
title: How to set clear button in React Calendar | Syncfusion
description: Add a clear button to the React Calendar footer during the created event so users can reset the selected date in one click.
control: Set clear button in calendar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set clear button in React Calendar

The following steps illustrate how to add a **Clear** button to the React Calendar UI that resets the selected value when clicked.

1. Handle the React Calendar's [`created`](https://ej2.syncfusion.com/react/documentation/api/calendar#created) event and append the clear-button elements to the React Calendar footer. This example uses a `div` containing a Syncfusion Button component.

2. Add the `e-footer` class to the `div` so that Syncfusion treats the element as part of the React Calendar footer.

3. Bind a `click` event handler on the button to clear the selected date by setting the `value` property to `null` (or `undefined`).

4. Ensure the `value` property update is applied through state, the component instance, or a bound handler so the React Calendar re-renders to reflect the cleared selection.

> The `e-footer` class is required. Without it, the appended element renders inside the body of the page, not the React Calendar's footer region.

The following code example demonstrates the implementation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/how-to-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/how-to-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/how-to-cs1" %}