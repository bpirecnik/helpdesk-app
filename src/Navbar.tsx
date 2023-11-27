import { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Link from 'react-dom'

const Navbar: FC = () => {
    return (
        <div className='d-flex h-100 w-25 flex-column'>
            <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ticket" viewBox="0 0 16 16">
                            <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
                        </svg>
                        <span>Tickets</span>
                    </Accordion.Header>

                    <Accordion.Body>
                        <a
                            to={"/"}
                        className='btn btn-light'>
                            <span>Tickets</span>
                            <span>23</span>
                        </a>

                        <Button className='btn btn-light' onClick={() => { }}>
                            <span>Tickets</span>
                            <span>23</span>
                        </Button>

                        <Button className='btn btn-light' onClick={() => { }}>
                            <span>Tickets</span>
                            <span>23</span>
                        </Button>

                        <Button className='btn btn-light' onClick={() => { }}>
                            <span>Tickets</span>
                            <span>23</span>
                        </Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Button className='btn btn-light' onClick={() => { }}>Testing</Button>
            <Button className='btn btn-light' onClick={() => { }}>Testing</Button>
            <Button className='btn btn-light' onClick={() => { }}>Testing</Button>
        </div>
    )

}

export default Navbar;

