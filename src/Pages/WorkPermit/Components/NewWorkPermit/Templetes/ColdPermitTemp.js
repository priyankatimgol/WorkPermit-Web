export const ColdPermitTemp = `
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
          <h5 style="padding-top: 50px;">{{extraDetails.zone}}</h5>  
        </td>
        <td style="width: 50%;background: red;color: #fff;padding: 30px 0;">
          <h4 style="text-align: center">
              PT PERTAMINA (PERSERO)</br>
              COLD WORK PERMIT </br>
              ( Status: {{extraDetails.statusName}})
          </h4>
        </td>
        <td style="width: 25%;padding: 0.5rem;">
          <img src="../Assest/LOGOTEMP.jpg" class="logo" style="width: 100%;max-width: 100%;padding-top: 5px;" />
        </td>
      </tr>
</tbody>
</table>
</header>
<main style="padding:0px 10px;">
  <table class="section1cold" style="border: 1px solid #000 !important;width: 100%;">
    <tbody>
      
      <tr style="border: 1px solid #000;">
        <td colspan="3" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 12px;"><b>Section 1: Site Job Detail</b></p>
        </td>
      </tr>
      <tr style="background: #ccffcc;border: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 12px;"><b>RISK ASSESSMENT: Overall Occupational Risk Classification (Extreme/High/Medium/Low using RAM Card)</b></p>
        </td>
        <td>
          <table class="w-100">
            <tbody>
              <tr>
                <td>
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if extraDetails.riskfactor =="Extreme" %} checked {% endif %}  style="z-index: 1;" class="form-check-input" type="checkbox" id="e" name="E" value="e"  >
                    <p style="position: absolute;width: 20px;height: 20px;left: 3px;top: 3px;background: #c400078c;">&nbsp;</p>
                    <label class="form-check-label"><p>E</p></label>
                  </div>
                </td>
                <td>
                  <div style="display: flex;align-items: center; position: relative;">
                    <input  disabled={true} {% if extraDetails.riskfactor =="High Risk" %} checked {% endif %}  style="z-index: 1;" class="form-check-input" type="checkbox" id="h" name="H" value="h"  >
                    <p style="position: absolute;width: 20px;height: 20px;left: 3px;top: 3px;background: #e768078a;">&nbsp;</p>
                    <label class="form-check-label"><p>H</p></label>
                  </div>
                </td>
                <td>
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if extraDetails.riskfactor =="Medium"%} checked {% endif %}  style="z-index: 1;" class="form-check-input" type="checkbox" id="m" name="M" value="m"  >
                    <p style="position: absolute;width: 20px;height: 20px;left: 3px;top: 3px;background: #fffa066b;">&nbsp;</p>
                    <label class="form-check-label"><p>M</p></label>
                  </div>
                </td>
                <td>
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if extraDetails.riskfactor =="Low Risk"  %} checked {% endif %}  style="z-index: 1;" class="form-check-input" type="checkbox" id="l" name="L" value="l"  >
                    <p style="position: absolute;width: 20px;height: 20px;left: 3px;top: 3px;background: #93cf4e94;">&nbsp;</p>
                    <label class="form-check-label"><p>L</p></label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr style="background: #ccffcc;">
        <td colspan="2" style="width: 25%;border-bottom: 1px solid #000;border-right: 1px solid #000;">
          <table class="w-100">
            <tbody>
              <tr>
                <td style="width: 25%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.hot_new == "0" %} checked {% endif %}  {% if JobApplication.hot_new == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="new" name="new" value={{hot_new}}  >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">NEW</p></label>
                  </div>
                </td>
                <td style="width: 25%;">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if JobApplication.hot_new == "1" %} checked {% endif %} class="form-check-input" type="checkbox" id="extend" name="extend" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">EXTEND TO
                    </p></label>
                  </div>
                </td>
                <td style="width: 25%;">
                <div style="display: flex;align-items: center; position: relative;">
            <p disabled={true} style="font-size: 10px;font-weight: 500;margin: 0;">NUMBER: {{JobApplication.number}}</p>

               </div>
              </td>
                </td>
                <td style="width: 25%;">&nbsp;</td>
              </tr>
              <tr>
                <td class="px-0" colspan="2">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 10px;">From Date: {{extraDetails.validFrom.date}} </p>
                  </div>
                </td>
                <td class="px-0" colspan="2">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 10px;">until Date: {{extraDetails.validTo.date}} </p>
                  </div>
                </td>
                
              </tr>
              <tr>
                <td class="px-0" colspan="2">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 10px;">From Hours: {{extraDetails.validFrom.time}} </p>
                  </div>
                </td>
                <td class="px-0" colspan="2">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;padding-left: 10px;">Until what time: {{extraDetails.validTo.time}} </p>
                  </div>
                </td>
               
              </tr>
            </tbody>
          </table> 
        </td>
        <td style="width: 25%;border-bottom: 1px solid #000;padding: 0.5rem;">
          <div class="py-1">
            <div class="inline-flex">
              <p style="font-size: 10px;font-weight: 500;margin: 0;">Consequence: {{JobApplication.noRegister}}</p>
            </div>
          </div>
          <div>
            <div class="inline-flex">
              <p style="font-size: 10px;font-weight: 500;margin: 0;">Probability: {{JobApplication.workOrder}} </p>
            </div>
          </div>
          <div>
            <div class="inline-flex">
              <p style="font-size: 10px;font-weight: 500;margin: 0;">No. Register: {{extraDetails.number}} </p>
            </div>
          </div>
          <div>
            <div class="inline-flex">
              <p style="font-size: 10px;font-weight: 500;margin: 0;">Date: {{extraDetails.date}} </p>
            </div>
          </div>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td style="padding: 0.5rem;">
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;margin: 0;">Job Location: {{extraDetails.area}} </p>
          </div>
        </td>
        <td>
          <div class="inline-flex ">
            <p style="font-size: 10px;font-weight: 500;margin: 0;">System Name: {{extraDetails.system}} </p>
          </div>
        </td>
        <td style="border-left: 1px solid #000;padding: 0.5rem;">
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;margin: 0;">Work Orders: {{extraDetails.workOrder}}</p>
          </div>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="2" style="padding: 0 0.5rem;">
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;margin: 0;">Job Title: {{extraDetails.title}}</p>
          </div>
        </td>
        <td style="border-left: 1px solid #000;padding: 0.5rem;">
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;margin: 0;">Tag Number: {{JobApplication.workOrder2}}</p>
          </div>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;padding: 0.5rem;">
        <td colspan="2" style="padding: 0.5rem;">
          <div class="inline-flex">
            <p style="height: 50px;font-size: 10px;font-weight: 500;margin: 0;"">Job Description: {{extraDetails.description}}</p>
          </div>
        </td>
        <td style="border-left: 1px solid #000;padding: 0.5rem;">
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;margin: 0;">Tag Description: {{JobApplication.workOrder1}} </p>
          </div>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;margin: 0;">Discipline: {{extraDetails.discipline}} </p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="border: 1px solid #000;width: 100%;">
    <tbody>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="2" style="width: 70%;padding: 0.5rem;">
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;margin: 0;">No. Contract Or Project: {{JobApplication.noContractOrProjectExcutor}} </p>
          </div>
        </td>
        <td style="width: 30%;border-top: none;padding: 0.5rem;border-left: 1px solid #000;">
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;margin: 0;">Duration/ Length Of Work (Days): {{JobApplication.durationLengthOfWork}} &nbsp; </p>
          </div>
        </td>
      </tr>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td colspan="2" style="width: 70%;border-right: 1px solid #000;">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td style="width: 60%">
                  <div class="inline-flex">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;padding:10px;">Work Executor: {{JobApplication.textField}}

                    </p>
                  </div>
                </td>
                <td style="width: 20%">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 0px 10px !important;" {% if JobApplication.pertamina %} checked {% endif %}  {% if JobApplication.pertamina %} checked {% endif %} class="form-check-input" type="checkbox" id="pertamina" name="pertamina" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Pertamina</p></label>
                  </div>
                </td>
                <td style="width: 20%">
                  <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} style="margin: 0px 10px !important;" {% if JobApplication.thirdParty %} checked {% endif %} class="form-check-input" type="checkbox" id="thirdParty" name="thirdParty" value="something" >
                    <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Third party</p></label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td class="bor" style="width: 30%;border-top: none;padding: 0.5rem;">
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;margin: 0;">Number Of Manpower: {{JobApplication.numberOfManpower}} &nbsp; </p>
          </div>
        </td>
      </tr>
    </tbody>

    <table style="border: 1px solid #000;border-top: none;width: 100%;">
      <tbody>
      <tr style="border-bottom: 1px solid #000;">
      <td colspan="4" style="padding: 0 0.5rem;">
        <p style="margin: 0;font-size: 12px;"><b>Used Tools</b></p>
      </td>
    </tr>
        <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
          <td style="width: 25%">
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.terpaparMaterialBeracunToxic %} checked {% endif %}  class="form-check-input" type="checkbox" id="arcWelding" name="arcWelding" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Excavators</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.terpaparMaterialYangKorosive %} checked {% endif %} class="form-check-input" type="checkbox" id="gasWelding" name="gasWelding" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Lifting Equipment</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.paparanGetaran %} checked {% endif %} class="form-check-input" type="checkbox" id="portableElectricalEquipment" name="portableElectricalEquipment" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Pressurized Hoses</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.terpaparRadioactive %} checked {% endif %} class="form-check-input" type="checkbox" id="grinder" name="grinder" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Air/ Hydraulic Powered Tools</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.paparanKebisingan %} checked {% endif %} class="form-check-input" type="checkbox" id="electricDrill" name="electricDrill" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Radioactive Source</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if tools.poorLighting %} checked {% endif %} class="form-check-input" type="checkbox" id="PoorLightning" name="PoorLightning" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Poor Lightning</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
          <input disabled={true} style="margin: 5px 10px !important;" {% if tools.unguardedOpening %} checked {% endif %} class="form-check-input" type="checkbox" id="UnguardedOpening" name="UnguardedOpening" value="something" >
          <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Unguarded Opening</p></label>
        </div>
          </td>
          <td style="width: 25%">
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.mesinBergerakBerputar %} checked {% endif %} class="form-check-input" type="checkbox" id="mobileInternalCombustionEquipment" name="mobileInternalCombustionEquipment" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Laser</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.craneLiftingOperation %} checked {% endif %} class="form-check-input" type="checkbox" id="motorizedAccessPlatform" name="motorizedAccessPlatform" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Converter Electrical</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.sedangUjiTekanan %} checked {% endif %} class="form-check-input" type="checkbox" id="mobileCrane" name="mobileCrane" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Chain Hoist</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.bahanMudahMeledak %} checked {% endif %} class="form-check-input" type="checkbox" id="excavators" name="excavators" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Flanges Spider</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.tertembakTertusukTertancap %} checked {% endif %} class="form-check-input" type="checkbox" id="liftingEquipment" name="liftingEquipment" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Torque wrench</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if tools.chemicals%} checked {% endif %} class="form-check-input" type="checkbox" id="Chemicals" name="Chemicals" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Chemicals</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
          <input disabled={true} style="margin: 5px 10px !important;" {% if tools.liveEquipment %} checked {% endif %} class="form-check-input" type="checkbox" id="LiveEquipment" name="LiveEquipment" value="something" >
          <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Live Equipment</p></label>
        </div>
          </td>
          <td style="width: 25%">
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.bahanBerbahayaBagiKesehalaan %} checked {% endif %} class="form-check-input" type="checkbox" id="pressurizedHoses" name="pressurizedHoses" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Hammer</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.liquidGasDibawahTekanan %} checked {% endif %} class="form-check-input" type="checkbox" id="airHydraulicPoweredTools" name="airHydraulicPoweredTools" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Air Wind</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.terpaparMaterialYangBeterbangan %} checked {% endif %} class="form-check-input" type="checkbox" id="radioactiveSource" name="radioactiveSource" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Key Tools</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.bahayaMemkaniTerpukulDll %} checked {% endif %} class="form-check-input" type="checkbox" id="laser" name="laser" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Chain Block</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.terpaparBahanMudahTerbakar %} checked {% endif %} class="form-check-input" type="checkbox" id="electricalConverter" name="electricalConverter" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Lamp</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if tools.vehicleTraffic %} checked {% endif %} class="form-check-input" type="checkbox" id="Vehicletraffic" name="Vehicletraffic" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Vehicle Traffic</p></label>
          </div>
          </td>
          <td style="width: 25%">
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.terpaparBahanDenganSuhuEkstrim %} checked {% endif %} class="form-check-input" type="checkbox" id="chainHoise" name="chainHoise" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Multi Testers</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.berbatasanDenganUnitYgBerterbangan %} checked {% endif %} class="form-check-input" type="checkbox" id="flangesSpider" name="flangesSpider" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Stairs</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.kekuranganOksigen %} checked {% endif %} class="form-check-input" type="checkbox" id="tourcheWrench" name="tourcheWrench" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Crane</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if tools.electicShock %} checked {% endif %} class="form-check-input" type="checkbox" id="jackHammer" name="jackHammer" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Compressor</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if tools.h2S %} checked {% endif %} class="form-check-input" type="checkbox" id="H2S" name="H2S" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">H2S</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
          <input disabled={true} style="margin: 5px 10px !important;" {% if tools.extremeWeather%} checked {% endif %} class="form-check-input" type="checkbox" id="ExtremeWeather" name="ExtremeWeather" value="something" >
          <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Extreme Weather</p></label>
        </div>
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 12px;"><b>Identify Potential Hazards And Attach The Signed Job Safety Analysis (JSA) Results</b></p>
          </td>
        </tr>
        <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
          <td style="width: 25%">
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true}  style="margin: 5px 10px !important;" {% if IdentifyPotential.terpaparMaterialBeracunToxic %} checked {% endif %}  class="form-check-input" type="checkbox" id="exposureToToxicMaterials" name="exposureToToxicMaterials" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Toxic Materials (Toxic)</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.exposureToCorrosiveMaterials %} checked {% endif %}  class="form-check-input" type="checkbox" id="exposureToCorrosiveMaterials" name="exposureToCorrosiveMaterials" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Corrosive Materials</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.bahanBerbahayaBagiKesehalaan %} checked {% endif %}  class="form-check-input" type="checkbox" id="materialsHarmfulToHealth" name="materialsHarmfulToHealth" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Health Issues</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true}  style="margin: 5px 10px !important;"  {% if IdentifyPotential.liquidGasDibawahTekanan %} checked {% endif %}  class="form-check-input" type="checkbox" id="liquidGasUnderPressure" name="liquidGasUnderPressure" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Liquid/ Gas Under Pressure</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.kekuranganOksigen %} checked {% endif %}  class="form-check-input" type="checkbox" id="lackOfOxygen" name="lackOfOxygen" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Lack Of Oxygen Deficiencies</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.bahayaRuangTerbatas %} checked {% endif %}  class="form-check-input" type="checkbox" id="dangerOfLimitedSpace" name="dangerOfLimitedSpace" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Confined Space</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.bahayaRuangTerbats %} checked {% endif %}  class="form-check-input" type="checkbox" id="staticElectricityHazard" name="staticElectricityHazard" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Static Electricity Hazard</p></label>
            </div>
          </td>
          <td style="width: 25%">
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.bahayaMemkaniTerpukulDll %} checked {% endif %}   class="form-check-input" type="checkbox" id="mechanicalHazards" name="mechanicalHazards" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Mechanical Hazards (Pinched, Hit, Etc.)</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.terpaparBahanMudahTerbakar %} checked {% endif %}  class="form-check-input" type="checkbox" id="exposureToFlammableMaterials" name="exposureToFlammableMaterials" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Exposure To Flammable Materials</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.terpaparBahanDenganSuhuEkstrim %} checked {% endif %}   class="form-check-input" type="checkbox" id="exposureToMaterialsWithExtremeTemperatures" name="exposureToMaterialsWithExtremeTemperatures" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Materials With Extreme Temperatures</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.berbatasanDenganUnitYgBerterbangan %} checked {% endif %}  class="form-check-input" type="checkbox" id="bordersWithOperatingUnits" name="bordersWithOperatingUnits" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Simultaneous Operations</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.terpaparMaterialYangBeterbangan %} checked {% endif %}   class="form-check-input" type="checkbox" id="exposureToFlyingMaterial" name="exposureToFlyingMaterial" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Trajectory Materials</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.tertutupJalanMasukKeluarTerpapar %} checked {% endif %}   class="form-check-input" type="checkbox" id="closedEntry" name="closedEntry" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Closed Entrance/ Exit</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.temperatureEkstrim %} checked {% endif %}   class="form-check-input" type="checkbox" id="extremeTemperature" name="extremeTemperature" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Extreme Temperature</p></label>
            </div>
          </td>
          <td style="width: 25%">
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.electicShock %} checked {% endif %}   class="form-check-input" type="checkbox" id="electricShock" name="electricShock" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Electric Shock</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.terpaparRadioactive %} checked {% endif %}  class="form-check-input" type="checkbox" id="exposureToRadioactive" name="exposureToRadioactive" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Radioactive</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.addSafeGuadingYgDiNonAktif %} checked {% endif %} class="form-check-input" type="checkbox" id="safeGuading" name="safeGuading" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Inactive Safeguarding</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.mesinBergerakBerputar %} checked {% endif %}  class="form-check-input" type="checkbox" id="movingRotatingMachine" name="movingRotatingMachine" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Moving Machinery</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.craneLiftingOperation %} checked {% endif %}  class="form-check-input" type="checkbox" id="craneLiftingOperation" name="craneLiftingOperation" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Crane/ Lifting Operation</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.bahayaKetinggian %} checked {% endif %}  class="form-check-input" type="checkbox" id="dangerOfAltitude" name="dangerOfAltitude" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Danger From Falling</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.bahayaKejatuhanBenda %} checked {% endif %}  class="form-check-input" type="checkbox" id="dangerOfFallingObjects" name="dangerOfFallingObjects" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Danger For Dropped Objects</p></label>
            </div>
          </td>
          <td style="width: 25%">
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.paparanKebisingan %} checked {% endif %}   class="form-check-input" type="checkbox" id="noiseExposure" name="noiseExposure" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Noise </p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.paparanGetaran %} checked {% endif %}  class="form-check-input" type="checkbox" id="vibrationExposure" name="vibrationExposure" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Vibration</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.sedangUjiTekanan %} checked {% endif %}  class="form-check-input" type="checkbox" id="underPressureTest" name="underPressureTest" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Under Pressure Test</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.bahanMudahMeledak %} checked {% endif %}  class="form-check-input" type="checkbox" id="explosiveMaterial" name="explosiveMaterial" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Explosive Material</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.tertembakTertusukTertancap %} checked {% endif %}    class="form-check-input" type="checkbox" id="shotStabbedStuckUsing" name="shotStabbedStuckUsing" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Sharp Edges</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.penggunaanTenagaHydraulicPneu %} checked {% endif %}    class="form-check-input" type="checkbox" id="hydraulicPneuPower" name="hydraulicPneuPower" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Hydraulic/ Pneumatic Power Use</p></label>
            </div>
            <div style="display: flex;align-items: center; position: relative;">
              <input  disabled={true} style="margin: 5px 10px !important;" {% if IdentifyPotential.slipTergelincir %} checked {% endif %}    class="form-check-input" type="checkbox" id="slip" name="slip" value="something" >
              <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Slippary Hezard</p></label>
            </div>
          </td>
        </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 12px;"><b>Personal Protective Equipment (PPE) Needed</b></p>
        </td>
      </tr>
      
    </tbody>
  </table>
  <table style="border: 1px solid #000;width: 100%;" >
    <tbody>
      <tr style="background: #ccffcc;border-bottom: 1px solid #000;">
        <td>
          <p style="margin: 0;font-size: 12px;margin-left: 10px;"><b>Mandatory</b></p>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.topiKeselamatan %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyHatSafetyHelmet" name="safetyHatSafetyHelmet" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Safety Helmet</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.safetyBoots %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyBoots" name="safetyBoots" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Safety Shoes</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"   {% if PersonalProtective.apdKhusus %} checked {% endif %} class="form-check-input" type="checkbox" id="specialPpe" name="specialPpe" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Safety Glasses</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.pelindungBadanApron %} checked {% endif %} class="form-check-input" type="checkbox" id="bodyProtectorApron" name="bodyProtectorApron" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Safety Gloves</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.kacamataKeselamatanSpectacles %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyGlassesSpectacles" name="safetyGlassesSpectacles" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Coverall</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            &nbsp;
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            &nbsp;
          </div>
        </td>
        <td>
          <p style="margin: 0;font-size: 12px;margin-left: 10px;"><b>Fall & Hearing Protection</b></p>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.checkbox %} checked {% endif %}  class="form-check-input" type="checkbox" id="eyeProtectionGoggles" name="eyeProtectionGoggles" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Full Body Harness</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.penlindungMukaFaceShield %} checked {% endif %} class="form-check-input" type="checkbox" id="faceShield" name="faceShield" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Fall Arrest</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.penlindungPernafasanMaskerKimia %} checked {% endif %} class="form-check-input" type="checkbox" id="respiratoryProtectionChemicalMask" name="respiratoryProtectionChemicalMask" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Hearing Protection</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.penlindungPernafasanMaskerDebu %} checked {% endif %}  class="form-check-input" type="checkbox" id="respiratoryProtectionDustMask" name="respiratoryProtectionDustMask" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Ear Plug</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.respiratorScba %} checked {% endif %} class="form-check-input" type="checkbox" id="respiratoryDeviceSCBA" name="respiratoryDeviceSCBA" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Ear Muff</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            &nbsp;
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            &nbsp;
          </div>
        </td>
        <td>
          <p style="margin: 0;font-size: 12px;margin-left: 10px;margin-top: -5px;"><b>Eye & Face & Body</b></p>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.suplaiUdaraAirLineRespirator %} checked {% endif %}  class="form-check-input" type="checkbox" id="airSupply" name="airSupply" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Face Sheild</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.sarungTanganMekanis%} checked {% endif %} class="form-check-input" type="checkbox" id="glovesMechanical" name="glovesMechanical" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Chemical Suit</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.sarungTanganListirk %} checked {% endif %}  class="form-check-input" type="checkbox" id="glovesElectric" name="glovesElectric" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Chemical Boot</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.sarungTanganKimia %} checked {% endif %}  class="form-check-input" type="checkbox" id="glovesChemistry" name="glovesChemistry" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Rubber Boot</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.penlindungTelingaEarPlugEar %} checked {% endif %} class="form-check-input" type="checkbox" id="earProtector" name="earProtector" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Disposable Suit</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.apron %} checked {% endif %} class="form-check-input" type="checkbox" id="earProtector" name="earProtector" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Apron</p></label>
          </div>
        </td>
        <td>
          <p style="margin: 0;font-size: 12px;margin-left: 10px;margin-top: -16px;"><b>Hand Protection</b></p>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.sabukPengamanFullBodyHarness %} checked {% endif %}  class="form-check-input" type="checkbox" id="seatBeltFullBodyHarness" name="seatBeltFullBodyHarness" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Cotton Gloves</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.weldingCap %} checked {% endif %} class="form-check-input" type="checkbox" id="weldingCap" name="weldingCap" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Leather Gloves</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.weldingGloves %} checked {% endif %} class="form-check-input" type="checkbox" id="weldingGloves" name="weldingGloves" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Lubber Gloves</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.weldingApron %} checked {% endif %} class="form-check-input" type="checkbox" id="weldingApron" name="weldingApron" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Chemical Gloves</p></label>
          </div>
        
          <div style="display: flex;align-items: center; position: relative;margin-left: 9px;">
                    <p style="font-size: 10px;font-weight: 500;margin: 0;">Others: {{JobApplication.textField}}
        </p>
          </div>
              
          <div style="display: flex;align-items: center; position: relative;">
            &nbsp;
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            &nbsp;
          </div>
        </td>
        <td>
          <p style="margin: 0;font-size: 12px;margin-left: 10px;"><b>Monitoring Equipment</b></p>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.h2SBadge %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyHatSafetyHelmet" name="safetyHatSafetyHelmet" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">H2S Badge</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.gasMonitor %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyBoots" name="safetyBoots" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Gas Monitor</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.checkbox1 %} checked {% endif %} class="form-check-input" type="checkbox" id="specialPpe" name="specialPpe" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Film Badge</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.surveyMeter %} checked {% endif %} class="form-check-input" type="checkbox" id="bodyProtectorApron" name="bodyProtectorApron" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Survay Meter</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
          &nbsp;
          </div>
          <div style="display: flex;align-items: center; position: relative;">
          &nbsp;
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            &nbsp;
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            &nbsp;
          </div>
        </td>
        <td>
          <p style="margin: 0;font-size: 12px;margin-left: 10px;margin-top: -5px;"><b>Respiratory Protector</b></p>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if PersonalProtective.alfMaskRespirator %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyHatSafetyHelmet" name="safetyHatSafetyHelmet" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Half Mask Respirator</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.fullFaceRespirator %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyBoots" name="safetyBoots" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Full Space Respirator</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.dustMask %} checked {% endif %} class="form-check-input" type="checkbox" id="specialPpe" name="specialPpe" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Dust Mask</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.breathingApparatus %} checked {% endif %} class="form-check-input" type="checkbox" id="bodyProtectorApron" name="bodyProtectorApron" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Breathing Apparatus</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.lifeJacketVest %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyGlassesSpectacles" name="safetyGlassesSpectacles" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Life Jacket/ Vest</p></label>
          </div>
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if PersonalProtective.etc%} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyGlassesSpectacles" name="safetyGlassesSpectacles" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Etc</p></label>
          </div>
      
        </td>
      </tr>
      <tr style="background: #ccffcc;border-top: 1px solid #000;border-botom: 1px solid #000;">
        <td colspan="6" style="padding: 0.5rem;">
          <p style="font-size: 10px;font-weight: 600;margin: 5px 0px;"><b>Work permit Applicant/ Performing Authority (Ahli Teknik)</b></p>
          <p style="font-size: 10px;font-weight: 500;margin: 5px 0px;">Name:{{extraDetails.applicant}}</p>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="page-break"></div>
  <table style="border: 1px solid #000;border-top: none;width: 100%;"  class="section2cold" >
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="3" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 12px;"><b>Section 2: Safety Requirements (To Be Completed By Area Authority (GSI))</b></p>
        </td>
      </tr>
      <tr style="vertical-align: top;">
      <td style="width: 48%;border: 1px solid #000;background: #feff99;">
          <table style="width: 100%;background: #feff99;">
            <tbody>
              <tr style="border-bottom: 1px solid #000;height: 39px;">
                <td style="width: 90%;" class="center">
                  <p style="font-size: 10px;font-weight: 600;"><b>Supplementary Required Documents</b></p>
                </td>
                <td style="width: 10%;text-align: center;border-left: 1px solid #000;">
                  <p style="font-size: 10px;font-weight: 600;">Yes/ No</p>
                </td>
                
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                        <p style="font-size: 10px;font-weight: 500;">1. SIKA/ PTW Confined Space</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if MarkAnyDocumentsRequiredToBeAttached.SikaEntersConfinedSpace  %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement1No" name="safetyRequirement1No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">2. SIKA/ PTW Electrical</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField1}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.SikaElectricalInstrument %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement2No" name="safetyRequirement2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">3. SIKA/ PTW Excavation</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField2}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.SikaExcavation %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement3No" name="safetyRequirement3No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">4. SIKA/ PTW Vehicle Entry/ Access</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField3}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.SikaHeavyEquipmentMovement %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement4No" name="safetyRequirement4No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">5. SIKA/ PTW Road Closure</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField4}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.SikaRadiation %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement5No" name="safetyRequirement5No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">6. SIKA/ PTW Radiography</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField5}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.SikaDisablingVitalSecuritySystem %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement6No" name="safetyRequirement6No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">7. SIKA/ PTW Photo/ Camera Uses</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField6}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0px 10px !important;" {% if  MarkAnyDocumentsRequiredToBeAttached.SikaRoadClosure %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement7No" name="safetyRequirement7No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">8. SIKA/ PTW Lifting Operations </p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField7}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0px 10px !important;" {% if  MarkAnyDocumentsRequiredToBeAttached.SikaUnderwater %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement8No" name="safetyRequirement8No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">9. SIKA/ PTW Diving & Underwater</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField8}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0px 10px !important;" {% if  MarkAnyDocumentsRequiredToBeAttached.SikaTheUseOfElectricalVoltageAbove50VoltsInAConfinedSpace %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement9No" name="safetyRequirement9No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">10. Work Procedure (SOP)</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField11}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.WorkProcedureSop %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement12No" name="safetyRequirement12No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">11. Equipment Inspection (Welding/ Cutting Tools, Tools etc.)</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField12}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.EquipmentInspectionWeldingCuttingToolsToolsEtc %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement13No" name="safetyRequirement13No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">12. Safety Data Sheet (MSDS)</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField13}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.SafetyDataSheetMsds %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement14No" name="safetyRequirement14No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">13. Waste Storage</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField14}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.WasteStorage %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement15No" name="safetyRequirement15No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">14. Sketch/ Drawing/ P & ID/ PFD</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField15}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input  disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.SketchDrawingPIdPfi %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement16No" name="safetyRequirement16No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">15. Vehicle Entry Permit In Forbidden Areas</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField16}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.VehicleEntryPermitInForbiddenAreas %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement17No" name="safetyRequirement17No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">16. Dokumen Explosion Proof</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField17}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.ExplosionProofDocument %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement18No" name="safetyRequirement18No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">17. Job Safety Analysis</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField18}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.JobSafetyAnalysis %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement19No" name="safetyRequirement19No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">18. Risk Assessments</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField19}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.RiskAssessments %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirement20No" name="safetyRequirement20No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">19. Isolation List</p>
                        <p style="font-size: 10px;font-weight: 500;">Note- "If the isolation is complex, use the PTW for Mechanical/ Electrical isolation" and attach in this (Main) Hot/ Cold permit</p>

                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;padding: 0px 5px;">
                          {{MarkAnyDocumentsRequiredToBeAttached.textField20}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input disabled={true} style="margin: 0px 10px !important;" {% if MarkAnyDocumentsRequiredToBeAttached.Isolation %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirement21No" name="safetyRequirement21No" value="something" >
                  </div>
                </td>
              </tr>
             
              <tr style="border-bottom: 1px solid #000;border-top:1px solid #000">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">20.</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;">
                          <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement23" placeholder="" name="safetyRequirement23" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input disabled={true} style="margin: 0px 10px !important;" class="form-check-input" type="checkbox" id="safetyRequirement23No" name="safetyRequirement23No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">21.</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;">
                          <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement24" placeholder="" name="safetyRequirement24" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input disabled={true} style="margin: 0px 10px !important;" class="form-check-input" type="checkbox" id="safetyRequirement24No" name="safetyRequirement24No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">22.</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;">
                          <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement25" placeholder="" name="safetyRequirement25" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input disabled={true} style="margin: 0px 10px !important;" class="form-check-input" type="checkbox" id="safetyRequirement25No" name="safetyRequirement25No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">23.</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;">
                          <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement26" placeholder="" name="safetyRequirement26" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input disabled={true} style="margin: 0px 10px !important;" class="form-check-input" type="checkbox" id="safetyRequirement26No" name="option1" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">24.</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;">
                          <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement27" placeholder="" name="safetyRequirement27" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
             
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input disabled={true} style="margin: 0px 10px !important;" class="form-check-input" type="checkbox" id="safetyRequirement27No" name="safetyRequirement27No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">25.</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;">
                          <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement28" placeholder="" name="safetyRequirement28" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input disabled={true} style="margin: 0px 10px !important;" class="form-check-input" type="checkbox" id="safetyRequirement28No" name="safetyRequirement28No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 70%;">
                          <p style="font-size: 10px;font-weight: 500;">26.</p>
                        </td>
                        <td style="width: 30%;background: #fff;border-left: 1px solid #000;">
                          <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement28" placeholder="" name="safetyRequirement28" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="text-align: center;border-left: 1px solid #000;">
                  <div>
                    <input disabled={true} style="margin: 0px 10px !important;" class="form-check-input" type="checkbox" id="safetyRequirement28No" name="safetyRequirement28No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
              <td style="padding: 0px;">
                <table style="width: 100%;">
                  <tbody>
                    <tr>
                      <td style="width: 70%;">
                        <p style="font-size: 10px;font-weight: 500;">27.</p>
                      </td>
                      <td style="width: 30%;background: #fff;border-left: 1px solid #000;">
                        <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement28" placeholder="" name="safetyRequirement28" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
             
              <td style="text-align: center;border-left: 1px solid #000;">
                <div>
                  <input disabled={true} style="margin: 0px 10px !important;" class="form-check-input" type="checkbox" id="safetyRequirement28No" name="safetyRequirement28No" value="something" >
                </div>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 0px;">
              <table style="width: 100%;">
                <tbody>
                  <tr>
                    <td style="width: 70%;">
                      <p style="font-size: 10px;font-weight: 500;">28.</p>
                    </td>
                    <td style="width: 30%;background: #fff;border-left: 1px solid #000;">
                      <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement28" placeholder="" name="safetyRequirement28" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
           
            <td style="text-align: center;border-left: 1px solid #000;">
              <div>
                <input disabled={true} style="margin: 0px 10px !important;" class="form-check-input" type="checkbox" id="safetyRequirement28No" name="safetyRequirement28No" value="something" >
              </div>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #000;">
          <td style="padding: 0px;">
            <table style="width: 100%;">
              <tbody>
                <tr>
                  <td style="width: 70%;">
                    <p style="font-size: 10px;font-weight: 500;">29.</p>
                  </td>
                  <td style="width: 30%;background: #fff;border-left: 1px solid #000;">
                    <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement28" placeholder="" name="safetyRequirement28" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
         
          <td style="text-align: center;border-left: 1px solid #000;">
            <div>
              <input disabled={true} style="margin: 0px 10px !important;" class="form-check-input" type="checkbox" id="safetyRequirement28No" name="safetyRequirement28No" value="something" >
            </div>
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #000;">
        <td style="padding: 0px;">
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td style="width: 70%;">
                  <p style="font-size: 10px;font-weight: 500;">30.</p>
                </td>
                <td style="width: 30%;background: #fff;border-left: 1px solid #000;">
                  <input disabled={true} style="height: 23px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement28" placeholder="" name="safetyRequirement28" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
                </td>
              </tr>
            </tbody>
          </table>
        </td>
       
        <td style="text-align: center;border-left: 1px solid #000;">
          <div>
            <input disabled={true} style="margin: 0px 10px !important;" class="form-check-input" type="checkbox" id="safetyRequirement28No" name="safetyRequirement28No" value="something" >
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
      <td style="padding: 0px;">
        <table style="width: 100%;">
          <tbody>
            <tr>
              <td style="width: 70%;">
                <p style="font-size: 10px;font-weight: 500;">31.</p>
              </td>
              <td style="width: 30%;background: #fff;border-left: 1px solid #000;">
                <input disabled={true} style="height: 34px !important;margin: inherit !important;border-color: transparent !important;" type="text" class="form-control" id="safetyRequirement28" placeholder="" name="safetyRequirement28" style="height: auto;margin: inherit;padding: 0.175rem 0.75rem;">
              </td>
            </tr>
          </tbody>
        </table>
      </td>
     
      <td style="text-align: center;border-left: 1px solid #000;">
        <div>
          <input disabled={true} style="margin: 0px 10px !important;" class="form-check-input" type="checkbox" id="safetyRequirement28No" name="safetyRequirement28No" value="something" >
        </div>
      </td>
    </tr>
    
 
            </tbody>
          </table>
        </td>
        <td class="nobor" style="width: 2%;">
        <p>&nbsp;</p>
      </td>
        <td style="width: 48%;border: 1px solid #000;background: #feff99;">
          <table style="width: 100%;background: #feff99;">
            <tbody>
              <tr style="border-bottom: 1px solid #000;">
                <td style="width: 90%;text-align: center;">
                  <p style="font-size: 10px;font-weight: 600;">Safety Precautions</p>
                 
                </td>
                <td style="width: 10%;border-left: 1px solid #000;text-align: center;">
                  <p style="font-size: 10px;font-weight: 600;">Yes/ No</p>
                </td>
                
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;"><b>A. Equipment Cleaning  </b></p>
                </td>
                <td>
                  <p style="margin: 0;">&nbsp;</p>
                </td>
                <td>
                  <p style="margin: 0;">&nbsp;</p>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">1. Emptyed </p>
                </td>
                
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.Emptyed %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA1No" name="safetyRequirementA1No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">2. Depressurized </p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.ReleasedFromPressure %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA2No" name="safetyRequirementA2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">3. Water Flushed </p>
                </td>
                
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.Washed %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA3No" name="safetyRequirementA3No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">4. Steaming-out </p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.Steamed %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA4No" name="safetyRequirementA4No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0;padding-left: 10px;">
                  <table style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="width: 33.33%;">
                          <p style="font-size: 10px;font-weight: 500;margin-left: 0px;">5. Cooled by </p>
                        </td>
                        <td style="width: 33.33%;">
                        <div style="display: flex;align-items: center; position: relative;">
                    <input disabled={true} {% if SafetyRequirements.Natural__hot == "0" %} checked {% endif %}  {% if SafetyRequirements.Natural__hot == undefined %} checked {% endif %} class="form-check-input" type="checkbox" id="new" name="new" value={{Natural__hot}}  >

                          <label class="form-check-label"><p style="font-size: 10px;">Natural</p></label>
                          </div>
                        </td>
                        <td style="width: 33.33%;">
                        <div style="display: flex;align-items: center; position: relative;">
                        <input disabled={true} {% if SafetyRequirements.Natural__hot == "1" %} checked {% endif %} class="form-check-input" type="checkbox" id="extend" name="extend" value="something" >

                          <label class="form-check-label"><p style="font-size: 10px;">Forced </p></label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                  <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.PushedFlushedWithWater %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA5No" name="safetyRequirementA5No" value="something" >

                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">6. N2 purged  </p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                  <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.Cooled1 %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6No" name="safetyRequirementA6No" value="something" >

                  </div>
                </td>
              </tr>
              
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">7. Area free from flemmable, cumbstile and corrosive materials </p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.PurgedWithInertGas %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA7No" name="safetyRequirementA7No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">8. Truely ventilated</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.CleanedOfDepositsScaleEntrapmentOfCombustibleMaterialsToxicCorrosive %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA8No" name="safetyRequirementA8No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">9. Grounding</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.Ventilation %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA9No" name="safetyRequirementA9No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
              <td>
                <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">10. Fire extinguisher</p>
              </td>
             
              <td style="border-left: 1px solid #000;text-align: center;">
                <div>
                  <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.fireExtinguisher%} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA9No" name="safetyRequirementA9No" value="something" >
                </div>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td>
              <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">11. Erect sign and barrie</p>
            </td>
           
            <td style="border-left: 1px solid #000;text-align: center;">
              <div>
                <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.erectSignAndBarrier %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA9No" name="safetyRequirementA9No" value="something" >
              </div>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #000;">
          <td>
            <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">12. Control working hour</p>
          </td>
         
          <td style="border-left: 1px solid #000;text-align: center;">
            <div>
              <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.ControlWorkingHour1%} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA9No" name="safetyRequirementA9No" value="something" >
            </div>
          </td>
        </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;"><b>B. Isolation Requirement (For Simple Isolation, Use This Checkbox)</b>
                  <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.Ventilation %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA9No" name="safetyRequirementA9No" value="something" >
                  </p>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">1. Mechanical</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.Mechanical %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB1No" name="safetyRequirementB1No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">2. Electric</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.Electricity %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementB2No" name="safetyRequirementB2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;"><b>C. Other safeguards</b></p>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">1. All sewer drains and fittings, at a distance of 15 meters from the site work has been closed</p>
                </td>
                
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.AllSewerDrainsAndEnclosuresAtADistanceOf15MetersFromTheSiteWorkHasBeenClosed %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC1No" name="safetyRequirementC1No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">2. Secure the area from flammable material (leakage)</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.SecureAreaFromFlammableMaterialLeakage %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC2No" name="safetyRequirementC2No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">3. Standby fire extinguisher (APAR, Water Spray, Fire Blanket)</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.StandByFireExtinguishersAparWaterSprayFireBlanket %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC3No" name="safetyRequirementC3No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">4. Explosion proof equipment</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.ExplosionProofEquipment %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC4No" name="safetyRequirementC4No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">5. Lighting with electric voltage (Low, High)</p>
                </td>
                
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.ElectricLightingWithVoltageLowHigh %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC5No" name="safetyRequirementC5No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">6. The power breaker has been grounded</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.ThePowerBreakerHasBeenGrounded %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC6No" name="safetyRequirementC6No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">7. Temporary lighting according to its classification and in good condition</p>
                </td>
                
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.TemporaryLightingAccordingToClassificationAndInGoodCondition %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC7No" name="safetyRequirementC7No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td style="padding: 0;padding-left: 10px;">
                  <table style="width:100%">
                    <tbody>
                      <tr colspan="4">
                        <td>
                          <p style="font-size: 10px;font-weight: 500;margin-left: 0px;">8. Standby fireman</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 25%;">
                          <div style="display: flex;align-items: center; position: relative;">
                            <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.fireman %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirementA6Experience" name="safetyRequirementA6Experience" value="something" >
                            <label class="form-check-label"><p style="font-size: 10px;">Fireman</p></label>
                          </div>
                        </td>
                        <td style="width: 25%;">
                          <div style="display: flex;align-items: center; position: relative;">
                            <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.safetyman %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirementA6Mechanical" name="safetyRequirementA6Mechanical" value="something" >
                            <label class="form-check-label"><p style="font-size: 10px;">Safetyman</p></label>
                          </div>
                        </td>
                        <td style="width: 25%;">
                          <div style="display: flex;align-items: center; position: relative;">
                            <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.rescuer %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementA6Mechanical" name="safetyRequirementA6Mechanical" value="something" >
                            <label class="form-check-label"><p style="font-size: 10px;">Rescuer</p></label>
                          </div>
                        </td>
                        <td style="width: 25%;">
                          <div style="display: flex;align-items: center; position: relative;">
                            <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.paramedis %} checked {% endif %}  class="form-check-input" type="checkbox" id="safetyRequirementA6Mechanical" name="safetyRequirementA6Mechanical" value="something" >
                            <label class="form-check-label"><p style="font-size: 10px;">Paramedic</p></label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.StandBy %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC8No" name="safetyRequirementC8No" value="something" >
                  </div>
                </td>
              </tr>
              
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">9. All welding equipment has been placed in a safe position, bonded and grounded</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.AllWeldingEquipmentHasBeenPlacedInASafePositionBondedAndGrounded %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC9No" name="safetyRequirementC9No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">10. Work must be continuously wetted with water</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true}  style="margin: 0 !important;" {% if SafetyRequirements.WorkMustBeContinuouslyMoistenedWithWater %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC10No" name="safetyRequirementC10No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">11. Welding equipment, cutting tools and all machines have been placed in a safe place </p>
                </td>
                
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.WeldingEquipmentCuttingToolsAndAllMachinesHaveBeenPlacedInASafePlace %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC11No" name="safetyRequirementC11No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">12. Auxiliary equipment, ladders, scaffolding, air propulsion, lighting cables, tools, (tools), diesel engines, compressors, blowers meet the requirements</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.AuxiliaryEquipmentLaddersScaffoldingAirPropulsionLightingCablesToolsToolsDieselEnginesCompressorsBlowersMeetTheRequirements %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC12No" name="safetyRequirementC12No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">13. All machines must be placed in a safe location</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.AllMachinesMustBePlacedInASafeLocation %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC13No" name="safetyRequirementC13No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #000;">
                <td>
                  <p style="font-size: 10px;font-weight: 500;margin-left: 10px;">14. Evacuation routes are prepared</p>
                </td>
               
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true} style="margin: 0 !important;" {% if SafetyRequirements.EvacuationRoutesArePrepared %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC14No" name="safetyRequirementC14No" value="something" >
                  </div>
                </td>
              </tr>
              <tr style="">
              <td style="padding-left: 10px;">
              <table style="width: 100%;padding-left: 10px;">
                <tbody>
                  <tr>
                    <td style="width: 50%;">
                      <p style="font-size: 10px;font-weight: 500;margin-left: 0px;">15. Gas test every: {{SafetyRequirements.select1}} </p>
                    </td>
                   
                    
                  </tr>
                </tbody>
              </table>
            </td>
           
                <td style="border-left: 1px solid #000;text-align: center;">
                  <div>
                    <input  disabled={true}  style="margin: 0 !important;" {% if SafetyRequirements.GasTestEvery %} checked {% endif %} class="form-check-input" type="checkbox" id="safetyRequirementC15No" name="safetyRequirementC15No" value="something" >
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
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 12px;"><b>SPECIAL INSTRUCTIONS</b></p>
        </td>
      </tr>
      <tr style="background: #feff99;">
        <td style="width: 33.33%;padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.cekAreaJanganAdaBocoranGasMinyak %} checked {% endif %}   class="form-check-input" type="checkbox" id="noGasOilLeaks" name="noGasOilLeaks" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Check the area, there are no gas/ oil leaks</p></label>
          </div>
        </td>
        <td style="width: 33.33%;padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.checkO2OxygenContent %} checked {% endif %}   class="form-check-input" type="checkbox" id="contentOfO2" name="contentOfO2" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Check O2 (oxygen) content</p></label>
          </div>
        </td>
        <td style="width: 33.33%;padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;"  {% if SpecialInstruction.checkbox%} checked {% endif %}  class="form-check-input" type="checkbox" id="scaffoldTagging" name="scaffoldTagging" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Scaffold must be "Tagging"</p></label>
          </div>
        </td>
      </tr>
      <tr style="background: #feff99;">
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.cekSekringAlatListrikYgDigunakan %} checked {% endif %}  class="form-check-input" type="checkbox" id="fuseOfElectricTool" name="fuseOfElectricTool" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Check the fuse of the electric tool used</p></label>
          </div>
        </td>
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.cekKandunganToxicGasH2SCo %} checked {% endif %}   class="form-check-input" type="checkbox" id="contentOfToxicGas" name="contentOfToxicGas" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Check content toxic gas (H2S/ CO)</p></label>
          </div>
        </td>
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.gerindaHarusPakaiCover %} checked {% endif %}  class="form-check-input" type="checkbox" id="grinderMustUseCover" name="grinderMustUseCover" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">The grinder must safely cover</p></label>
          </div>
        </td>
      </tr>
      <tr style="background: #feff99;">
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.cekSambunganKabelListrikYgDigunakan %} checked {% endif %}   class="form-check-input" type="checkbox" id="connectionOfElectricCable" name="connectionOfElectricCable" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Check the connection of the electric cable used</p></label>
          </div>
        </td>
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.instalUlangSemuaIsolasiYgDiduka %} checked {% endif %}  class="form-check-input" type="checkbox" id="reinstallAllIsolation" name="reinstallAllIsolation" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Ensure opened isolation is reinstalled</p></label>
          </div>
        </td>
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.pergunakanSteamUntukProteksi %} checked {% endif %}  class="form-check-input" type="checkbox" id="steamForProtection" name="steamForProtection" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Blanket with steam for protection</p></label>
          </div>
        </td>
      </tr>
      <tr style="background: #feff99;">
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.pastikanBahwaGastestTelahDilakukan %} checked {% endif %}  class="form-check-input" type="checkbox" id="gastestHasBeenDone" name="gastestHasBeenDone" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Ensure gas test completed</p></label>
          </div>
        </td>
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.ventilasiBlowerHarusSelaluDilakukan %} checked {% endif %}  class="form-check-input" type="checkbox" id="ventilationBlowerMustBeDone" name="ventilationBlowerMustBeDone" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Running ventilation/ blower</p></label>
          </div>
        </td>
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.kabelMassaDekatDgnTitikLas %} checked {% endif %}  class="form-check-input" type="checkbox" id="cableMassCloseToWeldingPoint" name="cableMassCloseToWeldingPoint" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Negative grounded cable near to welding point</p></label>
          </div>
        </td>
      </tr>
      <tr style="background: #feff99;">
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.monitoringGasRutinSelamaPekerjaan %} checked {% endif %}   class="form-check-input" type="checkbox" id="routineGasMonitoringDuringWork" name="routineGasMonitoringDuringWork" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Regular gas monitoring during work</p></label>
          </div>
        </td>
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.tutupSewerDrainSumpDgFireBlanket %} checked {% endif %}  class="form-check-input" type="checkbox" id="coverSewerDrainSumpWithFireBlanket" name="coverSewerDrainSumpWithFireBlanket" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Cover the sewer, drain, sump with fire blanket</p></label>
          </div>
        </td>
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.kabelMassaTdkDisambungDgnUnit %} checked {% endif %}  class="form-check-input" type="checkbox" id="massCableNotConnectedToUnit" name="massCableNotConnectedToUnit" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Negative grounded cable is not connected to ground</p></label>
          </div>
        </td>
      </tr>
      <tr style="background: #feff99;">
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.pastikanRambuRadioaktifTersediaDiLokasi %} checked {% endif %}   class="form-check-input" type="checkbox" id="radioactiveSignsAreAvailableOnSite" name="radioactiveSignsAreAvailableOnSite" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Make sure radioactive signs are available on site</p></label>
          </div>
        </td>
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.tutupGateBundwallSelamaKerja%} checked {% endif %}   class="form-check-input" type="checkbox" id="closeGateBundwallDuringWork" name="closeGateBundwallDuringWork" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Close the bundwall's gate while working</p></label>
          </div>
        </td>
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.suratLzinOperasiOperatorSesuaiKlasifikasi %} checked {% endif %}   class="form-check-input" type="checkbox" id="operatorOperationPermitAccordingToClassification" name="operatorOperationPermitAccordingToClassification" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Special operation certificate</p></label>
          </div>
        </td>
      </tr>
      <tr style="background: #feff99;">
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.pasangBarikadeDiLokasiKerja %} checked {% endif %}  class="form-check-input" type="checkbox" id="putBarricadesOnJobSite" name="putBarricadesOnJobSite" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Ensure gas test completed </p></label>
          </div>
        </td>
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            <input disabled={true} style="margin: 5px 10px !important;" {% if SpecialInstruction.bukaGateBundwallPeriodically %} checked {% endif %}  class="form-check-input" type="checkbox" id="openBundwallGatePeriodically" name="openBundwallGatePeriodically" value="something" >
            <label class="form-check-label"><p style="font-size: 10px;font-weight: 500;margin: 0;">Open the bundwall gate periodically</p></label>
          </div>
        </td>
        <td style="padding: 0px;">
          <div style="display: flex;align-items: center; position: relative;">
            
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="page-break"></div>
  <table style="border: 1px solid #000;border-top: none;width: 100%;" class="section2cold">
    <tbody>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 12px;"><b>WARNING !! PROCEDURE IN EMERGENCY OR FIRE ALARM RINGS</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #feff99;padding: 0 0.5rem;">
          <p style="font-size: 10px;font-weight: 500;">1. Stop all work, withdraw all Workers who work in confined spaces or heights.</p>
          <p style="font-size: 10px;font-weight: 500;">2. Turn off all rotating, electrical equipment and cover the Acetylene/ Propane gas cylinder.</p>
          <p style="font-size: 10px;font-weight: 500;">3. Stop using Fire water and make sure the workplace is safe to leave.</p>
          <p style="font-size: 10px;font-weight: 500;">4. Immediately go to the assembly point for evacuation (Assembly Point).</p>
          <p style="font-size: 10px;font-weight: 500;">5. The nearest Assembly Point is at. {{SpecialInstruction.textField}}  </p></p>
          <p style="font-size: 10px;font-weight: 500;">6. Return this SIKA HOT to the Area Authority (GSI).</p>
          <p style="font-size: 10px;font-weight: 500;">7. In case of an emergency, call tel. {{SpecialInstruction.textField1}} </p></p>
          <p style="font-size: 10px;font-weight: 500;">8. If you need to consult on safety aspects, please contact the Safety inspector area</p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="margin: 0;font-size: 12px;"><b>Section 3: Issuance Of Work License By An Area Authority (GSI) Officer</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #feff99;padding: 0 0.5rem;">
          <p style="font-size: 10px;"><b>Area Authority (GSI)</b></p>
          <p style="font-size: 10px;font-weight: 500;">I have checked the work site, tools, work to be carried out and the condition is safe and allowed to start work</p>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;padding-top: 15px;">Name: {{AuthorizationAcceptance.name7}}</p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="margin: 0px;font-size: 12px;"><b>Section 4: Receipt Of Work Permit By Work Executor (Permorning Authority (Ahil Teknik))</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #ccffcc;padding: 0 0.5rem;">
          <p style="font-size: 10px;"><b>Authorized Technician</b></p>
          <p style="font-size: 10px;font-weight: 500;">I understand and comply with all precautions and Good House Keeping before and during the work carried out and will contact officials authorized operation when work begins.</p>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;padding-top: 15px;">Name: {{AuthorizationAcceptance.name8}}</p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="margin: 0px;font-size: 12px;"><b>Section 5: Handover By The Permorning Authority (Ahil Teknik) (Signed By Permorning Authority (Ahil Teknik) After The Work Is Completed)</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #ccffcc;padding: 0 0.5rem;">
         
          <p style="font-size: 10px;font-weight: 500;">The work has been completed, all materials and equipment are ready to operate in a safe condition and the work area has been cleaned Not yet completed and the conditions are as follows:</p>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;padding-top: 15px;">Name: {{AuthorizationAcceptance.name9}}</p>
          </div>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td colspan="4" style="padding: 0 0.5rem;">
          <p style="margin: 0px;font-size: 12px;"><b>Section 6: Re-admission By Area Authority (GSI) (Permit Closing, After The Work Is Declared Complete And Safe)</b></p>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000;">
        <td style="background: #feff99;padding: 0 0.5rem;">
          
          <p style="font-size: 10px;font-weight: 500;">I have checked the equipment, materials and workplace and agree to the conditions</p>
          <div class="inline-flex">
            <p style="font-size: 10px;font-weight: 500;padding-top: 15px;">Name: {{AuthorizationAcceptance.name10}}</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="border: 1px solid #000;border-top: none;width: 100%;">
  <tbody>
    <tr style="border-bottom: 1px solid #000;">
      <td colspan="7" style="padding: 0 0.5rem;">
        <p style="font-size: 12px;margin: 0px;"><b>GAS RE-EXAMINATION (PERFORMED ONLY IF THERE IS A POTENTIAL TOXIC GAS OR OXYGEN DEFICIENCY)</b></p>
      </td>
    </tr>
    <tr style="border-bottom: 1px solid #000;">
      <td colspan="7" style="padding: 0 0.5rem;">
      <p style="font-size: 10px;font-weight: 500;">Re-examination of toxic gas and or O2 (Standard range O2 19.5% - 23.5%)</p>
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
          <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.date}}</p>
        </td>
      {% endfor %}
    </tr>
    <tr style="border-bottom: 1px solid #000;">
      {% for item in data.data %}
        {%- if forloop.index0 == 0 -%}
        <td style="padding: 0px;padding-left: 10px;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;">Time</p>
        </td>
        {%- endif -%}
        <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
          <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.clock}}</p>
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
          <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.coldName}}</p>
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
          <img src={{item.img}} class="logo" style="width: 36%;padding-top: 1px;" />
          </p>
        </td>
      {% endfor %}
    </tr>
    <tr style="border-bottom: 0.5px solid #000;">
      {% for item in data.data %}
        {%- if forloop.index0 == 0 -%}
        <td style="padding: 0px;padding-left: 10px;background: #feff99;">
          <p style="font-size: 10px;font-weight: 500;">% LEL</p>
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
          <p style="font-size: 10px;font-weight: 500;">Oxygen/ CO</p>
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
          <p style="font-size: 10px;font-weight: 500;">H2S</p>
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
          <p style="font-size: 10px;font-weight: 500;">Others</p>
        </td>
        {%- endif -%}
        <td style="padding: 0px;border-left: 0.5px solid #000; border-right: 0.5px solid #000;">
          <p style="font-size: 10px;font-weight: 500;padding-left: 10px;">{{item.coldothers}}</p>
        </td>
      {% endfor %}
    </tr>
    {% endfor %}
  </tbody>
</table>

 </main>
</div>
</div>`;
