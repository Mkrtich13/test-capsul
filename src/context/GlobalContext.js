import React from 'react';

export default React.createContext({
    user: {
        firstName: '',
        lastName: '',
        image: '',
        status: ''
    },
    page: '',
    setPage: () => {},
    familyMembers: [],
    setFamilyMembers: () => {}
})