import axios from 'axios'
import { useContext } from 'react'
import './navbar.css'
import { AuthContext } from '../AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Navbar () {
    const navigate = useNavigate()
    const {isLoggedIn, updateLoginStatus} = useContext(AuthContext)

    const logoClick = () => {navigate('/home')}
    const signupClick = () => {navigate('/signup')}
    const loginClick = () => {navigate('/login')}
    const logoutClick = async () => {
        try{
        const response = await axios.get('/logout')
        console.log(response.data.message)
        await updateLoginStatus()
        navigate('/home')
        } catch (error){
            console.error("Error has occured during fetching:", error)
        }
    }

    return (
    <>
    <div className="navbar">
        <div className="menu">
            <div className="logo" onClick={logoClick}>PyDevBlog</div>
            { !isLoggedIn ? (
            <ul className='collection'>
            <li className='icons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M12.471 8.55904C12.6126 8.22154 12.2078 7.93404 11.8682 8.08404C11.1894 8.38199 10.456 8.53525 9.71468 8.53404C6.8084 8.53404 4.45282 6.22571 4.45282 3.37781C4.45176 2.41624 4.72494 1.47432 5.24033 0.662539C5.43755 0.351429 5.20075 -0.0791254 4.83963 0.012541C2.05558 0.722955 0 3.2035 0 6.15419C0 9.65904 2.89933 12.5 6.47645 12.5C9.18481 12.5 11.5043 10.8715 12.471 8.55904Z" fill="#1E1E1E"/>
                </svg>
            </li>
            <li onClick={signupClick} className='logging'>Sign Up</li>
            <li>|</li>
            <li onClick={loginClick} className='logging'>Login</li>
            </ul>) : (
                <ul className='collection'>
                <li className='icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M12.471 8.55904C12.6126 8.22154 12.2078 7.93404 11.8682 8.08404C11.1894 8.38199 10.456 8.53525 9.71468 8.53404C6.8084 8.53404 4.45282 6.22571 4.45282 3.37781C4.45176 2.41624 4.72494 1.47432 5.24033 0.662539C5.43755 0.351429 5.20075 -0.0791254 4.83963 0.012541C2.05558 0.722955 0 3.2035 0 6.15419C0 9.65904 2.89933 12.5 6.47645 12.5C9.18481 12.5 11.5043 10.8715 12.471 8.55904Z" fill="#1E1E1E"/>
                    </svg>
                </li>
                <li className='icons'>
                    <svg onClick={()=>{navigate("/bookmarks")}} xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                    <path d="M3.01384 12.6458L3.01292 12.6453C2.94909 12.609 2.89552 12.556 2.85802 12.4913C2.82054 12.4267 2.80058 12.3529 2.80041 12.2775V1.68278H2.80049L2.80034 1.67609C2.79242 1.32083 2.92332 0.977332 3.16367 0.719923C3.40277 0.463859 3.7309 0.313533 4.07727 0.3H10.9227C11.2691 0.313533 11.5972 0.463859 11.8363 0.719923C12.0767 0.977332 12.2076 1.32083 12.1997 1.67609L12.1996 1.67609V1.68278V12.2768C12.199 12.3508 12.1793 12.4233 12.1427 12.4869C12.106 12.5507 12.0537 12.6033 11.9912 12.6398L12.1425 12.8989L11.9912 12.6398C11.9284 12.6765 11.8574 12.6956 11.7854 12.6956C11.7133 12.6956 11.6423 12.6765 11.5795 12.6398L11.5773 12.6385L7.52763 10.3202L7.37411 10.2323L7.2229 10.3241L3.41607 12.6352L3.41605 12.6352L3.41227 12.6376C3.35138 12.6758 3.28201 12.6972 3.21095 12.7C3.14201 12.699 3.07423 12.6804 3.01384 12.6458Z" fill="#1E1E1E" stroke="white" stroke-width="0.6"/>
                    <path d="M0.513836 14.6458L0.512915 14.6453C0.449087 14.609 0.395516 14.556 0.358019 14.4913C0.320545 14.4267 0.30058 14.3529 0.300414 14.2775V3.68278H0.300489L0.30034 3.67609C0.29242 3.32083 0.423315 2.97733 0.663672 2.71992C0.902772 2.46386 1.2309 2.31353 1.57727 2.3H8.42273C8.7691 2.31353 9.09723 2.46386 9.33633 2.71992C9.57668 2.97733 9.70758 3.32083 9.69966 3.67609L9.69958 3.67609V3.68278V14.2768C9.699 14.3508 9.67933 14.4233 9.64275 14.4869C9.60604 14.5507 9.55369 14.6033 9.49122 14.6398L9.64247 14.8989L9.49122 14.6398C9.42841 14.6765 9.35742 14.6956 9.28536 14.6956C9.21329 14.6956 9.14231 14.6765 9.07951 14.6398L9.07729 14.6385L5.02763 12.3202L4.87411 12.2323L4.7229 12.3241L0.916069 14.6352L0.916052 14.6352L0.912265 14.6376C0.851379 14.6758 0.782008 14.6972 0.710949 14.7C0.642009 14.699 0.574226 14.6804 0.513836 14.6458Z" fill="#1E1E1E" stroke="white" stroke-width="0.6"/>
                    </svg>
                </li>
                <li className='logging submenu-holder'>Account
                    <ul className='submenu'>
                        <li  className='submenu-item'>Settings</li>
                        <li className='submenu-item' onClick={logoutClick}>Logout</li>
                    </ul>
                </li>
                </ul>
            )
            }
        </div>
    </div>
    </>    
    )
}