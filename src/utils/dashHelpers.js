// Shared helper — always reads parentId/childId/deviceKey from localStorage as fallback
export function getIds(propChildId, propParentId) {
  return {
    childId:  propChildId  || localStorage.getItem('vigil_childId')  || '',
    parentId: propParentId || localStorage.getItem('vigil_parentId') || '',
  };
}

export function getDeviceKey() {
  return localStorage.getItem('vigil_deviceKey') || '';
}

export function isPaired() {
  return !!localStorage.getItem('vigil_deviceKey');
}
