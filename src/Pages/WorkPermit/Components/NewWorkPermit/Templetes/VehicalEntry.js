export const VehicleEntry = `
<div>
<img src='../Assest/print.png' style="margin-left: 48.5%;
width: 35px;
padding-right: 2px;
cursor: pointer;
margin-bottom: -42px;
margin-top: 25px ;cursor:pointer"  id=printPageButton onclick=window.print() />
</div>
<div class="container mt-5 mb-5">
<div class="container-fluid">
<header>
<table style="border: 1px solid #000 !important;width: 98.11%;margin:0px 50px;margin-left: 10px;">
<tbody>
<tr>
        <td colspan="3">
          <h4 style="text-align: center;"><b>STATE OIL AND NATURAL GAS MINING COMPANY</b></h4>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="width: 25%;">
          <h5></h5>  
        </td>
        <td style="width: 50%;background: #fff;color: rgb(7, 7, 7);padding-top: 30px;">
          <h4 style="text-align: center;">
            <b>PT PERTAMINA (PERSERO)</br>
            <span style="text-decoration: underline;">VEHICLE ENTRY PERMIT</span></br>
            PROHIBITED AREA</b></br>
            <b>( Status: {{extraDetails.statusName}}) </b>
          </h4>
        </td>
        <td style="width: 25%;">
          <img src="../Assest/LOGOTEMP.jpg" class="logo" style="width: 100%;max-width: 100%;padding-top: 5px;margin-left: -5px!important;" />
        </td>
      </tr>
      </tbody>
      </table>
    </header>
    <main style="padding:0px 10px;">
  <table class="vehiclesection"  style="border: 1px solid #000;width: 100%;border-top:none;">
    <tbody>
      
      <tr style="background: #fff;border-bottom: 1px solid #000;">
        <td colspan="2" style="width: 25%;">
          <table class="w-100" style="border: none;">
            <tbody>
              <tr>
                <td style="width: 25%;">      
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.vehical_entry== "0"%} checked {% endif %}{% if JobApplication.vehical_entry == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="new" name="new" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">New</p></label>
                  </div>
                </td>
                <td style="width: 25%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.vehical_entry == "1"%} checked {% endif %} class="form-check-input" type="checkbox" id="extend" name="extend" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">EXTEND TO</p></label>
                  </div>
                </td>
                <td style="width: 25%;">
                <div style="display: flex;align-items: center; position: relative;">
                   <p disabled={true} style="font-size: 10px;font-weight: 500;margin: 0;">NUMBER: {{JobApplication.number}} </p>
               </div>
              </td>
                <td style="width: 25%;">&nbsp;</td>
              </tr>
            </tbody>
          </table> 
        </td>
        <td class="bor" style="padding: 0 0.5rem;width: 25%; background:#fff;border-left: 1px solid #000;">
        <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Main Permit No : {{JobApplication.mainPermitNo}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Registration Number : {{extraDetails.number}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Date: {{extraDetails.date}} </p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Work Order (As Applicable): {{extraDetails.workOrder}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Tag Number:{{JobApplication.mainTag}} </p>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="3" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b><u>THIS ENTRY PERMIT IS VALID FOR ONE VEHICLE ONLY.</u></b></p>
        </td>
      </tr>
      <tr style="background-color:#fff;">
        <td colspan="3"style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">Job Title : {{extraDetails.title}} </p>
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">Delivary Location : {{extraDetails.area}} </p>
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">Zone: {{extraDetails.zone}} </p>
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">System: {{extraDetails.system}} </p>
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">Discipline : {{extraDetails.discipline}} </p>
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">Job Safety Analysis: {{extraDetails.safejob}}</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">Validity Period of this Permit:</p>
        </td>
        <td>
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">From Date : {{extraDetails.validFrom.date}} </p>
        </td>
        <td>
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">Up to Date : {{extraDetails.validTo.date}} </p>
        </td>
      </tr>
      <tr>
        <td style="padding: 0 0.5rem;">
          &nbsp;
        </td>
        <td>
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">O'clock: {{extraDetails.validTo.time}} </p>
        </td>
        <td>
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">Upto Hours: {{extraDetails.validTo.time}} </p>
        </td>
      </tr>
      <tr style="background-color:#fff; border-bottom: 1px solid #000;">
        <td colspan="4"style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">Driver: {{Vehicle.tagNumber}} </p>
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">Section / Company  : {{Vehicle.workOrder}} </p>
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">Location: {{Vehicle.discipline}} </p>
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;">Requirements: {{Vehicle.mainTag}} </p>
        </td>
      </tr>  
    </tbody>
  </table>

  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr>
        <td style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0px;">Gas Check Required?</p>
        </td>
        <td>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if GasInspection.gasCheckRequired%} checked {% endif %}  class="form-check-input" type="checkbox" id="pertamina" name="pertamina" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Yes / No</p></label>
          </div>
        </td>
       
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;margin-bottom: 0;">Gas Test:{{GasInspection.gasTest}}</p>
         
        </td>
        <td>
          <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;margin: 0;">Name:{{GasInspection.name}}</p>
          
        </td>
        <td>  
        <p style="font-size: 10px;font-weight: 500;padding: 5px 0px;margin: 0;">O'clock:{{GasInspection.oClock}}</p>
      
        </td>
      </tr>
    </tbody>
  </table>

  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr>
        <td style="width: 50%;padding: 0 0.5rem;vertical-align: baseline;">
          <p style="font-size: 10px;font-weight: 500;">Licensing Officer (Authorized Operations Officer) </p>
          <p style="font-size: 10px;font-weight: 500;">Name</p>
          <input disabled={true} size="50" value={{AuthorizationAcceptance.name}}  />
        </td>
        <td style="width: 50%;padding: 0 0.5rem;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">Safety Advice:</p>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if Safety_Advice.complyWithWorkSafetyRules1 %} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Comply with Work Safety Rules</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if Safety_Advice.vehicleParkingInASafePlace %} checked {% endif %}class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Vehicle parking in a safe place</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if Safety_Advice.noSleepingInTheVehicle %} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">No sleeping in the vehicle</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true}  style="margin: 5px 10px !important;" {% if Safety_Advice.maxVehicleSpeed35KmHr %} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Max vehicle speed. 35 Km/Hr</p></label>
          </div>
        </td>
      </tr>
      <tr style="border-top: 1px solid #000;">
        <td style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;padding: 20px 0;text-align: center;">Permission Applicant </p>
          <p style="font-size: 10px;font-weight: 500;">Name</p>
          <input disabled={true} size="50" value={{AuthorizationAcceptance.select2}}  />
        </td>
        <td style="border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">Approval of permit closure</p>
          <p style="font-size: 10px;font-weight: 500;">Name</p>
          <input disabled={true} size="50" value={{AuthorizationAcceptance.select3}} />
        </td>
      </tr>
      <tr style="border-top: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;">Notes: </p>
          <p style="font-size: 10px;font-weight: 500;">- Keys must always be in place.</p>
          <p style="font-size: 10px;font-weight: 500;">- This Vehicle Entry Permit cannot be used for other vehicles.
          </p>
        </td>
      </tr>
      <tr style="border-top: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;">EMERGENCY INSTRUCTIONS:</p>
          <p style="font-size: 10px;font-weight: 500;">If ordered or hear the sound of a siren signaling an emergency, stop all work, turn off the machine or equipment and</p>
          <p style="font-size: 10px;font-weight: 500;">immediately go to the assembly point (assembly point) which is the nearest green flag (writing "A" or "M") for preparation</p>
          <p style="font-size: 10px;font-weight: 500;">evacuation.</p>
        </td>
      </tr>
    </tbody>
  </table>
  </main>
</div>

</div>`;
