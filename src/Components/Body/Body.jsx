import React from 'react'
import { Container, Row, Col } from "reactstrap";
import OrderDetails from "./API/OrdersDetails";
import IncomingPOrders from "./API/IncomingPOrders";
import TopSelling from "./API/TopSelling";
import "./Body.css";

function Body() {

    // CSS for orders status card 
    const orders_css = [
        {
            fullfillment_status: {
                background: "#E6EAF0",
                color: "#003AD2"
            },
            payment_status: {
                background: "#e9ffe3",
                color: "#16C35B"
            }
        },
        {
            fullfillment_status: {
                background: "#ffe6e6",
                color: "#E80000"
            },
            payment_status: {
                background: "#eedbff",
                color: "#7000FF"

            }
        },
        {
            fullfillment_status: {
                background: "#e9ffe3",
                color: "#24BDC7"
            },
            payment_status: {
                background: "#E6EAF0",
                color: "#5A5A5A"
            }
        },
        {
            fullfillment_status: {
                background: "#fffde3",
                color: "#FF9900"
            },
            payment_status: {
                background: "#fffde3",
                color: "#FF9900"
            }
        },
        {
            fullfillment_status: {
                background: "#E6EAF0",
                color: "#666F7E"
            },
            payment_status: {
                background: "#E6EAF0",
                color: "#1F4173"
            }
        },

    ];

    // CSS for orders purchase order card 
    const circleColor = [
        {
            color: "#F67932",
        },
        {
            color: "#00A84D",
        },
        {
            color: "#003AD2",
        },
        {
            color: "#E80000",
        },
        {
            color: "#8676FF",
        },
    ];

    return (
        <>
            <div style={{ paddingRight: "25px" }} className="outerMostDiv">
                <div className="top_div d-flex justify-content-between">
                    <span><h1 id='top_heading'>Sales Activity for this week</h1></span>
                    <div className="buttons d-flex justify-content-between align-items-center">
                        <div className='button1 d-flex align-items-center justify-content-around'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M10.7555 0.736693L15.2513 5.23178C15.2976 5.27803 15.3302 5.33621 15.3454 5.39987C15.3607 5.46352 15.358 5.53017 15.3377 5.59239C15.3174 5.65462 15.2802 5.70999 15.2303 5.75237C15.1804 5.79474 15.1197 5.82246 15.0551 5.83244L14.011 5.99536L10.0046 1.98903L10.1548 0.937151C10.1641 0.872106 10.1914 0.81094 10.2335 0.760495C10.2756 0.710051 10.3309 0.672317 10.3933 0.651515C10.4556 0.630713 10.5225 0.627663 10.5865 0.642705C10.6504 0.657748 10.7089 0.690291 10.7555 0.736693ZM2.25476 14.2729C4.89118 11.9135 7.91789 11.2073 11.2102 10.3629L11.5261 7.51686L8.48243 4.47315L5.63635 4.78907C4.79201 8.0814 4.0858 11.1074 1.72635 13.7445L0.73822 12.7571C2.74139 10.4196 3.49364 7.83207 4.49451 3.4914L9.00235 2.99061L13.0094 6.99765L12.5086 11.5055C8.16793 12.5071 5.57968 13.2586 3.24289 15.2618L2.25476 14.2729ZM5.9976 10.0017C5.86229 9.87101 5.75436 9.71469 5.68012 9.54185C5.60587 9.36901 5.56679 9.18312 5.56516 8.99501C5.56352 8.80691 5.59937 8.62036 5.6706 8.44626C5.74183 8.27216 5.84702 8.11398 5.98004 7.98097C6.11305 7.84795 6.27122 7.74276 6.44533 7.67153C6.61943 7.6003 6.80598 7.56445 6.99408 7.56609C7.18218 7.56772 7.36808 7.6068 7.54092 7.68105C7.71376 7.75529 7.87008 7.86322 8.00076 7.99853C8.25527 8.26632 8.3951 8.62294 8.39044 8.99235C8.38577 9.36177 8.23698 9.71474 7.97579 9.97603C7.7146 10.2373 7.36168 10.3862 6.99227 10.391C6.62286 10.3958 6.26619 10.2561 5.9983 10.0017H5.9976Z" fill="#1F4173" />
                            </svg>
                            <span id="active">Edit Layout</span>
                        </div>
                        <div className='button2 d-flex align-items-center justify-content-around'>
                            <span>Filter by year</span>
                        </div>
                        <span className='two_dots d-flex flex-column'>
                            <svg style={{ margin: "1px" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="#1F4173" />
                            </svg>
                            <svg style={{ margin: "1px" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="#1F4173" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="first_cards d-flex justify-content-between">
                    <div className="card" id="card1">
                        <div className='d-flex justify-content-between'>
                            <span className='status'>To be invoiced</span>
                            <span>
                                <svg className='unique-svg ' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M18.5833 21.8333H3.41666C2.5547 21.8333 1.72805 21.4909 1.11856 20.8814C0.509066 20.2719 0.166656 19.4452 0.166656 18.5833V1.24996C0.166656 0.962641 0.280793 0.687091 0.483957 0.483927C0.687122 0.280763 0.962672 0.166626 1.24999 0.166626H16.4167C16.704 0.166626 16.9795 0.280763 17.1827 0.483927C17.3859 0.687091 17.5 0.962641 17.5 1.24996V14.25H21.8333V18.5833C21.8333 19.4452 21.4909 20.2719 20.8814 20.8814C20.2719 21.4909 19.4453 21.8333 18.5833 21.8333ZM17.5 16.4166V18.5833C17.5 18.8706 17.6141 19.1462 17.8173 19.3493C18.0205 19.5525 18.296 19.6666 18.5833 19.6666C18.8706 19.6666 19.1462 19.5525 19.3494 19.3493C19.5525 19.1462 19.6667 18.8706 19.6667 18.5833V16.4166H17.5ZM15.3333 19.6666V2.33329H2.33332V18.5833C2.33332 18.8706 2.44746 19.1462 2.65062 19.3493C2.85379 19.5525 3.12934 19.6666 3.41666 19.6666H15.3333ZM4.49999 5.58329H13.1667V7.74996H4.49999V5.58329ZM4.49999 9.91663H13.1667V12.0833H4.49999V9.91663ZM4.49999 14.25H9.91666V16.4166H4.49999V14.25Z" fill="white" />
                                </svg>
                            </span>
                        </div>
                        <span><h2>56</h2></span>
                        <div className='d-flex justify-content-between'>
                            <span className='Quality_span'>
                                Quality
                            </span>
                            <span>
                                <svg className='arrow_svg' xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                                    <path d="M1.00001 5.99994H8.59001L5.29001 2.70994C5.10171 2.52164 4.99592 2.26624 4.99592 1.99994C4.99592 1.73364 5.10171 1.47825 5.29001 1.28994C5.47832 1.10164 5.73371 0.99585 6.00001 0.99585C6.26631 0.99585 6.52171 1.10164 6.71001 1.28994L11.71 6.28994C11.8011 6.38505 11.8724 6.49719 11.92 6.61994C12.02 6.8634 12.02 7.13648 11.92 7.37994C11.8724 7.50269 11.8011 7.61484 11.71 7.70994L6.71001 12.7099C6.61705 12.8037 6.50645 12.8781 6.38459 12.9288C6.26273 12.9796 6.13202 13.0057 6.00001 13.0057C5.868 13.0057 5.73729 12.9796 5.61544 12.9288C5.49358 12.8781 5.38298 12.8037 5.29001 12.7099C5.19628 12.617 5.12189 12.5064 5.07112 12.3845C5.02035 12.2627 4.99421 12.132 4.99421 11.9999C4.99421 11.8679 5.02035 11.7372 5.07112 11.6154C5.12189 11.4935 5.19628 11.3829 5.29001 11.2899L8.59001 7.99994H1.00001C0.734796 7.99994 0.480441 7.89458 0.292905 7.70705C0.105369 7.51951 1.23978e-05 7.26516 1.23978e-05 6.99994C1.23978e-05 6.73472 0.105369 6.48037 0.292905 6.29283C0.480441 6.1053 0.734796 5.99994 1.00001 5.99994Z" fill="white" />
                                </svg>
                            </span>
                        </div>

                    </div>
                    <div className="card" id="card2">
                        <div className='d-flex justify-content-between'>
                            <span className='status'>Completed</span>
                            <span>
                                <svg className='unique-svg' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M20 2V16.721C20.0001 16.818 19.972 16.913 19.9191 16.9943C19.8662 17.0756 19.7908 17.1398 19.702 17.179L11 21.03L2.298 17.18C2.20894 17.1407 2.13329 17.0762 2.08035 16.9945C2.02742 16.9128 1.99949 16.8174 2 16.72V2H0V0H22V2H20ZM4 2V15.745L11 18.845L18 15.745V2H4ZM7 6H15V8H7V6ZM7 10H15V12H7V10Z" fill="white" />
                                </svg>
                            </span>
                        </div>
                        <span><h2>24</h2></span>
                        <div className='d-flex justify-content-between'>
                            <span className='Quality_span'>
                                Quality
                            </span>
                        </div>
                    </div>
                    <div className="card" id="card3">
                        <div className='d-flex justify-content-between'>
                            <span className='status'>Assigned to me</span>
                            <span>
                                <svg className='unique-svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.003 14L4.76 9.757L6.174 8.343L9.003 11.172L14.659 5.515L16.074 6.929L9.003 14Z" fill="white" />
                                </svg>
                            </span>
                        </div>
                        <span><h2>12</h2></span>
                        <div className='d-flex justify-content-between'>
                            <span className='Quality_span'>
                                Quality
                            </span>
                            <span>
                                <svg className='arrow_svg' xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                                    <path d="M1.00001 5.99994H8.59001L5.29001 2.70994C5.10171 2.52164 4.99592 2.26624 4.99592 1.99994C4.99592 1.73364 5.10171 1.47825 5.29001 1.28994C5.47832 1.10164 5.73371 0.99585 6.00001 0.99585C6.26631 0.99585 6.52171 1.10164 6.71001 1.28994L11.71 6.28994C11.8011 6.38505 11.8724 6.49719 11.92 6.61994C12.02 6.8634 12.02 7.13648 11.92 7.37994C11.8724 7.50269 11.8011 7.61484 11.71 7.70994L6.71001 12.7099C6.61705 12.8037 6.50645 12.8781 6.38459 12.9288C6.26273 12.9796 6.13202 13.0057 6.00001 13.0057C5.868 13.0057 5.73729 12.9796 5.61544 12.9288C5.49358 12.8781 5.38298 12.8037 5.29001 12.7099C5.19628 12.617 5.12189 12.5064 5.07112 12.3845C5.02035 12.2627 4.99421 12.132 4.99421 11.9999C4.99421 11.8679 5.02035 11.7372 5.07112 11.6154C5.12189 11.4935 5.19628 11.3829 5.29001 11.2899L8.59001 7.99994H1.00001C0.734796 7.99994 0.480441 7.89458 0.292905 7.70705C0.105369 7.51951 1.23978e-05 7.26516 1.23978e-05 6.99994C1.23978e-05 6.73472 0.105369 6.48037 0.292905 6.29283C0.480441 6.1053 0.734796 5.99994 1.00001 5.99994Z" fill="white" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="card" id="card4">
                        <div className='d-flex justify-content-between'>
                            <span className='status'>To be filled</span>
                            <span>
                                <svg className='unique-svg' xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
                                    <path d="M10 13.252V15.342C9.09492 15.022 8.12628 14.9239 7.1754 15.0558C6.22453 15.1877 5.3192 15.5459 4.53543 16.1002C3.75166 16.6545 3.11234 17.3888 2.67116 18.2414C2.22998 19.094 1.99982 20.04 2 21L2.58457e-07 20.999C-0.000310114 19.7779 0.278921 18.5729 0.816299 17.4764C1.35368 16.3799 2.13494 15.4209 3.10022 14.673C4.0655 13.9251 5.18918 13.4081 6.38515 13.1616C7.58113 12.9152 8.81766 12.9457 10 13.251V13.252ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10ZM16 16H19V18H16V21.5L11 17L16 12.5V16Z" fill="white" />
                                </svg>
                            </span>
                        </div>
                        <span><h2>3</h2></span>
                        <div className='d-flex justify-content-between'>
                            <span className='Quality_span'>
                                Quality
                            </span>
                        </div>
                    </div>
                </div>
                <div className="second_cards d-flex justify-content-between">
                    <div className="card_">
                        <div className='d-flex justify-content-start'>
                            <span className='top_icon_span' id='top_icon_span1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                                    <path d="M18.7917 20.875H4.20835C3.93209 20.875 3.66713 20.7653 3.47178 20.5699C3.27643 20.3745 3.16669 20.1096 3.16669 19.8333V10.4583H0.041687L10.799 0.679165C10.9908 0.504662 11.2407 0.407959 11.5 0.407959C11.7593 0.407959 12.0093 0.504662 12.2011 0.679165L22.9584 10.4583H19.8334V19.8333C19.8334 20.1096 19.7236 20.3745 19.5283 20.5699C19.3329 20.7653 19.068 20.875 18.7917 20.875ZM5.25002 18.7917H17.75V8.53854L11.5 2.85729L5.25002 8.53854V18.7917Z" fill="#FA582E" />
                                </svg>
                            </span>
                            <span className='status_'>Out of Stock products</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span className='price'>
                                89.00
                            </span>
                            <span className='icon_span lower_icon_span'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="9" viewBox="0 0 7 9" fill="none">
                                    <path d="M3.67917 4.49999L0.7323 1.55416L2.20522 0.0802002L6.62501 4.49999L2.20522 8.91978L0.7323 7.44583L3.67917 4.49999Z" fill="#1F4173" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="card_">
                        <div className='d-flex justify-content-start'>
                            <span className='top_icon_span' id='top_icon_span2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                                    <path d="M13 0.5C14.9891 0.5 16.8968 1.29018 18.3033 2.6967C19.7098 4.10322 20.5 6.01088 20.5 8V9.25H25.5V11.75H24.0413L23.095 23.1038C23.069 23.4161 22.9266 23.7073 22.696 23.9196C22.4654 24.1319 22.1634 24.2498 21.85 24.25H4.15C3.83656 24.2498 3.53462 24.1319 3.30403 23.9196C3.07343 23.7073 2.93102 23.4161 2.905 23.1038L1.9575 11.75H0.5V9.25H5.5V8C5.5 6.01088 6.29018 4.10322 7.6967 2.6967C9.10322 1.29018 11.0109 0.5 13 0.5V0.5ZM21.5325 11.75H4.46625L5.3 21.75H20.6988L21.5325 11.75ZM14.25 14.25V19.25H11.75V14.25H14.25ZM9.25 14.25V19.25H6.75V14.25H9.25ZM19.25 14.25V19.25H16.75V14.25H19.25ZM13 3C11.7172 3 10.4835 3.49304 9.55398 4.37715C8.62451 5.26127 8.07039 6.4688 8.00625 7.75L8 8V9.25H18V8C18 6.7172 17.507 5.48346 16.6228 4.55399C15.7387 3.62451 14.5312 3.07039 13.25 3.00625L13 3Z" fill="#0163DE" />
                                </svg>
                            </span>
                            <span className='status_'>Out of Stock products</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span className='price'>
                                267.00
                            </span>
                            <span className='icon_span lower_icon_span'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="9" viewBox="0 0 7 9" fill="none">
                                    <path d="M3.67917 4.49999L0.7323 1.55416L2.20522 0.0802002L6.62501 4.49999L2.20522 8.91978L0.7323 7.44583L3.67917 4.49999Z" fill="#1F4173" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="card_">
                        <div className='d-flex justify-content-start'>
                            <span className='top_icon_span' id='top_icon_span3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                    <path d="M0.875 1.86471C0.875 1.15687 1.44979 0.583374 2.15762 0.583374H22.8424C23.1816 0.585738 23.5063 0.721454 23.7463 0.961203C23.9862 1.20095 24.1223 1.52549 24.125 1.86471V25.1354C24.1247 25.4753 23.9894 25.8012 23.7489 26.0415C23.5084 26.2818 23.1823 26.4167 22.8424 26.4167H2.15762C1.81841 26.4143 1.49373 26.2786 1.25374 26.0389C1.01375 25.7991 0.877706 25.4746 0.875 25.1354V1.86471ZM21.5417 12.2084V3.16671H3.45833V12.2084H21.5417ZM21.5417 14.7917H3.45833V23.8334H21.5417V14.7917ZM8.625 5.75004H16.375V8.33337H8.625V5.75004ZM8.625 17.375H16.375V19.9584H8.625V17.375Z" fill="#0FBB59" />
                                </svg>
                            </span>
                            <span className='status_'>Out of Stock products</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span className='price'>
                                2.00
                            </span>
                            <span className='icon_span lower_icon_span'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="9" viewBox="0 0 7 9" fill="none">
                                    <path d="M3.67917 4.49999L0.7323 1.55416L2.20522 0.0802002L6.62501 4.49999L2.20522 8.91978L0.7323 7.44583L3.67917 4.49999Z" fill="#1F4173" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="card_">
                        <div className='d-flex justify-content-start'>
                            <span className='top_icon_span' id='top_icon_span4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="23" viewBox="0 0 28 23" fill="none">
                                    <path d="M5.04165 7.87496C5.36212 7.87496 5.66946 8.00226 5.89607 8.22887C6.12267 8.45548 6.24998 8.76282 6.24998 9.08329C8.14844 9.08049 9.99216 9.7192 11.4821 10.8958H14.1041C15.7136 10.8958 17.1612 11.5954 18.1557 12.7071L21.9583 12.7083C23.1005 12.708 24.2194 13.0314 25.1852 13.6412C26.151 14.2509 26.9242 15.1219 27.4151 16.1532C24.5574 19.9245 19.9307 22.375 14.7083 22.375C11.3371 22.375 8.4854 21.6463 6.17748 20.3715C6.09295 20.6048 5.93852 20.8063 5.73525 20.9486C5.53198 21.0909 5.28977 21.167 5.04165 21.1666H1.41665C1.09618 21.1666 0.788832 21.0393 0.562226 20.8127C0.335619 20.5861 0.208313 20.2788 0.208313 19.9583V9.08329C0.208313 8.76282 0.335619 8.45548 0.562226 8.22887C0.788832 8.00226 1.09618 7.87496 1.41665 7.87496H5.04165ZM6.25119 11.5L6.24998 17.567L6.30435 17.6069C8.47331 19.1294 11.2984 19.9583 14.7083 19.9583C18.3381 19.9583 21.7154 18.5615 24.1756 16.1762L24.3363 16.0155L24.1913 15.8947C23.6207 15.4478 22.9291 15.1826 22.206 15.1334L21.9583 15.125L19.4063 15.1237C19.4945 15.5128 19.5416 15.9176 19.5416 16.3333V17.5416H8.66665V15.125L16.8712 15.1237L16.8301 15.0295C16.5986 14.5456 16.2424 14.1321 15.7981 13.8314C15.3539 13.5307 14.8376 13.3537 14.3023 13.3185L14.1041 13.3125H10.5637C10.0022 12.7382 9.33156 12.282 8.59115 11.9707C7.85075 11.6594 7.05557 11.4994 6.2524 11.5H6.25119ZM3.83331 10.2916H2.62498V18.75H3.83331V10.2916ZM15.4889 1.31975L15.9166 1.74871L16.3444 1.32096C16.6245 1.03847 16.9576 0.814091 17.3247 0.660701C17.6917 0.50731 18.0855 0.427929 18.4833 0.427114C18.8811 0.4263 19.2752 0.504069 19.6428 0.655955C20.0105 0.807842 20.3446 1.03086 20.6258 1.31219C20.9071 1.59353 21.13 1.92765 21.2818 2.29537C21.4336 2.66309 21.5112 3.05717 21.5103 3.45498C21.5094 3.85279 21.4299 4.2465 21.2764 4.61351C21.1229 4.98052 20.8984 5.3136 20.6159 5.59362L15.9166 10.2916L11.2162 5.59121C10.9337 5.3111 10.7094 4.97796 10.556 4.61091C10.4026 4.24386 10.3232 3.85012 10.3224 3.45231C10.3216 3.0545 10.3993 2.66044 10.5512 2.29276C10.7031 1.92509 10.9261 1.59103 11.2075 1.30977C11.4888 1.02852 11.8229 0.805596 12.1906 0.653814C12.5584 0.502031 12.9524 0.424374 13.3503 0.425301C13.7481 0.426228 14.1418 0.505721 14.5088 0.659215C14.8758 0.81271 15.2089 1.03718 15.4889 1.31975V1.31975ZM12.9272 3.02954C12.8271 3.12913 12.765 3.26066 12.7517 3.40128C12.7385 3.54189 12.7749 3.68271 12.8547 3.79925L12.9248 3.88262L15.9166 6.87204L18.9085 3.88262C19.0086 3.78266 19.0704 3.65074 19.0832 3.50986C19.096 3.36899 19.059 3.22808 18.9786 3.11171L18.9085 3.02712C18.8084 2.92722 18.6764 2.86561 18.5355 2.85303C18.3946 2.84044 18.2538 2.87768 18.1376 2.95825L18.053 3.02833L15.9154 5.16466L13.7803 3.02591L13.6981 2.95825C13.5818 2.87783 13.4409 2.8408 13.3 2.85361C13.1591 2.86642 13.0272 2.92825 12.9272 3.02833V3.02954Z" fill="#7828DC" />
                                </svg>
                            </span>
                            <span className='status_'>Out of Stock products</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span className='price'>
                                684.00
                            </span>
                        </div>
                    </div>
                </div>
                <Container fluid="md">
                    <Row className='bottom_div' xs={12} md={12} lg={12}>
                        <Col xs={6} md={6} lg={6}>
                            <div className='latest_sales'>
                                <div className="d-flex justify-content-between">
                                    <span>
                                        <h3 className='sales_heading' id='sales_heading_1'>
                                            Latest sales order - By sales channels
                                        </h3>
                                    </span>
                                    <span className="d-flex">
                                        <span>
                                            <h3 className='sales_heading' id='sales_heading_2'>
                                                Ecwid
                                            </h3>
                                        </span>
                                        <span>
                                            <svg style={{ marginTop: "26px" }} xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                                <path d="M5 6.00002L0.757004 1.75702L2.172 0.343018L5 3.17202L7.828 0.343018L9.243 1.75702L5 6.00002Z" fill="#1F4173" />
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <div className="searchParts d-flex justify-content-between">
                                    <div className="user-input-wrp">
                                        <br />
                                        <input type="text" className="inputText" required />
                                        <span className="floating-label">Search</span>
                                        <div className="search-icon_ d-flex align-items-center">
                                            <i class="fas fa-search" />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className='Active search_options'> <p>All</p> </span>
                                        <span className='search_options'><p>Open
                                        </p>                                        </span>
                                        <span className='search_options'> <p> Completed</p>
                                        </span>
                                        <span className='search_options'>
                                            <p>Fulfilled</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="items_div d-flex justify-content-between">
                                    <span className="item_headings">
                                        Order ID
                                    </span>
                                    <span className="item_headings">
                                        Customer
                                    </span>
                                    <span className="item_headings">
                                        Fullfillment status
                                    </span>
                                    <span className="item_headings">
                                        Payment Status
                                    </span>
                                    <span className="item_headings">
                                        Total
                                    </span>
                                </div>
                                <hr />
                                <div>
                                    {/* Mapping throughtthe array for item status div */}
                                    {OrderDetails.map(
                                        (value, i) => <div key={i} className='items_div d-flex justify-content-between'>
                                            <span className="item_headings order_id">
                                                {value.order_id}
                                            </span>
                                            <span className="item_headings userName">
                                                {value.name}
                                            </span>
                                            <span style={orders_css[i].fullfillment_status} className="item_headings">
                                                {value.fullfillment_status}
                                            </span>
                                            <span style={orders_css[i].payment_status} className="item_headings">
                                                {value.payment_status}
                                            </span>
                                            <span className="item_headings Total">
                                                {value.Total}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col xs={3} md={3} lg={3}>
                            <div className="purchase_orders">
                                <div className="d-flex justify-content-between">
                                    <span>
                                        <h3 className='sales_heading' id='sales_heading_1'>
                                            Purchase orders
                                        </h3>
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className='purchase_details_text'>
                                        Received orders
                                    </span>
                                    <span className='purchase_details_text'>
                                        $20
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className='purchase_details_text'>
                                        Total cost (USD)
                                    </span>
                                    <span className='purchase_details_text'>
                                        $4600
                                    </span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <span>
                                        <h3 style={{ marginTop: "0" }} className='sales_heading' id='sales_heading_1'>
                                            Incoming Purchase orders
                                        </h3>
                                    </span>
                                </div>
                                {
                                    // Mapping the Incoming products from jsx array
                                    <div>
                                        {IncomingPOrders.map(
                                            (value, i) => <div key={i} className='items_div d-flex justify-content-between'>
                                                <span className="d-flex justify-content-between">
                                                    <svg style={{ marginTop: "3px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M7.99997 14C11.3137 14 14 11.3137 14 8.00003C14 4.68631 11.3137 2 7.99997 2C4.68626 2 2 4.68631 2 8.00003C2 11.3137 4.68626 14 7.99997 14Z" stroke={circleColor[i].color} stroke-width="3" />
                                                    </svg>
                                                    <span style={{ marginLeft: "10px" }} className="d-flex flex-column">
                                                        <span className='upper_text'>
                                                            {IncomingPOrders[i].code}
                                                        </span>
                                                        <span className='lower_text'>
                                                            {IncomingPOrders[i].customer}
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className='item_headings'>
                                                    {IncomingPOrders[i].price}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                }
                                <div className="d-flex justify-content-between">
                                    <span>
                                        <h3 style={{ color: "#003AD2" }} className='sales_heading' id='sales_heading_1'>
                                            View All
                                        </h3>
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={3} md={3} lg={3}>
                            <div className="top_sellings">
                                <div className="d-flex justify-content-between">
                                    <span>
                                        <h3 className='sales_heading' id='sales_heading_1'>
                                            Top selling products
                                        </h3>
                                    </span>
                                </div>
                                {
                                    // Mapping the Top selling itemas from jsx array
                                    <Row className='top_selling_div' xs={12} md={12} lg={12}>
                                        {TopSelling.map(
                                            (value, i) =>
                                                <Col s={6} md={6} lg={6}>
                                                    <span className="d-flex flex-column justify-content-center align-items-center">
                                                        <span className="d-flex justify-content-center">
                                                            <img src={require(`../../Assets/images/${value.url}.png`)} alt="" />
                                                        </span>
                                                        <span className='top_item_data' style={{ textAlign: "center" }}>
                                                            {value.name}
                                                        </span>
                                                        <span className='top_item_data' style={{ textAlign: "center" }}>
                                                            <b>
                                                                {value.price}
                                                            </b>
                                                        </span>
                                                    </span>
                                                    {
                                                        // Conditional rendering to prevent the nderline on last two items as in the suggested UI
                                                        (i < TopSelling.length - 2) && <hr />
                                                    }
                                                </Col>
                                        )}
                                    </Row>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    )
}

export default Body
