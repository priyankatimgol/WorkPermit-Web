import View_Permit from 'Pages/WorkPermit/Components/NewWorkPermit/View_Permit';
import { lazy, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { getLanguage } from 'Services/API/masterApi';
const WorkPermit = lazy(() => import('../Pages/WorkPermit'));
const NewWorkPermit = lazy(() => import('../Pages/WorkPermit/Components/NewWorkPermit'));
const ViewForms = lazy(() => import('../Pages/WorkPermit/Components/ViewForms'));
const Print = lazy(() => import('../Pages/WorkPermit/Components/NewWorkPermit/Print'));
const CheckList = lazy(() => import('../Pages/CheckList'));
const NewCheckList = lazy(() => import('../Pages/CheckList/Components/NewChecklist'));
const ViewChecklist = lazy(() => import('../Pages/CheckList/Components/ViewChecklist'));
const Workflow = lazy(() => import('../Pages/WorkFlow'));
const NewWorkFlow = lazy(() => import('../Pages/WorkFlow/Components/NewWorkFlow'));
const Section = lazy(() => import('../Pages/Section'));
const NewSection = lazy(() => import('../Pages/Section/Components/NewSection'));
const SectionSequence = lazy(() => import('../Pages/SectionSequence'));
const Emailmanage = lazy(() => import('../Pages/EmailManagement/Emailmanage'));
const PlotLocation = lazy(() => import('../Pages/PlotLocation'));
const NewPlotlocation = lazy(() => import('../Pages/PlotLocation/Components/NewPlotlocation'));
const NewSectionSequence = lazy(() =>
  import('../Pages/SectionSequence/Components/NewSectionSequence'),
);
const Multilanguage = lazy(() => import('../Pages/Multilanguage/MultiLanguage'));
const Process = lazy(() => import('../Pages/Process'));
const Purging = lazy(() => import('../Pages/Purging'));

const TabManagment = lazy(() => import('../Pages/TabManagment'));
const NewProcess = lazy(() => import('../Pages/Process/Components/NewProcess'));
const NewTabManage = lazy(() => import('../Pages/TabManagment/Componant/NewTabManagment'));
const PrintChecklist = lazy(() =>
  import('../Pages/WorkPermit/Components/NewWorkPermit/PrintChecklist'),
);
const Routes = () => {
  const { t, i18n } = useTranslation();

  const getLanguageData = async () => {
    try {
      const res = await getLanguage();
      i18n.changeLanguage(res.data.responseObject);
    } catch (err) {
      console.log('error [getLanguageData]', err);
    }
  };

  useEffect(() => {
    getLanguageData();
  }, []);
  return (
    <ReactRoutes>
      {/* // <ReactRoutes basename={'/ptw_frontend'}> */}
      <Route exact path="/" element={<WorkPermit />} />
      <Route exact path="/manage-work-permit/:id" element={<NewWorkPermit />} />
      <Route exact path="/view-permit/:id" element={<View_Permit />} />
      <Route
        exact
        path="/manage-work-permit/:workPermitId/view-forms/:permitId"
        element={<ViewForms />}
      />
      <Route exact path="/manage-checklist" element={<CheckList />} />
      <Route exact path="/emailmanagement" element={<Emailmanage />} />
      <Route exact path="/manage-checklist/:id" element={<NewCheckList />} />
      <Route exact path="/view-checklist/:id" element={<ViewChecklist />} />
      <Route exact path="/manage-workflow" element={<Workflow />} />
      <Route exact path="/manage-workflow/:id" element={<NewWorkFlow />} />
      <Route exact path="/manage-section" element={<Section />} />
      <Route exact path="/manage-section/:id" element={<NewSection />} />
      <Route exact path="/manage-section-sequence" element={<SectionSequence />} />
      <Route exact path="/manage-section-sequence/:id" element={<NewSectionSequence />} />
      <Route path="/create_section/:id" element={<NewSection />} />
      <Route exact path="/multi-language" element={<Multilanguage />} />
      <Route exact path="/manage-plot-location" element={<PlotLocation />} />
      <Route exact path="/manage-plot-location/:id" element={<NewPlotlocation />} />
      <Route exact path="/manage-process" element={<Process />} />
      <Route exact path="/manage-process/:id" element={<NewProcess />} />
      <Route exact path="/manage-purging-data" element={<Purging />} />

      <Route exact path="/manage-tab" element={<TabManagment />} />
      <Route exact path="/manage-tab/:id" element={<NewTabManage />} />
      <Route exact path="/print/:id" element={<Print />}></Route>
      <Route exact path="/print-checklist" element={<PrintChecklist />}></Route>
    </ReactRoutes>
  );
};

export default Routes;
