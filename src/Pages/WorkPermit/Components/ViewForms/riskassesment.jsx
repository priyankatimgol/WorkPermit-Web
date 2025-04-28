import { Dialog as KendoDialog } from '@progress/kendo-react-dialogs';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Form } from 'react-formio/lib/components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getprocessid } from 'store/processId/processidSlice';
import { getCalculationRisk, getSectionList } from '../../api';
const Riskassesment = (props) => {
  const {
    setFormDefinitions,
    formDefinitionsData,
    disabled,
    setisEnable,
    hide,
    onFormChange,
    changeTabFun,
    changedData,
    setIsUpdating,
    isUpdating,
    btnEnableDisble,
    formRef,
    setTabValidation,
    statusId,
    setTabDisabled,
    setriskIndexValue,
    handleFieldBlur,
    workPermitId,
  } = props;

  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [sectionlist, setSectionlist] = useState([]);
  const [riskCalcultionList, setRiskCalcultionList] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [calculate1check, setCalculate1check] = useState(false);
  const [calculate2check, setCalculate2check] = useState(false);
  const [riskAssesmentId, setRiskAssesmentId] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [calculate, setCalculate] = useState(false);
  const Processid = useSelector(getprocessid);
  useEffect(() => {
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
  }, [sectionlist]);
  const getSectionListform = async () => {
    setTabValidation(true);
    const permitId = 16;
    try {
      setLoadingData(true);
      setIsUpdating(true);
      const res = await getSectionList(permitId);
      var data = res.data.responseObject;
      const { checklistid, checklist } = data[0].formData[0];

      await changeTabFun(checklistid);

      let newData = data.map((val) => ({
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
      if (statusId <= 2) {
        setSectionlist(data);
      } else if (statusId > 2) {
        setSectionlist(newData);
      } else {
        setSectionlist(newData);
      }
      // getCalcultionRiskList()

      const checklistsData = [];
      checklistsData.push({
        name: checklist,
        id: checklistid,
        formData: res,
      });

      setFormDefinitions(checklistsData);
      setRiskAssesmentId(checklistid);
      setLoadingData(false);
      setTabDisabled(false);
      setIsUpdating(false);
      // setTimeout(() => {
      //   btnEnableDisble(true);
      // }, 2000);
    } catch (err) {
      setLoadingData(false);
      setIsUpdating(false);
      setTabDisabled(false);
      console.log('Error [getChecklistIdsForPermitType]', err);
    }
  };

  useEffect(() => {
    getSectionListform();
  }, []);

  const getCalcultionRiskList = async () => {
    try {
      const res = await getCalculationRisk();
      setRiskCalcultionList(res.data?.responseObject);
    } catch (error) {
      console.log('err [getCheckList]', error);
    }
  };

  const calculateRisk = (e) => {
    setriskIndexValue(e.event.target.name);
    getCalcultionRiskList();
    setCurrentIndex(e.event.target.name.substr(26, 1));
    setCalculate(!calculate);
    changeTabFun(riskAssesmentId);
  };

  const getRiskMatrix = (item) => {
    setisEnable(true);
    const myObj = item.data;
    const getFirstTruthyItem = (obj) => Object.keys(obj).find((i) => obj[i] === true);
    changeTabFun(riskAssesmentId);
    if (calculate1check) {
      // setCalculate1(getFirstTruthyItem(myObj));
      setCalculate1check(null);
      const index = changedData.findIndex((x) => x.checklistName == 'Risk Assessment');

      changedData[index].formData.changed = undefined;
      changedData[index].formData.data.container.dataGrid[currentIndex].textField5 =
        getFirstTruthyItem(myObj);
    }
    if (calculate2check) {
      // setCalculate2(getFirstTruthyItem(myObj));
      setCalculate2check(null);
      const index = changedData.findIndex((x) => x.checklistName == 'Risk Assessment');
      changedData[index].formData.changed = undefined;
      changedData[index].formData.data.container.dataGrid[currentIndex].textField =
        getFirstTruthyItem(myObj);
    }
    setCalculate(!calculate);
  };

  return (
    <>
      {/* {isUpdating && <Spinner />} */}

      {Processid == 13 && workPermitId ? (
        <Row className="my-4 disable_button">
          <Col md={12} className="mx-auto p-3">
            {sectionlist.map((form, id) => {
              return (
                <>
                  {!loadingData &&
                    form?.formData?.map((form, index) => {
                      return (
                        <Form
                          ref={(node) => {
                            formRef.current[form.checklist] = node;
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
                          onChange={(data) => {
                            onFormChange(data, form.checklistid, form.checklist);
                          }}
                          onBlur={handleFieldBlur}
                          submission={
                            (formDefinitionsData &&
                              formDefinitionsData[form.checklistid]?.formData) ||
                            {}
                          }
                          options={{
                            language: i18n.language,
                            i18n,
                          }}
                        />
                      );
                    })}
                </>
              );
            })}
          </Col>
        </Row>
      ) : workPermitId == '' ? (
        // Add your additional condition here
        <Row className="my-4 disable_additem_button">
          <Col md={12} className="mx-auto p-3">
            {sectionlist.map((form, id) => {
              return (
                <>
                  {!loadingData &&
                    form?.formData?.map((form, index) => {
                      return (
                        <Form
                          ref={(node) => {
                            formRef.current[form.checklist] = node;
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
                          onChange={(data) => {
                            onFormChange(data, form.checklistid, form.checklist);
                          }}
                          onBlur={handleFieldBlur}
                          submission={
                            (formDefinitionsData &&
                              formDefinitionsData[form.checklistid]?.formData) ||
                            {}
                          }
                          options={{
                            language: i18n.language,
                            i18n,
                          }}
                        />
                      );
                    })}
                </>
              );
            })}
          </Col>
        </Row>
      ) : (
        // <Row className={`my-4 ${isEdit ? 'disable_button' : ''}`}>
        <Row className="my-4 ">
          <Col md={12} className="mx-auto p-3">
            {sectionlist.map((form, id) => {
              return (
                <>
                  {!loadingData &&
                    form?.formData?.map((form, index) => {
                      return (
                        <Form
                          ref={(node) => {
                            formRef.current[form.checklist] = node;
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
                          onChange={(data) => {
                            onFormChange(data, form.checklistid, form.checklist);
                          }}
                          onBlur={handleFieldBlur}
                          submission={
                            (formDefinitionsData &&
                              formDefinitionsData[form.checklistid]?.formData) ||
                            {}
                          }
                          options={{
                            language: i18n.language,
                            i18n,
                          }}
                        />
                      );
                    })}
                </>
              );
            })}
          </Col>
        </Row>
      )}
      {calculate && riskCalcultionList.id && (
        <KendoDialog title={'Risk Score Calculation '} onClose={() => setCalculate(!calculate)}>
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
export default Riskassesment;
