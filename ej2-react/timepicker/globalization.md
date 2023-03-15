---
layout: post
title: Globalization in React Timepicker component | Syncfusion
description: Learn here all about Globalization in Syncfusion React Timepicker component of Syncfusion Essential JS 2 and more.
control: Globalization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in React Timepicker component

Globalization is the combination of internationalization and localization. You can adapt the component to various languages by means of parsing and formatting the date or number [`internationalization`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) , and also add culture specific customization and translation to the text [`localization`](https://ej2.syncfusion.com/react/documentation/common/globalization/localization).

By default, TimePicker time format and meridian names are specific to the `American English` culture. It utilizes the
[`Essential JavaScript 2 Internationalization`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) package to parse and format the date object based on the culture by using the official [`UNICODE CLDR`](http://cldr.unicode.org/) JSON data. It provides the `loadCldr` method to load culture specific CLDR JSON data. To go with the different culture other than `English`, follow the steps below.

* Install the `CLDR-Data` package by using the following command (it installs all the CLDR JSON data). To known more about CLDR-Data refer the [`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

```
npm install cldr-data --save
```

 Once the package is installed, you can find the culture specific JSON data under the location `\node_modules\cldr-data`.

* Import the installed CLDR JSON data into the `app.ts` file.

* Use the [`loadCldr`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#loading-culture-data) method to load the culture specific CLDR JSON data from the installed location to `app.ts` file.

* TimePicker displayed `Sunday` as the first day of week based on default culture ("en-US"). If you want to display the TimePicker with loaded culture’s first day of week, you need to import `weekdata.json` file from the `cldr-data/suppemental` as given in the code example.

```ts

import { loadCldr } from '@syncfusion/ej2-base';

import { loadCldr } from "@syncfusion/ej2-base";

import * as gregorian from 'cldr-data/main/de/ca-gregorian.json';
import * as numbers from 'cldr-data/main/de/numbers.json';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';

loadCldr(numberingSystems, gregorian, numbers);
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

* Before changing to a culture other than `English`, ensure that locale text for the concerned culture is loaded through `load` method of `L10n` class.

```ts

//Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';

//load the locale object to set the localized placeholder value
L10n.load({
    'de': {
        'timepicker': { placeholder: 'Wählen Sie Zeit'}
    }
});
```

* Set the culture by using the [`locale`](https://ej2.syncfusion.com/react/documentation/api/timepicker#locale) property. In the following code example, the DateTimePicker is initialized in `German` culture with corresponding localized text.

The following example demonstrates the TimePicker in `German` culture.

`[Class-component]`

{% tabs %}
{% highlight json tabtitle="ca-gregorian.json" %}
{% include code-snippet/timepicker/internationalization-cs1/app/ca-gregorian.json %}
{% endhighlight %}
{% highlight js tabtitle="ca-gregorian.jsx" %}
{% include code-snippet/timepicker/internationalization-cs1/app/ca-gregorian.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/internationalization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/internationalization-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight json tabtitle="numberingsystems.json" %}
{% include code-snippet/timepicker/internationalization-cs1/app/numberingSystems.json %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/timepicker/internationalization-cs1/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight json tabtitle="numbers.json" %}
{% include code-snippet/timepicker/internationalization-cs1/app/numbers.json %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/timepicker/internationalization-cs1/app/numbers.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/internationalization-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight json tabtitle="ca-gregorian.json" %}
{% include code-snippet/timepicker/internationalization-cs2/app/ca-gregorian.json %}
{% endhighlight %}
{% highlight js tabtitle="ca-gregorian.jsx" %}
{% include code-snippet/timepicker/internationalization-cs2/app/ca-gregorian.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/internationalization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/internationalization-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight json tabtitle="numberingsystems.json" %}
{% include code-snippet/timepicker/internationalization-cs2/app/numberingSystems.json %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/timepicker/internationalization-cs2/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight json tabtitle="numbers.json" %}
{% include code-snippet/timepicker/internationalization-cs2/app/numbers.json %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/timepicker/internationalization-cs2/app/numbers.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/internationalization-cs2" %}

## Right-To-Left

The TimePicker supports RTL (right-to-left) functionality for languages like Arabic and Hebrew to displays the text in the right-to-left direction. Use [`enableRtl`](https://ej2.syncfusion.com/react/documentation/api/timepicker#enablertl) property to set the RTL direction.

The code example demonstrates the TimePicker component in `Arabic` culture, also explains how to set the localized text to the placeholder using [`L10n.load`](http://ej2.syncfusion.com/documentation/base/api/l10n/) method.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.component.jsx" %}
{% include code-snippet/timepicker/rtl-cs1/app/app.component.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timepicker/rtl-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight js tabtitle="app.module.jsx" %}
{% include code-snippet/timepicker/rtl-cs1/app/app.module.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/timepicker/rtl-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight json tabtitle="ca-gregorian.json" %}
{% include code-snippet/timepicker/rtl-cs1/app/ca-gregorian.json %}
{% endhighlight %}
{% highlight js tabtitle="ca-gregorian.jsx" %}
{% include code-snippet/timepicker/rtl-cs1/app/ca-gregorian.jsx %}
{% endhighlight %}
{% highlight json tabtitle="currencies.json" %}
{% include code-snippet/timepicker/rtl-cs1/app/currencies.json %}
{% endhighlight %}
{% highlight js tabtitle="currencies.jsx" %}
{% include code-snippet/timepicker/rtl-cs1/app/currencies.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/rtl-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/rtl-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="main.jsx" %}
{% include code-snippet/timepicker/rtl-cs1/app/main.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/rtl-cs1/app/main.ts %}
{% endhighlight %}
{% highlight json tabtitle="numberingsystems.json" %}
{% include code-snippet/timepicker/rtl-cs1/app/numberingSystems.json %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/timepicker/rtl-cs1/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight json tabtitle="numbers.json" %}
{% include code-snippet/timepicker/rtl-cs1/app/numbers.json %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/timepicker/rtl-cs1/app/numbers.jsx %}
{% endhighlight %}
{% highlight json tabtitle="timezonenames.json" %}
{% include code-snippet/timepicker/rtl-cs1/app/timeZoneNames.json %}
{% endhighlight %}
{% highlight js tabtitle="timezonenames.jsx" %}
{% include code-snippet/timepicker/rtl-cs1/app/timeZoneNames.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/rtl-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.component.jsx" %}
{% include code-snippet/timepicker/rtl-cs2/app/app.component.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timepicker/rtl-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight js tabtitle="app.module.jsx" %}
{% include code-snippet/timepicker/rtl-cs2/app/app.module.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/timepicker/rtl-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight json tabtitle="ca-gregorian.json" %}
{% include code-snippet/timepicker/rtl-cs2/app/ca-gregorian.json %}
{% endhighlight %}
{% highlight js tabtitle="ca-gregorian.jsx" %}
{% include code-snippet/timepicker/rtl-cs2/app/ca-gregorian.jsx %}
{% endhighlight %}
{% highlight json tabtitle="currencies.json" %}
{% include code-snippet/timepicker/rtl-cs2/app/currencies.json %}
{% endhighlight %}
{% highlight js tabtitle="currencies.jsx" %}
{% include code-snippet/timepicker/rtl-cs2/app/currencies.jsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/rtl-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/rtl-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="main.jsx" %}
{% include code-snippet/timepicker/rtl-cs2/app/main.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/rtl-cs2/app/main.ts %}
{% endhighlight %}
{% highlight json tabtitle="numberingsystems.json" %}
{% include code-snippet/timepicker/rtl-cs2/app/numberingSystems.json %}
{% endhighlight %}
{% highlight js tabtitle="numberingsystems.jsx" %}
{% include code-snippet/timepicker/rtl-cs2/app/numberingSystems.jsx %}
{% endhighlight %}
{% highlight json tabtitle="numbers.json" %}
{% include code-snippet/timepicker/rtl-cs2/app/numbers.json %}
{% endhighlight %}
{% highlight js tabtitle="numbers.jsx" %}
{% include code-snippet/timepicker/rtl-cs2/app/numbers.jsx %}
{% endhighlight %}
{% highlight json tabtitle="timezonenames.json" %}
{% include code-snippet/timepicker/rtl-cs2/app/timeZoneNames.json %}
{% endhighlight %}
{% highlight js tabtitle="timezonenames.jsx" %}
{% include code-snippet/timepicker/rtl-cs2/app/timeZoneNames.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/rtl-cs2" %}