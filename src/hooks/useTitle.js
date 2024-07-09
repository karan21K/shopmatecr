// import { useEffect } from "react";


// export const useTittle = (title) => {

//   useEffect(() => {
//     document.title = `${title} | Shopping Cart`
//   },[title]);

//   return null;
// }
import { useEffect } from "react";

export const useTitle = (title) => {

  useEffect(() => {
    document.title = `${title} | Shopping Cart`
  }, [title]);

  return null;
}