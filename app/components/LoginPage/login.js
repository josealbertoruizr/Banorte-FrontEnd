"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import styles from './login.module.css';
import Link from 'next/link';
import Image from 'next/image';
import BanorteLogo from '../../images/banorteLogoBlanco.png';




const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter(); // Hook para redirigir

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Limpiar cualquier mensaje de error
        try {
            // Iniciar sesión con Firebase
            await signInWithEmailAndPassword(auth, email, password);
            // Redirigir a otra página (por ejemplo, /dashboard) después del login
            router.push('/dashboard');
        } catch (err) {
            setError('Usuario o contraseña incorrectos');
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <div>
                    <Image src={BanorteLogo} alt="Logo de Banorte" width={600} height={150} />
                </div>

                <h2>Diseñamos soluciones de vida</h2>
                <p>Acompañándote en cada paso para que sigas avanzando</p>
                <button className={styles.readMoreButton}>Conocer más</button>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.login_component}>
                    <h2>¡Bienvenido!</h2>
                    <p>Accede a tu cuenta para seguir</p>
                    {error && <p className={styles.error}>{error}</p>} {/* Mostrar error si lo hay */}
                    <form onSubmit={handleLogin}>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <button type="submit" className={styles.loginButton}>Iniciar Sesión</button>
                        <p>¿No tienes cuenta? <Link href="/register" className={styles.registerLink}>Regístrate aquí</Link></p>
                        <a href="#" className={styles.forgotPassword}>¿Olvidaste tu contraseña?</a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;