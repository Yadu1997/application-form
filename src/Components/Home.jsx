import React, { useState } from 'react'
import './Home.css'
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import { Modal } from 'react-bootstrap'


function Home() {
  const[fullName,setFullname] = useState("")
  const[address,setAddress] = useState("")
  const[phone,setPhone] = useState(0)
  const[email,setEmail] = useState("")
  const[gender,setGender] = useState("")
  const[dob,setDob] = useState("")
  const[course,setCourse] = useState("")

  const[invalidFullName,setInvalidFullName]=useState(false)
  const[invalidAddress,setInvalidAddress]=useState(false)
  const[invalidPhone,setInvalidPhone]=useState(false)
  const[invalidEmail,setInvalidEmail]=useState(false)
  const[invalidGender,setInvalidGender]=useState(false)
  const[invalidDob,setInvalidDob]=useState(false)
  const[invalidCourse,setInvalidCourse]=useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nameValidation=(tag)=>{
    const{name,value}=tag
  // console.log(!!value.match(/^[a-zA-Z ]{2,30}$/));
  if (!!value.match(/^[a-zA-Z ]{2,30}$/)) {
    if (name=='appName') {
      setFullname(value)
      setInvalidFullName(false)
    }
  }else{
    if (name=='appName') {
      setFullname(value)
      setInvalidFullName(true)
    }
  }
 
  }

  const addressValidation=(tag)=>{
    const{name,value}=tag
    // console.log(name,value);
    if (!!value.match(/^[a-zA-Z\s,'-]*$/)) {
      if (name=='appAddress') {
        setAddress(value)
        setInvalidAddress(false)
      }
    }
    else{
      if (name=='appAddress') {
        setAddress(value)
        setInvalidAddress(true)
      }
    }
  }

  const phoneValidation=(tag)=>{
    const{name,value}=tag
    // console.log(typeof value)
    if (!!value.match(/^\d{10}$/)) {
      if (name=='appPhone') {
        setPhone(value)
        setInvalidPhone(false)
        
      }
    }else{
      if (name=='appPhone') {
        setPhone(value)
        setInvalidPhone(true)
        
      }
    }
  }

  const emailValidation=(tag)=>{
    const{name,value}=tag
    if (!!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      if (name=='appEmail') {
        setEmail(value)
        setInvalidEmail(false)
      }
    }else{
      if (name=='appEmail') {
        setEmail(value)
        setInvalidEmail(true)
    }
  }
 }

  
  const genderValidation=(tag)=>{
    const {name,value}=tag
    if (name=='row-radio-buttons-group') {
      setGender(value)
      setInvalidGender(false)
    }
  }

  const dobValidation=(tag)=>{
    const{name,value}=tag
    if (name=='dob') {
      setDob(value)
      setInvalidDob(false)
    }
    
  }

  const courseValidation=(tag)=>{
    const{name,value}=tag
    if (name=='dpd') {
      setCourse(value)
      setInvalidCourse(false)
    }
    
  }

 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (fullName && address && phone && email && gender && dob && course) {
      handleShow()
    }else{
      alert("Please fill the form completely")
      
    }
  }

  const onSubmit=()=>{
    alert('Application Submitted Successfully')
    handleClose()
    handleReset()
  }

  const handleReset=()=>{
    setFullname("")
    setAddress("")
    setPhone("")
    setEmail("")
    setGender("")
    setDob("")
    setCourse("")
  }

  return (
   <>
      <div className='home'>
        <h1 className='mt-5'>APPLICATION FORM</h1>
        <p>please fill the form carefully</p>
        <h3 className='my-5'>DEPARTMENT OF HIGHER SECONDARY EDUCATION KERALA</h3>
        <form action="">
          <div className="row my-5">
            <div className="col"></div>
            <div className="col-md-5 ">
            {
              invalidFullName &&
              <div className=" text-danger">Invalid Name</div>
            }
              <TextField value={fullName || ""} onChange={e=>nameValidation(e.target)} name='appName' style={{ width: '300px', marginBottom: '20px' }} id="outlined-basic" label="Full Name" variant="outlined" />
  
              {
                invalidAddress &&
               <div className=" text-danger">Invalid Address</div> 
              }
              <TextField value={address || ""} onChange={e=>addressValidation(e.target)} name='appAddress' style={{ width: '300px', marginBottom: '20px' }} id="outlined-basic" label="Address" variant="outlined" />
              {
              invalidPhone &&
               <div className=" text-danger">Invalid Phone Number</div> 
               }
              <TextField value={phone || ""} onChange={e=>phoneValidation(e.target)} name='appPhone' style={{ width: '300px', marginBottom: '20px' }} id="outlined-basic" label="Phone" variant="outlined" />
              {
                invalidEmail &&
               <div className=" text-danger">Invalid Email</div> 
              }
              <TextField value={email || ""} onChange={e=>emailValidation(e.target)} name='appEmail' style={{ width: '300px', marginBottom: '20px' }} id="outlined-basic" label="Email" variant="outlined" />
            </div>
            <div className="col"></div>
            <div className="col-md-3"> 
              { 
                invalidGender &&
               <div className=" text-danger">choose one</div> 
              }
              <FormControl style={{ width: '300px', marginBottom: '10px' }}>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup value={gender || ""} onChange={e=>genderValidation(e.target)} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
             <div>
                {
                  invalidDob &&
                 <div className=" text-danger">choose one</div>
                }
                <label htmlFor="dob">Date Of Birth</label>
                <input value={dob || ""} onChange={e=>dobValidation(e.target)} style={{ marginBottom: '20px' }} name='dob' type="date" className='form-control' />
             </div>
             {
              invalidCourse && 
              <div className=" text-danger">Choose one</div>
             }
              <label htmlFor="dpd">Course</label>
              <select value={course || ""} onChange={e=>courseValidation(e.target)} style={{ marginBottom: '20px' }} className='form-control' name="dpd" id="">
                <option value="" hidden>Choose One</option>
                <option value="biology">Biology</option>
                <option value="computer science">Computer Science</option>
                <option value="commerce">Commerce</option>
                <option value="humanities">Humanities</option>
              </select>
              <Stack spacing={2} direction='row'>
                <Button  onClick={handleSubmit} type='submit' variant="contained">Submit</Button>
                <Button onClick={handleReset} variant="outlined">Cancel</Button>
              </Stack>
            </div>
            <div className="col"></div>
          </div>
        </form>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Name : {fullName}</h5>
          <h5>Address : {address}</h5>
          <h5>Phone Number : {phone}</h5>
          <h5>Email : {email}</h5>
          <h5>Gender : {gender}</h5>
          <h5>Date Of Birth : {dob}</h5>
          <h5>Selected Course : {course}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={handleClose}>
              Edit
            </Button>
            <Button  onClick={onSubmit} variant="contained" color="success">Submit</Button>
          </Stack>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Home
