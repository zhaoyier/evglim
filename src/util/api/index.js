import ajax from './ajax';

export function login(phone, captcha) {
  return ajax({
    url: '/api/v1/login',
    method: 'post',
    data: {
      phone,
      captcha
    }
  });
}

export function getCaptcha(phone) {
  return ajax({
    url: '/api/v1/captcha',
    method: 'post',
    data: {
      phone
    }
  });
}

export function getSubTypes(typeId) {
  return ajax({
    url: '/api/v1/subtypes',
    method: 'post',
    data: {
      typeId
    }
  });
}

export function createPlan(data) {
  return ajax({
    url: '/api/v1/plan/create',
    method: 'post',
    data
  });
}

export function editPlan(data) {
  return ajax({
    url: '/api/v1/plan/edit',
    method: 'post',
    data
  });
}

export function getPlanDetail(id) {
  return ajax({
    url: '/api/v1/plan/view',
    method: 'post',
    data: {
      id
    }
  });
}

export function removePlan(id) {
  return ajax({
    url: '/api/v1/plan/delete',
    method: 'post',
    data: {
      id
    }
  });
}

export function getPlans(name, pageNum, pageSize) {
  return ajax({
    url: '/api/v1/plan/list',
    method: 'post',
    data: {
      name,
      pageNum,
      pageSize
    }
  });
}

export function getVarietyList(name, startDate, endDate) {
  return ajax({
    url: '/api/v1/variety/list',
    method: 'post',
    data: {
      name,
      startDate,
      endDate
    }
  });
}

export function getContract() {
  return ajax({
    url: '/api/get/contract',
    method: 'post',
    data: {
    }
  });
}

export function getSummary() {
  return ajax({
    url: '/api/v1/summary',
    method: 'post'
  });
}

export function getData(indicatorId, dateRange) {
  return ajax({
    url: '/api/v1/data',
    method: 'post',
    data: {
      indicatorId,
      dateRange
    }
  });
}

export function getReportData(id, dateBegin, dateEnd) {
  return ajax({
    url: '/api/v1/report/data',
    method: 'post',
    data: {
      id,
      dateBegin,
      dateEnd
    }
  });
}

export function getFocusList(params) {
  return ajax({
    url: '/api/focus/list',
    method: 'post',
    data: params
  });
}

export function createFocusEvent(params) {
  return ajax({
    url: '/api/focus/create',
    method: 'post',
    data: params
  });
}

export function updateFocusEvent(params) {
  return ajax({
    url: '/api/focus/update',
    method: 'post',
    data: params
  });
}

export function cancelFocusEvent(params) {
  return ajax({
    url: '/api/focus/cancel',
    method: 'post',
    data: params
  });
}
