export const PhotographyPermit = `
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
  <table style="border: 1px solid #000 !important;width: 100%:">
    <tbody>
      <tr>
        <td colspan="3" style="width: 50%;padding: 30px 0;">
          <h4 style="text-align: center"><b><u>PERMISSION TO USE CAMERA IN REFINERY AREA</u></b></h4>
          <h4 style="text-align: center"><b>( Status: {{extraDetails.statusName}})</b></h4>
        </td>
      </tr>
      <tr>
        <td style="width: 25%;padding: 0.5rem;">
          &nbsp;
        </td>
        <td style="width: 50%;padding: 30px 0;">
          &nbsp;
        </td>
        <td style="width: 25%;padding: 0.5rem;">
          <img src="../Assest/LOGOTEMP.jpg" class="logo" style="width: 100%;max-width: 100%;padding-top: 5px;" />
        </td>
      </tr>
    </tbody>
  </table>

  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr>
        <td style="width: 25%;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} {% if JobApplication.photo == "0" %} checked {% endif %} {% if JobApplication.photo == undefined %} checked {% endif %} class="form-check-input" type="Radio" id="new" name="new" value={{hot_new}}  >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">New</p></label>
          </div>
        </td>
        <td style="width: 25%;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} {% if JobApplication.photo == "1" %} checked {% endif %} class="form-check-input" type="Radio" id="extend" name="extend" value="something" >
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
          <p style="font-size: 10px;font-weight: 500;margin: 10px 0px;">MAIN PERMIT NO : {{JobApplication.mainPermitNo}} </p>
          <p style="font-size: 10px;font-weight: 500;margin: 10px 0px;">PURPOSE / PURPOSE: {{JobApplication.purposePurpose}} </p>
          <p style="font-size: 10px;font-weight: 500;margin: 10px 0px;">JOB LOCATION: {{extraDetails.area}} </p>
          <p style="font-size: 10px;font-weight: 500;margin: 10px 0px;">ZONE: {{extraDetails.zone}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 10px 0px;">SYSTEM: {{extraDetails.system}} </p>
          <p style="font-size: 10px;font-weight: 500;margin: 10px 0px;">DISCIPLINE: {{extraDetails.discipline}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 10px 0px;">WORKER IDENTITY:</p>
        </td>
      </tr>
      <tr>
        <td colspan="4" style="padding: 10px 50px;">
          <table style="border: 1px solid #000;width: 100%;">
            <tbody>
            {% for data in GasInspection %}
            <tr style="border-bottom: 1px solid #000;">
              {% for item in data.data %}
                {%- if forloop.index0 == 0 -%}
                <td style="padding: 0px;padding-left: 10px;">
                  <p style="font-size: 10px;font-weight: 500;">NO</p>
                </td>
                {%- endif -%}
                <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.number}}</p>
                </td>
              {% endfor %}
            </tr>
            <tr style="border-bottom: 0.5px solid #000;">
              {% for item in data.data %}
                {%- if forloop.index0 == 0 -%}
                <td style="padding: 0px;padding-left: 10px;">
                  <p style="font-size: 10px;font-weight: 500;">Name</p>
                </td>
                {%- endif -%}
                <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.name}}</p>
                </td>
              {% endfor %}
            </tr>
            <tr style="border-bottom: 0.5px solid #000;">
              {% for item in data.data %}
                {%- if forloop.index0 == 0 -%}
                <td style="padding: 0px;padding-left: 10px;">
                  <p style="font-size: 10px;font-weight: 500;">NOPEK</p>
                </td>
                {%- endif -%}
                <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
                  <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.nopek}}</p>
                </td>
              {% endfor %}
            </tr>
            {% endfor %}
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">PART / COMPANY: {{JobApplication.partCompany1}}</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">ADDRESS / PHONE NO.: {{JobApplication.purposePurpose1}}</p>
          <div class="row">
            <div class="col-4">
              <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">DATE REQUIRED:</p>
            </div>
            <div class="col-4">
              <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">FROM: {{extraDetails.validFrom.date}}</p>
            </div>
            <div class="col-4">
              <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">UNTIL: {{extraDetails.validTo.date}}</p>
            </div>
            <div class="col-4">
              <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">TIME REQUIRED: </p>
            </div>
            <div class="col-4">
            <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">FROM: {{extraDetails.validFrom.time}}</p>
          </div>
          <div class="col-4">
            <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">UNTIL: {{extraDetails.validTo.time}}</p>
          </div>
          </div>
          <div style="text-align: center;padding: 30px 0px;">
            <h6><b>APPLICANT UNDERSTAND AND AGREE TO COMPLY WITH ALL REGULATIONS IN THE ENVIRONMENT OF PT</b></h6>
            <h6><b>PERTAMINA (PERSERO)</b></h6>
          </div>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">SPECIAL INSTRUCTIONS:</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 10px;">1. Do not use flash / flash:</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 10px;">2. Do not shoot in the gas hazard area (yellow board). Propane.</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 10px;">3. Coordinate with local GSI when taking pictures 4. Equipment has been</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 10px;">checked by HSSE officers 5. Shooting is for work purposes only, not for</p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 10px;">6. It is forbidden to distribute the photos to outsiders.</p>
        </td>
      </tr>
    </tbody>
  </table> 
          
  <table style="border: 1px solid #000;border-top: none;width: 100%;">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>Section 1: Section Head (Requestor)</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="height:50px;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">I confirm the data proposed by camera users in the refinery area and comply with all regulations within PT PERTAMINA.</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-top: 30px;">Name :{{AuthorizationAcceptance.select}}</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>Section 2:Section Head (Safety)</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="height:50px;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">I have checked the camera is safe and allowed it to be used in the refinery area.</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-top: 30px;">Name : {{AuthorizationAcceptance.select1}}</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="font-size: 12px;margin: 0;"><b>Section 3:Senior Manager (Operation & Manufacturing)</b></p>
        </td>
      </tr>
      <tr>
        <td style="height:50px;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;margin: 0;">I approve the application for the use of cameras in the factory area</p>
          <p style="font-size: 10px;font-weight: 500;margin: 0;padding-top: 30px;">Name : {{AuthorizationAcceptance.select2}}</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>`;
