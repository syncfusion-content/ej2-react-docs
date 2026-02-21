---
layout: post
title: Localization in React MultiColumn Combobox component | Syncfusion
description: Checkout and learn about Localization in React MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: MultiColumn Combobox
documentation: ug
domainurl: ##DomainURL##
---

# Localization in React MultiColumn ComboBox component

The Localization library allows you to localize static text content of the [noRecordsTemplate](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/#norecordstemplate) property according to the culture currently assigned to the MultiColumn ComboBox.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |

## Loading translations

Load translation objects into your application using the `load` function of the **L10n** class.

In the following example, the MultiColumn ComboBox is configured for French culture with no data loaded. The noRecordsTemplate property displays text in French culture:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/localization/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/localization/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/localization" %}
