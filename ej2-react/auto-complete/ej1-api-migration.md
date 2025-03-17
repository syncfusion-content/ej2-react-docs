---
layout: post
title: Ej1 api migration in React Auto complete component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Auto complete component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Auto complete component

This article describes the API migration process of  AutoComplete component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.
> MultiSelect concept is not present in EJ2-AutoComplete.  If you want to use multiselection support in autocomplete, we suggest you to use MultiSelect component.

## DataBinding

{% raw %}

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Default** | **Property:** *datasource* <br/>`<EJ.Autocomplete id="default" dataSource = {carList} ></EJ.Autocomplete>`| **Property:** *dataSource*<br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} dataSource={this.cityData} />`|
| **Fields for mapping** | **Property:** *fields*<br/>`<EJ.Autocomplete id="default" fields = {fields} ></EJ.Autocomplete>`| **Property:** *fields*<br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} fields={this.fields} />` |
| **Query** | **Property**: *query*<br/>`<EJ.Autocomplete id="default" query = {query} ></EJ.Autocomplete>`| **Property**: *query*<br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} query={this.query} />`|
| **Begin event** | **Event**: *actionBegin*<br/>`<EJ.Autocomplete id="default" actionBegin = {actionBegin} ></EJ.Autocomplete>`|**Event**: *actionBegin*<br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} actionBegin={this.actionBegin.bind(this)} />`|
| **Complete event** | **Event**: *actionComplete*<br/>`<EJ.Autocomplete id="default" actionComplete = {actionComplete} ></EJ.Autocomplete>`|**Event**: *actionComplete* <br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} actionComplete={this.actionComplete.bind(this)} />`|
| **Failure event** | **Event**: *actionFailure*<br/>`<EJ.Autocomplete id="default" actionFailure = {actionFailure} ></EJ.Autocomplete>` |**Event**: *actionFailure* <br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} actionFailure={this.actionFailure.bind(this)} />`|
| **Success event** | **Event**: *actionSuccess* <br/>`<EJ.Autocomplete id="default" actionSuccess = {actionSuccess} ></EJ.Autocomplete>` |**Not Applicable** |

## Filtering

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Case sensitivity** | **Property**: *caseSensitiveSearch*<br/>`<EJ.Autocomplete id="default" caseSensitiveSearch = {true} ></EJ.Autocomplete>`|**Property:** *ignoreCase*<br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} ignoreCase={true} />`|
| **Accent effective search** | **Not applicable** | **Property** : *ignoreAccent* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} ignoreAccent={true} />`|
| **Filtering Type** | **Property:** *filterType*<br/>`<EJ.Autocomplete id="default" filterType = {filterType} ></EJ.Autocomplete>`| **Property**: *filterType*<br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} filterType={this.filterType} />` |
| **Autofill** | **Property:** *enableAutoFill*<br/>`<EJ.Autocomplete id="default" enableAutoFill = {true} ></EJ.Autocomplete>` | **Property:**: *autoFill* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} autoFill={true} />`|
| **Highlight the search word** | **Property**: *highlightSearch* <br/>`<EJ.Autocomplete id="default" highlightSearch = {true} ></EJ.Autocomplete>`|**Property:** *highlight* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} highlight={true} />`|
| **No of items to be shown** | **Property:** *itemsCount*<br/>`<EJ.Autocomplete id="default" itemsCount = {itemsCount} ></EJ.Autocomplete>` |**Property:** *suggestionCount*<br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} suggestionCount={this.suggestionCount} />` |
| **Minimum characters to enter** | **Property:** *minCharacter*<br/> `<EJ.Autocomplete id="default" minCharacter = {minCharacter} ></EJ.Autocomplete>` |**Property:** *minLength* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} minLength={this.minLength} />` |
| **Search** | **Method:** *search* <br/>`<EJ.Autocomplete id="autocomplete" ></EJ.Autocomplete>`<br/><br/> `$("#autocomplete").ejAutocomplete("search");`| **Not applicable** |

## Placeholder

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Watermark text** | **Property:** *watermarkText* <br/>`<EJ.Autocomplete id="default" watermarkText = {watermarkText} ></EJ.Autocomplete>`| **Property:** *placeholder* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} placeholder={this.placeholder} />`|
| **Floating  of watermark text** | **Not applicable**   | **Property:** *floatLabelType* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} floatLabelType={this.floatLabelType} />`|

## Popup

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **No records text** | **Property:** *emptyResultText* <br/> `<EJ.Autocomplete id="default" emptyResultText = {emptyResultText} ></EJ.Autocomplete>`| **Property:** *noRecordsTemplate*<br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} noRecordsTemplate={this.noRecordsTemplate} />`|
| **No records showing** | **Property:** *showEmptyResultText*<br/> `<EJ.Autocomplete id="default" showEmptyResultText = {true} ></EJ.Autocomplete>` | **Not applicable** |
| **Popupbutton** | **Property:** *showPopupButton*<br/> `<EJ.Autocomplete id="default" showPopupButton = {showPopupButton} ></EJ.Autocomplete>` | **Property:** *showPopupButton*<br/>  `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} showPopupButton={this.showPopupButton} />`|
| **Clear button** | **Property:** *showResetIcon* <br/> `<EJ.Autocomplete id="default" showResetIcon = {showResetIcon} ></EJ.Autocomplete>` | **Property:** *showClearButton* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} showClearButton={this.showClearButton} />` |
| **Animation** | **Property:** *animateType* <br/> `<EJ.Autocomplete id="default" animateType = {animateType} ></EJ.Autocomplete>` | **Not Applicable** |
| **Focusing the list item** | **Property:** *autoFocus*<br/> `<EJ.Autocomplete id="default" autoFocus = {true} ></EJ.Autocomplete>` |**Not applicable** |
| **Delaying the popup open time** | **Property:** *delaySuggestionTimeout*<br/> `<EJ.Autocomplete id="default" delaySuggestionTimeout = {delaySuggestionTimeout} ></EJ.Autocomplete>` | **Not applicable** |
| **Popup text when there is no popup items** | **Property:** *emptyResultText*<br/> `<EJ.Autocomplete id="default" emptyResultText = {emptyResultText} ></EJ.Autocomplete>`  |<https://ej2.syncfusion.com/react/demos/#/material/auto-complete/template> |
| **Enable/disable the duplicate option** | **Property:** *enableDistinct*<br/> `<EJ.Autocomplete id="default" enableDistinct = {true} ></EJ.Autocomplete>`|**Not applicable**  |
| **Popup height** | **Property:** *popupHeight*<br/> `<EJ.Autocomplete id="default" popupHeight = {popupHeight} ></EJ.Autocomplete>` |**Property:** *popupHeight* <br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} popupHeight={this.popupHeight} />` |
| **Popup Width** | **Property:** *popupWidth*<br/> `<EJ.Autocomplete id="default" popupWidth = {popupWidth} ></EJ.Autocomplete>` |**Property:** *popupWidth* <br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} popupWidth={this.popupWidth} />`|
| **Open popup** | **Method:** *open*<br/>`<EJ.Autocomplete id="autocomplete"  ></EJ.Autocomplete>`<br/> `$("#autocomplete").ejAutocomplete("open");` | **Method:** *showPopup*<br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} />`<br/><br/>`this.cmbObj.showPopup();` |
| **Close event** | **Event:** *close*<br/>`<EJ.Autocomplete id="autocomplete" close = "close" ></EJ.Autocomplete>` | **Event**: *close* <br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} close={this.close.bind(this)} />`|
| **Open event** | **Event:** *open*<br/> `<EJ.Autocomplete id="autocomplete" open="open"></EJ.Autocomplete>`| **Event:** *open* <br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} open={this.open.bind(this)} />`|

## CSS

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Default** | **Property:** *cssClass* <br/> `<EJ.Autocomplete id="autocomplete" cssClass="cssClass"></EJ.Autocomplete>` | **Property:** *cssClass* <br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} cssClass={this.cssClass} />`|
| **Height** | **Property:** *height* <br/> `<EJ.Autocomplete id="autocomplete" height="400px"></EJ.Autocomplete>`| **Acheivable through the [cssClass](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#cssclass) property.** |
| **showRoundedCorner**   | **Property:** *showRoundedCorner*<br/> `<EJ.Autocomplete id="autocomplete" showRoundedCorner={true}></EJ.Autocomplete>` | **Acheivable through the [cssClass](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#cssclass) property.** |
| **Width** | **Property:** *width* <br/> `<EJ.Autocomplete id="autocomplete" width="300px"></EJ.Autocomplete>`| **Property:** *width* <br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} width={this.width} />`|
| **Visibility** | **Property:** *visible* <br/>`<EJ.Autocomplete id="autocomplete" visible={true}></EJ.Autocomplete>` | **Acheivable through the [cssClass](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#cssclass) property.** |

## Grouping

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Default** | **Property:** *fields*<br/> `<EJ.Autocomplete id="default" fields = {fields} ></EJ.Autocomplete>`|**Property:** *fields* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} fields={this.fields} />`|

## Localization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Default** | **Property:** *Locale* <br/>`<EJ.Autocomplete id="default" locale = {"fr-FE"} ></EJ.Autocomplete>`| **Property:** *Locale* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} locale={this.locale} />`|

## Template

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Default** | **Property:** *template* `<EJ.Autocomplete id="default" template = {template} ></EJ.Autocomplete>`|**Property:** *itemTemplate*<br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} itemTemplate={this.itemTemplate} />` |
| **Group Template** | **Not Applicable**  | **Property:** *groupTemplate* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} groupTemplate={this.groupTemplate} />`|
| **ValueTemplate** | **Not applicable** | **Property:** *valueTemplate* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} valueTemplate={this.valueTemplate} />`|
| **Header Template** | **Not applicable** | **Property:** *headerTemplate* <br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} headerTemplate={this.headerTemplate} />`|
| **FooterTemplate** | **Not applicable** | **Property:** *footerTemplate* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} footerTemplate={this.footerTemplate} />` |
| **No records Template** | **Not applicable** | **Property:** *noRecordsTemplate* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} noRecordsTemplate={this.noRecordsTemplate} />` |
| **Action failure Template** | **Not applicable** | **Property:** *actionFailureTemplate* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} actionFailureTemplate={this.actionFailureTemplate} />` |

## Sorting

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Default** | **Property:** *allowSorting* <br/> `<EJ.Autocomplete id="default" allowSorting = {true} ></EJ.Autocomplete>` | **Acheivable through [sortOrder](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#sortorder) property** |
| **Order of sorting** | **Property:** *sortOrder* <br/>`<EJ.Autocomplete id="default" sortOrder = {sortOrder} ></EJ.Autocomplete>`|**Property:** *sortOrder*<br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} sortOrder={this.sortOrder} />` |

## Accessibility

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **RTL support** | **Property:** *enableRtl* <br/>`<EJ.Autocomplete id="default" enableRtl = {true} ></EJ.Autocomplete>` | **Property:** *enableRtl* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} enableRtl={this.enableRtl} />`|

## Selection

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------ | ----------- |
|**Selecting particular value**| **Property**: *selectValueByKey* <br/>`<EJ.Autocomplete id="default" selectValueByKey = {selectValueByKey} ></EJ.Autocomplete>`|**Achievable through [value](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#value) property.** |
| **Selecting particular value** | **Property**: *value*<br/>`<EJ.Autocomplete id="default" value = {value} ></EJ.Autocomplete>` | **Property:** *value*<br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} value={this.value} />`|
| **Selecting particular text** | **Property:** *text*<br/> `<EJ.Autocomplete id="default" text = {text} ></EJ.Autocomplete>` | **Not Applicable** |
| **Selecting particular value** |**Method:** *selectValueByKey*<br/>`<EJ.Autocomplete id="autocomplete" enableRtl = {true} ></EJ.Autocomplete>`<br/> `$("#autocomplete").selectValueByKey("key")`| **Achievable through [value](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#value) property.**   |
| **Selecting particular text** |**Method:** *selectValueByText* <br/> `<EJ.Autocomplete id="autocomplete" enableRtl = {true} ></EJ.Autocomplete>`<br/>`$("#autocomplete").selectValueByText("key")`|**Not applicable** |
| **Select event** |**Event**: *select*<br/>`<EJ.Autocomplete id="default" select = "select" ></EJ.Autocomplete>` | **Event:** *select* <br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} select={this.select.bind(this)} />`|

## Miscellaneous

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Enable/disable** | **Property:** *enabled*<br/>`<EJ.Autocomplete id="default" enabled = {true} ></EJ.Autocomplete>` | **Property:** *enabled* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} enabled={true} />`|
| **Enable persistence** | **Property:** *enablePersistence*<br/> `<EJ.Autocomplete id="default" enablePersistence = {true} ></EJ.Autocomplete>` | **Property:** *enablePersistence* <br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} enablePersistence={true} />`|
| **Loading icon** | **Property:** *showLoadingIcon* <br/>`<EJ.Autocomplete id="default" showLoadingIcon = {true} ></EJ.Autocomplete>` | **By default,it is showing** |
| **Read only** | **Property:** *readOnly* <br/> `<EJ.Autocomplete id="default" readOnly = {true} ></EJ.Autocomplete>` | **Property:** *readOnly* <br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} readOnly={this.readOnly} />`  |
| **Disable** | **Method:** *disable*<br/>`<EJ.Autocomplete id="autocomplete"></EJ.Autocomplete>`<br/> `$("#autocomplete").ejAutoComplete("disable");` | **Achievable through [enabled](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#enabled) property.**  |

## Common

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| **Addition of new option watermark text** | **Property:** *addNewText*<br/> `<EJ.Autocomplete id="default" addNewText = {addNewText} ></EJ.Autocomplete>`|**Not applicable** |
| **Addition of new item** | **Property:**  *allowAddNew* <br/>`<EJ.Autocomplete id="default" allowAddNew = {true} ></EJ.Autocomplete>`|**Property:** *allowCustom*<br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} allowCustom={true} />`|
| **Reset the autocomplete** | **Property:** *showResetIcon* <br/>`<EJ.Autocomplete id="default" showResetIcon = {true} ></EJ.Autocomplete>`|**Property:** *showClearIcon* <br/> `<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} showClearIcon={true} />`|
| **Destroy** | **Method:** *destroy*<br/>`<EJ.Autocomplete id="autocomplete" ></EJ.Autocomplete>`<br/> `$("#autocomplete").ejAutoComplete("destroy");`| **Method:** *destroy* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} />`<br/><br/>`this.cmbObj.destroy();`|
| **Reset the autocomplete** | **Method:** *clearText*<br/>`<EJ.Autocomplete id="autocomplete" ></EJ.Autocomplete>`<br/>`$("#autocomplete").ejAutoComplete("clearText");`  | **Property:** *value* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} value="" />` |
| **Multicolumn** | **Property:** *multiColumnSettings*<br/> `var autocompleteInstance =new ej.Autocomplete($("#selectCar"), {multiColumnSettings:{enable:true,showHeader:true,stringFormat:"{1}",searchColumnIndices[0,1,2], columns:[{"field": "EmployeeID" ,"headerText":"EmployeeID"},{"field": "FirstName" , "headerText":"FirstName"},{"field": "City" , "headerText":"City"}]}});` |**Not applicable** |
| **Hide the Autocomplete** | **Method:** *hide*<br/>`<EJ.Autocomplete id="autocomplete" ></EJ.Autocomplete>`<br/>`$("#autocomplete").ejAutoComplete("hide");` | **Acheivable through the [cssClass](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#cssclass) property.** |
| **Getting particular text** | **Method:** *getActiveText* <br/>`<EJ.Autocomplete id="autocomplete" ></EJ.Autocomplete>`<br/>`$("#autocomplete").ejAutoComplete("getActiveText");`|**Not applicable** |
| **Getting particular value** | **Method:** *getValue*<br/>`<EJ.Autocomplete id="autocomplete"  ></EJ.Autocomplete>`<br/> `$("#autocomplete").ejAutoComplete("getValue");` |**Achievable through [value](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#value) property.**  |
| **Change event** | **Event:** *change*<br/>`<EJ.Autocomplete id="default" change = "change" ></EJ.Autocomplete>`|**Event:** *change* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} change={this.change.bind(this)} />`|
| **Create event** | **Event:** *create* <br/>`<EJ.Autocomplete id="default" create = "create" ></EJ.Autocomplete>`|**Event:** *created* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} created={this.created.bind(this)} />`|
| **Destroy event** | **Event:** *destroy* <br/>`<EJ.Autocomplete id="default" destroy = "destroy" ></EJ.Autocomplete>` |**Event:** *destroyed* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} destroyed={this.destroyed.bind(this)} />`|
| **Focus out event** | **Event**: *focusOut*<br/>`<EJ.Autocomplete id="default" focusOut = "focusOut" ></EJ.Autocomplete>`| **Event:** *blur* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} blur={this.blur.bind(this)} />` |
| **Focus in event** | **Event** : *focusIn*<br/>`<EJ.Autocomplete id="default" focusIn = "focusIn" ></EJ.Autocomplete>` | **Event:** *focus* <br/>`<AutoCompleteComponent  id="atcelement" ref={(scope) => { this.cmbObj = scope; }} focus={this.focus.bind(this)} />` |

{% endraw %}