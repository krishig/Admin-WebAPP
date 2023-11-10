import React, { useRef, useState } from 'react'
import "../css/addSubCategory.css"
import Logedinnav from './Logedinnav'
import axios from "../utils/axios"
import noImage from '../svgs/noImage.svg'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'




function Addsubcategory() {
    const navigate = useNavigate()
    const formRef = useRef(null);
    const [newImg, setImg] = useState(noImage)
    const [newData, setData] = useState({
        sub_category_name: '',
        category_id: '',
        image_url: ''
    })


function saveHandler(e) {
        e.preventDefault()
        formRef.current.click()
}

 function changeHandler(e) {
        e.preventDefault()
        if (e.target.name === 'image_url') {

            setImg(e.target.value)
        }
        setData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    async function submitHandler(e) {
        e.preventDefault()

        try {
            const api = `/sub_category`
            const sendData = await axios.post(api, newData, {
                headers: {
                    'Authorization': localStorage.getItem('token'), // Include the auth token in the headers
                    'Content-Type': 'application/json', // Set the content type based on your API's requirements
                }
            })

            if (sendData.data.message === 'sub category created') {
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
            } else {
                toast.error(sendData.data.message, {
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
        } catch (error) {
            toast.error('Not Able To Add Sub category', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }}

    return (
        <>
            <Logedinnav />
            <div id="addSubCategoryMain">
                <div id="addSubCategoryAlign">
                    <div id="addSubCategoryHeading">
                        <h1>Add Sub Category</h1>
                    </div>
                    <div id="addSubCategoryButtom">
                        <div id="addSubCategorybottomImageMain">
                            <div id="addSubCategorybottomImage">
                                <img src={newImg} alt="" />
                            </div>
                            <div id="addSubCategorybottomcategoryId">
                                <form onSubmit={submitHandler} action="">
                                    <div id='addSubCategorybottominput'>
                                        <label htmlFor="lolsap">sub category name</label>
                                        <input required onChange={changeHandler} name='sub_category_name' type="text" id='lolsap' />
                                    </div>
                                    <div id='addSubCategorybottominput'>
                                        <label htmlFor="lolsap">image url</label>
                                        <input required onChange={changeHandler} name='image_url' type="text" id='lolsap' />
                                    </div>
                                    <div id='addSubCategorybottominput'>
                                        <label htmlFor="lolsap">Category id</label>
                                        <input required onChange={changeHandler} name='category_id' type="text" id='lolsap' />
                                    </div>
                                    <button ref={formRef} style={{ display: 'none' }}></button>

                                </form>
                            </div>
                        </div>
                        <div id="addSubCategorybottomSave">
                            <button onClick={saveHandler} >Add Sub Category</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Addsubcategory
