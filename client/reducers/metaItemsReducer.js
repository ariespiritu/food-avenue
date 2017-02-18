export default function reducer(state={
    metaItems: {},
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_METAITEMS": {
        return {...state, fetching : true};
      }
      case "FETCH_METAITEMS_REJECTED": {
        return {
          ...state,
          fetching  : false,
          error     : action.payload
        }
      }
      case "FETCH_METAITEMS_FULFILLED": {
        return {
          ...state,
          fetching  : false,
          fetched   : true,
          metaItems : action.payload
        }
      }
    }

    return state
}
