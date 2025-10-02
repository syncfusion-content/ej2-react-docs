---
layout: post
title: Globalization in React Pivot Table component | Syncfusion
description: Learn here all about Globalization and localization in Syncfusion React Pivot Table component of Syncfusion Essential JS 2 and more.
control: Globalization and localization
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Globalization and localization in React Pivot Table component

The Pivot Table helps users view and interact with data in their own language and regional format. This means users from different countries can easily read and understand the data because dates, numbers, and words are shown in a way that feels familiar to them.

Globalization combines two important aspects:

**Internationalization**: This enables the Pivot Table to display dates and numbers based on local standards. For example, the date can appear as MM/dd/yyyy in the United States or dd/MM/yyyy in the United Kingdom.

**Localization**: This allows you to provide translations for text in the Pivot Table, such as button labels, menu items, and messages. You can display all these text elements in the language preferred by your users.

With both internationalization and localization, you can make sure the Pivot Table is friendly and easy to use for people who speak different languages and come from various regions.

For more details:
- Learn about [`Internationalization`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) for formatting dates and numbers.
- Read about [`Localization`](https://ej2.syncfusion.com/react/documentation/common/globalization/localization) for translating text content.

## Load CLDR-Data to the application

* Open command prompt in your machine.

* Run the following command in command prompt.

    ```
    cd /d 'Folder path of your react application'

    For example: cd /d  E:\react\WebApplication
    ```

* Make sure that you have installed `Node and NPM` in your machine before installing the `CLDR-Data`.

* To check if you have `Node`, run this command in command prompt.

    ```
    node -v
    ```

* If `Node` is not installed, then you can download and install the `Node` from this [location](https://nodejs.org/en/).

* To confirm if you have `NPM`, run this command in command prompt.

    ```
    npm -v
    ```

* Now, install the `CLDR-Data` package by using the following command (it installs the CLDR JSON data). To learn more about CLDR-Data, refer to [CLDR-Data](http://cldr.unicode.org/index/cldr-spec/cldr-json-bindings).

    ```
    npm install cldr-data --save
    ```

* After installing the package, you can find the culture-specific JSON data under the location `/node_modules/cldr-data`. Then, copy the `cldr-data` folder into your React application.

* Download the required locale packages to render the React Pivot Table component with specified locale. To download the locale definition of React components, use this [link](https://github.com/syncfusion/ej2-locale).

* After downloading the ej2-locale package, copy the ej2-locale folder with required locale definition file into your React application. By default, the ej2-locale package contains the localized text for static text present in components like grid, chart, Pivot Table, tools, and more.

The locale JSON file will look like:

![output](images/locale.png)

## Internationalization

Internationalization helps you display dates and numbers in the Pivot Table according to different cultural formats. This means users from various countries can view data in their familiar regional formats, making the component more user-friendly and accessible.

The internationalization library uses official [`Unicode CLDR`](http://cldr.unicode.org/) JSON data to format and parse numbers, dates, and times. It also provides the `loadCldr` method to load culture-specific CLDR JSON data for your application.

By default, all Syncfusion components use English culture ('en-US'). To use a different culture, set the culture by using the [`locale`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#locale) property as shown in the example below:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs110/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs110/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs110" %}

> * In the above sample, `Amount` field is formatted by [`NumberFormatOptions`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-numbers). For date formats, the value strings are formatted by [`DateFormatOptions`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-datetime).
> * By default, [`locale`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#locale) value is `en-US`. If you want to change the `en-US` culture to a different culture, you have to change  the [`locale`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#locale) accordingly.
> * Also, you will find more details about support format string for number formats and data formats [`here`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#supported-format-string).

### Decimal separators

The Pivot Table automatically adjusts decimal separators in numeric values to match your selected culture, making data easier to read for users from different regions. You can set the culture by calling the [`setCulture`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#changing-current-locale) method with the appropriate culture string as its parameter. Once applied, all numeric values in the Pivot Table will display using the decimal separator convention of that culture.

For example, while English cultures typically use a dot (.) as the decimal separator, German culture uses a comma (,) instead.

The following example shows how decimal separators appear when using the `Deutsch` culture.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/locale-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/locale-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/locale-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/locale-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/locale-cs1" %}

## Localization

The [`Localization`](https://ej2.syncfusion.com/react/documentation/common/globalization/localization) option allows you to translate the default text content of the Pivot Table into different languages. This makes the component more accessible to users from various regions by displaying text in their preferred language.

The Pivot Table contains static text elements such as drop area messages, field list titles, and other interface labels that can be translated to different cultures (Arabic, German, French, etc.). You can achieve this by setting the [`locale`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#locale) property and providing the appropriate translation object.

The following table shows the locale keywords and their corresponding default text values used in the Pivot Table:

Locale keywords |Text
-----|-----
grandTotal | Grand Total
total | Total
value | Value
noValue | No value
row | Row
column | Column
collapse | Collapse
expand | Expand
rowAxisPrompt | Drop row here
columnAxisPrompt | Drop column here
valueAxisPrompt | Drop value here
filterAxisPrompt | Drop filter here
filter | Filter
filtered | Filtered
sort | Sort
filters | Filters
rows | Rows
columns | Columns
values | Values
close | Close
cancel | Cancel
delete | Delete
CalculatedField | Calculated Field
createCalculatedField | Create Calculated Field
fieldName | Enter the field name
error | Error
invalidFormula | Invalid formula.
dropText | Example: ('Sum(Order_Count)' + 'Sum(In_Stock)') * 250
dropTextMobile | Add fields and edit formula here.
dropAction | Calculated field cannot be place in any other region except value axis.
alert | Alert
warning | Warning
ok | OK
search | Search
drag | Drag
remove | Remove
Sum | Sum
Avg | Avg
Count | Count
Min | Min
Max | Max
allFields | All Fields
formula | Formula
addToRow | Add to Row
addToColumn | Add to Column
addToValue | Add to Value
addToFilter | Add to Filter
emptyData | No records to display
fieldExist | A field already exists in this name. Please enter a different name.
confirmText | A calculation field already exists in this name. Do you want to replace it?
noMatches | No matches
format | Summaries values by
edit | Edit
clear | Clear
formulaField | Drag and drop fields to formula
dragField | Drag field to formula
clearFilter | Clear
by | by
all | All
multipleItems | Multiple items
member | Member
label | Label
date | Date
enterValue | Enter value
chooseDate | Enter date
Before | Before
BeforeOrEqualTo | Before Or Equal To
After | After
AfterOrEqualTo | After Or Equal To
labelTextContent | Show the items for which the label
dateTextContent | Show the items for which the date
valueTextContent | Show the items for which
Equals | Equals
DoesNotEquals | Does Not Equal
BeginWith | Begins With
DoesNotBeginWith | Does Not Begin With
EndsWith | Ends With
DoesNotEndsWith | Does Not End With
Contains | Contains
DoesNotContains | Does Not Contain
GreaterThan | Greater Than
GreaterThanOrEqualTo | Greater Than Or Equal To
LessThan | Less Than
LessThanOrEqualTo | Less Than Or Equal To
Between | Between
NotBetween | Not Between
And | and
DistinctCount | Distinct Count
Product | Product
SampleVar | Sample Var
PopulationVar | Population Var
RunningTotals | Running Totals
Index | Index
SampleStDev | Sample StDev
PopulationStDev | Population StDev
PercentageOfRowTotal | % of Row Total
PercentageOfParentTotal | % of Parent Total
PercentageOfParentColumnTotal | % of Parent Column Total
PercentageOfParentRowTotal | % of Parent Row Total
DifferenceFrom | Difference From
PercentageOfDifferenceFrom | % of Difference From
PercentageOfGrandTotal | % of Grand Total
PercentageOfColumnTotal | % of Column Total
NotEquals | Not Equals
AllValues | All Values
conditionalFormatting | Conditional Formatting
apply | APPLY
condition | Add Condition
formatLabel | Format
valueFieldSettings | Value field settings
baseField | Base field :
baseItem | Base item :
summarizeValuesBy | Summarize values by :
sourceName | Field name :
sourceCaption | Field caption :
example | e.g:
editorDataLimitMsg |  more items. Search to refine further.
details | Details
manageRecords | Manage Records
Years | Years
Quarters | Quarters
Months | Months
Days | Days
Hours | Hours
Minutes | Minutes
Seconds | Seconds
save | Save a report
new | Create a new report
load | Load
saveAs | Save as current report
rename | Rename a current report
deleteReport | Delete a current report
export | Export
subTotals | Sub totals
grandTotals | Grand totals
reportName | Report Name :
pdf | PDF
excel | Excel
csv | CSV
png | PNG
jpeg | JPEG
svg | SVG
mdxQuery | MDX Query
showSubTotals | Show subtotals
doNotShowSubTotals | Do not show subtotals
showSubTotalsRowsOnly | Show subtotals rows only
showSubTotalsColumnsOnly | Show subtotals columns only
showGrandTotals | Show grand totals
doNotShowGrandTotals | Do not show grand totals
showGrandTotalsRowsOnly | Show grand totals rows only
showGrandTotalsColumnsOnly | Show grand totals columns only
fieldList | Show fieldlist
grid | Show table
toolbarFormatting | Conditional formatting
chart | Chart
reportMsg | Please enter valid report name!!!
reportList | Report list
removeConfirm | Are you sure want to delete this report?
emptyReport | No reports found!!
bar | Bar
line | Line
area | Area
scatter | Scatter
polar | Polar
of | of
emptyFormat | No format found!!!
emptyInput | Enter a value
newReportConfirm | Want to save changes to report?
emptyReportName | Enter a report name
qtr | Qtr
null | null
undefined | undefined
groupOutOfRange | Out of Range
fieldDropErrorAction | The field you are moving cannot be placed in that area of the report
MoreOption | More...
aggregate | Aggregate
drillThrough | Drill Through
ascending | Ascending
descending | Descending
number | Number
currency | Currency
percentage | Percentage
formatType | Format Type
customText | Currency Symbol
symbolPosition | Symbol Position
left | Left
right | Right
grouping | Grouping
true | True
false | False
decimalPlaces | Decimal Places
numberFormat | Number Formatting
memberType | Field Type
formatString | Format String
expressionField | Expression
customFormat | Enter custom format string
selectedHierarchy | Parent Hierarchy
olapDropText | Example: [Measures].[Order Quantity] + ([Measures].[Order Quantity] * 0.10)
Percent | Percent
Custom | Custom
Measure | Measure
Dimension | Dimension
Standard | Standard
blank | (Blank)
fieldTooltip | Drag and drop fields to create an expression. And, if you want to edit the existing the calculated fields! Then you can achieve it by simply selecting the field under 'Calculated Members'.
QuarterYear | Quarter Year
fieldTitle | Field Name
drillError | Cannot show the raw items of calculated fields.
caption | Field Caption
copy | Copy
defaultReport | Default report
customFormatString | Custom Format
invalidFormat | Invalid Format.
group | Group
unGroup | Ungroup
invalidSelection | Cannot group that selection.
groupName | Enter the caption to display in header
captionName | Enter the caption for group field
selectedItems | Selected items
groupFieldCaption | Field caption
groupTitle | Group name
startAt | Starting at
endAt | Ending at
groupBy | Interval by
selectGroup | Select groups
numberFormatString | Example: C, P, 0000 %, ###0.##0#, etc.
stackingcolumn | Stacked Column
stackingbar | Stacked Bar
stackingarea | Stacked Area
stepline | Step Line
steparea | Step Area
splinearea | Spline Area
spline | Spline
stackingcolumn100 | 100% Stacked Column
stackingbar100 | 100% Stacked Bar
stackingarea100 | 100% Stacked Area
bubble | bubble
pareto | Pareto
radar | Radar
chartTypeSettings | Chart type settings
multipleAxes | Multiple Axes
sortAscending | Sort ascending order
sortDescending | Sort descending order
sortNone | Sort data order
clearCalculatedField | Clear edited field info
editCalculatedField | Edit calculated field
ChartType | Chart Type
yes | Yes
no | No
numberFormatMenu | Number Formatting...
conditionalFormattingMenu | Conditional Formatting...
removeCalculatedField | Are you sure you want to delete this calculated field?
replaceConfirmBefore | A report named 
replaceConfirmAfter |  already exists. Do you want to replace it?
pie | Pie
funnel | Funnel
doughnut | Doughnut
pyramid | Pyramid
showLegend | Show Legend
exit | Exit
invalidJSON | Invalid JSON data
invalidCSV | Invalid CSV data
stacked | Stacked
single | Single
multipleAxisMode | Multiple Axis Mode
grandTotalPosition | Grand totals position
top | Top
bottom | Bottom
None | None
stackingline | Stacked Line
stackingline100 | 100% Stacked Line
rowPage | Row pager
rowPerPage | Rows per page
columnPage | Column pager
columnPerPage | Columns per page
goToFirstPage | Go to first page
goToPreviousPage | Go to previous page
goToNextPage | Go to next page
goToLastPage | Go to last page
combined | Combined
subTotalPosition | Subtotals position
auto | Auto

The following list of properties and its values are used in the pivot field list.

Locale keywords |Text
-----|-----
staticFieldList | Pivot Field List
fieldList | Field List
dropFilterPrompt | Drop filter here
dropColPrompt | Drop column here
dropRowPrompt | Drop row here
dropValPrompt | Drop value here
addPrompt | Add field here
adaptiveFieldHeader | Choose field
centerHeader | Drag fields between axes below:
add | add
drag | Drag
filter | Filter
filtered | Filtered
sort | Sort
remove | Remove
filters | Filters
rows | Rows
columns | Columns
values | Values
CalculatedField | Calculated Field
createCalculatedField | Create Calculated Field
fieldName | Enter the field name
error | Error
invalidFormula | Invalid formula.
dropText | Example: ('Sum(Order_Count)' + 'Sum(In_Stock)') * 250
dropTextMobile | Add fields and edit formula here.
dropAction | Calculated field cannot be place in any other region except value axis.
search | Search
close | Close
cancel | Cancel
delete | Delete
alert | Alert
warning | Warning
ok | OK
Sum | Sum
Avg | Avg
Count | Count
Min | Min
Max | Max
allFields | All Fields
formula | Formula
fieldExist | A field already exists in this name. Please enter a different name.
confirmText | A calculation field already exists in this name. Do you want to replace it?
noMatches | No matches
format | Summaries values by
edit | Edit
clear | Clear
formulaField | Drag and drop fields to formula
dragField | Drag field to formula
clearFilter | Clear
by | by
enterValue | Enter value
chooseDate | Enter date
all | All
multipleItems | Multiple items
Equals | Equals
DoesNotEquals | Does Not Equal
BeginWith | Begins With
DoesNotBeginWith | Does Not Begin With
EndsWith | Ends With
DoesNotEndsWith | Does Not End With
Contains | Contains
DoesNotContains | Does Not Contain
GreaterThan | Greater Than
GreaterThanOrEqualTo | Greater Than Or Equal To
LessThan | Less Than
LessThanOrEqualTo | Less Than Or Equal To
Between | Between
NotBetween | Not Between
Before | Before
BeforeOrEqualTo | Before Or Equal To
After | After
AfterOrEqualTo | After Or Equal To
member | Member
label | Label
date | Date
value | Value
labelTextContent | Show the items for which the label
dateTextContent | Show the items for which the date
valueTextContent | Show the items for which
And | and
DistinctCount | Distinct Count
Product | Product
Index | Index
SampleStDev | Sample StDev
PopulationStDev | Population StDev
SampleVar | Sample Var
PopulationVar | Population Var
RunningTotals | Running Totals
DifferenceFrom | Difference From
PercentageOfDifferenceFrom | % of Difference From
PercentageOfGrandTotal | % of Grand Total
PercentageOfColumnTotal | % of Column Total
PercentageOfRowTotal | % of Row Total
PercentageOfParentTotal | % of Parent Total
PercentageOfParentColumnTotal | % of Parent Column Total
PercentageOfParentRowTotal | % of Parent Row Total
Years | Years
Quarters | Quarters
Months | Months
Days | Days
Hours | Hours
Minutes | Minutes
Seconds | Seconds
apply | APPLY
valueFieldSettings | Value field settings
sourceName | Field name :
sourceCaption | Field caption :
summarizeValuesBy | Summarize values by :
baseField | Base field :
baseItem | Base item :
example | e.g:
editorDataLimitMsg |  more items. Search to refine further.
deferLayoutUpdate | Defer Layout Update
null | null
undefined | undefined
groupOutOfRange | Out of Range
fieldDropErrorAction | The field you are moving cannot be placed in that area of the report
MoreOption | More...
memberType | Field Type
selectedHierarchy | Parent Hierarchy
formatString | Format String
expressionField | Expression
olapDropText | Example: [Measures].[Order Quantity] + ([Measures].[Order Quantity] * 0.10)
customFormat | Enter custom format string
Measure | Measure
Dimension | Dimension
Standard | Standard
Currency | Currency
Percent | Percent
Custom | Custom
blank | (Blank)
fieldTooltip | Drag and drop fields to create an expression. And, if you want to edit the existing the calculated fields! You can achieve it by simply selecting the field under 'Calculated Members'.
fieldTitle | Field Name
QuarterYear | Quarter Year
caption | Field Caption
copy | Copy
group | Group
numberFormatString | Example: C, P, 0000 %, ###0.##0#, etc.
sortAscending | Sort ascending order
sortDescending | Sort descending order
sortNone | Sort data order
clearCalculatedField | Clear edited field info
editCalculatedField | Edit calculated field
selectGroup | Select groups
of | of
removeCalculatedField | Are you sure you want to delete this calculated field?
yes | Yes
no | No
None | None

N> To access the most recent localization keywords for the Pivot Table and Pivot Field List components in different languages, visit the [GitHub repository](https://github.com/syncfusion/ej2-locale).

### Loading Translations

To load translation content in your application, use the [`load`](https://ej2.syncfusion.com/documentation/api/base/l10n/) method of the [`L10n`](https://ej2.syncfusion.com/documentation/api/base/l10n/) class. This method accepts translation objects that contain text content in different languages.

The following example demonstrates the Pivot Table in `Deutsch` culture.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs111/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs111/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs111" %}

## Right-to-left (RTL)

Right-to-left (RTL) support makes the Pivot Table more accessible and user-friendly for people who read and write in right-to-left languages such as Arabic, Farsi, and Urdu. This feature adjusts the text direction and layout of the entire Pivot Table from a left-to-right to a right-to-left orientation. To enable RTL in the Pivot Table, set the [`enableRtl`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#enablertl) property to **true**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs112/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs112/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs112/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs112/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs112" %}

## See Also

* [Internationalization](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization)
* [Localization](https://ej2.syncfusion.com/react/documentation/common/globalization/localization)