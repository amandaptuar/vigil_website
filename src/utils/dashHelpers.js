// Shared helper — always reads parentId/childId from localStorage as fallback
export function getIds(propChildId, propParentId) {
  return {
    childId:  propChildId  || localStorage.getItem('vigil_childId')  || '',
    parentId: propParentId || localStorage.getItem('vigil_parentId') || '',
  };
}
