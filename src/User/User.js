import React, { useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person'
import SidebarRow from '../SidebarRow';
import './User.css'
import ServiceUser from './ServiceUser';

function User() {

    const [users, setUsers] = useState([])
    const [groups, setGroups] = useState([])

    useEffect(() => {
        ServiceUser.getAllUsers().then(response => {
            setUsers([response.data])
        }).catch(err => alert(err))
        ServiceUser.getAllGroups().then(response => {
            setGroups([response.data])
        }).catch(err => alert(err))
    });
    return (
        <div className="user">
            <div className="userssSide">
                {
                    users.map(us => {
                        return (
                            <SidebarRow Icon={PersonIcon} titre={us} />
                        )
                    })
                }
            </div>
            <div className="groupsSide">
                {
                    groups.map(grp => {
                        return (
                            <div>
                                <p>{grp.groupName}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default User;
