---
layout: post
title: Globalization in React Datepicker component | Syncfusion
description: Learn here all about Globalization in Syncfusion React Datepicker component of Syncfusion Essential JS 2 and more.
control: Globalization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in React Datepicker component

Globalization is the combination of internalization and localization. You can adapt the component to various languages by parsing and formatting the date or number [`Internationalization`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) and also add culture specific customization and translation to the text [`localization`](https://ej2.syncfusion.com/react/documentation/common/globalization/localization).

By default, DatePicker date format, week, and month names are specific to the `American English` culture. It utilizes the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Internationalization](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) package to parse and format the date object based on the culture by using the official [`UNICODE CLDR`](http://cldr.unicode.org/) JSON data. It provides the `loadCldr` method to load culture specific CLDR JSON data. To use a different culture other than `English`, follow the steps below:

* Install the `CLDR-Data` package by using the following command (installs all the CLDR JSON data). To know more about CLDR-Data refer to the [`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings)link.

    ```
     npm install cldr-data --save
    ```

    Once the package installed, you can find the culture specific JSON data under the location `\node_modules\cldr-data`.

* Now import the installed CLDR JSON data into the `app.ts` file.

* Now use the [`loadCldr`](http://ej2.syncfusion.com/documentation/base/internationalization#cldr-data-dependencies) method to load the culture specific CLDR JSON data from the installed location to `app.ts` file.

* DatePicker displayed `Sunday` as the first day of week based on default culture ("en-US"). If you want to display the DatePicker with loaded culture’s first day of week, you need to import `weekdata.json` file from the `cldr-data/suppemental` as given in the code example.

```ts

import { loadCldr } from "@syncfusion/ej2-base";

import * as gregorian from 'cldr-data/main/de/ca-gregorian.json';
import * as numbers from 'cldr-data/main/de/numbers.json';
import * as timeZoneNames from 'cldr-data/main/de/timeZoneNames.json';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as weekData from 'cldr-data/supplemental/weekData.json';// To load the culture based first day of week

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames, weekData);
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

> The `Localization` library allows you to localize default text content of the DatePicker. The DatePicker component has static text for  **today** feature that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](https://ej2.syncfusion.com/react/documentation/api/datepicker#locale) value and translation object.

Locale keywords |Text
-----|-----
today | Name of the button to choose Today date.
placeholder | Hint to describe expected value in input element.

* Before changing to a culture other than `English`, ensure that locale text for the concerned culture is loaded through `load` method of `L10n` class.

    ```ts
      //Load the L10n from ej2-base
     import { L10n } from "@syncfusion/ej2-base";

     //load the locale object to set the localized placeholder value
     L10n.load({
       de: {
          datepicker: {
             placeholder: "Wählen Sie ein Datum",
             today:"heute"
           }
        }
     });
   ```

* Set the culture by using the [`locale`](https://ej2.syncfusion.com/react/documentation/api/datepicker#locale) property. The below code example, initialize the DatePicker component in `German` culture with corresponding localized text.

The following example demonstrates the DatePicker in `German` culture.

`[Class-component]`

{% tabs %}
{% highlight json tabtitle="ca-gregorian.json" %}
{% include code-snippet/datepicker/globalization-cs1/app/ca-gregorian.json %}
{% endhighlight %}
{% highlight js tabtitle="ca-gregorian.jsx" %}
{% include code-snippet/datepicker/globalization-cs1/app/ca-gregorian.jsx %}
{% endhighlight %}
{% highlight json tabtitle="currencies.json" %}
{% include code-snippet/datepicker/globalization-cs1/app/currencies.json %}
{% endhighlight %}
{% highlight js tabtitle="currencies.jsx" %}
{% include code-snippet/datepicker/globalization-cs1/app/currencies.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/globalization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/globalization-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight json tabtitle="numberingsystems.json" %}
{% include code-snippet/datepicker/globalization-cs1/app/numberingSystems.json %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/datepicker/globalization-cs1/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight json tabtitle="numbers.json" %}
{% include code-snippet/datepicker/globalization-cs1/app/numbers.json %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/datepicker/globalization-cs1/app/numbers.jsx %}
{% endhighlight %}
{% highlight json tabtitle="timezonenames.json" %}
{% include code-snippet/datepicker/globalization-cs1/app/timeZoneNames.json %}
{% endhighlight %}
{% highlight js tabtitle="timezonenames.jsx" %}
{% include code-snippet/datepicker/globalization-cs1/app/timeZoneNames.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/globalization-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight json tabtitle="ca-gregorian.json" %}
{% include code-snippet/datepicker/globalization-cs2/app/ca-gregorian.json %}
{% endhighlight %}
{% highlight js tabtitle="ca-gregorian.jsx" %}
{% include code-snippet/datepicker/globalization-cs2/app/ca-gregorian.jsx %}
{% endhighlight %}
{% highlight json tabtitle="currencies.json" %}
{% include code-snippet/datepicker/globalization-cs2/app/currencies.json %}
{% endhighlight %}
{% highlight js tabtitle="currencies.jsx" %}
{% include code-snippet/datepicker/globalization-cs2/app/currencies.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/globalization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/globalization-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight json tabtitle="numberingsystems.json" %}
{% include code-snippet/datepicker/globalization-cs2/app/numberingSystems.json %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/datepicker/globalization-cs2/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight json tabtitle="numbers.json" %}
{% include code-snippet/datepicker/globalization-cs2/app/numbers.json %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/datepicker/globalization-cs2/app/numbers.jsx %}
{% endhighlight %}
{% highlight json tabtitle="timezonenames.json" %}
{% include code-snippet/datepicker/globalization-cs2/app/timeZoneNames.json %}
{% endhighlight %}
{% highlight js tabtitle="timezonenames.jsx" %}
{% include code-snippet/datepicker/globalization-cs2/app/timeZoneNames.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/globalization-cs2" %}

## Right-To-Left

The DatePicker supports right-to-left functionality for languages like Arabic, Hebrew to displays the text in the right-to-left direction. Use [`enableRtl`](https://ej2.syncfusion.com/react/documentation/api/datepicker#enablertl) property to set the RTL direction.

The below code example demonstrates the DatePicker component in `Hebrew` culture and also explains how to set the localized text to the placeholder using [`load`](http://ej2.syncfusion.com/documentation/api/base/l10n#load) method of
[L10n](http://ej2.syncfusion.com/documentation/api/base/l10n/) class.

`[Class-component]`

{% tabs %}
{% highlight json tabtitle="ca-gregorian.json" %}
{% include code-snippet/datepicker/rtl-cs1/app/ca-gregorian.json %}
{% endhighlight %}
{% highlight js tabtitle="ca-gregorian.jsx" %}
{% include code-snippet/datepicker/rtl-cs1/app/ca-gregorian.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/rtl-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/rtl-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight json tabtitle="numberingsystems.json" %}
{% include code-snippet/datepicker/rtl-cs1/app/numberingSystems.json %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/datepicker/rtl-cs1/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight json tabtitle="numbers.json" %}
{% include code-snippet/datepicker/rtl-cs1/app/numbers.json %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/datepicker/rtl-cs1/app/numbers.jsx %}
{% endhighlight %}
{% highlight json tabtitle="timezonenames.json" %}
{% include code-snippet/datepicker/rtl-cs1/app/timeZoneNames.json %}
{% endhighlight %}
{% highlight js tabtitle="timezonenames.jsx" %}
{% include code-snippet/datepicker/rtl-cs1/app/timeZoneNames.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/rtl-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight json tabtitle="ca-gregorian.json" %}
{% include code-snippet/datepicker/rtl-cs2/app/ca-gregorian.json %}
{% endhighlight %}
{% highlight js tabtitle="ca-gregorian.jsx" %}
{% include code-snippet/datepicker/rtl-cs2/app/ca-gregorian.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/rtl-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/rtl-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight json tabtitle="numberingsystems.json" %}
{% include code-snippet/datepicker/rtl-cs2/app/numberingSystems.json %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/datepicker/rtl-cs2/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight json tabtitle="numbers.json" %}
{% include code-snippet/datepicker/rtl-cs2/app/numbers.json %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/datepicker/rtl-cs2/app/numbers.jsx %}
{% endhighlight %}
{% highlight json tabtitle="timezonenames.json" %}
{% include code-snippet/datepicker/rtl-cs2/app/timeZoneNames.json %}
{% endhighlight %}
{% highlight js tabtitle="timezonenames.jsx" %}
{% include code-snippet/datepicker/rtl-cs2/app/timeZoneNames.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/rtl-cs2" %}