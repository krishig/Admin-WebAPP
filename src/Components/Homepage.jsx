import React, { useState, useRef, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../css/homepage.css"
import axios from "../utils/axios2"
import Logedinnav from './Logedinnav'
import Outfordelivery from './Outfordelivery';
import emptyCart from "../svgs/emptyCart.svg"





function Homepage() {

    const date = new Date;
    function customDateFormat(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        // return `${year}-${month}-${day}`;
        // setSelectedDate(`${year}-${month}-${day}`)
    }

    const [selectedDate, setSelectedDate] = useState("2023-11-01");
    const [newDate, setDate] = useState(false)
    const [oofStatus, setoofStatus] = useState(true)
    const [Delivered, setDelivered] = useState(false)
    const [placedOrder, setplacedOrder] = useState(false)
    const [pendingOrder, setpendingOrder] = useState(false)
    const [newCurrentStatus, setCurrentStatus] = useState("OUT_OF_DELIVERED")
    const [newFetchedData, setFetchedData] = useState({})  // newfetchedData contains the whole data fetched from the api
    const [newDeliveryData, setDeliveryData] = useState([])  // newDeliveryData contains the data of specific field

    async function fetchOutDeliveryData() {
        const api = `order/getDetails/all/${selectedDate}?status=${newCurrentStatus}`
        const tempAuth = localStorage.getItem('token')
        const CategoryData = await axios.get(api, {
            headers: {
                'Authorization': tempAuth, // Include the auth token in the headers
                'Content-Type': 'application/json', // Set the content type based on your API's requirements
            },
        })
        setFetchedData(CategoryData.data.data)
        setDeliveryData(CategoryData.data.data.orderResponseDto.content)
    }


    function outOfDeliveryHandler() {
        setCurrentStatus("OUT_OF_DELIVERED")
        if (!oofStatus) setoofStatus(true)
        if (Delivered) setDelivered(false)
        if (placedOrder) setplacedOrder(false)
        if (pendingOrder) setpendingOrder(false)
    }
    function deliveredHandler() {
        if (!Delivered) setDelivered(true)
        setCurrentStatus("DELIVERED")
        if (oofStatus) setoofStatus(false)
        if (placedOrder) setplacedOrder(false)
        if (pendingOrder) setpendingOrder(false)
    }
    function placedOrderHandler() {
        setCurrentStatus("OPEN")
        if (!placedOrder) setplacedOrder(true)
        if (oofStatus) setoofStatus(false)
        if (Delivered) setDelivered(false)
        if (pendingOrder) setpendingOrder(false)
    }
    function pendingOrderHandler() {
        setCurrentStatus("PENDING_DELIVER_ORDER")
        if (!pendingOrder) setpendingOrder(true)
        if (oofStatus) setoofStatus(false)
        if (Delivered) setDelivered(false)
        if (placedOrder) setplacedOrder(false)
    }

    function dateHandler() {
        setDate(!newDate)
    }
    const handleDateChange = (e) => {
        e.preventDefault()
        setSelectedDate(e.target.value);
        setDate(false);
    };


    useEffect(() => {
        customDateFormat(date)
        fetchOutDeliveryData()
    }, [newCurrentStatus])

// /sub cat
// /cat
// brand
//view edit add


    console.log(selectedDate)
    return (
        <>
            <Logedinnav />
            <div id="HomepageMain">
                <div id="HomepageAlign">
                    <div id="HomepageTop">
                        <div id="HomepageTittle">
                            <div id="HomepageTitleAlign">
                                <h1>Hi Gourav Shandilya</h1>
                                <div>

                                    {newDate ?


                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={handleDateChange}
                                            onClickOutside={() => setDate(false)}
                                            dateFormat="yyyy-MM-dd"
                                        />


                                        : <button onClick={dateHandler} id='HomepageDate' ></button>
                                    }
                                </div>
                            </div>
                        </div>
                        <div id="HomepageButtons">
                            <div id="homepageButtonsAlign">
                                <div id={`${oofStatus ? 'HomepageBtns2' : 'HomepageBtns'}`}><button onClick={outOfDeliveryHandler}><span className='spanforzero'>{newFetchedData.outOfDeliveryCount}</span> <br /> Out of Delivery</button></div>
                                <div id={`${Delivered ? 'HomepageBtns2' : 'HomepageBtns'}`}><button onClick={deliveredHandler}><span className='spanforzero'>{newFetchedData.deliveredCount}</span> <br /> Delivered</button></div>
                                <div id="HomepageBtns"><button><span className='spanforzero'>{newFetchedData.totalCash}</span> <br /> Total Cash</button></div>
                                <div id={`${placedOrder ? 'HomepageBtns2' : 'HomepageBtns'}`}><button onClick={placedOrderHandler}><span className='spanforzero'>{newFetchedData.totalOrderCount}</span> <br /> Placed Order</button></div>
                                <div id={`${pendingOrder ? 'HomepageBtns2' : 'HomepageBtns'}`}><button onClick={pendingOrderHandler}><span className='spanforzero'>{newFetchedData.pendingDeliveryCount}</span> <br /> pending Order</button></div>

                            </div>
                        </div>
                    </div>

                    {newDeliveryData.length === 0 ? (
                        <div id='emptyImg' >
                            <img style={{
                                width: '60%',
                                height: '60%',
                            }} src={emptyCart} alt="" />
                            <h1> No Orders </h1>
                        </div>
                    ) : (
                        <div id="HomepageBottom">
                            <div id="orderHeading">
                                <table>
                                    <tr>
                                        <th id='serialNo'>S.No</th>
                                        <th id='productName'>Customer Name</th>
                                        <th id='subCategory'>Payment Method</th>
                                        <th id='brand'>Number of Product</th>
                                        <th id='price'>Total Price</th>
                                        <th id='quantity'>Village Name</th>
                                    </tr>
                                </table>
                            </div>

                            {newDeliveryData.map((data, index) => (
                                <Outfordelivery key={index + 1} serialNo={index + 1} data={data} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Homepage


