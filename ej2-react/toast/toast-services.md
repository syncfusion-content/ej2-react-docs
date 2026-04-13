---
layout: post
title: Toast services in React Toast component | Syncfusion
description: Learn here all about Toast services in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Toast services and utility functions

The Toast component provides utility functions for displaying toasts without requiring component instantiation or DOM container setup. This approach enables showing toasts programmatically "on-the-go" with minimal code. The utility functions are ideal for global notifications triggered from anywhere in the application.

## Predefined toast types

Display formatted toasts using `ToastUtility.show()` with predefined types. The Syncfusion Toast component provides four semantic toast types with built-in styling for common notification scenarios. Specify only the type and content—styling is applied automatically without custom CSS classes.

**Available toast types and their uses:**

| Property | Description |
|---|---|
| `content` | Message text displayed in the toast |
| `type` | Toast type: `Information`, `Success`, `Error`, or `Warning` (each with predefined styling) |
| `timeOut` | Display duration in milliseconds; set to 0 for persistent display |

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs45/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs45/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs45" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs46/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs46/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs46" %}

## Custom toast configuration

For advanced customization beyond predefined types, pass a [ToastModel](https://ej2.syncfusion.com/react/documentation/api/toast/toastModel/) object to the utility function. The ToastModel enables specifying any Toast property including events, position, close buttons, action buttons, animations, and custom templates. This approach provides full Toast functionality while maintaining the convenience of utility-based display.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs47/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs47/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs47" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs48/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs48/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs48" %}