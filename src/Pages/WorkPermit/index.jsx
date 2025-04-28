import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import { process } from '@progress/kendo-data-query';
import { Field, Form, FormElement } from '@progress/kendo-react-form';
import { GridColumn as Column, Grid } from '@progress/kendo-react-grid';
import { Card } from '@progress/kendo-react-layout';
import CommonButton from 'Components/Buttons/CommonButton';
import Dialog from 'Components/Dialog';
import { FormDatePicker, FormInput } from 'Components/Form/Form';
import MyCommandCell from 'Components/MyCommandCell';
import Pagination from 'Components/Pagination/Pagination';
import {
  getAreaFilterData,
  getAssetFilterData,
  getClosedNumberFilterApiData,
  getClosedTitleFilterApiData,
  getNumberFilterApiData,
  getPermitsFilterData,
  getRolesFilterData,
  getStatusFilterData,
  getTitleFilterApiData,
  getUserRole,
  getUserTooltipData,
  notificationData,
  notificationDataCount,
  notificationRead,
} from 'Services/API/masterApi';
import { useCustomRef } from 'Services/services';
import moment from 'moment';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaBell } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { orderBy } from '@progress/kendo-data-query';
import { ColumnMenuCheckboxFilter } from 'Components/columnMenu';
import { getstatusname } from 'store/StatusName/statusnameSlice';
import Spinner from '../../Components/Spinner/Spinner';
import { deleteWorkPermit, getWorkPermitCloseData, getWorkPermitData } from './api';
import './style.css';
const initialSort = [
  {
    field: '',
    dir: '',
  },
];

const editField = 'inEdit';
const intialstate = {
  logic: 'and',
  filters: [],
};

const Work_Permit = () => {
  const [sort, setSort] = React.useState(initialSort);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [ID, setID] = React.useState('');
  const [perPage, setPerPage] = React.useState(null);
  const [limit, setLimit] = React.useState(10);
  const [startDate, setStartDate] = React.useState(null);
  const [toggleDialog, setToggleDialog] = React.useState(false);
  const [endDate, setEndDate] = React.useState(null);
  const { t, i18n } = useTranslation();
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  const [filter, setFilter] = React.useState(intialstate);
  const [users, setUsers] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const [viewTab, setViewTab] = React.useState('');
  const anchor = React.useRef(null);
  const [show, setShow] = React.useState(false);
  const [datafilter, setDatafilter] = React.useState(false);
  const [filterValue, setFilterValue] = React.useState(false);
  const [notification, setNotification] = React.useState([]);
  const [notificationcount, setNotificationCount] = React.useState([]);
  const [userRole, setUserRole] = React.useState([]);
  const [userRoleGridData, setUserRoleGridData] = React.useState([]);
  const [tooltipUserData, setTooltipUserData] = React.useState([]);
  const [filterAllVariable, setFilterAllVariable] = React.useState([]);
  const [area, setArea] = React.useState([]);
  const [asset, setAsset] = React.useState([]);
  const [permitTypes, setPermitTypes] = React.useState([]);
  const [gridAllStatus, setgridAllStatus] = React.useState([]);
  const [gridAllRoles, setgridAllRoles] = React.useState([]);
  const [titleFilterData, setTitleFilterData] = React.useState([]);
  const [numberFilterData, setNumberFilterData] = React.useState([]);
  const [allFilterResponseData, setallFilterResponseData] = React.useState([]);
  const dispatch = useDispatch();
  const processTypeList = useSelector(getstatusname);
  const [selected, setSelected] = React.useState(
    processTypeList.StatusName === 'Closed' || processTypeList.StatusName === 'Rejected'
      ? '1'
      : '0',
  );
  const createDataState = (dataState) => {
    return {
      result: process(users.slice(0), dataState),
      dataState: dataState,
    };
  };
  let initialStatefilter = createDataState({
    take: limit,
    skip: 0,
  });
  const [result, setResult] = React.useState(initialStatefilter.result);
  const [dataState, setDataState] = React.useState(initialStatefilter.dataState);
  React.useEffect(() => {
    setResult(initialStatefilter.result);
    setDataState(initialStatefilter.dataState);
  }, [users]);

  const getData = async (sort, status, inputFilters) => {
    setLoading(true);
    const data = {
      sortingField: sort[0].field,
      sortingOrder: sort[0].dir,
      status: status === '0' ? 'active' : 'completed',
      inputFilters: [
        {
          searchValue: inputFilters,
        },
      ],
      permitstatusFilter: filterAllVariable.permitstatusFilter || [],
      numberFilter: filterAllVariable.numberFilter || [],
      titleFilter: filterAllVariable.titleFilter || [],
      permitTypeFilter: filterAllVariable.permitTypeFilter || [],
      userRoleFilter: filterAllVariable.userRoleFilter || [],
      assetFilter: filterAllVariable.assetFilter || [],
      areaFilter: filterAllVariable.areaFilter || [],
    };
    const res = await getWorkPermitData({ page, limit, startDate, endDate, data });
    if (res && res.data) {
      setUsers(res.data.responseObject?.workpermitData);
      const workpermitData = res.data.responseObject?.workpermitData;

      const ApiData = {
        areaFilter: Array.from(new Set(workpermitData.map((val) => val.area))).map((area) => ({
          area,
        })),
        assetFilter: Array.from(new Set(workpermitData.map((val) => val.asset))).map((asset) => ({
          asset,
        })),
        numberFilter: Array.from(new Set(workpermitData.map((val) => val.number))).map(
          (number) => ({ number }),
        ),
        permitTypeFilter: Array.from(new Set(workpermitData.map((val) => val.permit))).map(
          (permitType) => ({ permitType }),
        ),
        permitstatusFilter: Array.from(new Set(workpermitData.map((val) => val.status))).map(
          (permitstatus) => ({ permitstatus }),
        ),
        titleFilter: Array.from(new Set(workpermitData.map((val) => val.title))).map((title) => ({
          title,
        })),
        userRoleFilter: Array.from(
          new Set(workpermitData.map((val) => val.currentStepApprovalRoleId)),
        ).map((userRole) => ({ userRole })),
      };

      setallFilterResponseData(ApiData);
      setPerPage(res.data.responseObject?.countData);
    }
    setLoading(false);
  };

  const getCloseData = async (sort, status, inputFilters) => {
    const data = {
      sortingField: sort[0].field,
      sortingOrder: sort[0].dir,
      status: status === '0' ? 'active' : 'completed',
      inputFilters: [
        {
          searchValue: inputFilters,
        },
      ],
      permitstatusFilter: filterAllVariable.permitstatusFilter || [],
      numberFilter: filterAllVariable.numberFilter || [],
      titleFilter: filterAllVariable.titleFilter || [],
      permitTypeFilter: filterAllVariable.permitTypeFilter || [],
      userRoleFilter: filterAllVariable.userRoleFilter || [],
      assetFilter: filterAllVariable.assetFilter || [],
      areaFilter: filterAllVariable.areaFilter || [],
    };

    setLoading(true);

    const res = await getWorkPermitCloseData({ page, limit, startDate, endDate, data });

    if (res && res.data) {
      setUsers(res.data.responseObject?.workpermitData);
      const workpermitData = res.data.responseObject?.workpermitData;

      const ApiData = {
        areaFilter: Array.from(new Set(workpermitData.map((val) => val.area))).map((area) => ({
          area,
        })),
        assetFilter: Array.from(new Set(workpermitData.map((val) => val.asset))).map((asset) => ({
          asset,
        })),
        numberFilter: Array.from(new Set(workpermitData.map((val) => val.number))).map(
          (number) => ({ number }),
        ),
        permitTypeFilter: Array.from(new Set(workpermitData.map((val) => val.permit))).map(
          (permitType) => ({ permitType }),
        ),
        permitstatusFilter: Array.from(new Set(workpermitData.map((val) => val.status))).map(
          (permitstatus) => ({ permitstatus }),
        ),
        titleFilter: Array.from(new Set(workpermitData.map((val) => val.title))).map((title) => ({
          title,
        })),
        userRoleFilter: Array.from(
          new Set(workpermitData.map((val) => val.currentStepApprovalRoleId)),
        ).map((userRole) => ({ userRole })),
      };

      setallFilterResponseData(ApiData);
      setPerPage(res.data.responseObject?.countData);
    }
    setLoading(false);
  };
  const getNotificationData = async () => {
    try {
      const res = await notificationData();

      setNotification(res.data.responseObject);
    } catch (err) {
      console.log(err);
    }
  };
  const getNotificationDataCount = async () => {
    try {
      const res = await notificationDataCount();

      setNotificationCount(res.data.responseObject);
    } catch (err) {
      console.log(err);
    }
  };
  const remove = (dataItem) => {
    setID(dataItem.requestId);
    setToggleDialog(!toggleDialog);
  };
  const handleDelete = async () => {
    try {
      await deleteWorkPermit(ID);
      toast.success('Work Permit Deleted Successfully');
      getData(sort, selected, title);
      setToggleDialog(!toggleDialog);
    } catch (err) {
      toast.error(err.title || 'Something went wrong!');
    }
  };

  const handleSearch = async () => {
    // await getData(sort, selected, title);
    if (selected === '0') {
      getData(sort, selected, title);
    } else {
      getCloseData(sort, selected, title);
    }
  };

  React.useEffect(() => {
    if (selected === '0') {
      getData(sort, selected, title);
    } else {
      getCloseData(sort, selected, title);
    }
  }, [page, limit, sort, selected]);

  useEffect(() => {
    if (selected === '0') {
      getData(sort, selected, title);
      getTitleFilterData();
    } else {
      getCloseData(sort, selected, title);
    }
  }, [filterAllVariable]);

  const getTitleFilterData = async () => {
    const ApiData = {
      workFlowType: 'WorkPermit',
      titleFilter: filterValue ? allFilterResponseData.titleFilter : [],
    };
    try {
      const res = await getTitleFilterApiData(ApiData);
      const newData = res.data.responseObject.map((val) => ({
        title: val.title,
      }));
      setTitleFilterData(newData);
    } catch (err) {}
  };

  const getNumberFilterData = async () => {
    const ApiData = {
      workFlowType: 'WorkPermit',
      numberFilter: filterValue ? allFilterResponseData.numberFilter : [],
    };
    try {
      const res = await getNumberFilterApiData(ApiData);
      const newData = res.data.responseObject.map((val) => ({
        number: val.number,
      }));
      setNumberFilterData(newData);
    } catch (err) {}
  };

  const getAsset = async () => {
    const ApiData = {
      workFlowType: 'WorkPermit',
      assetFilter: filterValue ? allFilterResponseData.assetFilter : [],
    };
    try {
      const res = await getAssetFilterData(ApiData);
      let newData = res.data.responseObject.map((val) => ({
        asset: val.asset,
      }));
      setAsset(newData);
    } catch (err) {}
  };

  const getAreas = async () => {
    const ApiData = {
      workFlowType: 'WorkPermit',
      areaFilter: filterValue ? allFilterResponseData.areaFilter : [],
    };
    try {
      const res = await getAreaFilterData(ApiData);
      let newData = res.data.responseObject.map((val) => ({
        area: val.area,
      }));
      setArea(newData);
    } catch (err) {}
  };

  const getAllPermitTypes = async () => {
    const ApiData = {
      workFlowType: 'WorkPermit',
      permitTypeFilter: filterValue ? allFilterResponseData.permitTypeFilter : [],
    };
    try {
      const res = await getPermitsFilterData(ApiData);
      const newData = res.data.responseObject.map((val) => ({
        permit: val.permitType,
      }));
      setPermitTypes(newData);
    } catch (err) {}
  };

  const getWorkPermitStatusesData = async () => {
    const ApiData = {
      workFlowType: 'WorkPermit',
      permitstatusFilter: filterValue ? allFilterResponseData.permitstatusFilter : [],
    };
    const res = await getStatusFilterData(ApiData);
    const newdata = res.data.responseObject.map((val) => ({
      status: val.permitstatus,
    }));
    setgridAllStatus(newdata);
  };

  const getWorkPermitRolesFilterData = async () => {
    const ApiData = {
      workFlowType: 'WorkPermit',
      userRoleFilter: filterValue ? allFilterResponseData.userRoleFilter : [],
    };
    const res = await getRolesFilterData(ApiData);
    const newdata = res.data.responseObject.map((val) => ({
      currentStepApprovalRoleId: val.userRole,
    }));

    setgridAllRoles(newdata);
  };
  const getClosedTitleFilterData = async () => {
    const ApiData = {
      workFlowType: 'WorkPermit',
      titleFilter: filterValue ? allFilterResponseData.titleFilter : [],
    };
    try {
      const res = await getClosedTitleFilterApiData(ApiData);
      const newData = res.data.responseObject.map((val) => ({
        title: val.title,
      }));
      setTitleFilterData(newData);
    } catch (err) {}
  };

  const getClosedNumberFilterData = async () => {
    const ApiData = {
      workFlowType: 'WorkPermit',
      numberFilter: filterValue ? allFilterResponseData.numberFilter : [],
    };
    try {
      const res = await getClosedNumberFilterApiData(ApiData);
      const newData = res.data.responseObject.map((val) => ({
        number: val.number,
      }));
      setNumberFilterData(newData);
    } catch (err) {}
  };
  useEffect(() => {
    if (selected === '0') {
      getAreas();
      getAsset();
      getAllPermitTypes();
      getTitleFilterData();
      getNumberFilterData();
      getWorkPermitRolesFilterData();
      getWorkPermitStatusesData();
    } else {
      getAreas();
      getAsset();
      getAllPermitTypes();
      getClosedTitleFilterData();
      getClosedNumberFilterData();
      getWorkPermitRolesFilterData();
      getWorkPermitStatusesData();
    }
  }, [allFilterResponseData]);

  const dataStateChange = (event) => {
    if (event.dataState.filter === undefined) {
      setFilterAllVariable([]);
      setFilterValue(false);
    } else {
      let updatedState = createDataState(event.dataState);
      setDatafilter(false);
      setFilterValue(true);
      setResult(updatedState.result);
      setDataState(updatedState.dataState);
      const array = updatedState.dataState.filter?.filters[0].filters;
      const updatedStateArray = array
        .map((val) => {
          if (val.field === 'permit') {
            return { permit: val.value };
          } else if (val.field === 'status') {
            return { permitstatus: val.value };
          } else if (val.field === 'asset') {
            return { asset: val.value };
          } else if (val.field === 'area') {
            return { area: val.value };
          } else if (val.field === 'currentStepApprovalRoleId') {
            return { userRole: val.value };
          } else if (val.field === 'number') {
            return { number: val.value };
          } else if (val.field === 'title') {
            return { title: val.value };
          }
          return null; // or return any default value if needed
        })
        .filter(Boolean);

      setFilterAllVariable((prevState) => {
        const updatedFilters = {
          permitTypeFilter: prevState.permitTypeFilter || [],
          permitstatusFilter: prevState.permitstatusFilter || [],
          assetFilter: prevState.assetFilter || [],
          areaFilter: prevState.areaFilter || [],
          userRoleFilter: prevState.userRoleFilter || [],
          numberFilter: prevState.numberFilter || [],
          titleFilter: prevState.titleFilter || [],
        };

        updatedFilters.permitTypeFilter.push(
          ...updatedStateArray
            .filter((filter) => filter.permit)
            .map((filter) => ({ permitType: filter.permit })),
        );
        updatedFilters.permitstatusFilter.push(
          ...updatedStateArray
            .filter((filter) => filter.permitstatus)
            .map((filter) => ({ permitstatus: filter.permitstatus })),
        );
        updatedFilters.assetFilter.push(
          ...updatedStateArray
            .filter((filter) => filter.asset)
            .map((filter) => ({ asset: filter.asset })),
        );
        updatedFilters.areaFilter.push(
          ...updatedStateArray
            .filter((filter) => filter.area)
            .map((filter) => ({ area: filter.area })),
        );
        updatedFilters.userRoleFilter.push(
          ...updatedStateArray
            .filter((filter) => filter.userRole)
            .map((filter) => ({ userRole: filter.userRole })),
        );
        updatedFilters.numberFilter.push(
          ...updatedStateArray
            .filter((filter) => filter.number)
            .map((filter) => ({ number: filter.number })),
        );
        updatedFilters.titleFilter.push(
          ...updatedStateArray
            .filter((filter) => filter.title)
            .map((filter) => ({ title: filter.title })),
        );

        return updatedFilters;
      });
    }

    // Call the getData function with the updated filters
  };

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  const handelGotoPage = () => {
    navigate('/manage-work-permit/new');
  };
  const onStartChange = (e) => {
    setStartDate(moment(e.value).format('YYYY-MM-DD'));
  };
  const onEndChange = (e) => {
    setEndDate(moment(e.value).format('YYYY-MM-DD'));
  };

  const enterEdit = (dataItem) => {
    navigate(`/manage-work-permit/${dataItem.requestId}`);
  };
  const view = (dataItem) => {
    setViewTab('view');
    navigate({
      pathname: `/view-permit/${dataItem.requestId}`,
      state: 'view',
    });
  };

  const itemChange = (event) => {
    const newData = data.map((item) =>
      item.ProductID === event.dataItem.ProductID
        ? { ...item, [event.field || '']: event.value }
        : item,
    );
    setData(newData);
  };

  const handlesortpage = (event) => {
    if (event.sort.length === 0) {
      setSort(initialSort);
    } else {
      setSort(event.sort);
    }
  };

  const handleChange = (e, newValue) => {
    setSelected(newValue);
  };

  const getUserRoleData = async () => {
    try {
      await getUserRole()
        .then((res) => {
          const userRoleObjectArray = res.data?.responseObject.map((role, index) => ({
            id: index + 1,
            currentStepApprovalRoleId: role, // Assign value to 'currentStepApprovalRoleId'
          }));
          setUserRole(res.data?.responseObject);
          setUserRoleGridData(userRoleObjectArray);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {}
  };

  const getUserData = async (value) => {
    try {
      const res = await getUserTooltipData(value.asset, value.currentStepApprovalRoleId);
      setTooltipUserData(res.data.responseObject);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserRoleData();
    getUserData();
    localStorage.setItem('statusName', '');
  }, []);

  const userRoleValue = userRole?.includes('PTW-Admin');

  const CommandCell = (props) => (
    <MyCommandCell
      {...props}
      edit={enterEdit}
      remove={remove}
      view={view}
      selected={selected}
      userRoleValue={userRoleValue}
    />
  );

  const ProductNameCell = (props) => {
    return (
      <td
        aria-label="View"
        title={tooltipUserData}
        onMouseEnter={() => getUserData(props.dataItem)}
      >
        {props.dataItem.currentStepApprovalRoleId}
      </td>
    );
  };

  const ValidFrom = ({ dataItem }) => {
    return <td>{moment(dataItem.validFrom).format('DD-MM-YYYY')}</td>;
  };
  const validTo = ({ dataItem }) => {
    return <td>{moment(dataItem.validTo).format('DD-MM-YYYY')}</td>;
  };
  const CreateDate = ({ dataItem }) => {
    return <td>{moment(dataItem.createDate).format('DD-MM-YYYY')}</td>;
  };

  const ref = useCustomRef(() => {
    setShow(false);
  });

  const grid = (
    <Grid
      data={datafilter ? orderBy(users, sort) : result}
      {...dataState}
      onDataStateChange={dataStateChange}
      sortable={true}
      className="gridHeight"
      onItemChange={itemChange}
      editField={editField}
      filter={filter}
      sort={sort}
      resizable={true}
      // pageable={true}
      // pageSize={5}
      onClick={enterEdit}
      onSortChange={handlesortpage}
    >
      <Column
        field="number"
        title={t('number')}
        columnMenu={(props) => ColumnMenuCheckboxFilter(props, numberFilterData)}
        width="100px"
      />
      <Column
        field="title"
        title={t('title')}
        width="120px"
        columnMenu={(props) => ColumnMenuCheckboxFilter(props, titleFilterData)}
        cell={(props) => (
          <td className="btn-color">
            <Link className="text-blue" to={`/manage-work-permit/${props.dataItem.requestId}`}>
              {props.dataItem.title}
            </Link>
          </td>
        )}
      />
      {/* {selected === '0' ? (
        <Column
          field="title"
          title={t('title')}
          width="120px"
          columnMenu={(props) => ColumnMenuCheckboxFilter(props, titleFilterData)}
          cell={(props) => (
            <td className="btn-color">
              <Link className="text-blue" to={`/manage-work-permit/${props.dataItem.requestId}`}>
                {props.dataItem.title}
              </Link>
            </td>
          )}
        />
      ) : (
        <Column field="title" title={t('title')} width="120px" />
      )} */}

      <Column
        field="validfrom"
        title={t('valid_from')}
        editor="validfrom"
        format="{0:g}"
        cell={ValidFrom}
        filter="date"
        width="120px"
      />
      <Column
        field="validto"
        title={t('valid_to')}
        editor="validto"
        format="{0:g}"
        cell={validTo}
        filter="date"
        width="120px"
      />
      <Column
        field="createDate"
        title={t('create_date')}
        editor="validto"
        format="{0:g}"
        cell={CreateDate}
        filter="date"
        width="120px"
      />
      <Column
        field="status"
        title={t('permit_status')}
        className="status"
        columnMenu={(props) => ColumnMenuCheckboxFilter(props, gridAllStatus)}
      />
      <Column
        field="permit"
        title={t('permittype')}
        className="status"
        columnMenu={(props) => ColumnMenuCheckboxFilter(props, permitTypes)}
      />

      <Column
        field="currentStepApprovalRoleId"
        title={t('next_user_role')}
        width="150px"
        cell={ProductNameCell}
        columnMenu={
          selected === '0' ? (props) => ColumnMenuCheckboxFilter(props, gridAllRoles) : ''
        }
        // columnMenu={(props) => ColumnMenuCheckboxFilter(props, gridAllRoles)}
      />

      <Column
        field="asset"
        title={t('asset')}
        columnMenu={(props) => ColumnMenuCheckboxFilter(props, asset)}
      />
      <Column
        field="area"
        title={t('area')}
        resizable={false}
        columnMenu={(props) => ColumnMenuCheckboxFilter(props, area)}
      />

      <Column
        cell={CommandCell}
        filterable={false}
        sortable={false}
        title={t('action')}
        minwidth="100px"
      />
    </Grid>
  );
  const onchangetitle = (e) => {
    setDatafilter(true);
    setTitle(e.value);
    if (e.value === '') {
      if (selected === '0') {
        getData(sort, selected, '');
      } else {
        getCloseData(sort, selected, '');
      }
    }
  };

  useEffect(() => {
    getNotificationDataCount();
  }, []);

  const onBellIconClick = () => {
    setShow(!show);
    getNotificationData();
  };
  const readNotification = async (requestId) => {
    try {
      const res = await notificationRead(requestId);
    } catch (err) {
      console.log(err);
    }
  };
  const onRecordClick = async (requestId) => {
    readNotification(requestId);
    navigate(`/manage-work-permit/${requestId}`);
  };

  return (
    <div className="dynamicgrid dynamicGrid_">
      <Row className="mx-1 my-3 pb-2 shadow align-items-end mainOuter">
        <Col xs={12} md={8}>
          <Form
            render={(formRenderProps) => (
              <FormElement>
                <Row className="align-items-end label  space ">
                  <Col xs={12} md={3}>
                    <Field
                      key={'start Date'}
                      id={'start Date'}
                      name={'start_date'}
                      label={t('start_date')}
                      component={FormDatePicker}
                      onChange={onStartChange}
                      defaultValue=""
                      placeholder={t('Day-Month-Year')}
                    />
                  </Col>
                  <Col xs={12} md={3}>
                    <Field
                      key={'end Date'}
                      id={'end Date'}
                      name={'end Date'}
                      label={t('end_date')}
                      component={FormDatePicker}
                      onChange={onEndChange}
                      defaultValue=""
                      placeholder={t('Day-Month-Year')}
                    />
                  </Col>

                  <Col xs={12} md={4}>
                    <Field
                      key={'Tittle'}
                      id={'Tittle'}
                      name={'title'}
                      label={t('search_text')}
                      type={'search'}
                      component={FormInput}
                      onChange={onchangetitle}
                      defaultValue=""
                      data={title}
                    />
                  </Col>
                  <Col xs={12} md={1} className="pb-2">
                    <CommonButton text={t('search')} onHandleClick={handleSearch} />
                  </Col>
                </Row>
              </FormElement>
            )}
          />
        </Col>
        <Col xs={12} md={3} className="text-right pb-2">
          <CommonButton text={t('new_permit')} onHandleClick={handelGotoPage} mx={2} />
        </Col>
        <Col xs={12} md={1} className="mb-2">
          <div ref={ref} className="relative" style={{ width: '40px' }}>
            <FaBell
              fontSize={40}
              color="#1274ac"
              className="hand-pointer"
              onClick={onBellIconClick}
            />
            {notificationcount <= 0 ? (
              ''
            ) : (
              <div
                className=""
                style={{
                  backgroundColor: 'red',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '0px',
                  right: '0px',
                  width: '20px',
                  height: '20px',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                {notificationcount}
              </div>
            )}

            {show && (
              <div className="notification-container">
                <div className="m-0 py-1 px-2">
                  <div
                    className="border-bottom-dark d-flex align-items-center justify-content-between"
                    style={{ paddingLeft: '0px' }}
                  >
                    <h4 className="my-0 text-capitalize font-weight-bold justify-content-left">
                      notification
                    </h4>
                    <MdClear
                      className="justify-content-right "
                      onRecordClick
                      fontSize={25}
                      onClick={onBellIconClick}
                    />
                  </div>
                </div>
                <div className="scroll_container">
                  {notification &&
                    notification.map((val) => (
                      <div>
                        <p
                          className="border-bottom-dark hand-pointer"
                          onClick={() => onRecordClick(val.requestId)}
                        >
                          {val.message}
                          <br />
                          <p className="notification-details">
                            {' '}
                            {moment(val.createDate).format('DD-MM-YYYY HH:mm:ss')}
                          </p>
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>

      <Card className="border-0 shadow ">
        <TabContext value={selected}>
          <TabList onChange={handleChange} className="border-bottom">
            <Tab label={t('in_process')} value="0" className="font-weight-bold" />
            <Tab label={t('closed')} value="1" className="font-weight-bold" />
          </TabList>
          <TabPanel value="0">
            {grid}
            {loading && <Spinner />}

            <Pagination
              onChange={handlePageClick}
              perPage={perPage}
              page={page}
              totalPage={Math.ceil(perPage / limit)}
              setLimit={setLimit}
              limit={limit}
            />
          </TabPanel>
          <TabPanel value="1">
            {grid}
            {loading && <Spinner />}
            <Pagination
              onChange={handlePageClick}
              perPage={perPage}
              totalPage={Math.ceil(perPage / limit)}
              setLimit={setLimit}
              limit={limit}
              page={page}
            />
          </TabPanel>
        </TabContext>
      </Card>

      {toggleDialog && (
        <Dialog
          toggleDialog={toggleDialog}
          setToggleDialog={setToggleDialog}
          handleDelete={handleDelete}
          text={'are you sure you want to delete ?'}
        />
      )}
    </div>
  );
};

export default Work_Permit;
