
import { useState, useEffect, useMemo } from "preact/hooks";
import useApiResult from "./useApiResult";
import { getCategoryImages } from "../requests";

const useCategoryImages = () => {
  const request = useMemo(() => getCategoryImages("1"), []);
  return useApiResult(request);
};

export default useCategoryImages;