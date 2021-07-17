import React, {useEffect, useState} from 'react';
import items from './data';

export const CoursesContext = React.createContext ();

export const CoursesContextProvider = ({children}) => {
  const [sortedCourses, setSortedCourses] = useState ('');
  const [search, setSearch] = useState ('');
  const [collection, setCollection] = useState ([]);
  const [archive, setArchive] = useState ([]);
  const [wishlist, setWishlist] = useState ([]);

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

  const addcoursetoCollection = id => {
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
    const addtoarchived = items.find (el => {
      return el.id === id;
    });
    addtoarchived.archive = !addtoarchived.archive;
    const addtoarchive = items.filter (el => {
      return el.archive === true;
    });
    setArchive ([...addtoarchive]);
    console.log (archive);
  };

  const addcoursetoWishlist = id => {
    const addtoarchived = items.find (el => {
      return el.id === id;
    });
    addtoarchived.wishlist = !addtoarchived.wishlist;
    const addtowishlist = items.filter (el => {
      return el.wishlist === true;
    });
    setWishlist ([...addtowishlist]);
    console.log (wishlist);
  };

  const removecoursetoCollection = id => {
    const addtocollection = collection.filter (el => {
      return el.id !== id;
    });
    setCollection ([...addtocollection]);
    console.log (collection);
  };

  const removcoursewishlist = id => {
    const addtowishlist = wishlist.filter (el => {
      return el.id !== id;
    });
    setWishlist ([...addtowishlist]);
  };

  const removcoursearchivelist = id => {
    const addtoarchivelist = archive.filter (el => {
      return el.id !== id;
    });
    setArchive ([...addtoarchivelist]);
  };

  return (
    <CoursesContext.Provider
      value={{
        addcoursetoCollection,
        wishlist,
        archive,
        handleSearch,
        removcoursearchivelist,
        removecoursetoCollection,
        removcoursewishlist,
        collection,
        addcoursetoArchive,
        sortedCourses,
        addcoursetoWishlist,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};
