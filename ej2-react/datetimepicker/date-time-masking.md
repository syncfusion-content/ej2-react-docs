---
layout: post
title: Date time masking in React Datetimepicker component | Syncfusion
description: Learn here all about Date time masking in Syncfusion React Datetimepicker component of Syncfusion Essential JS 2 and more.
control: Date time masking 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Date time masking in React Datetimepicker component

DateTimePicker has `enableMask` property that provides the option to enable the built-in date masking support. Also, you must inject the MaskedDateTime module to enable the masking support.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/mask-module-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/mask-module-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/mask-module-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/mask-module-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/mask-module-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/mask-module-cs2" %}

The mask pattern is defined based on the provided date format to the component. If the format is not specified, the mask pattern is formed based on the default format of the current culture.

| **Keys** | **Actions** |
| --- | --- |
| <kbd>Up / Down arrows</kbd> | To increment and decrement the selected portion of the date and time. |
| <kbd>Left / Right arrows and Tab</kbd> | To navigate the selection from one portion to next portion |

The following example demonstrates default and custom format of DateTimePicker component with mask.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/mask-module-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/mask-module-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/mask-module-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/mask-module-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/mask-module-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/mask-module-cs4" %}

## Configure Mask Placeholder

You can change mask placeholder value through property `maskPlaceholder`. By default , it takes the full name of date and time co-ordinates such as `day`, `month`, `year`, `hour` etc.

While changing to a culture other than `English`, ensure that locale text for the concerned culture is loaded through load method of L10n class for mask placeholder values like below.

```ts
//Load the L10n from ej2-base
import { L10n } from '@syncfusion/ej2-base';

//load the locale object to set the localized mask placeholder value
L10n.load({
'de': {
    datetimepicker: { day: 'Tag' , month: 'Monat', year: 'Jahr', hour: 'Stunde' ,minute: 'Minute', second:'Sekunden' }
}
});
```

The following example demonstrates default and customized mask placeholder value.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/mask-module-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/mask-module-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/mask-module-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/mask-module-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/mask-module-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/mask-module-cs6" %}
