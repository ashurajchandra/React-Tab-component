import React from "react";
import "./myTab.css"

export default function Tab(props) {
  const { activeIndex, tabs, handleTabOnChange } = props;

  const disabledTabs = () => {
    const disabledList = [];
    tabs.forEach((tab, index) => {
      if (tab.isDisabled) {
        disabledList.push(tab.label);
      }
    });
    return disabledList;
  };

  const isDisabled = (index) => {
    const disabled = disabledTabs();
    const tab = tabs[index];
    return disabled.includes(tab.label);
  };

  const handleTabClick =(index)=>{
    const isTabDisabled = isDisabled(index);
    if(isTabDisabled || index>tabs.length){
        return
    }

    handleTabOnChange(index)
  }

  const renderTabLabels = () => {
    const disabled = disabledTabs();
    const isTabDisabled = isDisabled(activeIndex)
    return tabs.map((tab,index) => <p className={index===activeIndex && !isTabDisabled? "active": disabled.includes(tab.label)?"disabled":"normal"} key={index} onClick={()=>{handleTabClick(index)}}>{tab.label}</p>);
  };

  const renderTabContents = () => {
    // const disabled = disabledTabs();
   return tabs.map((tab,index)=>{
        if(index=== activeIndex){
            return <div>{tab.content}</div>
        }
    })
  };

  console.log("disabledTabs", disabledTabs());

  return (
    <>
      <div className="tab-container">

     <div className="tab-wrapper">
      <div className="tabs-label">{renderTabLabels()}</div>
      <div className="tab-content">{renderTabContents()}</div>
      </div>
      </div>
    </>
  );
}
