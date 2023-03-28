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

[`Localization`](https://ej2.syncfusion.com/react/documentation/common/globalization/localization) library allows users to localize the default text contents of the NumericTextBox to different cultures using the [`locale`](https://ej2.syncfusion.com/react/documentation/api/numerictextbox#locale) property.
In NumericTextBox, spin buttons title for the tooltip will be localized based on the culture.

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

Internationalization library provides support for formatting and parsing the number by using the official [Unicode CLDR](http://cldr.unicode.org/) JSON data and also provides the `loadCldr` method to load the culture specific CLDR JSON data. The NumericTextBox comes with built-in internationalization support to adapt based on culture. For more information about internationalization, refer to this `link`.

By default, all the Essential JS 2  component are specific to English culture ('en-US'). If you want to go with the different culture other than `English`, follow the below steps.

* Install the `CLDR-Data` package by using the below command (it installs the CLDR JSON data). For more information about CLDR-Data, refer to this `link`.

    ```
      npm install cldr-data --save
    ```

    Once the package installed, you can find the culture specific JSON data under the location `\node_modules\cldr-data`.

* Now import the installed CLDR JSON data into the `app.tsx` file.

* Now import the required culture from the installed location to `app.tsx` file as like the below code snippets.

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

* Set the culture by using the [`locale`](https://ej2.syncfusion.com/react/documentation/api/numerictextbox#locale) property.

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

RTL provides an option to switch the text direction and layout of the NumericTextBox component from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable RTL NumericTextBox, set the [`enableRtl`](https://ej2.syncfusion.com/react/documentation/api/numerictextbox#enablertl) to true.

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

 