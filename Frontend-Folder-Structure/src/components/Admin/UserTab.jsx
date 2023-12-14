import React, { useEffect, useState } from "react";
import "./UserTab.css";
import { UserRow } from "..";
import userDataService from '@/services/userDataServices';
import search from '../../assets/search.png';
import cavet from '../../assets/cavet.png';
import Pagination from '@mui/material/Pagination';

const UserTab = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await userDataService.findAll();
                setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className='UserTab'>
            <div className='search-section'>
                <div className="search-area">
                    <div className="text-wrapper">Search</div>
                    <img className="search-icon-instance" src={search} />
                </div>                    
                <div className="gr-dropdown">
                    <div className="filter-text">Reported times</div>
                    <img className="caret-icon" src={cavet} />
                </div>
            </div>
            
            <div className="overlap-5">
                <div className="table-head row">
                    <div className="col-1"></div>
                    <div className="text-wrapper-27 col-3">User name</div>
                    <div className="text-wrapper-27 col">Name</div>
                    <div className="text-wrapper-27 col">Reported times</div>
                    <div className="text-wrapper-27 col">Registration Date</div>
                    <div className="col"></div>
                </div>
                <div className="table-user">
                    {users.map(user => (
                        <UserRow key={user.id} user={user} />
                    ))}
                </div>
                
            </div>
            <div className="pagination-section">
                <Pagination count={10} variant="outlined" color="primary" size="large" />
            </div>
        </div>
    );
};

export default UserTab;