import { useState } from "react";
import { User, Key, Eye, EyeSlash } from "@phosphor-icons/react";
import PropTypes from "prop-types";

function Login({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userRole = await authenticateUser(username, password);

      if (userRole === "admin" || userRole === "user") {
        // Store user information in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({ username, role: userRole })
        );
        onLogin({ username, role: userRole });
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setError("Invalid username or password.");
    }
  };

  // Replace this function with your actual authentication logic
  const authenticateUser = (username, password) => {
    return new Promise((resolve, reject) => {
      // Replace this with your actual authentication API call or logic
      // Simulating success for demo purposes
      if (
        (username === "admin" && password === "adminpass") ||
        (username === "user" && password === "userpass")
      ) {
        // Simulate different roles for admin and user
        resolve(username === "admin" ? "admin" : "user");
      } else {
        reject(new Error("Invalid username or password"));
      }
    });
  };

  return (
    <>
      <div
        className="bg-center bg-no-repeat bg-cover h-screen w-screen p-0"
        style={{
          backgroundImage: `url('/LoginBG.svg')`,
        }}
      >
        <form
          className="flex items-center justify-center h-full"
          onSubmit={handleSubmit}
        >
          <div
            className="bg-white p-8 rounded-2xl flex flex-col items-center w-[290px] "
            style={{
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src="/TNGCLogo.png"
              alt="TNGC Logo"
              className="w-[110px] h-[120px]"
            />
            {error && (
              <p
                style={{
                  background: "#EC6170",
                  color: "white",
                  fontSize: "12px",
                  marginTop: "2px",
                  padding: "6px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                {error}
              </p>
            )}

            <div className="flex flex-col mb-4">
              <div className="relative flex items-center">
                <User className="absolute left-2 text-blue-500" />
                <input
                  type="text"
                  className="pl-8 p-2 border-b border-gray-400 focus:border-b-2 focus:border-blue-500 outline-none"
                  placeholder="Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className="relative flex items-center mb-1">
                <Key className="absolute left-2 text-blue-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="pl-8 p-2 border-b border-gray-400 focus:border-b-2 focus:border-blue-500 outline-none"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <EyeSlash
                    className="absolute right-2 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <Eye
                    className="absolute right-2 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              <a className="text-xs self-end cursor-pointer hover:text-blue-500">
                Forgot Password?
              </a>
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
