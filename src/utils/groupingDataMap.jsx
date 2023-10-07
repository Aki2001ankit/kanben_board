import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
import { RiTodoLine } from "react-icons/ri";
import { TbProgressCheck } from "react-icons/tb";
import { MdPending } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import {
  PiCellSignalLowBold,
  PiCellSignalMediumBold,
  PiCellSignalHighBold,
  PiDotBold
} from "react-icons/pi";
import { getUserById } from "./dataUtils";

export const GroupedByStatus = (apiData) => {
  const backlogData = apiData?.["Backlog"];
  const todoData = apiData?.["Todo"];
  const inProgessData = apiData?.["In progress"];
  const doneData = apiData?.["Done"];
  const cancelledData = apiData?.["Cancelled"];

  const backlogParams = {
    name: "Backlog",
    data: backlogData,
    withImage: true,
    icon: MdPending,
  };
  const todoParams = {
    name: "Todo",
    data: todoData,
    withImage: true,
    icon: RiTodoLine,
  };
  const inProgressParams = {
    name: "InProgress",
    data: inProgessData,
    withImage: true,
    icon: TbProgressCheck,
  };
  const doneParams = {
    name: "Done",
    data: doneData,
    withImage: true,
    icon: IoCheckmarkDoneCircle,
  };
  const cancelledParams = {
    name: "Cancelled",
    data: cancelledData,
    withImage: true,
    icon: GiCancel,
  };

  const groupedData = {
    first: backlogParams,
    second: todoParams,
    third: inProgressParams,
    fourth: doneParams,
    fifth: cancelledParams,
  };
  return groupedData;
};

export const GroupedByPriority = (apiData) => {
  const p0Data = apiData?.["0"];
  const p1Data = apiData?.["1"];
  const p2Data = apiData?.["2"];
  const p3Data = apiData?.["3"];
  const p4Data = apiData?.["4"];
  const p0Params = {
    name: "No Priority",
    data: p0Data,
    withImage: true,
    icon: PiDotBold,
  };
  const p1Params = {
    name: "Low Priority",
    data: p1Data,
    withImage: true,
    icon: PiCellSignalLowBold,
  };
  const p2Params = {
    name: "Medium",
    data: p2Data,
    withImage: true,
    icon: PiCellSignalMediumBold,
  };
  const p3Params = {
    name: "High",
    data: p3Data,
    withImage: true,
    icon: PiCellSignalHighBold,
  };
  const p4Params = {
    name: "Urgent",
    data: p4Data,
    withImage: true,
    icon: FcHighPriority,
  };
  const groupedData = {
    first: p4Params,
    second: p3Params,
    third: p2Params,
    fourth: p1Params,
    fifth: p0Params,
  };
  return groupedData;
};

export const GroupedByUsers = (apiData, originalData) => {
  const user1Data = apiData?.["usr-1"];
  const user2Data = apiData?.["usr-2"];
  const user3Data = apiData?.["usr-3"];
  const user4Data = apiData?.["usr-4"];
  const user5Data = apiData?.["usr-5"];
  const user1Name = getUserById("usr-1", originalData);
  const user2Name = getUserById("usr-2", originalData);
  const user3Name = getUserById("usr-3", originalData);
  const user4Name = getUserById("usr-4", originalData);
  const user5Name = getUserById("usr-5", originalData);
  const user1Params = {
    name: user1Name,
    isUser: true,
    data: user1Data,
  };
  const user2Params = {
    name: user2Name,
    isUser: true,
    data: user2Data,
  };
  const user3Params = {
    name: user3Name,
    isUser: true,
    data: user3Data,
  };
  const user4Params = {
    name: user4Name,
    isUser: true,
    data: user4Data,
  };
  const user5Params = {
    name: user5Name,
    isUser: true,
    data: user5Data,
  };
  const groupedData = {
    first: user1Params,
    second: user2Params,
    third: user3Params,
    fourth: user4Params,
    fifth: user5Params,
  };
  return groupedData;
};
