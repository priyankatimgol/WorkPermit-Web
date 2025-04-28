import { GridColumn as Column, Grid } from '@progress/kendo-react-grid';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCheckListForPermitType, getCommentList } from '../../api';

const ViewChecklist = (props) => {
  const { permitId, workPermitId, setFormDefinitions, setTabValidation, setTabDisabled } = props;
  const { t } = useTranslation();
  const [sectionlist, setSectionlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [commentList, setCommentList] = useState([]);
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

  const getChecklistIdsForPermitType = async (permitId) => {
    try {
      setLoading(true);
      const res = await getCheckListForPermitType({ permitId });
      setLoading(false);
      setSectionlist(res.data.responseObject);
      const formData = getUniqueChecklist(res.data.responseObject);
      const checklistsData = [];
      for (let i = 0; i < formData.length; i++) {
        const { checklistid, checklist } = formData[i];
        checklistsData.push({
          name: checklist,
          id: checklistid,
          formData: res,
        });
      }
      setFormDefinitions(checklistsData);
    } catch (err) {
      setLoading(false);
      console.log('Error [getChecklistIdsForPermitType]', err);
    }
  };

  useEffect(() => {
    if (permitId) {
      getChecklistIdsForPermitType(permitId);
    }
  }, [permitId]);

  useEffect(() => {
    getList();
    setTabValidation(null);
  }, []);

  const getList = async () => {
    try {
      setLoading(true);
      const res = await getCommentList(workPermitId);
      setLoading(false);
      setCommentList(
        res.data?.responseObject?.map((val) => ({
          createdate: moment(val.createDate).format('DD-MM-YYYY HH:mm:ss'),
          name: val.displayName,
          statuscondition: val.statusCondition,
          signature: val.signature,
          roledesc: val.roleDesc,
          statusname: val.statusName,
        })),
      );
      setTabDisabled(false);
    } catch (error) {
      setTabDisabled(false);
      console.log('err [getCheckList]', error);
    }
  };

  const grid = (
    <Grid data={commentList}>
      <Column field="name" title={t('user_name')} editor="validfrom" filter="date" />
      <Column field="roledesc" title={t('user_role')} editor="validto" filter="date" />
      <Column field="statusname" title={t('status')} editor="validto" filter="date" />
      <Column field="createdate" title={t('date_time')} className="status" />
    </Grid>
  );

  return (
    <>
      {grid}
      {/* {loading && <Spinner />} */}
    </>
  );
};
export default ViewChecklist;
