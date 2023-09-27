import React, { useState } from 'react';
import { Container,InputGroup ,Row, Col, Button, Badge, Nav, Navbar,Form,FormControl,ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function Verfication(){

  const [keyText, setKeyText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [text, setText] = useState('');
  const [reason, setReason] = useState('');
  const [checkboxes, setCheckboxes] = useState(Array(7).fill(false));
  const [selectedItem, setSelectedItem] = useState(null);
  const items = ["항목 1", "항목 2", "항목 3", "항목 4"];


    // 스타일 객체 정의
    const containerStyle = {
      backgroundColor: 'lightblue', // 배경색 설정
      border: '2px solid black',    // 테두리 스타일 설정
      padding: '20px'             // 패딩 설정
    };



  
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  const handleKeyChange = (e) => {
    setKeyText(e.target.value);
  };  
  const handleTitleChange = (e) => {
    setTitleText(e.target.value);
  };  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };  
  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };    
  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };


  return ( 
  <Container style={containerStyle}>
    <Row>
      <Nav>
        <Col xs={10}>
            <h1>과제98_베트남어 말뭉치 데이터</h1>          
        </Col>
        <Col>
          <Row>
            <Col>
              <Button className='ml-auto'>사용자ID</Button>
            </Col>
            <Col>
              <Button className='ml-auto'>Logout</Button>            
            </Col>            
          </Row>          
        </Col>
      </Nav>
    </Row>

    <Row>
      <Col xs={2}>      
        <Container>
          <Container>
            <Button>추가</Button>
          </Container>
          <Container className="mb-3">
            <Button>진행</Button>
            <Button>완료</Button>
          </Container>
          <Container>
            <ListGroup>
            {items.map((item, index) => (
              <ListGroup.Item
                key={index}
                onClick={() => handleItemClick(index)}
                active={selectedItem === index}
              >
                {item}
              </ListGroup.Item>
            ))}
            </ListGroup>  
          </Container>        
        </Container>      
      </Col>

      <Col>      
        <Container>
          <Row>
            <InputGroup className="mb-1">
                  <InputGroup.Text>키 값 : </InputGroup.Text>
                  <FormControl
                    placeholder="키 값 입력"                    
                    aria-label="키 값 입력"
                    aria-describedby="basic-addon2"
                    type="text"
                    value={keyText}
                    onChange={handleKeyChange}
                  />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup className="mb-4">
              <InputGroup.Text>제목 내용 : </InputGroup.Text>
                  <FormControl
                    placeholder="제목 내용 입력"
                    aria-label="제목 내용 입력"
                    aria-describedby="basic-addon2"
                    type="text"
                    value={titleText}
                    onChange={handleTitleChange}
                  />
              </InputGroup>
          </Row>
        </Container>
        <Container>
          <InputGroup className="mb-4">
            <InputGroup.Text>본 문 </InputGroup.Text>
            <FormControl
              as="textarea" // <textarea>로 변환
              rows={11}
              placeholder="본문 내용 입력"
              aria-label="본문 내용 입력"
              aria-describedby="basic-addon2"
              value={text}
              onChange={handleTextChange}
            />
          </InputGroup>
        </Container>

        <Container>                              
          <Form>
            <Form.Group controlId="checkboxGroup" className="mb-3">            
              <Container>
                <Row>
                  <Col xs={1}>
                    <Form.Label>분류</Form.Label>                            
                  </Col>
                  <Col>
                    {checkboxes.map((isChecked, index) => (                  
                      <Form.Check key={index}
                        type="checkbox"
                        label={`주제 ${index + 1}`}
                        checked={isChecked}
                        onChange={() => handleCheckboxChange(index)}
                      />                  
                    ))}
                  </Col>
                </Row>
              </Container>
            </Form.Group>
          </Form>           
        </Container>

        <Container>        
          <Row>
            <Col xs={8}>
              <InputGroup className="mb-3">
                <InputGroup.Text>부적합 : </InputGroup.Text>
                <FormControl
                  placeholder="부적합 사유 입력"
                  aria-label="부적합 사유 입력"
                  aria-describedby="basic-addon2"
                  type="text"
                  value={reason}
                  onChange={handleReasonChange}
                />
              </InputGroup>
            </Col>
            <Col>
            <Button>처리완료</Button>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
  ) ;
}



export default Verfication;