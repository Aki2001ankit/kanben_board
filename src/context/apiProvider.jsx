import React, { useState, useEffect, useContext, createContext } from "react";
import { sortDataByUserPreference } from "../utils/dataUtils";
import {
  GroupedByPriority,
  GroupedByStatus,
  GroupedByUsers,
} from "../utils/groupingDataMap";
const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);
  const [userGroupingPreference, setuserGroupingPreference] = useState();
  const [userOrderingPreference, setuserOrderingPreference] = useState();
  const [groupedAndSortedApiData, setgroupedAndSortedApiData] = useState();
  const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

  const FetchData = (data) => {
    const groupPref_string = localStorage.getItem("Grouping");
    const groupPref = JSON.parse(groupPref_string);
    const orderPref_string = localStorage.getItem("Ordering");
    const orderPref = JSON.parse(orderPref_string);
    const grouping = groupPref ? groupPref?.grouping : "Status";
    const ordering = orderPref ? orderPref?.ordering : "Title";
    const groupedData = sortDataByUserPreference(data, grouping, ordering);

    let finalGroupedData;
    if (grouping == "Status") finalGroupedData = GroupedByStatus(groupedData);
    else if (grouping == "Users")
      finalGroupedData = GroupedByUsers(groupedData, data);
    else finalGroupedData = GroupedByPriority(groupedData);
    setgroupedAndSortedApiData(finalGroupedData);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        FetchData(data);
      })
      .catch((error) => console.error("API fetch error: ", error));
  }, [userGroupingPreference, userOrderingPreference]);

  return (
    <ApiContext.Provider
      value={{
        apiData,
        userGroupingPreference,
        setuserGroupingPreference,
        userOrderingPreference,
        setuserOrderingPreference,
        groupedAndSortedApiData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
