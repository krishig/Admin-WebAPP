import React, { useEffect, useState } from 'react'
import Logedinnav from './Logedinnav';
import "../css/CategoryEditData.css"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "../utils/axios"
import { toast } from 'react-toastify';

function CategoryEditData(props) {
    const [newChangedData, setChangedData] = useState({ category_name: '' })
    const [newSave, setSave] = useState(false)
    const [submitHandler, setSubmit] = useState(false)
    const location = useLocation();
    const data = location.state.myData
    const navigate = useNavigate()


    async function channgeHandler(e) {
        e.preventDefault()
        if (!newSave) setSave(!newSave)
        setChangedData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    async function SubmitHandler(e) {
        e.preventDefault()
        try {
            const api = `/categories?id=${data.id}`
            const sendData = await axios.patch(api, newChangedData, {
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
            setSubmit(!submitHandler)
            navigate('/category')
        } catch (error) {
            
            toast.error('Try Another Name', {
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


    // delete category
    async function deleteHandler(e) {
        e.preventDefault()
        try {
            const api = `/categories?id=${data.id}`
            const sendData = await axios.delete(api, {
                headers: {
                    'Authorization': localStorage.getItem('token'), // Include the auth token in the headers
                    'Content-Type': 'application/json', // Set the content type based on your API's requirements
                }
            })
            toast.success('category deleted', {
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
            console.log(error)
        }
    }


    useEffect(() => {

    }, [submitHandler])
    return (
        <>
            <Logedinnav />
            <div id='categoryEditDataMain'>
                <div id='categoryEditDataAlign'>
                    <div id='categoryEditDataHeading'><div id='CategoryNameEdit'>
                        <form action="" onSubmit={SubmitHandler}>
                            <input onChange={channgeHandler} type="text" name='category_name' placeholder={data.category_name} />

                            {newSave ? <button id='submitButtonOfHeading'>Save</button> : ''}

                        </form></div> <div id='DeleteCategory'>
                            <button onClick={deleteHandler}>Delete</button>
                        </div>
                    </div>
                    <div id='categoryEditDataBottom'>
                        <div id='createdby'> <label htmlFor="Created_by">Created by</label>
                            <h3 id='Created_by'>{data.created_by}</h3>
                        </div>
                        <div id='createdat'> <label htmlFor="created_at">Created at</label>
                            <h3 id='created_at'>{data.created_at}</h3>
                        </div>
                    </div>
                    <div id="categoryEditDataSubCategories">
                        <div id='categoryEditDataSubCategoriesHeading'><h1>Sub Categories</h1></div>
                        <div id="categoryEditDataSubCategoriesMapMain">
                            <div id='categoryEditDataSubCategoriesMap'>
                                <table>
                                    <tr>
                                        <th id='sub_category_id'>Id</th>
                                        <th id='sub_category_name'>sub category name</th>
                                        <th id='category_name'>Category name</th>
                                        <th id='created_by'>Created by</th>
                                        <th id='modified_by'>Modified by</th>
                                    </tr>
                                </table>
                            </div>
                            <div id='subCategoryDataa'>
                                {data.sub_category.map((data, index) => {
                                    return (<table key={index} >
                                        <tr>
                                            <td id='sub_category_id'>{data.id}</td>
                                            <td id='sub_category_name'>{data.sub_category_name}</td>
                                            <td id='category_name'>{data.category_name}</td>
                                            <td id='created_by'>{data.created_by}</td>
                                            <td id='modified_by'>{data.created_at}</td>

                                        </tr>
                                    </table>)
                                })}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryEditData

// <div> <label htmlFor="sub_category">sub category</label>
// <h3>{data.sub_category}</h3>
// </div>