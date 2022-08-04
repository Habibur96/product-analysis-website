import Accordion from 'react-bootstrap/Accordion';
import './Blogs.css'

function AlwaysOpenExample() {
    return (
        <div className='blog'>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <b> <p> Question: 1 <br /> <br /> What is Context Api?</p></b>
                    </Accordion.Header>
                    <Accordion.Body className='Ans1'>
                        <b>Context Api :- The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling in solving prop-drilling from all levels of your application.</b>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><b> <p> Question: 2 <br /> <br /> What is semantics tags?</p></b></Accordion.Header>
                    <Accordion.Body className='Ans1'>
                        <b>Semantics tags :- The HTML semantics refers to the trags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better definding the different sections and layout of web pages.</b>

                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </div>
    );
}

export default AlwaysOpenExample;