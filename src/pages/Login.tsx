interface LoginProps {
    adminLoginOnClick: () => void;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    handleSignIn: () => void;
}

function Login( {adminLoginOnClick, setEmail, setPassword, handleSignIn}: LoginProps ) {

    return (
        <div className = "min-h-screen w-full flex items-center justify-center absolute backdrop-blur-xs">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <div className="flex flex-row justify-between">
                    <h1 className="text-xl font-bold">Login</h1>
                    <button className="btn btn-square" onClick={adminLoginOnClick}>X</button>
                </div>
                <p>For admins only</p>
                <label className="label">Email</label>
                <input 
                    type="email" 
                    className="input" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="label">Password</label>
                <input 
                    type="password" 
                    className="input" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-neutral mt-4" onClick={handleSignIn}>Login</button>
            </fieldset>
        </div>
    )
}

export default Login;