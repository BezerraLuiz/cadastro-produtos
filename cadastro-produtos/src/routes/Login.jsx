import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Login.module.css'

const Login = () => {
  
  return (
    <>
      <div id={styles.container_background}>
        <div id={styles.container_main}>
          <div style={{ borderRadius: '10px', padding: '100px', backgroundColor: '#2f6d31' }}>
            <h1 style={{ color: '#fff', marginBottom: '50px' }}>LOGIN</h1>
            <form className={styles.form_login} action="">
              <div className={styles.form_login}>
                <label className={styles.label_input} htmlFor="">Nome de Usu�rio</label>
                <input className={styles.input_form} type="text" autoComplete="none"/>
              </div>
              <div className={styles.form_login}>
                <label className={styles.label_input} htmlFor="">Senha</label>
                <input className={styles.input_form} id={styles.input_pass} type="password" autoComplete="none"/>
              </div>
            </form>
            <button id={styles.btn_entrar}>Entrar</button>
            <div id={styles.container_nao_conta}>
              <label style={{ color: 'white' }} htmlFor="">N�o tem conta?</label>
              <Link style={{ color: 'white' }} to={`/registrar`}>Crie sua conta</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login