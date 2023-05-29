import * as React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { getComponent, closest } from '@syncfusion/ej2-base';
import { CheckBoxComponent, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
export function HeaderTemplate(props) {
    let ds = [{ 'key': 'AND', 'value': 'and' }, { 'key': 'OR', 'value': 'or' }];
    let qryBldrObj;
    let fields = { text: 'key', value: 'value' };
    let ddbitems = [
        {
            text: 'AddGroup',
            iconCss: 'e-icons e-add-icon e-addgroup'
        },
        {
            text: 'AddCondition',
            iconCss: 'e-icons e-add-icon e-addrule'
        }
    ];
    let state = Object.assign({}, props);
    qryBldrObj = getComponent(document.getElementById('querybuilder'), 'query-builder');
    function onChange(args) {
        qryBldrObj.notifyChange(args.checked, args.event.target, 'not');
    }
    function conditionChange(args) {
        qryBldrObj.notifyChange(args.value, args.element, 'condition');
    }
    function onSelect(event) {
        let addbtn = closest(event.element, '.e-dropdown-popup');
        let ddbId = addbtn.id;
        let ddb = ddbId.split('_');
        if (event.item.text === 'AddGroup') {
            qryBldrObj.addGroups([{ condition: 'or', 'rules': [{}], not: false }], ddb[1]);
        }
        else if (event.item.text === 'AddCondition') {
            qryBldrObj.addRules([{}], ddb[1]);
        }
    }
    function onClick(args) {
        qryBldrObj.deleteGroup(closest(args.target.offsetParent, '.e-group-container'));
    }
    const args = state;
    return (<div className="e-groupheader">
        {(() => {
            if (args.notCondition !== undefined) {
                return (<button className="e-cb-wrapper">
                    <CheckBoxComponent id={args.ruleID + "_notOption"} label="not" checked={args.notCondition} change={onChange}/>
                </button>);
            }
        })()}
        <DropDownListComponent id={args.ruleID + "_cndtn"} cssClass='e-custom-group-btn' dataSource={ds} fields={fields} value={args.condition} change={conditionChange}/>
        <DropDownButtonComponent id={args.ruleID + "_addbtn"} items={ddbitems} cssClass="e-round e-small e-caret-hide e-addrulegroup e-add-btn" iconCss="e-icons e-add-icon" select={onSelect}></DropDownButtonComponent>
        {(() => {
            if (args.ruleID !== "querybuilder_group0") {
                return (<ButtonComponent id={args.ruleID + "_dltbtn"} cssClass='e-btn e-delete-btn e-lib e-small e-round e-icon-btn' iconCss="e-btn-icon e-icons e-delete-icon" onClick={onClick}></ButtonComponent>);
            }
        })()}
        </div>);
}
