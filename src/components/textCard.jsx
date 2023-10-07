import {
  Box,
  Wrap,
  WrapItem,
  Avatar,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { getUserById } from "../utils/dataUtils";
import { useApi } from "../context/apiProvider";

const TextCard = ({ params, withImage }) => {
  const { apiData } = useApi();
  const userName = getUserById(params?.userId, apiData);
  return (
    <>
      <Box
        w="100%"
        bg="white"
        boxShadow={"3xl"}
        textAlign={"left"}
        padding={2}
        borderRadius={5}
        marginBottom={2}
      >
        <Wrap justify="space-between" marginBottom={-5}>
          <WrapItem>
            <Text className="text-gray-normal">{params?.id}</Text>
          </WrapItem>
          {withImage ? (
            <WrapItem>
              <Avatar name={userName} src="#" size="xs" />
            </WrapItem>
          ) : null}
        </Wrap>
        <Text className="text-black-weight-500">{params?.title}</Text>
        <Button size="xs" disabled _focus={{ outline: "none", border: "0px" }}>
          <Icon as={BsThreeDots} />
        </Button>{" "}
        &nbsp;
        {params?.["tag"].map((m) => (
          <Button
            size="xs"
            disabled
            _focus={{ outline: "none", border: "0px" }}
            color="gray"
            bg="white"
            key={m.id}
          >
            <Icon as={GoDotFill} /> {m}
          </Button>
        ))}
      </Box>
    </>
  );
};
export default TextCard;
