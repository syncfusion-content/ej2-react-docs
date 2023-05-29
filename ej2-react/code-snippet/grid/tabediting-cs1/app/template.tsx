import { TabComponent, TabItemsDirective, TabItemDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import { GridComponent } from '@syncfusion/ej2-grids';
import { TabOneComponent } from './tabOne';
import { TabTwoComponent } from './tabTwo';


export class DialogFormTemplate extends React.Component<{}, {}> {
    private grid: GridComponent;
    private tab: TabComponent;
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props[0]);
        this.grid = props[1];
    }

    tabOne() {
        let a = [this.state, this.tab];
        return (<TabOneComponent {...a} />);
    }

    tabTwo() {
        let a = [this.state, this.grid];
        return (<TabTwoComponent {...a} />);
    }

    next() {
        let valid: boolean = true;
        [].slice.call(document.getElementById('tab1').querySelectorAll('[name]')).forEach(element => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true'){
                valid = false;
            }
        });
        if (!valid) {
        return false;
        }
        return true;
    }

    selecting(e) {
        {
            if(e.isSwiped) {e.cancel = true;}
            if(e.selectingIndex === 1) {e.cancel = !this.next();}
        }
    }

    render(): any {
        return (<div>
             <TabComponent id='defaultTab' ref={tab => this.tab = tab} selecting={this.selecting.bind(this)}>
                <TabItemsDirective>
                    <TabItemDirective header= { { 'text': 'Details' } } content={this.tabOne.bind(this)} > </TabItemDirective>
                    <TabItemDirective header= { { 'text': 'Verify' } } content={this.tabTwo.bind(this)}> </TabItemDirective>
                </TabItemsDirective>
            </TabComponent>
        </div>);
    }
}

export interface IOrderModel {
    OrderID?: number;
    CustomerID?: string;
    Freight?: number;
    OrderDate?: Date;
    ShipCity?: string;
    ShipCountry?: string;
    ShipAddress?: string;
    isAdd?: boolean;
    currentTab?: number;
    Verified?: boolean;
}