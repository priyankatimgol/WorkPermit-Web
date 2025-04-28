import CommonButton from 'Components/Buttons/CommonButton';
import ZoomWrapper from 'Components/ZoomWrapper/ZoomWrapper/ZoomWrapper';
import { getWorkPermitLocations } from 'Pages/WorkPermit/api';
import { getWorkpermitArea } from 'Services/API/masterApi';
import moment from 'moment/moment';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import ImageMarker from 'react-image-marker';
import { useNavigate } from 'react-router-dom';
import ReactToolTipLite from 'react-tooltip-lite';
import WorkPermit_Location from './WorkPermit_Location.JPG';
import markerPinImg from './map-pin-solid.svg';
import './style.css';
const IMG_SRC = WorkPermit_Location;
const CANVAS_WIDTH = 1300;
const MARKER_WIDTH = 10;
const MARKER_HEIGHT = 10;
const MARKER_PIN = new Image();
MARKER_PIN.src = markerPinImg;

const WorkflowTracker = (props) => {
  const {
    imgSrc = IMG_SRC,
    setMarker,
    workPermitId,
    workPermitData,
    disabled,
    setTabValidation,
    statusId,
    setTabDisabled,
    setSelected,
  } = props;
  const [selectedMarkers, setSelectedMarkers] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [show, setShow] = useState(false);
  const [permittype, setPermitType] = useState('');
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [markers, setMarkers] = useState([]);
  const [toolTipData, settoolTipData] = useState([]);

  const [image, setImage] = useState([]);
  const imageElement = useRef(null);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const navigate = useNavigate();

  const setImageInCanvas = (src) => {
    if (!src) throw new Error('Image source not specified');
    const ele = document.createElement('img');
    ele.src = src;
    ele.crossOrigin = 'anonymous';
    ele.onload = () => {
      imageElement.current = ele;
      const canvas = document.getElementById('workflow-tracker-canvas');
      if (!canvas) {
        console.error('Canvas element not found');
        return;
      }
      canvasRef.current = canvas;
      const image = imageElement.current;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('Canvas context not supported');
        return;
      }
      ctxRef.current = ctx;
      ctx.textAlign = 'center';
      const imageRatio = image.height / image.width;
      canvas.width = CANVAS_WIDTH;
      canvas.height = imageRatio * canvas.width;

      ctx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        canvas.width,
        canvas.width * imageRatio,
      );
    };
  };

  useEffect(() => {
    setImageInCanvas(imgSrc);
  }, [imgSrc]);

  const drawMarkers = useCallback(() => {
    const _markers = selectedMarkers.filter((_) => _);
    for (let i = 0; i < _markers.length; i++) {
      const tempMarker = _markers[i];
      const canvas = document.getElementById('workflow-tracker-canvas');
      const context = canvas.getContext('2d');

      ctxRef.current.drawImage(
        MARKER_PIN,
        tempMarker.XPos,
        tempMarker.YPos,
        MARKER_WIDTH,
        MARKER_HEIGHT,
      );
      const markerText = tempMarker.title;

      const textMeasurements = ctxRef.current.measureText(markerText);
      ctxRef.current.fillStyle = '#424242';
      ctxRef.current.globalAlpha = 0.9;
      ctxRef.current.fillRect(
        tempMarker.XPos - textMeasurements.width / 2,
        tempMarker.YPos - 20,
        textMeasurements.width + 10,
        20,
      );
      ctxRef.current.globalAlpha = 1;

      ctxRef.current.fillStyle = '#fff';
      ctxRef.current.font = '14px sans-serif';

      ctxRef.current.fillText(
        markerText,
        tempMarker.XPos - textMeasurements.width / 2 + 5,
        tempMarker.YPos - 5,
      );
    }
  }, [selectedMarkers]);
  useEffect(() => {
    setTabValidation(null);
  }, []);

  useEffect(() => {
    if (!ctxRef.current || !canvasRef.current) return;
    drawMarkers();
  }, [drawMarkers]);

  useEffect(() => {
    getWorkPermitLocations(workPermitData.area, { workPermitId })
      // getWorkPermitLocations({ workPermitId })
      .then((res) => {
        let newArr = res.map((val) => ({
          ...val,
          top: val.XPos / 10,
          left: val.YPos / 10,
        }));
        setSelectedMarkers(res);
        setMarkers(newArr);
      })
      .catch((err) => console.error(err));
  }, [workPermitId]);

  useEffect(() => {
    setLoadingData(true);
    setTabValidation(null);
    getWorkpermitArea(workPermitData.area, workPermitId)
      .then((res) => {
        setImage(res.data.responseObject);
        setLoadingData(false);
        setTabDisabled(false);
      })
      .catch((err) => console.error(err));
  }, [workPermitData.area, workPermitId]);

  const updateMarker = (obj) => {
    let findInx = markers.findIndex((val) => val.workPermitId === workPermitId);
    if (findInx < 0) {
      setMarkers((prev) => [
        ...prev,
        { top: obj.top, left: obj.left, title: 'Current', workPermitId: workPermitId },
      ]);
    } else {
      let newArr = markers.slice(0, findInx);

      setMarkers((prev) => [
        ...newArr,
        { top: obj.top, left: obj.left, title: 'Current', workPermitId: workPermitId },
      ]);
    }
    setMarker({ XPos: obj.top * 10, YPos: obj.left * 10 });
  };

  const handleMarkerMouseEnter = (marker) => {
    settoolTipData([marker]);
  };

  const handleMarkerMouseLeave = (marker) => {
    settoolTipData([]);
  };

  const CustomMarker = (element) => {
    const handleClick = () => {
      if (element.requestid != undefined) {
        const newWindow = window.open(
          `#/manage-work-permit/${element.requestid}`,
          '_blank',
          'noopener noreferrer',
        );
        if (newWindow) {
          newWindow.opener = null; // Optional: Set the opener of the new window to null to prevent access to the parent window
        }
        setSelected(0);
      }
    };
    const handleMouseEnter = () => {
      handleon(element);
    };

    const handleMouseLeave = () => {
      handleoff();
    };
    console.log('element', element, element.workPermitId, workPermitData);
    return (
      <>
        <div
          draggable="true"
          onDrop={(event) => {}}
          data-tip
          data-for={`component_${element.id}`}
          className={`${
            disabled || statusId > 2 || element.statusDesc === 'Closed'
              ? ''
              : element.workPermitId === undefined
              ? element.requestid === props.workPermitId
                ? 'gray-custom-marker'
                : 'custom-marker'
              : 'custom-marker'
          }`}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {' '}
          {element.workPermitId === undefined &&
            element.permitType &&
            (element.statusDesc === 'Closed' ? (
              ''
            ) : (
              <ButtonsGroup permittype={element.permitType} />
            ))}
        </div>

        {/* {!element.workPermitId && (
          <ReactTooltip
            id={`component_${element.id}`}
            place="bottom"
            type="dark"
            effect="solid"
            delayHide={250}
            offset={{ left: -10 }}
          >
            <div className="">
              <p className="m-0 font-weight-light">
                Title : <span>{element.title}</span>{' '}
              </p>
              <p className="m-0 font-weight-light">
                ValidFrom : <span>{moment(element.validFrom).format('DD-MM-YYYY hh:MM:SS')}</span>{' '}
              </p>
              <p className="m-0 font-weight-light">
                ValidTo : <span>{moment(element.validTo).format('DD-MM-YYYY hh:MM:SS')}</span>{' '}
              </p>
              <p className="m-0 font-weight-light">
                Status : <span>{element.statusDesc}</span>{' '}
              </p>
              <p className="m-0 font-weight-light">
                Asset : <span>{element.assetDesc}</span>{' '}
              </p>
              <p className="m-0 font-weight-light">
                Permit Type : <span>{element.permitType}</span>{' '}
              </p>
            </div>
          </ReactTooltip>
        )} */}
        {!element.workPermitId && ( // Use show state to conditionally render the tooltip
          <ReactToolTipLite
            content={
              <div className="">
                <p className="m-0 font-weight-light">
                  Title : <span>{element.title}</span>{' '}
                </p>
                <p className="m-0 font-weight-light">
                  Valid From :{' '}
                  <span>{moment(element.validFrom).format('DD-MM-YYYY hh:MM:SS')}</span>{' '}
                </p>
                <p className="m-0 font-weight-light">
                  Valid To : <span>{moment(element.validTo).format('DD-MM-YYYY hh:MM:SS')}</span>{' '}
                </p>
                <p className="m-0 font-weight-light">
                  Status : <span>{element.statusDesc}</span>{' '}
                </p>
                <p className="m-0 font-weight-light">
                  Asset : <span>{element.assetDesc}</span>{' '}
                </p>
                <p className="m-0 font-weight-light">
                  Permit Type : <span>{element.permitType}</span>{' '}
                </p>
              </div>
            }
            eventOn="hover"
            direction="bottom"
            background="#000"
            color="#fff"
            padding="8px"
            border="#000"
            fontSize="14px"
            offset={{ left: -10 }}
          >
            <span style={{ display: 'none' }}>Hover</span>
          </ReactToolTipLite>
        )}
      </>
    );
  };

  const onResize = () => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const onSelect = (selectedId) => console.log('selectedId', selectedId);
  const onChange = (data) => console.log('datavalue', data);
  const handleon = (event) => {
    setShow(true);
    settoolTipData([event]);
  };

  const handleoff = () => {
    setShow(false);
  };

  const ButtonsGroup = ({ permittype }) => {
    console.log('permittype', permittype);
    const buttons = [
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/cold.png',
        show: permittype == 'Cold Work',
      },
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/hot.png',
        show: permittype == 'Hot Work',
      },
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/radiography.png',
        show: permittype == 'Radiography',
      },
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/photo.png',
        show: permittype == 'Photo/Camera Uses',
      },
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/instrument.png',
        show: permittype == 'Instrument',
      },
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/confinedspace.png',
        show: permittype == 'Confined Space',
      },
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/excavation.png',
        show: permittype == 'Excavation',
      },
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/FE.png',
        show: permittype == 'Fire Equipment',
      },
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/vehicle entry.png',
        show: permittype == 'Vehicle Entry',
      },
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/liftingoperation.png',
        show: permittype == 'Lifting Operation',
      },
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/diving.png',
        show: permittype == 'Diving & Underwater',
      },
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/roadclosure.png',
        show: permittype == 'Road Closure',
      },
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/MSPV.png',
        show: permittype == 'MSPV',
      },
      {
        className: 'printicon py-0 px-0',
        imageUrl: '../Assest/markericon/electrical.png',
        show: permittype == 'Electrical',
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
              text={'cancel'}
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

  return (
    <>
      {!loadingData && (
        <div className="position-relative">
          {show && !(toolTipData[0]?.title === 'Current') ? (
            <div className="position-absolute">
              <div className="row">
                <div className="col-4">
                  <p className="m-0 font-weight-light">
                    Title: <span>{toolTipData[0]?.title}</span>
                  </p>
                  <p className="m-0 font-weight-light">
                    Permit Type: <span>{toolTipData[0]?.permitType}</span>
                  </p>
                </div>
                <div className="col-4">
                  <p className="m-0 font-weight-light">
                    Valid From:{' '}
                    <span>{moment(toolTipData[0]?.validFrom).format('DD-MM-YYYY hh:mm:ss')}</span>
                  </p>
                  <p className="m-0 font-weight-light">
                    Valid To:{' '}
                    <span>{moment(toolTipData[0]?.validTo).format('DD-MM-YYYY hh:mm:ss')}</span>
                  </p>
                </div>
                <div className="col-4">
                  <p className="m-0 font-weight-light">
                    Status: <span>{toolTipData[0]?.statusDesc}</span>
                  </p>
                  <p className="m-0 font-weight-light">
                    Asset: <span>{toolTipData[0]?.assetDesc}</span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
          {image?.file_content_type ? (
            <ZoomWrapper>
              <ImageMarker
                src={`data:${image?.file_content_type};base64,${image?.image}`}
                markers={markers}
                onAddMarker={(marker) => updateMarker(marker)}
                markerComponent={CustomMarker}
                onClick={() => console.log('clieck')}
                onMouseMove={() => console.log('moyse')}
                onSelect={onSelect}
                onChange={onChange}
                width={pageSize.width}
                height={pageSize.height}
                style={{
                  cursor: 'pointer',
                }}
              />
            </ZoomWrapper>
          ) : (
            <h6>Image Not Found</h6>
          )}
        </div>
      )}

      {/* {loadingData && <Spinner />} */}
    </>
  );
};

export default memo(WorkflowTracker);
