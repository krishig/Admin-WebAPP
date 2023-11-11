import React, { useRef, useState } from 'react'
import "../css/BrandsEditData.css"
import Logedinnav from './Logedinnav'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "../utils/axios"
import { toast } from 'react-toastify';



function BrandsEditData() {
    const location = useLocation()
    const navigate = useNavigate()
    const [data, setdata] = useState(location.state.myData)
    const formRef = useRef(null);

    const [newData, setData] = useState({
        "sub_category_name": `${data.brand_name}`,
        "image_url": `${data.brand_image_url}`
    })


    function changeHandler(e) {
        e.preventDefault()
        setdata((prev) => {
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
            const api = `/product_brands?id=${data.id}`
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

            navigate('/brands')
        } catch (error) {
            console.log(error)
            toast.error('error', {
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
            const api = `/product_brands?id=${data.id}`
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

            navigate('/brands')
        } catch (error) {

            console.log(error)

            toast.error('Not Able To Delete', {
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
            <div id="brandEditDataMain">
                <div id="brandEditDataAlign">
                    <div id="brandEditDataHeading">
                        <div id="headinggggggggggg"><h1>Brand</h1></div>
                        <div id="deleteButtonnnnnnn"><button onClick={deleteHandler}>Delete</button></div>
                    </div>
                    <div id="brandEditDatabottom">
                        <div id="brandEditDatabottomImageMain">
                            <div id="brandEditDatabottomImage">
                                <img src={data.brand_image_url} alt="" />
                            </div>
                            <div id="brandEditDatabottomcategoryId">
                                <form onSubmit={submitHandler} action="">
                                    <div id='brandEditDatabottominput'>
                                        <label htmlFor="lolsap">Brand Name</label>
                                        <input onChange={changeHandler} name='brand_name' type="text" id='lolsap' placeholder={data.brand_name} />
                                    </div>
                                    <div id='brandEditDatabottominput'>
                                        <label htmlFor="lolsap">Image url</label>
                                        <input onChange={changeHandler} name='brand_image_url' type="text" id='lolsap' placeholder={data.brand_image_url} />
                                    </div>
                                    {/* <div id='brandEditDatabottominput'>
                                        <label htmlFor="lolsap">Category id</label>
                                        <input onChange={changeHandler} name='category_id' type="text" id='lolsap' value={} />
                                    </div> */}
                                    <button ref={formRef} style={{ display: 'none' }}></button>
                                </form>
                            </div>
                        </div>
                        <div id="brandEditDatabottomSave">
                            <button onClick={saveHandler} >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandsEditData
