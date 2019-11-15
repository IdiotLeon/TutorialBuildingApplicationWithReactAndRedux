export default function courseReducer (state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      // do NOT do this
      // state.push(action.course)
      return [...state, { ...action.course }]
    default:
      return state
  }
}
