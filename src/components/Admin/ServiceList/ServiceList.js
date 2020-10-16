import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import '../Admin.css';
import logo from '../../../images/logos/logo.png';
import AllServiceList from '../AllServiceList/AllServiceList';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [allServiceList, setAllServiceList] = useState([]);

    const { displayName } = loggedInUser;
    useEffect(() => {
        fetch('https://ancient-plateau-30299.herokuapp.com/allList')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllServiceList(data)
            })
    }, [])




    return (
        <div>
            <div style={{ paddingTop: '40px', display: 'flex' }} className="container">
                <img className="img-fluid mr-5" style={{ width: '150px', height: '47px' }} src={logo} alt="" />
                <h5 className="ml-5 mr-auto" style={{ fontWeight: 500, fontSize: '22px', fontStyle: 'poppins' }}>Service List</h5>
                <h4>{displayName}</h4>
            </div>
            <div className="container row offset-md-1">
                <aside style={{ marginTop: '60px' }} className="col-md-2">

                    <ul style={{ listStyleType: 'none', color: 'lightGreen' }}>
                        <li>
                            <i class="fas fa-clipboard-list mr-2"></i>
                            <Link className="link" to="/serviceList">Service List</Link>
                        </li>
                        <br />
                        <li>
                            <i class="fas fa-plus mr-2"></i>
                            <Link className="link" to="/addService">Add Service</Link>
                        </li>
                        <br />
                        <li>
                            <i class="fas fa-user-shield mr-1"></i>
                            <Link className="link" to="/makeAdmin">Make Admin</Link>
                        </li>
                    </ul>

                </aside>
                <main className="col-md-10 main-area">

                    <div style={{ backgroundColor: 'white' }}>
                        <div style={{ width: '100%', marginTop: '50px', backgroundColor: '#F5F6FA', marginBottom:'20px', display: 'flex' }}>
                            
                            <h5>Name</h5>
                            <h5 style={{marginLeft:'120px', marginRight:'140px'}}>Email Id</h5>
                            <h5>Service</h5>
                            <h5 style={{marginLeft:'90px',marginRight:'150px'}}>Project details</h5>
                            <h5>Status</h5>

                        </div>


                        <div >
                            {
                                allServiceList.map(allList => <AllServiceList allList={allList}></AllServiceList>)
                            }
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ServiceList;