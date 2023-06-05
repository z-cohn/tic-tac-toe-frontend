import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async() => {
            try {
                await refresh();
            } catch (err) {
                console.error(err);
            } finally {
                /* Helps avoid infinite loop */
                isMounted && setIsLoading(false)
            }
        }

        auth?.accessToken ? setIsLoading(false) : verifyRefreshToken();

        return () => isMounted = false;
    },[])

    return (
        <>
            { isLoading ? <p>Loading...</p> : <Outlet /> }
        </>
    )
}

export default PersistLogin;
