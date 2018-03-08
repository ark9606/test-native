export function loadData(response) {
  return {
    type: 'LOAD_DATA',
    payload: response
  };
}

export function appendData(response) {
  return {
    type: 'APPEND_DATA',
    payload: response
  };
}

export function showView(photo) {
  return {
    type: 'VIEW',
    payload: photo
  };
}

export function hideView() {
  return {
    type: 'VIEW',
    payload: null
  };
}
