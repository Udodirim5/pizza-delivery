import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, clearUser } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../cart/cartSlice";

const Username = () => {
  const username = useSelector(getUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  if (!username) return null;

  const handleClearUsername = (e) => {
    e.preventDefault();
    dispatch(clearUser());
    dispatch(clearCart());
    navigate("/");
  }

  return (
    <div 
      className="relative hidden text-sm font-semibold md:block "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {username}

      {isHovered && (
        <button
          className="absolute right-0 top-4 mt-1 px-2 py-1 text-xs bg-red-500 text-white rounded shadow-md hover:bg-red-600"
          onClick={handleClearUsername}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Username;
