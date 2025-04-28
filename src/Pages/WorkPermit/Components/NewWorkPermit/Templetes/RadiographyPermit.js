export const RadiographyPermit = `
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
<tr>
        <td colspan="3">
          <h4 style="text-align: center;"><b>PT PERTAMINA ( PERSERO ) REFINERY</b></h4>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="width: 25%;">&nbsp;</td>
        <td style="width: 50%;padding: 30px 0;text-align: center;">
          <h4 class="flex align-center justify-center center">
          <b><u>RADIATION WORK LICENSE</u><br>
          (RADIOGRAPHY PERMIT)</b></br>
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
  <table style="border: 1px solid #000;width: 100%;">
    <tbody>
      
      <tr style="background: #fff;border-bottom: 1px solid #000;">
        <td colspan="3"><p><b>Section 1: Job Application (Technician)</b></p></td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="2" style="width: 25%;">
          <table class="w-100">
            <tbody>
              <tr>
                <td style="width: 25%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.new_radiography == "0" %} checked {% endif %} {% if JobApplication.new_radiography == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="new" name="new" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">New</p></label>
                  </div>
                </td>
                <td style="width: 25%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.new_radiography == "1" %} checked {% endif %}  class="form-check-input" type="checkbox" id="extend" name="extend" value="something" >
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
              <tr>
                <td colspan="4" style="padding: 0 0.5rem;">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;">This permission is valid from:{{From_Hours}} </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding: 0 0.5rem;">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;">Date :{{extraDetails.validFrom.date}} </p>
                  </div>
                </td>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;">up to: {{extraDetails.validTo.date}} </p>
                  </div>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td style="padding: 0 0.5rem;">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;">O'clock:{{extraDetails.validTo.time}}</p>
                  </div>
                </td>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;">up to: {{extraDetails.validTo.time}} </p>
                  </div>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table> 
        </td>
        <td class="bor" style="width: 25%;background: #fff;padding: 0 0.5rem;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">Main Permit No:{{JobApplication.mainPermitNo}} </p>
          <p style="font-size: 10px;font-weight: 500;">No. Register:{{extraDetails.number}}</p>
          <p style="font-size: 10px;font-weight: 500;">date registered:{{extraDetails.date}}</p>
          <p style="font-size: 10px;font-weight: 500;">Work Order (As Applicable): {{extraDetails.workOrder}}</p>
          <p style="font-size: 10px;font-weight: 500;">Tag Number: {{JobApplication.mainTag}}</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4">
          <p style="font-size: 10px;font-weight: 500;">Job Title : {{extraDetails.title}} </p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4">
          <p style="font-size: 10px;font-weight: 500;">Job Location : {{extraDetails.area}}</p>
        </td>
      </tr>  
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4">
          <p style="font-size: 10px;font-weight: 500;">Zones : {{extraDetails.zone}} </p>
        </td>
      </tr>  
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4">
          <p style="font-size: 10px;font-weight: 500;">System: {{extraDetails.system}}</p>
        </td>
      </tr>  
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4">
          <p style="font-size: 10px;font-weight: 500;">Discipline : {{extraDetails.discipline}}</p>
        </td>
      </tr>  
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4">
          <p style="font-size: 10px;font-weight: 500;">Job Description: {{extraDetails.description}}</p>
        </td>
      </tr>  
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="width: 100%;">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td style="width: 60%">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;">Work Executor:{{Work Executor}} </p>
                  </div>
                </td>
                <td style="width: 20%">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 0px 5px !important;" {% if JobApplication.pertamina %} checked {% endif %} class="form-check-input" type="checkbox" id="pertamina" name="pertamina" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;">Pertamina</p></label>
                  </div>
                </td>
                <td style="width: 20%">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 0px 5px !important;" {% if JobApplication.partyIii %} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;">Third party</p></label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td> 
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4">
          <p style="font-size: 10px;font-weight: 500;">Duration / Length of Work (Days):{{JobApplication.durationLengthOfWork1}}</p>
        </td>
      </tr> 
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4">
          <p style="font-size: 10px;font-weight: 500;">Number of workers:
          {{JobApplication.noContractProject1}}</p>
        </td>
      </tr> 
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4">
          <p style="font-size: 10px;font-weight: 500;">No contract/project:{{JobApplication.noContractProject}}</p>
        </td>
      </tr> 
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="width: 100%;">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td style="width: 40%">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;">ZRA & Kind of Equipment: </p>
                  </div>
                </td>
                <td style="width: 20%">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.gammaCamera %} checked {% endif %} class="form-check-input" type="checkbox" id="pertamina" name="pertamina" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;">Gamma Camera</p></label>
                  </div>
                </td>
                <td style="width: 20%">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.not %} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;">X-Ray Machine</p></label>
                  </div>
                </td>
                <td style="width: 20%">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.of %} checked {% endif %}  class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;">Tracer</p></label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="1">
          <p style="font-size: 10px;font-weight: 500;">Size activity resources to be used:{{JobApplication.sizeActivityResourcesToBeUsed}}</p>
        </td>
        <td colspan="2">
          <p style="font-size: 10px;font-weight: 500;">kVp:{{JobApplication.kVp}}</p>
        </td>
      </tr> 
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="1">
          <p style="font-size: 10px;font-weight: 500;">Number of radiography use points:{{JobApplication.numberOfRadiographyUsePoints}}</p>
        </td>
        <td colspan="2">
          <p style="font-size: 10px;font-weight: 500;">Display length:
          {{JobApplication.displayLength}}</p>
        </td>
      </tr>
    </tbody>
  </table> 

  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td style="width: 70%;">
          <p style="font-size: 12px;font-weight: 500;"><b>TO
          </b></p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 12px;font-weight: 500;"><b>Serial number</b></p>
        </td>
        <td style="width: 10%;border-left: 1px solid #000;text-align: center;">
          <p style="font-size: 12px;font-weight: 500;">Yes / No</p>
        </td>
        
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">1.Equipment can be operated remotely</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField}}</p>
        </td>
        
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true}  style="margin: 0 5px !important;" {% if SafetyRequirements.EquipmentCanBeOperatedRemotely %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement7No" name="safetyRequirement7No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">2.Fire Extinguisher</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField1}}</p>
        </td>
        
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.FireExtinguisher %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement8No" name="safetyRequirement8No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">3.Relating Isolation Description</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField2}}</p>
        </td>
        
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.RelatingIsolationDescription%} checked {% endif %}   class="form-check-input" type="checkbox" id="safetyRequirement9No" name="safetyRequirement9No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">4.Affected Instrumentation System bypassed</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField3}}</p>
        </td>
       
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.AffectedInstrumentationSystemBypassed %} checked {% endif %}   class="form-check-input" type="checkbox" id="safetyRequirement10No" name="safetyRequirement10No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">5. Area Entrance Permit</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField4}}</p>
        </td>
        
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.AreaEntrancePermit %} checked {% endif %}   class="form-check-input" type="checkbox" id="safetyRequirement11No" name="safetyRequirement11No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">6.Scaffolding Installation</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField5}}</p>
        </td>
       
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.ScaffoldingInstallation %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement12No" name="safetyRequirement12No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">7.Barriers and Radiation Hazard Signs must be placed at all entrances to restricted areas (radiation work areas)</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField6}}</p>
        </td>
       
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.BarriersAndRadiationHazardSignsMustBePlacedAtAllEntrancesToRestrictedAreasRadiationWorkAreas %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement13No" name="safetyRequirement13No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">8.The area must be free from unauthorized/authorized people</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField7}}</p>
        </td>
       
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.TheAreaMustBeFreeFromUnauthorizedAuthorizedPeople %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement14No" name="safetyRequirement14No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">9. A flashing yellow light should be installed on the barrier fence</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField8}}</p>
        </td>
       
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.AFlashingYellowLightShouldBeInstalledOnTheBarrierFence %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement15No" name="safetyRequirement15No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">10.A flashing red light should be installed at the radiation source</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField9}}</p>
        </td>
       
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.AFlashingRedLightShouldBeInstalledAtTheRadiationSource %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement16No" name="safetyRequirement16No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">11.Radio connection only with CCR</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField10}}</p>
        </td>
      
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.RadioConnectionOnlyWithCcr %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement17No" name="safetyRequirement17No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">12.Safe entry and exit routes must be provided to and from the radiation source</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField11}}</p>
        </td>
       
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;"  {% if SafetyRequirements.SafeEntryAndExitRoutesMustBeProvidedToAndFromTheRadiationSource %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement18No" name="safetyRequirement18No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">13.The reading of the measurement results on the barrier fence should not be more than 0.75 mR/hour in the air</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField12}}</p>
        </td>
       
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;"  {% if SafetyRequirements.TheReadingOfTheMeasurementResultsOnTheBarrierFenceShouldNotBeMoreThan075MrHourInTheAir %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement19No" name="safetyRequirement19No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">14. Authorized workers wear film badge pen dosimeter</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField13}}</p>
        </td>
       
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.AuthorizedWorkersWearFilmBadgePenDosimeter %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement20No" name="safetyRequirement20No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">15.A surveymeter must be in place to measure radiation exposure</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField14}}</p>
        </td>
        
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;"  {% if SafetyRequirements.SurveymeterMustBeInPlaceToMeasureRadiationExposure %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement21No" name="safetyRequirement21No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">16.The radiation exposure limit outside the restricted area is less than 0.75 MR/H</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField15}}</p>
        </td>
       
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.TheRadiationExposureLimitOutsideTheRestrictedAreaIsLessThan075MrH %} checked {% endif %}   class="form-check-input" type="checkbox" id="safetyRequirement22No" name="safetyRequirement22No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">17.The X-Ray machine is connected by a grounding wire</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField16}}</p>
        </td>
       
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;"  {% if SafetyRequirements.TheXRayMachineIsConnectedByAGroundingWire %} checked {% endif %}   class="form-check-input" type="checkbox" id="safetyRequirement23No" name="safetyRequirement23No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">18.Operator has a valid radiograph certificate from BATAN
          Others
          </p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField17}}</p>
        </td>
       
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;"  {% if SafetyRequirements.OperatorHasAValidRadiographCertificateFromBatanOthers %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement24No" name="safetyRequirement24No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">19. Safe Job Analysis</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField18}}</p>
        </td>
       
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.SafeJobAnalysi %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement25No" name="safetyRequirement25No" value="something" >
        </td>
      </tr>
      <tr>
        <td style="width: 70%;">
          <p style="font-size: 10px;font-weight: 500;">20.Isolation</p>
        </td>
        <td style="width: 20%;border-left: 1px solid #000;">
          <p style="font-size: 10px;font-weight: 500;">{{SafetyRequirements.textField19}}</p>
        </td>
      
        <td style="width: 5%;border-left: 1px solid #000;text-align: center;">
          <input disabled={true} style="margin: 0 5px !important;" {% if SafetyRequirements.Isolation %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement27No" name="safetyRequirement27No" value="something" >
        </td>
      </tr>
    </tbody>
  </table> 

  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="5" style="padding: 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>SPECIAL INSTRUCTIONS</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="5" style="padding: 0.5rem;">
          <p style="font-size: 10px;text-align: center;margin: 0;"><b>Personal Protective Equipment Needed
          </b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="width: 20%;padding: 0px;padding-left: 10px;padding: 0.5rem;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" style="margin: 5px 10px !important;" {% if SpecialInstruction.safetyHelmet %} checked {% endif %}   class="form-check-input" type="checkbox" id="noGasOilLeaks" name="noGasOilLeaks" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Safety helmet</p></label>
          </div>
        </td>
        <td style="width: 20%;padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if SpecialInstruction.bodyProtector %} checked {% endif %} class="form-check-input" type="checkbox" id="contentOfO2" name="contentOfO2" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Body protector</p></label>
          </div>
        </td>
        <td style="width: 20%;padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if SpecialInstruction.scaffoldHarusDiberiTagging %} checked {% endif %} class="form-check-input" type="checkbox" id="scaffoldTagging" name="scaffoldTagging" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Hearing protection</p></label>
          </div>
        </td>
        <td style="width: 20%;padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;"  {% if SpecialInstruction.cekSambunganKabelListrikYgDigunakan %} checked {% endif %} class="form-check-input" type="checkbox" id="fuseOfElectricTool" name="fuseOfElectricTool" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Film badge or/meter</p></label>
          </div>
        </td>
        <td style="width: 20%;padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if SpecialInstruction.instalUlangSemuaIsolasiYgDiduka %} checked {% endif %} class="form-check-input" type="checkbox" id="contentOfToxicGas" name="contentOfToxicGas" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">eye protection</p></label>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="padding: 0px;padding-left: 10px;padding: 0.5rem;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if SpecialInstruction.safetyShoes%} checked {% endif %} class="form-check-input" type="checkbox" id="grinderMustUseCover" name="grinderMustUseCover" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Safety shoes</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if SpecialInstruction.cekKandunganToxicGasH2SCo %} checked {% endif %}  class="form-check-input" type="checkbox" id="connectionOfElectricCable" name="connectionOfElectricCable" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Gloves</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if SpecialInstruction.faceShield
              %} checked {% endif %} class="form-check-input" type="checkbox" id="reinstallAllIsolation" name="reinstallAllIsolation" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Face shield
            </p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if SpecialInstruction.pergunakanSteamUntukProteksi %} checked {% endif %} class="form-check-input" type="checkbox" id="steamForProtection" name="steamForProtection" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Temporary lighting --</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if SpecialInstruction.kabelMassaDekatDgnTitikLas %} checked {% endif %} class="form-check-input" type="checkbox" id="gastestHasBeenDone" name="gastestHasBeenDone" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Respiratory aids</p></label>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="padding: 0px;padding-left: 10px;padding: 0.5rem;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if SpecialInstruction.protectiveClothing %} checked {% endif %} class="form-check-input" type="checkbox" id="ventilationBlowerMustBeDone" name="ventilationBlowerMustBeDone" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Protective clothes</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if SpecialInstruction.kabelMassaDekatDgnTitikLas %} checked {% endif %} class="form-check-input" type="checkbox" id="cableMassCloseToWeldingPoint" name="cableMassCloseToWeldingPoint" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Respiratory protection</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if SpecialInstruction.monitoringGasRutinSelamaPekerjaan %} checked {% endif %} class="form-check-input" type="checkbox" id="routineGasMonitoringDuringWork" name="routineGasMonitoringDuringWork" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Survey meters</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if SpecialInstruction.accordingToClassification %} checked {% endif %} class="form-check-input" type="checkbox" id="coverSewerDrainSumpWithFireBlanket" name="coverSewerDrainSumpWithFireBlanket" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">according to classification</p></label>
          </div>
        </td>
        <td style="padding: 0px;padding-left: 10px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if SpecialInstruction.kabelMassaTdkDisambungDgnUnit %} checked {% endif %} class="form-check-input" type="checkbox" id="massCableNotConnectedToUnit" name="massCableNotConnectedToUnit" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Seatbelt</p></label>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="page-break"></div>
  <table style="border: 1px solid #000;border-top: none;width: 100%;" class="sectionradiography">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td style="padding: 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>Section 3:Authorization</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="padding: 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">I have checked the work location, tools, work to be carried out and the condition is safe and allowed to start work</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Authorized Operating Officer (GSI)</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Name:{{AuthorizationAcceptance.name2}}</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="padding: 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>Section 4: Reception</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="padding: 1rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">Authorized Technician</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">I understand and comply with all precautions and good house keeping before and during the work and will contact the Operations officer who. </p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;">authorized when work begins</p>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;padding-top: 15px;">Name:{{AuthorizationAcceptance.name6}}</p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="padding: 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>5: Handover by the Technician</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="padding: 1rem;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 0 5px !important;" {% if AuthorizationAcceptance.theWorkHasBeenCompletedAllMaterialsAndEquipmentAreReadyToOperateInASafeConditionAndTheWorkAreaHasBeenCleaned %} checked {% endif %}  class="form-check-input" type="checkbox" id="Safetyregulations" name="Safetyregulations" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">The work has been completed, all materials and equipment are ready to operate in a safe condition and the work area has been cleaned</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px !important;" {% if AuthorizationAcceptance.notYetCompletedAndTheConditionsAreAsFollows %} checked {% endif %} class="form-check-input" type="checkbox" id="Safetyregulations" name="Safetyregulations" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">It has not been completed yet and the conditions are as follows:</p></label>
          </div>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;padding-top: 15px;">Name:{{AuthorizationAcceptance.name7}}</p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="padding: 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>Section 6: Acceptance by the Operations Office / GSI</b></p>
        </td>
      </tr>
      <tr>
        <td style="padding: 1rem;">
          <p style="font-size: 10px;margin: 0;">I have checked the equipment, materials and workplace and agree to the conditions.</p>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;padding-top: 15px;">Name:{{AuthorizationAcceptance.name8}}</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="7" class="center">
          <p style="font-size: 12px;text-align: center;"><b>Radiation re-measurement</b></p>
        </td>
      </tr>
      {% for data in GasInspection %}
      <tr style="border-bottom: 0.5px solid #000;">
      {% for item in data.data %}
        {%- if forloop.index0 == 0 -%}
        <td style="padding: 0px;padding-left: 10px;">
          <p style="font-size: 10px;font-weight: 500;">Measurments Radiation</p>
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
          <td style="padding: 0px;padding-left: 10px;width: 150px;">
            <p style="font-size: 10px;font-weight: 500;">Reading</p>
          </td>
          {%- endif -%}
          <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.Reading}}</p>
          </td>
        {% endfor %}
      </tr>
      <tr style="border-bottom: 1px solid #000;">
      {% for item in data.data %}
        {%- if forloop.index0 == 0 -%}
        <td style="padding: 0px;padding-left: 10px;width: 10%;">
          <p style="font-size: 10px;font-weight: 500;">Date</p>
        </td>
        {%- endif -%}
        <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
          <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.dateTime36}}</p>
        </td>
      {% endfor %}
      </tr>
      <tr style="border-bottom: 0.5px solid #000;">
        {% for item in data.data %}
          {%- if forloop.index0 == 0 -%}
          <td style="padding: 0px;padding-left: 10px;">
            <p style="font-size: 10px;font-weight: 500;">Name&Initials</p>
          </td>
          {%- endif -%}
          <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
            <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.textField15}}</p>
          </td>
        {% endfor %}
      </tr>
      {% endfor %}
    </tbody>
  </table>
  </main>
</div>

</div>`;
