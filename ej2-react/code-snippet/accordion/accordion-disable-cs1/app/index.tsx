import { useRef } from "react";
import * as ReactDOM from "react-dom";
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
const ReactApp = () => {
  let success: string = "Your payment successfully processed";
  let email_alert: string = "Enter valid email address";
  let mobile_alert: string = "Mobile number length should be 10";
  let card_alert: string = "Card number length should be 16";
  let cvv_alert: string = "CVV number length should be 3";
  let dlgTarget: HTMLElement = document.body;
  const accordion = useRef<AccordionComponent>(null);
  const alertDlg = useRef<DialogComponent>(null);
  const cardNo = useRef<NumericTextBoxComponent>(null);
  const mobile = useRef<NumericTextBoxComponent>(null);
  const expiry = useRef<DatePickerComponent>(null);
  const cvv = useRef<NumericTextBoxComponent>(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const address = useRef(null);
  const cardHolder = useRef(null);
  const err1 = useRef(null);
  const err2 = useRef(null);
  const err3 = useRef(null);
  const dlgButtons: Object[] = [
    {
      buttonModel: { content: "Ok", isPrimary: true },
      click: () => {
        alertDlg.current.hide();
        if (
          accordion.current.expandedIndices[0] === 2 &&
          alertDlg.current.content === success
        ) {
          accordion.current.enableItem(0, true);
          accordion.current.enableItem(1, false);
          accordion.current.enableItem(2, false);
          accordion.current.expandItem(true, 0);
        }
      }
    }
  ];
  const dlgCreated = (): void => {
    alertDlg.current.hide();
  }
  const acrdnCreated = (): void => {
    if (accordion !== undefined) {
      accordion.current.enableItem(1, false);
      accordion.current.enableItem(2, false);
    }
  }
  const btnClick = (e: any): void => {
    switch (e.target.id) {
      case "Continue_Btn":
        if (email.current.value !== "" && password.current.value !== "") {
          if (checkMail(email.current.value)) {
            email.current.value = password.current.value = "";
            accordion.current.enableItem(1, true);
            accordion.current.enableItem(0, false);
            accordion.current.expandItem(true, 1);
          }
          err1.current.classList.remove("show");
        } else {
          err1.current.classList.add("show");
        }
        break;
      case "Continue_BtnAdr":
        if (
          name.current.value !== "" &&
          address.current.value !== "" &&
          mobile.current.value != null
        ) {
          if (checkMobile(mobile.current.value)) {
            accordion.current.enableItem(2, true);
            accordion.current.enableItem(1, false);
            accordion.current.expandItem(true, 2);
          }
          err2.current.classList.remove("show");
        } else {
          err2.current.classList.add("show");
        }
        break;
      case "Back_Btn":
        accordion.current.enableItem(1, true);
        accordion.current.enableItem(2, false);
        accordion.current.expandItem(true, 1);
        break;
      case "Save_Btn":
        if (
          cardNo.current.value != null &&
          cardHolder.current.value !== "" &&
          expiry.current.value != null &&
          cvv.current.value != null
        ) {
          if (checkCardNo(cardNo.current.value)) {
            if (checkCVV(cvv.current.value)) {
              alertDlg.current.content = success;
              alertDlg.current.show();
            }
          }
          err3.current.classList.remove("show");
        } else {
          err3.current.classList.add("show");
        }
        break;
    }
  }
  const checkMail = (mail: string) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      alertDlg.current.content = email_alert;
      alertDlg.current.show();
      return false;
    }
  }
  const checkMobile = (mobile: number) => {
    if (/^\d{10}$/.test(mobile.toString())) {
      return true;
    } else {
      alertDlg.current.content = mobile_alert;
      alertDlg.current.show();
      return false;
    }
  }
  const checkCardNo = (cardNo: number) => {
    if (/^\d{16}$/.test(cardNo.toString())) {
      return true;
    } else {
      alertDlg.current.content = card_alert;
      alertDlg.current.show();
      return false;
    }
  }
  const checkCVV = (cvv: number) => {
    if (/^\d{3}$/.test(cvv.toString())) {
      return true;
    } else {
      alertDlg.current.content = cvv_alert;
      alertDlg.current.show();
      return false;
    }
  }
  const signForm = () => {
    return (
      <div id="Sign_In_Form">
        <form id="formId">
          <div className="form-group">
            <div className="e-float-input">
              <input type="text" ref={email} name="Email" required />
              <span className="e-float-line" />
              <label className="e-float-text">Email</label>
            </div>
            <div className="e-float-input">
              <input ref={password} type="password" name="Password" required />
              <span className="e-float-line" />
              <label className="e-float-text" htmlFor="password">
                Password
              </label>
            </div>
          </div>
        </form>
        <div style={{ textAlign: 'center' }}>
          <button
            className="e-btn"
            id="Continue_Btn"
            onClick={btnClick}
          >
            Continue
          </button>
          <div ref={err1}>* Please fill all fields</div>
        </div>
      </div>
    );
  }
  const addressFill = () => {
    return (
      <div id="Address_Fill">
        <form id="formId_Address">
          <div className="form-group">
            <div className="e-float-input">
              <input type="text" ref={name} name="Name" required />
              <span className="e-float-line" />
              <label className="e-float-text" htmlFor="name">
                Name
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="e-float-input">
              <input type="text" ref={address} name="Address" required />
              <span className="e-float-line" />
              <label className="e-float-text" htmlFor="address">
                Address
              </label>
            </div>
          </div>
          <div className="form-group">
            <NumericTextBoxComponent
              ref={mobile}
              format="0"
              placeholder="Mobile"
              floatLabelType="Auto"
              showSpinButton={false}
            />
          </div>
        </form>
        <div style={{ textAlign: 'center' }}>
          <button
            className="e-btn"
            id="Continue_BtnAdr"
            onClick={btnClick}
          >
            Continue
          </button>
          <div ref={err2}>* Please fill all fields</div>
        </div>
      </div>
    );
  }
  const cardFill = () => {
    return (
      <div id="Card_Fill">
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <div className="form-group">
            <NumericTextBoxComponent
              ref={cardNo}
              format="0"
              placeholder="Card No"
              floatLabelType="Auto"
              showSpinButton={false}
            />
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <div className="form-group">
            <div className="e-float-input">
              <input type="text" ref={cardHolder} name="cardHolder" required />
              <span className="e-float-line" />
              <label className="e-float-text" htmlFor="cardHolder">
                CardHolder Name
              </label>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <DatePickerComponent
            ref={expiry}
            width="100%"
            format="MM/yyyy"
            placeholder="Expiry Date"
            floatLabelType="Auto"
          />
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <div className="form-group">
            <NumericTextBoxComponent
              ref={cvv}
              format="0"
              placeholder="CVV"
              floatLabelType="Auto"
              showSpinButton={false}
            />
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            className="e-btn"
            id="Back_Btn"
            onClick={btnClick}
          >
            Back
          </button>
          <button
            className="e-btn"
            id="Save_Btn"
            onClick={btnClick}
          >
            Save
          </button>
          <div ref={err3}>* Please fill all fields</div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="template_title"> Online Shopping Payment Module</div>
      <DialogComponent
        ref={alertDlg}
        header="Alert"
        width={200}
        isModal={true}
        content=""
        target={dlgTarget}
        buttons={dlgButtons}
        created={dlgCreated}
      />
      <AccordionComponent
        ref={accordion}
        created={acrdnCreated}
      >
        <AccordionItemsDirective>
          <AccordionItemDirective
            expanded={true}
            header="Sign In"
            content={signForm}
          />
          <AccordionItemDirective
            header="Delivery Address"
            content={addressFill}
          />
          <AccordionItemDirective
            header="Card Details"
            content={cardFill}
          />
        </AccordionItemsDirective>
      </AccordionComponent>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);