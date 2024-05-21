import { useEffect } from "react";

function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = `Raven Garcia | ${title}`;
  }, [title]);
}

export default useDocumentTitle;
