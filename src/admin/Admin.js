import React, { useEffect, useState } from 'react';
import ServiceAdmin from './ServiceAdmin';
import PersonIcon from '@mui/icons-material/Person'
import SidebarRow from '../SidebarRow';
import './Admin.css'
function Admin() {

    const [users, setUsers] = useState([])
    const [groups, setGroups] = useState([])

    const last_min = (e) => {
        ServiceAdmin.last_min().catch(err => alert(err))
    }

    const last_max = (e) => {
        ServiceAdmin.last_max().catch(err => alert(err))
    }

    useEffect(() => {
        ServiceAdmin.getAllUsers().then(response => {
            setUsers([response.data])
        }).catch(err => alert(err))
        ServiceAdmin.getAllGroups().then(response => {
            setGroups([response.data])
        }).catch(err => alert(err))
    });
    return (
        <div className="Admin">
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
                                <p>{grp.capacite}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <button type="button" onClick={e => last_min(e)}>LAST_MIN</button>
                <button type="button" onClick={e => last_max(e)}>LAST_MAX</button>
            </div>
        </div>
    );
}

export default Admin;
