import '@progress/kendo-theme-default/dist/default-ocean-blue.scss';
import i18n from 'i18next';
import { lazy, useEffect, useState } from 'react';
import { Formio } from 'react-formio';
import { initReactI18next } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './Routes';
// Translations
import { ApiGetNoAuth } from 'Services/API/ApiData';
import { getUserRole } from 'Services/API/masterApi';
import en from 'locales/en/translation.json';
import id from 'locales/id/translation.json';
import { useLocation } from 'react-router-dom';

const BaseUrl = localStorage.getItem('BaseUrl');
Formio.setProjectUrl(BaseUrl + '/api');

const SideBar = lazy(() => import('./Components/Sidebar/Sidebar'));
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    id: {
      translation: id,
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const [userRole, setUserRole] = useState([]);
  const location = useLocation();

  const getUserRoleData = async () => {
    try {
      await getUserRole()
        .then((res) => {
          setUserRole(res.data?.responseObject);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {}
  };
  const getRole = async () => {
    let res = await ApiGetNoAuth(`/Master/roles`);
    localStorage.setItem('setRole', JSON.stringify(res.data?.responseObject));
  };
  useEffect(() => {
    getUserRoleData();
    getRole();
  }, []);

  useEffect(() => {
    //fetch(`${window.location.origin + '/'}ptw_frontend/url.json`)
    fetch(`${window.location.origin + '/'}url.json`)
      .then((res) => res.json())
      .then(
        (result) => {
          localStorage.setItem('BaseUrl', result.BaseURL);
        },
        (error) => {},
      );
  }, []);

  const userRoleValue = userRole?.includes('PTW-Admin');

  return (
    <>
      <ToastContainer hideProgressBar />

      {userRoleValue === true ? (
        location.pathname === '/print' || location.pathname === '/print-checklist' ? (
          <Routes />
        ) : (
          <SideBar>
            <Routes />
          </SideBar>
        )
      ) : (
        <Routes userRoleValue={userRoleValue} />
      )}
    </>
  );
}

export default App;
