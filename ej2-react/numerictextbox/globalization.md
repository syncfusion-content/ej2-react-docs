---
layout: post
title: Globalization in React Numerictextbox component | Syncfusion
description: Learn here all about Globalization in Syncfusion React Numerictextbox component of Syncfusion Essential JS 2 and more.
control: Globalization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in React Numerictextbox component

## Localization

Adapt the NumericTextBox component to different languages and regions using the [`Localization`](https://ej2.syncfusion.com/react/documentation/common/globalization/localization) library. Set the [`locale`](https://ej2.syncfusion.com/react/documentation/api/numerictextbox/#locale) property to display UI text in the user's language. The spin button tooltips automatically localize based on the specified culture.

| Locale key | en-US (default)  |
|------|------|
| incrementTitle |  Increment value |
| decrementTitle |  Decrement value |

### Loading translations

To load translation object in your application use `load` function of `L10n` class.

The below example demonstrates the NumericTextBox in `German` culture with the spin buttons tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started-cs9" %}

## Internationalization

Implement culture-specific number formatting and parsing using the [Internationalization library](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization), which leverages official [Unicode CLDR](http://cldr.unicode.org/) JSON data. The NumericTextBox includes built-in internationalization support through the `loadCldr` method for loading culture-specific CLDR data.

By default, all Essential<sup style="font-size:70%">&reg;</sup> JS 2 components use English culture ('en-US'). To support additional cultures, follow these steps:

1. **Install CLDR data** using the package manager:

    ```bash
    npm install cldr-data --save
    ```

    This installs Unicode CLDR JSON data. After installation, culture-specific data is available at `\node_modules\cldr-data`.

2. **Import CLDR data** for your target culture into the `app.tsx` file:

    ```ts
     import * as currencies from 'cldr-data/main/de/currencies.json';
     import * as numbers from 'cldr-data/main/de/numbers.json';
     import * as currencyData from 'cldr-data/supplemental/currencyData.json';
     import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';

     loadCldr(numberingSystems, currencies, numbers, currencyData);
   ```

> if you are facing the error `/node_modules/cldr-data/main/de/*.json (1,1): unused expression, expected an assignment or function call` when you are adding the json files to render the culture sample, then add the below configuration in your `tslint.json` file

    ```ts

   "linterOptions": {
     "exclude": [
       "*.json",
       "**/*.json"
     ]
   }

  ```

3. **Set the locale** using the [`locale`](https://ej2.syncfusion.com/react/documentation/api/numerictextbox/#locale) property on the NumericTextBox component.

The below example demonstrates the NumericTextBox in `German` culture with the `EUR` currency format.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="currencies.jsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/app/currencies.jsx %}
{% endhighlight %}
{% highlight js tabtitle="currencydata.jsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/app/currencyData.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/app/numbers.jsx %}
{% endhighlight %}
{% highlight js tabtitle="settings.jsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs1/app/settings.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/internationalization-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="currencies.jsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs2/app/currencies.jsx %}
{% endhighlight %}
{% highlight js tabtitle="currencydata.jsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs2/app/currencyData.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs2/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs2/app/numbers.jsx %}
{% endhighlight %}
{% highlight js tabtitle="settings.jsx" %}
{% include code-snippet/numeric-textbox/internationalization-cs2/app/settings.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/internationalization-cs2" %}

## Right to Left(RTL)

RTL provides an option to switch the text direction and layout of the NumericTextBox component from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable RTL NumericTextBox, set the [`enableRtl`](https://ej2.syncfusion.com/react/documentation/api/numerictextbox/#enablertl) to true.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/rtl-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/rtl-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="settings.jsx" %}
{% include code-snippet/numeric-textbox/rtl-cs1/app/settings.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/rtl-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/rtl-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/rtl-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="settings.jsx" %}
{% include code-snippet/numeric-textbox/rtl-cs2/app/settings.jsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/numeric-textbox/rtl-cs2" %}

 