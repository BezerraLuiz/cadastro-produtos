import styles from './styles/Registrar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function Registrar() {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigate = useNavigate();

  const dadosEnviar = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (senha != confirmarSenha) {
      setError('Senhas não iguais.');
      return;
    }

    try {
      const retornoUsuarioExistente = await axios.get(`http://localhost:5000/users?usuario=${usuario}`);
      const usuariosExistentes = retornoUsuarioExistente.data;

      if (usuariosExistentes.length > 0) {
        setError('Usuário já existe. Escolha outro nome de usuário.');
        return;
      }

      const retornoNovoUsuario = await axios.post('http://localhost:5000/users', {
        usuario,
        senha,
      });

      if (retornoNovoUsuario.status === 201) {
        setSuccess('Usuário registrado com sucesso!');
        setTimeout(() => {
          navigate('/login');          
        }, 300);
      }
    } catch (error) {
      setError('Erro ao registrar usuário.');
    }
  };

  return (
    <>
      <div id={styles.container_background}> {/** Definir cor do background */}
        <div id={styles.container_main}>
          <div style={{ borderRadius: '10px', padding: '100px', backgroundColor: '#2f6d31' }}>
            <h1 style={{ color: '#fff', marginBottom: '50px' }}>Registrar</h1>
            <form className='form-login' action="" onSubmit={dadosEnviar}>
              <div className={styles.form_login}>
                <label className={styles.label_input} htmlFor="">Nome de Usuário</label>
                <input className={styles.input_form} type="text" autoComplete='none' value={usuario} onChange={(e) => setUsuario(e.target.value)} required/>
              </div>
              <div className={styles.form_login}>
                <label className={styles.label_input} htmlFor="">Senha</label>
                <input className={styles.input_form} autoComplete='none' type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
              </div>
              <div className={styles.form_login}>
                <label className={styles.label_input} htmlFor="">Repetir Senha</label>
                <input className={styles.input_form} autoComplete='none' id={styles.input_pass} type="password" onChange={(e) => setConfirmarSenha(e.target.value)} required/>
              </div>
              <button id={styles.btn_registrar}>Registrar</button>
            </form>
          </div>
        </div>
        <div id={styles.mensagem_container}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'white' }}>{success}</p>}
        </div>
      </div>
    </>
  )
}

export default Registrar