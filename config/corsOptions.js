//Cross Origin Resource Sharing
const whitelist = [
    'https://www.google.com',
    'http://127.0.0.1:5500',
    'http://localhost:3500'
];
//So we have created a list of domains that is allowed to access the backend ...for these domains(origins) cors will not prevent from accessing the backend server........Now we need to create a function that will allow cors to do this
const corsOptions = {
    origin: (origin,callback)=>{
        if(whitelist.indexOf(origin)!==-1 || !origin)
        {
            callback(null,true);
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    optionsSuccessStatus: 200
    }
}

module.exports = corsOptions;