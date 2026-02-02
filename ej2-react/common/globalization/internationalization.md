---
layout: post
title: Internationalization for Syncfusion React Components
description: Learn how to implement internationalization in Syncfusion React components using CLDR data to format and parse dates, numbers, and currencies across different cultures and locales.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization

The Internationalization library enables formatting and parsing of date and number values according to culture-specific rules using official [Unicode CLDR](https://cldr.unicode.org/) JSON data. The default culture is `en-US` and the default currency code is `USD` for all Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Components.

## Loading Culture Data

The Syncfusion<sup style="font-size:70%">&reg;</sup> CLDR data package contains only JSON data files generated from the official [Unicode CLDR](https://cldr.unicode.org/) JSON data. This approach avoids the third-party [cldr-data](https://www.npmjs.com/package/cldr-data) package and its associated vulnerabilities. Use the `loadCldr` function to load CLDR data for cultures other than `en-US`.

> The Syncfusion<sup style="font-size:70%">&reg;</sup> CLDR data package is published shortly after each official [Unicode CLDR](https://cldr.unicode.org/) JSON data release, typically within one week.

### Installing CLDR Data

Install the Syncfusion<sup style="font-size:70%">&reg;</sup> CLDR data package using the following command:

```bash
npm install @syncfusion/ej2-cldr-data
```

### Individual File Path Reference

CLDR data files can be loaded by referencing individual paths from the package. Replace `en` with the desired culture code (for example, `de`, `fr`, `ar`) for other locales:

| File Name         | Path                                                            |
| ----------------- | --------------------------------------------------------------- |
| ca-gregorian      | @syncfusion/ej2-cldr-data/main/en/ca-gregorian.json             |
| timeZoneNames     | @syncfusion/ej2-cldr-data/main/en/timeZoneNames.json            |
| numbers           | @syncfusion/ej2-cldr-data/main/en/numbers.json                  |
| currencies        | @syncfusion/ej2-cldr-data/main/en/currencies.json               |
| numberingSystems  | @syncfusion/ej2-cldr-data/supplemental/numberingSystems.json    |

### Single File Path Reference

Multiple CLDR data types for a single culture can be loaded from a combined file. Replace `en` with the target culture code as needed:

| File Name                              | Path                                                             |
| -------------------------------------- | ---------------------------------------------------------------- |
| ca-gregorian, timeZoneNames, numbers, currencies | @syncfusion/ej2-cldr-data/main/en/all.json                       |
| numberingSystems                       | @syncfusion/ej2-cldr-data/supplemental/numberingSystems.json     |

> For the `en-US` culture, all required data files are preloaded in the library, so explicit loading is optional for `en-US`.

### Binding to i18n Library

The internationalization library relies on loaded CLDR data to correctly format and parse numbers and dates for specific cultures. The `loadCldr` function accepts one or more CLDR JSON files as arguments. The following example loads data for the `en` culture (optional, included here for demonstration):

```typescript
import { loadCldr } from "@syncfusion/ej2-base";
import enNumberData from "@syncfusion/ej2-cldr-data/main/en/numbers.json";
import enTimeZoneData from "@syncfusion/ej2-cldr-data/main/en/timeZoneNames.json";
import enGregorian from "@syncfusion/ej2-cldr-data/main/en/ca-gregorian.json";
import enCurrencies from "@syncfusion/ej2-cldr-data/main/en/currencies.json";
import numberingSystems from "@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json";

loadCldr(enNumberData, enTimeZoneData, enGregorian, enCurrencies, numberingSystems);
```

## Changing Culture and Currency Code

Use the `setCulture` method to change the default locale and the `setCurrencyCode` method to change the default currency code for all Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Components.

```typescript
import { setCulture, setCurrencyCode } from '@syncfusion/ej2-base';

setCulture('ar');
setCurrencyCode('QAR');
```

> If no global culture is set, `en-US` is used as the default locale and `USD` as the default currency code.

## Manipulating Numbers

### Supported Format String

Number formatting and parsing are processed based on the [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberFormatOptions/). Specify some or all of the following properties to control number formatting behavior:

| Properties                  | Description                                                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `format`                    | Specifies the format type to be applied. Possible values are: <br />1. **N** - Numeric type <br />2. **C** - Currency type <br />3. **P** - Percentage type <br />Example: `formatNumber`(1234344, {format:'N4'}) <br /> > If no format is specified, numeric format is used by default. |
| `minimumFractionDigits`     | Indicates the minimum number of fraction digits. Possible values are 0 to 20.                                         |
| `maximumFractionDigits`     | Indicates the maximum number of fraction digits. Possible values are 0 to 20.                                         |
| `minimumSignificantDigits`  | Indicates the minimum number of significant digits. Possible values are 1 to 21. <br /> > If `minimumSignificantDigits` is specified, `maximumSignificantDigits` must also be provided. |
| `maximumSignificantDigits`  | Indicates the maximum number of significant digits. Possible values are 1 to 21. <br /> > If `maximumSignificantDigits` is specified, `minimumSignificantDigits` must also be provided. |
| `useGrouping`               | Indicates whether to enable the group separator. By default, grouping value is true.                                  |
| `minimumIntegerDigits`      | Indicates the minimum number of integer digits to be placed in the value. Possible values are 1 to 21.                |
| `currency`                  | Indicates the currency code to be considered for currency formatting.                                                 |

> The `minimumIntegerDigits`, `minimumFractionDigits`, and `maximumFractionDigits` properties are categorized as group one. The `minimumSignificantDigits` and `maximumSignificantDigits` properties are categorized as group two. If group two properties are defined, group one properties will be ignored.

### Custom Number Formatting and Parsing

Custom number formatting and parsing can be achieved by directly specifying a pattern in the `format` property of `NumberFormatOptions`. One or more of the custom format specifiers listed in the following table can be used to create custom number formats:

| Specifier | Description                                                                 | Input                                              | Format Output     |
| --------- | --------------------------------------------------------------------------- | -------------------------------------------------- | ----------------- |
| 0         | Replaces the zero with the corresponding digit if present. Otherwise, zero appears in the result string. | `intl.formatNumber`(123, {format: '0000'})         | '0123'            |
| #         | Replaces the "#" symbol with the corresponding digit if present. Otherwise, no digit appears in the result string. | `intl.formatNumber`(1234, {format: '####'})        | '1234'            |
| .         | Specifies the number of digits allowed after the decimal point. If not specified, no decimal point values are included. | `intl.formatNumber`(546321, {format: '###0.##0#'}) | '546321.000'      |
| %         | Represents the percentage type format.                                      | `intl.formatNumber`(1, {format: '0000 %'})         | '0100 %'          |
| $         | Represents the currency type format based on the global currency code specified. | `intl.formatNumber`(13, {format: '$ ###.00'})      | '$ 13.00'         |
| ;         | Specifies separate formats for positive, negative, and zero values.         | `intl.formatNumber`(-120, {format: '###.##;(###.00);-0'}) | '(120.00)'        |
| 'String' (single quotes) | Specifies characters enclosed within single quotes (') to be replaced in the resultant string. | `intl.formatNumber`(-123.44, {format: "####.## '@'"}) | '123.44 @'        |

> If a custom format pattern is specified, other [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberFormatOptions/) properties will not be considered.

### Number Parsing

#### getNumberParser

The [`getNumberParser`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#getnumberparser) method returns a function that parses a given string based on the [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberFormatOptions/) specified.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/default-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/default-cs1" %}

#### parseNumber

The [`parseNumber`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#parsenumber) method takes two arguments—a string value and [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberFormatOptions/)—and returns the parsed numeric value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/default-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/default-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/default-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/default-cs2" %}

### Number Formatting

#### getNumberFormat

The [`getNumberFormat`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#getnumberformat) method returns a function that formats a given number based on the [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberformatoptions) specified.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/default-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/default-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/default-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/default-cs3" %}

#### formatNumber

The [`formatNumber`](https://ej2.syncfusion.com/documentation/api/base/internationalization/) method takes two arguments—a numeric value and [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberformatoptions)—and returns the formatted string.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/default-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/default-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/default-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/default-cs4" %}

## Manipulating DateTime

### Supported Format String

Date formatting and parsing operations are performed based on the [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateFormatOptions/). Specify any of the following properties to control date formatting behavior:

| Options   | Description                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| Type      | Specifies the type of format to be used. Supported types: <br />1. **date** <br />2. **dateTime** <br />3. **time** <br />Based on the type specified, the following skeletons are supported: <br />1. short <br />2. medium <br />3. long <br />4. full <br />**Example:** `formatDate`(new Date(), {type: 'date', skeleton: 'medium'}) <br /> > If no type is specified, **date** type is set by default. |
| skeleton  | Specifies the format in which the `dateTime` format will be processed.                                                |

**Date Type Skeletons**

| Skeleton | Option Input                        | Format Output              |
| -------- | ----------------------------------- | -------------------------- |
| short    | {type: 'date', skeleton: 'short'}   | 11/4/16                    |
| medium   | {type: 'date', skeleton: 'medium'}  | Nov 4, 2016                |
| long     | {type: 'date', skeleton: 'long'}    | November 4, 2016           |
| full     | {type: 'date', skeleton: 'full'}    | Friday, November 4, 2016   |

**Time Type Skeletons**

| Skeleton | Option Input                        | Format Output              |
| -------- | ----------------------------------- | -------------------------- |
| short    | {type: 'time', skeleton: 'short'}   | 1:03 PM                    |
| medium   | {type: 'time', skeleton: 'medium'}  | 1:03:04 PM                 |
| long     | {type: 'time', skeleton: 'long'}    | 1:03:04 PM GMT+5           |
| full     | {type: 'time', skeleton: 'full'}    | 1:03:04 PM GMT+05:30       |

**DateTime Type Skeletons**

| Skeleton | Option Input                            | Format Output                              |
| -------- | --------------------------------------- | ------------------------------------------ |
| short    | {type: 'dateTime', skeleton: 'short'}   | 11/4/16, 1:03 PM                           |
| medium   | {type: 'dateTime', skeleton: 'medium'}  | Nov 4, 2016, 1:03:04 PM                    |
| long     | {type: 'dateTime', skeleton: 'long'}    | November 4, 2016 at 1:03:04 PM GMT+5       |
| full     | {type: 'dateTime', skeleton: 'full'}    | Friday, November 4, 2016 at 1:03:04 PM GMT+05:30 |

**Additional Skeletons**

Apart from the standard date type formats, additional formats are supported using the following skeletons:

| Skeleton   | Option Input              | Format Output              |
| ---------- | ------------------------- | -------------------------- |
| d          | {skeleton: 'd'}           | 7                          |
| E          | {skeleton: 'E'}           | Mon                        |
| Ed         | {skeleton: 'Ed'}          | 7 Mon                      |
| Ehm        | {skeleton: 'Ehm'}         | Mon 12:43 AM               |
| EHm        | {skeleton: 'EHm'}         | Mon 12:43                  |
| Ehms       | {skeleton: 'Ehms'}        | Mon 2:45:23 PM             |
| EHms       | {skeleton: 'EHms'}        | Mon 12:45:45               |
| Gy         | {skeleton: 'Gy'}          | 2016 AD                    |
| GyMMM      | {skeleton: 'GyMMM'}       | Nov 2016 AD                |
| GyMMMd     | {skeleton: 'GyMMMd'}      | Nov 7, 2016 AD             |
| GyMMMEd    | {skeleton: 'GyMMMEd'}     | Mon, Nov 7, 2016 AD        |
| h          | {skeleton: 'h'}           | 12 PM                      |
| H          | {skeleton: 'H'}           | 12                         |
| hm         | {skeleton: 'hm'}          | 12:59 PM                   |
| Hm         | {skeleton: 'Hm'}          | 12:59                      |
| hms        | {skeleton: 'hms'}         | 12:59:13 PM                |
| Hms        | {skeleton: 'Hms'}         | 12:59:13                   |
| M          | {skeleton: 'M'}           | 11                         |
| Md         | {skeleton: 'Md'}          | 11/7                       |
| MEd        | {skeleton: 'MEd'}         | Mon, 11/7                  |
| MMM        | {skeleton: 'MMM'}         | Nov                        |
| MMMEd      | {skeleton: 'MMMEd'}       | Mon, Nov 7                 |
| MMMd       | {skeleton: 'MMMd'}        | Nov 7                      |
| ms         | {skeleton: 'ms'}          | 59:13                      |
| y          | {skeleton: 'y'}           | 2016                       |
| yM         | {skeleton: 'yM'}          | 11/2016                    |
| yMd        | {skeleton: 'yMd'}         | 11/7/2016                  |
| yMEd       | {skeleton: 'yMEd'}        | Mon, 11/7/2016             |
| yMMM       | {skeleton: 'yMMM'}        | Nov 2016                   |
| yMMMd      | {skeleton: 'yMMMd'}       | Nov 7, 2016                |
| yMMMEd     | {skeleton: 'yMMMEd'}      | Mon, Nov 7, 2016           |

> Culture-specific format skeletons are also supported.

### Custom Formats

To use custom date and time formats, specify the date/time pattern directly in the `format` property. A custom format string must contain one or more of the following standard date/time symbols:

| Symbols | Description                                                                 |
| ------- | --------------------------------------------------------------------------- |
| G       | Represents the era in the date.                                             |
| y       | Represents the year.                                                        |
| M / L   | Represents the month.                                                       |
| E / c   | Represents the day of the week.                                             |
| d       | Represents the day of the month.                                            |
| h / H   | Represents the hour. Use `h` for 12-hour format and `H` for 24-hour format. |
| m       | Represents minutes.                                                         |
| s       | Represents seconds.                                                         |
| f       | Represents milliseconds.                                                    |
| a       | Represents the AM/PM designator. It will only be displayed if the hour is specified in the `h` format. |
| z       | Represents the time zone.                                                   |
| ' (single quotes) | To display words in the formatted date, specify the words within single quotes. |

**Custom Format Example**

```typescript
import { Internationalization } from '@syncfusion/ej2-base';

let intl: Internationalization = new Internationalization();
let formattedString: string = intl.formatDate(new Date('1/12/2014 10:20:33'), { format: '\'year:\' y \'month:\' MM' });
// Output: "year: 2014 month: 01"
```

> If the `format` property is provided as an option, other properties are not considered.

### Date Parsing

#### getDateParser

The [`getDateParser`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#getdateparser) method returns a function that parses a given string based on the [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateformatoptions) specified.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/default-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/default-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/default-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/default-cs5" %}

#### parseDate

The [`parseDate`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#parsedate) method takes two arguments—a string value and [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateformatoptions)—and returns the parsed date object.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/default-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/default-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/default-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/default-cs6" %}

### Date Formatting

#### getDateFormat

The [`getDateFormat`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#getdateformat) method returns a function that formats a given date object based on the [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateFormatOptions/) specified.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/default-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/default-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/default-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/default-cs7" %}

#### formatDate

The [`formatDate`](https://ej2.syncfusion.com/documentation/api/base/internationalization/) method takes two arguments—a date object and [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateFormatOptions/)—and returns the formatted string.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/default-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/default-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/default-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/default-cs8" %}

## Error Handling

When working with internationalization, invalid format strings or unsupported culture codes may cause errors. Ensure that:

- Culture codes follow the standard locale identifier format (e.g., `en-US`, `fr-FR`, `ar-SA`)
- Required CLDR data files are loaded before using the corresponding culture
- Format strings use valid specifiers as documented in the format tables above
- Date and number values passed to parsing methods are in expected formats

If an error occurs, check the browser console for detailed error messages and verify that all necessary CLDR data files have been loaded correctly.

## Performance Considerations

Loading multiple CLDR data files can impact application performance. Consider the following best practices:

- Load only the CLDR data files required for the cultures used in the application
- Use the single file path reference when multiple data types are needed for a culture
- Load CLDR data during application initialization rather than on-demand
- Cache formatted values when the same data is displayed multiple times

## See Also

- [Localization](./localization)
- [Right-to-Left Support](./right-to-left)
- [Unicode CLDR Documentation](https://cldr.unicode.org/)