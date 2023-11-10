import React, { useRef, useState } from 'react'
import "../css/Sub_category_edit_data.css"
import Logedinnav from './Logedinnav'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "../utils/axios"
import { toast } from 'react-toastify';

function Sub_category_edit_data(props) {
  const navigate = useNavigate()
  const location = useLocation()
  const [data, setdata] = useState(location.state.myData)
  const formRef = useRef(null);
  const [newData, setData] = useState({
    "sub_category_name": `${data.sub_category_name}`,
    "category_id": `${data.category_id}`,
    "image_url": `${data.image_url}`
  })


  function changeHandler(e) {
    e.preventDefault()
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  function saveHandler(e) {
    e.preventDefault()
    formRef.current.click()

  }
  async function submitHandler(e) {
    e.preventDefault()
    try {
      const api = `/sub_category?id=${data.id}`
      const sendData = await axios.patch(api, newData, {
        headers: {
          'Authorization': localStorage.getItem('token'), // Include the auth token in the headers
          'Content-Type': 'application/json', // Set the content type based on your API's requirements
        }
      })

      toast.success(sendData.data.message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      navigate('/sub_category')
    } catch (error) {
      toast.error('Please Enter Category id', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  async function deleteHandler(e) {
    e.preventDefault()
    try {
      const api = `sub_category?id=${data.id}`
      const sendData = await axios.delete(api, {
        headers: {
          'Authorization': localStorage.getItem('token'), // Include the auth token in the headers
          'Content-Type': 'application/json', // Set the content type based on your API's requirements
        }
      })
      toast.success(sendData.data.message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      navigate('/sub_category')
    } catch (error) {
      console.log(error)
      toast.error('Not Able To Delete The Sub category', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

  }

  return (
    <>
      <Logedinnav />
      <div id="SubCategoryEditDataMain">
        <div id="SubCategoryEditDataAlign">
          <div id="SubCategoryEditDataHeading"><div id="headinggggggggg">
            <h1>Edit Sub Category</h1>
          </div>
            <div id="deleteButtonnn">
              <button onClick={deleteHandler}>Delete</button>
            </div>
          </div>
          <div id="SubCategoryEditDatabottom">
            <div id="SubCategoryEditDatabottomImageMain">
              <div id="SubCategoryEditDatabottomImage">
                <img src={data.sub_category_image} alt="" />
              </div>
              <div id="SubCategoryEditDatabottomcategoryId">
                <form onSubmit={submitHandler} action="">
                  <div id='SubCategoryEditDatabottominput'>
                    <label htmlFor="lolsap">sub category name</label>
                    <input onChange={changeHandler} name='sub_category_name' type="text" id='lolsap' placeholder={data.sub_category_name} />
                  </div>
                  <div id='SubCategoryEditDatabottominput'>
                    <label htmlFor="lolsap">image url</label>
                    <input onChange={changeHandler} name='image_url' type="text" id='lolsap' placeholder={data.sub_category_image} />
                  </div>
                  <div id='SubCategoryEditDatabottominput'>
                    <label htmlFor="lolsap">Category id</label>
                    <input onChange={changeHandler} name='category_id' type="text" id='lolsap' placeholder={data.category_id} />
                  </div>
                  <button ref={formRef} style={{ display: 'none' }}></button>

                </form>
              </div>
            </div>
            <div id="SubCategoryEditDatabottomSave">
              <button onClick={saveHandler} >Save</button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Sub_category_edit_data
