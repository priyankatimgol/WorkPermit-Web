export const ExcavationPermit = `
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
              PT PERTAMINA (PERSERO) REFINERY UNIT</br>
              <span style="text-decoration: underline;">EXCUREMENT WORK LICENSE</span></br>
              (EXCAVATION PERMIT)</br>
              ( Status: {{extraDetails.statusName}})
            </b>
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
  <table class="excavationsection" style="border: 1px solid #000;width: 100%;">
    <tbody>
      
      <tr style="background: #fff;border-bottom: 1px solid #000;">
        <td colspan="3" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 12px;"><b>Section 1: Job Application</b></p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="2" style="width: 25%;border-right: 1px solid #000;">
          <table class="w-100">
            <tbody>
              <tr>
                <td style="width: 25%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.job_application == "0"%} checked {% endif %} {% if JobApplication.job_application == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="new" name="new" value="something">
                    <label class="form-check-label">
                      <p style="font-size: 10px;font-weight: 500;margin: 0;">New</p>
                    </label>
                  </div>
                </td>
                <td style="width: 25%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.job_application == "1"%} checked {% endif %} class="form-check-input" type="checkbox" id="extend" name="extend" value="something">
                    <label class="form-check-label">
                      <p style="font-size: 10px;font-weight: 500;margin: 0;">EXTENSION</p>
                    </label>
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
              <td colspan="2">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left:10px;">From Date :{{extraDetails.validFrom.date}} </p>
                  </div>
                </td>
                <td colspan="2">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left:10px;">until Date: {{extraDetails.validTo.date}} </p>
                  </div>
                </td>
                
              </tr>
              <tr>
              <td colspan="2">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left:10px;">From jams:{{extraDetails.validFrom.time}} </p>
                  </div>
                </td>
                <td colspan="2">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left:10px;">Until what time:{{extraDetails.validTo.time}} </p>
                  </div>
                </td>
                
              </tr>
            </tbody>
          </table>
        </td>
        <td class="bor" style="width: 25%; background: #fff;padding-left:10px;">
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Main Permit No: {{JobApplication.workOrder}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">No. Register: {{extraDetails.number}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Date : {{extraDetails.date}} </p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Work Order (As Applicable): {{extraDetails.workOrder}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Tag Number: {{JobApplication.mainTag1}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Job Location : {{extraDetails.area}} </p>
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
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Job Description : {{extraDetails.description}}</p>
        </td>
      </tr>

      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;padding-bottom: 5px; padding-top: 5px!important;padding-right: 0px;">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td style="width: 33.33%;">
                  <p style="font-size: 10px;font-weight: 500;margin: 0;">Work Executor:</p>
                </td>
                <td style="width: 33.33%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input   disabled={true} style="margin: 0px 10px !important;" {% if JobApplication.pertamina %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6Experience"
                      name="safetyRequirementA6Experience" value="something">
                    <label class="form-check-label">
                      <p style="font-size: 10px;font-weight: 500;margin: 0;">Pertamina</p>
                    </label>
                  </div>
                </td>
                <td style="width: 33.33%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 0px 10px !important;" {% if JobApplication.partyIii %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6Mechanical"
                      name="safetyRequirementA6Mechanical" value="something">
                    <label class="form-check-label">
                      <p style="font-size: 10px;font-weight: 500;margin: 0;">Third Party</p>
                    </label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Digging Depth: {{JobApplication.diggingDepth}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Equipment used : {{JobApplication.equipmentUsed}}</p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0.5rem;padding-right: 0px;">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td style="width: 33.33%;">
                  <p style="font-size: 10px;font-weight: 500;margin: 0;">Underground installation drawings/sketches attached:</p>
                </td>
                <td style="width: 33.33%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 0px 10px !important;" class="form-check-input"  {% if JobApplication.checkbox %} checked {% endif %} type="checkbox" id="safetyRequirementA6Experience"
                      name="safetyRequirementA6Experience" value="something">
                    <label class="form-check-label">
                      <p style="font-size: 10px;font-weight: 500;margin: 0;">Yes / No</p>
                    </label>
                  </div>
                </td>
                
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="3" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;"><b>Section 2: Safety Requirements</b></p>
        </td>
      </tr>
      <tr style="vertical-align: top;">
        <td style="width: 32.66%;padding: 0px;border: 1px solid #000;border-left: none;border-top: none;">
          <table style="width: 100%;background: #feff99;">
            <tbody>
              <tr style="height: 57px;border-bottom: 1px solid #000;">
                <td style="width: 90%;text-align: center;">
                  <p style="font-size: 10px;margin: 0;"><b>Safety Requirements (Please tick if needed) </b></p>
                </td>
                <td class="bor" style="width: 10%;text-align: center;border-left: 1px solid #000;">
                  <p style="font-size: 10px;margin: 0 5px;"><b>Yes / No</b></p>
                </td>
                
              </tr>
              <tr>
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin: 0.5rem 0.5rem;">1. Free excavation path: </p>
                </td>
                <td style="border-left: 1px solid #000;border-top: 1px solid #000;text-align: center;">&nbsp;</td>
              
              </tr>
              <tr>
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin: 0.5rem 1rem;">- Underground power lines</p>
                </td>
               
                <td style="border-left: 1px solid #000;border-top: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.undergroundPowerLines %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA1No"
                      name="safetyRequirementA1No" value="something">
                </td>
              </tr>
              <tr>
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin: 0.5rem 1rem;">- Underground instrument cable</p>
                </td>
               
                <td style="border-left: 1px solid #000;border-top: 1px solid #000;text-align: center;">
                  <input disabled={true}  style="margin: 0 !important;"  {% if SafetyRequirements.undergroundInstrumentCable %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA2No"
                      name="safetyRequirementA2No" value="something">
                </td>
              </tr>
              <tr>
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin: 0.5rem 1rem;">- Underground telephone cable </p>
                </td>
               
                <td style="border-left: 1px solid #000;border-top: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.undergroundTelephoneCable %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA3No"
                      name="safetyRequirementA3No" value="something">
                </td>
              </tr>
              <tr>
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin: 0.5rem 1rem;">- Underground water/oil/gas piping</p>
                </td>
                
                <td style="border-left: 1px solid #000;border-top: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.undergroundWaterOilGasPiping %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA4No"
                      name="safetyRequirementA4No" value="something">
                </td>
              </tr>
              <tr>
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin: 0.5rem 0.5rem;">2. The excavation wall needs to be supported</p>
                </td>
                
                <td style="border-left: 1px solid #000;border-top: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.TheExcavationWallNeedsToBeSupported %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA5No"
                      name="safetyRequirementA5No" value="something">
                </td>
              </tr>
              <tr>
                <td style="width: 33.33%;">
                  <p style="font-size: 10px;font-weight: 500;margin: 0.5rem 0.5rem;">3. Safety Sign required</p>
                </td>
                
                <td style="border-left: 1px solid #000;border-top: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.SafetySignsAreRequired %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6No"
                      name="safetyRequirementA6No" value="something">
                </td>
              </tr>
              <tr>
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin: 0.5rem 0.5rem;">4. The road needs to be closed</p>
                </td>
               
                <td style="border-left: 1px solid #000;border-top: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.RoadsNeedToBeClosed %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA7No"
                      name="safetyRequirementA7No" value="something">
                </td>
              </tr>
              <tr>
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin: 0.5rem 0.5rem;">5. If the excavation depth is 1.8 m, the entry work <br>
                    must be accompanied by a limited space entry permit
                  </p>
                </td>
               
                <td style="border-left: 1px solid #000;border-top: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.IfTheExcavationDepthIs18MTheEntryWorkMustBeAccompaniedByALimitedSpaceEntryPermit %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA8No"
                      name="safetyRequirementA8No" value="something">
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        
        <td style="width: 32.66%;padding: 0px;">
          <table style="width: 100%;background: #feff99;border-bottom: 1px solid #000;">
            <tbody>
              <tr style="border-bottom: 1px solid #000;">
                <td style="width: 100%;text-align: center;">
                  <p style="font-size: 10px;"><b>Required SIKA/Attached Documents</b></p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr style="text-align: center;">
                        <td style="width: 70%;" colspan="2">
                          <p style="font-size: 10px;"><b>Document Attachment</b></p>
                        </td>
                        <td style="border-left: 1px solid #000;">
                          <p style="font-size: 10px;">Serial No <br>
                          (If there is)</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="border-bottom: 1px solid #000;border-right: 1px solid #000;text-align: center;padding: 0 5px;">
                          <input disabled={true} style="margin: 0 !important;"  {% if SafetyRequirements.jobSafetyAnalysisJsa %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC15No"
                              name="safetyRequirementC15No"  >
                        </td>
                        <td style="width: 65%;">
                          <p style="font-size: 10px;font-weight: 500;">Job Safety Analysis (JSA)</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-bottom: 1px solid #000;border-left: 1px solid #000;">
                          <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement2" placeholder=""
                            name="safetyRequirement2" >{{SafetyRequirements.textField}}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="border-bottom: 1px solid #000;border-right: 1px solid #000;text-align: center;padding: 0 5px;">
                          <input disabled={true} style="margin: 0 !important;"  {% if SafetyRequirements.equipmentInspectio
                            %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC15No"
                              name="safetyRequirementC15No" value="something">
                        </td>
                        <td style="width: 65%;">
                          <p style="font-size: 10px;font-weight: 500;">Equipment Inspection</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-bottom: 1px solid #000;border-left: 1px solid #000;">
                          <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement3" placeholder=""
                            name="safetyRequirement3" >{{SafetyRequirements.textField1}}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="border-bottom: 1px solid #000;border-right: 1px solid #000;text-align: center;padding: 0 5px;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.sketchesDrawingsPIDsPfDsFromLocation %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC15No"
                              name="safetyRequirementC15No" value="something">
                        </td>
                        <td style="width: 64.5%;">
                          <p style="font-size: 10px;font-weight: 500;">Sketches/Drawings/P & ID's/PFD's from Location</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-bottom: 1px solid #000;border-left: 1px solid #000;">
                          <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement4" placeholder=""
                            name="safetyRequirement4" >{{SafetyRequirements.textField2}}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="border-bottom: 1px solid #000;border-right: 1px solid #000;text-align: center;padding: 0 5px;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.sikaRoadClosure %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC15No"
                              name="safetyRequirementC15No" value="something">
                        </td>
                        <td style="width: 65%;">
                          <p style="font-size: 10px;font-weight: 500;">SIKA Road Closure</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-bottom: 1px solid #000;border-left: 1px solid #000;">
                          <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement5" placeholder=""
                            name="safetyRequirement5">{{SafetyRequirements.textField3}} </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="border-bottom: 1px solid #000;border-right: 1px solid #000;text-align: center;padding: 0 5px;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.sikaEntersTheRoomClosedLimited %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC15No"
                              name="safetyRequirementC15No" value="something">
                        </td>
                        <td style="width: 65%;">
                          <p style="font-size: 10px;font-weight: 500;">SIKA Enters The Room Closed/Limited</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-bottom: 1px solid #000;border-left: 1px solid #000;">
                          <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement6" placeholder=""
                            name="safetyRequirement6" >{{SafetyRequirements.textField4}}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="border-bottom: 1px solid #000;border-right: 1px solid #000;text-align: center;padding: 0 5px;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.sikaHot %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC15No"
                              name="safetyRequirementC15No" value="something">
                        </td>
                        <td style="width: 64.5%;">
                          <p style="font-size: 10px;font-weight: 500;">SIKA Hot
                          </p>
                        </td>
                        <td style="width: 30%;background: #fff;border-bottom: 1px solid #000;border-left: 1px solid #000;">
                          <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement7" placeholder=""
                            name="safetyRequirement7" >{{SafetyRequirements.textField5}}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="border-bottom: 1px solid #000;border-right: 1px solid #000;text-align: center;padding: 0 5px;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.riskAssessments %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC15No"
                              name="safetyRequirementC15No" value="something">
                        </td>
                        <td style="width: 65%;">
                          <p style="font-size: 10px;font-weight: 500;">Risk Assessments</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-bottom: 1px solid #000;border-left: 1px solid #000;">
                          <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement8" placeholder=""
                            name="safetyRequirement8" >{{SafetyRequirements.textField6}} </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="border-right: 1px solid #000;text-align: center;padding: 0 5px;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.isolation %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC15No"
                              name="safetyRequirementC15No" value="something">
                        </td>
                        <td style="width: 65%;">
                          <p style="font-size: 10px;font-weight: 500;">Isolation </p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;">
                          <p disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement9" placeholder=""
                            name="safetyRequirement9" >{{SafetyRequirements.textField7}}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td style="width: 32.66%;padding: 0px;">
          <table style="width: 100%;background: #feff99;border-left: 1px solid #000;">
            <tbody>
              <tr style="border-bottom: 1px solid #000;height: 57px;">
                <td colspan="2" style="text-align: center;">
                  <p style="font-size: 10px;"><b>Personal Protective Equipment Needed</b></p>
                  
                </td>
              </tr>

              <tr>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.safetyHelmet%} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Safety helmet</p></label>
                  </div>
                </td>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;"  {% if SafetyRequirements.earProtector%} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Ear protectors</p></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.safetyShoes%} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Safety shoes</p></label>
                  </div>
                </td>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.breathingAid
                      %} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Breathing Aid</p></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.protectiveClothing%} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Protective Clothing</p></label>
                  </div>
                </td>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.seatbelt%} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Seatbelt</p></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.bodyProtector%} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Body Protector</p></label>
                  </div>
                </td>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.eyeProtector%} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Eye protector</p></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.gloves
                      %} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Gloves</p></label>
                  </div>
                </td>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.strapsBelts%} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Strap/Belt</p></label>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.respiratoryProtector%} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Respiratory Protector</p></label>
                  </div>
                </td>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.othersPleaseSpecify
                      %} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Others, please specify</p></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.faceProtector
                      %} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Face Protector</p></label>
                  </div>
                </td>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.safetyHelme%} checked {% endif %}  class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;"></p></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="width: 50%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 5px 10px !important;" {% if SafetyRequirements.spectacles%} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something">
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Spectacles</p></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2" >
                  <p style="font-size: 12px;font-weight: 500;">Note: Gas Test is carried out if the excavation depth is more than 1.25 meters (HSE Gas Tester measures toxic gas and O2) </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  
  <div class="page-break"></div>
  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;"><b>WARNING !! PROCEDURE IN AN EMERGENCY OR FIRE ALARM SOUNDS</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #feff99;padding: 0 1rem;">
          <p style="font-size: 10px;font-weight: 500;">1. Stop all work, withdraw all Workers who work in confined spaces or heights.</p>
          <p style="font-size: 10px;font-weight: 500;">2. Turn off all driving machinery, electrical equipment and cover the Acetylene / Propane gas cylinder.</p>
          <p style="font-size: 10px;font-weight: 500;">3. Stop using extinguishing water and make sure the workplace is safe to leave.</p>
          <p style="font-size: 10px;font-weight: 500;">4. Immediately go to the assembly point for evacuation (Assembly Point).</p>
          <p style="font-size: 10px;font-weight: 500;">5. The nearest Assembly Point is at 6</p>
          <p style="font-size: 10px;font-weight: 500;">6.Return this SIKA HOT to the Authorized Operations Officer (GSI).</p>
          <p style="font-size: 10px;font-weight: 500;">7. In case of an emergency, call tel.</p>
          <p style="font-size: 10px;font-weight: 500;">8. If it is necessary to consult on safety aspects, please contact the Safety inspector area</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>Section 3:Authorization for Preventive Measures Against Equipment Damage</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #ccffcc;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;">After I have checked and researched the drawings and the location where the heavy equipment is going to
            be excavated or passed, the work can be carried out with the following requirements:</p>
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
        <td style="background: #ccffcc;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;">I understand and comply with all precautions and Good House Keeping (GHK) before,
            during the work carried out and will contact the authorized Operations Officer (GSI) when work begins.
          </p>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;padding-top: 10px;">Authorized Technician</p>
            <p style="font-size: 10px;font-weight: 500;padding-top: 10px;padding-bottom: 10px;">Name :{{AuthorizationAcceptance.name5}}</p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>Section 5: Handover by Technician</b></p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td style="padding: 0px;padding-left: 10px;height:60px">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px 5px 0px !important;" {% if AuthorizationAcceptance.theWorkHasBeenCompletedAllMaterialsAndEquipmentAreReadyToOperateInASafeConditionAndTheWorkAreaHasBeenCleaned%} checked {% endif %} class="form-check-input" type="checkbox" id="confinedspace" name="confinedspace"
              value="something">
            <label class="form-check-label">
              <p style="font-size: 10px;font-weight: 500;margin: 0;">The work has been completed, all materials and equipment are ready to operate in a safe condition and the work area has been cleaned</p>
            </label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px 5px 0px !important;" {% if AuthorizationAcceptance.notYetCompletedAndTheConditionsAreAsFollows %} checked {% endif %}  class="form-check-input" type="checkbox" id="confinedspace" name="confinedspace"
              value="something">
            <label class="form-check-label">
              <p style="font-size: 10px;font-weight: 500;margin: 0;">Not yet completed and the conditions are as follows:</p>
            </label>
          </div>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;margin: 0;padding-top: 20px;padding-bottom: 20px;">Name :{{AuthorizationAcceptance.name8}}</p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>Section 6: Re-admission by Operations Officer / GSI</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #feff99;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;">I have checked the equipment, materials and workplace and agree to the conditions
          </p>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;">Name :{{AuthorizationAcceptance.name6}}</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="border: 1px solid #000;border-top: none;width: 100%;" >
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
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.excavationdate}}</p>
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
          <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.excavationtime}}</p>
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
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.name12 }}</p>
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
          <td style="padding: 0px;background: #feff99;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">
            <img src={{item.img}} class="logo" style="width: 36%;max-width: 100%;padding-top: 5px;" />
            </p>
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
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.name2}}</p>
          </td>
        {% endfor %}
      </tr>
      {% endfor %}
    </tbody>
  </table>
  </main>
</div>

</div>`;
