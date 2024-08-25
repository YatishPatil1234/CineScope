import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase"; // Ensure correct path to your firebase config

const Login = ({ setUser }) => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem("userName", user.displayName);
      setUser(user.displayName); // Store the display name in the state
      console.log("User signed in:", user.displayName);
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded "
        >
          Sign in with Google
        </button>
      </div>
    </>
  );
};

export default Login;
