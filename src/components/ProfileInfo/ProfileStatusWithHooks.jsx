import React, {useEffect, useState} from 'react';


const ProfileStatusWitHooks = (props) => {
    let [editMode, setEditMode] = useState(false);

    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
        props.updateStatus(status)
    }

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true}
                           onChange={onStatusChange}
                           onBlur={deactivateEditMode}
                           value={status}
                           />
                </div>
            }
        </>
    )

}

export default ProfileStatusWitHooks;