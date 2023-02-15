---
layout: post
title: Localization in React Combo box component | Syncfusion
description: Learn here all about Localization in Syncfusion React Combo box component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in React Combo box component

The Localization library allows you to localize static text content of the [noRecordsTemplate](https://ej2.syncfusion.com/react/documentation/api/combo-box/#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/react/documentation/api/combo-box/#actionfailuretemplate) &nbsp;property according to the culture currently assigned to the ComboBox.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |
| actionFailureTemplate | The request failed |

## Loading translations

To load translation object to your application, use load function of the **L10n** class.

In the following sample, French culture is set to the ComboBox and no data is loaded. Hence, the `noRecordsTemplate` property displays its text in French culture initially, and if the sample is run offline, the `actionFailureTemplate` property displays its text appropriately.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs31/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs31/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs31" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs32/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs32/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs32" %}

## See Also

* [Accessibility](./accessibility/)
* [How to bind the data to the combobox](./data-binding/)