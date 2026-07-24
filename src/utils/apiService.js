// Dev: Vite proxy handles /api → backend (no CORS)
// Prod: HTTPS direct call (avoids Mixed Content error on HTTPS-hosted FTP sites)
const BASE_URL = import.meta.env.PROD ? 'https://160-153-179-249.sslip.io' : '';

function getToken() {
  return localStorage.getItem('vigil_token') || '';
}
function getParentId() {
  return localStorage.getItem('vigil_parentId') || '';
}
function getChildId() {
  return localStorage.getItem('vigil_childId') || '';
}

async function request(method, path, body = null, extraHeaders = {}) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`,
    ...extraHeaders
  };
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${BASE_URL}${path}`, opts);
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/pdf')) return { ok: res.ok, status: res.status, blob: await res.blob() };
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

// ============================================================
// AUTH
// ============================================================
export const authApi = {
  getMe: () => request('GET', '/api/auth/me'),
  logout: () => request('POST', '/api/auth/logout'),
  changePasswordFirstTime: (newPassword) => request('POST', '/api/auth/change-password-first-time', { newPassword }),
  refreshToken: (refreshToken) => request('POST', '/api/auth/refresh-token', { refreshToken }),
  requestPasswordReset: (email) => request('POST', '/api/auth/request-password-reset', { email }),
  verifyOtp: (email, otp) => request('POST', '/api/auth/verify-otp', { email, otp }),
  resetPassword: (email, otp, newPassword) => request('POST', '/api/auth/reset-password', { email, otp, newPassword }),
};

// ============================================================
// CHILDREN
// ============================================================
export const childrenApi = {
  getAll: () => request('GET', '/api/children'),
  getById: (childId) => request('GET', `/api/children/${childId}`),
  getByParentId: (parentId) => request('GET', `/api/children/childrens/${parentId}`),
  create: (name, age, gender) => request('POST', '/api/children', { name, age, gender }),
  updateName: (childId, name) => request('PUT', `/api/children/${childId}/update-name`, { name }),
  delete: (childId) => request('DELETE', `/api/children/${childId}`),
  activityOverview: (childId) => request('GET', `/api/children/${childId}/activity-overview`),
  getDeviceData: (parentId) => request('GET', `/api/deviceData/${parentId}`),
  // Pairing
  loginAndSendOtp: (email, password) => request('POST', '/api/children/login-and-send-otp', { email, password }),
  verifyOtpAndPair: (email, otp, name, age) => request('POST', '/api/children/verify-otp-and-pair-device', { email, otp, name, age }),
  getByEmail: (email) => request('POST', '/api/children/children-by-email', { email }),
};

// ============================================================
// PERMISSIONS & DEVICE
// ============================================================
export const permissionsApi = {
  getLiveStatus: (childId) => request('GET', `/api/children/${childId}/live-status`),
  getPermissions: (childId) => request('GET', `/api/children/${childId}/permissions`),
  updatePermissions: (childId, perms) => request('PUT', `/api/children/${childId}/permissions`, perms),
  getDeviceInfo: (childId) => request('GET', `/api/children/${childId}/device-info`),
  updateDeviceInfo: (childId, info) => request('PUT', `/api/children/${childId}/device-info`, info),
};

// ============================================================
// CALL LOGS
// ============================================================
export const callsApi = {
  getAll: (childId, parentId, page = 1, limit = 20) =>
    request('GET', `/api/logs/calllogs?child_id=${childId}&parent_id=${parentId}&page=${page}&limit=${limit}`),
  getByType: (childId, parentId, callType, page = 1, limit = 20) =>
    request('GET', `/api/logs/calllogs?child_id=${childId}&parent_id=${parentId}&callType=${callType}&page=${page}&limit=${limit}`),
};

// ============================================================
// SMS
// ============================================================
export const smsApi = {
  getAll: (childId, parentId, page = 1, limit = 20) =>
    request('GET', `/api/sms/get_sms?child_id=${childId}&parent_id=${parentId}&page=${page}&limit=${limit}`),
  getByAddress: (childId, parentId, address, page = 1, limit = 20) =>
    request('GET', `/api/sms/get_sms?child_id=${childId}&parent_id=${parentId}&address=${encodeURIComponent(address)}&page=${page}&limit=${limit}`),
  searchByKeyword: (childId, parentId, keyword, page = 1, limit = 20) =>
    request('GET', `/api/sms/get_sms?child_id=${childId}&parent_id=${parentId}&keyword=${encodeURIComponent(keyword)}&page=${page}&limit=${limit}`),
  getInbox: (childId, parentId, page = 1, limit = 20) =>
    request('GET', `/api/sms/get_sms?child_id=${childId}&parent_id=${parentId}&type=inbox&page=${page}&limit=${limit}`),
};

// ============================================================
// FILES / GALLERY
// ============================================================
export const filesApi = {
  getAll: (childId, parentId, page = 1, limit = 20) =>
    request('GET', `/api/files/get_files?child_id=${childId}&parent_id=${parentId}&page=${page}&limit=${limit}`),
  getImages: (childId, parentId, page = 1, limit = 20) =>
    request('GET', `/api/files/get_files?child_id=${childId}&parent_id=${parentId}&file_type=image&page=${page}&limit=${limit}`),
  getVideos: (childId, parentId, page = 1, limit = 20) =>
    request('GET', `/api/files/get_files?child_id=${childId}&parent_id=${parentId}&file_type=video&page=${page}&limit=${limit}`),
};

// ============================================================
// LOCATION
// ============================================================
export const locationApi = {
  getLive: (childId) => request('GET', `/api/children/${childId}/location`),
  getHistory: (childId, page = 1, limit = 20) =>
    request('GET', `/api/children/${childId}/location-history?page=${page}&limit=${limit}`),
  addHistory: (childId, coordinates, address) =>
    request('POST', `/api/children/${childId}/location-history`, { coordinates, address }),
  updateLocation: (childId, latitude, longitude) =>
    request('PUT', `/api/children/${childId}/location`, { latitude, longitude }),
  getHistoryByHours: (childId, hours = 24) =>
    request('GET', `/api/locations/history/${childId}?hours=${hours}`),
  getAllRecords: (childId, parentId, page = 1, limit = 50) =>
    request('GET', `/api/locations/get_locations?child_id=${childId}&parent_id=${parentId}&page=${page}&limit=${limit}`),
};

// ============================================================
// GEOFENCING
// ============================================================
export const geofenceApi = {
  create: (label, centerLat, centerLng, radiusMeters, child_id, parent_id) =>
    request('POST', '/api/geozones/create', { label, centerLat, centerLng, radiusMeters, child_id, parent_id }),
  getForParent: (parentId) => request('GET', `/api/geozones/${parentId}`),
  getForChild: (parentId, childId) => request('GET', `/api/geozones/${parentId}/${childId}`),
  toggle: (geoZoneId) => request('PATCH', `/api/geozones/${geoZoneId}/toggle`),
  delete: (geoZoneId) => request('DELETE', `/api/geozones/${geoZoneId}`),
};

// ============================================================
// SCREEN TIME / APPS
// ============================================================
export const appsApi = {
  getAll: (childId, parentId, page = 1, limit = 50) =>
    request('GET', `/api/apps/get_apps?child_id=${childId}&parent_id=${parentId}&page=${page}&limit=${limit}`),
};

// ============================================================
// CONTACTS
// ============================================================
export const contactsApi = {
  getAll: (childId, parentId, page = 1, limit = 50) =>
    request('GET', `/api/contacts/get_contacts?child_id=${childId}&parent_id=${parentId}&page=${page}&limit=${limit}`),
};

// ============================================================
// EVENTS / CALENDAR
// ============================================================
export const eventsApi = {
  getAll: (childId, parentId, page = 1, limit = 20) =>
    request('GET', `/api/events/get_events?child_id=${childId}&parent_id=${parentId}&page=${page}&limit=${limit}`),
};

// ============================================================
// AI ANALYSIS
// ============================================================
export const aiApi = {
  runAnalysis: (childId, date) => request('POST', `/api/ai/children/${childId}/analyze`, { date }),
  getDaily: (childId, date) => request('GET', `/api/ai/children/${childId}/daily/${date}`),
  listDailyHistory: (childId) => request('GET', `/api/ai/children/${childId}/daily`),
  downloadReport: (childId, date) => request('GET', `/api/ai/children/${childId}/daily/${date}/report`),
  getRelationships: (childId) => request('GET', `/api/ai/children/${childId}/relationships`),
  getLongitudinal: (childId, kind = 'longitudinal') =>
    request('GET', `/api/ai/children/${childId}/longitudinal?kind=${kind}`),
};
