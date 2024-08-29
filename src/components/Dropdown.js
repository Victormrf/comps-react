import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef(); // variable that stores the reference to some div element => we will take this value and associate it with the root element of the component (div with the w-48 className)

    // we take a look on where the user has clicked on, and if it is inside the dropdown component 
    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current){
                return;
            } 
            
            if(!divEl.current.contains(event.target)) { //if this condition is false, then the user clicked outside of the dropdown
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true); //since we want to watch for clicks during the capture phase, e pass true as a third argument 

        // we need to make sure that as the dropdown gets removed from the screen, we dont want to listen to the event anymore => we can use a clean up function
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);
    // The empty array guarantees that the function will only be called once

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    const handleOptionClick = (option) => {
        // close Dropdown
        setIsOpen(false);
        // Displaying the option the user clicked in
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label};
        </div>
    });

    const icon = (value && !isOpen) ? <GoChevronLeft className="text-lg"/> : <GoChevronDown className="text-lg"/>

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {value?.label || 'Select...'}
                {icon}
            </Panel>
            {isOpen && <Panel className="absolute top-full">
                {renderedOptions}
            </Panel>}
        </div>
    );
}

export default Dropdown;