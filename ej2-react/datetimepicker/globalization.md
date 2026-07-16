---
layout: post
title: Globalization in React Datetimepicker component | Syncfusion
description: Learn here all about Globalization in Syncfusion React Datetimepicker component of Syncfusion Essential JS 2 and more.
control: Globalization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in React Datetimepicker component

Globalization enables components to support multiple languages and regional formats. This combines [`Internationalization`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) (parsing and formatting dates and times according to regional standards) with [`localization`](https://ej2.syncfusion.com/react/documentation/common/globalization/localization) (translating text and applying culture-specific customizations).

By default, the DateTimePicker uses `American English` culture for date format, week names, month names, time format, and meridian names. It leverages the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Internationalization](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) package with official [`UNICODE CLDR`](http://cldr.unicode.org/) JSON data to parse and format dates and times according to the selected culture.

## Quick Start: Enable a Different Culture

To display the DateTimePicker in a culture other than English, follow these steps:

* Install the `CLDR-Data` package by using the following command (installs all the CLDR JSON data). To know more about CLDR-Data refer to the [`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

    ```
     npm install cldr-data --save
    ```

    Once the package is installed, the culture specific JSON data can be found under the location `\node_modules\cldr-data`.

* Import the installed CLDR JSON data into the `app.ts` file.

* Use the [`loadCldr`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#loading-culture-data) method to load the culture specific CLDR JSON data from the installed location to `app.ts` file.

* DateTimePicker displays `Sunday` as the first day of week based on default culture ("en-US"). To display the DateTimePicker with loaded culture's first day of week, import the `weekdata.json` file from the `cldr-data/supplemental` folder as given in the code example.

```ts

import { loadCldr } from '@syncfusion/ej2-base';

import { loadCldr } from "@syncfusion/ej2-base";

import * as gregorian from 'cldr-data/main/de/ca-gregorian.json';
import * as numbers from 'cldr-data/main/de/numbers.json';
import * as timeZoneNames from 'cldr-data/main/de/timeZoneNames.json';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as weekData from 'cldr-data/supplemental/weekData.json';// To load the culture based first day of week

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames, weekData);
```

> If the error `/node_modules/cldr-data/main/de/*.json (1,1): unused expression, expected an assignment or function call` is encountered when adding the JSON files to render the culture sample, add the below configuration in the `tslint.json` file.

```ts

"linterOptions": {
    "exclude": [
      "*.json",
      "**/*.json"
    ]
  }
```

## Localization

The `Localization` library provides the ability to localize default text content of the DateTimePicker. The DateTimePicker component has static text for the **today** feature that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](https://ej2.syncfusion.com/react/documentation/api/datetimepicker#locale) value and translation object.

Locale keywords |Text
-----|-----
today | Name of the button to choose Today date.
placeholder | Hint to describe expected value in input element.

* Before changing to a culture other than `English`, ensure that locale text for the target culture is loaded through the `load` method of the `L10n` class.

    ```ts

     //Load the L10n from ej2-base
      import { L10n } from '@syncfusion/ej2-base';

      //load the locale object to set the localized placeholder value
       L10n.load({
         'de': {
           'datetimepicker': {
             placeholder: 'Wählen Sie ein Datum und eine Uhrzeit aus',
             today:'heute'
           }
        }
    });
   ```

> Locale texts can also be obtained from the [ej2-locale](https://github.com/syncfusion/ej2-locale) repository. The repository contains a comprehensive collection of locale-specific resources that can be used to customize the DateTimePicker component for different cultures. Refer to the [Localization](https://ej2.syncfusion.com/react/documentation/common/globalization/localization) topic for more information on how to use locale texts from the repository.

* Set the culture by using the [`locale`](https://ej2.syncfusion.com/react/documentation/api/datetimepicker#locale) property. In the following code example, the DateTimePicker is initialized in `German` culture with corresponding localized text.

The following example demonstrates the DateTimePicker in `German` culture.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/localization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/localization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/localization-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/localization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/localization-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/localization-cs2" %}

## Right-To-Left

The DateTimePicker supports RTL (right-to-left) functionality for languages like Arabic and Hebrew to display text in the right-to-left direction. Use the `enableRtl` property to set the RTL direction.
The following code example initializes the DateTimePicker component in `Arabic` culture and also demonstrates how to set the localized text to the placeholder using the `load` method of the [L10n](http://ej2.syncfusion.com/documentation/api/base/l10n) class.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/rtl-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/rtl-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/rtl-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/rtl-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/rtl-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/rtl-cs2" %}