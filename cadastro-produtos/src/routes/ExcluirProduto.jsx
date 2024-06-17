
//Esse componente será de filtragem mas ainda não alterei 

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ExcluirProduto = () => {
    const { id } = useParams(); // Obtém o ID da URL
    
    const navigate = useNavigate(); // Para redirecionar após a exclusão

    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/products/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setMessage('Produto excluído com sucesso.');
                // Redireciona para a página inicial após a exclusão
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                setMessage('Erro ao excluir o produto.');
            }
        } catch (error) {
            console.error('Erro ao excluir o produto:', error);
            setMessage('Erro ao excluir o produto.');
        }
    };

    return (
        <div>
            <h2>Excluir Produto</h2>
            <p>Excluir o produto com ID {id}?</p>
            <button onClick={handleDelete}>Excluir</button>
           
        </div>
    );
};

export default ExcluirProduto;