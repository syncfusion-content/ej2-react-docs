---
layout: post
title: Ej1 api migration in React Combo box component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Combo box component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Combo box component

This article describes the API migration process of ComboBox component from Essential JS 1 to Essential JS 2.

## DataBinding

{% raw %}

<!-- markdownlint-disable MD010 -->
| Behavior	| API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Default** |	**Property**: *datasource*<br/>`<EJ.ComboBox dataSource={groups} ></EJ.ComboBox>`|**Property**: *dataSource*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} dataSource={this.cityData} />`|
| **Fields for mapping** | **Property**: *fields*<br/>`<EJ.ComboBox dataSource={groups} fields-value="parentId" fields-text="text"> </EJ.ComboBox>`|**Property**: *fields*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} fields={this.field} />` |
|**Query** | **Property**: *query*<br/>`<EJ.ComboBox query={query} ></EJ.ComboBox>` | **Property**: *query*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} query={this.query} />` |
| **Begin event** | **Event**:*actionBegin*<br/>`<EJ.ComboBox actionBegin="actionBegin" ></EJ.ComboBox>` | **Event**: *actionBegin*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} actionBegin={this.actionBegin.bind(this)} />` |
| **Complete event** | **Event**:*actionComplete*<br/>`<EJ.ComboBox actionComplete="actionComplete" ></EJ.ComboBox>` | **Event**: *actionComplete*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} actionComplete={this.actionComplete.bind(this)} />`|
| **Failure event** |**Event**:*actionFailure*<br/>`<EJ.ComboBox actionFailure="actionFailure"></EJ.ComboBox>` | **Event**: *actionFailure*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} actionFailure={this.actionFailure.bind(this)} />` |

## Filtering

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Default**| **Property**: *allowFiltering*<br/>`<EJ.ComboBox allowFiltering={true}></EJ.ComboBox>`| **Property**: *allowFiltering*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} allowFiltering={true} />`|
| **No records template** | **Property**: *noRecordsTemplate*<br/>`<EJ.ComboBox noRecordsTemplate={template}></EJ.ComboBox>` |**Property**: *noRecordsTemplate*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} noRecordsTemplate={this.noRecordsTemplate} />` |
| **Ignore casing and diacritics**| **Not Applicable** | **Property**: *ignoreAccent*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} ignoreAccent={true} />` |
| **Custom value addition** | **Property**: *allowCustom*<br/>`<EJ.ComboBox allowCustom={true}></EJ.ComboBox>` | <https://ej2.syncfusion.com/react/demos/#/material/combo-box/custom-value> |
| **Search event** | **Event**: *filtering*<br/>`<EJ.ComboBox filtering="filtering"></EJ.ComboBox>` | **Event**: *filtering*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} filtering={this.filteting.bind(this)} />` |

## Template

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Default** | **Property**: *itemTemplate*<br/>`<EJ.ComboBox itemTemplate={itemTemplate}></EJ.ComboBox>` | **Property**: *itemTemplate*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} itemTemplate={this.itemTemplate} />`|
| **Group Template** | **Property**: *groupTemplate*<br/>`<EJ.ComboBox groupTemplate={groupTemplate}></EJ.ComboBox>` | **Property**: *groupTemplate*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} groupTemplate={this.groupTemplate} />`|
| **ValueTemplate** | **Not Applicable** |**Property**: *valueTemplate*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} valueTemplate={this.valueTemplate} />` |
| **Header Template** | **Property**: *headerTemplate*<br/>`<EJ.ComboBox headerTemplate={headerTemplate}></EJ.ComboBox>` |	**Property**: *headerTemplate*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} headerTemplate={this.headerTemplate} />` |
| **FooterTemplate**| **Property**: *footerTemplate*<br/>`<EJ.ComboBox footerTemplate={footerTemplate}></EJ.ComboBox>`| **Property**: *footerTemplate*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} footerTemplate={this.footerTemplate} />` |
| **No records Template** |	**Property**: *noRecordsTemplate*<br/>`<EJ.ComboBox noRecordsTemplate={noRecordsTemplate}></EJ.ComboBox>`| **Property**: *noRecordsTemplate*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} noRecordsTemplate={this.noRecordsTemplate} />` |
| **Auto fill** | **Property**: *autoFill*<br/>`<EJ.ComboBox autoFill={true}></EJ.ComboBox>`|**Property**: *autoFill*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} autoFill={true} />`|
| **Action failure Template** |	**Property**: *actionFailureTemplate*<br/>`<EJ.ComboBox actionFailureTemplate={actionFailureTemplate}></EJ.ComboBox>`|**Property**: *actionFailureTemplate*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} actionFailureTemplate={this.actionFailureTemplate} />`|

## Applying CSS

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | ---|
| **Default** | **Property**: *cssClass* <br/>`<EJ.ComboBox cssClass="cssClass"></EJ.ComboBox>`| **Property**: *cssClass*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} cssClass={this.cssClass} />` |
| **width** | **Property**: *width* <br/>`<EJ.ComboBox width="300px"></EJ.ComboBox>` | **Property**: *width*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} width={this.width} />` |

## Grouping

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2|
| --- | --- | --- |
| **Default** | **Property**: *fields-groupBy*<br/>`<EJ.ComboBox dataSource={groups} fields-value="parentId" fields-groupBy="text"> </EJ.ComboBox>`| **Property**: *fields*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} fields={this.field} />` |

## Accessibility

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2|
| --- | --- | --- |
| **Globalization** | **Property**: *locale*<br/>`<EJ.ComboBox locale="fr-FE"></EJ.ComboBox>`| **Property**: *locale*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} locale={this.locale} />` |
| **Rtl support**| **Property**: *enableRtl*<br/>`<EJ.ComboBox enableRtl={true}></EJ.ComboBox>`|**Property**: *enableRtl*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} enableRtl={true} />`|

## Placeholder

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2|
| --- | --- | --- |
| **Watermark text** | **Property**: *placeholder*<br/>`<EJ.ComboBox placeholder="select"></EJ.ComboBox>`|<br/>**Property**: *placeholder*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} placeholder={this.placeholder} />` |
| **Floating  of watermark text**| **Not applicable** |**Property**: *floatLabelType*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} floatLabelType={this.floatLabelType} />` |

## Miscellaneous

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2|
| --- | --- | --- |
| **Enable/disable** | **Property**: *enabled*<br/>`<EJ.ComboBox enabled={true}></EJ.ComboBox>`|**Property**: *enabled*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} enabled={true} />` |
| **Read only** | **Property**: *readOnly*<br/>`<EJ.ComboBox readOnly={true}></EJ.ComboBox>` |**Property**: *readOnly*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} readOnly={true} />`|
| **Addition of Html attributes** | **Property**: *htmlAttributes*<br/>`<EJ.ComboBox htmlAttributes={htmlAttributes}></EJ.ComboBox>` | **Property**: *htmlAttributes*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} htmlAttributes={this.htmlAttributes} />`|

## Sorting

<!-- markdownlint-disable MD010 -->
|Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Order of sorting** | **Property**: *sortOrder*<br/>`<EJ.ComboBox sortOrder={sortOrder}></EJ.ComboBox>` | **Property**: *sortOrder*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} sortOrder={this.sortOrder} />`|

## Selection

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Selecting particular index** | **Property**: *index*<br/>`<EJ.ComboBox index="1"></EJ.ComboBox>` | **Property**: *index*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} index={this.index} />` |
| **Selecting particular value** | **Property**: *value*<br/>`<EJ.ComboBox value="data"></EJ.ComboBox>`| **Property**: *value*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} value={this.value} />` |
| **Selecting particular text** | **Property**: *text* <br/>`<EJ.ComboBox text="data"></EJ.ComboBox>` | **Property**: *text*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} text={this.text} />`|
| **Getting data by using value** |	**Method**: *getItemDataByValue*<br/>`<EJ.ComboBox sortOrder={sortOrder}></EJ.ComboBox>` <br/> <br/>$('#dropdown').ejComboBox('getItemDataByValue',"data") | **Method**: *getDataByValue*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} />`<br/><br/> this.ddlObj.getDataByValue("data");
| **Select event** | **Event**: *select*<br/>`<EJ.ComboBox select="select"></EJ.ComboBox>`| **Event**: *select*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} select={this.select} />`|

## Popup

<!-- markdownlint-disable MD010 -->
| Behavior| API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| **Popup height** | **Property**: *popupHeight*<br/>`<EJ.ComboBox popupHeight="300px"></EJ.ComboBox>`|**Property**:*popupheight*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} popupHeight={this.popupHeight} />`|
| **Popup width** | **Property**: *popupWidth*<br/>`<EJ.ComboBox popupWidth="300px"></EJ.ComboBox>`|**Property**:*popupWidth*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} popupWidth={this.popupWidth} />` |
| **Popup showing manually** | **Method**: *showPopup*<br/>`<EJ.ComboBox ></EJ.ComboBox>` <br/> <br/>$('#dropdown').ejComboBox("showPopup");|	**Method**: *showPopup*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} />`<br/><br/>this.ddlObj.showPopup(); |
| **Popup hiding manually** | **Method**: *hidePopup*<br/>`<EJ.ComboBox ></EJ.ComboBox>` <br/> <br/>$('#dropdown').ejComboBox("hidePopup"); | **Method**: *hidePopup*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }}  />`<br/><br/> this.ddlObj.hidePopup(); |
| **Popup hide event** | **Event**: *close*<br/>`<EJ.ComboBox close="close"></EJ.ComboBox>` | **Event**: *close*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} close={this.close.bind(this)} />`|
| **Popup shown event** | **Event**: *open*<br/>`<EJ.ComboBox open="open"></EJ.ComboBox>`| **Event**: *open*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} open={this.open.bind(this)} />`|

## Common

<!-- markdownlint-disable MD010 -->
| Behavior | API in Essential JS 1 |API in Essential JS 2 |
| --- | --- | --- |
| **Adding new item** | **Method** : *addItem*<br/>`<EJ.ComboBox ></EJ.ComboBox>` <br/> <br/>$('#dropdown').ejComboBox("addItem", { text :"India"});| **Method**: *addItem*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }}  />`<br/><br/> this.ddlObj.addItem({Id: 'id', Game: 'Golf'},2);|
| **Focus out event** | **Not applicable** | **Event**: *blur*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} blur={this.blur.bind(this)} />` |
| **Focus in event** | **Event**: *focus*<br/>`<EJ.ComboBox focus="focus"></EJ.ComboBox>` | **Event**: *FocusIn*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} focusIn={this.focus.bind(this)} />` |
| **Focus out** | **Method**: *focusOut*<br/>`<EJ.ComboBox ></EJ.ComboBox>` <br/> <br/>$('#dropdown').ejComboBox("focusOut");| **Method**: *focusOut*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }}  />`<br/><br/> this.ddlObj.focusOut(); |
| **Focus in** | **Method**: *focusIn*<br/>`<EJ.ComboBox ></EJ.ComboBox>` <br/> <br/>$('#dropdown').ejComboBox("focusIn"); | **Method**: *focusIn*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }}  />`<br/><br/> this.ddlObj.focusIn(); |
| **Getting the data** | **Method** : *getItems*<br/>`<EJ.ComboBox ></EJ.ComboBox>` <br/> <br/>$('#dropdown').ejComboBox("getItems"); | **Method**: *getItems*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }}  />`<br/><br/> this.ddlObj.getItems();|
| **Create event** | **Event**: *create*<br/>`<EJ.ComboBox close="close"></EJ.ComboBox>` |	**Event**: *created*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} created={this.create.bind(this)} />` |
| **Change event** | **Event**: *change*<br/>`<EJ.ComboBox close="close"></EJ.ComboBox>` | **Event**: *change*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} change={this.change.bind(this)} />` |
| **Custom value event** | **Event**: *customValueSpecifier*<br/>`<EJ.ComboBox customValueSpecifier="customValueSpecifier"></EJ.ComboBox>` | **Event**: *customValueSpecifier*<br/>`<ComboBoxComponent id="ddl" ref={(scope) => { this.ddlObj = scope; }} customValueSpecifier={this.customValueSpecifier.bind(this)} />` |

{% endraw %}