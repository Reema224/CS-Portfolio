import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import img from '../images/header.png';
import img1 from '../images/me.png';
import img2 from '../images/proj1.png';
import img3 from '../images/proj2.png';
import img4 from '../images/proj3.jpg';
import img5 from '../images/proj4.jpg';
import Button from 'react-bootstrap/Button';
import Typewriter from "typewriter-effect";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import {Col,Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
export default function Portfolio() {
 

  return (
    <div className="Home">
      <Navbar style={{ backgroundColor: "#1b242f", borderBottom: "2px solid #0ab2cc" }} fixed="top" >
        <Container fluid >

          <Nav className='m-auto' style={{ letterSpacing: ".15em" }}>
            <Nav.Link href=".home" style={{ color: "#cc0a98" }}>HOME</Nav.Link>
            <Nav.Link href="#about" style={{ color: "white" }}>ABOUT</Nav.Link>
            <Nav.Link href="#projects" style={{ color: "white" }}>PROJECTS</Nav.Link>
            <Nav.Link href="#contact" style={{ color: "white" }}>CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <img src={img} alt="" className="img" />
      <div className="intro" >
        <h1>
      <Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Hello, I'm  Matthew Williams")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("I'm Full-Stack Web Developer")
  .start();
  }}
  />
  </h1>
  </div>
  <a href="#about"><Button  variant="outline-light" className="btn">View My Work</Button>{' '}</a>
  <div className="about-txt">
             <h2 >ABOUT </h2>
             </div>
      <div id="about">
       
      <div className="about-info">
      <img src={img1} className="img1" alt=""    /> 
      
        
        <p className="me">I'm a Front-End Developer for ChowNow in Los Angeles, CA.
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
Let's make something special.</p>
      </div>
      
    

    <div className="skill">
    <div class="skills">
   <div class="details">
      <span>HTML</span>
      <span>90%</span>
   </div>
   <div class="bar">
     <div id="html-bar"></div>
   </div>
 </div>
    <div class="skills">
 <div class="details">
   <span>CSS</span>
   <span>90%</span>
  </div>
  <div class="bar">
    <div id="css-bar"></div>
  </div>
</div>


<div class="skills">
 <div class="details">
   <span>React</span>
   <span>80%</span>
 </div>

  <div class="bar">
  <div id="js-bar"></div>
 </div>
</div>



<div class="skills">
 <div class="details">
   <span>JavaScript</span>
   <span>80%</span>
 </div>
 <div class="bar">
  <div id="jQuery-bar"></div>
  </div>
</div>

<div class="skills">
 <div class="details">
   <span>Angular</span>
   <span>50%</span>
 </div>
 <div class="bar">
  <div id="angular-bar"></div>
  </div>
</div>

<div class="skills">
 <div class="details">
   <span>Node.js</span>
   <span>65%</span>
 </div>
 <div class="bar">
  <div id="node-bar"></div>
  </div>
</div>


</div>
</div>
<div id="projects">
<h2 className="projects-txt">PROJECTS </h2>
<div className="cards">
 
   <Container>
      <Row>
        <Col><Card  className="anim">  
  <Card.Img variant="top" src={img2}/>  
  
</Card>
</Col>
        <Col><Card  className="anim">  
  <Card.Img variant="top" src={img3} />  
  
</Card>  </Col>
      </Row>
      <Row>
        <Col><Card  className="anim">  
  <Card.Img variant="top" src={img4} />  
  
</Card></Col>
        <Col><Card  className="anim">  
  <Card.Img variant="top" src={img5}/>  
  
</Card></Col>
        
      </Row>
    </Container>
    

  
  
     

</div>
</div>
<div id="contact">
<h2 className="contact-txt">CONTACT ME </h2>
<Form style={{width:400}} className="form">
<Form.Group className='mb-3'>
         
          <Form.Control type="text" 
                        placeholder="Name" />
        </Form.Group>
        <Form.Group className='mb-3'>
         
          <Form.Control type="email" 
                        placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" rows={3}  placeholder="Message" />
      </Form.Group>
      <Button  type="submit" className="submit">
        Submit
      </Button>
     
      </Form>
     
  </div>
  <footer className="footer">
        <p>Matthew Williams © 2022 | All Rights Reserved </p>
      </footer>
 </div>

    
    
   
   
  )
}