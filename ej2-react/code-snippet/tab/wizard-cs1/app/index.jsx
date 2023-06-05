import * as React from "react";
import * as ReactDOM from 'react-dom';
import { useRef } from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';

const App = () => {
  const alertDlg = useRef(null);
  const tab = useRef(null);
  const ticketDetailGrid = useRef(null);
  const pass_gender3 = useRef(null);
  const pass_gender2 = useRef(null);
  const pass_gender1 = useRef(null);
  const pass_berth1 = useRef(null);
  const pass_berth2 = useRef(null);
  const pass_berth3 = useRef(null);
  const pass_age1 = useRef(null);
  const availTrainGrid = useRef(null);
  const ticketType = useRef(null);
  const journeyDate = useRef(null);
  const endPoint = useRef(null);
  const startPoint = useRef(null);
  const passNameFirst = useRef(null);
  const passNameSecond = useRef(null);
  const passNameThird = useRef(null);
  const err_1 = useRef(null);
  const err_2 = useRef(null);
  const err_3 = useRef(null);
  const amount = useRef(null);
  let today = new Date();
  let selectedTrain;
  let dlgTarget = document.querySelector(
    ".sb-content-tab.e-tab .e-content.sb-sample-content-area"
  );
  let dateMin = new Date(today.getTime());
  let dateMax = new Date(
    today.getTime() + 60 * 24 * 60 * 60 * 1000
  );
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

        alertDlg.current.hide();
        tab.current.enableTab(0, true);
        tab.current.enableTab(1, false);
        tab.current.enableTab(2, false);
        tab.current.enableTab(3, false);
        tab.current.select(0);
      }
    }
  ];

  const dlgCreated = () => {
    alertDlg.current.hide();
  }

  const focusIn = () => {
    journeyDate.current.show()
  }

  const tabSelected = (e) => {
    if (e.isSwiped) {
      e.cancel = true;
    }
  }

  const trainSelected = (args) => {
    selectedTrain = args.data;
  }

  const btnClicked = (e) => {
    switch (e.target.id) {
      case "searchNext":
        /* Validate the Source, Destination, Date and Class chosen and proceed only if all the fields are selected */
        if (
          startPoint.current.value != null &&
          endPoint.current.value != null &&
          ticketType.current.value != null &&
          journeyDate.current.value != null
        ) {
          if (
            startPoint.current.value &&
            startPoint.current.value === endPoint.current.value
          ) {
            err_1.current.innerText =
              "* Arrival point can't be same as Departure";
          } else {
            tab.current.enableTab(0, false);
            tab.current.enableTab(1, true);
            filterTrains(e);
            tab.current.select(1);
            err_1.current.innerText = "";
            if (err_2.current) {
              err_2.current.innerText = "";
            }
          }
        } else {
          err_1.current.innerText =
            "* Please fill all the details before proceeding";
        }
        break;
      case "bookTickets":
        /* Based on the selected station generate Grid content to display trains available */
        if (
          availTrainGrid.current.getSelectedRecords() === undefined ||
          availTrainGrid.current.getSelectedRecords().length === 0
        ) {
          err_2.current.innerText =
            "* Select your convenient train";
        } else {
          tab.current.enableTab(2, true);
          tab.current.select(2);
          tab.current.enableTab(1, false);
          err_2.current.innerText = "";
        }
        break;
      case "confirmTickets":
        /* Get the Passenger details and validate the fields must not be left empty */
        const name = passNameFirst.current;
        const age = pass_age1.current.value;
        const gender = pass_gender1.current.value;
        if (name.value === "" || age === "" || gender === "") {
          err_3.current.innerText =
            "* Please enter passenger details";
        } else {
          tab.current.enableTab(3, true);
          tab.current.select(3);
          tab.current.enableTab(2, false);
          err_3.current.innerText = "";
          finalizeDetails(e);
        }
        break;
      case "makePayment":
        alertDlg.current.show();
        break;
      case "goToSearch":
        /* Go back to change class, date or boarding places */
        selectedTrain = [];
        tab.current.enableTab(0, true);
        tab.current.select(0);
        tab.current.enableTab(1, false);
        break;
      case "goBackToBook":
        /* Change the preferred train chosen already */
        tab.current.enableTab(1, true);
        tab.current.select(1);
        tab.current.enableTab(2, false);
        break;
      case "goBackDetails":
        /* Update passenger detail before confirming the payment */
        tab.current.enableTab(2, true);
        tab.current.select(2);
        tab.current.enableTab(3, false);
        break;
    }
  }

  const filterTrains = (args)=> {
    /* Generating trains based on source and destination chosen */
    const result = [];
    const fromCity = startPoint.current.value;
    const toCity = endPoint.current.value;
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
      availTrainGrid.current.dataSource = result;
      availTrainGrid.current.dataBind();
    }, 100);
  }

  const finalizeDetails = (args) => {
    /* Get the passenger details and update table with name and other details for confirmation */
    const reserved = [];
    let passCount = 0;
    const name1 = passNameFirst.current.value;
    const name2 = passNameSecond.current.value;
    const name3 = passNameThird.current.value;

    for (let i = 1; i <= 3; i++) {
      if (name1.value !== "") {
        // tslint:disable-next-line: ban-types
        const details = {};
        const gender = i === 1
          ? pass_gender1.current.value
          : i === 2
            ? pass_gender2.current.value
            : pass_gender3.current.value;
        const bert = i === 1
          ? pass_berth1.current.value
          : i === 2
            ? pass_berth2.current.value
            : pass_berth3.current.value;
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
        if (startPoint.current.value === cities[j].name) {
          calcFare = calcFare + cities[j].fare;
        }
        if (endPoint.current.value === cities[j].name) {
          calcFare = calcFare + cities[j].fare;
        }
      }
      const displayAmt = amount.current;
      if (ticketType.current.value === "Economy Class" && displayAmt) {
        displayAmt.innerText =
          "Total payable amount: $" + passCount * (300 + calcFare);
      } else if (ticketType.current.value === "Business Class" && displayAmt) {
        displayAmt.innerText =
          "Total payable amount: $" + passCount * (500 + calcFare);
      } else if (ticketType.current.value === "Common Class" && displayAmt) {
        displayAmt.innerText =
          "Total payable amount: $" + passCount * (150 + calcFare);
      }
    }
    setTimeout(() => {
      (ticketDetailGrid || []).current.dataSource = reserved;
      ticketDetailGrid.current.dataBind();
    }, 100);
  }

  const content0 = () => {
    return (
      <div id="booking">
        <div className="wizard-title">Plan your journey</div>
        <div className="responsive-align">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item">
              <DropDownListComponent
                ref={
                  startPoint
                }
                width="100%"
                dataSource={cities}
                fields={autoCompleteFields}
                placeholder="From"
                floatLabelType="Auto"
              />
            </div>
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item">
              <DropDownListComponent
                ref={
                  endPoint
                }
                width="100%"
                dataSource={cities}
                fields={autoCompleteFields}
                placeholder="To"
                floatLabelType="Auto"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item">
              <DatePickerComponent
                ref={journeyDate}
                width="100%"
                placeholder="Journey Date"
                floatLabelType="Auto"
                min={dateMin}
                max={dateMax}
                focus={focusIn}
              />
            </div>
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item">
              <DropDownListComponent
                ref={ticketType}
                dataSource={quotas}
                placeholder="Ticket type"
                floatLabelType="Auto"
                fields={fields}
              />
            </div>
          </div>
          <div className="btn-container">
            <button
              id="searchNext"
              className="e-btn"
              onClick={btnClicked}
            >
              Search Train
            </button>
          </div>
          <span ref={err_1} />
        </div>
      </div>
    );
  }

  const content1 = () => {
    return (
      <div id="selectTrain">
        <div className="wizard-title">Select the train from the list </div>
        <GridComponent
          ref={availTrainGrid}
          width="100%"
          rowSelected={trainSelected}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="TrainNo"
              headerText="Train No"
              width={120}
              type="number"
            />
            <ColumnDirective field="Name" headerText="Name" width={140} />
            <ColumnDirective
              field="Departure"
              headerText="Departure"
              width={120}
            />
            <ColumnDirective field="Arrival" headerText="Arrival" width={140} />
            <ColumnDirective
              field="Availability"
              headerText="Availability"
              width={140}
              type="number"
            />
          </ColumnsDirective>
        </GridComponent>
        <br />
        <div className="btn-container">
          <button
            id="goToSearch"
            className="e-btn"
            onClick={btnClicked}
          >
            Back
          </button>
          <button
            id="bookTickets"
            className="e-btn"
            onClick={btnClicked}
          >
            Continue
          </button>
        </div>
        <span ref={err_2} />
      </div>
    );
  }

  const content2 = () => {
    return (
      <div id="details">
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
                  <input
                    className="e-input"
                    ref={passNameFirst}
                    type="text"
                    placeholder="Passenger Name"
                  />
                </td>
                <td>
                  <NumericTextBoxComponent
                    ref={
                      pass_age1
                    }
                    showSpinButton={false}
                    min={1}
                    max={100}
                    value={18}
                    format="n0"
                  />
                </td>
                <td>
                  <DropDownListComponent
                    ref={
                      pass_gender1
                    }
                    dataSource={gender}
                    text="Male"
                    fields={fields}
                  />
                </td>
                <td>
                  <DropDownListComponent
                    ref={
                      pass_berth1
                    }
                    dataSource={berths}
                    placeholder="Optional"
                    fields={fields}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    ref={passNameSecond}
                    className="e-input"
                    type="text"
                    placeholder="Passenger Name"
                  />
                </td>
                <td>
                  <NumericTextBoxComponent
                    showSpinButton={false}
                    min={1}
                    max={100}
                    value={18}
                    format="n0"
                  />
                </td>
                <td>
                  <DropDownListComponent
                    ref={
                      pass_gender2
                    }
                    dataSource={gender}
                    text="Male"
                    fields={fields}
                  />
                </td>
                <td>
                  <DropDownListComponent
                    ref={
                      pass_berth2
                    }
                    dataSource={berths}
                    placeholder="Optional"
                    fields={fields}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    ref={passNameThird}
                    className="e-input"
                    type="text"
                    placeholder="Passenger Name"
                  />
                </td>
                <td>
                  <NumericTextBoxComponent
                    showSpinButton={false}
                    min={1}
                    max={100}
                    value={18}
                    format="n0"
                  />
                </td>
                <td>
                  <DropDownListComponent
                    ref={
                      pass_gender3
                    }
                    dataSource={gender}
                    text="Male"
                    fields={fields}
                  />
                </td>
                <td>
                  <DropDownListComponent
                    ref={
                      pass_berth3
                    }
                    dataSource={berths}
                    placeholder="Optional"
                    fields={fields}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="btn-container">
          <button
            id="goBackToBook"
            className="e-btn"
            onClick={btnClicked}
          >
            Back
          </button>
          <button
            id="confirmTickets"
            className="e-btn"
            onClick={btnClicked}
          >
            Continue
          </button>
        </div>
        <span ref={err_3} />
      </div>
    );
  }

  const content3 = () => {
    return (
      <div id="confirm">
        <div className="tab-title1 wizard-title">
          Confirm the details and proceed
        </div>
        <GridComponent
          ref={ticketDetailGrid}
          width="100%"
        >
          <ColumnsDirective>
            <ColumnDirective
              field="TrainNo"
              headerText="Train No"
              width={120}
              type="number"
            />
            <ColumnDirective field="PassName" headerText="Name" width={140} />
            <ColumnDirective field="Gender" headerText="Gender" width={120} />
            <ColumnDirective field="Berth" headerText="Berth" width={140} />
          </ColumnsDirective>
        </GridComponent>
        <br />
        <div ref={amount} />
        <br />
        <div className="btn-container">
          <button
            id="goBackDetails"
            className="e-btn"
            onClick={btnClicked}
          >
            Back
          </button>
          <button
            id="makePayment"
            className="e-btn"
            onClick={btnClicked}
          >
            Pay
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="col-lg-12 control-section e-tab-section">
        <div className="e-sample-resize-container">
          <TabComponent
            id="tab-wizard"
            ref={tab}
            heightAdjustMode="None"
            height={390}
            selecting={tabSelected}
          >
            <TabItemsDirective>
              <TabItemDirective
                header={headerText[0]}
                content={content0}
              />
              <TabItemDirective
                header={headerText[1]}
                content={content1}
                disabled={true}
              />
              <TabItemDirective
                header={headerText[2]}
                content={content2}
                disabled={true}
              />
              <TabItemDirective
                header={headerText[3]}
                content={content3}
                disabled={true}
              />
            </TabItemsDirective>
          </TabComponent>
          <DialogComponent
            ref={alertDlg}
            header="Success"
            width={250}
            isModal={true}
            visible={false}
            showCloseIcon={true}
            content="Your payment successfully processed"
            target={dlgTarget}
            buttons={dlgButtons}
            created={dlgCreated}
          />
        </div>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);