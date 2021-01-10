import React, { useState } from 'react'
import Icon from './Icon'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Card, Container, CardBody, Button, Col, Row } from 'reactstrap';
const ItemArray = new Array(9).fill("empty")
const App = () => {
    const [iscross, setIsCross] = useState("true")
    const [winMessage, setWinMessage] = useState("")
    const reloadGame = () => {
        setIsCross(false);
        setWinMessage("");
        ItemArray.fill("empty", 0, 9);
    };
    const checkWinner = () => {
        //  checking  winner of the game
        if (
            ItemArray[0] === ItemArray[1] &&
            ItemArray[0] === ItemArray[2] &&
            ItemArray[0] !== "empty"
        ) {
            setWinMessage(`${ItemArray[0]} won`);
        } else if (
            ItemArray[3] !== "empty" &&
            ItemArray[3] === ItemArray[4] &&
            ItemArray[4] === ItemArray[5]
        ) {
            setWinMessage(`${ItemArray[3]} won`);
        } else if (
            ItemArray[6] !== "empty" &&
            ItemArray[6] === ItemArray[7] &&
            ItemArray[7] === ItemArray[8]
        ) {
            setWinMessage(`${ItemArray[6]} won`);
        } else if (
            ItemArray[0] !== "empty" &&
            ItemArray[0] === ItemArray[3] &&
            ItemArray[3] === ItemArray[6]
        ) {
            setWinMessage(`${ItemArray[0]} won`);
        } else if (
            ItemArray[1] !== "empty" &&
            ItemArray[1] === ItemArray[4] &&
            ItemArray[4] === ItemArray[7]
        ) {
            setWinMessage(`${ItemArray[1]} won`);
        } else if (
            ItemArray[2] !== "empty" &&
            ItemArray[2] === ItemArray[5] &&
            ItemArray[5] === ItemArray[8]
        ) {
            setWinMessage(`${ItemArray[2]} won`);
        } else if (
            ItemArray[0] !== "empty" &&
            ItemArray[0] === ItemArray[4] &&
            ItemArray[4] === ItemArray[8]
        ) {
            setWinMessage(`${ItemArray[0]} won`);
        } else if (
            ItemArray[2] !== "empty" &&
            ItemArray[2] === ItemArray[4] &&
            ItemArray[4] === ItemArray[6]
        ) {
            setWinMessage(`${ItemArray[2]} won`);
        }
        else if (ItemArray[1] !== 'empty' && ItemArray[2] !== 'empty' && ItemArray[3] !== 'empty' && ItemArray[4] !== 'empty' && ItemArray[5] !== 'empty' && ItemArray[6] !== 'empty' && ItemArray[7] !== 'empty' && ItemArray[8] !== 'empty' && ItemArray[9] !== 'empty') {
            setWinMessage("Match Tie");
        }
    };
    const checkitem = itemNumber => {
        if (winMessage) {
            return toast(winMessage, { type: "success" })
        }
        if (ItemArray[itemNumber] === 'empty') {
            ItemArray[itemNumber] = iscross ? "cross" : "circle"
            setIsCross(iscross == "")
        }
        checkWinner()
    }
    return (
        <Container className="p-5">
            <ToastContainer position="bottom-center" />
            <Row>
                <Col md={6} className="offset-md-3">
                    {winMessage ? (
                        <div className="mb-2 mt-2">
                            <h1>{winMessage}</h1>
                            <Button onClick={reloadGame}>Reset</Button>
                        </div>
                    ) : (
                            <h1>{iscross ? "PLAYER 1" : "PLAYER 2"}  YOUR TURN</h1>
                        )}
                    <div className="grid">
                        {ItemArray.map((item, index) => (
                            <Card onClick={() => checkitem(index)}>
                                <CardBody className="box">
                                    <Icon name={item} />
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default App
