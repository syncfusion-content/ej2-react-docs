---
layout: post
title: Globalization Overview in React Components | Syncfusion
description: Learn how Syncfusion React UI components support globalization, including internationalization (i18n) for culture-specific formatting and localization (l10n) for multi-language UI text.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Globalization Overview

Globalization is the process of designing applications that adapt seamlessly to different cultures, languages, and regional preferences. It combines two essential aspects:

- **Internationalization (i18n)** — designing the application to support multiple locales without code changes, primarily through culture-specific formatting and parsing of dates, numbers, and currencies  
- **Localization (l10n)** — translating user-facing text (such as labels, messages, and tooltips) into different languages  

Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components provide full globalization support, allowing developers to build applications that automatically adjust to diverse cultural and linguistic requirements.

## What is Globalization?

Globalization enables an application to function effectively across multiple regions and languages without requiring code modifications. For Syncfusion React UI components, this includes:

- **Date and Time Formatting** — displaying dates and times using locale-specific patterns (for example, MM/DD/YYYY in the US vs. DD/MM/YYYY in many European countries)  
- **Number Formatting** — applying appropriate decimal separators, thousands grouping, and digit patterns (for example, 1,234.56 in English vs. 1.234,56 in German)  
- **Currency Formatting** — presenting monetary values with the correct currency symbol, placement, and format (for example, $1,234.56 vs. 1.234,56 €)  
- **Text Translation** — translating static UI elements such as button captions, menu items, dialog messages, and validation errors into the target language  
- **Text Direction** — automatically supporting right-to-left (RTL) layout and text alignment for languages such as Arabic and Hebrew  

By default, Syncfusion components use the **en-US** culture and **USD** currency. Developers can change these settings globally using the `setCulture()` and `setCurrencyCode()` methods provided by the Internationalization library.

## Learn More

Globalization support in Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components is powered by two complementary libraries:

- [Localization](../../common/globalization/localization) — enables translation of static text content across all Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components  
- [Internationalization](../../common/globalization/internationalization) — provides formatting and parsing support for dates, numbers, currencies, and related culture-specific data  

## See Also

- [Accessibility](../accessibility)
- [Theming](../../appearance/theme)