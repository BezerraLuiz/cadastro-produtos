import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditarProduto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        id: '',
        name: '',
        price: '',
        stock: '',
        quantity: '',
        category: '',
        description: ''
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:5000/products/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data);
                } else {
                    console.error('Erro ao buscar produto');
                }
            } catch (error) {
                console.error('Erro ao buscar produto:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            if (response.ok) {
                console.log('Produto atualizado com sucesso');
                navigate('/'); 
            } else {
                console.error('Erro ao atualizar produto');
            }
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
        }
    };

    return (
        <div>
            <h2>Editar Produto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Preço:</label>
                    <input
                        type="text"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Estoque:</label>
                    <input
                        type="text"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div>
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
                <div>
                    <label>Descrição:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit">Atualizar</button>
                </div>
              
            </form>
        </div>
    );
};

export default EditarProduto;