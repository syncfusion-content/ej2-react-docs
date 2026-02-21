---
layout: post
title: Localization in React Mention component | Syncfusion
description: Learn here all about Localization in Syncfusion React Mention component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in React Mention component

The Localization library allows you to localize static text content of the [noRecordsTemplate](https://ej2.syncfusion.com/react/documentation/api/mention/#norecordstemplate) &nbsp;properties according to the culture currently assigned to the Mention.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |

## Loading translations

Load translation objects into your application using the load function of the **L10n** class.

In the following example, the Mention component is configured for French culture with no data loaded. The [noRecordsTemplate](https://ej2.syncfusion.com/react/documentation/api/mention/#norecordstemplate) displays text in French culture initially:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/localization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/localization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/localization-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/localization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/localization-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/localization-cs2" %}

## See Also

* [Accessibility](./accessibility)
* [How to bind the data to the mention](./data-binding)