import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface LoginProps {
    adminLoginOnClick: () => void;
}

/**
 * Login Component: A modal overlay for admin authentication.
 * Uses local state for input tracking and global AuthContext for signing in.
 */
function Login({ adminLoginOnClick }: LoginProps) {
    // Local state for tracking form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Access global sign-in method from context
    const { signIn } = useAuth();

    // Handles the login submission
    const handleLogin = async () => {
        try {
            await signIn(email, password);
            adminLoginOnClick(); // Close the login modal overlay on successful sign-in
        } catch (error) {
            console.error("Login failed:", error);
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center absolute backdrop-blur-xs z-50">
            {/* Login Form Card */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <div className="flex flex-row justify-between">
                    <h1 className="text-xl font-bold">Login</h1>
                    {/* Close Button */}
                    <button className="btn btn-square" onClick={adminLoginOnClick}>X</button>
                </div>
                <p>For admins only</p>
                
                {/* Email Input */}
                <label className="label">Email</label>
                <input 
                    type="email" 
                    className="input" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password Input */}
                <label className="label">Password</label>
                <input 
                    type="password" 
                    className="input" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Submit Button */}
                <button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button>
            </fieldset>
        </div>
    )
}

export default Login;
