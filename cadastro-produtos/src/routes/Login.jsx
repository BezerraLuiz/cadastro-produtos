import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './styles/Login.module.css';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const dadosEnviar = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const retorno = await axios.get(`http://localhost:5000/users?username=${usuario}`);

      const users = retorno.data;

      if (users.length === 0) {
        setError('Usuário não encontrado.');
        return;
      }

      users.forEach(user => {
        if (user.senha != senha && user.usuario != usuario) {
          setError('Senha Incorreta!');
          return;
        }
      });

      // Redirecionar para a página inicial
      var usuarioAtual = usuario;
      navigate('/');
    } catch (error) {
      setError('Erro ao tentar fazer login.');
    }
  };

  return (
    <>
      <div id={styles.container_background}>
        <div id={styles.container_main}>
          <div style={{ borderRadius: '10px', padding: '100px', backgroundColor: '#2f6d31' }}>
            <h1 style={{ color: '#fff', marginBottom: '50px' }}>LOGIN</h1>
            <form className={styles.form_login} onSubmit={dadosEnviar}>
              <div className={styles.form_login}>
                <label className={styles.label_input} htmlFor="username">Nome de Usuário</label>
                <input
                  className={styles.input_form}
                  type="text"
                  id="username"
                  autoComplete="off"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  required
                />
              </div>
              <div className={styles.form_login}>
                <label className={styles.label_input} htmlFor="password">Senha</label>
                <input
                  className={styles.input_form}
                  id={styles.input_pass}
                  type="password"
                  autoComplete="off"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>
              <button type="submit" id={styles.btn_entrar}>Entrar</button>
            </form>
            <div id={styles.container_nao_conta}>
              <label style={{ color: 'white' }} htmlFor="">Não tem conta?</label>
              <Link style={{ color: 'white' }} to={`/registrar`}>Crie sua conta</Link>
            </div>
          </div>
          <div id={styles.mensagem_container}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
