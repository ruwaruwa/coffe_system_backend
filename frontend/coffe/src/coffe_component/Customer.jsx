//import React from 'react'
import { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import { Alert, Button, Container, Form, Row ,Table} from 'react-bootstrap'
import Swal from 'sweetalert2'
import axios  from 'axios';

function Customer() {
    const[custdata,setcusdata]=useState([])
    const[editcust,seteditcust]=useState(false)
    const[editid,setid]=useState()
    const[res,setRes]=useState(new Date());
    const {register,handleSubmit,setValue,reset,formState:{errors}}=useForm()
    useEffect(()=>{
        const custlists=async()=>{
          const cusdatalis=await axios.get('http://localhost:6001/customer')
          const custom= await cusdatalis.data
          console.log(custom)
          setcusdata(custom)   
        }
        custlists()
    },[res])

    //edit
const customedit=async(event)=>{
    console.log(event)
    if(editcust)
    {
        const url=`http://localhost:6001/customer/${editid}`
    const cus= await axios.put(url,event)
  //swit aler
    reset()
    seteditcust(false)
    setRes(new Date())
    console.log(cus)
    Swal.fire({
      title: 'Do you want to Update the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Updated',
      denyButtonText: `Don't Updated`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Update!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not Updated', '', 'info')
      }
    })
    }
    else{
        const adcus= await axios.post('http://localhost:6001/customer',event)
        console.log(adcus)
        setRes(new Date())
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
          
        reset()
        
    }
    
}
//upd
const custom_save=async(data)=>{
    console.log(data.name)
    setValue('name',data.name)
    console.log(data.phone)
    setValue('phone',data.phone)
    console.log(data.address)
    setValue('address',data.address)
    //setValue(data._id)
    setid(data._id);
   seteditcust(true)
   setRes(new Date())
}

//delete
const deleted=async(id)=>{
  alert(id)
  const del= await axios.delete(`http://localhost:6001/customer/${id}`)
  console.log(del)
  setRes(new Date())
        Swal.fire({
            title: 'Do you want to delete the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't delete`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Deleted!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not delete', '', 'info')
            }
          })
          
        reset()
}


  return (
    <div >
      
<Alert className='bg-info mt'><h4> welcome to Customer home</h4></Alert>
<div className='bg-body shadow p-3 mb-3 bg-body-tertiary rounded w-4 content-box me-5 mt-2' style={{ marginLeft: '20%', width: '50%' }}>
<Form onSubmit={handleSubmit(customedit)}>
 
      <div className='col-sm-4'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" name='name' placeholder=" enter name"
        {...register("name",{
            required:true
        })}
        />
        {errors.name && <span className='text-danger'>FADLAN MAGACA SOGELI</span>}
      </Form.Group>
   
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>phone</Form.Label>
        <Form.Control type="text" name='phone' placeholder=" enter phone" 
         {...register("phone",{
            required:true
        })}
        />
        {errors.phone && <span className='text-danger'>FADLAN sogeli phone</span>}
      </Form.Group>
   
    
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> address</Form.Label>
        <Form.Control type="text" name='address' placeholder=" enter adres" 
         {...register("address",{
            required:true
        })}
        />
        {errors.address && <span className='text-danger'>FADLAN adreska SOGELI</span>}
      </Form.Group>

      </div>
    {  <button type='save' className='btn btn-success mt-2'
    style={{marginLeft:'10px'}}
    >
        {editcust ? "Update":"Save"}
      </button>
      }
    </Form>
    </div>
    
    <Container>
      <div className='bg-body shadow p-3 mb-3 bg-body-tertiary rounded w-4 content-box me-5 mt-2' style={{ marginLeft: '20%', width: '60%' }}>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer Name</th>
          <th>custm phone</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        {custdata?.map((custom,index)=>{
            return(
<tr key={index}>
          <td>{custom._id}</td>
          <td>{custom.name}</td>
          <td>{custom.phone}</td>
          <td>{custom.address}</td>
          <td><Button onClick={()=>custom_save(custom)}>update</Button></td>
          <td><Button className='btn btn-danger' onClick={()=>deleted(custom._id)}>delete</Button></td>
        </tr>
            )
        })}
        
      
      
      </tbody>
    </Table>
    </div>
    </Container>
   
    </div>
  )
}

export default Customer