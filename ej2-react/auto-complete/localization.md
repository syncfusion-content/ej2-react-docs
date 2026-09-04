---
layout: post
title: Localization in React AutoComplete | Syncfusion
description: Localize the Syncfusion React AutoComplete's noRecordsTemplate and actionFailureTemplate text using the L10n class and any culture such as fr-FR.
control: Localization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in React AutoComplete

The Localization library allows you to localize the static text of the [`noRecordsTemplate`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#norecordstemplate) and [`actionFailureTemplate`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#actionfailuretemplate) properties based on the React AutoComplete's current culture. The default text values for the `en-US` culture are shown below; these property names are also used as the keys passed to `L10n.load()`.

| Property | Default text (en-US) |
|------|------|
| `noRecordsTemplate` | No Records Found |
| `actionFailureTemplate` | The Request Failed |

> The `placeholder` text shown in the samples is set directly via the `placeholder` prop and is not part of the L10n translation object.

## Setting the locale

Set the [`locale`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#locale) property on the React AutoComplete to the desired culture code (for example, `fr-BE` for French as used in Belgium). Culture codes follow the BCP-47 standard (e.g., `fr-BE`, `de-DE`, `es-ES`); use the appropriate code for the culture you want to apply. The `L10n.load()` method must provide matching translations for that code.

## Loading translations

To load a translation object into the application, use the `L10n.load()` method of the **L10n** class. The translation keys for the React AutoComplete must be scoped under the `dropdowns` namespace so the component can resolve them at runtime. Call `L10n.load()` before the component renders — in a class component, place it in `componentDidMount` or at module level; in a functional component, call it inside a `useEffect` hook.

In the following sample, the `fr-BE` culture is applied to the React AutoComplete. To demonstrate the `noRecordsTemplate`, the query uses `take(0)` so that no records are returned initially; the `noRecordsTemplate` text appears in French. To see the `actionFailureTemplate` in French, simulate a failed request by going offline (disconnect the network) or by pointing the `DataManager` URL to an invalid endpoint — the French failure text appears when the request fails.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs24/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs24" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs25/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs25" %}

## See also

* [Accessibility](./accessibility)
* [Bind data to the React AutoComplete](./data-binding)