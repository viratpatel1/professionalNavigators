"use client";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isLogin) {
            // Handle login logic
            router.push("/");
            console.log("Logging in with:", email, password);
        } else {
            // Handle registration logic
            console.log("Registering:", name, email, password);
        }
    };

    return (
        <>
            <Head>
                <title>{isLogin ? "Login" : "Register"}</title>
            </Head>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                        <Image
                            src="/images/Professional.jpg"
                            alt="Professional Logo"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                    </div>

                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
                        {isLogin ? "Login" : "Create Account"}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"
                                    required
                                />
                            </div>
                        )}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
                        >
                            {isLogin ? "Login" : "Register"}
                        </button>
                    </form>

                    {/* Toggle link */}
                    <p className="mt-4 text-center text-sm text-gray-600">
                        {isLogin ? (
                            <>
                                Don&apos;t have an account?{" "}
                                <button
                                    onClick={() => setIsLogin(false)}
                                    className="text-red-600 font-semibold hover:underline"
                                >
                                    Register here
                                </button>
                            </>
                        ) : (
                            <>
                                Already have an account?{" "}
                                <button
                                    onClick={() => setIsLogin(true)}
                                    className="text-red-600 font-semibold hover:underline"
                                >
                                    Sign In
                                </button>
                            </>
                        )}
                    </p>
                </div>
            </div>
        </>
    );
}
