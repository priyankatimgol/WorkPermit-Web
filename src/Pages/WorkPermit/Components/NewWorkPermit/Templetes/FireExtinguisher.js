export const FireExtinguisher = `
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
      <h5>&nbsp;</h5>
    </td>
    <td style="width: 50%;background: #fff;color: rgb(7, 7, 7);padding: 30px 0;text-align: center;">
      <h4 class="flex align-center justify-center center">
        <b>COUNTRY OIL & GAS MINING COMPANY</b>
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
        <td colspan="3" style="border-bottom: 1px solid #000;text-align: center;padding-top: 20px;">
          <h4 class="flex align-center justify-center center">
            <b>EXTINGUISHING WATER USE PERMIT</b>
          </h4>
          <h5 class="flex align-center justify-center center">
            <b>FOR NON-EMERGENCY PURPOSES</b>
          </h5>
          <div style="width:30%; margin-left: auto;text-align: left;">
            <p style="font-weight: 500;">MAIN PERMT NO: {{JobApplication.noRegister1}}</p>
            <p style="font-weight: 500;">NO. REGISTRATION: {{extraDetails.number}}</p>
            <p style="font-weight: 500;">DATE : {{extraDetails.date}}</p>
          </div>
        </td>
      </tr>
      <tr style="background-color:#fff;border-bottom: 1px solid rgb(255, 255, 255)">
        <td colspan="3">
          <div class="container">
            <div class="row">
              <div class="col">
                <p style="font-weight: 500;">
                  Given To: {{JobApplication.givenTo}}
                </p>
              </div>
              <div class="col">
                <p style="font-weight: 500;">
                  Section / Section : {{JobApplication.mainTag}}
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr style="background-color:#fff;border-bottom: 1px solid rgb(255, 255, 255)">
        <td colspan="3">
          <div class="container">
            <div class="row">
              <div class="col">
                <p style="font-weight: 500;">
                  Valid Date : {{extraDetails.validFrom.date}}
                </p>
              </div>
              <div class="col">
                <p style="font-weight: 500;">
                  From Hours: {{extraDetails.validFrom.time}}
                </p>
              </div>
              <div class="col">
                <p style="font-weight: 500;">
                  up to Hours: {{extraDetails.validTo.time}}
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr style="background-color:#fff;border-bottom: 1px solid rgb(255, 255, 255)">
        <td colspan="3">
          <div class="container">
            <div class="row">
              <div class="col">
                <p style="font-weight: 500;">
                  Job Location: {{extraDetails.area}}
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr style="background-color:#fff;border-bottom: 1px solid rgb(255, 255, 255)">
        <td colspan="3">
          <div class="container">
            <div class="row">
              <div class="col">
                <p style="font-weight: 500;">
                  Job Title: {{extraDetails.title}}
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr style="background-color:#fff;border-bottom: 1px solid rgb(255, 255, 255)">
        <td colspan="3">
          <div class="container">
            <div class="row">
              <div class="col">
                <p style="font-weight: 500;">
                  System : {{extraDetails.system}}
                </p>
              </div>
              <div class="col">
                <p style="font-weight: 500;">
                  Zone: {{extraDetails.zone}}
                </p>
              </div>
              <div class="col">
                <p style="font-weight: 500;">
                  Discipline: {{extraDetails.discipline}}
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr style="background-color:#fff;border-bottom: 1px solid rgb(255, 255, 255)">
        <td colspan="3">
          <div class="container">
            <div class="row">
              <div class="col">
                <p style="font-weight: 500;">
                  Nomor Hydrant, Monitor, Hose Reel: {{JobApplication.discipline}}
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr style="background-color:#fff;border-bottom: 1px solid rgb(255, 255, 255)">
        <td colspan="3">
          <div class="container">
            <div class="row">
              <div class="col">
                <p style="font-weight: 500;">
                  Length of Use: {{JobApplication.lengthOfUse}}
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr style="background-color:#fff;border-bottom: 1px solid rgb(255, 255, 255)">
        <td colspan="3">
          <div class="container">
            <div class="row">
              <div class="col">
                <p style="font-weight: 500;">
                  Purpose of Water Use: {{JobApplication.textField}}
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr style="background-color:#fff;border-bottom: 1px solid rgb(255, 255, 255);">
        <td colspan="3">
          <div class="container" style="margin-bottom: 40px;">
            <div class="row">
              <div class="col">
                <p style="font-weight: 500;">
                  Information: {{JobApplication.information}}
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr style="background-color:#fff;border-bottom: 1px solid rgb(255, 255, 255);">
        <td colspan="3">
          <div class="container" style="margin-bottom: 40px;border-top: 1.5px solid rgb(0, 0, 0);">
            <div class="row">
              <div class="col">
                <p style="font-weight: 500;">
                  Applicant,
                </p>
              </div>
              <div class="col">
                <p style="font-weight: 500;">
                  Fire Officer,
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="3">
          <div class="container">
            <div class="row">
              <div class="col">
                <p style="font-weight: 500;">
                  Name : {{AuthorizationAcceptance.name2}}
                </p>
              </div>
              <div class="col">
                <p style="font-weight: 500;">
                  Name : {{AuthorizationAcceptance.name3}}
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr style="background-color:#fff; height:90px">
        <td colspan="3" class="container" style="padding: 15px;">
          <p style="font-weight: 900;">Matters that must be obeyed:</p>
          <p style="font-weight: 500;">- If there is a sign of danger or a fire occurs, where firefighting water is being used, the permit requester is responsible to immediately turn off / stop 
              the use of water until it is safe.</p>
          <p style="font-weight: 500;">- Temporary connections should be immediately removed when no longer in use.
          </p>
          <p style="font-weight: 500;">- When the use of water has been completed / cancelled, should immediately report to Fire & Insurance / HSE RU VI</p>
        </td>
      </tr>
    </tbody>
  </table>

</div>

</div>`;
