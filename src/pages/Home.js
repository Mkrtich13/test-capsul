import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import GlobalContext from '../context/GlobalContext';
import ProfilePic1 from '../assets/avatar1.png';
import ProfilePic2 from '../assets/avatar2.png';
import ProfilePic3 from '../assets/avatar3.png';
import ProfilePic4 from '../assets/avatar4.png';
import uuid from 'uuid/v4';


function Home() {
  const familyMembers = [
    {
      id: uuid(),
      firstName: 'Alice',
      lastName: 'Grimbert',
      status: 'Administrateur',
      image: ProfilePic1,
      validate: false,
      date: '15/05/2019',
      submission: true,
      pourc: '75'
    },
    {
      id: uuid(),
      firstName: 'Curtis',
      lastName: 'Grimbert',
      status: 'Administrateur',
      image: ProfilePic2,
      validate: true,
      date: '10/05/2019',
      submission: false,
      pourc: '50'
    },
    {
      id: uuid(),
      firstName: 'David',
      lastName: 'Grimbert',
      status: '',
      image: ProfilePic2,
      validate: false,
      date: '10/05/2019',
      submission: false,
      pourc: '50'
    },
    {
      id: uuid(),
      firstName: 'Emma',
      lastName: 'Grimbert',
      status: '',
      image: ProfilePic4,
      validate: true,
      date: '10/05/2019',
      submission: false,
      pourc: '50'
    },
    {
      id: uuid(),
      firstName: 'Mathilde',
      lastName: 'Grimbert',
      status: '',
      image: ProfilePic4,
      validate: true,
      date: '10/05/2019',
      submission: false,
      pourc: '50'
    },
    {
      id: uuid(),
      firstName: 'Julie',
      lastName: 'Grimbert',
      status: '',
      image: ProfilePic4,
      validate: true,
      date: '10/05/2019',
      submission: false,
      pourc: '50'
    },
    {
      id: uuid(),
      firstName: 'Julien',
      lastName: 'Grimbert',
      status: 'Administrateur',
      image: ProfilePic2,
      validate: true,
      date: '10/05/2019',
      submission: false,
      pourc: '75'
    }
  ];

  const [ familyMembersState, setFamilyMembers ] = useState(familyMembers);
  const [ pageState, setPage ] = useState("");
  const contextValue = {
    user: {
      id: uuid(),
      firstName: 'Julien',
      lastName: 'Grimbert',
      image: ProfilePic2,
      status: 'Administrateur'
    },
    page: pageState,
    setPage: setPage,
    familyMembers: familyMembersState,
    setFamilyMembers: setFamilyMembers
  }


  return (
    <GlobalContext.Provider value={contextValue}>
      <Navigation />
    </GlobalContext.Provider>
  );
}

export default Home;
