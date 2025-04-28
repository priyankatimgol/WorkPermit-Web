import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { Dialog as KendoDialog } from '@progress/kendo-react-dialogs';
import { UseRoleAssetdata } from 'Services/API/masterApi';
import { memo, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Form } from 'react-formio/lib/components';
import { useTranslation } from 'react-i18next';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { getstatusname } from 'store/StatusName/statusnameSlice';
import {
  closesectionpermit,
  getCalculationRisk,
  getCheckListForPermitType,
  getCommentList,
} from '../../api';
const ViewChecklist = (props) => {
  const {
    permitId,
    workPermitId,
    setFormDefinitions,
    onFormChange,
    formDefinitionsData,
    disabled,
    hide,
    indexes,
    expanded,
    expanded2,
    handleSelect,
    changeTabFun,
    setIsUpdating,
    formRef,
    isEdit,
    setTabValidation,
    statusId,
    setTabDisabled,
    workPermitData,
    setriskIndexValueNew,
    setisEnable,
    changedData,
    setChangeData,
  } = props;

  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [sectionlist, setSectionlist] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const closedpermit = useSelector(getstatusname);
  const [calculate1check, setCalculate1check] = useState(false);
  const [calculate2check, setCalculate2check] = useState(false);
  const [userRoleAsset, setUserRoleAsset] = useState([]);
  const [riskCalcultionList, setRiskCalcultionList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [calculatemspv, setCalculatemspv] = useState(false);
  const [riskAssesmentId, setRiskAssesmentId] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      // Initialize start and startWidth variables
      let start = 0;
      let startWidth = 0;

      const onMouseMove = (e, th) => {
        const diff = e.pageX - start;
        th.style.width = `${startWidth + diff}px`;
      };

      const onMouseUp = (e) => {
        e.preventDefault();
        // Remove mousemove and mouseup event listeners when mouse button is released
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      // Fetch table headers (you may need to adjust the query selector to match your specific table)
      const thElements = Array.from(document.querySelectorAll('.formio-component-datagrid th'));
      thElements.forEach((th) => {
        th.addEventListener('mousedown', (e) => {
          if (e.target.tagName.toLowerCase() !== 'th') {
            return;
          }
          // Save initial X position and width
          start = e.pageX;
          startWidth = th.offsetWidth;

          // Add mousemove and mouseup event listeners
          th.addEventListener('mousemove', (e) => onMouseMove(e, th));
          th.addEventListener('mouseup', onMouseUp);
        });
      });

      // Cleanup
      return () => {
        // Remove any lingering event listeners to avoid memory leaks
        thElements.forEach((th) => {
          th.removeEventListener('mousedown', () => {});
        });
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };
    }, 1000);
  }, [sectionlist]);
  const getUniqueChecklist = (data) => {
    const formDataList = [];
    for (let i = 0; i < data.length; i++) {
      const { formData } = data[i];
      formDataList.push(...formData);
    }
    const uniqueKey = 'checklistid';
    const mapObject = new Map(formDataList.map((item) => [item[uniqueKey], item]));
    return [...mapObject.values()];
  };
  const getUserAssetRole = async (id) => {
    try {
      const res = await UseRoleAssetdata(id);

      setUserRoleAsset(res.data?.responseObject);
    } catch (err) {
      console.log('error [getApplicable]', err);
    }
  };

  useEffect(() => {
    getUserAssetRole(workPermitData.assetId);
  }, [workPermitData.assetId]);

  // const getChecklistIdsForPermitType = async (permitId, userRoleAsset) => {
  //   setTabValidation(false);
  //   try {
  //     setLoadingData(true);
  //     setIsUpdating(true);
  //     const res = await getCheckListForPermitType(permitId);
  //     const data = res.data.responseObject;
  //     setSectionlist(res.data.responseObject);
  //     let newData = res.data.responseObject.map((val) => ({
  //       ...val,
  //       formData: val.formData.map((item) => {
  //         console.log('userRoleAsset', userRoleAsset);
  //         if (userRoleAsset.includes(item.role)) {
  //           let jsonData = JSON.parse(item.formData);

  //           let newFormData = {
  //             diaplay: 'form',
  //             components: jsonData.components.map((val) => ({
  //               ...val,
  //               disabled: false,
  //             })),
  //           };

  //           return {
  //             ...item,
  //             formData: JSON.stringify(newFormData),
  //           };
  //         } else {
  //           let jsonData = JSON.parse(item.formData);

  //           let newFormData = {
  //             diaplay: 'form',
  //             components: jsonData.components.map((val) => ({
  //               ...val,
  //               disabled: true,
  //             })),
  //           };

  //           return {
  //             ...item,
  //             formData: JSON.stringify(newFormData),
  //           };
  //         }
  //       }),
  //     }));

  //     if (statusId <= 2) {
  //       setSectionlist(data);
  //     } else if (statusId > 2) {
  //       setSectionlist(newData);
  //     } else {
  //       setSectionlist(newData);
  //     }

  //     const formData = getUniqueChecklist(res.data.responseObject);
  //     const checklistsData = [];
  //     for (let i = 0; i < formData.length; i++) {
  //       const { checklistid, checklist } = formData[i];
  //       checklistsData.push({
  //         name: checklist,
  //         id: checklistid,
  //         formData: res,
  //       });
  //       changeTabFun(checklistid);
  //     }
  //     setFormDefinitions(checklistsData);
  //     setLoadingData(false);
  //     setIsUpdating(false);
  //     setTabDisabled(false);
  //   } catch (err) {
  //     setLoadingData(false);
  //     setTabDisabled(false);
  //     setIsUpdating(false);
  //     console.log('Error [getChecklistIdsForPermitType]', err);
  //   }
  // };
  const getChecklistIdsForPermitType = async (permitId) => {
    setTabValidation(false);
    try {
      setLoadingData(true);
      setIsUpdating(true);
      const res = await getCheckListForPermitType(permitId);
      const data = res.data.responseObject;
      setSectionlist(res.data.responseObject);
      let newData = res.data.responseObject.map((val) => ({
        ...val,

        formData: val.formData.map((item) => {
          if (
            item.checklist ===
              'GAS RE-INSPECTION (MANDATORY FOR EVERY WORK TO START OR EVERY TIME TO START WORK OF REST CONDITIONS)' ||
            item.checklist ===
              'GAS RE-EXAMINATION (PERFORMED ONLY IF THERE IS A POTENTIAL TOXIC GAS OR OXYGEN DEFICIENCY)' ||
            item.checklist === 'Gas Re Check & Temperature Measurement' ||
            item.checklist === 'Radiation Re-Measurement' ||
            item.checklist ===
              'Gas Re-Inspection (Mandatory For Every Time To Start Work Or Everyone Will Start Work From A Rest Condition)'
          ) {
            let jsonData = JSON.parse(item.formData);

            let newFormData = {
              diaplay: 'form',
              components: jsonData.components.map((val) => ({
                ...val,
                disabled: false,
              })),
            };

            return {
              ...item,
              formData: JSON.stringify(newFormData),
            };
          } else {
            let jsonData = JSON.parse(item.formData);

            let newFormData = {
              diaplay: 'form',
              components: jsonData.components.map((val) => ({
                ...val,
                disabled: true,
              })),
            };

            return {
              ...item,
              formData: JSON.stringify(newFormData),
            };
          }
        }),
      }));

      if (statusId <= 2) {
        setSectionlist(data);
      } else if (statusId > 2) {
        setSectionlist(newData);
      } else {
        setSectionlist(newData);
      }

      const formData = getUniqueChecklist(res.data.responseObject);
      const checklistsData = [];
      for (let i = 0; i < formData.length; i++) {
        const { checklistid, checklist } = formData[i];
        checklistsData.push({
          name: checklist,
          id: checklistid,
          formData: res,
        });
        changeTabFun(checklistid);
        setRiskAssesmentId(checklistid);
      }

      setFormDefinitions(checklistsData);
      setLoadingData(false);
      setIsUpdating(false);
      setTabDisabled(false);
    } catch (err) {
      setLoadingData(false);
      setTabDisabled(false);
      setIsUpdating(false);
      console.log('Error [getChecklistIdsForPermitType]', err);
    }
  };
  const closesectionpermitsection = async (permitId, workPermitId) => {
    try {
      setLoadingData(true);
      setIsUpdating(true);
      const res = await closesectionpermit(permitId, workPermitId);
      setSectionlist(res.data.responseObject);
      let newData = res.data.responseObject.map((val) => ({
        ...val,
        formData: val.formData.map((item) => {
          let jsonData = JSON.parse(item.formData);

          let newFormData = {
            diaplay: 'form',
            components: jsonData.components.map((val) => ({
              ...val,
              disabled: true,
            })),
          };
          return {
            ...item,
            formData: JSON.stringify(newFormData),
          };
        }),
      }));
      if (hide === 'hide') {
        setSectionlist(res.data.responseObject);
      } else {
        setSectionlist(newData);
      }

      const formData = getUniqueChecklist(res.data.responseObject);
      const checklistsData = [];
      for (let i = 0; i < formData.length; i++) {
        const { checklistid, checklist } = formData[i];
        checklistsData.push({
          name: checklist,
          id: checklistid,
          formData: res,
        });
        changeTabFun(checklistid);
      }
      setFormDefinitions(checklistsData);
      setLoadingData(false);
      setIsUpdating(false);
    } catch (err) {
      setLoadingData(false);
      setIsUpdating(false);
      console.log('Error [getChecklistIdsForPermitType]', err);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
    if (closedpermit.StatusName !== 'Closed' || closedpermit.StatusName !== 'Rejected') {
      if (permitId && userRoleAsset) {
        getChecklistIdsForPermitType(permitId);
        // getChecklistIdsForPermitType(permitId, userRoleAsset);
      }
    }
  }, [permitId, closedpermit, userRoleAsset]);
  useEffect(() => {
    if (closedpermit.StatusName === 'Closed' || closedpermit.StatusName === 'Rejected') {
      if (permitId) {
        closesectionpermitsection(permitId, workPermitId);
      }
    }
  }, [permitId, workPermitId, closedpermit]);
  const getList = async () => {
    try {
      const res = await getCommentList(workPermitId);

      setCommentList(
        res.data?.responseObject?.map((val) => ({
          createdate: val.createDate,
          name: val.userName,
          statuscondition: val.statusCondition,
          signature: val.signature,
          roledesc: val.roleDesc,
          statusname: val.statusName,
        })),
      );
    } catch (error) {
      console.log('err [getCheckList]', error);
    }
  };
  const getCalcultionRiskList = async () => {
    try {
      const res = await getCalculationRisk();
      setRiskCalcultionList(res.data?.responseObject);
    } catch (error) {
      console.log('err [getCheckList]', error);
    }
  };

  const calculateRisk = (e) => {
    console.log('e 2 2 ', e);
    setriskIndexValueNew((prev) => e.event.target.name);

    setCurrentIndex((prev) => e.event.target.name.substr(26, 1));
    setCalculatemspv(!calculatemspv);
    changeTabFun(riskAssesmentId);
    getCalcultionRiskList();
  };

  const getRiskMatrix = (item) => {
    console.log(item);
    setisEnable(true);
    console.log('e2 item', item);

    const myObj = item.data;
    const getFirstTruthyItem = (obj) => Object.keys(obj).find((i) => obj[i] === true);
    changeTabFun(riskAssesmentId);
    console.log('e2 calculate1check', getFirstTruthyItem, calculate2check);
    if (calculate1check) {
      console.log('e2 item 1', item);
      // setCalculate1(getFirstTruthyItem(myObj));
      setCalculate1check(null);

      const index = changedData.findIndex(
        (x) => x.checklistName == 'Reason for Applying Override (MSVP)',
      );
      console.log('e2 index', index);
      // const index = changedData.find(
      //   (x) => x.checklistName == 'Reason for Applying Override (MSVP)',
      // ).checklistId;

      const itemList = changedData
        .filter((el) => el.checklistId === index)
        .map((item) => ({
          ...item,
          formData: {
            ...item.formData,
            data: {
              ...item.formData.data,
              container: {
                ...item.formData.data.container,
                residualRisk: getFirstTruthyItem(myObj),
              },
            },
          },
        }));
      const resultArray = changedData.map((item1) => {
        const matchingItem = itemList.find((item2) => item2.checklistId === item1.checklistId);
        return matchingItem ? { ...matchingItem } : { ...item1 };
      });
      // console.log('e2 resultArray', resultArray);

      // setChangeData(changedData.filter((element)=>element.checklistId!=index)[...changedData, ...itemList]);
      // setChangeData([...resultArray]);

      //changedData[index].formData.changed = undefined;
      console.log(
        'e2 changedData[index].formData.data.container.residualRisk',
        changedData[index],
        getFirstTruthyItem(myObj),
      );
      //changedData[index].formData.data.container.residualRisk = getFirstTruthyItem(myObj);
      changedData[index].formData.data.container.reasonForApplyingOverride = '5';
      console.log(
        'e2 changedData[index].formData.data.container',
        changedData[index].formData.data.container,
      );
    }
    if (calculate2check) {
      // setCalculate2(getFirstTruthyItem(myObj));
      setCalculate2check(null);
      const index = changedData.findIndex(
        (x) => x.checklistName == 'Reason for Applying Override (MSVP)',
      );

      changedData[index].formData.changed = undefined;
      changedData[index].formData.data.container.residualRisk = getFirstTruthyItem(myObj);
    }
    setCalculatemspv(!calculatemspv);
  };
  console.log('e2 changedData', changedData);

  return (
    <>
      <Row className="mb-4 ">
        <Col md={12} className="mx-auto ">
          {sectionlist.map((form, id) => {
            return (
              !loadingData &&
              form?.formData?.map((form, index) => {
                return (
                  <div>
                    <Accordion
                      className="accordian my-2"
                      expanded={indexes === form?.checklistid ? expanded2 : expanded}
                      onChange={(e, value) => {
                        handleSelect(e, value, form?.checklistid);
                      }}
                    >
                      <AccordionSummary expandIcon={<MdOutlineKeyboardArrowDown fontSize={12} />}>
                        <div className="">{t(form?.checklist)}</div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="px-4 py-2">
                          <Form
                            ref={(node) => {
                              formRef.current[form.checklistid] = node;
                            }}
                            onCustomEvent={(customEvent) => {
                              if (customEvent.type === 'onCustomEvent') {
                                setCalculate1check(true);
                              } else {
                                setCalculate2check(true);
                              }
                              calculateRisk(customEvent);
                            }}
                            disabled={disabled}
                            form={form?.formData && JSON.parse(form.formData)}
                            onChange={(data) =>
                              onFormChange(data, form.checklistid, form.checklist)
                            }
                            submission={formDefinitionsData[form.checklistid]?.formData || {}}
                            options={{
                              language: i18n.language,
                              i18n,
                            }}
                          />
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                );
              })
            );
          })}
        </Col>
      </Row>

      {calculatemspv && riskCalcultionList.id && (
        <KendoDialog
          title={'Risk Score Calculation '}
          onClose={() => setCalculatemspv(!calculatemspv)}
        >
          <Form
            onCustomEvent={(customEvent) => getRiskMatrix(customEvent)}
            disabled={disabled}
            form={riskCalcultionList?.formData && JSON.parse(riskCalcultionList.formData)}
            options={{
              language: i18n.language,
              i18n,
            }}
          />
        </KendoDialog>
      )}
    </>
  );
};
export default memo(ViewChecklist);
