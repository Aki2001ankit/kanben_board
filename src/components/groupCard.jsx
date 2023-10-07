import React from "react";
import { Box, Wrap, WrapItem, Icon, Text, Avatar } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import TextCard from "./textCard";

export const GroupCard = ({ params }) => {
  return (
    <>
      <Box w="100%" padding={2}>
        <Wrap justify={"space-between"}  marginBottom ={-5}>
          <WrapItem>
            <Text>
              {params?.isUser ? (
                <Avatar name={params?.name} src="#" size="xs" />
              ) : (
                <>
                  <Icon as={params?.icon} />
                </>
              )}
              &nbsp; {params?.name}
            </Text>
          </WrapItem>
          <WrapItem>
            <Text>
              <Icon as={AiOutlinePlus} /> &nbsp;
              <Icon as={BsThreeDots} />
            </Text>
          </WrapItem>
        </Wrap>
        {params?.data?.map((m) => (
          <TextCard key={m.id} params={m} withImage={params?.withImage} />
        ))}
      </Box>
    </>
  );
};
