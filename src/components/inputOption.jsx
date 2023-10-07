import { Wrap, WrapItem, Box } from "@chakra-ui/react";
import React from "react";
import { InputStyle, LabelStyle } from "../utils/miscMap";

const InputOption = ({ params }) => {
  return (
    <>
      <Box>
        <Wrap justify="space-between" marginX={3}>
          <WrapItem>
            <label for={params?.id} style={LabelStyle}>
              {params?.title}
            </label>
          </WrapItem>
          <WrapItem w="55%">
            <select
              id={params?.id}
              style={{ ...InputStyle }}
              onChange={params?.handleChange}
            >
              {params?.option.map((m) => (
                <option value={m?.optionItem} key={m.id}>
                  {m?.optionItem}
                </option>
              ))}
            </select>
          </WrapItem>
        </Wrap>
      </Box>
    </>
  );
};
export default InputOption;
