import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faItalic } from "@fortawesome/free-solid-svg-icons";

const toolbarIcons = [
  {
    label: "bold",
    style: "BOLD",
    icon: <FontAwesomeIcon icon={faBold} />
  },
  {
    label: "italic",
    style: "ITALIC",
    icon: <FontAwesomeIcon icon={faItalic} />
  }
];
export default toolbarIcons;
