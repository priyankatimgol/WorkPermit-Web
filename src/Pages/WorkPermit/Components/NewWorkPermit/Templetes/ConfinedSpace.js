export const ConfinedSpace = `
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
<table class="" style="border: 1px solid #000 !important;width: 98.11%;margin:0px 50px;margin-left: 10px;">
<tbody>
<tr>
<td style="width: 25%;padding: 0.5rem;">
</td>
<td style="width: 50%;background: red;color: #fff;padding: 30px 0;">
  <h4 style="text-align: center">
      PT PERTAMINA (PERSERO) REFINERY<br>
      PERMISSION TO ENTER LIMITED ROOM<br>
      (CONFINED SPACE ENTRY PERMIT)</br>
      ( Status: {{extraDetails.statusName}})
</td>
<td style="width: 25%;padding: 0.5rem;">

  <img src="../Assest/LOGOTEMP.jpg" class="logo" style="width: 100%;max-width: 100%;padding-top: 5px;" />
</td>
</tr>
</tbody>
  </table>
</header>
<main style="padding:0px 10px;">
  <table class="confinedsection" style="border: 1px solid #000 !important;width: 100%;">
    <tbody>
     
      <tr style="background: #fff;border: 1px solid #000;">
        <td colspan="3" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 12px;"><b>Section 1 : Job Application (Technician)</b></p>
        </td>
      </tr>
      <tr style="background: #ccffcc;">
        <td colspan="2" style="width: 25%;border-bottom: 1px solid #000;padding: 0.5rem;">
          <table class="w-100" style="border: none;">
            <tbody>
              <tr>
                <td style="width: 25%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.confined_space == "0" %} checked {% endif %}  {% if JobApplication.confined_space == undefined %} checked {% endif %}  class="form-check-input" type="checkbox" id="new" name="new" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">New</p></label>
                  </div>
                </td>
                <td style="width: 25%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.confined_space == "1" %} checked {% endif %} class="form-check-input" type="checkbox" id="extend" name="extend" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">EXTENSION</p></label>
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
                  <div class="inline-flex">
                  <p style="font-size: 10px;font-weight: 500;margin: 0;">From Date : {{extraDetails.validFrom.date}} </p>
                  </div>
                </td>
                <td>
                  <div class="inline-flex">
                  <p style="font-size: 10px;font-weight: 500;margin: 0;">until Date: {{extraDetails.validTo.date}} </p>
                  </div>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">From Hours: {{extraDetails.validFrom.time}} </p>
                  </div>
                </td>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">until Hours: {{extraDetails.validTo.time}} </p>
                  </div>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table> 
        </td>
        <td style="width: 25%;border-left: 1px solid #000;border-bottom: 1px solid #000;padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Main Permit No:{{JobApplication.mainPermitNumber}}</p>  
          <p style="font-size: 10px;font-weight: 500;margin: 0;">No. Register:{{extraDetails.number}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Date: {{extraDetails.date}} </p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Work Order: {{extraDetails.workOrder}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Tag Numbner: {{JobApplication.mainTag1}} </p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="3" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Job Title : {{extraDetails.title}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Job Location : {{extraDetails.area}} </p>
        </td>
        <td>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">System Name: {{extraDetails.system}} </p>
        </td>
        <td>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Tag Desription: {{JobApplication.tagNumber}} </p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Zone : {{extraDetails.zone}} </p>
        </td>
        <td colspan="2">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Discipline : {{extraDetails.discipline}} </p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom:1px solid #000;;">
        <td colspan="3" style="padding: 0.5rem;">
          <p style="height: 50px;font-size: 10px;font-weight: 500;margin: 0;">Purpose For Entry / Job Description: {{extraDetails.description}}</p>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="border: 1px solid #000;width: 100%;">
    <tbody>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="2" style="width: 70%;padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">No. Contract or Project  : {{JobApplication.noContractOrProject}} </p>
        </td>
        <td class="bor" style="width: 30%;border-left: 1px solid #000;padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Duration / Length of Work: {{JobApplication.noContractOrProject}} &nbsp;</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;">
        <td colspan="2" style="width: 70%;">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td style="width: 60%;padding: 0.5rem;">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">Work Executor: {{JobApplication.textField}} </p>
                    <!-- <input type="text" class="form-control" id="workExecutor" placeholder="Work Executor" name="workExecutor" style="width: 180px;"> -->
                  </div>
                </td>
                <td style="width: 20%">
                <div style="display: flex;align-items: center; position: relative;">
                  <input disabled={true} style="margin: 0px 10px !important;" {% if JobApplication.pertamina1 %} checked {% endif %} class="form-check-input" type="checkbox" id="pertamina" name="pertamina" value="something" >
                  <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Pertamina</p></label>
                </div>
              </td>
              <td style="width: 20%">
                <div style="display: flex;align-items: center; position: relative;">
                  <input disabled={true} style="margin: 0px 10px !important;" {% if JobApplication.pihakKetiga1 %} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something" >
                  <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Third party</p></label>
                </div>
              </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td class="bor" style="width: 30%;border-left: 1px solid #000;padding: 0.5rem;">
          <div class="inline-flex">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Number of Manpower : {{JobApplication.numberOfManpower}} &nbsp; </p>
          </div>
        </td>
      </tr>
    </tbody>


    <table style="border: 1px solid #000;border-top: none;width: 100%;">
      <tbody>
        <tr style="border-bottom: 1px solid #000;">
          <td colspan="3" style="padding: 0 0.5rem;">
            <p style="margin: 0;font-size: 12px;"><b>Section 2: Safety Requirements (to be completed by GSI)</b></p>
          </td>
        </tr>
        <tr style="vertical-align: top;">
          <td style="width: 48%;border: 1px solid #000;">
            <table style="width: 100%;background: #feff99;">
              <tbody>
                <tr style="border-bottom: 1px solid #000;">
                  <td style="width: 89%;text-align: center;">
                    <p style="font-size: 10px;font-weight: 600;">Safety Requirements</p>
                    <p style="font-size: 10px;font-weight: 600;">(Mark V if required)</p>
                  </td>
                  <td style="width: 10%!important;border-left: 1px solid #000;text-align: center;">
                    <p style="font-size: 10px;font-weight: 600;">Yes/ No</p>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #000;">
                  <td>
                    <p style="font-size: 10px;"><b>A. Equipment Cleaning  </b></p>
                  </td>
                  <td style="border-left: 1px solid #000;text-align: center;"><p>&nbsp;</p></td>
                  <td><p style="margin: 0;">&nbsp;</p></td>
                </tr>
                <tr style="border-bottom: 1px solid #000;">
                  <td>
                    <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">1. Emptyed </p>
                  </td>
                  <td style="border-left: 1px solid #000;text-align: center;">
                    <div>
                      <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.Emptyed  %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA1Yes" name="safetyRequirementA1Yes" value="something" >
                    </div>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #000;">
                  <td>
                    <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">2. Release from pressure </p>
                  </td>
                  <td style="border-left: 1px solid #000;text-align: center;">
                    <div>
                      <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.ReleasedFromPressure  %} checked {% endif %} {% if SafetyRequirements.ReleasedFromPressure == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA2Yes" name="safetyRequirementA2Yes" value="something" >
                    </div>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #000;">
                  <td>
                    <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">3. Washed </p>
                  </td>
                  <td style="border-left: 1px solid #000;text-align: center;">
                    <div>
                      <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.Washed %} checked {% endif %} {% if SafetyRequirements.Washed == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA3Yes" name="safetyRequirementA3Yes" value="something" >
                    </div>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #000;">
                  <td>
                    <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">4. Di-steam </p>
                  </td>
                  <td style="border-left: 1px solid #000;text-align: center;">
                    <div>
                      <input disabled={true}  style="margin: 0 !important;" {% if SafetyRequirements.DiSteam %} checked {% endif %} {% if SafetyRequirements.DiSteam == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA4Yes" name="safetyRequirementA4Yes" value="something" >
                    </div>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #000;">
                  <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">5. Pushed/flush with water </p>
                  </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.PushedFlushedWithWater %} checked {% endif %} {% if SafetyRequirements.PushedFlushedWithWater == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA5No" name="safetyRequirementA5No" value="something" >
                    </div>
                  </td>
                </tr>
              <tr style="border-bottom: 1px solid #000;">
                  <td style="padding: 0;padding-left: 10px;">
                    <table style="width: 100%;">
                      <tbody>
                        <tr>
                          <td style="width: 33.33%;">
                          <p style="font-size: 10px;font-weight: 500;margin-left: 0px;">6. Cooled </p>
                          </td>
                          <td style="width: 33.33%;">
                          <div style="display: flex;align-items: center; position: relative;">
                            <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.alami %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6Experience" name="safetyRequirementA6Experience" value="something" >
                            <label class="form-check-label"><p style="font-size: 10px;">Experience</p></label>
                            </div>
                          </td>
                          <td style="width: 33.33%;">
                          <div style="display: flex;align-items: center; position: relative;">
                            <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.awalPekerjaan %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6Mechanical" name="safetyRequirementA6Mechanical" value="something" >
                            <label class="form-check-label"><p style="font-size: 10px;">Mechanical</p></label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.Cooled  %} checked {% endif %} {% if SafetyRequirements.Cooled == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6Yes" name="safetyRequirementA6Yes" value="something" >
                    </div>
                  </td>
                </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;"> 7. Purging with inert gas </p>
                  </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.PurgingWithInertGas %} checked {% endif %} {% if SafetyRequirements.PurgingWithInertGas== undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA7Yes" name="safetyRequirementA7Yes" value="something" >
                  </div>
                </td>
                </tr>
                <tr style="border-bottom: 1px solid #000;">
                  <td>
                    <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">8. Cleaned from deposits, scale, traps of combustible, toxiccorrosive</p>
                  </td>
                  <td style="border-left: 1px solid #000;text-align: center;">
                    <div>
                      <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.CleanedFromDepositsScaleTrapsOfCombustibleToxicCorrosive  %} checked {% endif %}  {% if SafetyRequirements.CleanedFromDepositsScaleTrapsOfCombustibleToxicCorrosive == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA8Yes" name="safetyRequirementA8Yes" value="something" >
                    </div>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #000;">
                  <td>
                    <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">9. Perform Ventilation</p>
                  </td>
                  <td style="border-left: 1px solid #000;text-align: center;">
                    <div>
                      <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.PerformVentilation  %} checked {% endif %} {% if SafetyRequirements.PerformVentilation == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA9Yes" name="safetyRequirementA9Yes" value="something" >
                    </div>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #000;">
                  <td>
                    <p style="font-size: 10px;"><b>B. Equipment Insulation</b></p>
                  </td>
                  <td style="border-left: 1px solid #000;text-align: center;">&nbsp;</td>
                  <td style="margin: 0;">&nbsp;</td>
                </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                    <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">1. Non-BlankNo, Blank No.</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.NonBlankBlankNo  %} checked {% endif %} {% if SafetyRequirements.NonBlankBlankNo == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB1Yes" name="safetyRequirementB1Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">2. Take off</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true}  style="margin: 0 !important;"{% if SafetyRequirements.TakeOff %} checked {% endif %} {% if SafetyRequirements.TakeOff == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2Yes" name="safetyRequirementB2Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">3. Sealed shells </p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.SealedShells  %} checked {% endif %} {% if SafetyRequirements.SealedShells == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2Yes" name="safetyRequirementB2Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">4. Labeled</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.Labeled  %} checked {% endif %} {% if SafetyRequirements.Labeled == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2Yes" name="safetyRequirementB2Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">5. Lock Out & Tag Out electrical circuits (LOTO)</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.LockOutTagOutElectricalCircuitsLoto %} checked {% endif %}  {% if SafetyRequirements.LockOutTagOutElectricalCircuitsLoto== undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2Yes" name="safetyRequirementB2Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">6. Fuse, CB drawout</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true}  style="margin: 0 !important;" {% if SafetyRequirements.FuseRemovedCbDrawout  %} checked {% endif %} {% if SafetyRequirements.FuseRemovedCbDrawout == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2Yes" name="safetyRequirementB2Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;"><b>C.Electrical Safety</b></p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">&nbsp;</td>
                <td style="padding: 3px;">&nbsp;</td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">1.Explosion Proof Equipment</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.ExplosionProofEquipment  %} checked {% endif %} {% if SafetyRequirements.ExplosionProofEquipment == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC1Yes" name="safetyRequirementC1Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">2.Low-voltage lighting</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.LowVoltageLighting %} checked {% endif %} {% if SafetyRequirements.LowVoltageLighting== undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC2Yes" name="safetyRequirementC2Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">3.Ground Fault Interrupter</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.GroundFaultInterrupter %} checked {% endif %} {% if SafetyRequirements.GroundFaultInterrupter == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC3Yes" name="safetyRequirementC3Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">4.Temporary Lighting according to its classification and in good condition is provided</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.TemporaryLightingAccordingToItsClassificationAndInGoodConditionIsProvided %} checked {% endif %} {% if SafetyRequirements.TemporaryLightingAccordingToItsClassificationAndInGoodConditionIsProvided== undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC4Yes" name="safetyRequirementC4Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;"><b>D.Other Security</b></p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">&nbsp;</td>
                <td style="padding: 3px;">&nbsp;</td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">1. All sewer drains and shells, at a distance of 15 meters from the place job has closed</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.AllSewerDrainsAndShellsAtADistanceOf15MetersFromThePlaceJobHasClosed  %} checked {% endif %} {% if SafetyRequirements.AllSewerDrainsAndShellsAtADistanceOf15MetersFromThePlaceJobHasClosed == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC5Yes" name="safetyRequirementC5Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">2.Secure the area from flammable materials (leakage)</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} {% if SafetyRequirements.SecureTheAreaFromFlammableMaterialsLeakage %} checked {% endif %} {% if SafetyRequirements.SecureTheAreaFromFlammableMaterialsLeakage == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC6Yes" name="safetyRequirementC6Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">3. Stand by fire extinguisher (APAR, Water Spray, Fire NonBlankBlankNoet)</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.StandByFireExtinguishersAparWaterSprayFireBlanket  %} checked {% endif %} {% if SafetyRequirements.StandByFireExtinguishersAparWaterSprayFireBlankete == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC7Yes" name="safetyRequirementC7Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">4. The power breaker has been grounded</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.ThePowerBreakerHasBeenGrounded  %} checked {% endif %} {% if SafetyRequirements.ThePowerBreakerHasBeenGrounded == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC8Yes" name="safetyRequirementC8Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 23.33%;">
                          <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">5.Stand by Officer</p>
                        </td>
                        <td style="width: 20.33%;">
                          <div style="display: flex;align-items: center; position: relative;">
                            <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.fireman %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6Experience" name="safetyRequirementA6Experience" value="something" >
                            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Fireman</p></label>
                          </div>
                        </td>
                        <td style="width: 20.33%;">
                          <div style="display: flex;align-items: center; position: relative;">
                            <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.safetyman %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6Mechanical" name="safetyRequirementA6Mechanical" value="something" >
                            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Safetyman</p></label>
                          </div>
                        </td>
                        <td style="width: 20.33%;">
                          <div style="display: flex;align-items: center; position: relative;">
                            <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.rescuer %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6Mechanical" name="safetyRequirementA6Mechanical" value="something" >
                            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Rescuer</p></label>
                          </div>
                        </td>
                        <td style="width: 20.33%;">
                          <div style="display: flex;align-items: center; position: relative;">
                            <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.paramedis %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6Mechanical" name="safetyRequirementA6Mechanical" value="something" >
                            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Paramedic</p></label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.StandByOfficer %} checked {% endif %} {% if SafetyRequirements.StandByOfficer == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6Yes" name="safetyRequirementA6Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">6. All welding equipment has been placed in a safe position bonded and grounded</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.TheWorkMustBeContinuouslyMoistenedWithWater %} checked {% endif %} {% if SafetyRequirements.TheWorkMustBeContinuouslyMoistenedWithWater == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC10Yes" name="safetyRequirementC10Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">7. The work must be continuously moistened with water                  </p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.TheWorkMustBeContinuouslyMoistenedWithWater %} checked {% endif %}  {% if SafetyRequirements.TheWorkMustBeContinuouslyMoistenedWithWater == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC11Yes" name="safetyRequirementC11Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">8.Welding tools, cutting and all machines have been placed in a safe place</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.TheWorkMustBeContinuouslyMoistenedWithWater %} checked {% endif %} {% if SafetyRequirements.TheWorkMustBeContinuouslyMoistenedWithWater == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC12Yes" name="safetyRequirementC12Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">9. Aids, ladders, scaffolding, aerial actuators, lighting cables, tools, (tools), diesel engines, compressors, blowers meet the requirements
                  </p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.AidsLaddersScaffoldingAerialActuatorsLightingCablesToolsToolsDieselEnginesCompressorsBlowersMeetTheRequirements %} checked {% endif %} {% if SafetyRequirements.AidsLaddersScaffoldingAerialActuatorsLightingCablesToolsToolsDieselEnginesCompressorsBlowersMeetTheRequirements== undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC13Yes" name="safetyRequirementC13Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">10.All machines must be placed in a safe location</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.AllMachinesMustBePlacedInASafeLocation %} checked {% endif %} {% if SafetyRequirements.AllMachinesMustBePlacedInASafeLocation == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC14Yes" name="safetyRequirementC14Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">11.Evacuation Route Prepared</p>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.EvacuationRoutePrepared  %} checked {% endif %} {% if SafetyRequirements.EvacuationRoutePrepared== undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC15Yes" name="safetyRequirementC15Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0;">
                  <table style="width: 100%;">
                    <tbody>
                      
                      <tr style="">
                      <td style="padding-left: 10px;">
                        <table style="width: 100%;padding-left: 10px;">
                          <tbody>
                            <tr>
                              <td style="width: 50%;">
                                <p style="font-size: 10px;font-weight: 500;margin-left: 0px;">12. Gas test every: {{SafetyRequirements.select1}}</p>
                              </td>
                             
                           
                             
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      
                     
                    </tr>
                    </tbody>
                  </table>
                </td>
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.GasTestEvery1  %} checked {% endif %} {% if SafetyRequirements.GasTestEvery1 == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6Yes" name="safetyRequirementA6Yes" value="something" >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td class="nobor" style="width: 2%;">
          <p>&nbsp;</p>
        </td>
        <td style="width: 48%;padding: 0px;">
          <table style="width: 100%;background: #feff99;border-left: 1px solid #000;">
            <tbody>
              <tr style="border-bottom: 1px solid #000;">
                <td style="width: 90%;text-align: center;">
                  <p style="font-size: 10px;font-weight: 600;">&nbsp;</p>
                  <p style="font-size: 10px;font-weight: 600;">&nbsp;</p>
                </td>
                <td style="width: 10%!important;text-align: center;border-left: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 600;">Yes/ No</p>
                </td>
                
              </tr>
              <tr style="border-bottom: 1px solid #000;" style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <p style="font-size: 10px;font-weight: 500;">1.Have safety-related inspections been carried out together?</p>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" style="margin: 0 !important;" {% if  SafetyRequirements.HaveSafetyRelatedInspectionsBeenCarriedOutTogether %} checked {% endif %} {% if SafetyRequirements.HaveSafetyRelatedInspectionsBeenCarriedOutTogether == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement1Yes" name="safetyRequirement1Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <p style="font-size: 10px;font-weight: 500;">2. Is it safe to install electrical equipment over 50 Volts? </p>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input  disabled={true} style="margin: 0 !important;" {% if  SafetyRequirements.IsItSafeToInstallElectricalEquipmentOver50Vol %}checked {% endif %} {% if SafetyRequirements.IsItSafeToInstallElectricalEquipmentOver50Vol == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement2Yes" name="safetyRequirement2Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <p style="font-size: 10px;font-weight: 500;">3. Is the condition free from combustible materials?</p>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if  SafetyRequirements.IsTheConditionFreeFromCombustibleMaterials %} checked {% endif %} {% if SafetyRequirements.CleanedFromDepositsScaleTrapsOfCombustibleToxicCorrosive== undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement3Yes" name="safetyRequirement3Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <p style="font-size: 10px;font-weight: 500;">4. Has the short circuit leakage safety device & electric shock hazard been tested?</p>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.HasTheShortCircuitLeakageSafetyDeviceElectricShockHazardBeenTested  %} checked {% endif %} {% if SafetyRequirements.HasTheShortCircuitLeakageSafetyDeviceElectricShockHazardBeenTested == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement4Yes" name="safetyRequirement4Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <p style="font-size: 10px;font-weight: 500;">5.Are the cables in good condition and safe?</p>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.AreTheCablesInGoodConditionAndSafe %} checked {% endif %} {% if SafetyRequirements.AreTheCablesInGoodConditionAndSafe == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement5Yes" name="safetyRequirement5Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <p style="font-size: 10px;font-weight: 500;">6.Is the cable protector from friction hazard at the inlet (Man Way)</p>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.IsTheCableProtectorFromFrictionHazardAtTheInletManWayAlreadyInstalled  %} checked {% endif %} {% if SafetyRequirements.IsTheCableProtectorFromFrictionHazardAtTheInletManWayAlreadyInstalled == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement6Yes" name="safetyRequirement6Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <p style="font-size: 10px;font-weight: 500;">7. Are the lighting fixtures covered with glass basket glass?</p>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.AreTheLightingFixturesCoveredWithGlassBasketGlass  %} checked {% endif %} {% if SafetyRequirements.AreTheLightingFixturesCoveredWithGlassBasketGlass == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement6Yes" name="safetyRequirement6Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <p style="font-size: 10px;font-weight: 500;">8.Other work permits that must be made according to the nature of the work?</p>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.OtherWorkPermitsThatMustBeMadeAccordingToTheNatureOfTheWork %} checked {% endif %} {% if SafetyRequirements.OtherWorkPermitsThatMustBeMadeAccordingToTheNatureOfTheWork == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement6Yes" name="safetyRequirement6Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="width: 90%;padding: 0;" class="center">
                  <table style="width: 100%;height: 30px;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;"><b>Need SIKA / Attached Documents</b></p>
                        </td>
                        <td class="borL" style="width: 30%;border-left: 1px solid #000;">
                          <p style="font-size: 10px;"><b>Serial number</b></p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="width: 5%;text-align: center;border-left: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 600;">Yes/ No</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">1.SIKA Hot</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                          <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                            name="safetyRequirement9" >{{NeedSika.textField}}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.SikaHot %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement7Yes" name="safetyRequirement7Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">2.SIKA Cold</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                          <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
border                          name="safetyRequirement9" >{{NeedSika.textField1}}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.SikaCold %}  checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement8Yes" name="safetyRequirement8Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">3.SIKA Electrical & Instrument
                        </p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p  disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField2}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.SikaElectricalInstrument  %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement9Yes" name="safetyRequirement9Yes" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">4. SIKA Excavation</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField3}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.SikaExcavation  %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement10Yes" name="safetyRequirement10Yes" value="something" >
                  </div>
                </td>
                
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">5. SIKA Heavy Equipment Movement                          </p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p  disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField4}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.SikaHeavyEquipmentMovement  %} checked {% endif %} {% if NeedSika.SikaHeavyEquipmentMovement == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement11Yes" name="safetyRequirement11Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">6.SIKA Radiation</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p  disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField5}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.SikaRadiation  %} checked {% endif %} {% if NeedSika.SikaRadiation == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement12Yes" name="safetyRequirement12Yes" value="something" >
                  </div>
                </td>
                
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">7.SIKA Disabling Vital Security System</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField6}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.SikaDisablingVitalSecuritySystem %} checked {% endif %} {% if NeedSika.SikaDisablingVitalSecuritySystem== undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement13Yes" name="safetyRequirement13Yes" value="something" >
                  </div>
                </td>
                
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">8.SIKA Underwater</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9">{{NeedSika.textField7}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.SikaUnderwater %} checked {% endif %} {% if NeedSika.SikaUnderwater == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement14Yes" name="safetyRequirement14Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">9. SIKA Use of electrical voltages above 50 Volts in a Confined Space</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p  disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField8}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.sikatheuseofelectricalvoltageabove50voltsinaconfinedspace  %} checked {% endif %} {% if NeedSika.sikatheuseofelectricalvoltageabove50voltsinaconfinedspace == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement15Yes" name="safetyRequirement15Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">10.SIKA Use of Extinguishing Water for nonemergency needs</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField9}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.SikaUseOfExtinguishingWaterForNonEmergencyNeeds1 %} checked {% endif %} {% if NeedSika.SikaUseOfExtinguishingWaterForNonEmergencyNeeds1 == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement16Yes" name="safetyRequirement16Yes" value="something" >
                  </div>
                </td>
                
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">11.SIKA Photo Capture</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p  disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9">{{NeedSika.textField10}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.SikaPhotoCapture  %} checked {% endif %} {% if NeedSika.SikaPhotoCapture == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement17Yes" name="safetyRequirement17Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">12.Work Procedure (WorkProcedureSop)</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField11}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.WorkProcedureSop  %} checked {% endif %} {% if NeedSika.WorkProcedureSop == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement18Yes" name="safetyRequirement18Yes" value="something" >
                  </div>
                </td>
                
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">13. Equipment Inspection (Welding/Cutting Tools, Tools etc.) </p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField12}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.EquipmentInspectionWeldingCuttingToolsToolsEtc  %} checked {% endif %} {% if NeedSika.EquipmentInspectionWeldingCuttingToolsToolsEtc == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement19Yes" name="safetyRequirement19Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">14. Safety Data Sheet (SafetyDataSheetMsds)</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField13}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.SafetyDataSheetMsds  %} checked {% endif %} {% if NeedSika.SafetyDataSheetMsds == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement20Yes" name="safetyRequirement20Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">15.JSA/TRA </p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField14}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.JsaTra %} checked {% endif %} {% if NeedSika.JsaTra == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement21Yes" name="safetyRequirement21Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">16.Checklist / Blind list</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField15}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.ChecklistBlindList %} checked {% endif %} {% if NeedSika.ChecklistBlindList == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement22Yes" name="safetyRequirement22Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">17.Equipment Release Card</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p  disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField16}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.EquipmentReleaseCard  %} checked {% endif %} {% if NeedSika.EquipmentReleaseCard==undefined %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement23Yes" name="safetyRequirement23Yes" value="something" >
                  </div>
                </td>
              
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">18.LOTO List</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9">{{NeedSika.textField17}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.LotoList  %} checked {% endif %} {% if NeedSika.LotoList == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement24Yes" name="safetyRequirement24Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">19. Sketch / Drawing / P & ID / PFI</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField18}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.SketchDrawingPIdPfi %} checked {% endif %} {% if NeedSika.SketchDrawingPIdPfi == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement25Yes" name="safetyRequirement25Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">20.Vehicle Entry Permit in Forbidden Areas</p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField19}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.VehicleEntryPermitInForbiddenAreas  %} checked {% endif %} {% if NeedSika.VehicleEntryPermitInForbiddenAreas == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement27Yes" name="safetyRequirement27Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">21. Dokumen Explosion Proof </p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField20}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.DokumenExplosionProof %} checked {% endif %} {% if NeedSika.DokumenExplosionProof== undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement28Yes" name="safetyRequirement28Yes" value="something" >
                  </div>
                </td>
                
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">22.Job Safety Analysis </p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9">{{NeedSika.textField21}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.JobSafetyAnalysis %} checked {% endif %} {% if NeedSika.JobSafetyAnalysis == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement29Yes" name="safetyRequirement29Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">23.Risk Assessments </p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p  disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField22}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.RiskAssessments  %} checked {% endif %} {% if NeedSika.RiskAssessments == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement30Yes" name="safetyRequirement30Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">24. Isolation  </p>
                        </td>
                        <td style="width: 31%;background: #fff;border-left: 1px solid #000;">
                        <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                          name="safetyRequirement9" >{{NeedSika.textField23}}</p>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" {% if NeedSika.Isolation1 %} checked {% endif %} {% if NeedSika.Isolation1== undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement31Yes" name="safetyRequirement31Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">25.</p>
                        </td>
                        <td class="borL" style="width: 31%;background: #fff;border-left: 1px solid #000;">
                          <input  disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement32" placeholder="" name="safetyRequirement32" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" class="form-check-input" type="checkbox" id="safetyRequirement32Yes" name="safetyRequirement32Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">26.</p>
                        </td>
                        <td class="borL" style="width: 31%;background: #fff;border-left: 1px solid #000;">
                          <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement33" placeholder="" name="safetyRequirement33" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" class="form-check-input" type="checkbox" id="safetyRequirement33Yes" name="safetyRequirement33Yes" value="something" >
                  </div>
                </td>
               
              </tr>
              <tr>
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 69.4%;">
                          <p style="font-size: 10px;font-weight: 500;">27.</p>
                        </td>
                        <td class="borL" style="width: 31%;background: #fff;border-left: 1px solid #000;">
                          <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement34" placeholder="" name="safetyRequirement34" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div class="form-check">
                    <input disabled={true} style="margin: 0 !important;" class="form-check-input" type="checkbox" id="safetyRequirement34Yes" name="safetyRequirement34Yes" value="something" >
                  </div>
                </td>
               
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="page-break"></div>
  <table style="width: 100%;border: 1px solid #000;border-top:none;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;"><b>WARNING !! PROCEDURE IN EMERGENCY OR FIRE ALARM RINGS</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #feff99;padding-left: 10px;">
          <p style="font-size: 10px;font-weight: 500;">1. Stop all work, withdraw all Workers who work in closed spaces or height.</p>
          <p style="font-size: 10px;font-weight: 500;">2. Turn off all driving machinery, electrical equipment and cover the Acetylene / Propane gas cylinder.</p>
          <p style="font-size: 10px;font-weight: 500;">3. Stop using extinguishing water and make sure the workplace is safe to leave.</p>
          <p style="font-size: 10px;font-weight: 500;">4. Immediately go to the assembly point for evacuation (Assembly Point).</p>
          <p style="font-size: 10px;font-weight: 500;">5. The nearest Assembly Point is at</p>
          <p style="font-size: 10px;font-weight: 500;">6.Return this SIKA HOT to the Authorized Operations Officer (GSI).</p>
          <p style="font-size: 10px;font-weight: 500;">7. In case of an emergency, call tel.</p>
          <p style="font-size: 10px;font-weight: 500;">8. If you need to consult on safety aspects, please contact the Safety inspector in the HT ID area
          </p>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="width: 100%;border: 1px solid #000;border-top:none;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;"><b>SPECIAL INSTRUCTIONS</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;background: #feff99;">
        <td style="padding: 0px;padding-left: 10px;"  colspan="4">
          <div style="display: flex;align-items: center; position: relative;">
            <input  disabled={true} style="margin: 5px 10px !important;"{% if SpecialInstruction.ifThereArePersonnelEnteringAConfinedSpaceTheyMustStandByThePersonnelSupervisorOutsideTheManholeEntrySupervision %} checked {% endif %}   class="form-check-input" type="checkbox" id="contentOfO2" name="contentOfO2" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">If there are personnel entering a confined space, they must stand by the personnel supervisor outside the manhole (Entry Supervision)</p></label>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;background: #feff99;">
        <td style="padding: 0px;padding-left: 10px;"  colspan="4">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.installTheNoEntrySignOnTheManholeIfTheConditionsInTheConfinedSpaceAreNotSafeForPersonnelToEnter%} checked {% endif %}   class="form-check-input" type="checkbox" id="contentOfO2" name="contentOfO2" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Install the "No Entry Sign" on the manhole if the conditions in the confined space are not safe for personnel to enter</p></label>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;background: #feff99;">
        <td style="padding: 0px;padding-left: 10px;"  colspan="4">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if SpecialInstruction.theConfinedSpaceGasTestMustBeCarriedOutEveryTimeTheWorkStartsEveryMorningBeforeWorkStartsAndAfterEveryBreak %} checked {% endif %}  class="form-check-input" type="checkbox" id="scaffoldTagging" name="scaffoldTagging" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">The confined space gas test must be carried out every time the work starts (every morning before work starts and after every break)</p></label>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;background: #feff99;">
        <td style="width: 33.33%;padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.cekSekringAlatListrikYgDigunakan %} checked {% endif %}  class="form-check-input" type="checkbox" id="FuseRemovedCbDrawoutOfElectricTool" name="FuseRemovedCbDrawoutOfElectricTool" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Check the area, there are no gas/oil leaks</p></label>
          </div>
        </td>
        <td style="width: 33.33%;padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.cekKandunganToxicGasH2SCo %} checked {% endif %}  class="form-check-input" type="checkbox" id="contentOfO2" name="contentOfO2" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Ventilation / blower must always be done</p></label>
          </div>
        </td>
        <td style="width: 33.33%;padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.gerindaHarusPakaiCover %} checked {% endif %}  class="form-check-input" type="checkbox" id="scaffoldTagging" name="scaffoldTagging" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Cable Mass (-) close to the welding point</p></label>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;background: #feff99;">
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.cekSambunganKabelListrikYgDigunakan %} checked {% endif %}  class="form-check-input" type="checkbox" id="FuseRemovedCbDrawoutOfElectricTool" name="FuseRemovedCbDrawoutOfElectricTool" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Check the FuseRemovedCbDrawout of the electric tool used</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.instalUlangSemuaIsolasiYgDiduka %} checked {% endif %}  class="form-check-input" type="checkbox" id="contentOfToxicGas" name="contentOfToxicGas" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Tutup sewer, drain, sump dg Fire NonBlankBlankNoet</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.pergunakanSteamUntukProteksi %} checked {% endif %}  class="form-check-input" type="checkbox" id="grinderMustUseCover" name="grinderMustUseCover" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Mass cable (-) is not connected to the unit</p></label>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;background: #feff99;">
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.pastikanBahwaGastestTelahDilakukan %} checked {% endif %}  class="form-check-input" type="checkbox" id="connectionOfElectricCable" name="connectionOfElectricCable" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Check the connection of the electric cable used</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.ventilasiBlowerHarusSelaluDilakukan %} checked {% endif %}  class="form-check-input" type="checkbox" id="reinstallAllIsolation" name="reinstallAllIsolation" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Scaffold must be "Tagging"</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.kabelMassaDekatDgnTitikLas %} checked {% endif %}  class="form-check-input" type="checkbox" id="steamForProtection" name="steamForProtection" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Close Gate Bundwall during work</p></label>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;background: #feff99;">
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.monitoringGasRutinSelamaPekerjaan %} checked {% endif %}  class="form-check-input" type="checkbox" id="gastestHasBeenDone" name="gastestHasBeenDone" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Regular Gas Monitoring during work</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.tutupSewerDrainSumpDgFireBlanket %} checked {% endif %}  class="form-check-input" type="checkbox" id="ventilationBlowerMustBeDone" name="ventilationBlowerMustBeDone" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">The grinder must use a cover</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.kabelMassaTdkDisambungDgnUnit %} checked {% endif %}  class="form-check-input" type="checkbox" id="cableMassCloseToWeldingPoint" name="cableMassCloseToWeldingPoint" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Open the bundwall gate periodically</p></label>
          </div>
        </td>
      </tr>
      <tr style="background: #feff99;">
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.pastikanRambuRadioaktifTersediaDiLokasi %} checked {% endif %}  class="form-check-input" type="checkbox" id="routineGasMonitoringDuringWork" name="routineGasMonitoringDuringWork" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Reinstall all the isolation that was opened</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.tutupGateBundwallSelamaKerja %} checked {% endif %}  class="form-check-input" type="checkbox" id="coverSewerDrainSumpWithFireNonBlankBlankNoet" name="coverSewerDrainSumpWithFireNonBlankBlankNoet" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Use Steam for protection</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input  disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.suratLzinOperasiOperatorSesuaiKlasifikasi %} checked {% endif %} class="form-check-input" type="checkbox" id="massCableNotConnectedToUnit" name="massCableNotConnectedToUnit" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Put up barricades on the job site</p></label>
          </div>
        </td>
      </tr>
    </tbody>
  </table>


  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0px;"><b>Section 3: Issuance of Work License by an Authorized GSI Officer</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #feff99;padding: 0 0.5rem;">
          <p style="font-size: 10px;"><b>Authorized Operations Officer (GSI)</b></p>
          <p style="font-size: 10px;font-weight: 500;">I have checked the work site, tools, work to be carried out and the condition is safe and allowed to start work</p>
          <p style="font-size: 10px;font-weight: 500;" style="font-size: 10px;font-weight: 500;padding-top: 15px;">Name :{{AuthorizationAcceptance.name4}}</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="margin: 0px;font-size: 12px;"><b>Section 4: Receipt of Work Permit by Work Executor (authorized Engineering Expert)</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #ccffcc;padding: 0 0.5rem;">
          <p style="font-size: 10px;"><b>Authorized Technician</b></p>
          <p style="font-size: 10px;font-weight: 500;">I understand and comply with all precautions and Good House Keeping before and during the work is carried out and will contact the authorized operating officer when the work begins.          </p>
          <p style="font-size: 10px;font-weight: 500;padding-top: 15px;">Name :{{AuthorizationAcceptance.name6}}</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
        <p style="margin: 0px;font-size: 12px;"><b>Section 5: Handover by the Engineer (signed by the engineer after the work is completed)</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #ccffcc;padding: 0 0.5rem;">
          <div style="display: flex;align-items: center; position: relative;">
            <input  disabled={true} style="margin: 5px 10px !important;" {% if AuthorizationAcceptance.theWorkHasBeenCompletedAllMaterialsAndEquipmentAreReadyToOperateInASafeConditionAndTheWorkAreaHasBeenCleaned %} checked {% endif %}  class="form-check-input" type="checkbox" id="openBundwallGatePeriodically" name="openBundwallGatePeriodically" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">The work has been completed, all materials and equipment are ready to operate in a safe condition and the work area has been cleaned</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if AuthorizationAcceptance.notYetCompletedAndTheConditionsAreAsFollows %} checked {% endif %}  class="form-check-input" type="checkbox" id="openBundwallGatePeriodically" name="openBundwallGatePeriodically" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Not yet completed and the conditions are as follows:</p></label>
          </div>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;margin: 0;">Name:{{AuthorizationAcceptance.name7}}</p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="margin: 0px;font-size: 12px;"><b>Section 6: Re-admission by GSI (Permit closing, after the work is declared complete and safe)</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #feff99;padding: 0 0.5rem;">
          
          <p style="font-size: 10px;font-weight: 500;margin: 0;">I have checked the equipment, materials and workplace and agree to the conditions</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-top: 15px;">Name:{{AuthorizationAcceptance.name8}}</p>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="7" class="center">
          <p style="font-size: 10px;font-weight: 500;text-align: center;"><b>GAS RE CHECK & TEMPERATURE </b></p>
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
          <td style="padding: 0px;background: #feff99;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.date1}}</p>
          </td>
        {% endfor %}
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        {% for item in data.data %}
          {%- if forloop.index0 == 0 -%}
          <td style="padding: 0px;padding-left: 10px;background: #feff99;">
            <p style="font-size: 10px;font-weight: 500;">Temprature(OC)</p>
          </td>
          {%- endif -%}
          <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.coldlel}}</p>
          </td>
        {% endfor %}
      </tr>
      <tr style="border-bottom: 0.5px solid #000;">
        {% for item in data.data %}
          {%- if forloop.index0 == 0 -%}
          <td style="padding: 0px;padding-left: 10px;background: #feff99;">
            <p style="font-size: 10px;font-weight: 500;">O2(%Vol)</p>
          </td>
          {%- endif -%}
          <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.coldoxygenco}}</p>
          </td>
        {% endfor %}
      </tr>
      <tr style="border-bottom: 0.5px solid #000;">
        {% for item in data.data %}
          {%- if forloop.index0 == 0 -%}
          <td style="padding: 0px;padding-left: 10px;background: #feff99;">
            <p style="font-size: 10px;font-weight: 500;">Combustible(%LEL)</p>
          </td>
          {%- endif -%}
          <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.combustile}}</p>
          </td>
        {% endfor %}
      </tr>
      <tr style="border-bottom: 0.5px solid #000;">
        {% for item in data.data %}
          {%- if forloop.index0 == 0 -%}
          <td style="padding: 0px;padding-left: 10px;background: #feff99;">
            <p style="font-size: 10px;font-weight: 500;">Toxic (PPM) H2S</p>
          </td>
          {%- endif -%}
          <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.coldH2s}}</p>
          </td>
        {% endfor %}
      </tr>
      <tr style="border-bottom: 0.5px solid #000;">
        {% for item in data.data %}
          {%- if forloop.index0 == 0 -%}
          <td style="padding: 0px;padding-left: 10px;background: #feff99;">
            <p style="font-size: 10px;font-weight: 500;">Toxic (PPM) CO</p>
          </td>
          {%- endif -%}
          <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.coldothers}}</p>
          </td>
        {% endfor %}
      </tr>
      <tr style="border-bottom: 0.5px solid #000;">
        {% for item in data.data %}
          {%- if forloop.index0 == 0 -%}
          <td style="padding: 0px;padding-left: 10px;background: #feff99;">
            <p style="font-size: 10px;font-weight: 500;">	Status</p>
          </td>
          {%- endif -%}
          <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.status}}</p>
          </td>
        {% endfor %}
      </tr>
      <tr style="border-bottom: 0.5px solid #000;">
        {% for item in data.data %}
          {%- if forloop.index0 == 0 -%}
          <td style="padding: 0px;padding-left: 10px;background: #feff99;">
            <p style="font-size: 10px;font-weight: 500;">Name</p>
          </td>
          {%- endif -%}
          <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.measurment}}</p>
          </td>
        {% endfor %}
      </tr>
      <tr style="border-bottom: 0.5px solid #000;">
      {% for item in data.data %}
        {%- if forloop.index0 == 0 -%} 
        <td style="padding: 0px;padding-left: 10px;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;">Signature</p>
        </td>
        {%- endif -%}
        <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
          <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">
          <img src={{item.img}} class="logo" style="width: 36%;max-width: 100%;padding-top: 5px;" />
          </p>
        </td>
      {% endfor %}
    </tr>
      {% endfor %}
      
    </tbody>
  </table>
  </main>
</div>

</div>`;
