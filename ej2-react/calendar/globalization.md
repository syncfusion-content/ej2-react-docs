---
layout: post
title: Globalization in React Calendar | Syncfusion
description: Configure the React Calendar for non-English cultures using Internationalization, localization, and UNICODE CLDR JSON data.
control: Globalization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in React Calendar

Globalization combines [`internationalization`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) (date and number parsing and formatting) with [`localization`](https://ej2.syncfusion.com/react/documentation/common/globalization/localization) (culture-specific text and formatting). Use these mechanisms to adapt the Calendar to different languages and regions.

By default, Calendar date format, week and month names are specific to American English culture. It utilizes the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Internationalization](http://ej2.syncfusion.com/documentation/base/internationalization)
package to parse and format the date object based on the culture by using the official [`UNICODE CLDR`](http://cldr.unicode.org) JSON data and also it provides the [`loadCldr`](http://ej2.syncfusion.com/documentation/base/intl.html#cldr-data-dependencies) method to load the culture specific CLDR JSON data.

To use a culture other than `English`, follow these steps.

1. Install the `CLDR-Data` package from npm. This package provides the locale-specific JSON data consumed by Syncfusion components. For more details, refer to the [CLDR-Data](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) specification.

    ```bash
    npm install cldr-data --save
    ```

    Once the package is installed, the culture-specific JSON data is available under the `\node_modules\cldr-data` path.

2. Import the required CLDR JSON files from `cldr-data` in your `app.ts` file.

3. Call the [`loadCldr`](https://ej2.syncfusion.com/react/documentation/base/intl.html#cldr-data-dependencies) method and pass each imported JSON module so that the Calendar can read the locale data at runtime.

4. Calendar displays `Sunday` as the first day of the week for the default `en-US` culture. To switch the first day of the week to the loaded culture's first day, import `weekData.json` from `cldr-data/supplemental` as shown in the code example below.

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

> If you encounter the error `/node_modules/cldr-data/main/de/*.json (1,1): unused expression, expected an assignment or function call` while adding the JSON files to render the culture sample, configure your linter to exclude JSON files by adding the following configuration.

For **TSLint**, add this configuration to your `tslint.json` file:

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

| Locale Keywords | Text |
|-----|-----|
| today | Name of the button used to choose the current date. |

Before changing to a culture other than `English`, load the locale text for the target culture using the `load` method of the `L10n` class.

```ts
// Load the L10n instance from ej2-base
import { L10n } from "@syncfusion/ej2-base";

// Load the locale object to set the localized placeholder value
L10n.load({
   'de': {
      'calendar': { today: 'heute' }
    }
  });
```

Then set the active culture by using the [`locale`](https://ej2.syncfusion.com/react/documentation/api/calendar#locale) property.

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

The Calendar supports right-to-left (RTL) functionality for languages such as Arabic and Hebrew. Set the boolean [`enableRtl`](https://ej2.syncfusion.com/react/documentation/api/calendar#enablertl) property to `true` to display the Calendar's content in the right-to-left direction.

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