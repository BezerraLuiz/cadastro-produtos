import React, { useState, useEffect } from 'react';

function FiltragemCategoria() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/products');
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

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <div>
            <h2>Filtrar por Categoria</h2>
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value=''>Todas as Categorias</option>
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

            <h3>Lista de Produtos</h3>
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
                    </tr>
                </thead>
           <tbody>
                {filteredProducts.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.quantity}</td>
                            <td>{product.category}</td>
                            <td>{product.description}</td>
                            </tr>
                ))}
            </tbody>        
            </table>
            </div>
    );
}

export default FiltragemCategoria;