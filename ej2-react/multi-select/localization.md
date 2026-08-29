---
layout: post
title: Localization in React MultiSelect Dropdown | Syncfusion
description: Localize the React MultiSelect Dropdown no-records and action-failure template strings for any culture using the L10n class's load function with translation objects.
control: Localization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in React MultiSelect Dropdown

The Localization library enables you to translate static text content for the [noRecordsTemplate](https://ej2.syncfusion.com/react/documentation/api/multi-select/#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/react/documentation/api/multi-select/#actionfailuretemplate) properties based on the MultiSelect's assigned culture.

| Locale key | en-US (default)  | fr-FR |
|------|------|------|
| noRecordsTemplate |  No records found | Aucun enregistrement trouvé |
| actionFailureTemplate | The request failed | La demande a échoué |

For full culture localization (date and number formatting), load the required CLDR JSON files using the `loadCldr` function. See the [globalization guide](https://ej2.syncfusion.com/react/documentation/common/internationalization/) for details. Use the `L10n.load()` function, described in the next section, to override these locale keys for the MultiSelect.

## Load translations

Use the **L10n** class's load function to register translation objects in your application before the MultiSelect renders.

```tsx
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
  fr: {
    noRecordsTemplate: 'Aucun enregistrement trouvé',
    actionFailureTemplate: 'La demande a échoué'
  }
});
```

In the following example, French culture is applied to the MultiSelect by setting the `locale="fr"` prop. With no data loaded, the `noRecordsTemplate` displays French text. When the data request fails, the `actionFailureTemplate` also displays in the configured culture.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs30/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs30" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs31/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs31/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs31" %}

## See Also

* [Accessibility](./accessibility.md)
* [How to bind the data to the multiselect](./data-binding.md)