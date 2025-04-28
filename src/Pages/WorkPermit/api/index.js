import { apiRequest } from 'Services/API/ApiData';
export const getWorkPermitData = async ({ page, limit, startDate, endDate, data }) => {
  let fromDate = startDate === null ? null : startDate;
  let toDate = endDate === null ? null : endDate;
  return apiRequest(`/WorkPermit/workpermits/${page}/${limit}/${fromDate}/${toDate}`, {
    method: 'post',
    data,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getWorkPermitData]:>> ', err);
      throw err;
    });
};

export const getWorkPermitCloseData = async ({ page, limit, startDate, endDate, data }) => {
  let fromDate = startDate === null ? null : startDate;
  let toDate = endDate === null ? null : endDate;

  return apiRequest(`/WorkPermit/closedworkpermits/${page}/${limit}/${fromDate}/${toDate}`, {
    method: 'post',
    data,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getWorkPermitData]:>> ', err);
      throw err;
    });
};
export const submitToValidation = async ({
  workPermitId,
  statusId,
  comment,
  file,
  signatureValue,
}) => {
  let data = {
    workPermitId,

    statusId: statusId.toString(),
    StatusCondition: comment,
    Signature: file,
  };

  return apiRequest(`/ProcessStep/RequestApproved`, {
    method: 'put',
    data,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [submitToValidation]:>> ', err);
      throw err;
    });
};
export const deleteWorkPermit = async (id) => {
  return apiRequest(`/WorkPermit/workpermit/delete/${id}`, { method: 'put' })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [deleteWorkPermit]:>> ', err);
      throw err;
    });
};
export const createWorkPermit = async (data, permitId) => {
  return await apiRequest(`/WorkPermit/workpermit/${permitId}`, { method: 'post', data })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [createWorkPermit]:>> ', err);
      throw err;
    });
};

export const getCheckListForPermitType = async (permitId) => {
  return apiRequest(`/Section/sectionpermit/${permitId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getWorkPermitData]:>> ', err);
      throw err;
    });
};
export const closesectionpermit = async (permitId, workPermitId) => {
  return apiRequest(`/Section/closesectionpermit/${permitId}/${workPermitId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getWorkPermitData]:>> ', err);
      throw err;
    });
};
export const getWorkPermitStatus = async ({ workPermitId }) => {
  return apiRequest(`/WorkPermit/instance/status/${workPermitId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getWorkPermitStatus]:>> ', err);
      throw err;
    });
};

export const updateWorkPermit = async ({ workPermitId, data }) => {
  return apiRequest(`/WorkPermit/workpermit/${workPermitId}`, { method: 'put', data })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getWorkPermitData]:>> ', err);
      throw err;
    });
};

export const updateChecklistFormData = async ({ data }) => {
  return apiRequest(`/WorkPermit/workpermit/form`, { method: 'put', data })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [updateChecklistFormData]:>> ', err);
      throw err;
    });
};

export const getWorkpermitSortingList = async (data) => {
  return apiRequest(`/workpermit/workpermit/filter`, { method: 'Post', data })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [updateChecklistFormData]:>> ', err);
      throw err;
    });
};

export const getCommentList = async (workPermitId) => {
  return await apiRequest(`/WorkPermit/instance/comment/${workPermitId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getCommentList]:>> ', err);
      throw err;
    });
};

export const getStatusdetails = async (workPermitId) => {
  return await apiRequest(`/workpermit/instance/statusdtls/${workPermitId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getCommentList]:>> ', err);
      throw err;
    });
};

export const getSectionList = async (permitId) => {
  return await apiRequest(`/Section/sectionpermit/${permitId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getCommentList]:>> ', err);
      throw err;
    });
};

export const updateSafejobForm = async (newdata) => {
  return await apiRequest(`/WorkPermit/workpermit/safejob `, { method: 'Put', newdata })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getCommentList]:>> ', err);
      throw err;
    });
};

export const updateRiskasstForm = async (newdata) => {
  return await apiRequest(`/WorkPermit/workpermit/risk`, { method: 'Put', newdata })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getCommentList]:>> ', err);
      throw err;
    });
};

export const updateIsolationForm = async (newdata) => {
  return await apiRequest(`/WorkPermit/workpermit/isolation `, { method: 'Put', newdata })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getCommentList]:>> ', err);
      throw err;
    });
};

export const getCalculationRisk = async (permitId) => {
  return await apiRequest(`/checklistuser/checklist/619ebbaa-88e7-4de3-9eb5-a67aebce007f`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getCommentList]:>> ', err);
      throw err;
    });
};

// export const getWorkPermitLocations = async ({ workPermitId }) => {
//   return apiRequest(`/workpermit/workpermit/locations`)
export const getWorkPermitLocations = async (area, { workPermitId }) => {
  return apiRequest(`/workpermit/workpermit/locations/${area}`)
    .then((res) => {
      return res.data.responseObject
        .filter((_) => _.location && _.id !== workPermitId)
        .filter((val) => val.location !== 'Pune')
        .map((_) => ({ ..._, ...JSON.parse(_.location), title: _.title }));
    })
    .catch((err) => {
      console.log('err [getWorkPermitLocations]:>> ', err);
      throw err;
    });
};

export const getusersection = async (requestId) => {
  return await apiRequest(`/WorkPermit/checkapproval/${requestId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [createWorkPermit]:>> ', err);
      throw err;
    });
};
export const dynamicButton = async (requestId) => {
  return await apiRequest(`/WorkPermit/currentstatus/${requestId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [createWorkPermit]:>> ', err);
      throw err;
    });
};

export const getSignatureValue = async (data) => {
  return await apiRequest(`/workpermit/getSignatureByUserCD`, { method: 'Post', data })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
};
export const getAllUSerSignature = async () => {
  return await apiRequest(`/workpermit/getallSign`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
};

export const getUpdatedSignatureData = async (data) => {
  return await apiRequest(`/workpermit/updateSignature`, { method: 'Put', data })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
};
export const getInceidentDepartmentValue = async () => {
  return apiRequest(`/Master/incidentdepartment`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getWorkPermitStatuses]:>> ', err);
      throw err;
    });
};
export const getDepartmentAdd = async (data) => {
  return apiRequest(`/Master/department`, { method: 'Post', data })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err [getWorkPermitStatuses]:>> ', err);
      throw err;
    });
};
