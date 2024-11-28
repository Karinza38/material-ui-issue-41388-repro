"use client";
import { useState } from "react";
import Tabs, { TabsProps } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomTabPanel from "./CustomTabPanel";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const items = [
  "Item One",
  "Item Two",
  "Item Three",
  "Item Four",
  "Item Five",
  "Item Six",
  "Item Seven",
  "Item Eight",
  "Item Nine",
  "Item Ten",
];

const BasicTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const scrollableProps = {
    variant: "scrollable",
    scrollButtons: true,
    allowScrollButtonsMobile: true,
  };

  return (
    <Box sx={{ width: "100%", m: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          selectionFollowsFocus
          {...scrollableProps}
        >
          {items.map((item, index) => {
            return (
              <Tab key={`tab-${index}`} label={item} {...a11yProps(index)} />
            );
          })}
        </Tabs>
      </Box>
      {items.map((item, index) => {
        return (
          <CustomTabPanel
            key={`tab-panel-${index}`}
            value={value}
            index={index}
          >
            {item}
          </CustomTabPanel>
        );
      })}
    </Box>
  );
};

export default BasicTabs;
