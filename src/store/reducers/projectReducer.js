const initState={
    projects:[
        {id:1 , title:'react prject' ,content:'AAAAAAAAA BBBBBBBBB CCCCCCCCCCC      DDDDDDDDDDD EEEEEEEEEEEEEE'},
        {id:2 , title:'REDUX' ,content:'AAAAAAAAA BBBBBBBBB CCCCCCCCCCC      DDDDDDDDDDD EEEEEEEEEEEEEE'} ,
        {id:3 , title:'CONTENT prject' ,content:'AAAAAAAAA BBBBBBBBB CCCCCCCCCCC      DDDDDDDDDDD EEEEEEEEEEEEEE'}
    ]
};

const projectReducer = (state=initState , action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project',action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('error creating project',action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer;

//here we handle action in switch depending upon type 