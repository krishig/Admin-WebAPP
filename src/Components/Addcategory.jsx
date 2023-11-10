import React, { useState } from 'react'
import "../css/Addcategory.css"
import Logedinnav from './Logedinnav'
import axios from '../utils/axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

function Addcategory() {
    const navigate = useNavigate()
    const [changedData, setChangedData] = useState({
        category_name: ""
    })

    async function submitHandler(e) {
        e.preventDefault()
        if (changedData.category_name.length == 0) {

            toast.error("Please enter the category name", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })

        } else {

            try {
                const api = `/categories`
                const sendData = await axios.post(api, changedData, {
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

                navigate('/category')
            } catch (error) {
                toast.error("error", {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            }
        }
    }
    function changeHandler(e) {
        e.preventDefault()
        setChangedData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    console.log(changedData)
    return (
        <>
            <Logedinnav />
            <div id='addCategoryMain'>
                <div id="addCategoryAlign">
                    <div id="addCategoryHeading">
                        <h1>Add Category</h1>
                    </div>
                    <div id="addCategoryyy">
                        <form action="" onSubmit={submitHandler}>
                            <input onChange={changeHandler} type="text" placeholder='Drop the category name right here.' name='category_name' />
                            <button>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addcategory
