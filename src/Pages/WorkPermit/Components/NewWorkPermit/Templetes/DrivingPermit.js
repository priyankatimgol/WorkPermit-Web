export const Underwater = `
<div>
<img src='../Assest/print.png' style="margin-left: 48.5%;
width: 35px;
padding-right: 2px;
cursor: pointer;
margin-bottom: -42px;
margin-top: 25px ;cursor:pointer"  id=printPageButton onclick=window.print() />
</div>
<div class="container mt-5 mb-5">
<div class="container-fluid pdfPrint">
<header>
<table style="border: 1px solid #000 !important;width: 98.11%;margin:0px 50px;margin-left: 10px;">
    <tbody>
      <tr>
        <td colspan="3">
          <h4 style="text-align: center;"><b>PT PERTAMINA ( PERSERO ) REFINERY UNIT</b></h4>
        </td>
      </tr>
      <tr>
        <td style="width: 25%;padding: 0 0.5rem;">
          <h5 style="padding-top: 50px;">&nbsp;</h5>  
        </td>
        <td style="width: 50%;padding: 30px 0;"><b>
          <h4 style="text-align: center;">
            <u>Diving & Underwater WORK LICENSE</u></br>
            (Diving & Underwater PERMIT)</b></br>
            <b> ( Status: {{extraDetails.statusName}})</b></h4>
        </td>
        <td style="width: 25%;padding: 0 0.5rem;">
          <img src="../Assest/LOGOTEMP.jpg" class="logo" style="width: 100%;max-width: 100%;padding-top: 5px;" />
        </td>
      </tr>
      </tbody>
      </table>
    </header>
    <main style="padding:0px 10px;">
  <table  class="divingheadersection"  style="border: 1px solid #000;border-bottom: none;width: 100%;">
    <tbody>
     
      <tr style="background: #fff;border: 1px solid #000;">
        <td colspan="3" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 12px;"><b>Section 1: Job Application</b></p>
        </td>
      </tr>
      <tr style="background: #ccffcc;vertical-align: baseline;">
        <td colspan="2" style="width: 25%;padding: 0 0.5rem;">
          <table class="w-100" style="border: none;">
            <tbody>
              <tr>
                <td style="width: 25%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.underwater == "0" %} checked {% endif %}  {% if JobApplication.underwater == undefined %} checked {% endif %}  class="form-check-input" type="checkbox" id="new" name="new" value={{hot_new}}  >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">New</p></label>
                  </div>
                </td>
                <td style="width: 25%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input  disabled={true} {% if JobApplication.underwater == "1" %} checked {% endif %} class="form-check-input" type="checkbox" id="extend" name="extend" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">EXTEND</p></label>
                  </div>
                </td>
                <td style="width: 25%;">
                <div style="display: flex;align-items: center; position: relative;">
            <p disabled={true} style="font-size: 10px;font-weight: 500;margin: 0;">NUMBER:&nbsp;{{JobApplication.number}}</p>
               </div>
              </td>
                <td style="width: 25%;">&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin: 0;">This permission is valid from: </p>
                </td>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">From Date:{{extraDetails.validFrom.date}} </p>
                  </div>
                </td>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">up to : {{extraDetails.validTo.date}}</p>
                  </div>
                </td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">O'clock : {{extraDetails.validTo.time}}</p>
                  </div>
                </td>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">up to : {{extraDetails.validFrom.time}}</p>
                  </div>
                </td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table> 
        </td>
        <td style="width: 25%;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Main Permit No : {{JobApplication.mainPermitNo1}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Register : {{extraDetails.date}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Date registered : {{extraDetails.date}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Work Order : {{extraDetails.workOrder}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Tag Number : {{JobApplication.mainTag1}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Job Title : {{extraDetails.title}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Zones : {{extraDetails.zone}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">System : {{extraDetails.system}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Discipline: {{extraDetails.discipline}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Nama Diving Supervisor: {{JobApplication.namaDivingSupervisor}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Diving Supervisor Certification : {{JobApplication.divingSupervoisorCertification}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Diver Condition (DCU Results) : {{JobApplication.diverConditionDcuResults}}</p>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="width: 100%;border-left: 1px solid #000;border-right: 1px solid #000;">
    <tbody>
      <tr style="background: #ccffcc;">
        <td style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Diver Method : </p>
        </td>
        <td>
          <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">1 SCUBA :</p></label>
        </td>
        <td>
          <input  disabled={true} style="margin: 0px 5px !important;" {% if JobApplication.Scuba %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" >
        </td>
        <td>
          <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">2 SSBAs : </p></label>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if JobApplication.Ssba %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" >
        </td>
        <td>
          <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">3 SSDEs : </p></label>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if JobApplication.Scuba %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" >
        </td>
        <td>
          <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">4 WET BELLS : </p></label>
        </td>
        <td>
          <input  disabled={true} style="margin: 0px 5px !important;" {% if JobApplication.WetBel %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" >
        </td>
        <td>
          <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">5 SATURATIONS : </p></label>
        </td>
        <td>
          <input disabled={true}  style="margin: 0px 5px !important;" {% if JobApplication.Saturation %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" >
        </td>
      </tr>
      <tr style="background: #ccffcc;">
        <td style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Respiratory Gas : </p>
        </td>
        <td>
          <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">1 AIR :</p></label>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if JobApplication.Air %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" >
        </td>
        <td>
          <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">2 Nitrox : </p></label>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if JobApplication.Nitrox %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" >
        </td>
        <td>
          <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">3 Heliox : </p></label>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if JobApplication.Heliox %} checked {% endif %}  class="form-check-input" type="checkbox" id="to" name="to" value="something" >
        </td>
        <td>
          <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">4 Trimix : </p></label>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if JobApplication.Trimix%} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" >
        </td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr style="background: #ccffcc;">
        <td colspan="11" style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Job description : {{extraDetails.description}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;">
        <td colspan="11" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Location/Work Area : {{JobApplication.namaDivingSupervisor}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;">
        <td style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Work Executor : {{JobApplication.namaDivingSupervisor}}</p>
        </td>
        <td colspan="2">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0px 5px !important;" {% if JobApplication.Scuba1 %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Pertamina</p></label>
          </div>
        </td>
        <td colspan="2">
          <div style="display: flex;align-items: center; position: relative;">
            <input  disabled={true} style="margin: 0px 5px !important;" {% if JobApplication.Ssba1 %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Third party </p></label>
          </div>
        </td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr style="background: #ccffcc;">
        <td colspan="11" style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">Contractor Name : {{JobApplication.contractorName}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="11" style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0;">The number of workers : {{JobApplication.diverConditionDcuResults1          }}</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="11" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;padding: 5px 0;">SECTION 2: SAFETY REQUIREMENTS </p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="11" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;padding: 5px 0;text-align: center;">MUST FOR JOB </p>
        </td>
      </tr>
    </tbody>
  </table>
 
  <table style="border: 1px solid #000;width: 100%;background: #ccffcc;">
    <tbody>
      <tr>
        <td colspan="11" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;">A. CHECKLIST OF TBA OFFICERS POTENTIAL</p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;padding-left: 5px;">
          <p style="font-size: 10px;margin: 0;">A. Equipment Cleaning</p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;">
          <p style="font-size: 10px;margin: 0;text-align: center;">YES/ NO</p>
        </td>
       
      </tr>
      <tr>
        <td colspan="11" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;">HAZARDS FROM THE ENVIRONMENT</p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">a) Emptyed</p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.checkbox2 %} checked {% endif %}  class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">a) Dive Time</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">: Afternoon</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.afternoon  %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Sore</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.sore %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Night</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.night  %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td style="background: #feff99;border-left: 1px solid #000;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">b) Released from pressure</p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.bReleasedFromPressure  %} checked {% endif %}   class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">b) Weather</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">:Sunny</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.sunny  %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Rain</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.rain  %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td style="background: #feff99;border-left: 1px solid #000;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">c) Cooled </p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.checkbox3 %} checked {% endif %}  class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">c) Wind</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">:Scala</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.scala %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td style="background: #feff99;border-left: 1px solid #000;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">d) Purging</p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.checkbox4 %} checked {% endif %}  class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">d) Waves</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Sea State</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.seaState %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td>&nbsp</td>
        <td style="background: #feff99;border-left: 1px solid #000;padding-left: 5px;">
          <p style="font-size: 10px;margin: 0;">B. Equipment Isolation</p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;text-align: center;">
          &nbsp;
        </td>
      
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">e) Current</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">: Knots</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.knot %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Install </p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.install %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Low tide</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.lowTide %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Wave</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.wave%} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">heavy</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.checkbox14 %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">a) Blank</p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;text-align: center;">
          <input style="margin: 0px 5px !important;" {% if SafetyRequirements.aBlank %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
      
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">f) Tides/tidal</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;"> Tide Hours</p>
        </td>
        <td>
        <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.tideHours %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
      </td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td style="background: #feff99;border-left: 1px solid #000;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">b) Labeled</p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.checkbox5 %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">g) Water Temperature</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Degrees Celsius</p>
        </td>
        <td>
        <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.degreesCelsius %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
      </td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td style="background: #feff99;border-left: 1px solid #000;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">c) Fuse removed/Breaker on Of</p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0px 5px !important;"  {% if SafetyRequirements.cFuseRemovedBreakerOnOff %} checked {% endif %}   class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">h) Visibility</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Meter</p>
        </td>
        <td>
        <input style="margin: 0px 5px !important;" {% if SafetyRequirements.meters %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
      </td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td style="background: #feff99;border-left: 1px solid #000;padding-left: 5px;">
          <p style="font-size: 10px;margin: 0;">C. Other safeguards</p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;text-align: center;">
         &nbsp;
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">i) Depth</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Meter</p>
        </td>
        <td>
        <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.meters1 %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
      </td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td style="background: #feff99;border-left: 1px solid #000;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">a) Area free from ship/barge operation</p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;text-align: center;">
          <input  disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.aAreaFreeFromShipBargeOperation %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">j) Bottom Time / dive</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Minute</p>
        </td>
        <td>
        <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.minute %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
      </td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td style="background: #feff99;border-left: 1px solid #000;border-bottom: 1px solid #000;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">b) Area free from pollution</p>
        </td>
        <td style="background: #feff99;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.checkbox6 %} checked {% endif %}  class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">k) Is the Water Contaminated with<br>
           Toxic Material</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">: Yes/ No</p>
        </td>
        <td>
          <input style="margin: 0px 5px !important;" {% if SafetyRequirements.checkbox61 %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">l) Is the Non Return Valve on the Helmet<br>
          Installed</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">: Yes/ No</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.checkbox64 %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">m) Check Area</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">: Safe</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.safe %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Not safe</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.notSafe %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">n) Area free from ship/barge operation</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Yes/ No</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.checkbox66 %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td colspan="14" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;">B. DIVER PERSONNEL</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">a) Diving Superintendent</p>
        </td>
        <td colspan="2">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Amount: {{SafetyRequirements.amount}}</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">People: {{SafetyRequirements.people}}</p>
        </td>
        <td colspan="10">&nbsp;</td>
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">b) Diving Supervisor</p>
        </td>
        <td colspan="2">
          <p style="font-size: 10px;margin: 0;font-weight: 500;"> Amount: {{SafetyRequirements.amount1}}</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">People : {{SafetyRequirements.people1}}</p>
        </td>
        <td colspan="10">&nbsp;</td>
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">c) Diver </p>
        </td>
        <td colspan="2">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Amount :{{SafetyRequirements.amount2}}</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">People :{{SafetyRequirements.people2}}</p>
        </td>
        <td colspan="10">&nbsp;</td>
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">d) Stand by Diver </p>
        </td>
        <td colspan="2">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Amount: {{SafetyRequirements.amount3}}</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">People: {{SafetyRequirements.people3}}</p>
        </td>
        <td colspan="10">&nbsp;</td>
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">e) Diver's Tender</p>
        </td>
        <td colspan="2">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Amount :{{SafetyRequirements.amount4}}</p>
        </td>
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">People :{{SafetyRequirements.people4}}</p>
        </td>
        <td colspan="10">&nbsp;</td>
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">f) Diver Medic :</p>
        </td>
        <td colspan="2">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Amount :{{SafetyRequirements.fDiverMedics}}</p>
        </td>
        <td colspan="10">&nbsp;</td>
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">g) Chamber Operator :</p>
        </td>
        <td colspan="2">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Amount :{{SafetyRequirements.gChamberOperator}}</p>
        </td>
        <td colspan="10">&nbsp;</td>
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">h) Technician : </p>
        </td>
        <td colspan="2">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">Amount :{{SafetyRequirements.bDivingSupervisor3}}</p>
        </td>
        <td colspan="10">&nbsp;</td>
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;margin: 0;font-weight: 500;">i) Communication - Logistics :</p>
        </td>
        
        <td>
          <p style="font-size: 10px;margin: 0;font-weight: 500;">People :{{SafetyRequirements.gChamberOperator3}}</p>
        </td>
        <td colspan="10">&nbsp;</td>
      </tr>
    </tbody>
  </table>

  <div class="page-break"></div>
  <table style="background: #ccffcc;border: 1px solid #000;width: 100%;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;width: 60%;">
          <p style="font-size: 12px;margin: 0;">C. INDIVIDUAL EQUIPMENT</p>
        </td> 
        <td colspan="2" style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 12px;margin: 0;padding-left: 5px;">Need SIKA / Attached Documents</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 12px;margin: 0;text-align: center;">SERIAL NO. </p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 12px;margin: 0;text-align: center;">YES/ NO</p>
        </td>
        
      </tr>
      <tr style="border-top:none;    ">
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">a) SCUBA :</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.aScuba %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">m) Diving suit</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.mDivingSuit %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;text-align: center;">1</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 5px;">Job Safety Analysis (JSA)</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
        <p style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text"  class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{SafetyRequirements.textField}}</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <input style="margin: 0px 16px !important;" {% if SafetyRequirements.JobSafetyAnalysisJsa %} checked {% endif %}  class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">b) SSBA:</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.bSsba %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">n)Hood</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.hood %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;text-align: center;">2</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 5px;">Work Procedure (SOP)</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text"  class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{SafetyRequirements.textField1}}</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <input disabled={true} style="margin: 0px 16px !important;" {% if SafetyRequirements.WorkProcedureSop %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">c) Regulator:</p>
        </td>
        <td>
          <input  disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.checkbox42 %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">o) Gloves</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.oGloves %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;text-align:center;">3</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 5px;">Equipment Inspection Proof</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text"  class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{SafetyRequirements.textField2}}</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <input disabled={true} style="margin: 0px 16px !important;" {% if SafetyRequirements.checkbox7 %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">d) Depth Gauge :</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.dDepthGauge %} checked {% endif %}  class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">p) Diving knife</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.fDivingHours %} checked {% endif %}  class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;text-align: center;">4</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 5px;">Safety Data Sheet (MSDS)</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text"  class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{SafetyRequirements.textField3}}</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <input disabled={true} style="margin: 0px 16px !important;" {% if SafetyRequirements.SafetyDataSheetMsds %} checked {% endif %}  class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">e) Manometer:</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.eManometer %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">q) Protective eyewear</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.qProtectiveGoggles%} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;text-align: center;">5</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 5px;">SIKA Hot</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text"  class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{SafetyRequirements.textField4}}</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <input disabled={true} style="margin: 0px 16px !important;" {% if SafetyRequirements.SikaHot %} checked {% endif %}   class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">f) Diving Hours :</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.fDivingHours %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">r) Life line (Line Signal)</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.rLifeLineLineSignal %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;text-align: center;">6</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 5px;">SIKA Radiation</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text"  class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{SafetyRequirements.textField5}}</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <input disabled={true} style="margin: 0px 16px !important;" {% if SafetyRequirements.SikaRadiation %} checked {% endif %}  class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">g) KMB Helmet :</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.gKmbHelmet %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">s) Under water hand signal</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.sUnderWaterHandSigna %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;text-align: center;">7</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 5px;">Sika Electrical / Instrument</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text"  class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{SafetyRequirements.textField6}}</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <input disabled={true} style="margin: 0px 16px !important;" {% if SafetyRequirements.SikaElectricalInstrument %} checked {% endif %}  class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">h) Mask:</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.hMask %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">t) Lighting</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.tLightingLights %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;text-align: center;">8</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 5px;">ERC</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text"  class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{SafetyRequirements.textField7}}</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <input disabled={true} style="margin: 0px 16px !important;" {% if SafetyRequirements.Erc %} checked {% endif %}  class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">i) Bouyancy Compensator :</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.jWeightBelt1 %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">u) Ear protection</p>
        </td>
        <td>
          <input style="margin: 0px 5px !important;" {% if SafetyRequirements.uEarProtection %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;text-align: center;">9</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 5px;">LOTTO</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text"  class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{SafetyRequirements.textField8}}</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <input disabled={true} style="margin: 0px 16px !important;" {% if SafetyRequirements.Lotto %} checked {% endif %}   class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">j) Weight Belt :</p>
        </td>
        <td>
          <input  disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.jWeightBelt %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">v) Under water digital camera</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.checkbox41 %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;text-align: center;">10</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 5px;">Risk Assessment</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text"  class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{SafetyRequirements.textField9}}</p>
        </td>
        <td style="border-left: 1px solid #000;background: #feff99;">
          <input disabled={true} style="margin: 0px 16px !important;" {% if SafetyRequirements.RiskAssessment %} checked {% endif %}   class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
       
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">k) Diving Shoes :</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.kDivingShoes %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="padding: 0 1rem;">&nbsp;</td>
        <td>&nbsp;</td>
        <td style="border-left: 1px solid #000;border-bottom: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;text-align: center;">11</p>
        </td>
        <td style="border-left: 1px solid #000;border-bottom: 1px solid #000;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 5px;">Isolation</p>
        </td>
        <td style="border-left: 1px solid #000;border-bottom: 1px solid #000;background: #feff99;">
        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text"  class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{SafetyRequirements.textField10}}</p>
        </td>
        <td style="border-left: 1px solid #000;border-bottom: 1px solid #000;background: #feff99;">
          <input disabled={true} style="margin: 0px 16px !important;" {% if SafetyRequirements.Isolation %} checked {% endif %}  class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        
      </tr>
      <tr>
        <td style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">l) Fins:</p>
        </td>
        <td>
          <input disabled={true} style="margin: 0px 5px !important;" {% if SafetyRequirements.checkbox63 %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" > 
        </td>
        <td style="padding: 0 1rem;">&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td colspan="9" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;">D. SUPPORTING MEANS</p>
        </td>
      </tr>
      <tr>
        <td colspan="3" style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">a) HP Compressor : {{SafetyRequirements.aHpCompressor1}}</p>
        </td>
        <td colspan="6">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">k) Alat Communism : {{SafetyRequirements.kCommunicationEquipment}}</p>
        </td>
      </tr>
      <tr>
        <td colspan="3" style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">b) LP Compressor : {{SafetyRequirements.bLpCompressor1}}</p>
        </td>
        <td colspan="6">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">l) Decompression Table : {{SafetyRequirements.lDecompressionTable}}</p>
        </td>
      </tr>
      <tr>
        <td colspan="3" style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">c) High Pressure Air Tank : {{SafetyRequirements.cHighPressureAirTank1}}</p>
        </td>
        <td colspan="6">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">m) US Navy Diving Manual : {{SafetyRequirements.mUsNavyDivingManual}}</p>
        </td>
      </tr>
      <tr>
        <td colspan="3" style="padding: 0 1rem;">
          <div style="display: flex;align-items: center; position: relative;">
            <p style="font-size: 10px;font-weight: 500;margin: 0;">d) O2, N2 and Helium Gas Tank :</p>
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 10px;">Diving</p></label>
            <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.diving3  %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 10px;">NO</p></label>
            <input disabled={true}  style="margin: 0 5px !important;" {% if SafetyRequirements.no3  %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" >
            <p style="font-size: 10px;font-weight: 500;margin: 0;">Information : {{SafetyRequirements.lDecompressionTable1}}</p>
          </div>
        </td>
        <td colspan="6">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">n) RUBT : {{SafetyRequirements.nRubt}}</p>
        </td>
      </tr>
      <tr>
        <td colspan="3" style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">e) Mixing Gas Equipment: : {{SafetyRequirements.eMixingGasEquipment1}}</p>
        </td>
        <td colspan="6">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">o) Kotak P3K :  {{SafetyRequirements.oFirstAidBox}}</p>
        </td>
      </tr>
      <tr>
        <td colspan="3" style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">f) Control Panel : {{SafetyRequirements.fControlPanel1}}</p>
        </td>
        <td colspan="6">
          <p style="font-size: 10px;font-weight: 500;margin: 0;"> p) Bottle O2 + Regulator: {{SafetyRequirements.pO2BottleRegulator}}</p>
        </td>
      </tr>
      <tr>
        <td colspan="3" style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">g) CCTV : {{SafetyRequirements.gCctv}}</p>
        </td>
        <td colspan="6">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">q) Tandu Neil Robetson Set: {{SafetyRequirements.qNeilRobetsonStretcherSet1 }}</p>
        </td>
      </tr>
      <tr>
        <td colspan="3" style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">h) CRANE : {{SafetyRequirements.bDivingSupervisor3}}</p>
        </td>
        <td colspan="6">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">r) Jaring Flag : 
          {{SafetyRequirements.qNeilRobetsonStretcherSet2}}</p>
        </td>
      </tr>
      <tr>
        <td colspan="3" style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">i) Diving Belt : {{SafetyRequirements.iDivingBelt}}</p>
        </td>
        <td colspan="6">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">s) Diver Flag : {{SafetyRequirements.iDivingBelt1 }}</p>
        </td>
      </tr>
      <tr>
        <td colspan="3" style="padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">j) Under water digital camera : {{SafetyRequirements.jUnderWaterDigitalCamera}}</p>
        </td>
        <td colspan="6">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">t) Diving Support Vessel : {{SafetyRequirements.jUnderWaterDigitalCamera1}}</p>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr style="background: #feff99;border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;padding: 10px 0px;">SPECIAL INSTRUCTIONS:</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;">WARNING !! PROCEDURE IN AN EMERGENCY OR FIRE ALARM SOUNDS</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">1. Stop all work, withdraw all Workers who work in confined spaces or heights</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">2. Turn off all driving machinery, electrical equipment and cover the Acetylene / Propane gas cylinder.</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">3. Stop using extinguishing water and make sure the workplace is safe to leave.</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">4. Immediately go to the assembly point for evacuation (Assembly Point).</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">5. The nearest Assembly Point is at</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">6. Return this Hot SIKA to the Authorized Operations Officer (GSI).</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">7. In case of an emergency, call tel.</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-bottom: 30px;">8. If you need to consult on safety aspects, please contact the Safety inspector area HT ID</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;">SECTION 3: ISSUE OF WORK LETTER BY AUTHORIZED UNDERWATER & GIS OFFICE</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <p style="font-size: 10px;margin: 0;">I myself have checked the tools, locations and work to be carried out and they are safe and allowed to start work</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td style="padding: 0 0.5rem;width: 50%;height: 70px;">
          <p style="font-size: 12px;margin: 0;text-align: center;">Technician (Underwater)
          </p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 20px;">Name : {{AuthorizationAcceptance.name5}}</p>
        </td>
        <td style="background: #feff99;padding: 0 0.5rem;width: 50%;border-left: 1px solid #000;">
          <p style="font-size: 12px;margin: 0;text-align: center;">GSI Authorized</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 20px;">Name : {{AuthorizationAcceptance.name6}}</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;">SECTION 4: SIKA ACCEPTANCE</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <p style="font-size: 10px;margin: 0;">I have understood and complied with all safety requirements, special notes if any, including maintaining good housekeeping before and during work carried out. I will contact the
          authorized operations officer when work is about to begin.</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;height: 70px;">
          <p style="font-size: 12px;margin: 0;text-align: center;">Technician</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 20px;">Name : {{AuthorizationAcceptance.name7}}</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;">SECTION 5: SUBMISSION OF SIKA</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <p style="font-size: 10px;margin: 0;">The work has been completed, all materials and equipment are ready to operate in a safe condition and the work area has been cleaned
          GSI Authorized Not yet completed and the conditions are as follows:</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;height: 70px;">
          <p style="font-size: 12px;margin: 0;text-align: center;">Authorized Technician</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 20px;">Name : {{AuthorizationAcceptance.name8}}</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;">SECTION 6: CLOSING SIKA</p>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="background: #feff99;padding: 0 0.5rem;height: 70px;">
          <p style="font-size: 10px;margin: 0;">I have checked the equipment, materials and workplace and agree to the conditions</p>
          <p style="font-size: 12px;margin: 0;text-align: center;">GSI office</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 20px;">Name : {{AuthorizationAcceptance.name9}}</p>
        </td>
      </tr>
    </tbody>
  </table>
</main>
</div>

</div>`;
