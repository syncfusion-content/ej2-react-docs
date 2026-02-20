---
layout: post
title: Localization in React AutoComplete component | Syncfusion
description: Learn here all about Localization in Syncfusion React AutoComplete component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in React AutoComplete component

The Localization library allows you to localize the static text content of the [noRecordsTemplate](https://ej2.syncfusion.com/react/documentation/api/auto-complete#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/react/documentation/api/auto-complete#actionfailuretemplate) properties according to the culture currently assigned to the AutoComplete.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No Records Found |
| actionFailureTemplate | The Request Failed |

## Loading translations

To load a translation object to the application, use the load function of the **L10n** class.

In the following sample, French culture is set to the AutoComplete and no data is loaded. Hence, the `noRecordsTemplate` property displays its text in French culture initially, and if the sample is run offline, then the `actionFailureTemplate` property displays its text appropriately.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs24/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs24" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs25/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs25" %}

## See Also

* [Accessibility](./accessibility)
* [How to bind the data to the autocomplete](./data-binding)