import { createContext, useContext } from "react";

export const HeadingLevelContext = createContext(0);

export const useHeadingLevelContext = () => useContext(HeadingLevelContext);
