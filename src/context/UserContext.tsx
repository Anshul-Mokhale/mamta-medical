import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Define the shape of the user data
interface User {
    email: string;
    token: string;
    name: string;
}

interface Register {
    name: string;
    email: string;
    phone: string;
    password: string;
}

// Define the shape of the context value
interface UserContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<{ status: string, message?: string, name?: string }>;
    register: (name: string, email: string, phone: string, password: string) => Promise<{ status: string, message?: string }>;
    logout: () => void;
}

// Create the UserContext with default values
const UserContext = createContext<UserContextType | undefined>(undefined);

// UserProvider component to wrap around the app
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Load user data from localStorage if available
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (email: string, password: string): Promise<{ status: string, message?: string, name?: string }> => {
        try {
            const response = await fetch('https://mamtamedical4u.great-site.net/login/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.status === 'ok') {
                const name = data.name;
                const user = { email, token: 'fake-jwt-token', name }; // Adjust token handling based on your actual response
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                setError(null);
                return data;
            } else {
                setError(data.message || 'Invalid email or password');
                return data;
            }
        } catch (error: any) {
            // setError(error.message || 'An error occurred during login');
            return { status: 'error', message: error.message || 'An error occurred during login' };
        }
    };

    const register = async (name: string, email: string, phone: string, password: string): Promise<{ status: string, message?: string }> => {
        try {
            const response = await fetch('https://mamtamedical4u.great-site.net/register/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, phone, password }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.status === 'ok') {
                const user = { email, token: 'fake-jwt-token', name }; // Adjust token handling based on your actual response
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('newRegister', 'ok');
                setError(null);
                return data;
            } else {
                setError(data.message || 'Registration failed');
                return data;
            }
        } catch (error: any) {
            // setError(error.message || 'An error occurred during registration');
            return { status: 'error', message: error.message || 'An error occurred during registration' };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
