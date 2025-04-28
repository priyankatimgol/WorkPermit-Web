import { ApiGetNoAuth } from 'Services/API/ApiData';
import React, { useEffect } from 'react';
import { ReactLiquid } from 'react-liquid';
import { useParams } from 'react-router-dom';
import { ColdPermitTemp } from './Templetes/ColdPermitTemp';
import { ConfinedSpace } from './Templetes/ConfinedSpace';
import { Underwater } from './Templetes/DrivingPermit';
import { ExcavationPermit } from './Templetes/ExacavationPermit';
import { FireExtinguisher } from './Templetes/FireExtinguisher';
import { HeavyEquipmentPermit } from './Templetes/HeavyEquipment';
import { Instrument } from './Templetes/InstrumentationElectrical';
import { PhotographyPermit } from './Templetes/PhotographyPermit';
import { RadiographyPermit } from './Templetes/RadiographyPermit';
import { RoadClosure } from './Templetes/RoadClosure';
import { VehicleEntry } from './Templetes/VehicalEntry';
import { HotPermitTemp } from './Templetes/hotPermit';
import { DataRequired } from './utils';

const GasInspection = [
  {
    data: [
      {
        date: '',
        date1: '',
        date34: '',
        time: '',
        name: '',
        name1: '',
        name2: '',
        number: '',
        name36: '',
        name12: '',
        nopek: '',
        dateTime36: '',
        textField15: '',
        lel1: '',
        lel: '',
        co: '',
        oxy: '',
        h2s: '',
        status: '',
        others: '',
      },
    ],
  },
];

const Print = () => {
  const [loading, setLoader] = React.useState(false);
  const [data, setData] = React.useState({});
  const [signatureprint, setSignaturePrint] = React.useState('');
  const [signaturename, setSignatureName] = React.useState('');
  const [username, setUserName] = React.useState([]);
  const { id } = useParams();
  const isNew = id === 'new' ? true : false;
  const workPermitId = isNew ? '' : id;

  const [formdata, setformdata] = React.useState({});
  const [printData, setprintData] = React.useState({});
  // const [step, setStep] = React.useState(
  //   //Number(JSON.parse(localStorage.getItem('printData')).processId) || 1,
  //   Number(printData.processId) || 1,
  // );
  const [step, setStep] = React.useState(20);

  useEffect(() => {
    const processId = Number(printData?.processId);
    setStep(isNaN(processId) ? 20 : processId);
  }, [printData]);
  useEffect(() => {
    getPrintData(workPermitId);
  }, [workPermitId]);

  const getPrintData = async (id) => {
    try {
      const res = await ApiGetNoAuth(`/WorkPermit/workpermit/${id}`);
      const responseArray = Object.entries(res.data.responseObject);
      const filteredResponseArray = responseArray.map(([key, value]) => {
        if (key === 'formData') {
          return [key, undefined];
        }
        return [key, value];
      });
      const filteredResponse = Object.fromEntries(filteredResponseArray);
      setprintData(filteredResponse);

      if (res.data.responseObject.formData != '') {
        const formData = JSON.parse(res.data.responseObject.formData);

        function findAndDeleteChecklistByName(checklistNames) {
          for (const key in formData) {
            const currentChecklistName = formData[key].checklistName;
            if (checklistNames.includes(currentChecklistName)) {
              delete formData[key];
            }
          }
          return formData;
        }

        const checklistNamesToDelete = ['Attachment', 'Isolation List'];
        const remainingObjects = findAndDeleteChecklistByName(checklistNamesToDelete);
        setformdata(remainingObjects);
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (formdata && printData) {
      setData(DataRequired(step, printData, formdata));
      setLoader(false);
    } else {
      setData({ GasInspection: GasInspection });
    }
  }, [step, printData, formdata]);

  const getScreen = () => {
    switch (step) {
      case 1:
        //Hot Work
        return HotPermitTemp;
      case 2:
        //Cold Work
        return ColdPermitTemp;
      case 3:
        //Common**
        return ConfinedSpace;
      case 4:
        //Instrument**
        return Instrument;
      case 5:
        //Confined Space//////
        return ConfinedSpace;
      case 6:
        //Excavation
        return ExcavationPermit;
      case 7:
        //Photo
        return PhotographyPermit;
      case 8:
        //Fire Equipment//////
        return FireExtinguisher;
      case 9:
        //Vehicle Entry
        return VehicleEntry;
      case 10:
        //Radiography
        return RadiographyPermit;
      case 11:
        //Heavy Equipment Movement**
        return HeavyEquipmentPermit;
      case 12:
        //Underwater**
        return Underwater;
      case 13:
        //MSPV**
        return ExcavationPermit;
      case 15:
        //Road Closure//////
        return RoadClosure;
      default:
        return null;
    }
  };
  return (
    <div>
      <ReactLiquid template={getScreen()} data={data} html />
    </div>
  );
};

export default Print;
