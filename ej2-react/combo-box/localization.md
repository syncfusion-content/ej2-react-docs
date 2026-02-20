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

The Localization library enables you to translate static text content in the [noRecordsTemplate](https://ej2.syncfusion.com/react/documentation/api/combo-box/#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/react/documentation/api/combo-box/#actionfailuretemplate) properties based on the ComboBox's assigned culture.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |
| actionFailureTemplate | The request failed |

## Loading translations

Use the **L10n** class's load function to register translation objects in your application.

In the following example, French culture is applied to the ComboBox. With no data loaded, the `noRecordsTemplate` displays French text. If run offline, the `actionFailureTemplate` also displays in the configured culture.

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