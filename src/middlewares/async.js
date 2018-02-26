export default function({dispatch}){
    return next => action => {
       
        // doesn't have a payload.
        if(!action.payload || !action.payload.then){
            return next(action);
        }

        
        console.log('action',action)
       // next(action);
       action.payload
       .then(function(response) {
      //  console.log('action',response)

       const newAction =  {...action, payload: response}
       dispatch(newAction);
       });
    
}
}