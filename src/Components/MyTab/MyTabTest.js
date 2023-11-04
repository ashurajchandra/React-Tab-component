import React,{useState} from 'react'
import Tab from '.';

export default function MyTabTest() {
const [activeIndex, setActiveIndex] = useState(0);


const handleTabOnChange = (index)=>{
    setActiveIndex(index)
}

const tabs = [
    {
        label: "Tab 1",
        content: ` Tab 1 content Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.`,
        isDisabled:false
    },
    {
        label: "Tab 2",
        content: ` Tab 2 content Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.`,
        isDisabled:false
    },
    {
        label: "Tab 3",
        content: `Tab 3 content  Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.`,
        isDisabled:true
    }
]

  return (
   <Tab activeIndex={activeIndex} handleTabOnChange = {handleTabOnChange} tabs={tabs}/>
  )
}
