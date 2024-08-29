import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) =>{
        setExpandedIndex((currentExpandedIndex) => {
            if(currentExpandedIndex === nextIndex){
                return -1;
            } else{
                return nextIndex;
            }
        })
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = (<span clasName="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>)
        
        return (
            // whenever we are building a list of elements to show to the user, the top level element, must be given a key prop
            // In this case, we will use the object`s id once we pull it off the database (API or something equivalent)
            <div key={item.id}> 
                <div className="flex justifi-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5 ">
                    {item.content}
                </div>}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;

// Conditional Rendering (if first item is falsy, it will return it)
    // const content = isExpanded && <div>{item.content}</div>