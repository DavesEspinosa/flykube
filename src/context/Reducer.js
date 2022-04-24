export const Reducer = (state, action) => {
    switch (action.type) {
      case "GET_USER":
        const { user, name } = action.payload
        const { dob, location, picture } = user
        if (!state.users.length){
          return {
            ...state,
            users: [{
              country: location.country,
              age: dob.age,
              name: name,
              picture: {...picture},
            }]
          }
        }
        return {
          ...state,
          users: [{
            country: location.country,
            age: dob.age,
            name: name,
            picture: {...picture},
          }, ...state.users]
        }
        
      default:
        return state;
    }
}
  