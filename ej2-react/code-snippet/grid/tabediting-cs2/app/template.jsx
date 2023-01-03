import { TabComponent, TabItemsDirective, TabItemDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import { TabOneComponent } from './tabOne';
import { TabTwoComponent } from './tabTwo';
export class DialogFormTemplate extends React.Component {
    grid;
    tab;
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props[0]);
        this.grid = props[1];
    }
    tabOne() {
        let a = [this.state, this.tab];
        return (<TabOneComponent {...a}/>);
    }
    tabTwo() {
        let a = [this.state, this.grid];
        return (<TabTwoComponent {...a}/>);
    }
    next() {
        let valid = true;
        [].slice.call(document.getElementById('tab1').querySelectorAll('[name]')).forEach(element => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true') {
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
            if (e.isSwiped) {
                e.cancel = true;
            }
            if (e.selectingIndex === 1) {
                e.cancel = !this.next();
            }
        }
    }
    render() {
        return (<div>
             <TabComponent id='defaultTab' ref={tab => this.tab = tab} selecting={this.selecting.bind(this)}>
                <TabItemsDirective>
                    <TabItemDirective header={{ 'text': 'Details' }} content={this.tabOne.bind(this)}> </TabItemDirective>
                    <TabItemDirective header={{ 'text': 'Verify' }} content={this.tabTwo.bind(this)}> </TabItemDirective>
                </TabItemsDirective>
            </TabComponent>
        </div>);
    }
}
