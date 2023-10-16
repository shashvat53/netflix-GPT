import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Logo } from "../utils/constant";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/browse");
        // console.log(" user add");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // console.log(" user remove");
        // ...
      }
    });
    // Unsubscribe when components unmounts
    return () => unsubscribe();
  }, []);

  // const dispatch = useDispatch();
  const User = useSelector((store) => store.user);
  // console.log(User);
  useNowPlayingMovies();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className=" absolute w-full bg-gradient-to-b from-black flex items-center justify-between z-10 ">
      <img src={Logo} alt="logo" className="w-[250px] " />
      {/* {user && <h1 className="text-white text-2xl">{user.email}</h1>} */}

      {User && (
        <div className="flex items-center gap-[16px] pr-4">
          <h1 className="text-white text- xl">Hii, {User.email}</h1>

          <button
            onClick={handleSignout}
            className="text-lg font-semibold p-[4px_18px] text-white hover:bg-[#E50914] border border-1px rounded"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
// bg-gradient-to-b from-black
