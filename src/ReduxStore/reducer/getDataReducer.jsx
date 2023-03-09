const initialState = {

  items: [],
  isloadding: false,
  error: {},
  count:0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'START':
      return { ...state, isloadding: true }
    
    case 'FirstLoad':
      return { ...state, items: payload, isloadding: false, count : payload.length }

    case 'SUC':
      return { ...state, items: payload, isloadding: false }

    case 'FAIL':

      return { ...state, error: payload, isloadding: false }

    default:
      return state
  }
}