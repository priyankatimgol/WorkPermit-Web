export const RoadClosure = `
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
<header style="width: 100%;padding: 0 10px;" class="roadclosureheader">
  <table class="" style="border: 1px solid #000 !important;width: 100%;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td style="width: 25%;">
          <h5></h5>
        </td>
        <td style="width: 50%;background: #fff;padding: 30px 0;text-align: center;">
          <h4 class="flex align-center justify-center center">
            <b>STATE OIL & GAS MINING COMPANY</b>
          </h4>
          <h5 class="flex align-center justify-center center">
            <b>PT PERTAMINA (PERSERO)</b></br>
            <b>( Status: {{extraDetails.statusName}}) </b>
          </h5>
        </td>
        <td style="width: 25%;">
          <img src="../Assest/LOGOTEMP.jpg" class="logo" style="width: 100%;max-width: 100%;padding-top: 5px;margin-left: -5px!important;" />
        </td>
      </tr>
    </tbody>
  </table>
</header>
<main style="padding:0px 10px;" class="roadclosuresection">
  <table class="roadclosuresection1" style="border: 1px solid #000 !important;width: 100%;border-top:none!important;">
    <tbody>
      <tr>
        <td colspan="3" style="border-bottom: 1px solid rgb(255, 255, 255);border-bottom: 1px solid #000;">
          <h4 style="text-align: center;padding: 15px 0;">
            <b>ROAD CLOSURE PERMISSION</b>
          </h4>
          <div class="container">
            <div class="row">
              <div class="col-8">
                <p style="font-size: 10px;font-weight: 500;">
                This permit is valid from:
                </p>
              </div>
              <div class="col-4">
                <p style="font-size: 10px;font-weight: 500;">
                  Main Permit No: {{JobApplication.mainPermitNo}}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <p style="font-size: 10px;font-weight: 500;">
                  Date: {{extraDetails.validFrom.date}}
                </p>
              </div>
              <div class="col-4">
                <p style="font-size: 10px;font-weight: 500;">
                  up to: {{extraDetails.validTo.date}}
                </p>
              </div>
              <div class="col-4">
                <p style="font-size: 10px;font-weight: 500;">
                  No. Register: {{extraDetails.number}}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <p style="font-size: 10px;font-weight: 500;">
                  O'clock : {{extraDetails.validFrom.time}}
                </p>
              </div>
              <div class="col-4">
                <p style="font-size: 10px;font-weight: 500;">
                  up to: {{extraDetails.validTo.time}}
                </p>
              </div>
              <div class="col-4">
                <p style="font-size: 10px;font-weight: 500;">
                  date registered: {{extraDetails.createDate}}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-4"></div>
              <div class="col-4"></div>
              <div class="col-4">
                <p style="font-size: 10px;font-weight: 500;">
                Work Order (As Applicable): {{extraDetails.workOrder}}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-4"></div><div class="col-4"></div>
              <div class="col-4">
                <p style="font-size: 10px;font-weight: 500;">
                  Tag Number: {{JobApplication.mainTag}}
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr style="padding-bottom: 20px;">
        <td colspan="4">
          <div class="container">
            <div class="row">
              <div class="col" style="display: flex;align-items: center; position: relative;">
                <input disabled={true} style="margin: 5px 10px !important;"  {% if JobApplication.road_clouser == "0" %} checked {% endif %}  {% if JobApplication.road_clouser == undefined %} checked {% endif %}   class="form-check-input" type="checkbox" id="safetyRequirement9No" name="safetyRequirement9No" value="something" >
                <p style="font-size: 10px;font-weight: 500;margin: 0;">FULL CLOSED</p>
              </div>
              <div class="col" style="display: flex;align-items: center; position: relative;">
                <input disabled={true} style="margin: 5px 10px !important;"  {% if JobApplication.road_clouser == "1" %} checked {% endif %}     class="form-check-input" type="checkbox" id="safetyRequirement9No" name="safetyRequirement9No" value="something" >
                <p style="font-size: 10px;font-weight: 500;margin: 0;">CLOSED</p>
              </div>
              <div class="col" style="display: flex;align-items: center; position: relative;">
                <input disabled={true} style="margin: 5px 10px !important;"  {% if JobApplication.road_clouser == "2" %} checked {% endif %} s  class="form-check-input" type="checkbox" id="safetyRequirement9No" name="safetyRequirement9No" value="something" >
                <p style="font-size: 10px;font-weight: 500;margin: 0;">Partially CLOSED</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="container">
            <div class="row">
              <div class="col-6">
                <p style="font-size: 10px;font-weight: 500;">Job Title : {{extraDetails.title}}</p>
              </div>
              <div class="col-6">
                <p style="font-size: 10px;font-weight: 500;">Zones: {{extraDetails.zone}}</p>
              </div>
              <br/>
              <div class="col-6">
                <p style="font-size: 10px;font-weight: 500;">System : {{extraDetails.system}}</p>
              </div>
              <div class="col-6">
                <p style="font-size: 10px;font-weight: 500;">Discipline : {{extraDetails.discipline}}</p>
              </div>
              <br/>
              <div class="col-6">
                <p style="font-size: 10px;font-weight: 500;">Permit Holder: {{JobApplication.permitHolder1}}</p>
              </div>
              <div class="col-6">
                <p style="font-size: 10px;font-weight: 500;">Part : {{JobApplication.part}}</p>
              </div>
              <br/>
              <div class="col-6">
                <p style="font-size: 10px;font-weight: 500;">Name / Street Number : {{JobApplication.nameStreetNumber}}</p>
              </div>
              <div class="col-6">
                <p style="font-size: 10px;font-weight: 500;">Area : {{extraDetails.area}}</p>
              </div>
              <br/>
              <div class="col-6">
                <p style="font-size: 10px;font-weight: 500;">Pack. Started / Date: {{JobApplication.packStartedDate}}</p>
              </div>
              <div class="col-6">
                <p style="font-size: 10px;font-weight: 500;">Finished : {{JobApplication.done1}}</p>
              </div>
              <br/>
              <div class="col-6">
                <p style="font-size: 10px;font-weight: 500;">Job description : {{extraDetails.description}}</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="4" style="padding-top: 30px;">
          <div class="container">
            <div class="row">
              <div class="col-5">
                <p style="font-size: 10px;font-weight: 500;">Job Safety Analysis :</p>
              </div>
              <div class="col" style="display: flex;align-items: center; position: relative;">
                <input disabled={true} style="margin: 5px 10px !important;" {% if JobSafty.new  %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement9No" name="safetyRequirement9No" value="something" >
                <p style="font-size: 10px;font-weight: 500;margin: 0;">NEW</p>
              </div>
              <div class="col" style="display: flex;align-items: center; position: relative;">
                <input disabled={true} style="margin: 5px 10px !important;" {% if JobSafty.extension  %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement9No" name="safetyRequirement9No" value="something" >
                <p style="font-size: 10px;font-weight: 500;margin: 0;">EXTEND TO</p>
              </div>
              <div class="col" style="display: flex;align-items: center; position: relative;">
              <p disabled={true} style="font-size: 10px;font-weight: 500;margin: 0;">NUMBER: {{JobSafty.number1}} </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr style="background-color:#fff;border-bottom: 1px solid rgb(255, 255, 255);">
        <td colspan="4">
          <h6 style="font-size: 12px;text-align:center;padding-top: 20px;padding-bottom: 30px;">NEEDED WORK SAFETY REQUIREMENTS</h6>
          <div class="container">
            <div class="row">
              <div class="col-4" style="display: flex;align-items: center; position: relative;">
                <input disabled={true} style="margin: 5px 10px !important;" {% if NeedWorkSafty.closedRoadSign %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement9No" name="safetyRequirement9No" value="something" >
                <p style="font-size: 10px;font-weight: 500;margin: 0;">Closed Road Sign</p>
              </div>
              <div class="col-4" style="display: flex;align-items: center; position: relative;">
                <input disabled={true} style="margin: 5px 10px !important;" {% if NeedWorkSafty.turnSign %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement9No" name="safetyRequirement9No" value="something" >
                <p style="font-size: 10px;font-weight: 500;margin: 0;">Turn Sign</p>
              </div>
              <div class="col-4" style="display: flex;align-items: center; position: relative;">
                <input disabled={true} style="margin: 5px 10px !important;" {% if NeedWorkSafty.warningLight %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement9No" name="safetyRequirement9No" value="something" >
                <p style="font-size: 10px;font-weight: 500;margin: 0;">Warning Light</p>
              </div>
              <div class="col-4" style="display: flex;align-items: center; position: relative;">
                <input disabled={true} style="margin: 5px 10px !important;" {% if NeedWorkSafty.checkbox %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement9No" name="safetyRequirement9No" value="something" >
                <p style="font-size: 10px;font-weight: 500;margin: 0;">Other:</p>
                <p  style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="textarea" class="form-control" id="safetyRequirement2" placeholder="" name="safetyRequirement2" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">{{NeedWorkSafty.textField}} </p>
                </td>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="4" style="border-top: 1px solid #000;">
          <div class="container" style="">
            <div class="row">
              <div class="col">
              </div>
              <div class="col" style="border-left: 1px solid #000;">
                <p style="font-size: 10px;font-size: 500;margin-bottom: 40px;">
                  Fire Officer, {{AuthorizationAcceptance.name}}
                </p>
                <p style="font-size: 10px;font-size: 500;margin-bottom: 40px;">
                      Name : {{AuthorizationAcceptance.select}}
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</main>
</div>

</div>`;
