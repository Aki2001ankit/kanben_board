import React, { useState } from "react";
import { Box, Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import InputOption from "./inputOption";
import { useApi } from "../context/apiProvider";

function DisplayTap() {
  const { setuserGroupingPreference, setuserOrderingPreference } = useApi();
  const [groupParams, setGroupParams] = useState();
  const [orderParams, setOrderParams] = useState();

  const HandleGroupingChange = (e) => {
    const userChoice = { grouping: e.target.value };
    setuserGroupingPreference(e.target.value);
    localStorage.setItem("Grouping", JSON.stringify(userChoice));
    TogglePriorityTab(e.target.value);
  };

  const HandleOrderingChange = (e) => {
    const userChoice = { ordering: e.target.value };
    setuserOrderingPreference(e.target.value);
    localStorage.setItem("Ordering", JSON.stringify(userChoice));
  };

  const groupingParams = {
    id: "grouping",
    title: "Grouping",
    option: [
      { optionItem: "Status" },
      { optionItem: "Users" },
      { optionItem: "Priority" },
    ],
    handleChange: HandleGroupingChange,
  };

  const orderingParams = {
    id: "ordering",
    title: "Ordering",
    option: [{ optionItem: "Title" }, { optionItem: "Priority" }],
    handleChange: HandleOrderingChange,
  };

  const TogglePriorityTab = (group) => {
    let params = orderParams;
    if(!params) return;
    const priority = "Priority";
    if (group == priority) {
      params.option = params.option.filter(
        (option) => option.optionItem !== priority
      );
      setOrderParams(params);
    } else {
      const isItemPresent = params.option.some(
        (option) => option.optionItem === priority
      );

      if (!isItemPresent) {
        params.option.push({ optionItem: priority });
      }
      setOrderParams(params);
    }
  };

  const HandleOptionReordering = () => {
    const selectedGroup = JSON.parse(
      localStorage.getItem("Grouping")
    )?.grouping;
    if (selectedGroup) {
      const selectedIndex = groupingParams.option.findIndex(
        (option) => option.optionItem === selectedGroup
      );
      if (selectedIndex !== -1) {
        const removedItem = groupingParams.option.splice(selectedIndex, 1)[0];
        groupingParams.option.unshift(removedItem);
      }
    }
    setGroupParams(groupingParams);

    const selectedOrder = JSON.parse(
      localStorage.getItem("Ordering")
    )?.ordering;
    if (selectedOrder) {
      const selectedIndex = orderingParams.option.findIndex(
        (option) => option.optionItem === selectedOrder
      );
      if (selectedIndex !== -1) {
        const removedItem = orderingParams.option.splice(selectedIndex, 1)[0];
        orderingParams.option.unshift(removedItem);
      }
    }
    console.log(selectedGroup);
    setOrderParams(orderingParams);
    setGroupParams(groupingParams);
  };

  return (
    <>
      <Box paddingY={2} bg="white" paddingLeft={5}>
        <Menu>
          <MenuButton
            as={Button}
            className="open-sans-16"
            fontWeight="normal"
            paddingY={1}
            bg="white"
            border="1px solid black"
            rightIcon={<ChevronDownIcon />}
            leftIcon={<HamburgerIcon />}
            _focus={{ outline: "none", border: "0px" }}
            onClick={HandleOptionReordering}
          >
            display
          </MenuButton>
          <MenuList minWidth="240px" marginY={0}>
            <InputOption params={groupParams} />
            <InputOption params={orderParams} />
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}

export default DisplayTap;
