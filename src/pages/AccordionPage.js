import Accordion from "../components/Accordion";

function AccordionPage() {
    // Creating an example items array prop
    const items = [{
        id: '1111',
        label: 'Can i use React on a project?',
        content: 'You can use React on any project you want.'
    }, {
        id: '2222',
        label: 'Can i use JavaScript on a project?',
        content: 'You can use JavaScript on any project you want'
    }, {
        id: '3333',
        label: 'Can i use CSS on a project?',
        content: 'You can use CSS on any project you want'
    }];

    return <Accordion items={items}/>;

}


export default AccordionPage;