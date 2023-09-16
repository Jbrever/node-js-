const sessionIdToUserMap = new Map();   // "new Map()" is javascript obejct ,method that can be used to couple of key value

const setUserUuid = (id,user)=>{      // required in or called by /controller/pages.js
    sessionIdToUserMap.set(id,user);
}

const getUserUuid = async (id)=>{           // required in or called by /middleware/auth.js
   return sessionIdToUserMap.get(id);
}

module.exports = {
    setUserUuid ,
    getUserUuid
}

//then made middleware folder