{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
function App() {
    let alertDlg;
    let tab;
    let ticketDetailGrid;
    let pass_gender3;
    let pass_gender2;
    let pass_gender1;
    let pass_berth1;
    let pass_berth2;
    let pass_berth3;
    let pass_age1;
    let availTrainGrid;
    let ticketType;
    let journeyDate;
    let endPoint;
    let startPoint;
    let today = new Date();
    let selectedTrain;
    let dlgTarget = document.querySelector(".sb-content-tab.e-tab .e-content.sb-sample-content-area");
    let dateMin = new Date(today.getTime());
    let dateMax = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000);
    let fields = { id: "id", text: "text", value: "text" };
    let autoCompleteFields = { text: "name", value: "name" };
    const headerText = [
        { text: "New Booking" },
        { text: "Train List" },
        { text: "Add Passenger" },
        { text: "Make Payment" }
    ];
    const quotas = [
        { id: "1", text: "Business Class" },
        { id: "2", text: "Economy Class" },
        { id: "4", text: "Common Class" }
    ];
    const gender = [{ id: "1", text: "Male" }, { id: "2", text: "Female" }];
    const berths = [
        { id: "1", text: "Upper" },
        { id: "2", text: "Lower" },
        { id: "3", text: "Middle" },
        { id: "4", text: "Window" },
        { id: "5", text: "Aisle" }
    ];
    const cities = [
        { name: "Chicago", fare: 300 },
        { name: "San Francisco", fare: 125 },
        { name: "Los Angeles", fare: 175 },
        { name: "Seattle", fare: 250 },
        { name: "Florida", fare: 150 }
    ];
    const dlgButtons = [
        {
            buttonModel: { content: "OK", isPrimary: true },
            // tslint:disable-next-line: no-empty
            click: () => {
                alertDlg.hide();
                tab.enableTab(0, true);
                tab.enableTab(1, false);
                tab.enableTab(2, false);
                tab.enableTab(3, false);
                tab.select(0);
            }
        }
    ];
    const dlgCreated = () => {
        alertDlg.hide();
    };
    const focusIn = () => {
        let proxy;
        proxy.show();
    };
    function tabSelected(e) {
        if (e.isSwiped) {
            e.cancel = true;
        }
    }
    const trainSelected = (args) => {
        selectedTrain = args.data;
    };
    const btnClicked = (e) => {
        switch (e.target.id) {
            case "searchNext":
                /* Validate the Source, Destination, Date and Class chosen and proceed only if all the fields are selected */
                if (startPoint.value != null &&
                    endPoint.value != null &&
                    ticketType.value != null &&
                    journeyDate.value != null) {
                    if (startPoint.value &&
                        startPoint.value === endPoint.value) {
                        document.getElementById("err1").innerText =
                            "* Arrival point can't be same as Departure";
                    }
                    else {
                        tab.enableTab(0, false);
                        tab.enableTab(1, true);
                        filterTrains(e);
                        tab.select(1);
                        document.getElementById("err1").innerText = "";
                        if (document.getElementById("err2")) {
                            document.getElementById("err2").innerText = "";
                        }
                    }
                }
                else {
                    document.getElementById("err1").innerText =
                        "* Please fill all the details before proceeding";
                }
                break;
            case "bookTickets":
                /* Based on the selected station generate Grid content to display trains available */
                if (availTrainGrid.getSelectedRecords() === undefined ||
                    availTrainGrid.getSelectedRecords().length === 0) {
                    document.getElementById("err2").innerText =
                        "* Select your convenient train";
                }
                else {
                    tab.enableTab(2, true);
                    tab.select(2);
                    tab.enableTab(1, false);
                    document.getElementById("err2").innerText = "";
                }
                break;
            case "confirmTickets":
                /* Get the Passenger details and validate the fields must not be left empty */
                const name = document.getElementById("pass_name1");
                const age = pass_age1.value;
                const gender = pass_gender1.value;
                if (name.value === "" || age === "" || gender === "") {
                    document.getElementById("err3").innerText =
                        "* Please enter passenger details";
                }
                else {
                    tab.enableTab(3, true);
                    tab.select(3);
                    tab.enableTab(2, false);
                    document.getElementById("err3").innerText = "";
                    finalizeDetails(e);
                }
                break;
            case "makePayment":
                alertDlg.show();
                break;
            case "goToSearch":
                /* Go back to change class, date or boarding places */
                selectedTrain = [];
                tab.enableTab(0, true);
                tab.select(0);
                tab.enableTab(1, false);
                break;
            case "goBackToBook":
                /* Change the preferred train chosen already */
                tab.enableTab(1, true);
                tab.select(1);
                tab.enableTab(2, false);
                break;
            case "goBackDetails":
                /* Update passenger detail before confirming the payment */
                tab.enableTab(2, true);
                tab.select(2);
                tab.enableTab(3, false);
                break;
        }
    };
    const filterTrains = (args) => {
        /* Generating trains based on source and destination chosen */
        const result = [];
        const fromCity = startPoint.value;
        const toCity = endPoint.value;
        const count = Math.floor(Math.random() * 3 + 2);
        for (let i = 0; i < count; i++) {
            // tslint:disable-next-line: ban-types
            const details = {};
            details.TrainNo = Math.floor(Math.random() * 20 + 19000);
            details.Name = "Train " + i;
            details.Departure = fromCity;
            details.Arrival = toCity;
            details.Availability = Math.floor(Math.random() * 20 + 20);
            result.push(details);
        }
        setTimeout(() => {
            availTrainGrid.dataSource = result;
            availTrainGrid.dataBind();
        }, 100);
    };
    const finalizeDetails = (args) => {
        /* Get the passenger details and update table with name and other details for confirmation */
        const reserved = [];
        let passCount = 0;
        const name1 = document.getElementById("pass_name1");
        const name2 = document.getElementById("pass_name2");
        const name3 = document.getElementById("pass_name3");
        for (let i = 1; i <= 3; i++) {
            if (name1.value !== "") {
                // tslint:disable-next-line: ban-types
                const details = {};
                const gender = (i === 1
                    ? pass_gender1.value
                    : i === 2
                        ? pass_gender2.value
                        : pass_gender3.value);
                const berth = (i === 1
                    ? pass_berth1.value
                    : i === 2
                        ? pass_berth2.value
                        : pass_berth3.value);
                details.TrainNo = selectedTrain.TrainNo.toString();
                details.PassName =
                    i === 1 ? name1.value : i === 2 ? name2.value : name3.value;
                details.Gender = gender === "" ? "Male" : gender;
                details.Berth = berth === "" ? berth : "Any";
                if (details.PassName !== "") {
                    reserved.push(details);
                }
                passCount++;
            }
            let calcFare = 0;
            // tslint:disable-next-line: forin
            for (const j in cities) {
                if (startPoint.value === cities[j].name) {
                    calcFare = calcFare + cities[j].fare;
                }
                if (endPoint.value === cities[j].name) {
                    calcFare = calcFare + cities[j].fare;
                }
            }
            const displayAmt = document.getElementById("amount");
            if (ticketType.value === "Economy Class" && displayAmt) {
                displayAmt.innerText =
                    "Total payable amount: $" + passCount * (300 + calcFare);
            }
            else if (ticketType.value === "Business Class" && displayAmt) {
                displayAmt.innerText =
                    "Total payable amount: $" + passCount * (500 + calcFare);
            }
            else if (ticketType.value === "Common Class" && displayAmt) {
                displayAmt.innerText =
                    "Total payable amount: $" + passCount * (150 + calcFare);
            }
        }
        setTimeout(() => {
            (ticketDetailGrid || []).dataSource = reserved;
            ticketDetailGrid.dataBind();
        }, 100);
    };
    function content0() {
        return (<div id="booking">
        <div className="wizard-title">Plan your journey</div>
        <div className="responsive-align">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item">
              <DropDownListComponent ref={dropdownlist => {
                startPoint = dropdownlist;
            }} width="100%" dataSource={cities} fields={autoCompleteFields} placeholder="From" floatLabelType="Auto"/>
            </div>
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item">
              <DropDownListComponent ref={dropdownlist => {
                endPoint = dropdownlist;
            }} width="100%" dataSource={cities} fields={autoCompleteFields} placeholder="To" floatLabelType="Auto"/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item">
              <DatePickerComponent ref={calendar => (journeyDate = calendar)} width="100%" placeholder="Journey Date" floatLabelType="Auto" min={dateMin} max={dateMax} focus={focusIn}/>
            </div>
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item">
              <DropDownListComponent ref={dropdownlist => (ticketType = dropdownlist)} dataSource={quotas} placeholder="Ticket type" floatLabelType="Auto" fields={fields}/>
            </div>
          </div>
          <div className="btn-container">
            <button id="searchNext" className="e-btn" onClick={btnClicked}>
              Search Train
            </button>
          </div>
          <span id="err1"/>
        </div>
      </div>);
    }
    function content1() {
        return (<div id="selectTrain">
        <div className="wizard-title">Select the train from the list </div>
        <GridComponent ref={grid => (availTrainGrid = grid)} width="100%" rowSelected={trainSelected}>
          <ColumnsDirective>
            <ColumnDirective field="TrainNo" headerText="Train No" width={120} type="number"/>
            <ColumnDirective field="Name" headerText="Name" width={140}/>
            <ColumnDirective field="Departure" headerText="Departure" width={120}/>
            <ColumnDirective field="Arrival" headerText="Arrival" width={140}/>
            <ColumnDirective field="Availability" headerText="Availability" width={140} type="number"/>
          </ColumnsDirective>
        </GridComponent>
        <br />
        <div className="btn-container">
          <button id="goToSearch" className="e-btn" onClick={btnClicked}>
            Back
          </button>
          <button id="bookTickets" className="e-btn" onClick={btnClicked}>
            Continue
          </button>
        </div>
        <span id="err2"/>
      </div>);
    }
    function content2() {
        return (<div id="details">
        <div className="details-page wizard-title">
          Enter the passenger details
        </div>
        <div id="PassengersList">
          <table id="passenger-table">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th className="name-header">Name</th>
                <th className="age-header">Age</th>
                <th className="gender-header">Gender</th>
                <th className="type-header">Berth Preference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input className="e-input" id="pass_name1" type="text" placeholder="Passenger Name"/>
                </td>
                <td>
                  <NumericTextBoxComponent ref={numerictextbox => {
                pass_age1 = numerictextbox;
            }} showSpinButton={false} min={1} max={100} value={18} format="n0"/>
                </td>
                <td>
                  <DropDownListComponent ref={dropdownlist => {
                pass_gender1 = dropdownlist;
            }} dataSource={gender} text="Male" fields={fields}/>
                </td>
                <td>
                  <DropDownListComponent ref={dropdownlist => {
                pass_berth1 = dropdownlist;
            }} dataSource={berths} placeholder="Optional" fields={fields}/>
                </td>
              </tr>
              <tr>
                <td>
                  <input id="pass_name2" className="e-input" type="text" placeholder="Passenger Name"/>
                </td>
                <td>
                  <NumericTextBoxComponent showSpinButton={false} min={1} max={100} value={18} format="n0"/>
                </td>
                <td>
                  <DropDownListComponent ref={dropdownlist => {
                pass_gender2 = dropdownlist;
            }} dataSource={gender} text="Male" fields={fields}/>
                </td>
                <td>
                  <DropDownListComponent ref={dropdownlist => {
                pass_berth2 = dropdownlist;
            }} dataSource={berths} placeholder="Optional" fields={fields}/>
                </td>
              </tr>
              <tr>
                <td>
                  <input id="pass_name3" className="e-input" type="text" placeholder="Passenger Name"/>
                </td>
                <td>
                  <NumericTextBoxComponent showSpinButton={false} min={1} max={100} value={18} format="n0"/>
                </td>
                <td>
                  <DropDownListComponent ref={dropdownlist => {
                pass_gender3 = dropdownlist;
            }} dataSource={gender} text="Male" fields={fields}/>
                </td>
                <td>
                  <DropDownListComponent ref={dropdownlist => {
                pass_berth3 = dropdownlist;
            }} dataSource={berths} placeholder="Optional" fields={fields}/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="btn-container">
          <button id="goBackToBook" className="e-btn" onClick={btnClicked}>
            Back
          </button>
          <button id="confirmTickets" className="e-btn" onClick={btnClicked}>
            Continue
          </button>
        </div>
        <span id="err3"/>
      </div>);
    }
    function content3() {
        return (<div id="confirm">
        <div className="tab-title1 wizard-title">
          Confirm the details and proceed
        </div>
        <GridComponent ref={grid => (ticketDetailGrid = grid)} width="100%">
          <ColumnsDirective>
            <ColumnDirective field="TrainNo" headerText="Train No" width={120} type="number"/>
            <ColumnDirective field="PassName" headerText="Name" width={140}/>
            <ColumnDirective field="Gender" headerText="Gender" width={120}/>
            <ColumnDirective field="Berth" headerText="Berth" width={140}/>
          </ColumnsDirective>
        </GridComponent>
        <br />
        <div id="amount"/>
        <br />
        <div className="btn-container">
          <button id="goBackDetails" className="e-btn" onClick={btnClicked}>
            Back
          </button>
          <button id="makePayment" className="e-btn" onClick={btnClicked}>
            Pay
          </button>
        </div>
      </div>);
    }
    return (<div>
      <div className="col-lg-12 control-section e-tab-section">
        <div className="e-sample-resize-container">
          <TabComponent id="tab-wizard" ref={tab => (tab = tab)} heightAdjustMode="None" height={390} selecting={tabSelected}>
            <TabItemsDirective>
              <TabItemDirective header={headerText[0]} content={content0}/>
              <TabItemDirective header={headerText[1]} content={content1} disabled={true}/>
              <TabItemDirective header={headerText[2]} content={content2} disabled={true}/>
              <TabItemDirective header={headerText[3]} content={content3} disabled={true}/>
            </TabItemsDirective>
          </TabComponent>
          <DialogComponent ref={dialog => (alertDlg = dialog)} header="Success" width={250} isModal={true} visible={false} showCloseIcon={true} content="Your payment successfully processed" target={dlgTarget} buttons={dlgButtons} created={dlgCreated}/>
        </div>
      </div>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
{% endraw %}