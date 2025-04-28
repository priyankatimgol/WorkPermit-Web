export const HeavyEquipmentPermit = `
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
<table class="" style="border: 1px solid #000 !important;width: 98.11%;margin:0px 50px;margin-left: 10px;">
<tbody>
  <tr style="border-bottom: 1px solid #000;">
    <td style="width: 25%;">
    </td>
    <td style="width: 50%;background: #fff;color: black;padding: 30px 0;">
      <h4 style="text-align: center;"><b>
      PT PERTAMINA (PERSERO) REFINERY UNIT</h4>
      <h6 style="text-align: center;"><span style="text-decoration: underline;">WORK LETTER FOR USE & Lifting Operation</span></br>
          (USING OR Lifting Operation)</br>
          ( Status: {{extraDetails.statusName}})
        
        </b>
      </h6>
    </td>
    <td style="width: 25%;">
      <img src="../Assest/LOGOTEMP.jpg" class="logo" style="width: 100%;max-width: 100%;padding-top: 5px;margin-left: -5px!important;" />
    </td>
  </tr>
  </tbody>
  </table>
</header>
<main style="padding:0px 10px;">
  <table style="border: 1px solid #000;width: 100%;" class="heavysection1">
    <tbody>
      
      <tr style="background: #fff;border-bottom: 1px solid #000;">
        <td colspan="3" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 12px;"><b>Section 1: Job Application</b></p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="2" style="width: 25%;padding: 0.5rem;padding-right:0px;">
          <table class="w-100" style="border: none;">
            <tbody>
              <tr>
                <td style="width: 25%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.heavy_equipment == "0" %} checked {% endif %}  {% if JobApplication.heavy_equipment == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="new" name="new" value="something">
                    <label class="form-check-label">
                      <p style="font-size: 10px;font-weight: 500;margin: 0;">New</p>
                    </label>
                  </div>
                </td>
                <td style="width: 25%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.heavy_equipment == "1"%} checked {% endif %} class="form-check-input" type="checkbox" id="extend" name="extend" value="something">
                    <label class="form-check-label">
                      <p style="font-size: 10px;font-weight: 500;margin: 0;">EXTEND TO
                      </p>
                    </label>
                  </div>
                </td>
                <td style="width: 25%;">
                <div style="display: flex;align-items: center; position: relative;">
                   <p disabled={true} style="font-size: 10px;font-weight: 500;margin: 0;">NUMBER: {{JobApplication.number}} </p>
               </div>
              </td>
                <td style="width: 25%;">&nbsp;</td>
              </tr>
              <tr>
                <td colspan="4">
                  <p style="font-size: 10px;font-weight: 400;margin: 0;">The validity period of this permit (Note: If the activity takes place outside of working hours, an overtime permit must be completed)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">From Date :{{extraDetails.validFrom.date}} </p>
                  </div>
                </td>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">until Date: {{extraDetails.validTo.date}} &nbsp;&nbsp;&nbsp;&nbsp; (Maximum 1 week)
                    </p>
                  </div>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">From Time:{{extraDetails.validFrom.time}} </p>
                  </div>
                </td>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">Until what time:{{extraDetails.validTo.time}} </p>
                  </div>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </td>
        <td class="bor" style="width: 25%; background: #fff;padding: 0.5rem;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Main Permit No: {{JobApplication.mainPermitNo}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">No. Register: {{extraDetails.number}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Date: {{extraDetails.date}} </p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Work Order (As Applicable): {{extraDetails.workOrder}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Tag Number: {{JobApplication.tagNumber}}</p>
        </td>
      </tr>
     
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Job Title : {{extraDetails.title}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Zone: {{extraDetails.zone}} </p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">System: {{extraDetails.system}} </p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Discipline : {{extraDetails.discipline}} </p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Location of Use: : {{extraDetails.area}} </p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Machine movement route : {{JobApplication.machineMovementRout}} </p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Job Description : {{extraDetails.description}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Work Executor : {{JobApplication.workExcutor}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Type of Equipment Used : {{JobApplication.jobTitle9}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">No. Equipment Series : {{JobApplication.textField}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Equipment Capacity ( SWL ) : {{JobApplication.jobTitle7}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Operator Name : {{JobApplication.operatorName}}</p>
        </td>
      </tr>

      
    </tbody>
  </table>

  <table style="border: 1px solid #000;border-top: none;width: 100%:">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="3" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 12px;"><b>Section 2: Safety Requirements</b></p>
        </td>
      </tr>
      <tr style="vertical-align: top;">
        <td style="width: 48%;border: 1px solid #000;">
          <table style="width: 100%;background: #feff99;">
            <tbody>
              <tr style="border-bottom: 1px solid #000;">
                <td style="width: 90%;text-align: center;">
                  <p style="font-size: 10px;font-weight: 600;">Safety Requirements</p>
                  <p style="font-size: 10px;font-weight: 600;">(Put if needed)</p>
                </td>
                <td style="width: 10%;border-left: 1px solid #000;text-align: center;">
                  <p style="font-size: 10px;font-weight: 600;">Yes / No</p>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;background: #ccffcc;">
                <td>
                  <p style="font-size: 10px;"><b>(Completed by Technician)
                  </b></p>
                </td>
                <td>
                  <p style="margin: 0;">&nbsp;</p>
                </td>
                <td>
                  <p style="margin: 0;">&nbsp;</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;background: #ccffcc;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">1. Personal competence : - </p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.PersonalCompetence %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA1No" name="safetyRequirementA1No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;background: #ccffcc;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">SIO Operator - </p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.sioOperator %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA2No" name="safetyRequirementA2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;background: #ccffcc;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">Rigger Certificate </p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.riggerCertificate %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA3No" name="safetyRequirementA3No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;background: #ccffcc;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">2. Equipment Requirements -</p>
                </td>
             
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.EquipmentRequirements %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA4No" name="safetyRequirementA4No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;background: #ccffcc;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">SKPP Migas - </p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.skppMigas %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA5No" name="safetyRequirementA5No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;background: #ccffcc;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">SILO Equipment -</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.siloEquipment %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA7No" name="safetyRequirementA7No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;background: #ccffcc;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">Equipment has been inspected by PIT (Technical Inspection Company)</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.equipmentHasBeenInspectedByPitTechnicalInspectionCompany %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA8No" name="safetyRequirementA8No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;background: #ccffcc;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">3. Pertamina Internal Equipment Inspection</p>
                </td>
              
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.PertaminaInternalEquipmentInspection %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA9No" name="safetyRequirementA9No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;background: #ccffcc;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">4. Load chart and radius are available in the operator's cabin</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input style="margin: 0 !important;" {% if SafetyRequirements.LoadChartAndRadiusAreAvailableInTheOperatorsCabin %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA9No" name="safetyRequirementA9No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;background: #ccffcc;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">5. When using personal basketball, it is in accordance with the ASME B.30 standard, Permanaker No. 5 of 1985</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.FYouUseAPersonalBasketballItIsInAccordanceWithTheAsmeB30StandardPermanakerNo5Of1985ToBeFilledInByGsiChecker %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA9No" name="safetyRequirementA9No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;"><b>(To be filled in by GSI checker)</b></p>
                </td>
                <td style="margin: 0;">&nbsp;</td>
                <td style="margin: 0;">&nbsp;</td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">1. The outrigger is on a stable base </p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.TheOutriggerIsOnAStableBase  %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB1No" name="safetyRequirementB1No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">2. Is the runway position stable</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.IsTheRunwayPositionStable %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2No" name="safetyRequirementB2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">3. Strengthening the path traversed</p>
                </td>
              
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.StrengtheningThePathTraversed %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2No" name="safetyRequirementB2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">4. For lifting use under the cable line, the safe distance is 6 meters from the voltage source</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.ForLiftingUseUnderTheCableLineTheSafeDistanceIs6MetersFromTheVoltageSource %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2No" name="safetyRequirementB2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">5. Belt installation on track rollers (*Special for crawler cranes)</p>
                </td>
              
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.BeltInstallationOnTrackRollersSpecialForCrawlerCranes %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2No" name="safetyRequirementB2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">6. Operated in good weather conditions</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true}  style="margin: 0 !important;" {% if SafetyRequirements.OperatedInGoodWeatherConditions %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2No" name="safetyRequirementB2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">7. Measurement with gas detector</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.MeasurementWithGasDetector %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2No" name="safetyRequirementB2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">8. Enough lighting at night</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.EnoughLightingAtNight %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2No" name="safetyRequirementB2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">9. Roads need to be closed</p>
                </td>
              
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.RoadsNeedToBeClosed %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2No" name="safetyRequirementB2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">10. Entry permission is required</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.EntryPermissionIsRequired %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2No" name="safetyRequirementB2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">11. Installation of signs / signs / barricade area</p>
                </td>
              
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.InstallationOfSignsSignsBarricadeArea %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2No" name="safetyRequirementB2No" value="something" >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td class="nobor" style="width: 2%;">
          <p>&nbsp;</p>
        </td>
        <td style="width: 48%;border: 1px solid #000;">
          <table style="width: 100%;background: #feff99;">
            <tbody>
              <tr style="border-bottom: 1px solid #000;">
                <td colspan="2" style="text-align: center;">
                  <p style="font-size: 10px;font-weight: 600;">Required SIKA/Attached Documents</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="width: 70%;text-align: center;">
                  <p style="font-size: 10px;font-weight: 600;">Document Attachment</p>
                </td>
                <td style="width: 30%;text-align: center;border-left: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 600;">Serial No</p>
                  <p style="font-size: 10px;font-weight: 600;">(If there is)</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">Job Safety Analysis (JSA) / IRA</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{NeedSika.textField}}</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">Pre-use inspection</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{NeedSika.textField1}}</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">Lifting Plan</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{NeedSika.textField2}}</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">SIKA Road Closure</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{NeedSika.textField3}}</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">SIKA Enter Vehicle</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{NeedSika.textField4}}</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">SIKA Hot</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{NeedSika.textField5}}</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">Hubla Permission (*Especially for floating cranes)</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{NeedSika.textField6}}</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">Sea tide table</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{NeedSika.textField7}}</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">Risk Assessment</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{NeedSika.textField8}}</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">Isolation list</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{NeedSika.textField9}}</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;"value={{''}}>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;"value={{''}}>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;"value={{''}}>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;"value={{''}}>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;"value={{''}}>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;"value={{''}}>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;"value={{''}}>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;"value={{''}}>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;"value={{''}}>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;"value={{''}}>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <input  disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;"value={{''}}>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                </td>
                <td style="border-left: 1px solid #000;">
                  <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;"value={{''}}>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  
  <div class="page-break"></div>
  <table style="border: 1px solid #000;border-top: none;width: 100%;" class="heavysection2">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>Section 3:Authorization for Preventive Measures Against Equipment Damage</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #ccffcc;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;">After I have checked and researched the drawings and the location to be excavated or passed by heavy equipment, the work can be carried out with the following requirements
            </p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;background: #ccffcc;">
        <td>  
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td style="padding: 0 0.5rem;width: 50%;">
                  <p style="font-size: 10px;font-weight: 500;">Prevention against damage to piping, roads, bridges (underground & overhead)</p>
                  <p style="font-size: 10px;font-weight: 500;padding-bottom:30px;">Condition : {{AuthorizationAcceptance.requirements}}</p>
                </td>
                <td style="padding: 0 0.5rem;width: 50%;border-left: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;"><u>Operations Officer (GSI)</u></p>
                  <p style="font-size: 10px;font-weight: 500;padding-bottom:30px;">Name :{{AuthorizationAcceptance.name4}}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>Section 4: Reception</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #feff99;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;">I understand and comply with all precautions and Good House Keeping (GHK) before,
            during the work carried out and will contact the authorized Operations Officer (GSI) when work begins.
          </p>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;padding-top: 10px;">Authorized Technician</p>
            <p style="font-size: 10px;font-weight: 500;padding-top: 10px;padding-bottom: 10px;">Name :{{AuthorizationAcceptance.name}}</p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>Section 5: Handover by the Technician</b></p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td style="padding: 0px;padding-left: 10px;height:60px">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px 5px 0px !important;"{% if AuthorizationAcceptance.Heavy_equipment_handover== "0"%} checked {% endif %}{% if AuthorizationAcceptance.Heavy_equipment_handover == undefined %} checked {% endif %}class="form-check-input" type="checkbox" id="confinedspace" name="confinedspace"
              value="something">
            <label class="form-check-label">
              <p style="font-size: 10px;font-weight: 500;margin: 0;">The work has been completed, all materials and equipment are ready to operate in a safe condition and the work area has been cleaned</p>
            </label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">

          

            <input disabled={true} style="margin: 5px 10px 5px 0px !important;" {% if AuthorizationAcceptance.Heavy_equipment_handover== "1"%} checked {% endif %}  class="form-check-input" type="checkbox" id="confinedspace" name="confinedspace"
              value="something">
            <label class="form-check-label">
              <p style="font-size: 10px;font-weight: 500;margin: 0;">Not yet completed and the condition is as</p>
            </label>
          </div>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;margin: 0;padding-top: 20px;padding-bottom: 20px;">Name :{{AuthorizationAcceptance.name2}}</p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>Section 6: Acceptance by the Operations Office / GSI
          Name
          15.
          O'clock
          30.
          %LE
          GAS RE-INSPECTION (MANDATORY FOR EVERY WORK TO START OR EVERY TIME TO START
          23.
          1. 5.
          19.
          12.
          O2 (% VOL)
          O2 (% VOL)
          Name
          27.
          Name
          9.
          I have checked the equipment, materials and workplace and</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #feff99;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;">I have checked the equipment, materials and workplace and agree to the conditions
          </p>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;">Name :{{AuthorizationAcceptance.name1}}</p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #ccffcc;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;"><b>Emergency Instructions</b></p>
          <p style="font-size: 10px;font-weight: 500;">If ordered or hear the sound of a siren indicating an emergency, STOP all work, turn off the machine or equipment and immediately go to the assembly point for evacuation.</p>
          <div style="display: inline-flex;">
            <p style="font-size: 10px;font-weight: 500;"><b>Permit No Longer Valid If</b></p>
            <div style="padding-left:100px;">
              <p style="font-size: 10px;font-weight: 500;">- In an emergency the work is stopped</p>
              <p style="font-size: 10px;font-weight: 500;">- Canceled by Operations Supervisor/GSI or HSE or Executor/Technical Expert</p>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="7" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0px;"><b>GAS RE-INSPECTION (MANDATORY FOR EVERY WORK TO START OR EVERY TIME TO START WORK OF REST CONDITIONS)</b></p>
        </td>
      </tr>
      {% for data in GasInspection %}
      <tr style="background: #feff99;border-bottom: 1px solid #000;">
        {% for item in data.data %}
          {%- if forloop.index0 == 0 -%}
          <td style="padding: 0px;padding-left: 10px;width: 150px;background: #feff99;">
            <p style="font-size: 10px;font-weight: 500;">Date</p>
          </td>
          {%- endif -%}
          <td style="width: 15%;padding: 0px;background: #feff99;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.date}}</p>
          </td>
        {% endfor %}
      </tr>
      <tr style="border-bottom: 1px solid #000;">
      {% for item in data.data %}
        {%- if forloop.index0 == 0 -%}
        <td style="padding: 0px;padding-left: 10px;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;">O'clock</p>
        </td>
        {%- endif -%}
        <td style="padding: 0px;border-left: 0.5px solid #000;background: #feff99; border-right: 0.5px solid #000;">
          <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.clock}}</p>
        </td>
      {% endfor %}
    </tr>
      <tr style="border-bottom: 1px solid #000;">
        {% for item in data.data %}
          {%- if forloop.index0 == 0 -%}
          <td style="padding: 0px;padding-left: 10px;background: #feff99;">
            <p style="font-size: 10px;font-weight: 500;">	Name</p>
          </td>
          {%- endif -%}
          <td style="padding: 0px;border-left: 0.5px solid #000;background: #feff99;border-right: 0.5px solid #000;">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.name12}}</p>
          </td>
        {% endfor %}
      </tr>
      <tr style="border-bottom: 0.5px solid #000;">
        {% for item in data.data %}
          {%- if forloop.index0 == 0 -%}
          <td style="padding: 0px;padding-left: 10px;background: #feff99;">
            <p style="font-size: 10px;font-weight: 500;">%LEL</p>
          </td>
          {%- endif -%}
          <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;background: #feff99">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.coldlel}}</p>
          </td>
        {% endfor %}
      </tr>
      <tr style="border-bottom: 0.5px solid #000;">
        {% for item in data.data %}
          {%- if forloop.index0 == 0 -%}
          <td style="padding: 0px;padding-left: 10px;background: #feff99;">
            <p style="font-size: 10px;font-weight: 500;">O2 (% VOL)</p>
          </td>
          {%- endif -%}
          <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;background: #feff99">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.coldoxygenco}}</p>
          </td>
        {% endfor %}
      </tr>
      {% endfor %}
    </tbody>
  </table>
  </main>
</div>

</div>`;
