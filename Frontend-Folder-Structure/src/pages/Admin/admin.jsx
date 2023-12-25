import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
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
import { UserTab } from '@/components';
import { CategoryTab } from '@/components';
import { useAuth } from '../../AuthContext';


const Admin = () => {
    
    const [activeGroup, setActiveGroup] = useState(null);

    const handleGroupClick = (group) => {
        setActiveGroup(group);
    };
    const navigate = useNavigate();
    const { setSignin } = useAuth();
    const handleSignOut = () => {
        localStorage.removeItem('AUTH_TOKEN');
        localStorage.removeItem('LOGINID');
        localStorage.removeItem('AVT');
        setSignin(false);
        navigate('/');
    }

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
                <div className="group-13 row" onClick={handleSignOut}>
                    <img className="sign-out-squre col-md-auto" src={signout} />
                    <div className="text-wrapper-30 col">Log out</div>
                </div>
            </div>
            <div className='spare-space'>
                {activeGroup === 'users' && <UserTab />}
                {activeGroup === 'categories' && <CategoryTab />}
                {/* Add new tab here */}
            </div>

        </div>
    );
};

export default Admin;
