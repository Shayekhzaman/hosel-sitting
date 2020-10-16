import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { displayName } = loggedInUser;
    return (
        <div>
            <div style={{ paddingTop: '40px', display: 'flex' }} className="container">
                <img className="img-fluid mr-5" style={{ width: '150px', height: '47px' }} src={logo} alt="" />
                <h5 className="ml-5 mr-auto" style={{ fontWeight: 500, fontSize: '22px', fontStyle: 'poppins' }}>Add Service</h5>
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
                    add service
           </main>
            </div>
        </div>
    );
};

export default AddService;