import React from "react";
import { Button } from "@chakra-ui/react";
import { TiMediaPlay, TiMediaPlayReverse } from "react-icons/ti";

export const renderArrow = (isEdge, onClick, ArrowButton) => {
  return (
    <Button
      onClick={onClick}
      size="xs"
      variant="outline"
      _focus={{ outline: "none", border: "0px" }}
      visibility={!isEdge ? "solid" : "hidden"}
      margin="auto"
    >
      <ArrowButton />
    </Button>
  );
};

export const renderCustomArrow = ({ type, onClick, isEdge }) => {
  if (type === "PREV") {
    return renderArrow(isEdge, onClick, TiMediaPlayReverse);
  }
  if (type === "NEXT") {
    return renderArrow(isEdge, onClick, TiMediaPlay);
  }
};
