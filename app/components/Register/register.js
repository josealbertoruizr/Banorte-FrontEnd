"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import styles from './register.module.css';
import Image from 'next/image';
import BanorteLogo from '../../images/banorteLogoBlanco.png';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        try {
            // Registrar al usuario con Firebase
            await createUserWithEmailAndPassword(auth, email, password);
            // Redirigir al dashboard después del registro exitoso
            router.push('/dashboard');
        } catch (err) {
            setError(err.message); // Muestra el mensaje del error exacto
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <div>
                    <Image src={BanorteLogo} alt="Logo de Banorte" width={600} height={150} />
                </div>
                <h2 className={styles.titulo_cuenta}>Crea tu cuenta</h2>
                <p className={styles.p_cuenta}>Regístrate para acceder a la plataforma</p>
                <form onSubmit={handleRegister}>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.registerButton}>Registrarse</button>
                </form>
                {error && <p className={styles.error}>{error}</p>}
            </div>
        </div>
    );
};

export default RegisterPage;
