import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VisualizacaoProdutos = () => {
    const [products, setProducts] = useState([]);
    const url = 'http://localhost:3000/products';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else {
                    console.error('Erro ao buscar produtos');
                }
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) {
                throw new Error(`Erro! status: ${res.status}`);
            }
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error("Erro ao deletar produto:", error);
        }
    };

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque</th>
                        <th>Quantidade</th>
                        <th>Categoria</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.quantity}</td>
                            <td>{product.category}</td>
                            <td>{product.description}</td>
                            <td>
                                <Link to={`/editar/${product.id}`}>
                                    <button>Editar</button>
                                </Link>
                                <button onClick={() => handleDelete(product.id)}>
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VisualizacaoProdutos;