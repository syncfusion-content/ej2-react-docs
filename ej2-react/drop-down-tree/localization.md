---
layout: post
title: Localization in React Dropdown Tree | Syncfusion
description: Localize the React Dropdown Tree by customizing default culture strings like noRecordsTemplate, actionFailureTemplate, and overflowCountTemplate.
control: Dropdown Tree
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in React Dropdown Tree

The Dropdown Tree component supports comprehensive localization to adapt text, messages, and user interface elements for different cultures and languages. This enables seamless integration into multi-language applications by customizing all user-facing strings according to specific cultural requirements. The component's default locale is `en` (English), providing a foundation that can be extended to support any target culture through resource configuration and locale property settings.

Use the [`locale`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/index-default#locale) property on the `DropdownTreeComponent` to apply a culture to the component. The `locale` property accepts standard culture names (e.g., `en`, `fr-FR`, `de-DE`, `zh-CN`) and corresponds to the keys supplied to the **L10n** `load` function. Supported values include any culture code recognized by the [Syncfusion EJ2 locale resources](https://ej2.syncfusion.com/react/documentation/common/globalization/localization).

The following table represents the default localization keys and their corresponding text messages for the Dropdown Tree in `en` culture. These keys serve as templates that display dynamic content and can be customized for any target locale:

|KEY|Text/Message|Usage Context|
|----|----|----|
|noRecordsTemplate|No records found|Displayed when no data matches the current filter or when the data source is empty|
|actionFailureTemplate|Request failed|Shown when data loading operations encounter errors or network failures|
|overflowCountTemplate|+${count} more..|Appears when multiple items are selected and the display area shows a summary count of additional selections|
|totalCountTemplate|${count} selected|Displays the total number of currently selected items in multi-selection scenarios|
