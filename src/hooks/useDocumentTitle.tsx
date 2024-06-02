import { useEffect } from "react";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `Raven Garcia | ${title}`;
  }, [title]);
};

export default useDocumentTitle;
