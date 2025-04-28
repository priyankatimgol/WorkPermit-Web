export const template = `
<div>
<img src='../Assest/print.png' style="margin-left: 48.5%;
width: 35px;
padding-right: 2px;
cursor: pointer;
margin-bottom: 14px;
margin-top: 25px ;cursor:pointer"  id=printPageButton onclick=window.print() />
</div>
<div class="container-fluid pdfPrint">

  <table class="" style="border: 1px solid #000 !important;width: 98.11%;margin:0px 50px;margin-left: 10px;">
  <tbody class="" >
      <tr>
        <td style="width: 25%;padding: 0.5rem;">
          <h5 style="padding-top: 50px;">Zone: {{extraDetails.zone}}</h5>  
        </td>
        <td style="width: 50%;background: red;color: #fff;padding: 30px 0;">
          <h4 style="text-align: center">
            PT PERTAMINA (PERSERO) </br>
             WORK PERMIT </br>
             ( Status: {{extraDetails.statusName}})
          </h4>
        </td>
        <td style="width: 25%;padding: 0.5rem;">
          <img src="../Assest/LOGOTEMP.jpg" class="logo" style="width: 100%;max-width: 100%;padding-top: 5px;" />
        </td>
      </tr>
      <tr style="border: 1px solid #000;">
        <td colspan="3" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 18px;fontWeight: bold;"><b>Permit Details</b></p>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="width: 25%;border-bottom: 1px solid #000;padding: 0.5rem;">
          <table class="w-100" style="border: none;">
            <tbody>
              <tr>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 14px;font-weight: 500;margin: 0;">From Date : {{extraDetails.validFrom.date}} </p>
                  </div>
                </td>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 14px;font-weight: 500;margin: 0;">until Date: {{extraDetails.validTo.date}} </p>
                  </div>
                </td>
               
              </tr>
              <tr>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 14px;font-weight: 500;margin: 0;">From Hours: {{extraDetails.validFrom.time}} </p>
                  </div>
                </td>
                <td>
                  <div class="inline-flex">
                    <p style="font-size: 14px;font-weight: 500;margin: 0;">until Hours: {{extraDetails.validTo.time}} </p>
                  </div>
                </td>
                
              </tr>
            </tbody>
          </table> 
        </td>
        <td style="width: 25%;border-left: 1px solid #000;border-bottom: 1px solid #000;padding: 0.5rem;">
          <div>
            <div class="inline-flex">
              <p style="font-size: 14px;font-weight: 500;margin: 0;">No. Register: {{extraDetails.number}}</p>
            </div>
          </div>
          <div>
            <div class="inline-flex">
              <p style="font-size: 14px;font-weight: 500;margin: 0;">Date: {{extraDetails.date}} </p>
            </div>
          </div>
          <div>
            <div class="inline-flex">
              <p style="font-size: 14px;font-weight: 500;margin: 0;">Work Orders: {{extraDetails.workOrder}}</p>
            </div>
          </div>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="padding: 0.5rem;width: 30%;">
          <div class="inline-flex">
            <p style="font-size: 14px;font-weight: 500;margin: 0;">Job Location: {{extraDetails.area}} </p>
          </div>
        </td>
        <td style="padding: 0.5rem;">
          <div class="inline-flex">
            <p style="font-size: 14px;font-weight: 500;margin: 0;">System Name: {{extraDetails.system}} </p>
          </div>
        </td>
        <td style="padding: 0.5rem;">
          <div class="inline-flex">
            <p style="font-size: 14px;font-weight: 500;margin: 0;">Tag Number: {{JobApplication.mainTag1}} </p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0.5rem;">
          <div class="inline-flex">
            <p style="font-size: 14px;font-weight: 500;margin: 0;">Job Title: {{extraDetails.title}}</p>
          </div>
        </td>
        <td style="padding: 0.5rem;">
          <div class="inline-flex">
            <p style="font-size: 14px;font-weight: 500;margin: 0;">Discipline: {{extraDetails.discipline}} </p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="3" style="padding: 0.5rem;">
          <div class="inline-flex">
            <p style="height: 18px;font-size: 14px;font-weight: 500;margin: 0;">Job Description: {{extraDetails.description}}</p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
      <td colspan="3" style="padding: 0.5rem;">
        <div class="inline-flex">
          <p style="height: 18px;font-size: 14px;font-weight: 500;margin: 0;">Job Applicant: {{extraDetails.applicant}}</p>
        </div>
      </td>
    </tr>
    </tbody>
  </table>

  <div/>`;
