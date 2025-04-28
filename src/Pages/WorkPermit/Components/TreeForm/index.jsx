import '@progress/kendo-react-animation';
import { Button } from '@progress/kendo-react-buttons';
import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { processTreeViewItems, TreeView } from '@progress/kendo-react-treeview';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getsSerchList } from 'Services/API/masterApi';
const Treeform = ({ setWorkPermitData, workPermitData, getAsetvalue, setAsetValue }) => {
  const [hierarchy, setHierarchy] = useState([]);
  const [hierarchyauto, setHierarchyAuto] = useState([]);
  const [assethirarchy, setAssethirarchy] = useState([]);
  const [assethirarchyauto, setAssethirarchyAuto] = useState([]);
  const [autothirarchy, setAutothirarchy] = useState([]);
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState({});
  const [serchValue, setSerchValue] = useState('');
  const [select, setSelect] = useState(['']);
  const [dropDownvalue, setdropDownvalue] = useState();
  const [serchid, setSearchid] = useState(true);
  const [indexvalue, setIndexvalue] = useState([]);
  const { t, i18n } = useTranslation();
  const [collapse, setCollapse] = useState(false);
  const [expand, setExpand] = useState({
    ids: [],
    idField: 'text',
  });
  useEffect(() => {
    getHierarchy();
  }, []);
  const BaseUrl = localStorage.getItem('BaseUrl');
  const getsearchdropdownList = async (e) => {
    try {
      const res = await getsSerchList(e);
      setAutothirarchy(
        res.data.responseObject.map((val) => ({ text: val.displayName, ids: val.parentId })),
      );
    } catch (err) {
      console.log('error [getApplicable]', err);
    }
  };

  const handleSearch = async (e) => {
    await setHierarchy([]);
    await setAssethirarchy([]);
    if (e.value === '') {
      getHierarchy();
      setSearchid(true);
      setSelect(['']);
      setExpand({
        ids: [],
        idField: 'text',
      });
    } else {
      setSerchValue(e.value);
      getsearchdropdownList(e.value);
      let newData = search(assethirarchyauto, e.value);
      setHierarchyAuto(newData);
      searchvaluelist(e.value);
    }
  };

  const searchvaluelist = (value) => {
    let newData = search(assethirarchy, value);
    setHierarchy(newData);
  };

  const handleSearchicon = (event) => {
    if (serchValue != '') {
      getSearchHierarchy(autothirarchy[0]?.ids);
    } else if (serchValue) {
      getHierarchy(indexvalue);
    }
  };
  const search = (items, term) => {
    return items.reduce((acc, item) => {
      if (contains(item.text, term)) {
        acc.push(item);
      } else if (item.items && item.items.length > 0) {
        let newItems = search(item.items, term);
        if (newItems && newItems.length > 0) {
          acc.push({ text: item.text, items: newItems });
        }
      }
      return acc;
    }, []);
  };

  const contains = (text, term) => {
    return text.toLowerCase().indexOf(term.toLowerCase()) >= 0;
  };

  const getHierarchy = async (id) => {
    setLoader(true);
    await axios
      .get(`${BaseUrl + '/api'}/Master/assethierarchy/${id === undefined ? 'null' : id}`)
      .then((res) => {
        let newArr = res.data.responseObject.map((val) => ({
          ...val,
          ids: val.nodeId,
          text: val.displayName,
          displayNameField: val.displayNameField,
          disabled: !val.isEnabled ? true : false,
          items: [
            {
              ids: '',
              text: '',
            },
          ],
        }));

        if (!hierarchy.length) {
          setHierarchy(newArr);
          setAssethirarchy(newArr);
        } else {
          if (id) {
            parse_constructor(newArr, assethirarchy, id);
          } else {
            setHierarchy(newArr);
            setAssethirarchy(newArr);
          }
          // let value = document.querySelector('.k-textbox').value;
          // search(newArr, value);
        }
        setLoader(false);
      });
  };

  const getSearchHierarchy = async (id) => {
    setSearchid(false);
    setLoader(true);

    await axios
      .get(`${BaseUrl + '/api'}/Master/assethierarchy/${true}/${null}/${id}`)
      .then((res) => {
        // res = {
        //   responseObject: [
        //     {
        //       nodeId: '809c0f75-2b6a-4f22-ae63-98337b58ac21',
        //       displayName: 'Pertamina',
        //       displayNameField: 'Pertamina',
        //       isChildNodes: true,
        //       isEnabled: true,
        //       parentId: '',
        //       expanded: true,
        //     },
        //     {
        //       nodeId: '0fa0698f-9e0f-42ac-94e5-aff64c65df1a',
        //       displayName: 'Balikpapan',
        //       displayNameField: 'Balikpapan',
        //       isChildNodes: true,
        //       isEnabled: true,
        //       parentId: '809c0f75-2b6a-4f22-ae63-98337b58ac21',
        //       expanded: true,
        //     },
        //     {
        //       nodeId: '834ccd41-0223-4515-86bc-183171f41012',
        //       displayName: 'Crude V Console',
        //       displayNameField: 'Crude V Console',
        //       isChildNodes: true,
        //       isEnabled: true,
        //       parentId: '0fa0698f-9e0f-42ac-94e5-aff64c65df1a',
        //       expanded: true,
        //     },
        //     {
        //       nodeId: '9d61f562-1076-4645-8b3e-4dc7201423c6',
        //       displayName: 'CWI Console',
        //       displayNameField: 'CWI Console',
        //       isChildNodes: false,
        //       isEnabled: true,
        //       parentId: '0fa0698f-9e0f-42ac-94e5-aff64c65df1a',
        //     },
        //     {
        //       nodeId: 'f9fdc26e-2e36-4206-a4c0-b8e21a3f4cf4',
        //       displayName: 'Demin Console',
        //       displayNameField: 'Demin Console',
        //       isChildNodes: false,
        //       isEnabled: true,
        //       parentId: '0fa0698f-9e0f-42ac-94e5-aff64c65df1a',
        //     },
        //     {
        //       nodeId: '605011d7-94c9-485e-8c30-5c5b1bc8375f',
        //       displayName: 'Distribution Console',
        //       displayNameField: 'Distribution Console',
        //       isChildNodes: false,
        //       isEnabled: true,
        //       parentId: '0fa0698f-9e0f-42ac-94e5-aff64c65df1a',
        //     },
        //     {
        //       nodeId: '8b8983cc-9156-4251-8a59-ae7ca1fa8841',
        //       displayName: 'Electric Generation Console',
        //       displayNameField: 'Electric Generation Console',
        //       isChildNodes: false,
        //       isEnabled: true,
        //       parentId: '0fa0698f-9e0f-42ac-94e5-aff64c65df1a',
        //     },
        //     {
        //       nodeId: '5d1169b4-ba40-427b-8758-799c98a0adc8',
        //       displayName: 'EWTP & DHP Console',
        //       displayNameField: 'EWTP & DHP Console',
        //       isChildNodes: false,
        //       isEnabled: true,
        //       parentId: '0fa0698f-9e0f-42ac-94e5-aff64c65df1a',
        //     },
        //     {
        //       nodeId: '5d41313d-af5a-49f6-89ec-514804e5b133',
        //       displayName: 'HCU Console',
        //       displayNameField: 'HCU Console',
        //       isChildNodes: false,
        //       isEnabled: true,
        //       parentId: '0fa0698f-9e0f-42ac-94e5-aff64c65df1a',
        //     },
        //     {
        //       nodeId: '75efc290-1ec9-4fdb-b607-c71189a4007c',
        //       displayName: 'HPU Console',
        //       displayNameField: 'HPU Console',
        //       isChildNodes: false,
        //       isEnabled: true,
        //       parentId: '0fa0698f-9e0f-42ac-94e5-aff64c65df1a',
        //     },
        //     {
        //       nodeId: 'a3306bbc-0371-4256-9f8f-77dc33123c9a',
        //       displayName: 'HSC A Console',
        //       displayNameField: 'HSC A Console',
        //       isChildNodes: false,
        //       isEnabled: true,
        //       parentId: '0fa0698f-9e0f-42ac-94e5-aff64c65df1a',
        //     },
        //     {
        //       nodeId: '6abaa83c-7b08-4717-ba97-d6cb6393b0be',
        //       displayName: 'CRUDE DISTILATION UNIT V',
        //       displayNameField: 'CRUDE DISTILATION UNIT V',
        //       isChildNodes: false,
        //       isEnabled: true,
        //       parentId: '834ccd41-0223-4515-86bc-183171f41012',
        //     },
        //     {
        //       nodeId: '9f69e048-74a7-483c-b574-742e5dc8a964',
        //       displayName: 'UTILTIY & AUXILARY SYSTEM',
        //       displayNameField: 'UTILTIY & AUXILARY SYSTEM',
        //       isChildNodes: false,
        //       isEnabled: true,
        //       parentId: '834ccd41-0223-4515-86bc-183171f41012',
        //     },
        //   ],
        // };

        const selectedarray = res.data.responseObject.map((object) => {
          return {
            ...object,
            selected: object.displayName == autothirarchy[0]?.text ? true : false,
          };
        });
        localStorage.setItem('displayname', autothirarchy[0]?.text);
        // setWorkPermitData({
        //   ...workPermitData,

        //   assetId: autothirarchy[0]?.text,
        // });
        let newArr1 = selectedarray?.map((val) => ({
          ...val,
          ids: val.nodeId,
          text: val.displayName,
          displayNameField: val.displayNameField,
          disabled: !val.isEnabled ? true : false,
          // expand: false,
          //items: val.items,
        }));

        // setWorkPermitData({
        //   ...workPermitData,

        //   assetId: autothirarchy[0]?.text,
        // });

        const treeList = searchlist(newArr1);

        if (!hierarchy.length) {
          setHierarchy(treeList);
          setAssethirarchy(treeList);
        } else {
        }
        setLoader(false);
      });
  };

  function searchlist(arr) {
    var tree = [],
      mappedArr = {},
      arrElem,
      mappedElem;

    for (var i = 0, len = arr.length; i < len; i++) {
      arrElem = arr[i];
      mappedArr[arrElem.nodeId] = arrElem;
      mappedArr[arrElem.nodeId]['items'] = [];
    }

    for (var nodeId in mappedArr) {
      if (mappedArr.hasOwnProperty(nodeId)) {
        mappedElem = mappedArr[nodeId];

        if (mappedElem.parentId) {
          mappedArr[mappedElem['parentId']]['items'].push(mappedElem);
        } else {
          tree.push(mappedElem);
        }
      }
    }
    return tree;
  }

  function parse_constructor(output, hierarchy, id) {
    for (var i in hierarchy) {
      if (hierarchy[i].nodeId === id) {
        hierarchy[i].items = output;
        break;
      } else {
        if (hierarchy[i].items !== undefined) {
          parse_constructor(output, hierarchy[i].items, id);
        }
      }
    }
    setHierarchy(hierarchy);
  }

  function parse_constructor1(output, assethirarchyauto, id) {
    for (var i in assethirarchyauto) {
      if (assethirarchyauto[i].nodeId === id) {
        assethirarchyauto[i].items = output;
        break;
      } else {
        if (assethirarchyauto[i].items !== undefined) {
          parse_constructor(output, assethirarchyauto[i].items, id);
        }
      }
    }
    setAssethirarchyAuto(assethirarchyauto);
  }
  const onItemClick = (event) => {
    const displayname = event.item.displayNameField;
    // setWorkPermitData({
    //   ...workPermitData,

    //   assetId: displayname,
    // });
    localStorage.setItem('displayname', displayname);
    setSelect([event.itemHierarchicalIndex]);
    //getAsetvalue(displayname);
  };

  const onExpandChange = (event) => {
    // event.item.expanded = !event.item.expanded;
    // setHierarchy([...hierarchy]);

    let ids = expand.ids.slice();

    const index = ids.indexOf(event.item.text);
    index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
    setExpand({
      ids,
      idField: 'text',
    });
    setIndexvalue(event.item.nodeId);
    if (serchid) {
      getHierarchy(event.item.nodeId);
    }
    // setSearchid(event.item.nodeId);
  };

  return (
    <>
      {/* <Label>Search&nbsp;</Label> */}
      <br />
      <AutoComplete
        className="searchbox"
        style={{ width: '80%' }}
        data={autothirarchy}
        textField="text"
        placeholder={t('type_minimum_3_letters_to_search')}
        onChange={(e) => handleSearch(e)}
      />
      &nbsp;&nbsp;
      <Button
        className="treeicon"
        imageUrl="../Assest/LocateOnTree.png"
        onClick={handleSearchicon}
      />
      &nbsp;
      {loader ? (
        <div className="h-100 spinner"></div>
      ) : (
        <TreeView
          className="tree-view mt-3"
          data={processTreeViewItems(hierarchy, {
            select: select,
            expand: expand,
          })}
          onExpandChange={onExpandChange}
          onItemClick={onItemClick}
          expandIcons={true}
        />
      )}
    </>
  );
};

export default Treeform;
