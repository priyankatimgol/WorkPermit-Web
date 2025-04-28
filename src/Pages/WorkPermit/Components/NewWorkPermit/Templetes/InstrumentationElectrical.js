export const Instrument = `
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
<table class="" style="border: 1px solid #000 !important;width: 98.11%;margin:0px 50px;margin-left: 10px;margin-top: -7px !important;">
<tbody>
<tr>
<td colspan="3">
  <h4 style="text-align: center;"><b><u>ELECTRICAL/INSTRUMENT SAFE WORK LICENSE</u></b></h4>
  
</td>
</tr>
<tr>
<td style="width: 25%;padding: 0.5rem;">
  &nbsp;  
</td>
<td style="width: 50%;padding: 30px 0;">
  <h6 style="text-align: center">Electrical/Instrument Work Permit</h6>
  <p style="text-align: center">( Status: {{extraDetails.statusName}})</p>
</td>
<td style="width: 25%;padding: 0.5rem;">
  <img src="../Assest/LOGOTEMP.jpg" class="logo" style="width: 100%;max-width: 100%;padding-top: 5px;" />
</td>
</tr>
</tbody>
</table>
</header>
<main style="padding:0px 10px;">
  <table style="border: 1px solid #000 !important;width: 100%;">
    <tbody>
    
    </tbody>
  </table>


  <table class="instrumentsection" style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td style="width: 5%;">&nbsp;</td>
        <td style="width: 95%;border-left: 1px solid #000;">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td colspan="3" style="width: 75%;vertical-align: baseline;">
                  <table style="width: 100%;border: none;">
                    <tbody>
                      <tr>
                        <td colspan="4" style="padding: 0.5rem;">
                          <p style="margin: 0;font-size: 12px;"><b>Section 1: Job Application</b></p>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 25%;">
                          <div style="display: flex;align-items: center; position: relative;">
                            <input disabled={true} {% if JobApplication.instrument == "0" %} checked {% endif %} {% if JobApplication.instrument == undefined %} checked {% endif %}  class="form-check-input" type="checkbox" id="new" name="new" value={{hot_new}}  >
                            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">New</p></label>
                          </div>
                        </td>
                        <td style="width: 25%;">
                          <div style="display: flex;align-items: center; position: relative;">
                            <input disabled={true} {% if JobApplication.instrument == "1" %} checked {% endif %} class="form-check-input" type="checkbox" id="extend" name="extend" value="something" >
                            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">EXTEND TO</p></label>
                          </div>
                        </td>
                        <td style="width: 25%;">
                <div style="display: flex;align-items: center; position: relative;">
            <p disabled={true} style="font-size: 10px;font-weight: 500;margin: 0;">NUMBER: {{JobApplication.number1}} </p>

               </div>
              </td>
                        <td style="width: 25%;">&nbsp;</td>
                      </tr>
                      <tr>
                        <td colspan="4" style="padding: 0.5rem;">
                          <p style="margin: 0;font-size: 10px;">PERMISSION OF THIS PERMIT</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0.5rem;">
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
                      <tr style="border-bottom: 1px solid #000;">
                        <td style="padding: 0.5rem;">
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
                  <div>
                    <div class="inline-flex">
                      <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0px;">Main Permit No: {{JobApplication.mainPermitNo1}}</p>
                      <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0px;">No. Register: {{extraDetails.number}}</p>
                      <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0px;">date Registered:  {{extraDetails.date}}</p>
                      <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0px;">Work Order (As Applicable): {{extraDetails.workOrder}}</p>
                      <p style="font-size: 10px;font-weight: 500;margin: 0;padding: 5px 0px;">Tag Number: {{JobApplication.mainTag}}</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0.5rem;">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">Job Location: {{extraDetails.zone}} </p>
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0.5rem;">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">Job description: {{extraDetails.description}} </p>
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0.5rem;">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">Job Title : {{extraDetails.title}} </p>
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0.5rem;">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">System : {{extraDetails.system}}</p>
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0.5rem;">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">Discipline : {{extraDetails.discipline}}</p>
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0.5rem;">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">Zone : {{extraDetails.zone}} </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding: 0.5rem;">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">Work Executor : {{JobApplication.work}}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      
      <tr style="border-bottom: 1px solid #000;">
        <td>&nbsp;</td>
        <td style="border-left: 1px solid #000;">
          <table style="width: 100%;">
            <tbody>
              <tr style="border-bottom: 1px solid #000;">
                <td colspan="5">
                  <p style="font-size: 12px;font-weight: 500;"><b>Section 2:</b> Security Requirements</p>
                </td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;">A. Area preparation</p>
                </td>
                <td style="width: 10%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <p style="font-size: 10px;font-weight: 500;">YES / NO</p>
                </td>
               
                <td style="width: 20%;border-left: 1px solid #000;border-bottom: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;">ADDITIONAL INFORMATION</p>
                </td>
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.additionalInformation %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">1. Isolation of energy sources (on site)</p>
                </td>
                
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.IsolationOfEnergySourcesOnSite %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">
                  <p disabled={true} style="height: 23px !important;margin: inherit !important;" type="textarea"  class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;" >{{SafetyRequirements.textArea}}</p>
                  </td>
                <td style="width: 5%;text-align: center;">
                </td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">2. Remote Control isolated (on site)</p>
                </td>
               
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.RemoteControlIsolatedOnSite %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">3. Installation of GSI labels</p>
                </td>
               
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.InstallationOfGsiLabels %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">4. Suitable inlet and outlet are provided</p>
                </td>
                
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.SuitableInletAndOutletAreProvided %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">5. Inert gas is not activated</p>
                </td>
                
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.InertGasIsNotActivated %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">6. Requires another work permit</p>
                </td>
                
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.RequiresAnotherWorkPermit %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">7. Secure the room from flammable materials</p>
                </td>
              
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.SecureTheRoomFromFlammableMaterials %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">8. Job Safety Analysis</p>
                </td>
               
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.JobSafetyAnalysis %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
             
            </tbody>
          </table>
        </td>
      </tr>

      <tr style="border-bottom: 1px solid #000;">
        <td>&nbsp;</td>
        <td style="border-left: 1px solid #000;">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;">B. Security / Isolation of work</p>
                </td>
                <td style="width: 10%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <p style="font-size: 10px;font-weight: 500;">YES / NO</p>
                </td>
              
                <td style="width: 20%;border-left: 1px solid #000;border-bottom: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;">ADDITIONAL INFORMATION</p>
                </td>
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.additionalInformation1 %} checked {% endif %}  class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">1. Isolation of energy sources (at substation)</p>
                </td>
                
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.IsolationOfEnergySourcesAtSubstation %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">   
                <p disabled={true} style="height: 23px !important;margin: inherit !important;" type="textarea" ;border: none !important, class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{SafetyRequirements.textArea2}}</p>
                </td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">2. Grounding / Bounding</p>
                </td>
               
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.IsolationOfEnergySourcesAtSubstation1 %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">3. Remote Control diisolasi (substation)</p>
                </td>
               
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.RemoteControlDiisolasiSubstation %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">4. Worked in a state of electricity</p>
                </td>
               
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.WorkedInAStateOfElectricity %} checked {% endif %}  class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">5. Installation of AT labels</p>
                </td>
                
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.InstallationOfAtLabels %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">6. Electrical special PPE</p>
                </td>
               
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.ElectricalSpecialPpe %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">7. Conducted joint inspections related to safety</p>
                </td>
               
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.ConductedJointInspectionsRelatedToSafety %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">8. Conducted a test of safety short circuit leakage (Short Circuit) and the danger of electric shock</p>
                </td>
               
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.ConductedATestOfSafetyShortCircuitLeakageShortCircuitAndTheDangerOfElectricShock %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">9. Check whether the cables are in accordance with and in good and safe condition</p>
                </td>
              
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.CheckWhetherTheCablesAreInAccordanceWithAndInGoodAndSafeCondition %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width: 65%;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;"> 10. Check the lighting so that it is protected by glass and baskets.</p>
                </td>
                
                <td style="width: 5%;border-left: 1px solid #000;border-bottom: 1px solid #000;text-align: center;">
                  <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.CheckTheLightingSoThatItIsProtectedByGlassAndBaskets %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                </td>
                <td style="width: 20%;border-left: 1px solid #000;">&nbsp;</td>
                <td style="width: 5%;text-align: center;">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr style="border-bottom: 1px solid #000;">
        <td>&nbsp;</td>
        <td style="border-left: 1px solid #000;">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td rowspan="2" style="width: 65%;border-bottom: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;">OTHER SAFETY MEASURES TO BE IMPLEMENTED: (Electrical and Instrument)</p>
                </td>
                <td colspan="4" style="border-left: 1px solid #000;border-bottom: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;">Required Protective Equipment</p>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="border-left: 1px solid #000;border-bottom: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;">Safety helmet</p>
                </td>
                <td colspan="2" style="border-left: 1px solid #000;">
                  <table style="width: 100%;">
                    <tbody> 
                      <tr style="border-bottom: 1px solid #000;">
                        <td style="width: 20%;text-align: center;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.safetyHelmet2 %} checked {% endif %}  class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                        </td>
                        <td style="width: 60%;border-left: 1px solid #000;">
                          <p style="font-size: 10px;font-weight: 500;">Hearing protection</p>
                        </td>
                        <td style="width: 20%;text-align: center;border-left: 1px solid #000;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.hearingProtection2 %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="2" style="border-left: 1px solid #000;border-bottom: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;">Safety shoes</p>
                </td>
                <td colspan="2" style="border-left: 1px solid #000;">
                  <table style="width: 100%;">
                    <tbody> 
                      <tr style="border-bottom: 1px solid #000;">
                        <td style="width: 20%;text-align: center;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.safetyShoes2 %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                        </td>
                        <td style="width: 60%;border-left: 1px solid #000;">
                          <p style="font-size: 10px;font-weight: 500;">Face shield</p>
                        </td>
                        <td style="width: 20%;text-align: center;border-left: 1px solid #000;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.faceShield2 %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="2" style="border-left: 1px solid #000;border-bottom: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;">Protective clothings</p>
                </td>
                <td colspan="2" style="border-left: 1px solid #000;">
                  <table style="width: 100%;">
                    <tbody> 
                      <tr style="border-bottom: 1px solid #000;">
                        <td style="width: 20%;text-align: center;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.protectiveClothing2 %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                        </td>
                        <td style="width: 60%;border-left: 1px solid #000;">
                          <p style="font-size: 10px;font-weight: 500;">eye protection</p>
                        </td>
                        <td style="width: 20%;text-align: center;border-left: 1px solid #000;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.eyeProtector2 %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="2" style="border-left: 1px solid #000;border-bottom: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;">Body protector</p>
                </td>
                <td colspan="2" style="border-left: 1px solid #000;">
                  <table style="width: 100%;">
                    <tbody> 
                      <tr style="border-bottom: 1px solid #000;">
                        <td style="width: 20%;text-align: center;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.bodyProtectors2 %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                        </td>
                        <td style="width: 60%;border-left: 1px solid #000;">
                          <p style="font-size: 10px;font-weight: 500;">Straps/Belts</p>
                        </td>
                        <td style="width: 20%;text-align: center;border-left: 1px solid #000;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.strapBelt2 %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="2" style="border-left: 1px solid #000;border-bottom: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;">Gloves</p>
                </td>
                <td colspan="2" style="border-left: 1px solid #000;">
                  <table style="width: 100%;">
                    <tbody> 
                      <tr style="border-bottom: 1px solid #000;">
                        <td style="width: 20%;text-align: center;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.gloves2 %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                        </td>
                        <td style="width: 60%;border-left: 1px solid #000;">
                          <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                        </td>
                        <td style="width: 20%;text-align: center;border-left: 1px solid #000;">
                          <input  disabled={true} style="margin: 0 !important;" class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="2" style="border-left: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;">Respiratory protection</p>
                </td>
                <td colspan="2" style="border-left: 1px solid #000;">
                  <table style="width: 100%;">
                    <tbody> 
                      <tr>
                        <td style="width: 20%;text-align: center;">
                          <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.respiratoryProtection2 %} checked {% endif %} class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                        </td>
                        <td style="width: 60%;border-left: 1px solid #000;">
                          <p style="font-size: 10px;font-weight: 500;">&nbsp;</p>
                        </td>
                        <td style="width: 20%;text-align: center;border-left: 1px solid #000;">
                          <input disabled={true} style="margin: 0 !important;" class="form-check-input" type="checkbox" name="safetyRequirementC11No" value="something" >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td>&nbsp;</td>
        <td style="border-left: 1px solid #000;">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td colspan="5">
                  <p style="font-size: 12px;font-weight: 500;"><b>Section 3:</b> Authority</p>
                  <p style="font-size: 10px;font-weight: 500;padding-top: 20px;padding-bottom: 50px;">Name: {{AuthorizationAcceptance.select}}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr style="border-bottom: 1px solid #000;">
        <td>&nbsp;</td>
        <td style="border-left: 1px solid #000;">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td colspan="5">
                  <p style="font-size: 12px;font-weight: 500;"><b>Section 4:</b> Reception</p>
                  <p style="font-size: 10px;font-weight: 500;">I Understand And Comply With All Precautions And Good Housekeeping Before And During The Work Carried Out And Will Contact The Appropriate Operators Officer When
                  work begins.</p>
                  <p style="font-size: 10px;font-weight: 500;padding-top: 20px;padding-bottom: 50px;">Name: {{AuthorizationAcceptance.select1}}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr style="border-bottom: 1px solid #000;" >
        <td>&nbsp;</td>
        <td style="border-left: 1px solid #000;">
        <div class="page-break"></div>
          <table style="width: 100%; class="instrusection">
            <tbody>
              <tr>
                <td colspan="5">
                  <p style="font-size: 12px;font-weight: 500;"><b>Section 5:</b> Handover By Technician</p>
                  <p style="font-size: 10px;font-weight: 500;">The work has been completed and everyone involved has been notified and warned that it is no longer allowed to continue working on the equipment and that all
                  equipment and temporary grounding have been opened and the workplace is safe again.</p>
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if AuthorizationAcceptance.checkbox %} checked {% endif %} class="form-check-input" type="checkbox" id="to" name="to" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">It has not been completed yet and the conditions are as follows</p></label>
                  </div>
                  <p style="font-size: 10px;font-weight: 500;padding-top: 20px;padding-bottom: 50px;">Name: {{AuthorizationAcceptance.select2}}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr style="border-bottom: 1px solid #000;">
        <td>&nbsp;</td>
        <td style="border-left: 1px solid #000;">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td colspan="5">
                  <p style="font-size: 12px;font-weight: 500;"><b>Section 6:</b> Re-admission by Operations Officer / GSI</p>
                  <p style="font-size: 10px;font-weight: 500;">I have inspected the equipment, materials and workplace and agree with</p>
                  <p style="font-size: 10px;font-weight: 500;padding-top: 20px;padding-bottom: 50px;">Name: {{AuthorizationAcceptance.select3}}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr>
        <td colspan="2">
          <p style="font-size: 10px;font-weight: 500;">This permit will be immediately canceled, if the fire alarm sounds or there is an instruction via the public addresser system and this permit must be brought back to the control room
          (authorized official for permit extension/renewal) before workers resume.</p>
          <p style="font-size: 10px;font-weight: 500;">EMERGENCY INSTRUCTIONS</p>
          <p style="font-size: 10px;font-weight: 500;">If ordered or hear a siren sounding a sign of an emergency, stop all work, turn off the machine or equipment and immediately go to the assembly point for evacuation.</p>
        </td>
      </tr>
    </tbody>
  </table>
  </main>
</div>

</div>`;
