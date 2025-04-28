import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Form } from 'react-formio/lib/components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getstatusname } from 'store/StatusName/statusnameSlice';
import { getSectionList } from '../../api';

const IsolationList = (props) => {
  const {
    setFormDefinitions,
    formDefinitionsData,
    workPermitData,
    disabled,
    hide,
    onFormChange,
    changeTabFun,
    isUpdating,
    setIsUpdating,
    setTabValidation,
    formRef,
    statusId,
    setTabDisabled,
  } = props;

  const { i18n } = useTranslation();
  const [sectionlist, setSectionlist] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const statusName = useSelector(getstatusname);
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

  const getSectionListform = async () => {
    setTabValidation(true);
    const mechanicalValue = JSON.parse(localStorage.getItem('Mechanical'));
    const ElectricityValue = JSON.parse(localStorage.getItem('Electricity'));
    let permitId = '';
    if (mechanicalValue) {
      permitId = 18;
    } else {
      permitId = 106;
    }
    try {
      setLoadingData(true);
      setIsUpdating(true);
      const res = await getSectionList(permitId);

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

      // if (hide === 'hide') {
      //   setSectionlist(res.data.responseObject);
      // } else {
      //   setSectionlist(newData);
      // }
      if (statusId <= 2) {
        setSectionlist(res.data.responseObject);
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
      }
      setFormDefinitions(checklistsData);
      setLoadingData(false);
      setIsUpdating(false);
      setTimeout(() => {
        setTabDisabled(false);
      }, 1000);
    } catch (err) {
      setLoadingData(false);
      setTimeout(() => {
        setTabDisabled(false);
      }, 1000);
      console.log('Error [getChecklistIdsForPermitType]', err);
    }
  };

  useEffect(() => {
    getSectionListform();
  }, []);

  return (
    <>
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
                        disabled={disabled}
                        form={form?.formData && JSON.parse(form.formData)}
                        onChange={(data) =>
                          onFormChange(data, form.checklistid, form.checklist, 'risk')
                        }
                        submission={formDefinitionsData[form.checklistid]?.formData || {}}
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
    </>
  );
};
export default IsolationList;
