import React, {useEffect, useState} from 'react';
import items from './data';

export const CoursesContext = React.createContext ();

export const CoursesContextProvider = ({children}) => {
  const [sortedCourses, setSortedCourses] = useState ('');
  const [search, setSearch] = useState ('');
  const [collection, setCollection] = useState ([]);
  const [archive, setArchive] = useState ([]);
  const [all, setAll] = useState ([]);

  let promise = new Promise (function (resolve, reject) {
    setTimeout (() => resolve (items), 10);
  });

  const handleSearch = e => {
    e.preventDefault ();
    setSearch (e.target.value);
  };

  useEffect (async () => {
    setSortedCourses (items);
  }, []);

  useEffect (
    () => {
      let tempsortedCourses = [...items];
      tempsortedCourses = tempsortedCourses.filter (course =>
        course.title.toLowerCase ().includes (search.toLowerCase ())
      );
      setSortedCourses (tempsortedCourses);
    },
    [search]
  );

  const addcoursetoCollection = (id) => {
    const check = collection.every (item => {
      return item.id !== id;
    });
    const addtocollection = items.filter (el => {
      return el.id === id;
    });
    if (check) {
        setCollection ([...collection, ...addtocollection]);
    } else {
      return;
    }
  };

  const addcoursetoArchive = id => {
    const check = archive.every (item => {
      return item.id !== id;
    });
    const addtoarchive = items.filter (el => {
      return el.id === id;
    });
    if (check) {
        setArchive ([...archive, ...addtoarchive]);
    } else {
      return;
    }
  };

  const addcoursetoWishlist = id => {
    const addtoarchived = items.find (el => {
        return el.id === id;
      });
    addtoarchived.wishlist = !addtoarchived.wishlist
  };

  const clickallcourses = () => {
    setSortedCourses (items);
  };

  const clickwishlist = () => {
    setSortedCourses ([...sortedCourses.filter(el => {
        return el.wishlist === true;
      })]);
  };

  const clickcollection = () => {
    setSortedCourses ([...collection]);
  };

  const clickArchive = () => {
    setSortedCourses ([...archive]);
  };



  return (
    <CoursesContext.Provider value={{addcoursetoCollection, clickcollection, clickwishlist,clickallcourses, clickArchive, addcoursetoArchive , sortedCourses, addcoursetoWishlist,all}}>
      {children}
    </CoursesContext.Provider>
  );
};
