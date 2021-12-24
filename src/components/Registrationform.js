import React from 'react'
import {useFormik} from 'formik'
import { useNavigate } from "react-router-dom"


const Registrationform = () => {

    const navigate = useNavigate();

    const validate = values => {
        const errors = {}
    
        if (!values.name) {
          errors.name = 'Required'
        } else if (values.name !== 'rohit') {
          errors.name = 'invalid name'
        }
         

        if (!values.email) {
          errors.email = 'Required'
        } else if (values.email !== 'rroo@gmail.com') {
          errors.email = 'invalid email'
        }
    
        if (!values.password) {
          errors.password = 'Required'
        } else if (values.password.length < 8) {
          errors.password = 'Must be 8 characters or more'
        } else if (values.password !== '1234567890') {
          errors.password = 'invalid password'
        }
    
        if (!values.number.match("[0-9]+")) {
          errors.number = 'number not valid'
        }else if(!values.number){
            errors.number = 'Required'
        }else if(parseInt(values.number) !== 9876543210){
            errors.number = 'invalid number'
        }
    
        return errors
      }

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            number:'',
        },
        validate,
        onSubmit : values =>{
            alert('you are valid user')
            
            navigate('/Helloworld')
        }
    })

    console.log(formik);

    return (
        <>
           <div className="signupSection">
  <form action="#" onSubmit={formik.handleSubmit} method="POST" className="signupForm" name="signupform">
    <h2>Registration form </h2>
    <ul className="noBullet">
      <li>
        <label htmlFor="Name"></label>
        <input type="text" className="inputFields" id="name" name="name" placeholder="Username" value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        />
        {formik.touched.name && formik.errors.name ? <div className='errors'>{formik.errors.name}</div>:null}
        
      </li>
      <li>
        <label htmlFor="email"></label>
        <input type="email" className="inputFields" id="email" name="email" placeholder="Email" value={formik.values.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? <div className='errors'>{formik.errors.email}</div>:null}
      </li>
      <li>
        <label htmlFor="password"></label>
        <input type="password" className="inputFields" id="password" name="password" placeholder="Password" value={formik.values.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password ? <div className='errors'>{formik.errors.password}</div>:null}
      </li>
      <li>
        <label htmlFor="number"></label>
        <input type="phone" className="inputFields" id="number" name="number" placeholder="Number" value={formik.values.number}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        />
        {formik.touched.number && formik.errors.number ? <div className='errors'>{formik.errors.number}</div>:null}
      </li>
      <li id="center-btn">
        <input type="submit" id="join-btn" name="Submit" alt="Submit" value="Submit"/>
      </li>
    </ul>
  </form>
</div>
        </>
    )
}

export default Registrationform
