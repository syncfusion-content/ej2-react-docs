---
layout: post
title: Globalization in React Calendar component | Syncfusion
description: Learn here all about Globalization in Syncfusion React Calendar component of Syncfusion Essential JS 2 and more.
control: Globalization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in React Calendar component

Globalization combines [`internationalization`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) (date and number parsing/formatting) with [`localization`](https://ej2.syncfusion.com/react/documentation/common/globalization/localization) (culture-specific text and formatting). Use these mechanisms to adapt the Calendar to different languages and regions.

By default, Calendar date format, week and month names are specific to American English culture. It utilizes the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Internationalization](http://ej2.syncfusion.com/documentation/base/internationalization)
package to parse and format the date object based on the culture by using the official [`UNICODE CLDR`](http://cldr.unicode.org) JSON data and also it provides the [`loadCldr`](http://ej2.syncfusion.com/documentation/base/intl.html#cldr-data-dependencies) method to load the culture specific CLDR JSON data.

To go with the different culture other than `English`, follow the below steps.

* Install the `CLDR-Data` package by using the below command (it installs the CLDR JSON data). To know more about CLDR-Data refer the [`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

    ```
      npm install cldr-data --save
    ```

    Once the package installed, you can find the culture specific JSON data under the location `\node_modules\cldr-data`.

* Now import the installed CLDR JSON data into the `app.ts` file.

* Now use the [`loadCldr`](http://ej2.syncfusion.com/documentation/base/intl.html#cldr-data-dependencies) method to load the culture specific CLDR JSON data from the installed location to `app.ts` file.

* Calendar displayed `Sunday` as the first day of week based on default culture ("en-US"). If you want to display the Calendar with loaded culture’s first day of week, you need to import `weekdata.json` file from the `cldr-data/suppemental` as given in the code example.

```ts
//import the loadCldr from ej2-base
import { loadCldr} from '@syncfusion/ej2-base';

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

> The `Localization` library allows you to localize default text content of the Calendar. The Calendar component has static text for  **today** feature that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the
[`locale`](https://ej2.syncfusion.com/react/documentation/api/calendar#locale) value and translation object.

Locale keywords |Text
-----|-----
today | Name of the button to choose Today date.

* Before changing to a culture other than `English`, ensure that locale text for the concerned culture is loaded through `load` method of `L10n` class.

     ```ts
      //Load the L10n, loadCldr from ej2-base
     import { L10n } from "@syncfusion/ej2-base";

     //load the locale object to set the localized placeholder value
     L10n.load({
        'de': {
           'calendar': { today:'heute' }
         }
       });
     ```

* Set the culture by using the [`locale`](https://ej2.syncfusion.com/react/documentation/api/calendar#locale) property.

The following example demonstrates the Calendar in `German` culture.

`[Class-component]`

{% tabs %}
{% highlight json tabtitle="ca-gregorian.json" %}
{% include code-snippet/calendar/internationalization-cs1/app/ca-gregorian.json %}
{% endhighlight %}
{% highlight js tabtitle="ca-gregorian.jsx" %}
{% include code-snippet/calendar/internationalization-cs1/app/ca-gregorian.jsx %}
{% endhighlight %}
{% highlight json tabtitle="currencies.json" %}
{% include code-snippet/calendar/internationalization-cs1/app/currencies.json %}
{% endhighlight %}
{% highlight js tabtitle="currencies.jsx" %}
{% include code-snippet/calendar/internationalization-cs1/app/currencies.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/internationalization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/internationalization-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight json tabtitle="numberingsystems.json" %}
{% include code-snippet/calendar/internationalization-cs1/app/numberingSystems.json %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/calendar/internationalization-cs1/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight json tabtitle="numbers.json" %}
{% include code-snippet/calendar/internationalization-cs1/app/numbers.json %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/calendar/internationalization-cs1/app/numbers.jsx %}
{% endhighlight %}
{% highlight json tabtitle="timezonenames.json" %}
{% include code-snippet/calendar/internationalization-cs1/app/timeZoneNames.json %}
{% endhighlight %}
{% highlight js tabtitle="timezonenames.jsx" %}
{% include code-snippet/calendar/internationalization-cs1/app/timeZoneNames.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/internationalization-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight json tabtitle="ca-gregorian.json" %}
{% include code-snippet/calendar/internationalization-cs2/app/ca-gregorian.json %}
{% endhighlight %}
{% highlight js tabtitle="ca-gregorian.jsx" %}
{% include code-snippet/calendar/internationalization-cs2/app/ca-gregorian.jsx %}
{% endhighlight %}
{% highlight json tabtitle="currencies.json" %}
{% include code-snippet/calendar/internationalization-cs2/app/currencies.json %}
{% endhighlight %}
{% highlight js tabtitle="currencies.jsx" %}
{% include code-snippet/calendar/internationalization-cs2/app/currencies.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/internationalization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/internationalization-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight json tabtitle="numberingsystems.json" %}
{% include code-snippet/calendar/internationalization-cs2/app/numberingSystems.json %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/calendar/internationalization-cs2/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight json tabtitle="numbers.json" %}
{% include code-snippet/calendar/internationalization-cs2/app/numbers.json %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/calendar/internationalization-cs2/app/numbers.jsx %}
{% endhighlight %}
{% highlight json tabtitle="timezonenames.json" %}
{% include code-snippet/calendar/internationalization-cs2/app/timeZoneNames.json %}
{% endhighlight %}
{% highlight js tabtitle="timezonenames.jsx" %}
{% include code-snippet/calendar/internationalization-cs2/app/timeZoneNames.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/internationalization-cs2" %}

## Right-To-Left

The Calendar supports right-to-left functionality for languages like Arabic,  Hebrew, etc. To display text in the right-to-left direction. Use [`enableRtl`](https://ej2.syncfusion.com/react/documentation/api/calendar#enablertl) property.

The following example demonstrates the Calendar in `Arabic` culture with Right-To-Left direction.

`[Class-component]`

{% tabs %}
{% highlight json tabtitle="ca-gregorian.json" %}
{% include code-snippet/calendar/rtl-cs1/app/ca-gregorian.json %}
{% endhighlight %}
{% highlight js tabtitle="ca-gregorian.jsx" %}
{% include code-snippet/calendar/rtl-cs1/app/ca-gregorian.jsx %}
{% endhighlight %}
{% highlight json tabtitle="currencies.json" %}
{% include code-snippet/calendar/rtl-cs1/app/currencies.json %}
{% endhighlight %}
{% highlight js tabtitle="currencies.jsx" %}
{% include code-snippet/calendar/rtl-cs1/app/currencies.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/rtl-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/rtl-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight json tabtitle="numberingsystems.json" %}
{% include code-snippet/calendar/rtl-cs1/app/numberingSystems.json %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/calendar/rtl-cs1/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight json tabtitle="numbers.json" %}
{% include code-snippet/calendar/rtl-cs1/app/numbers.json %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/calendar/rtl-cs1/app/numbers.jsx %}
{% endhighlight %}
{% highlight json tabtitle="timezonenames.json" %}
{% include code-snippet/calendar/rtl-cs1/app/timeZoneNames.json %}
{% endhighlight %}
{% highlight js tabtitle="timezonenames.jsx" %}
{% include code-snippet/calendar/rtl-cs1/app/timeZoneNames.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/rtl-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight json tabtitle="ca-gregorian.json" %}
{% include code-snippet/calendar/rtl-cs2/app/ca-gregorian.json %}
{% endhighlight %}
{% highlight js tabtitle="ca-gregorian.jsx" %}
{% include code-snippet/calendar/rtl-cs2/app/ca-gregorian.jsx %}
{% endhighlight %}
{% highlight json tabtitle="currencies.json" %}
{% include code-snippet/calendar/rtl-cs2/app/currencies.json %}
{% endhighlight %}
{% highlight js tabtitle="currencies.jsx" %}
{% include code-snippet/calendar/rtl-cs2/app/currencies.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/rtl-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/rtl-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight json tabtitle="numberingsystems.json" %}
{% include code-snippet/calendar/rtl-cs2/app/numberingSystems.json %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/calendar/rtl-cs2/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight json tabtitle="numbers.json" %}
{% include code-snippet/calendar/rtl-cs2/app/numbers.json %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/calendar/rtl-cs2/app/numbers.jsx %}
{% endhighlight %}
{% highlight json tabtitle="timezonenames.json" %}
{% include code-snippet/calendar/rtl-cs2/app/timeZoneNames.json %}
{% endhighlight %}
{% highlight js tabtitle="timezonenames.jsx" %}
{% include code-snippet/calendar/rtl-cs2/app/timeZoneNames.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/rtl-cs2" %}