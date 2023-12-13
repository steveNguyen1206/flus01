import React, { useState, useEffect } from 'react';
import './admin.css';
import admin_dashboard from '../../assets/Admin/admin_dashboard.png';
import admin_users from '../../assets/Admin/admin_users.png';
import admin_comment_star from '../../assets/Admin/admin_comment_star.png';
import admin_post from '../../assets/Admin/admin_post.png';
import admin_project from '../../assets/Admin/admin_project.png';
import admin_category from '../../assets/Admin/admin_category.png';
import signout from '../../assets/signout.png';
import admin_dashboard_white from '../../assets/Admin/admin_dashboard_white.png';
import admin_users_white from '../../assets/Admin/admin_users_white.png';
import admin_comment_star_white from '../../assets/Admin/admin_comment_star_white.png';
import admin_post_white from '../../assets/Admin/admin_post_white.png';
import admin_project_white from '../../assets/Admin/admin_project_white.png';
import admin_category_white from '../../assets/Admin/admin_category_white.png';
import search from '../../assets/search.png';
import cavet from '../../assets/cavet.png';
import { UserRow } from '@/components';

const Admin = () => {
    
    const [activeGroup, setActiveGroup] = useState(null);

    const handleGroupClick = (group) => {
        setActiveGroup(group);
    };

    return (
        <div className="user-management">
            <div className="group-12">
                <div className="overlap-8">
                    <div className="frame">
                        <div
                            className={`group-14 row ${activeGroup === 'dashboard' ? 'active-container' : ''}`}
                            onClick={() => handleGroupClick('dashboard')}
                        >
                            <img className="image-2 col-md-auto" alt="Image" src={activeGroup === 'dashboard' ? admin_dashboard_white : admin_dashboard} />
                            <div className={`text-wrapper-31 col ${activeGroup === 'dashboard' ? 'text-wrapper-active' : ''}`}>
                                Dashboard
                            </div>
                        </div>
                        <div
                            className={`group-14 row ${activeGroup === 'users' ? 'active-container' : ''}`}
                            onClick={() => handleGroupClick('users')}
                        >
                            <img className="image-2 col-md-auto" alt="Image" src={activeGroup === 'users' ? admin_users_white : admin_users} />
                            <div className={`text-wrapper-31 col ${activeGroup === 'users' ? 'text-wrapper-active' : ''}`}>
                                Users
                            </div>
                        </div>
                        <div
                            className={`group-14 row ${activeGroup === 'projects' ? 'active-container' : ''}`}
                            onClick={() => handleGroupClick('projects')}
                        >
                            <img className="image-2 col-md-auto" alt="Image" src={activeGroup === 'projects' ? admin_project_white : admin_project} />
                            <div className={`text-wrapper-31 col ${activeGroup === 'projects' ? 'text-wrapper-active' : ''}`}>
                                Projects
                            </div>
                        </div>
                        <div
                            className={`group-14 row ${activeGroup === 'posts' ? 'active-container' : ''}`}
                            onClick={() => handleGroupClick('posts')}
                        >
                            <img className="image-2 col-md-auto" alt="Image" src={activeGroup === 'posts' ? admin_post_white : admin_post} />
                            <div className={`text-wrapper-31 col ${activeGroup === 'posts' ? 'text-wrapper-active' : ''}`}>
                                Posts
                            </div>
                        </div>
                        <div
                            className={`group-14 row ${activeGroup === 'comments' ? 'active-container' : ''}`}
                            onClick={() => handleGroupClick('comments')}
                        >
                            <img className="image-2 col-md-auto" alt="Image" src={activeGroup === 'comments' ? admin_comment_star_white : admin_comment_star} />
                            <div className={`text-wrapper-31 col ${activeGroup === 'comments' ? 'text-wrapper-active' : ''}`}>
                                Comments and ratings
                            </div>
                        </div>
                        <div
                            className={`group-14 row ${activeGroup === 'categories' ? 'active-container' : ''}`}
                            onClick={() => handleGroupClick('categories')}
                        >
                            <img className="image-2 col-md-auto" alt="Image" src={activeGroup === 'categories' ? admin_category_white : admin_category} />
                            <div className={`text-wrapper-31 col ${activeGroup === 'categories' ? 'text-wrapper-active' : ''}`}>
                                Categories
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-13 row">
                    <img className="sign-out-squre col-md-auto" src={signout} />
                    <div className="text-wrapper-30 col">Log out</div>
                </div>
            </div>
            <div className='spare-space'>
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
                            <div className="text-wrapper-27 col">User name</div>
                            <div className="text-wrapper-27 col">Name</div>
                            <div className="text-wrapper-27 col">Reported times</div>
                            <div className="text-wrapper-27 col">Registration Date</div>
                        </div>
                        <div className="table-user">
                            <UserRow/>
                            <UserRow/>
                        </div>
                        
                    </div>
                
                    
                </div>
            </div>
            
        </div>
    );
};

export default Admin;
