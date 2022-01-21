import React, { useEffect, useState } from 'react';
import ServiceAdmin from './ServiceAdmin';
import PersonIcon from '@mui/icons-material/Person'
import SidebarRow from '../SidebarRow';
import './Admin.css'
import Modal from 'react-modal/lib/components/Modal';
function Admin() {

    const [users, setUsers] = useState([])
    const [groups, setGroups] = useState([])
    const [open, setOpen] = useState(false)
    const [nbGroups, setNbGroups] = useState(0)

    const customStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%,50%)',
        },
    };
    const last_min = (e) => {
        ServiceAdmin.last_min().catch(err => alert(err))
    }

    const last_max = (e) => {
        ServiceAdmin.last_max().catch(err => alert(err))
    }
    const cree_groupes_mod = (e) => {
        setOpen(true)
    }

    const cree_groupes = (e) => {
        ServiceAdmin.cree_groups(nbGroups).then(() => setOpen(false)).catch(err => alert(err))
    }

    useEffect(() => {
        Modal.setAppElement('body')
    }, [])
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
            <Modal isOpen={open} onRequestClose={() => setOpen(false)} style={customStyle}>
                <form>
                    <label>Nombre de Groupe :</label>
                    <input type="number" onChange={e => setNbGroups(e.target.value)} />
                    <button type='button' onClick={e => cree_groupes(e)}>Crée</button>
                </form>
            </Modal>
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
            <div>
                <button type="button" onClick={e => last_min(e)}>LAST_MIN</button>
                <button type="button" onClick={e => last_max(e)}>LAST_MAX</button>
                <button type="button" onClick={e => cree_groupes_mod(e)}>Créer des groupes</button>
            </div>
        </div>
    );
}

export default Admin;
