---
layout: post
title: Ej1 api migration in React Drop down list component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Drop down list component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Drop down list component

This article describes the API migration process of  DropDownList component from Essential JS 1 to Essential JS 2.

## DataBinding

{% raw %}

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Default** | **Property**: *dataSource* <br/>`<EJ.DropDownList dataSource={groups} ></EJ.DropDownList>` | **Property**: *dataSource* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} dataSource={this.cityData} />`|
| **Fields for mapping** | **Property**: *fields* <br/>`<EJ.DropDownList fields-value="parentId" fields-text="text" ></EJ.DropDownList>`| **Property**: *fields* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} fields={this.cityField} />`|
| **Query** | **Property**: *query* <br/>`<EJ.DropDownList query={query}></EJ.DropDownList>`| **Property**: *query*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} query={this.query} />`|
| **Begin event** | **Event** :*actionBegin* <br/>`<EJ.DropDownList actionBegin="actionBegin"></EJ.DropDownList>` | **Event** : *actionBegin* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} actionBegin={this.actionBegin.bind(this)} />`|
| **Complete event** | **Event**: *actionComplete* <br/>`<EJ.DropDownList actionComplete="actionComplete"></EJ.DropDownList>` | **Event**: *actionComplete* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} actionComplete={this.actionComplete.bind(this)} />`|
| **Failure event** | **Event**: *actionFailure* <br/>`<EJ.DropDownList actionFailure="actionFailure"></EJ.DropDownList>`| **Event**: *actionFailure* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} actionFailure={this.actionFailure.bind(this)} />`|
| **Success event**| **Event**: *actionSuccess* <br/>`<EJ.DropDownList actionSuccess="actionSuccess"></EJ.DropDownList>`| **Not Applicable** |
| **Data binding event** | **Event**: *dataBound* <br/> `<EJ.DropDownList dataBound="dataBound"></EJ.DropDownList>`| **Event**: *dataBind* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} dataBind={this.dataBind.bind(this)} />`|

## Filtering

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Default** |	**Property**: *enableFilterSearch* <br/>`<EJ.DropDownList enableFilterSearch={true}></EJ.DropDownList>`| **Property**: *allowFiltering* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} allowFiltering={true} />` |
| **Server filtering** | **Property**: *enableServerFiltering* <br/>`<EJ.DropDownList enableServerFiltering={true}></EJ.DropDownList>`| **Property**: *allowFiltering* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} allowFiltering={true} />` |
| **Filter type** | **Property**: *filterType* <br/>`<EJ.DropDownList filterType="contains"></EJ.DropDownList>` |<https://ej2.syncfusion.com/react/demos/#/material/drop-down-list/filtering> |
| **No Records Template** |	**Not Applicable** | **Property**: *noRecordsTemplate* <br/> `<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} noRecordsTemplate={this.noRecordsTemplate} />` |
| **Filter Bar watermark text** | **Not Applicable** | **Property**: *filterBarPlaceholder* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} filterBarPlaceholder={this.filterBarPlaceholder} />` |
| **Ignore casing and diacritics** | **Not Applicable** |**Property**: *ignoreAccent*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} ignoreAccent={true} />` |
| **Incremental search**| **Property**: *enableIncrementalSearch*<br/>`<EJ.DropDownList enableIncrementalSearch={true}></EJ.DropDownList>` | **By default it is true** |
| **Case sensitivity** | **Property**: *caseSensitiveSearch*<br/>`<EJ.DropDownList caseSensitiveSearch={true}></EJ.DropDownList>` | <https://ej2.syncfusion.com/react/demos/#/material/drop-down-list/filtering> |
| **Search event** | **Event**: *search* <br/>`<EJ.DropDownList search="search"></EJ.DropDownList>` | **Event**: *filtering* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }}  filtering={this.filtering.bind(this)} />` |

## Template

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Default** | **Property**: *template* <br/>`<EJ.DropDownList template={template}></EJ.DropDownList>` |**Property**: *itemTemplate*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} itemTemplate={this.itemTemplate} />`|
| **Group Template** | **Not Applicable** | **Property**: *groupTemplate* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} groupTemplate={this.groupTemplate} />`|
| **ValueTemplate** | **Not Applicable** | **Property**: *valueTemplate* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} valueTemplate={this.valueTemplate} />`|
| **Header Template** | **Property**: *headerTemplate* <br/>`<EJ.DropDownList headerTemplate={headerTemplate}></EJ.DropDownList>`| **Property**: *headerTemplate* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} headerTemplate={this.headerTemplate} />`|
| **FooterTemplate** | **Not applicable** |	**Property**: *footerTemplate* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} footerTemplate={this.footerTemplate} />`|
| **No records Template** | **Not applicable** | **Property**: *noRecordsTemplate* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} noRecordsTemplate={this.noRecordsTemplate} />`|
| **Action failure Template** | **Not applicable** | **Property**: *actionFailureTemplate* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} actionFailureTemplate={this.actionFailureTemplate} />`|

## Virtual Scrolling

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Default** |	**Property**: *allowVirtualScrolling* <br/>`<EJ.DropDownList allowVirtualScrolling={true}></EJ.DropDownList>` | **Not applicable** |

## Applying CSS

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Default** | **Property**: *cssClass* <br/>`<EJ.DropDownList cssClass="customClass"></EJ.DropDownList>` | **Property**: *cssClass* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} cssClass={this.cssclass} />`|
| **showRoundedCorner** | **Property**: *showRoundedCorner* <br/>`<EJ.DropDownList showRoundedCorner={true}></EJ.DropDownList>` | **Acheivable through the [cssClass](https://ej2.syncfusion.com/react/documentation/drop-down-list/api-dropDownListComponent.html#cssclass) property.**|

## Sorting

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Default** |	**Property**: *enableSorting* <br/>`<EJ.DropDownList enableSorting={true}></EJ.DropDownList>` | **Acheivable through the [sortOrder](https://ej2.syncfusion.com/react/documentation/drop-down-list/api-dropDownListComponent.html#sortorder) property.** |
| **Order of sorting** | **Property**: *sortOrder* <br/>`<EJ.DropDownList sortOrder="ascending"></EJ.DropDownList>` | **Property**: *sortOrder* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} sortOrder={this.sortOrder} />`|

## Popup

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--- | --- | --- |
| **Popup height** | **Property**: *popupHeight* <br/>`<EJ.DropDownList popupHeight="500px"></EJ.DropDownList>`| **Property**: popupHeight <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} popupHeight={this.popupHeight} />`|
| **Popup width** |	**Property**: *popupWidth* <br/>`<EJ.DropDownList popupWidth="500px"></EJ.DropDownList>` | **Property**: *popupWidth* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} popupWidth={this.popupWidth} />`|
| **Popup show on load** |	**Property**: *showPopupOnLoad* <br/> `<EJ.DropDownList showPopupOnLoad={true}></EJ.DropDownList>`|	**By default, the data load on demand.** |
| **enableAnimation** |	**Property**: *enableAnimation* <br/>`<EJ.DropDownList enableAnimation={true}></EJ.DropDownList>`| **Not applicable** |
| **Popup resizing** | **Property**: *enablePopupResize* <br/>`<EJ.DropDownList enablePopupResize={true}></EJ.DropDownList>`| **Not applicable** |
| **Maximum Popup height** | **Property**: *maxPopupHeight* <br/>`<EJ.DropDownList maxPopupHeight="500px"></EJ.DropDownList>`| **Not applicable** |
| **Minimum Popup height** | **Property**: *minPopupHeight*<br/>`<EJ.DropDownList minPopupHeight="500px"></EJ.DropDownList>`<br/>}); | **Not applicable** |
| **Maximum Popup width** | **Property**: *maxPopupWidth* <br/>`<EJ.DropDownList maxPopupWidth="500px"></EJ.DropDownList>`| **Not applicable** |
| **Minimum Popup width** |	**Property**: *minPopupWidth* <br/>`<EJ.DropDownList minPopupWidth="500px"></EJ.DropDownList>` | **Not applicable** |
| **Loading data** | **Property**: *loadOnDemand* <br/>`<EJ.DropDownList loadOnDemand={true}></EJ.DropDownList>` | **By default, it is true** |
| **Popup showing manually** | **Method**: *showPopup* <br/>`<EJ.DropDownList></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList('showPopup')` | **Method**: *showPopup* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }}  />`<br/>`this.ddlObj.showPopup();`|
| **Popup hiding manually** |**Method**: *hidePopup* <br/> `<EJ.DropDownList></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList('hidePopup')` | **Method**: *hidePopup*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }}  />`<br/>`this.ddlObj.hidePopup();`|
| **Before Popup hide event** | **Event**: *beforePopupHide* <br/>`<EJ.DropDownList beforePopupHide="beforePopupHide"></EJ.DropDownList>`| **Not applicable** |
| **Before Popup shown event** | **Event**: *beforePopupShown*<br/>`<EJ.DropDownList beforePopupShown="beforePopupShown"></EJ.DropDownList>`| **Event**: *beforeOpen* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} (beforeOpen)={this.beforeOpen.bind(this)} />`|
| **Popup hide event** | **Event**: *popupHide*<br/>`<EJ.DropDownList popupHide="popupHide"></EJ.DropDownList>`|**Event**: *close* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} (close)={this.close.bind(this)} />` |
| **Popup resize event** | **Event**: *popupResize*<br/>`<EJ.DropDownList popupResize="popupResize"></EJ.DropDownList>`|	**Not applicable** |
| **Popup resize start event**| **Event**: *popupResizeStart*<br/>`<EJ.DropDownList popupResizeStart="popupResizeStart"></EJ.DropDownList>`|	**Not applicable** |
| **Popup resize stop event** | **Event**: *popupResizeStop*<br/>`<EJ.DropDownList popupResizeStop="popupResizeStop"></EJ.DropDownList>`| **Not applicable** |
| **Popup shown event** | **Event**: *popupShown*<br/>`<EJ.DropDownList popupShown="popupShown"></EJ.DropDownList>`| **Event**: *open*<br/> `<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} (open)={this.open.bind(this)} />`|

## Placeholder

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Watermark text** | **Property**: *watermarkText* <br/>`<EJ.DropDownList watermarkText="select"></EJ.DropDownList>`| **Property**: *placeholder* <br/>`var dropDownListObject = new ej.dropdowns.DropDownList({placeholder: "select"});dropDownListObject.appendTo('#ddlelement');`|
| **Floating  of watermark text** | **Not applicable** |	**Property**: *floatLabelType* <br/>`var dropDownListObject = new ej.dropdowns.DropDownList({floatLabelType: "Auto"});dropDownListObject.appendTo('#ddlelement');`|

## Grouping

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Default** | **Property**: *fields.groupBy* <br/>`<EJ.DropDownList fields-value="parentId" fields-groupBy="text" ></EJ.DropDownList>`|**Property**: *fields.groupBy*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} fields={this.field} />`|
| **Group Template**| **Not applicable** | **Property**: *groupTemplate*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} groupTemplate={this.groupTemplate} />` |

## Accessibility

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Globalization** | **Property**: *locale*<br/>`<EJ.DropDownList fields-value="parentId" locale="fr-FE" ></EJ.DropDownList>`| **Property**: *locale*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} locale={this.locale} />` |
| **Rtl support** |	**Property**: *enableRTL*<br/>`<EJ.DropDownList fields-value="parentId" enableRTL={true} ></EJ.DropDownList>` | **Property**: *enableRtl*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} enableRtl={true} />` |

## Miscellaneous

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Enable/disable** | **Property**: *enabled*<br/>`<EJ.DropDownList enabled={true} ></EJ.DropDownList>` | **Property**: *enabled* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} enabled={true} />` |
| Read only | **Property**: *readOnly* <br/>`<EJ.DropDownList readOnly={true} ></EJ.DropDownList>` | <br/>**Property**: *readOnly*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} readOnly={true} />` |
| Persistence of data | **Property**: *enablePersistence*<br/>`<EJ.DropDownList enablePersistence={true} ></EJ.DropDownList>` |**Property**: *enablePersistence*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} enablePersistence={true} />` |
| **Disable** |	**Method**: *disable*<br/>`<EJ.DropDownList></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList('disable')` |**Property**: *enabled*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} enabled={true} />`|
| **Enable** | **Method**: *enable*<br/>`<EJ.DropDownList></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList('enable')`| **Property**: *enabled*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} enabled={true} />`|
| **Height** | **Property**: *height* <br/>`<EJ.DropDownList height="500px" ></EJ.DropDownList>`| **Property**: *height* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} height={this.height} />`|
| **Width** |	**Property**: *width* <br/>`<EJ.DropDownList width="100px"  ></EJ.DropDownList>` | **Property**: *width* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} width={this.width} />`|

## Selection

<!-- markdownlint-disable MD010 -->
| Behavior	| API in Essential JS 1	| API in Essential JS 2 |
|--- | --- | --- |
| Selecting particular index | **Property**: *selectedIndex*<br/>`<EJ.DropDownList selectedIndex={selectedIndex} ></EJ.DropDownList>` | **Property**: *index*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} index={this.index} />` |
| **Selecting particular value** | **Property**: *value*<br/>`<EJ.DropDownList value="data" ></EJ.DropDownList>` | **Property**: *value*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} value={this.value} />`|
| **Selecting particular text** | **Property**: *text* <br/>`<EJ.DropDownList text="data" ></EJ.DropDownList>`|**Property**: *text* <br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} text={this.text} />` |
| **Target id** | **Property**: *targetId* <br/>`<EJ.DropDownList targetId="id" ></EJ.DropDownList>` | **Not applicable** |
| **Selecting item using text**	| **Method**: *selectItemByText* <br/>`<EJ.DropDownList ></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList('selectItemByText','car')` |	**Not applicable** |
| **Unselect item using text** | **Method**: *unselectItemByText* <br/>`<EJ.DropDownList></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList('unselectItemByText','car')` | **Not applicable** |
| **Selecting item using value**| **Method**: *selectItemByValue* <br/>`<EJ.DropDownList ></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList('selectItemByValue','car')` | **Not applicable** |
| **Getting data by using value** |	**Method**: *getItemDataByValue* <br/>`<EJ.DropDownList ></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList('unselectItemByValue','car')` | **Method**: *getDataByValue*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }}/>`<br/>`this.ddlObj.getDataByValue();`|
| **Get selected value** | **Method**: *getSelectedItem* <br/>`<EJ.DropDownList ></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList('getSelectedItem')` |**Not applicable** |
| **Get selected text** | **Method**: *getSelectedText* <br/>`<EJ.DropDownList></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList('getSelectedText')`| **Property**: *text*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} text={this.text} />` |
| **Select event** | **Event**: *select*<br/>`<EJ.DropDownList select="onSelect" ></EJ.DropDownList>`| **Event**: *select*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} (select)={this.select.bind(this)} />`|
| **Addition of Html attributes** | **Property**: *htmlAttributes*<br/>`<EJ.DropDownList htmlAttributes={attributes} ></EJ.DropDownList>`| **Property**: *htmlAttributes*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} htmlAttributes={this.htmlAttributes} />` |

## Common

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Adding new item** | **Method** : *addItem*<br/>`<EJ.DropDownList></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList("addItem", {text:"India"});` | **Method**: *addItem*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }}/>`<br/>`this.ddlObj.addItem("data");` |
| **Clearing the text**| **Method** : *clearText*<br/>`<EJ.DropDownList></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList('clearText')` | **Property**: *value*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} value={this.value} />`|
| **Destroy the component** | **Method** : *destroy*<br/>`<EJ.DropDownList></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList('destroy')`| **Method**: *destroy*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }}/>`<br/>`this.ddlObj.destroy();` |
| **Getting the data** | **Method** : *getListData*<br/>`<EJ.DropDownList></EJ.DropDownList>`<br/>`$('#dropdown').ejDropDownList('getListData')` |**Method** : *getItems*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }}/>`<br/>`this.ddlObj.getItems();` |
| **Create event** | **Event**: *create*<br/>`<EJ.DropDownList create="create" ></EJ.DropDownList>` | **Event**: *created*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} (created)={this.created.bind(this)} />` |
| **Destroy event** | **Event**: *destroy*<br/>`<EJ.DropDownList destroy="destroy" ></EJ.DropDownList>`|**Event**: *destroyed*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} (destroyed)={this.destroyed.bind(this)} />` |
| **Cascade  event** | **Event**: *cascade*<br/>`<EJ.DropDownList cascade="cascade" ></EJ.DropDownList>`|<https://ej2.syncfusion.com/react/demos/#/material/drop-down-list/cascading> |
| **Change event** | **Event**: *change*<br/>`<EJ.DropDownList change="change" ></EJ.DropDownList>`| **Event**: *change*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} (change)={this.change.bind(this)} />` |
| **Focus out event** |	**Event**: *focusOut*<br/>`<EJ.DropDownList focusOut="focusOut" ></EJ.DropDownList>`| **Event**: *blur*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} (blur)={this.blur.bind(this)} />`|
| **Focus in event**| **Event**: *focusIn*<br/><br/>`<EJ.DropDownList focusIn="focusIn" ></EJ.DropDownList>` | **Event**: *focus*<br/>`<DropDownListComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} (focus)={this.focus.bind(this)} />` |

{% endraw %}