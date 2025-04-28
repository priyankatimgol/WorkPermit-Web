import { AutoComplete, DropDownList } from '@progress/kendo-react-dropdowns';
import { Field } from '@progress/kendo-react-form';
import CommonButton from 'Components/Buttons/CommonButton';
import {
  FormDateTimePicker,
  FormDropDownList,
  FormInput,
  FormTextArea,
} from 'Components/Form/Form';
import { getApplicantsList } from 'Services/API/masterApi';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './style.css';

const NewPermitForm = ({
  error,
  zone,
  system,
  workPermitData,
  handleChange,
  permitTypes,
  asset,
  type,
  area,
  discipline,
  hide,
  subtype,
  isEdit,
  setValueAuto,
  ValueAuto,
  setValueAutodata,
  ValueAutodata,
  isUpdating,
  setWorkPermitData,
  userRole,
  statusId,
  setTabDisabled,
  department,
  items,
  handleadddepartment,
  departmenametext,
  residualrisk,
  setResidualRisk,
  residualriskvalue,
  selected,
}) => {
  const [autoid, setAutoid] = useState(null);
  const [dropDownvalue, setdropDownvalue] = useState();
  const { t } = useTranslation();
  localStorage.setItem(
    'areainfoname',
    area.find((_) => _.id === workPermitData?.area)?.description,
  );
  localStorage.setItem('zonename', zone.find((_) => _.id === workPermitData?.zone)?.zone);
  const getdropdownData = async (e) => {
    try {
      const res = await getApplicantsList(e);
      setdropDownvalue(
        res.data.responseObject.map((val) => ({ id: val.value, description: val.value })),
      );
    } catch (err) {
      console.log('error [getApplicable]', err);
    }
  };

  useEffect(() => {
    setTabDisabled(false);
  }, [setTabDisabled]);
  const handleAutoComletechange = (event) => {
    setValueAuto(event.value);
    getdropdownData(event.value);
    const newdata = dropDownvalue
      .filter((item) => item.description === event.value)
      .map((el) => el.id)[0];
    setAutoid(newdata);
    setWorkPermitData({ ...workPermitData, applicant: newdata });
  };
  if (isEdit && !Object.keys(workPermitData).length) return null;
  const assetid = asset?.map((val) => val.id);
  const workid = workPermitData?.assetId;
  if (assetid === workid) {
    const des = asset.map((val) => val.description);
  }

  return (
    <div className={`card p-2`}>
      <Row className="row justify-content-end">
        <Col xs={12} md={4}>
          <span>
            <label>{t('number')}</label>
            <span className="astrix_sysmbol"></span>
          </span>
          <Field
            tabindex={1}
            key={'Number'}
            id={'Number'}
            name={'number'}
            type={'text'}
            placeHolder={t('auto_generated')}
            component={FormInput}
            data={workPermitData?.number}
            onChange={handleChange}
            disabled={true}
            defaultValue={workPermitData?.number}
            className="gridclass"
          />
          <span className="valid">{error['number']}</span>
        </Col>
        <Col xs={12} md={4} className="relative">
          <span>
            <label>{t('title')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>
          <Field
            tabindex={2}
            key={'Tittle'}
            id={'Tittle'}
            name={'title'}
            type={'text'}
            required
            component={FormInput}
            data={workPermitData?.title}
            onChange={handleChange}
            defaultValue={workPermitData?.title}
            placeHolder={t('enter_title')}
            className="gridclass"
            disabled={hide === 'hide' ? true : isEdit}
          />
          <span className="valid">{error['title']}</span>
        </Col>
        <Col xs={12} md={4} className="relative">
          <span>
            <label>{t('description')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>
          <Field
            tabindex={3}
            key={'description'}
            id={'description'}
            name={'description'}
            type={'text'}
            max={120}
            rows={1}
            component={FormTextArea}
            data={workPermitData?.description}
            onChange={handleChange}
            defaultValue={workPermitData?.description}
            placeHolder={t('enter_description')}
            className="gridclass"
            disabled={hide === 'hide' ? true : isEdit}
          />
          <span className="valid">{error['description']}</span>
        </Col>
      </Row>

      <Row className="row justify-content-end">
        <Col xs={12} md={isEdit ? 2 : 4} className="relative">
          <span>
            <label>{t('permittype')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>

          <DropDownList
            data={permitTypes}
            textField="processType"
            dataItemKey="processId"
            name={'ptype'}
            value={{
              processType: permitTypes.find((_) => _.processId === workPermitData?.processId)
                ?.processType,
            }}
            onChange={handleChange}
            placeHolder={t('enter_permit')}
            className="gridclass"
            disabled={hide === 'hide' ? true : isEdit}
          />
          <span className="valid">{error['ptype']}</span>
        </Col>
        {isEdit && (
          <Col xs={12} md={2} className="relative">
            <span>
              <label>{t('asset')}</label>
              <span className="astrix_sysmbol">*</span>
            </span>
            <Field
              key={'asset'}
              id={'asset'}
              name={'asset'}
              type={'text'}
              component={FormInput}
              data={workPermitData.assetDescription}
              assets={workPermitData.assetDescription}
              onChange={handleChange}
              defaultValue={workPermitData.assetDescription}
              placeHolder={'Type1'}
              className="gridclass"
              disabled={hide === 'hide' ? true : isEdit}
            />
          </Col>
        )}

        <Col xs={12} md={4} className="relative">
          <span>
            <label>{t('risk_factor')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>

          <DropDownList
            // data={
            //   workPermitData.processId !== 2 && workPermitData.processId !== 1
            //     ? type.filter((item) => item.description === 'None')
            //     : type
            // }
            data={
              workPermitData.processId === 13
                ? type.filter((item) => item.description === residualrisk) // Using an array to match the output of filter
                : workPermitData.processId !== 2 && workPermitData.processId !== 1
                ? type.filter((item) => item.description === 'None')
                : type
            }
            textField="description"
            dataItemKey="id"
            name={'type'}
            // value={
            //   workPermitData.processId !== 2 && workPermitData.processId !== 1
            //     ? type.find((item) => item.description === 'None')
            //     : { description: workPermitData.type }
            // }

            value={
              workPermitData.processId == 13
                ? { description: residualrisk }
                : workPermitData.processId !== 2 && workPermitData.processId !== 1
                ? type.find((item) => item.description === 'None')
                : { description: workPermitData.type }
            }
            onChange={handleChange}
            placeHolder={'Type1'}
            className="gridclass"
            disabled={
              isEdit
                ? true
                : workPermitData.processId !== 2 && workPermitData.processId !== 1
                ? true
                : false
            }
          />
          <span className="valid">{error['type']}</span>
        </Col>
        <Col xs={12} md={4} className="relative">
          <span>
            <label>{t('area')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>
          <Field
            tabindex={7}
            key={'description'}
            id={'id'}
            name={'area'}
            component={FormDropDownList}
            data={area.map((val) => val.description)}
            onChange={handleChange}
            assets={area.find((_) => _.id === workPermitData?.area)?.description}
            as={'select'}
            defaultValue={area.find((_) => _.id === workPermitData?.area)?.description}
            placeHolder={'Area1'}
            className="gridclass"
            disabled={hide === 'hide' ? true : isEdit}
          />
          <span className="valid">{error['area']}</span>
        </Col>
      </Row>

      <Row className="row justify-content-end">
        <Col xs={12} md={4} className="relative">
          <span>
            <label>{t('sub_type')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>
          <Field
            tabindex={8}
            key={'subtype'}
            id={'subtype'}
            name={'subtype'}
            component={FormDropDownList}
            onChange={handleChange}
            data={subtype.map((val) => val.description)}
            assets={subtype.find((_) => _.id === workPermitData?.subtype)?.description}
            as={'select'}
            defaultValue={subtype.find((_) => _.id === workPermitData?.subtype)?.description}
            placeHolder={'sub Type1'}
            className="gridclass"
            disabled={hide === 'hide' ? true : isEdit}
          />
          <span className="valid">{error['subtype']}</span>
        </Col>
        <Col xs={12} md={4} className="relative">
          <span>
            <label>{t('zone')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>
          <Field
            tabindex={9}
            key={'zone'}
            id={'zone'}
            name={'zone'}
            component={FormDropDownList}
            onChange={handleChange}
            data={zone.map((val) => val.zone)}
            assets={zone.find((_) => _.id === workPermitData?.zone)?.zone}
            as={'select'}
            defaultValue={zone.find((_) => _.id === workPermitData?.zone)?.zone}
            className="gridclass"
            disabled={hide === 'hide' ? true : isEdit}
          />
          <span className="valid">{error['zone']}</span>
        </Col>
        <Col xs={12} md={4} className="relative">
          <span>
            <label>{t('valid_from')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>
          <Field
            tabindex={10}
            key={'validFrom'}
            id={'validFrom'}
            name={'validFrom'}
            validDate={workPermitData?.validFrom}
            value={workPermitData?.validFrom}
            component={FormDateTimePicker}
            onChange={handleChange}
            defaultValue={workPermitData?.validFrom ? new Date(workPermitData?.validFrom) : ''}
            className="gridclass"
            // disabled={(userRole === true && statusId === 9) || !isEdit ? false : true}
            disabled={statusId === 9 || !isEdit ? false : true}
            placeholder={t('Day-Month-Year Hour:Minute:Second AM')}
          />
          <span className="valid">{error['validFrom']}</span>
        </Col>
      </Row>

      <Row className="row justify-content-end">
        <Col xs={12} md={4} className="relative">
          <span>
            <label>{t('system')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>
          {/* <DropDownList
            data={system}
            textField="system"
            dataItemKey="system"
            name={'system'}
            // value={
            //   workPermitData.processId !== 2 && workPermitData.processId !== 1
            //     ? type.find((item) => item.description === 'None')
            //     : { description: workPermitData.type }
            // }
            onChange={handleChange}
            placeHolder={'Type1'}
            className="gridclass"
            disabled={hide === 'hide' ? true : isEdit}
          /> */}
          <DropDownList
            data={system}
            textField="system"
            dataItemKey="system"
            name={'system'}
            value={{
              system: system.find((_) => _.system === workPermitData?.system)?.system,
            }}
            onChange={handleChange}
            placeHolder={t('system')}
            className="gridclass"
            disabled={hide === 'hide' ? true : isEdit}
          />
          {/* <Field
            tabindex={11}
            key={'system'}
            id={'system'}
            name={'system'}
            component={FormDropDownList}
            onChange={handleChange}
            data={system.map((val) => val.system)}
            assets={workPermitData.system}
            as={'select'}
            defaultValue={workPermitData.system}
            className="gridclass"
            disabled={hide === 'hide' ? true : isEdit}
          /> */}
          <span className="valid">{error['system']}</span>
        </Col>
        <Col xs={12} md={4} className="relative">
          <span>
            <label>{t('discipline')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>
          <Field
            tabindex={12}
            key={'discipline'}
            id={'discipline'}
            name={'discipline'}
            component={FormDropDownList}
            onChange={handleChange}
            data={discipline.map((val) => val.discipline)}
            assets={workPermitData.discipline}
            as={'select'}
            defaultValue={workPermitData.discipline}
            className="gridclass"
            disabled={hide === 'hide' ? true : isEdit}
          />
          <span className="valid">{error['discipline']}</span>
        </Col>
        <Col xs={12} md={4} className="relative">
          <span>
            <label>{t('valid_to')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>
          <Field
            tabindex={13}
            key={'validTo'}
            id={'validTo'}
            name={'validTo'}
            component={FormDateTimePicker}
            validDate={workPermitData?.validTo}
            value={workPermitData?.validTo}
            onChange={handleChange}
            defaultValue={workPermitData?.validTo ? new Date(workPermitData?.validTo) : ''}
            className="gridclass"
            disabled={statusId === 9 || !isEdit ? false : true}
            // disabled={(userRole === true && statusId === 9) || !isEdit ? false : true}
            placeholder={t('Day-Month-Year Hour:Minute:Second AM')}
          />
          <span className="valid">{error['validTo']}</span>
        </Col>
      </Row>

      <Row className="row justify-content-end">
        <Col xs={12} md={4} className="relative">
          <span>
            <label>{t('applicant')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>

          <AutoComplete
            tabindex={14}
            data={dropDownvalue}
            value={ValueAuto}
            textField="description"
            onChange={handleAutoComletechange}
            defaultValue={ValueAuto}
            className="gridclass"
            placeholder={t('please_select_applicant')}
            disabled={hide === 'hide' ? true : isEdit}
          />

          <span className="valid">{error['applicant']}</span>
        </Col>
        <Col xs={12} md={4} className="relative">
          <span>
            <label>{t('safe_job_analysis')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>
          {/* <Field
            tabindex={15}
            key={'Safe job analysis'}
            id={'Safe job analysis'}
            name={'safejob'}
            type={'text'}
            component={FormDropDownList}
            data={items.map((val) => val.text)}
            assets={workPermitData?.safejob}
            onChange={handleChange}
            as={'select'}
            defaultValue={
              workPermitData.processId === 9 || workPermitData.processId === 15
                ? 'No'
                : workPermitData?.safejob
            }
            disabled={
              hide === 'hide' || workPermitData.processId === 9 || workPermitData.processId === 15
                ? true
                : isEdit
            }
            //defaultValue={workPermitData?.safejob}
            placeHolder={t('enter_safe_job_analysis')}
            className="gridclass"
          /> */}

          <DropDownList
            data={
              workPermitData.processId === 9 || workPermitData.processId === 15
                ? items?.filter((item) => item.text === 'No')
                : items
            }
            textField="text"
            dataItemKey="id"
            name={'safejob'}
            value={
              workPermitData.processId === 9 || workPermitData.processId === 15
                ? items?.find((item) => item.text === 'No')
                : { text: workPermitData?.safejob }
            }
            onChange={handleChange}
            placeHolder={'Type1'}
            className="gridclass"
            disabled={
              hide === 'hide' || workPermitData.processId === 9 || workPermitData.processId === 15
                ? true
                : isEdit
            }
          />
          <span className="valid">{error['safejob']}</span>
        </Col>

        <Col xs={12} md={4} className="relative">
          <span>
            <label>{t('work_order')}</label>
            <span className="astrix_sysmbol"></span>
          </span>
          <Field
            tabindex={16}
            key={'workOrder'}
            id={'workOrder'}
            name={'workOrder'}
            //label={t('title')}
            type={'text'}
            required
            component={FormInput}
            data={workPermitData?.workOrder}
            onChange={handleChange}
            defaultValue={workPermitData?.workOrder}
            placeHolder={t('enter_work_order')}
            className="gridclass"
            disabled={hide === 'hide' ? true : isEdit}
          />
          <span className="valid">{error['workOrder']}</span>
        </Col>
      </Row>
      <Row className="row justify-content-end">
        <Col xs={12} md={4} className="required">
          <span>
            <label>{t('department')}</label>
            <span className="astrix_sysmbol">*</span>
          </span>

          <DropDownList
            data={department}
            textField="department"
            dataItemKey="id"
            name={'department'}
            value={{
              department: department.find((_) => _.id == workPermitData?.department)?.department,
            }}
            // value={
            //   department.find((_) => _.id === JSON.parse(workPermitData?.department))?.department !=
            //   'Other'
            //     ? {
            //         department: department.find(
            //           (_) => _.id === JSON.parse(workPermitData?.department),
            //         )?.department,
            //       }
            //     : {
            //         department: department?.find((_) => _.department == departmenametext)
            //           ?.department,
            //       }
            // }
            onChange={handleChange}
            placeHolder={t('enter_department')}
            className="gridclass"
            disabled={hide === 'hide' ? true : isEdit}
          />

          <span className="valid">{error['department']}</span>
        </Col>
        {department.find((_) => _.id == workPermitData?.department)?.department == 'Other' ? (
          <>
            <Col xs={12} md={3} className="relative">
              <span>
                <label>{t('Add Department')}</label>
                <span className="astrix_sysmbol">*</span>
              </span>
              <Field
                tabindex={2}
                key={'departmenametext'}
                id={'departmenametext'}
                name={'departmenametext'}
                type={'text'}
                component={FormInput}
                data={departmenametext}
                onChange={handleChange}
                defaultValue={departmenametext}
                placeHolder={t('enter_title')}
                className="gridclass"
                disabled={hide === 'hide' ? true : isEdit}
              />
              <span className="valid">{error['departmenametext']}</span>
            </Col>
            <Col xs={12} md={1} className=" mt-3 my-10 pt-3">
              <CommonButton text={t('ADD')} onHandleClick={handleadddepartment} />
            </Col>
          </>
        ) : (
          <Col xs={12} md={4} className="required"></Col>
        )}
        <Col xs={12} md={4} className="required"></Col>
      </Row>
    </div>
  );
};

export default NewPermitForm;
