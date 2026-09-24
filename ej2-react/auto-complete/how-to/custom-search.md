---
layout: post
title: How to custom search in React AutoComplete | Syncfusion
description: Highlight matched characters in the Syncfusion React AutoComplete suggestion list using the highlight property and a custom e-highlight CSS class.
control: Custom search 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to custom search in React AutoComplete

The React AutoComplete has built-in support to highlight the searched characters in the suggestion list when the [`highlight`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#highlight) property is enabled. The `highlight` property accepts a value of the `HighlightType` enum whose default value is `None`. The accepted values are `None`, `StartsWith`, and `StartEnd`; setting any value other than `None` enables the highlight behavior.

In the following sample, the matched characters in the suggestion list are customized using the `e-highlight` class. Define the `e-highlight` class in your application's CSS (for example, in `index.css` or `App.css`) and import it into the component so the matched characters are styled accordingly.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/highlight-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/highlight-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/highlight-cs1" %}

Type a character into the React AutoComplete input to see the matching characters highlighted in the suggestion list using the `e-highlight` class.

## See also

* [Filtering in React AutoComplete](../filtering)
* [React AutoComplete `highlight` API reference](https://ej2.syncfusion.com/react/documentation/api/auto-complete#highlight)