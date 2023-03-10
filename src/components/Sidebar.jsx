import React from "react";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  console.log(selectedTab);
  return (
    <div className="sidebar">
      <div
        className={selectedTab === "INBOX" ? "active" : ""}
        onClick={() => setSelectedTab("INBOX")}
      >
        <FaInbox className="icon" />
        Inbox
      </div>
      <div
        className={selectedTab === "TODAY" ? "active" : ""}
        onClick={() => setSelectedTab("TODAY")}
      >
        <FaRegCalendarAlt className="icon" />
        Today
      </div>
      <div
        className={selectedTab === "NEXT_7_DAYS" ? "active" : ""}
        onClick={() => setSelectedTab("NEXT_7_DAYS")}
      >
        <FaRegCalendar className="icon" />
        Next 7 days
      </div>
    </div>
  );
};

export default Sidebar;
