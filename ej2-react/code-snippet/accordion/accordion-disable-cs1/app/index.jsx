{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
function ReactApp() {
    let success = "Your payment successfully processed";
    let email_alert = "Enter valid email address";
    let mobile_alert = "Mobile number length should be 10";
    let card_alert = "Card number length should be 16";
    let cvv_alert = "CVV number length should be 3";
    let dlgTarget = document.body;
    let accordion;
    let alertDlg;
    let cardNo;
    let mobile;
    let expiry;
    let cvv;
    const dlgButtons = [
        {
            buttonModel: { content: "Ok", isPrimary: true },
            click: () => {
                alertDlg.hide();
                if (accordion.expandedIndices[0] === 2 &&
                    alertDlg.content === success) {
                    accordion.enableItem(0, true);
                    accordion.enableItem(1, false);
                    accordion.enableItem(2, false);
                    accordion.expandItem(true, 0);
                }
            }
        }
    ];
    const dlgCreated = () => {
        alertDlg.hide();
    };
    const acrdnCreated = () => {
        if (accordion != undefined) {
            accordion.enableItem(1, false);
            accordion.enableItem(2, false);
        }
    };
    const btnClick = (e) => {
        switch (e.target.id) {
            case "Continue_Btn":
                let email = document.getElementById("email");
                let password = document.getElementById("password");
                if (email.value !== "" && password.value !== "") {
                    if (checkMail(email.value)) {
                        email.value = password.value = "";
                        accordion.enableItem(1, true);
                        accordion.enableItem(0, false);
                        accordion.expandItem(true, 1);
                    }
                    document.getElementById("err1").classList.remove("show");
                }
                else {
                    document.getElementById("err1").classList.add("show");
                }
                break;
            case "Continue_BtnAdr":
                let name = document.getElementById("name");
                let address = document.getElementById("address");
                if (name.value !== "" &&
                    address.value !== "" &&
                    mobile.value != null) {
                    if (checkMobile(mobile.value)) {
                        accordion.enableItem(2, true);
                        accordion.enableItem(1, false);
                        accordion.expandItem(true, 2);
                    }
                    document.getElementById("err2").classList.remove("show");
                }
                else {
                    document.getElementById("err2").classList.add("show");
                }
                break;
            case "Back_Btn":
                accordion.enableItem(1, true);
                accordion.enableItem(2, false);
                accordion.expandItem(true, 1);
                break;
            case "Save_Btn":
                let cardHolder = document.getElementById("cardHolder");
                if (cardNo.value != null &&
                    cardHolder.value !== "" &&
                    expiry.value != null &&
                    cvv.value != null) {
                    if (checkCardNo(cardNo.value)) {
                        if (checkCVV(cvv.value)) {
                            alertDlg.content = success;
                            alertDlg.show();
                        }
                    }
                    document.getElementById("err3").classList.remove("show");
                }
                else {
                    document.getElementById("err3").classList.add("show");
                }
                break;
        }
    };
    function checkMail(mail) {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
        }
        else {
            alertDlg.content = email_alert;
            alertDlg.show();
            return false;
        }
    }
    function checkMobile(mobile) {
        if (/^\d{10}$/.test(mobile.toString())) {
            return true;
        }
        else {
            alertDlg.content = mobile_alert;
            alertDlg.show();
            return false;
        }
    }
    function checkCardNo(cardNo) {
        if (/^\d{16}$/.test(cardNo.toString())) {
            return true;
        }
        else {
            alertDlg.content = card_alert;
            alertDlg.show();
            return false;
        }
    }
    function checkCVV(cvv) {
        if (/^\d{3}$/.test(cvv.toString())) {
            return true;
        }
        else {
            alertDlg.content = cvv_alert;
            alertDlg.show();
            return false;
        }
    }
    function content0() {
        return (<div id="Sign_In_Form">
        <form id="formId">
          <div className="form-group">
            <div className="e-float-input">
              <input type="text" id="email" name="Email" required/>
              <span className="e-float-line"/>
              <label className="e-float-text">Email</label>
            </div>
            <div className="e-float-input">
              <input id="password" type="password" name="Password" required/>
              <span className="e-float-line"/>
              <label className="e-float-text" htmlFor="password">
                Password
              </label>
            </div>
          </div>
        </form>
        <div style={{ textAlign: 'center' }}>
          <button className="e-btn" id="Continue_Btn" onClick={btnClick}>
            Continue
          </button>
          <div id="err1">* Please fill all fields</div>
        </div>
      </div>);
    }
    function content1() {
        return (<div id="Address_Fill">
        <form id="formId_Address">
          <div className="form-group">
            <div className="e-float-input">
              <input type="text" id="name" name="Name" required/>
              <span className="e-float-line"/>
              <label className="e-float-text" htmlFor="name">
                Name
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="e-float-input">
              <input type="text" id="address" name="Address" required/>
              <span className="e-float-line"/>
              <label className="e-float-text" htmlFor="address">
                Address
              </label>
            </div>
          </div>
          <div className="form-group">
            <NumericTextBoxComponent ref={numerictextbox => {
                mobile = numerictextbox;
            }} format="0" placeholder="Mobile" floatLabelType="Auto" showSpinButton={false}/>
          </div>
        </form>
        <div style={{ textAlign: 'center' }}>
          <button className="e-btn" id="Continue_BtnAdr" onClick={btnClick}>
            Continue
          </button>
          <div id="err2">* Please fill all fields</div>
        </div>
      </div>);
    }
    function content2() {
        return (<div id="Card_Fill">
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <div className="form-group">
            <NumericTextBoxComponent ref={numerictextbox => {
                cardNo = numerictextbox;
            }} format="0" placeholder="Card No" floatLabelType="Auto" showSpinButton={false}/>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <div className="form-group">
            <div className="e-float-input">
              <input type="text" id="cardHolder" name="cardHolder" required/>
              <span className="e-float-line"/>
              <label className="e-float-text" htmlFor="cardHolder">
                CardHolder Name
              </label>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <DatePickerComponent ref={calendar => (expiry = calendar)} width="100%" format="MM/yyyy" placeholder="Expiry Date" floatLabelType="Auto"/>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <div className="form-group">
            <NumericTextBoxComponent ref={numerictextbox => {
                cvv = numerictextbox;
            }} format="0" placeholder="CVV" floatLabelType="Auto" showSpinButton={false}/>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button className="e-btn" id="Back_Btn" onClick={btnClick}>
            Back
          </button>
          <button className="e-btn" id="Save_Btn" onClick={btnClick}>
            Save
          </button>
          <div id="err3">* Please fill all fields</div>
        </div>
      </div>);
    }
    return (<div>
      <div className="template_title"> Online Shopping Payment Module</div>
      <DialogComponent ref={dialog => (alertDlg = dialog)} header="Alert" width={200} isModal={true} content="" target={dlgTarget} buttons={dlgButtons} created={dlgCreated}/>
      <AccordionComponent ref={accordion => (accordion = accordion)} created={acrdnCreated}>
        <AccordionItemsDirective>
          <AccordionItemDirective expanded={true} header="Sign In" content={content0}/>
          <AccordionItemDirective header="Delivery Address" content={content1}/>
          <AccordionItemDirective header="Card Details" content={content2}/>
        </AccordionItemsDirective>
      </AccordionComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);
{% endraw %}