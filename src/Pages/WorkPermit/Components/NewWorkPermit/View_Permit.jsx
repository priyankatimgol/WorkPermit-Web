import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AccordionDetails, AccordionSummary, Tab } from '@mui/material';
import { Form, FormElement } from '@progress/kendo-react-form';
import { CardBody, PanelBar, PanelBarItem, Splitter } from '@progress/kendo-react-layout';
import CommonButton from 'Components/Buttons/CommonButton';

import { Accordion } from '@mui/material';
import Spinner from 'Components/Spinner/Spinner';
import {
  createWorkPermit,
  dynamicButton,
  getCommentList,
  getInceidentDepartmentValue,
  getusersection,
  submitToValidation,
  updateWorkPermit,
} from 'Pages/WorkPermit/api';
import { ApiGetNoAuth } from 'Services/API/ApiData';
import {
  asetvalidInvalid,
  getApplicantdatalist,
  getApplicantsList,
  getAreaSystemList,
  getAssetList,
  getSubtypeList,
  getTabs,
  getTypeList,
  getUserRole,
  getWorkFlowList,
  getWorkPermitStatusesid,
  getdisciplinedata,
  getsystemdata,
  getworkorderdata,
  getzonedata,
} from 'Services/API/masterApi';
import moment from 'moment/moment';
import { useEffect, useRef, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setStatusName } from 'store/StatusName/statusnameSlice';
import { getprocessid } from 'store/processId/processidSlice';
import Treeform from '../TreeForm';
import ViewChecklistForms from '../ViewForms';
import Attachment from '../ViewForms/attachment';
import AuditTrialdata from '../ViewForms/grid';
import IsolationList from '../ViewForms/isolationlist';
import Riskassesment from '../ViewForms/riskassesment';
import SafeJobAnalysis from '../ViewForms/safejobanalysis';
import Datasignature from '../ViewForms/signature';
import WorkflowTracker from '../WorkflowTracker';
import NewPermitForm from './Form';
import StepperComponet from './StepperComponet';
import './style.css';
const Work_Permit = (props) => {
  const param = useParams();
  const navigate = useNavigate();
  const [tabValidation, setTabValidation] = useState(false);
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const [index, setIndex] = useState();
  const [stepperData, setStepperData] = useState([]);
  const [stepperValue, setStepperValue] = useState();
  const [file, setFile] = useState('');
  const [workPermitData, setWorkPermitData] = useState({});
  const [workPermitDataApplicant, setWorkPermitDataApplicant] = useState('');
  const [workPermitDataSignature, setWorkPermitDataSignature] = useState('');
  const [statusdetails, setStatusdetails] = useState([]);
  const [marker, setMarker] = useState(null);
  const [error, setError] = useState({});
  const [isEnable, setisEnable] = useState(false);
  const [asset, setAsset] = useState([]);
  const [form, setForm] = useState([]);
  const [sectionlistform, setSectionlistform] = useState([]);
  const [type, setType] = useState([]);
  const [subtype, setSubType] = useState([]);
  const [area, setArea] = useState([]);
  const [toastermessage, setToasterMessage] = useState([]);
  const [workorder, setworkOrder] = useState([]);
  const [applicant, setApplicant] = useState([]);
  const [discipline, setDiscipline] = useState([]);
  const [zone, setZone] = useState([]);
  const [system, setSystem] = useState([]);
  const [riskfactor, setRiskFactor] = useState({
    id: '',
    type: '',
  });
  const [disabled, setDisabled] = useState(true);
  const [permit, setPermit] = useState([]);
  const [roleId, setRoleId] = useState([]);
  const [permitTypes, setPermitTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkboxValue, setcheckboxValue] = useState(false);
  const [formDefination, setFormDefinition] = useState([]);
  const [formvalidation, setFormValidation] = useState([]);
  const [showChecklistsForm, setShowChecklistsForm] = useState(false);
  const [formDefinitions, setFormDefinitions] = useState([]);
  const [formDefinitionsData, setFormDefinitionsData] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSubmittingForValidation, setIsSubmittingForValidation] = useState(false);
  const [currentAction, setCurrentAction] = useState(null);
  const [comment, setComment] = useState('');
  const [commentCheck, setCommentCheck] = useState('');
  const [assetid, setAssetid] = useState('');
  const [requestId, setRequestid] = useState('');
  const [panalbar, setPanalbar] = useState(false);
  const [isvalid, setIsvalid] = useState(false);
  const [stepperName, setStepperName] = useState('');
  const [expandedvalue, setExpandedvalue] = useState(true);
  const [expandedvalue2, setExpandedvalue2] = useState(true);
  const [isExpand, setIsExpand] = useState(true);
  const [ValueAuto, setValueAuto] = useState('');
  const [ValueAutodata, setValueAutodata] = useState('');
  const [signatureValue, setSignatureValue] = useState();
  const [showsubmit, setShowsubmit] = useState(false);
  const [saveBtn, setSaveBtn] = useState(false);
  const isNew = param?.id === 'new';
  const workPermitId = isNew ? '' : param?.id;
  const [dynaminButton, setDynamicButton] = useState([]);
  const [isintialloadeding, setIsIntialLoadeding] = useState(false);
  const [changedData, setChangeData] = useState([]);
  const [asetValue, setAsetValue] = useState('');
  const [userRole, setUserRole] = useState(false);
  const [statusId, setStatusId] = useState('');
  const [onChangeValue, setOnChangeValue] = useState(false);
  const dispatch = useDispatch();
  const formRef = useRef({});
  const [disactivetab, setTisactivetab] = useState(false);
  const [tabDisable, setTabDisabled] = useState(false);
  const [processdata, setProcessData] = useState([]);
  const [department, setDepartment] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [residualrisk, setResidualRisk] = useState('');
  const [residualriskvalue, setResidualRiskValue] = useState('');
  const Processid = useSelector(getprocessid);
  const [isolationValue, setIsolationValue] = useState(false);
  const [riskIndexValue, setriskIndexValue] = useState('');
  const [panes, setPanes] = useState([
    {
      size: '20%',
      min: '20%',
      collapsible: true,
      resizable: true,
    },
    {},
    {
      size: '80%',
      collapsible: true,
    },
  ]);
  const getProcessData = async () => {
    setLoading(true);
    try {
      const res = await getTabs();
      setLoading(false);
      let newArr = res.data?.responseObject.map((val) => ({
        wptype: val.wfType,
        processType: val.processType,
        tabId: val.tabId,
        tabName: val.tabName,
        enableTab: val.isActive === true ? 'Yes' : 'No',
      }));

      setProcessData(newArr);
    } catch (error) {
      console.log('error [getProcessData]', error);
    }
  };
  const items = [
    {
      text: 'Yes',
      id: 1,
    },
    {
      text: 'No',
      id: 2,
    },
  ];
  useEffect(() => {
    getProcessData();
  }, []);
  const validateForm = (id) => {
    let errors = {};
    let formIsValid = true;
    if (!workPermitData?.title) {
      formIsValid = false;
      errors['title'] = t('please_enter_title');
    }
    if (!workPermitData?.processId) {
      formIsValid = false;
      errors['ptype'] = t('please_select_permit_type');
    }
    if (!workPermitData?.area) {
      formIsValid = false;
      errors['area'] = t('please_select_area');
    }
    if (!workPermitData?.description) {
      formIsValid = false;
      errors['description'] = t('please_enter_description');
    }
    if (!workPermitData?.subtype) {
      formIsValid = false;
      errors['subtype'] = t('please_select_subType');
    }
    if (!workPermitData?.zone) {
      formIsValid = false;
      errors['zone'] = t('please_select_zone');
    }
    if (!workPermitData?.validFrom) {
      formIsValid = false;
      errors['validFrom'] = t('please_select_date');
    }
    if (!workPermitData?.system) {
      formIsValid = false;
      errors['system'] = t('please_select_system');
    }
    if (!workPermitData?.validTo) {
      formIsValid = false;
      errors['validTo'] = t('please_select_date');
    }
    if (!workPermitData?.safejob) {
      formIsValid = false;
      errors['safejob'] = t('please_enter_safe_job_analysis');
    }
    if (!workPermitData?.discipline) {
      formIsValid = false;
      errors['discipline'] = t('please_select_discipline');
    }
    if (!workPermitData?.type) {
      formIsValid = false;
      errors['type'] = t('please_select_risk_factor');
    }
    if (!workPermitData?.applicant && !ValueAuto) {
      formIsValid = false;
      errors['applicant'] = t('please_select_applicant');
    }
    if (workPermitData?.validFrom > workPermitData?.validTo) {
      formIsValid = false;
      errors['validTo'] = t('please_select_to_date_is_greater_than_from_date');
    }
    if (id !== 2) {
      if (!commentCheck || !file) {
        formIsValid = false;
        toast.error(t('please_add_comments_and_provide_your_signature_through_signature_section'));
      }
    }
    setError(errors);
    return formIsValid;
  };

  const handleCreate = async (dataItem) => {
    try {
      if (validateForm()) {
        workPermitData['applicant'] = workPermitDataApplicant;
        workPermitData['validFrom'] = moment(workPermitData?.validFrom).format();
        workPermitData['validTo'] = moment(workPermitData?.validTo).format();
        await createWorkPermit(
          {
            ...workPermitData,
            location: marker ? JSON.stringify(marker) : null,
            StatusCondition: comment,
          },
          workPermitData.processId,
        )
          .then(async (res) => {
            setIsUpdating(true);
            const requestId = res.data.responseObject?.requestId;
            setIsUpdating(false);
            if (res.data.responseCode === 402) {
              const message = res.data.responseMessage;
              toast.error(t(message));
            } else if (res.data.responseCode === 425) {
              const message = res.data.responseMessage;
              toast.error(t(message));
            } else {
              const message = res.data.responseMessage;
              toast.success(t(message));
              setSelected(0);
              navigate(`/manage-work-permit/${requestId}`);
            }
          })
          .catch((err) => {
            toast.error(err);
          });
      }
    } catch (err) {
      toast.error(t(err.title || 'workflow_creation_failed'));
      setIsUpdating(false);
    }
  };

  const valid = () => {
    let errors = {};
    let formIsValid = true;

    if (comment.length >= 100) {
      formIsValid = false;
      errors['comment'] = t('Comment Must be 100 Character');
    }
    setError(errors);
    return formIsValid;
  };

  const handleComment = (e) => {
    setCommentCheck(e.value.textContent);
    if (valid()) {
      setComment(e.html);
    }
  };
  const getButton = async () => {
    try {
      const res = await dynamicButton(workPermitId);
      const newdata = res.data.responseObject?.map((val) => ({
        statusDesc: val.statusDesc,
        statusId: val.statusId,
        displayName: val.displayName,
      }));
      setDynamicButton(newdata);
      const newdataarr = ['Submit for validate', 'Validate'];
      const disablaeval = res.data.responseObject.map((val) =>
        newdataarr.includes(val.displayName),
      );
      let isValid = disablaeval.some((val) => val === true);
      // const disablaeval = res.data.responseObject.map((val) => val.displayName);
      setTisactivetab(isValid);
    } catch (err) {}
  };

  const handleSubmitToValidation = async (e, val) => {
    const statusId = val.statusId;
    try {
      if (validateForm(statusId)) {
        setIsSubmittingForValidation(true);
        setCurrentAction(currentAction);
        setLoading(true);
        setIsUpdating(true);
        await submitToValidation({
          workPermitId,

          statusId,
          comment,
          file,
          signatureValue,
        })
          .then(async (res) => {
            if (res.data.responseObject?.responseMessage === 'Error') {
              let message = res.data.responseMessage;
              toast.error(t(message));
              setLoading(false);
              setIsUpdating(false);
            } else {
              let message = res.data.responseMessage;
              toast.success(t(message));
              await getData(workPermitId);
              setWorkPermitData((preVal) => ({
                ...preVal,
                status: parseInt(res.data.responseObject?.status),
              }));
              navigate('/');
            }
          })
          .catch((err) => {
            setLoading(false);
            toast.error(err);
          });
        setIsSubmittingForValidation(false);
        setCurrentAction(null);
      }
    } catch (err) {
      setLoading(false);
      setIsSubmittingForValidation(false);
      setCurrentAction(null);
      toast.error(err.messages || 'Something went wrong!');
    }
  };
  const handleUpdate = async () => {
    const finalData = [];
    changedData.map((item) => {
      item.formData.changed = undefined;
      return finalData.push({
        [item.checklistId]: {
          checklistId: item.checklistId,
          checklistName: item.checklistName,
          formData: item.formData,
        },
      });
    });
    try {
      const data = finalData.reduce((a, b) => Object.assign(a, b), {});
      workPermitData['applicant'] = workPermitDataApplicant;
      workPermitData['validFrom'] = moment(workPermitData?.validFrom).format();
      workPermitData['validTo'] = moment(workPermitData?.validTo).format();
      setIsUpdating(true);
      let res = await updateWorkPermit({
        workPermitId,
        data: {
          ...workPermitData,
          location: marker ? JSON.stringify(marker) : null,
          formData: JSON.stringify(data),
        },
      });

      const responseArray = Object.entries(res.data.responseObject);
      const filteredResponseArray = responseArray.map(([key, value]) => {
        if (key === 'formData') {
          return [key, undefined]; // Set "formData" property value to undefined to effectively remove it
        }
        return [key, value];
      });
      const filteredResponse = Object.fromEntries(filteredResponseArray);
      localStorage.setItem('printData', JSON.stringify(filteredResponse));
      console.log('res.data.responseObject.formData', res.data.responseObject);
      if (res.data.responseObject.formData != '') {
        const formData = JSON.parse(res.data.responseObject.formData);
        function findAndDeleteChecklistByName(checklistName) {
          for (const key in formData) {
            if (formData[key].checklistName === checklistName) {
              delete formData[key];
            }
          }
          return formData;
        }
        const checklistNameToDelete = 'Attachment';
        const remainingObjects = findAndDeleteChecklistByName(checklistNameToDelete);

        localStorage.setItem('formdata', JSON.stringify(remainingObjects));
      }

      setFormDefinitionsData(JSON.parse(res.data.responseObject.formData));
      setIsUpdating(false);
      setShowsubmit(true);
      let message = res.data.responseMessage;
      toast.success(t(message));
    } catch (err) {
      console.log('err: ', err);
      setIsUpdating(false);
      toast.error(t(err.title || 'work_permit_updation_failed'));
    }
  };

  const getData = async (id) => {
    setIsUpdating(true);
    const res = await ApiGetNoAuth(`/WorkPermit/workpermit/${id}`);
    setIsUpdating(false);
    setIsIntialLoadeding(true);

    const responseArray = Object.entries(res.data.responseObject);
    const filteredResponseArray = responseArray.map(([key, value]) => {
      if (key === 'formData') {
        return [key, undefined]; // Set "formData" property value to undefined to effectively remove it
      }
      return [key, value];
    });
    const filteredResponse = Object.fromEntries(filteredResponseArray);
    localStorage.setItem('printData', JSON.stringify(filteredResponse));
    console.log('res.data.responseObject.formData', res.data.responseObject);
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
      console.log('remainingObjects', remainingObjects);
      localStorage.setItem('formdata', JSON.stringify(remainingObjects));
    }
    localStorage.setItem('statusName', res.data.responseObject.statusName);
    setAssetid(res.data.responseObject.assetId);
    setRequestid(res.data.responseObject.requestId);
    getdatausersection(res.data.responseObject.requestId);
    setSectionlistform(res.data.responseObject);
    setRoleId(res.data.responseObject.roleId);
    setValueAuto(res.data.responseObject.applicant);
    setRoleId(res.data.responseObject.roleId);
    setStatusId(res.data.responseObject.status);
    dispatch(setStatusName(res.data.responseObject.statusName));

    if (
      res.data.responseObject.status === 7 ||
      res.data.responseObject.status === 8 ||
      res.data.responseObject.status === 9
    ) {
      setStepperValue(3);
    } else if (res.data.responseObject.status === 12) {
      setStepperValue(5);
    } else {
      setStepperValue(res.data.responseObject.status - 2);
    }
    setStepperName(res.data?.responseObject.statusName);
    setExistingWorkPermitData(res.data.responseObject);
  };
  const getstatusdetails = async (workPermitId) => {
    const res = await getCommentList(workPermitId);
    setStatusdetails(res.data.responseObject);
  };
  const setExistingWorkPermitData = (data) => {
    setWorkPermitData(data);
    setPermit({
      id: data.ptype,
      value: permitTypes.find((_) => _.id === data.ptype)?.type,
    });
    if (data.formData) {
      setFormDefinitionsData(JSON.parse(data.formData));
    }
    if (data.location) {
      setMarker(JSON.parse(data.location));
    }
  };

  const getApplicable = async () => {
    try {
      let id = 1;
      const res = await getWorkFlowList(id);
      setPermitTypes(res.data.responseObject);
    } catch (err) {}
  };

  const getAsset = async () => {
    try {
      const res = await getAssetList();
      let newData = res.data.responseObject.map((val) => ({
        ...val,
        children: res.data.responseObject,
      }));
      setAsset(newData);
    } catch (err) {}
  };

  const getType = async () => {
    try {
      const res = await getTypeList();
      setType(res.data.responseObject);
    } catch (err) {}
  };

  const getSubtype = async () => {
    try {
      const res = await getSubtypeList();
      setSubType(res.data.responseObject);
    } catch (err) {}
  };

  const getAreas = async () => {
    try {
      const res = await getAreaSystemList();

      setArea(res.data.responseObject);
    } catch (err) {}
  };

  const getworkOrder = async () => {
    try {
      const res = await getworkorderdata();
      setworkOrder(res.data.responseObject);
    } catch (err) {}
  };

  const getApplicant = async () => {
    try {
      const res = await getApplicantsList();
      setApplicant(res.data.responseObject);
    } catch (err) {}
  };

  const getdiscipline = async () => {
    try {
      const res = await getdisciplinedata();
      setDiscipline(res.data.responseObject);
    } catch (err) {}
  };

  const getZone = async () => {
    try {
      const res = await getzonedata();
      setZone(res.data.responseObject);
    } catch (err) {}
  };

  const getSystem = async (id) => {
    try {
      const res = await getsystemdata(id);
      setSystem(res.data.responseObject);
    } catch (err) {}
  };
  useEffect(() => {
    if (workPermitData.area) {
      getSystem(workPermitData.area);
    }
  }, [workPermitData.area]);
  const getWorkPermitStatusesData = async (Processid) => {
    const res = await getWorkPermitStatusesid(Processid);
    if (stepperName === 'Rejected') {
      const newarray = ['Draft', 'Closed'];
      setStepperData(res.data.responseObject.filter((val) => newarray.includes(val.statusDesc)));
    } else if (stepperName === 'Cancelled') {
      const newarray = ['Draft', 'Closed'];
      setStepperData(res.data.responseObject.filter((val) => newarray.includes(val.statusDesc)));
    } else {
      setStepperData(res.data.responseObject);
    }
  };

  const getdatausersection = async (id) => {
    const res = await getusersection(id);
    setIsvalid(res.data.responseObject.isapproval);
  };

  const getApplicantData = async () => {
    try {
      const res = await getApplicantdatalist();
      setValueAuto(res.data.responseObject[0]?.label);
    } catch (err) {
      console.log('error [getApplicable]', err);
    }
  };

  useEffect(() => {
    if (isNew) {
      getApplicantData();
    }
  }, [isNew]);

  useEffect(() => {
    if (ValueAuto) {
      setWorkPermitDataApplicant(ValueAuto);
    }
  }, [ValueAuto]);

  const getAsetvalue = async (data) => {
    try {
      const res = await asetvalidInvalid(data);
      if (res.data.responseCode === 200) {
        setAsetValue(res.data.responseObject);
      } else {
        setAsetValue(res.data.responseObject);
        toast.error('You do not have permission on selected asset. Please select valid asset name');
      }
    } catch (err) {}
  };

  const getUserRoleData = async () => {
    try {
      await getUserRole()
        .then((res) => {
          const usevalue = res.data?.responseObject.includes('GSI-CHECKER');
          if (usevalue === true && statusId === 9) {
            setUserRole(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {}
  };

  useEffect(() => {
    getUserRoleData();
  }, [roleId === 'GSI-CHECKER']);
  const getworkpermitDepartment = async () => {
    try {
      const res = await getInceidentDepartmentValue();
      setDepartment(res.data.responseObject);
    } catch (err) {
      console.log('error [getApplicable]', err);
    }
  };
  useEffect(() => {
    getworkpermitDepartment();
    getApplicable();
    getAsset();
    getType();
    getSystem();
    getSubtype();
    getAreas();
    getdiscipline();
    getworkOrder();
    getZone();
    getApplicant();
    getUserRoleData();
  }, []);

  useEffect(() => {
    if (!isNew) {
      getData(workPermitId);
    }
  }, [isNew, workPermitId]);
  useEffect(() => {
    if (!isNew) {
      // getData(workPermitId);
      getButton(workPermitId);
      getstatusdetails(workPermitId);
    }
  }, [isNew, workPermitId, selected, workPermitData.processId]);

  useEffect(() => {
    if (workPermitData.processId) {
      getWorkPermitStatusesData(workPermitData.processId);
    }
  }, [stepperName, workPermitData.processId]);

  localStorage.setItem('workPermitId', workPermitId);

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    console.log('workPermitData value', value);

    if (name === 'asset') {
      setWorkPermitData({
        ...workPermitData,
        assetId: asset.find((_) => _.description === e.value).id,
      });
    } else if (name === 'type') {
      setWorkPermitData({
        ...workPermitData,
        type: value.id,
      });
    } else if (name === 'ptype') {
      setWorkPermitData({
        ...workPermitData,
        processId: value.processId,
        type: value.processId !== 2 && value.processId !== 1 ? 'None' : 'Low Risk',
        safejob: value.processId !== 9 && value.processId !== 15 ? 'Yes' : 'No',
      });
    } else if (name === 'area') {
      setWorkPermitData({
        ...workPermitData,
        area: area.find((_) => _.description === e.value).id,
        system: '',
      });
    } else if (name === 'system') {
      setWorkPermitData({
        ...workPermitData,
        system: value.system,
      });
    } else if (name === 'subtype') {
      setWorkPermitData({
        ...workPermitData,
        subtype: subtype.find((_) => _.description === e.value).id,
      });
    } else if (name === 'zone') {
      setWorkPermitData({
        ...workPermitData,
        zone: zone.find((_) => _.zone === e.value).id,
      });
    } else if (name === 'validFrom') {
      setWorkPermitData({
        ...workPermitData,
        [e.target.name]: e.target.value,
      });
    } else if (name === 'validTo') {
      //validateFormDate(e.target.value);
      setWorkPermitData({
        ...workPermitData,
        [e.target.name]: e.target.value,
      });
    } else if (name === 'department') {
      setWorkPermitData({
        ...workPermitData,
        department: JSON.stringify(department.find((_) => _.department === e.value).id),
      });
    } else if (name === 'safejob') {
      setWorkPermitData({
        ...workPermitData,
        safejob: items.find((_) => _.id === e.value.id).text,
      });
    } else {
      setWorkPermitData((preVal) => ({
        ...preVal,
        [name]: value,
      }));
    }

    if (name === 'ptype') {
      onChangePermitType(value);
    }
  };

  const onChangePermitType = (value) => {
    setPermit({
      value,
      id: permitTypes.find((_) => _.type === value).processId,
    });
  };
  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    if (toastermessage != '') {
      toast.success(
        `${toastermessage} Data Added successfully Click The Below Save Button To Update Workpermit`,
      );
      setToasterMessage('');
    }
  }, [toastermessage]);

  useEffect(() => {
    if (checkboxValue === true) {
      toast.error('Please Select one');
      setcheckboxValue(false);
    }
  }, [checkboxValue]);

  useEffect(() => {
    if (checkboxValue === true) {
      toast.error('Please Select one');
      setcheckboxValue(false);
    }
  }, [checkboxValue]);

  const onFormSubmit = (data, form) => {
    const datavalue = form.checklist;
    if (data.state != 'checkbox' && isEnable === false) {
      setToasterMessage(datavalue);
    }
    setisEnable(false);
    let checked;
    if (data.state === 'checkbox') {
      let newArr = [];
      for (const key in data.data.container) {
        if (key !== 'save') {
          newArr.push(data.data.container[key]);
        }
      }
      checked = newArr?.some((val) => val === true);
      if (checked === false) {
        setcheckboxValue(true);
      } else {
        setToasterMessage(datavalue);
      }
    }
    const formData = {
      ...formDefinitionsData,
      [form.checklistid]: {
        checklistId: form.checklistid,
        checklistName: form.checklist,
        formData: data,
      },
    };
    setWorkPermitData({ ...workPermitData, formData: JSON.stringify(formData) });
    setFormDefinitionsData(formData);
  };

  const onFormChange = async (data, checklistid, checklist) => {
    const array = formDefination;
    const changeVal = changedData;
    const checklistVal = {
      [checklistid]: {
        checklistId: checklistid,
        checklistName: checklist,
        formData: data,
      },
    };

    if (await array.some((o) => checklistid in o)) {
      for (let i = 0; i < array.length; i++) {
        if ((await Object.keys(array[i])[0]) == checklistid) {
          changeVal[i] = {
            checklistId: checklistid,
            checklistName: checklist,
            formData: data,
          };
          array[i] = checklistVal;
        }
      }
    } else {
      array.push(checklistVal);
      changeVal.push({
        checklistId: checklistid,
        checklistName: checklist,
        formData: data,
      });
    }
    setFormValidation(array);
    await setFormDefinition(array);
    await setChangeData(changeVal);
    if (data.changed.component.key === 'bIsolationRequirment') {
      for (const key in data.data) {
        if (key.startsWith('container')) {
          const container = data.data[key];
          if (container && container.bIsolationRequirment === true) {
            // changedData?.map((item) => changeTabFun(item.checklistId));
            let formdatatemp = formDefination
              ? formDefination.reduce((a, b) => Object.assign(a, b), {})
              : {};
            let formdata = {
              ...formDefinitionsData,
              ...formdatatemp,
            };
            await setFormDefinitionsData(formdata);
          } else if (container && container.bIsolationRequirment === false) {
            //changedData?.map((item) => changeTabFun(item.checklistId));
            let formdatatemp = formDefination
              ? formDefination.reduce((a, b) => Object.assign(a, b), {})
              : {};
            let formdata = {
              ...formDefinitionsData,
              ...formdatatemp,
            };
            await setFormDefinitionsData(formdata);
          }
        }
      }
    } else if (data.data) {
      for (const key in data.data) {
        if (key.startsWith('container')) {
          const container = data.data[key];
          if (container && container.bIsolationRequirment === true) {
            await setIsolationValue(true);
          } else if (container && container.bIsolationRequirment === false) {
            await setIsolationValue(false);
          }
        }
      }
    }
    if (
      data.changed.component.key === 'Mechanical' ||
      data.changed.component.key === 'Electricity'
    ) {
      for (const key in data.data) {
        if (key.startsWith('container')) {
          const container = data.data[key];

          if (
            (container && container.Mechanical === true) ||
            (container && container.Mechanical === false) ||
            (container && container.Electricity === true) ||
            (container && container.Electricity === false)
          ) {
            localStorage.setItem('Mechanical', data.data.container1.Mechanical);
            localStorage.setItem('Electricity', data.data.container1.Electricity);
          }
        }
      }
    } else if (data.data) {
      for (const key in data.data) {
        if (key.startsWith('container')) {
          const container = data.data[key];
          if (
            container &&
            container.Mechanical === false &&
            container &&
            container.Electricity === false
          ) {
            localStorage.setItem('Mechanical', true);
            localStorage.setItem('Electricity', false);
          } else {
            if (
              (container && container.Mechanical === true) ||
              (container && container.Mechanical === false) ||
              (container && container.Electricity === true) ||
              (container && container.Electricity === false)
            ) {
              localStorage.setItem('Mechanical', data.data.container1.Mechanical);
              localStorage.setItem('Electricity', data.data.container1.Electricity);
            }
          }
        }
      }
    }

    if (
      data.changed.component.key === 'container' ||
      data.changed.component.key === 'riskReductionMeasured'
    ) {
      const targetChecklistName = 'Risk Assessment';
      const targetChecklist = changeVal.find((obj) => obj.checklistName === targetChecklistName);
      const databite = targetChecklist.formData.data.container.dataGrid;
      const index = parseInt(data.changed.instance.info.attr.name.substr(26, 1));
      let index1 = riskIndexValue.substr(26, 1);
      if (data.changed.component.label === 'Container' && index1) {
        const obj = databite[index1];
        obj.riskReductionMeasured = '';
        obj.number1 = '';
      }
    }
    if (tabValidation === false) {
      const newValue = Object.values(formRef.current)
        .filter((val) => val !== null)
        .map((val) => {
          if (val?.formio?.checkValidity() !== undefined) {
            return val.formio.checkValidity();
          } else {
            return val;
          }
        });
      let isValid = newValue.some((val) => val === false);
      if (isValid) {
        localStorage.setItem('ChecklistValidation', false);
      } else {
        localStorage.setItem('ChecklistValidation', true);
      }
    }
  };

  const handlePrint = () => {
    const processIdArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15];
    const processId = Number(JSON.parse(localStorage.getItem('printData')).processId) || 1;
    const processValue = processIdArray?.includes(processId);
    const newWindow = window.open(
      processValue === true ? '#/print' : '#/print-checklist',
      '_blank',
      'noopener,noreferrer',
    );
    if (newWindow) newWindow.opener = null;
  };

  const ButtonsGroupup = ({ status }) => {
    const buttons = [
      {
        text: t('create'),
        onHandleClick: handleCreate,
        hide: showChecklistsForm || !isNew || asetValue === null,
        disabled: isUpdating,
      },
      {
        className: 'gridicon py-0 px-0',
        imageUrl: '../Assest/Grid_38.png',
        title: 'Grid View',
        onHandleClick: handleCancel,
        fillMode: 'outline',
      },
      {
        title: 'Print',
        imageUrl: '../Assest/print.png',
        onHandleClick: '',
        show: !isNew,
        hide: isNew,
      },
    ];

    return buttons.map((button) => {
      const { cancelAction, show = true, hide = false, icon, imageUrl, ...props } = button;
      if (!show || hide) return null;
      return (
        <>
          <CommonButton imageUrl={imageUrl} {...props} />
          {cancelAction && (
            <CommonButton text={t('cancel')} imageUrl={imageUrl} onHandleClick={cancelAction} />
          )}
        </>
      );
    });
  };

  const ButtonsGroup = ({ status }) => {
    const buttons = [
      {
        className: 'gridicon py-0 px-0',
        imageUrl: '../Assest/Grid_38.png',
        title: 'Grid View',
        onHandleClick: handleCancel,
        fillMode: 'outline',
        hide: isNew,
      },
      {
        title: 'Print',
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/print.png',
        onHandleClick: handlePrint,
        show: !isNew,
      },
    ];

    return buttons.map((button) => {
      const {
        cancelAction,
        show = true,
        hide = false,
        icon,
        imageUrl,
        className,
        title,
        ...props
      } = button;
      if (!show || hide) return null;

      return (
        <>
          <CommonButton className={className} imageUrl={imageUrl} title={title} {...props} />
          {cancelAction && (
            <CommonButton
              text={t('cancel')}
              className={className}
              title={title}
              imageUrl={imageUrl}
              onHandleClick={cancelAction}
            />
          )}
        </>
      );
    });
  };

  const handleFile = (event) => {
    const newdata = event.value;
    setWorkPermitData({ ...workPermitData, signature: newdata });
    setFile(newdata);
  };

  const handleSelect = (e, val, index) => {
    changeTabFun(index);
    if (index === undefined) {
      setExpandedvalue(!expandedvalue);
      setExpandedvalue2(false);
      setIndex(null);
    } else if (index === 'null') {
      setIsExpand(val);
      setIndex(undefined);
    } else {
      setExpandedvalue2(val);
      setIndex(index);
    }
    setPanalbar(false);
  };

  const handleOnChange = (e, newValue) => {
    setSelected(newValue);
    setTabDisabled(true);
  };

  const onChange = (event) => {
    setPanes(event.newState);
  };

  const changeTabFun = async (id) => {
    const found = changedData.find((element) =>
      element.checklistId == id ? element.formData.changed : '',
    );
    if (found) {
      let formdatatemp = formDefination
        ? formDefination.reduce((a, b) => Object.assign(a, b), {})
        : {};
      let formdata = {
        ...formDefinitionsData,
        ...formdatatemp,
      };
      await setFormDefinitionsData(formdata);
    }
  };
  function checkTabName(tabName) {
    const TabExists = processdata.some((val) => val.enableTab == 'Yes' && val.tabName == tabName);
    return TabExists;
  }
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    function findValueForKey(object, key) {
      for (const id in object) {
        if (object.hasOwnProperty(id)) {
          const formData = object[id].formData;
          if (
            formData &&
            formData.data &&
            formData.data.container1 &&
            formData.data.container1.hasOwnProperty(key)
          ) {
            return formData.data.container1[key];
          }
        }
      }
      return undefined; // Key not found
    }

    const keyToFind = 'bIsolationRequirment';
    const value = findValueForKey(formDefinitionsData, keyToFind);
    setIsolationValue(value);
  }, [formDefinitionsData]);
  return (
    <>
      {isNew ? (
        <Row className="mx-1  p-0 shadow align-items-center row m-1 rounded m-0 mainOuter mt-0">
          <Col xs={12} md={6}>
            <h3 class="m-0">{t('create_new_workpermit')}</h3>
          </Col>
          <Col xs={12} md={6}>
            <div className="text-right button-group m-1  ">
              <ButtonsGroupup status={dynaminButton?.statusId} />
            </div>
          </Col>
        </Row>
      ) : (
        <div>
          <StepperComponet
            stepperData={stepperData}
            stepperValue={stepperValue}
            workPermitData={workPermitData}
            stepperName={stepperName}
            statusdetails={statusdetails}
          />
        </div>
      )}

      <Card>
        <CardBody>
          <Row className="justify-content-end button-group">
            <ButtonsGroup />

            {!isNew && (
              <img
                src={isHovered ? '../Assest/ExpandAll_Mover.png' : '../Assest/ExpandAll.png'}
                alt="Expand/Collapse Icon"
                onClick={handleSelect}
                className={`${expandedvalue ? 'rotateIcon' : 'smoothRotate'}`}
                title={`${expandedvalue ? 'Collapse All' : 'Expand All'}`}
                style={{ cursor: 'pointer', fontSize: '30px' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              // <MdOutlineKeyboardArrowDown
              //   fontSize={30}
              //   onClick={handleSelect}
              //   className={`${expandedvalue ? 'rotateIcon' : 'smoothRotate'}`}
              //   title={`${expandedvalue ? 'Collapse All' : 'Expand All'}`}
              // />
            )}
          </Row>

          <Row>
            {isNew ? (
              <Splitter panes={panes} onChange={onChange}>
                <div className="pane-content">
                  {isNew && (
                    <Col xs={12} md={12} className="pr-0 ">
                      <div className="slider-size p-3 shadow rounded ">
                        <Treeform
                          setWorkPermitData={setWorkPermitData}
                          workPermitData={workPermitData}
                          getAsetvalue={getAsetvalue}
                        />
                      </div>
                    </Col>
                  )}
                </div>
                <div className="pane-content row">
                  <Col xs={12} md={12}>
                    <TabContext value={selected}>
                      <TabList onChange={handleOnChange} className="border-bottom">
                        <Tab label={t('permit_details')} value={0} className="font-weight-bold" />

                        {!isNew && (
                          <Tab
                            label={t('risk_assessment')}
                            value={1}
                            className="font-weight-bold"
                          />
                        )}
                        {!isNew && workPermitData?.safejob === 'Yes' && (
                          <Tab
                            label={t('tsafe_job_analysis')}
                            value={2}
                            className="font-weight-bold"
                          />
                        )}
                        {!isNew && (
                          <Tab label={t('plot_location')} value={3} className="font-weight-bold" />
                        )}
                        {!isNew && (
                          <Tab
                            label={t('tisolation_list')}
                            value={4}
                            className="font-weight-bold"
                          />
                        )}
                        {!isNew && (
                          <Tab label={t('attachment')} value={5} className="font-weight-bold" />
                        )}

                        <Tab label={t('tsignature')} value={6} className="font-weight-bold" />

                        {!isNew && (
                          <Tab label={t('taudit_trail')} value={7} className="font-weight-bold" />
                        )}
                      </TabList>

                      <TabPanel
                        className={` ${isNew ? 'page-scroll' : 'scroll-bar'}`}
                        value={0}
                        expanded={false}
                      >
                        <div>
                          <Form
                            onSubmit={handleCreate}
                            render={(formRenderProps) => (
                              <FormElement className="container-fluid">
                                {(!showChecklistsForm || isNew) && (
                                  <>
                                    <Row>
                                      <Col xs={12} md={12} className={` ${isNew && ' '}`}>
                                        <PanelBar className="my-2">
                                          <PanelBarItem
                                            expanded={expandedvalue ? true : false}
                                            title={t('permit_details')}
                                          >
                                            <NewPermitForm
                                              stepperName={stepperName}
                                              error={error}
                                              workPermitData={workPermitData}
                                              setWorkPermitData={setWorkPermitData}
                                              permitTypes={permitTypes}
                                              asset={asset}
                                              type={type}
                                              system={system}
                                              discipline={discipline}
                                              area={area}
                                              zone={zone}
                                              ValueAuto={ValueAuto}
                                              setValueAuto={setValueAuto}
                                              setValueAutodata={setValueAutodata}
                                              ValueAutodata={ValueAutodata}
                                              workOrder={workorder}
                                              subtype={subtype}
                                              applicant={applicant}
                                              handleChange={handleChange}
                                              isEdit={!isNew}
                                              statusId={statusId}
                                              userRole={userRole}
                                              setRiskFactor={setRiskFactor}
                                              riskfactor={riskfactor}
                                              residualrisk={residualrisk}
                                              setResidualRisk={setResidualRisk}
                                              residualriskvalue={residualriskvalue}
                                            />
                                          </PanelBarItem>
                                        </PanelBar>
                                      </Col>
                                      <Col xs={12} md={12}>
                                        {(!isNew || showChecklistsForm) && (
                                          <ViewChecklistForms
                                            hide={'hide'}
                                            permitId={workPermitData.processId}
                                            formDefinitions={formDefinitions}
                                            setFormDefinitions={setFormDefinitions}
                                            formDefinitionsData={formDefinitionsData}
                                            onFormSubmit={onFormSubmit}
                                            setOnChangeValue={setOnChangeValue}
                                            onCommentChange={handleComment}
                                            comment={comment}
                                            isUpdating={isUpdating}
                                            handleSelect={handleSelect}
                                            expanded={expandedvalue}
                                            handleFile={handleFile}
                                            file={file}
                                            workPermitId={workPermitId}
                                            error={error}
                                          />
                                        )}
                                      </Col>
                                    </Row>
                                  </>
                                )}
                              </FormElement>
                            )}
                          />
                        </div>
                      </TabPanel>

                      <TabPanel value={1} className="shadow rounded ">
                        <Riskassesment
                          hide={'hide'}
                          permitId={permit.id}
                          formDefinitions={formDefinitions}
                          setFormDefinitions={setFormDefinitions}
                          formDefinitionsData={formDefinitionsData}
                          onFormSubmit={onFormSubmit}
                          onCommentChange={handleComment}
                          comment={comment}
                          handleFile={handleFile}
                          file={file}
                          workPermitId={workPermitId}
                          error={error}
                        />
                      </TabPanel>

                      <TabPanel value={2} className="shadow rounded ">
                        <SafeJobAnalysis
                          hide={'hide'}
                          permitId={permit.id}
                          formDefinitions={formDefinitions}
                          setFormDefinitions={setFormDefinitions}
                          formDefinitionsData={formDefinitionsData}
                          onFormSubmit={onFormSubmit}
                          onCommentChange={handleComment}
                          comment={comment}
                          sectionlistform={sectionlistform}
                          handleFile={handleFile}
                          workPermitData={workPermitData}
                          file={file}
                          form={form}
                          workPermitId={workPermitId}
                          error={error}
                        />
                      </TabPanel>
                      <TabPanel value={3}>
                        {' '}
                        <div className="d-flex justify-content-center my-2 ">
                          <WorkflowTracker {...{ marker, setMarker, workPermitId }} />
                        </div>
                      </TabPanel>
                      <TabPanel value={4} className="shadow rounded ">
                        {' '}
                        <IsolationList
                          hide={'hide'}
                          permitId={permit.id}
                          formDefinitions={formDefinitions}
                          setFormDefinitions={setFormDefinitions}
                          formDefinitionsData={formDefinitionsData}
                          onFormSubmit={onFormSubmit}
                          onCommentChange={handleComment}
                          comment={comment}
                          handleFile={handleFile}
                          file={file}
                          workPermitId={workPermitId}
                          error={error}
                        />
                      </TabPanel>
                      <TabPanel value={5} className="shadow rounded ">
                        {' '}
                        <Attachment
                          hide={'hide'}
                          permitId={permit.id}
                          formDefinitions={formDefinitions}
                          setFormDefinitions={setFormDefinitions}
                          formDefinitionsData={formDefinitionsData}
                          onFormSubmit={onFormSubmit}
                          onCommentChange={handleComment}
                          comment={comment}
                          handleFile={handleFile}
                          file={file}
                          workPermitId={workPermitId}
                          error={error}
                        />
                      </TabPanel>

                      <TabPanel value={6} className="page-scroll shadow rounded xyz ">
                        {' '}
                        <Datasignature
                          hide={'hide'}
                          permitId={permit.id}
                          formDefinitions={formDefinitions}
                          llj
                          setFormDefinitions={setFormDefinitions}
                          formDefinitionsData={formDefinitionsData}
                          onFormSubmit={onFormSubmit}
                          onCommentChange={handleComment}
                          comment={comment}
                          handleFile={handleFile}
                          setFile={setFile}
                          file={file}
                          workPermitData={workPermitData}
                          setWorkPermitData={setWorkPermitData}
                          workPermitId={workPermitId}
                          error={error}
                          setWorkPermitDataSignature={setWorkPermitDataSignature}
                          workPermitDataSignature={workPermitDataSignature}
                        />
                      </TabPanel>
                      <TabPanel value={7} className="scroll-bar shadow rounded ">
                        {' '}
                        <AuditTrialdata
                          hide={'hide'}
                          permitId={permit.id}
                          formDefinitions={formDefinitions}
                          setFormDefinitions={setFormDefinitions}
                          formDefinitionsData={formDefinitionsData}
                          onFormSubmit={onFormSubmit}
                          onCommentChange={handleComment}
                          comment={comment}
                          handleFile={handleFile}
                          file={file}
                          workPermitId={workPermitId}
                          error={error}
                        />
                      </TabPanel>
                    </TabContext>
                  </Col>
                </div>
              </Splitter>
            ) : (
              <Col xs={12} md={isNew ? 10 : 12} className="panecontent">
                <TabContext value={selected}>
                  <TabList onChange={handleOnChange} className="border-bottom">
                    <Tab
                      label={t('permit_details')}
                      disabled={tabDisable}
                      value={0}
                      className="font-weight-bold"
                    />
                    {!isNew &&
                      checkTabName('SAFE JOB ANALYSIS') &&
                      workPermitData?.safejob === 'Yes' && (
                        <Tab
                          label={t('tsafe_job_analysis')}
                          disabled={tabDisable}
                          value={1}
                          className="font-weight-bold"
                        />
                      )}
                    {!isNew && checkTabName('RISK ASSESSMENT') && (
                      <Tab
                        label={t('risk_assessment')}
                        disabled={tabDisable}
                        value={2}
                        className="font-weight-bold"
                      />
                    )}

                    {!isNew &&
                      checkTabName('PLOT LOCATION') &&
                      workPermitData.isEnable === true && (
                        <Tab
                          label={t('plot_location')}
                          value={3}
                          disabled={tabDisable}
                          className="font-weight-bold"
                        />
                      )}

                    {!isNew &&
                      checkTabName('ISOLATION LIST') &&
                      Processid != 9 &&
                      Processid != 15 &&
                      isolationValue && (
                        <Tab
                          label={t('tisolation_list')}
                          value={4}
                          className="font-weight-bold"
                          disabled={tabDisable}
                        />
                      )}
                    {!isNew && checkTabName('ATTACHMENT') && (
                      <Tab
                        label={t('attachment')}
                        value={5}
                        disabled={tabDisable}
                        className="font-weight-bold"
                      />
                    )}
                    {!isNew && (
                      <Tab
                        label={t('tsignature')}
                        value={6}
                        disabled={tabDisable}
                        className="font-weight-bold"
                      />
                    )}
                    {!isNew && (
                      <Tab
                        label={t('taudit_trail')}
                        value={7}
                        disabled={tabDisable}
                        className="font-weight-bold"
                      />
                    )}
                  </TabList>

                  <TabPanel className="scroll-bar shadow rounded" value={0} expanded={false}>
                    <div>
                      <Form
                        onSubmit={handleCreate}
                        render={(formRenderProps) => (
                          <FormElement className="container-fluid">
                            {(!showChecklistsForm || isNew) && (
                              <>
                                <Row>
                                  <Col
                                    xs={12}
                                    md={12}
                                    className={` ${isNew && ' '}`}
                                    id="mainPanel"
                                  >
                                    <Accordion
                                      className="accordian"
                                      expanded={index === undefined ? isExpand : expandedvalue}
                                      onChange={(e, value) => {
                                        handleSelect(e, value, 'null');
                                      }}
                                    >
                                      <AccordionSummary
                                        expandIcon={<MdOutlineKeyboardArrowDown fontSize={20} />}
                                      >
                                        <div className="">{t('permit_details')}</div>
                                      </AccordionSummary>
                                      <AccordionDetails>
                                        <NewPermitForm
                                          hide={'hide'}
                                          stepperName={stepperName}
                                          error={error}
                                          workPermitData={workPermitData}
                                          setWorkPermitData={setWorkPermitData}
                                          permitTypes={permitTypes}
                                          asset={asset}
                                          type={type}
                                          system={system}
                                          discipline={discipline}
                                          area={area}
                                          zone={zone}
                                          ValueAuto={ValueAuto}
                                          setValueAutodata={setValueAutodata}
                                          ValueAutodata={ValueAutodata}
                                          setValueAuto={setValueAuto}
                                          workOrder={workorder}
                                          subtype={subtype}
                                          applicant={applicant}
                                          handleChange={handleChange}
                                          isEdit={!isNew}
                                          isUpdating={isUpdating}
                                          statusId={statusId}
                                          userRole={userRole}
                                          setRiskFactor={setRiskFactor}
                                          riskfactor={riskfactor}
                                          setTabDisabled={setTabDisabled}
                                          department={department}
                                          items={items}
                                          residualrisk={residualrisk}
                                          setResidualRisk={setResidualRisk}
                                          residualriskvalue={residualriskvalue}
                                        />
                                      </AccordionDetails>
                                    </Accordion>
                                  </Col>
                                  <Col xs={12} md={12} className="normaletter">
                                    {(!isNew || showChecklistsForm) && (
                                      <ViewChecklistForms
                                        disabled={disabled}
                                        permitId={workPermitData.processId}
                                        formDefinitions={formDefinitions}
                                        formDefination={formDefination}
                                        setFormDefinition={setFormDefinition}
                                        setFormDefinitions={setFormDefinitions}
                                        formDefinitionsData={formDefinitionsData}
                                        onFormSubmit={onFormSubmit}
                                        onFormChange={onFormChange}
                                        expanded={expandedvalue}
                                        isUpdating={isUpdating}
                                        setOnChangeValue={setOnChangeValue}
                                        expanded2={expandedvalue2}
                                        saveBtn={saveBtn}
                                        setSaveBtn={setSaveBtn}
                                        setWorkPermitData={setWorkPermitData}
                                        workPermitData={workPermitData}
                                        setExpandedvalue={setExpandedvalue2}
                                        onCommentChange={handleComment}
                                        comment={comment}
                                        handleSelect={handleSelect}
                                        handleFile={handleFile}
                                        indexes={index}
                                        file={file}
                                        workPermitId={workPermitId}
                                        error={error}
                                        changeTabFun={changeTabFun}
                                        setIsUpdating={setIsUpdating}
                                        formRef={formRef}
                                        isEdit={!isNew}
                                        setTabValidation={setTabValidation}
                                        setTabDisabled={setTabDisabled}
                                      />
                                    )}
                                  </Col>
                                </Row>
                              </>
                            )}
                          </FormElement>
                        )}
                      />
                    </div>
                  </TabPanel>
                  <TabPanel value={1} className="scroll-bar shadow rounded normaletter">
                    <SafeJobAnalysis
                      disabled={disabled}
                      permitId={permit.id}
                      formDefinitions={formDefinitions}
                      setFormDefinitions={setFormDefinitions}
                      formDefinitionsData={formDefinitionsData}
                      onFormSubmit={onFormSubmit}
                      onCommentChange={handleComment}
                      comment={comment}
                      sectionlistform={sectionlistform}
                      handleFile={handleFile}
                      workPermitData={workPermitData}
                      file={file}
                      form={form}
                      workPermitId={workPermitId}
                      error={error}
                      onFormChange={onFormChange}
                      changeTabFun={changeTabFun}
                      isUpdating={isUpdating}
                      setIsUpdating={setIsUpdating}
                      setTabValidation={setTabValidation}
                      formRef={formRef}
                      setTabDisabled={setTabDisabled}
                    />
                  </TabPanel>
                  <TabPanel value={2} className="scroll-bar shadow rounded normaletter">
                    <Riskassesment
                      disabled={disabled}
                      permitId={permit.id}
                      formDefinitions={formDefinitions}
                      setFormDefinitions={setFormDefinitions}
                      formDefinitionsData={formDefinitionsData}
                      onFormSubmit={onFormSubmit}
                      onCommentChange={handleComment}
                      comment={comment}
                      isEnable={isEnable}
                      setisEnable={setisEnable}
                      handleFile={handleFile}
                      file={file}
                      workPermitId={workPermitId}
                      error={error}
                      onFormChange={onFormChange}
                      changeTabFun={changeTabFun}
                      changedData={changedData}
                      isUpdating={isUpdating}
                      setIsUpdating={setIsUpdating}
                      setTabValidation={setTabValidation}
                      formRef={formRef}
                      setTabDisabled={setTabDisabled}
                    />
                  </TabPanel>

                  <TabPanel value={3} className="scroll-barplot ">
                    {' '}
                    <div className="">
                      <WorkflowTracker
                        {...{
                          marker,
                          setMarker,
                          workPermitId,
                          workPermitData,
                          disabled,
                          setTabValidation,
                          setSelected,
                          setTabDisabled,
                        }}
                      />
                    </div>
                  </TabPanel>
                  <TabPanel value={4} className="scroll-bar shadow rounded normaletter">
                    {' '}
                    <IsolationList
                      disabled={disabled}
                      permitId={permit.id}
                      formDefinitions={formDefinitions}
                      setFormDefinitions={setFormDefinitions}
                      formDefinitionsData={formDefinitionsData}
                      onFormSubmit={onFormSubmit}
                      onCommentChange={handleComment}
                      comment={comment}
                      handleFile={handleFile}
                      file={file}
                      workPermitId={workPermitId}
                      error={error}
                      onFormChange={onFormChange}
                      changeTabFun={changeTabFun}
                      isUpdating={isUpdating}
                      setIsUpdating={setIsUpdating}
                      setTabValidation={setTabValidation}
                      formRef={formRef}
                      setTabDisabled={setTabDisabled}
                    />
                  </TabPanel>
                  <TabPanel value={5} className="scroll-bar shadow rounded normaletter ">
                    {' '}
                    <Attachment
                      disabled={disabled}
                      permitId={permit.id}
                      formDefinitions={formDefinitions}
                      setFormDefinitions={setFormDefinitions}
                      formDefinitionsData={formDefinitionsData}
                      onFormSubmit={onFormSubmit}
                      onCommentChange={handleComment}
                      comment={comment}
                      handleFile={handleFile}
                      file={file}
                      workPermitId={workPermitId}
                      error={error}
                      onFormChange={onFormChange}
                      changeTabFun={changeTabFun}
                      isUpdating={isUpdating}
                      setIsUpdating={setIsUpdating}
                      setTabValidation={setTabValidation}
                      formRef={formRef}
                      setTabDisabled={setTabDisabled}
                    />
                  </TabPanel>
                  <TabPanel value={6} className="scroll-bar shadow rounded ">
                    {' '}
                    <Datasignature
                      isEdit={!isNew}
                      disabled={disabled}
                      permitId={permit.id}
                      setDynamicButton={setDynamicButton}
                      dynaminButton={dynaminButton}
                      formDefinitions={formDefinitions}
                      llj
                      setFormDefinitions={setFormDefinitions}
                      formDefinitionsData={formDefinitionsData}
                      onFormSubmit={onFormSubmit}
                      setSignatureValue={setSignatureValue}
                      signatureValue={signatureValue}
                      onCommentChange={handleComment}
                      comment={comment}
                      handleFile={handleFile}
                      setFile={setFile}
                      file={file}
                      workPermitData={workPermitData}
                      setWorkPermitData={setWorkPermitData}
                      workPermitId={workPermitId}
                      error={error}
                      onFormChange={onFormChange}
                      setWorkPermitDataSignature={setWorkPermitDataSignature}
                      workPermitDataSignature={workPermitDataSignature}
                      setTabValidation={setTabValidation}
                      formRef={formRef}
                      setTabDisabled={setTabDisabled}
                    />
                  </TabPanel>
                  <TabPanel value={7} className="scroll-bar shadow rounded ">
                    {' '}
                    <AuditTrialdata
                      disabled={disabled}
                      permitId={permit.id}
                      formDefinitions={formDefinitions}
                      setFormDefinitions={setFormDefinitions}
                      formDefinitionsData={formDefinitionsData}
                      onCommentChange={handleComment}
                      comment={comment}
                      handleFile={handleFile}
                      file={file}
                      workPermitId={workPermitId}
                      error={error}
                      onFormChange={onFormChange}
                      setTabValidation={setTabValidation}
                      formRef={formRef}
                      setTabDisabled={setTabDisabled}
                    />
                  </TabPanel>
                </TabContext>
              </Col>
            )}
          </Row>
          {isUpdating && <Spinner />}
        </CardBody>
      </Card>
    </>
  );
};

export default Work_Permit;
