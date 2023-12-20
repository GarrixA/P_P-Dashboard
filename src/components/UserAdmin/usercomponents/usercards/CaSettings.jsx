import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// usercomponents
const CaSettings = () => {
  const [existingPassword, setExistingPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = async () => {
    try {
      let token = localStorage.getItem("token");
      console.log(token);
      const response = await axios({
        url: "https://smart-parking-api-3g3e.onrender.com/parking/password/changepassword",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          existingPassword,
          newPassword,
        },
      });

      setMessage(response.data.message);
      toast.success(response.data.message);
    } catch (error) {
      setMessage(response.data.message);
      console.error(error);
    }
  };

  return (
    <>
      <div className="absolute top-24 left-0 flex justify-center bg-[#252525]bg-opacity-10 backdrop-blur-sm p-4 w-full h-screen">
        <div className="bg-white h-1/2 w-1/3 flex flex-col m-2 rounded-xl overflow-hidden mt-10">
          <h1 className="bg-slate-500 text-center py-2 text-white font-bold text-xl">
            Change Password
          </h1>
          <form
            className="flex flex-col px-2 text-black bg-white h-full ml-4 mr-16"
          >
            <label className="mt-4">Existing Password</label>
            <input
              className="p-1 rounded border border-slate-400"
              type="password"
              value={existingPassword}
              onChange={(e) => setExistingPassword(e.target.value)}
              placeholder="eg: 123"
            />
            <label className="mt-4">New Password</label>
            <input
              className="p-1 rounded border border-slate-400"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="eg: 15"
            />
            <button
              onClick={handleChangePassword}
              type="button"
              className="mt-4 bg-[#0C7489] rounded-xl text-xl font-bold text-white"
            >
              change
            </button>
            <div>{message && <p>{message}</p>}</div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default CaSettings;
