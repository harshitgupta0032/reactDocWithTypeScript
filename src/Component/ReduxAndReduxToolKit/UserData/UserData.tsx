import { useState } from "react";
import UserFormModle from "./UserFormModle";
import UserList from "./UserList";

const UserData = () => {
    const [addUserStatus, setAddUserStatus] = useState<boolean>(false);

    const HandleFormModle = () => {
        setAddUserStatus(!addUserStatus);
    }

    return <div className="w-full flex flex-col">
        <div className="pl-5 py-4">
            <button className="w-fit h-fit bg-slate-500 hover:bg-slate-600 active:bg-slate-900 text-white px-4 py-2 rounded-md" onClick={HandleFormModle}>{addUserStatus ? "cancle" : " + Add User"}</button>
        </div>
        
        {addUserStatus && <UserFormModle HandleFormModle={HandleFormModle} />}

        {!addUserStatus && <UserList />}

    </div>
}

export default UserData;