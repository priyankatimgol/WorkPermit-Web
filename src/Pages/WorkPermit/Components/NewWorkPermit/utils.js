import moment from 'moment';

// const FirstArr = (item) => {
//   const newArray2 = Object.values(JSON.parse(localStorage.getItem('formdata'))).filter((val) =>
//     val.checklistName.includes(item),
//   );
//   return newArray2;
// };

export const DataRequired = (step,printData,formdata) => {
  const FirstArr = (item) => {
    const newArray2 = Object.values(formdata)?.filter((val) =>
      val?.checklistName?.includes(item),
    );
    return newArray2;
  };
  //const RespData = JSON.parse(localStorage.getItem('printData'));
  const RespData =printData;
  const areaname = localStorage.getItem('areainfoname');
  const statusName = localStorage.getItem('statusName');
  const zone = localStorage.getItem('zonename');
  const extraDetails = {
    updateDate: moment(RespData?.updateDate).format('YYYY-MM-DD') || '',
    validFrom: {
      date: moment(RespData?.validFrom).format('YYYY-MM-DD') || '',
      time: moment(RespData?.validFrom).format('hh:mm:ss A') || '',
    },
    validTo: {
      date: moment(RespData?.validTo).format('YYYY-MM-DD') || '',
      time: moment(RespData?.validTo).format('hh:mm:ss A'),
    },
    workOrder: RespData?.workOrder || '',
    zone: zone || '',
    discipline: RespData?.discipline || '',
    description: RespData?.description || '',
    createDate: moment(RespData?.createDate).format('YYYY-MM-DD') || '',
    title: RespData?.title || '',
    area: areaname || '',
    date: moment(RespData?.date).format('YYYY-MM-DD') || '',
    system: RespData?.system || '',
    number: RespData?.number || '',
    applicant: RespData?.applicant || '',
    statusName: statusName || '',
    riskfactor: RespData?.type || '',
    safejob: RespData?.safejob || '',
  };
  const handleGaseInfo = (value) => {
    const newdata = JSON.parse(localStorage.getItem('newdata'));
    for (const obj of value) {
      // Check if obj is null or undefined
      if (!obj || (!obj.name && !obj.select)) {
          continue; // Skip the iteration if obj is null or both name and select are falsy
      }
  
      const compareName = obj.name ? obj.name.toUpperCase() : '';
      const compareSelect = obj.select ? obj.select.toUpperCase() : '';
  
      let found = false;
  
      for (const data of newdata) {
          const userName = data.userName ? data.userName.toUpperCase() : '';
  
          if (compareName === userName || compareSelect === userName) {
              obj.img = data.signature;
              found = true;
              break;
          }
      }
  
      if (!found) {
          obj.img = ''; // Set img to empty string if no match is found
      }
    }

    let indexes = [0, 6, 12, 18, 24];

    if (value) {
      let shareGasInfo = value.map((i) => {
        return {
          excavationdate: (i.date && moment(i.dateTime).format('YYYY-MM-DD')) || '',
          excavationtime: (i.time && moment(i.dateTime).format('HH : MM')) || '',
          date: (i.dateTime && moment(i.dateTime).format('YYYY-MM-DD')) || '',
          date1: (i.dateTime1 && moment(i.dateTime1).format('YYYY-MM-DD')) || '',
          date34: (i.dateTime34 && moment(i.dateTime34).format('YYYY-MM-DD')) || '',
          time: (i.dateTime && moment(i.dateTime).format('HH : MM')) || '',
          clock: i.oclock,
          name: i.textField11,
          name1: i.textField6,
          name2: i.textField48,
          number: i.number,
          name36: i.number36,
          name12: i.name,
          nopek: i.nopek,
          dateTime36: i.dateTime36,
          textField15: i.textField15,
          coldlel: i.textField,
          coldoxygenco: i.textField1,
          coldName: i.select,
          coldH2s: i.textField3,
          coldothers: i.textField4,
          lel: i.number,
          co: i.co,
          oxy: i.oxygen,
          h2s: i.h2S,
          status: i.textField5,
          measurment: i.select,
          combustile: i.textField2,
          others: i.others,
          img: i.img,
          Reading: i.reading,
        };
      });
      let arrBreakDown = indexes.map((e, i) => {
        return { data: shareGasInfo.slice(e, indexes[i + 1]) };
      });
      return arrBreakDown;
    }
    return [];
  };

  switch (step) {
    case 1:
      //Hot Work//
      return {
        tools:
          (FirstArr('Used Tools')[0] &&
            FirstArr('Used Tools')[0].formData &&
            FirstArr('Used Tools')[0].formData.data &&
            FirstArr('Used Tools')[0].formData.data.container1) ||
          {},
        JobApplication:
          (FirstArr('Site Job Detail')[0] &&
            FirstArr('Site Job Detail')[0].formData &&
            FirstArr('Site Job Detail')[0].formData.data &&
            FirstArr('Site Job Detail')[0].formData.data.container2) ||
          {},
        IdentifyPotential:
          (FirstArr('Identify Potential Hazards')[0] &&
            FirstArr('Identify Potential Hazards')[0].formData &&
            FirstArr('Identify Potential Hazards')[0].formData.data &&
            FirstArr('Identify Potential Hazards')[0].formData.data.container1) ||
          {},
        PersonalProtective:
          (FirstArr('Personal')[0] &&
            FirstArr('Personal')[0].formData &&
            FirstArr('Personal')[0].formData.data &&
            FirstArr('Personal')[0].formData.data.container) ||
          {},
        SafetyRequirements:
          (FirstArr('Requirements')[0] &&
            FirstArr('Requirements')[0].formData &&
            FirstArr('Requirements')[0].formData.data &&
            FirstArr('Requirements')[0].formData.data.container1) ||
          {},
        MarkAnyDocumentsRequired:
          (FirstArr('Supplementary Required Documents')[0] &&
            FirstArr('Supplementary Required Documents')[0].formData &&
            FirstArr('Supplementary Required Documents')[0].formData.data &&
            FirstArr('Supplementary Required Documents')[0].formData.data.container2) ||
          {},
        SpecialInstruction:
          (FirstArr('Special Instructions')[0] &&
            FirstArr('Special Instructions')[0].formData &&
            FirstArr('Special Instructions')[0].formData.data &&
            FirstArr('Special Instructions')[0].formData.data.container1) ||
          {},
        AuthorizationAcceptance:
          (FirstArr('Authorization')[0] &&
            FirstArr('Authorization')[0].formData &&
            FirstArr('Authorization')[0].formData.data &&
            FirstArr('Authorization')[0].formData.data.container) ||
          {},
        GasInspection:
          (FirstArr('RE-INSPECTION')[0] &&
            FirstArr('RE-INSPECTION')[0].formData &&
            FirstArr('RE-INSPECTION')[0].formData.data &&
            FirstArr('RE-INSPECTION')[0].formData.data.container1 &&
            FirstArr('RE-INSPECTION')[0].formData.data.container1.dataGrid &&
            handleGaseInfo(FirstArr('RE-INSPECTION')[0].formData.data.container1.dataGrid)) ||
          {},
        extraDetails: extraDetails,
      };
    case 2:
      //Cold Work//
      return {
        tools:
          (FirstArr('Tools')[0] &&
            FirstArr('Tools')[0].formData &&
            FirstArr('Tools')[0].formData.data &&
            FirstArr('Tools')[0].formData.data.container) ||
          {},
        JobApplication:
          (FirstArr('Site Job Detail')[0] &&
            FirstArr('Site Job Detail')[0].formData &&
            FirstArr('Site Job Detail')[0].formData.data &&
            FirstArr('Site Job Detail')[0].formData.data.container1) ||
          {},
        IdentifyPotential:
          (FirstArr('Identify')[0] &&
            FirstArr('Identify')[0].formData &&
            FirstArr('Identify')[0].formData.data &&
            FirstArr('Identify')[0].formData.data.container) ||
          {},
        PersonalProtective:
          (FirstArr('Personal')[0] &&
            FirstArr('Personal')[0].formData &&
            FirstArr('Personal')[0].formData.data &&
            FirstArr('Personal')[0].formData.data.container) ||
          {},
        SafetyRequirements:
          (FirstArr('Requirements')[0] &&
            FirstArr('Requirements')[0].formData &&
            FirstArr('Requirements')[0].formData.data &&
            FirstArr('Requirements')[0].formData.data.container1) ||
          {},
        SpecialInstruction:
          (FirstArr('Instructions')[0] &&
            FirstArr('Instructions')[0].formData &&
            FirstArr('Instructions')[0].formData.data &&
            FirstArr('Instructions')[0].formData.data.container) ||
          {},
        MarkAnyDocumentsRequiredToBeAttached:
          (FirstArr('Supplementary Required Documents')[0] &&
            FirstArr('Supplementary Required Documents')[0].formData &&
            FirstArr('Supplementary Required Documents')[0].formData.data &&
            FirstArr('Supplementary Required Documents')[0].formData.data.container3) ||
          {},
        AuthorizationAcceptance:
          (FirstArr('Authorization')[0] &&
            FirstArr('Authorization')[0].formData &&
            FirstArr('Authorization')[0].formData.data &&
            FirstArr('Authorization')[0].formData.data.container) ||
          {},
        GasInspection:
          (FirstArr('GAS RE-EXAMINATION')[0].formData &&
            FirstArr('GAS RE-EXAMINATION')[0].formData.data &&
            FirstArr('GAS RE-EXAMINATION')[0].formData.data.container &&
            FirstArr('GAS RE-EXAMINATION')[0].formData.data.container.dataGrid &&
            handleGaseInfo(FirstArr('GAS RE-EXAMINATION')[0].formData.data.container.dataGrid)) ||
          {},
        extraDetails: extraDetails,
      };
    case 3:
      //Common//
      return {};
    case 4:
      //Instrument//
      return {
        JobApplication:
          (FirstArr('Application')[0] &&
            FirstArr('Application')[0].formData &&
            FirstArr('Application')[0].formData.data &&
            FirstArr('Application')[0].formData.data.container1) ||
          {},
        SafetyRequirements:
          (FirstArr('Security Requirements')[0] &&
            FirstArr('Security Requirements')[0].formData &&
            FirstArr('Security Requirements')[0].formData.data &&
            FirstArr('Security Requirements')[0].formData.data.container) ||
          {},
        NeedSika:
          (FirstArr('SIKA')[0] &&
            FirstArr('SIKA')[0].formData &&
            FirstArr('SIKA')[0].formData.data &&
            FirstArr('SIKA')[0].formData.data.container3) ||
          {},
        SpecialInstruction:
          (FirstArr('Instructions')[0] &&
            FirstArr('Instructions')[0].formData &&
            FirstArr('Instructions')[0].formData.data &&
            FirstArr('Instructions')[0].formData.data.container) ||
          {},
        AuthorizationAcceptance:
          (FirstArr('Authorization')[0] &&
            FirstArr('Authorization')[0].formData &&
            FirstArr('Authorization')[0].formData.data &&
            FirstArr('Authorization')[0].formData.data.container) ||
          {},
        extraDetails: extraDetails,
      };
    case 5:
      //Confined Space//
      return {
        JobApplication:
          (FirstArr('Job Application')[0] &&
            FirstArr('Job Application')[0].formData &&
            FirstArr('Job Application')[0].formData.data &&
            FirstArr('Job Application')[0].formData.data.container1) ||
          {},
        SafetyRequirements:
          (FirstArr('Safety Requirements')[0] &&
            FirstArr('Safety Requirements')[0].formData &&
            FirstArr('Safety Requirements')[0].formData.data &&
            FirstArr('Safety Requirements')[0].formData.data.container2) ||
          {},
        NeedSika:
          (FirstArr('Mark Any Documents Required To Be Attached')[0] &&
            FirstArr('Mark Any Documents Required To Be Attached')[0].formData &&
            FirstArr('Mark Any Documents Required To Be Attached')[0].formData.data &&
            FirstArr('Mark Any Documents Required To Be Attached')[0].formData.data.container3) ||
          {},
        SpecialInstruction:
          (FirstArr('Instructions')[0] &&
            FirstArr('Instructions')[0].formData &&
            FirstArr('Instructions')[0].formData.data &&
            FirstArr('Instructions')[0].formData.data.container) ||
          {},
        AuthorizationAcceptance:
          (FirstArr('Authorization')[0] &&
            FirstArr('Authorization')[0].formData &&
            FirstArr('Authorization')[0].formData.data &&
            FirstArr('Authorization')[0].formData.data.container) ||
          {},
        GasInspection:
          (FirstArr('Gas')[0]?.formData &&
            FirstArr('Gas')[0]?.formData?.data &&
            FirstArr('Gas')[0]?.formData.data?.container &&
            FirstArr('Gas')[0]?.formData?.data?.container?.dataGrid &&
            handleGaseInfo(FirstArr('Gas')[0]?.formData?.data?.container?.dataGrid)) ||
          {},
        extraDetails: extraDetails,
      };
    case 6:
      //Excavation//
      return {
        JobApplication:
          (FirstArr('Job Application')[0] &&
            FirstArr('Job Application')[0].formData &&
            FirstArr('Job Application')[0].formData.data &&
            FirstArr('Job Application')[0].formData.data.container2) ||
          {},

        SafetyRequirements:
          (FirstArr('Requirements')[0] &&
            FirstArr('Requirements')[0].formData &&
            FirstArr('Requirements')[0].formData.data.container) ||
          {},
        AuthorizationAcceptance:
          (FirstArr('Authorization')[0] &&
            FirstArr('Authorization')[0].formData &&
            FirstArr('Authorization')[0].formData.data &&
            FirstArr('Authorization')[0].formData.data.container) ||
          {},
        GasInspection:
          (FirstArr('Gas')[0]?.formData &&
            FirstArr('Gas')[0]?.formData?.data &&
            FirstArr('Gas')[0]?.formData?.data?.container1 &&
            FirstArr('Gas')[0]?.formData?.data?.container1?.dataGrid &&
            handleGaseInfo(FirstArr('Gas')[0]?.formData?.data?.container1?.dataGrid)) ||
          {},
        extraDetails: extraDetails,
      };
    case 7:
      //Photo//
      return {
        JobApplication:
          (FirstArr('Application')[0] &&
            FirstArr('Application')[0].formData &&
            FirstArr('Application')[0].formData.data &&
            FirstArr('Application')[0].formData.data.container) ||
          {},
        AuthorizationAcceptance:
          (FirstArr('Authorization')[0] &&
            FirstArr('Authorization')[0].formData &&
            FirstArr('Authorization')[0].formData.data &&
            FirstArr('Authorization')[0].formData.data.container) ||
          {},
        RiskAssessment:
          (FirstArr('Assessment')[0] &&
            FirstArr('Assessment')[0].formData &&
            FirstArr('Assessment')[0].formData.data &&
            FirstArr('Assessment')[0].formData.data.container) ||
          {},
        GasInspection:
          (FirstArr('Application')[0]?.formData &&
            FirstArr('Application')[0]?.formData?.data &&
            FirstArr('Application')[0]?.formData?.data?.container &&
            FirstArr('Application')[0]?.formData?.data?.container?.dataGrid &&
            handleGaseInfo(FirstArr('Application')[0]?.formData?.data?.container?.dataGrid)) ||
          {},
        extraDetails: extraDetails,
      };
    case 8:
      //Fire Equipment//
      return {
        JobApplication:
          (FirstArr('Application')[0] &&
            FirstArr('Application')[0].formData &&
            FirstArr('Application')[0].formData.data &&
            FirstArr('Application')[0].formData.data.container) ||
          {},
        AuthorizationAcceptance:
          (FirstArr('Authorization')[0] &&
            FirstArr('Authorization')[0].formData &&
            FirstArr('Authorization')[0].formData.data &&
            FirstArr('Authorization')[0].formData.data.container) ||
          {},
        extraDetails: extraDetails,
      };
    case 9:
      //Vehicle Entry//
      return {
        JobApplication:
          (FirstArr('Application')[0] &&
            FirstArr('Application')[0].formData &&
            FirstArr('Application')[0].formData.data &&
            FirstArr('Application')[0].formData.data.container) ||
          {},
        Vehicle:
          (FirstArr('Vehicle')[0] &&
            FirstArr('Vehicle')[0].formData &&
            FirstArr('Vehicle')[0].formData.data &&
            FirstArr('Vehicle')[0].formData.data.container1) ||
          {},
        Safety_Advice:
          (FirstArr('Advice')[0] &&
            FirstArr('Advice')[0].formData &&
            FirstArr('Advice')[0].formData.data &&
            FirstArr('Advice')[0].formData.data.container) ||
          {},
        AuthorizationAcceptance:
          (FirstArr('Authorization')[0] &&
            FirstArr('Authorization')[0].formData &&
            FirstArr('Authorization')[0].formData.data &&
            FirstArr('Authorization')[0].formData.data.container) ||
          {},
        GasInspection:
          (FirstArr('gas')[0]?.formData &&
            FirstArr('gas')[0]?.formData?.data &&
            FirstArr('gas')[0]?.formData?.data?.container) ||
          {},
        extraDetails: extraDetails,
      };
    case 10:
      //Radiography//
      return {
        JobApplication:
          (FirstArr('Job Application')[0] &&
            FirstArr('Job Application')[0].formData &&
            FirstArr('Job Application')[0].formData.data &&
            FirstArr('Job Application')[0].formData.data.container1) ||
          {},
        AuthorizationAcceptance:
          (FirstArr('Authorization')[0] &&
            FirstArr('Authorization')[0].formData &&
            FirstArr('Authorization')[0].formData.data &&
            FirstArr('Authorization')[0].formData.data.container) ||
          {},
        SpecialInstruction:
          (FirstArr('Instructions')[0] &&
            FirstArr('Instructions')[0].formData &&
            FirstArr('Instructions')[0].formData.data &&
            FirstArr('Instructions')[0].formData.data.container) ||
          {},
        SafetyRequirements:
          (FirstArr('To')[0] &&
            FirstArr('To')[0].formData &&
            FirstArr('To')[0].formData.data &&
            FirstArr('To')[0].formData.data.container2) ||
          {},
        GasInspection:
          (FirstArr('Radiation')[0]?.formData &&
            FirstArr('Radiation')[0]?.formData?.data &&
            FirstArr('Radiation')[0]?.formData?.data?.container &&
            FirstArr('Radiation')[0]?.formData?.data?.container?.dataGrid &&
            handleGaseInfo(FirstArr('Radiation')[0]?.formData?.data?.container?.dataGrid)) ||
          {},
        extraDetails: extraDetails,
      };
    case 11:
      //Heavy Equipment Movement//
      return {
        JobApplication:
          (FirstArr('Job Application')[0] &&
            FirstArr('Job Application')[0].formData &&
            FirstArr('Job Application')[0].formData.data &&
            FirstArr('Job Application')[0].formData.data.container1) ||
          {},
        SafetyRequirements:
          (FirstArr('Safety Requirments')[0] &&
            FirstArr('Safety Requirments')[0].formData &&
            FirstArr('Safety Requirments')[0].formData.data &&
            FirstArr('Safety Requirments')[0].formData.data.container2) ||
          {},
        NeedSika:
          (FirstArr('SIKA/Attached')[0] &&
            FirstArr('SIKA/Attached')[0].formData &&
            FirstArr('SIKA/Attached')[0].formData.data &&
            FirstArr('SIKA/Attached')[0].formData.data.container3) ||
          {},
        SpecialInstruction:
          (FirstArr('Instructions')[0] &&
            FirstArr('Instructions')[0].formData &&
            FirstArr('Instructions')[0].formData.data &&
            FirstArr('Instructions')[0].formData.data.container) ||
          {},
        AuthorizationAcceptance:
          (FirstArr('Authorization and Acceptance')[0] &&
            FirstArr('Authorization and Acceptance')[0].formData &&
            FirstArr('Authorization and Acceptance')[0].formData.data &&
            FirstArr('Authorization and Acceptance')[0].formData.data.container) ||
          {},
        GasInspection:
          (FirstArr('Gas Re-Inspection')[0]?.formData &&
            FirstArr('Gas Re-Inspection')[0]?.formData?.data &&
            FirstArr('Gas Re-Inspection')[0]?.formData?.data?.container1 &&
            FirstArr('Gas Re-Inspection')[0]?.formData?.data?.container1?.dataGrid &&
            handleGaseInfo(FirstArr('Gas Re-Inspection')[0]?.formData?.data?.container1?.dataGrid)) ||
          {},
        extraDetails: extraDetails,
      };
    case 12:
      //Underwater//
      return {
        JobApplication:
          (FirstArr('Job Application')[0] &&
            FirstArr('Job Application')[0].formData &&
            FirstArr('Job Application')[0].formData.data &&
            FirstArr('Job Application')[0].formData.data.container1) ||
          {},
        AuthorizationAcceptance:
          (FirstArr('Authorization')[0] &&
            FirstArr('Authorization')[0].formData &&
            FirstArr('Authorization')[0].formData.data &&
            FirstArr('Authorization')[0].formData.data.container) ||
          {},
        SpecialInstruction:
          (FirstArr('Instructions')[0] &&
            FirstArr('Instructions')[0].formData &&
            FirstArr('Instructions')[0].formData.data &&
            FirstArr('Instructions')[0].formData.data.container) ||
          {},
        SafetyRequirements:
          (FirstArr('Safety Requirements')[0] &&
            FirstArr('Safety Requirements')[0].formData &&
            FirstArr('Safety Requirements')[0].formData.data &&
            FirstArr('Safety Requirements')[0].formData.data.container1) ||
          {},
        extraDetails: extraDetails,
      };
    // case 13:
    //   //MSPV//
    //   return {};
    case 15:
      //Road Closure//
      return {
        NeedWorkSafty:
          (FirstArr('Requirements')[0] &&
            FirstArr('Requirements')[0].formData &&
            FirstArr('Requirements')[0].formData.data &&
            FirstArr('Requirements')[0].formData.data.container) ||
          {},
        JobSafty:
          (FirstArr('Analysis')[0] &&
            FirstArr('Analysis')[0].formData &&
            FirstArr('Analysis')[0].formData.data &&
            FirstArr('Analysis')[0].formData.data.container) ||
          {},
        JobApplication:
          (FirstArr('Application')[0] &&
            FirstArr('Application')[0].formData &&
            FirstArr('Application')[0].formData.data &&
            FirstArr('Application')[0].formData.data.container) ||
          {},
        AuthorizationAcceptance:
          (FirstArr('Authorization')[0] &&
            FirstArr('Authorization')[0].formData &&
            FirstArr('Authorization')[0].formData.data &&
            FirstArr('Authorization')[0].formData.data.container) ||
          {},
        extraDetails: extraDetails,
      };
    default:
      return { extraDetails: extraDetails };
  }
};
