export const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 400, itemsToShow: 2, itemsToScroll: 2 },
  { width: 600, itemsToShow: 3, itemsToScroll: 3 },
  { width: 800, itemsToShow: 5, itemsToScroll: 5 },
];
  export const InputStyle = {
    border: "1px solid black",
    padding: "2px",
    borderRadius: "4px",
    backgroundColor: "white",
    width: "100%",
  };
  export const LabelStyle = {
    fontFamily: "DM Sans",
    fontWeight: "500",
    color: "grey",
  };
 export const groupingParams = {
    id: "grouping",
    title: "Grouping",
    option: [
      { optionItem: "Status" },
      { optionItem: "Users" },
      { optionItem: "Priority" },
    ],
  };

  export const orderingParams = {
    id: "ordering",
    title: "Ordering",
    option: [{ optionItem: "Title" }, { optionItem: "Priority" }],
  };