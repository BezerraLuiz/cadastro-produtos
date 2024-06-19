import styles from './styles/Registrar.module.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function Registrar() {

  return (
    <>
      <div id={styles.container_background}> {/** Definir cor do background */}
        <div id={styles.container_main}>
          <div style={{ borderRadius: '10px', padding: '100px', backgroundColor: '#2f6d31' }}>
            <h1 style={{ color: '#fff', marginBottom: '50px' }}>Registrar</h1>
            <form className='form-login' action="">
              <div className={styles.form_login}>
                <label className={styles.label_input} htmlFor="">Nome de Usuário</label>
                <input className={styles.input_form} type="text"/>
              </div>
              <div className={styles.form_login}>
                <label className={styles.label_input} htmlFor="">Senha</label>
                <input className={styles.input_form} type="password"/>
              </div>
              <div className={styles.form_login}>
                <label className={styles.label_input} htmlFor="">Repetir Senha</label>
                <input className={styles.input_form} id={styles.input_pass} type="password" />
              </div>
              <button id={styles.btn_registrar}><Link style={{ textDecoration: 'none', color: 'black'}} to={`/login`}>Registrar</Link></button>
            </form>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Registrar