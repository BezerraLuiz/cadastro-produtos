import React, { useState, useEffect } from 'react';
import styles from './styles/CadastroProduto.module.css'


function CadastroProduto() {
    const [product, setProduct] = useState({
        id: '',
        name: '',
        price: '',
        stock: '',
        quantity: '',
        category: '',
        description: ''
    }); 

    const [products, setProducts] = useState([]);
    const url = "http://localhost:5000/products";

    useEffect(() => {
        const getProductsList = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Erro ao buscar lista de produtos:", error);
            }
        };
        getProductsList();
    }, []);

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Produto cadastrado:', product);

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            setProducts([...products, data]);

            setProduct({
                id: '',
                name: '',
                price: '',
                stock: '',
                quantity: '',
                category: '',
                description: ''
            });
        } catch (error) {
            console.error("Erro ao cadastrar produto:", error);
        }
    };

    return(
      
        <div className={styles.container}>
            <h2 style={{ marginBottom: '20px' }}>Cadastrar Produto</h2>
            <form onSubmit={handleSubmit}/>
                <div className={styles['form-group']}>
                    <label>ID:</label>
                    <input
                       type='text'
                       name='id'
                       value={product.id}
                       onChange={handleChange} 
                    />
                </div>
            <form onSubmit={handleSubmit}>
                <div className={styles['form-group']}>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles['form-group']}>
                    <label>Preço:</label>
                    <input
                        type="text"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles['form-group']}>
                    <label>Estoque:</label>
                     <input
                        type="text"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles['form-group']}>
                    <label>Quantidade:</label>
                    <input
                        type='number'
                        name='quantity'
                        value={product.quantity}
                        onChange={handleChange}
                        />
                </div>
                <div className={styles['form-group']}>
                    <label>Categoria:</label>
                    <select name='category' value={product.category} onChange={handleChange}>
                        <option value='' disabled>Selecione uma categoria</option>
                        <option value='alimento'>Alimento</option>
                        <option value='eletronico'>Eletrônico</option>
                        <option value='saude'>Saúde</option>
                        <option value='vestuario'>Vestuário</option>
                        <option value='brinquedo'>Brinquedo</option>
                        <option value='livro'>Livro</option>
                        <option value='jogo'>Jogo</option>
                        <option value='automotivo'>Automotivo</option>
                        <option value='beleza'>Beleza</option>
                        <option value='esporte'>Esporte</option>

                    </select>
                </div>
                     
                    <div className={styles['form-group']} >
                    <label>Descrição:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button className={styles.btn} style={{ marginTop: '20px' }} type="submit" onClick={handleSubmit}>Cadastrar</button>
            </form>
        
        </div>
        );
    };
    
export default CadastroProduto;
