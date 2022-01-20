import React from 'react';
import { Icon } from '@material-ui/core'
import './SidebarRow.css'
function SidebarRow({ src, icon, titre }) {
    return (
        <div className="SidebarRow">
            {Icon && <Icon />}
            <h4>{titre}</h4>
        </div>
    );
}

export default SidebarRow;
