
const axios = require('axios').default



const getAllUsers=async()=>{
    let list=[];

    await axios.get('https://reqres.in/api/users?page=1').then(
        (res)=>{
            console.log(res.data.data)
            list=res.data.data;
        },
        (err)=>{
            console.log(err);
        }
    )
    return list;
}

export default getAllUsers