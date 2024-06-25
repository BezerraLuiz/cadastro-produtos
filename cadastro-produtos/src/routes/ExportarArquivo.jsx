import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import styles from './styles/ExportarArquivo.module.css'

const ExportarArquivo = () => {
    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/products'); 
                if (response.ok) {
                    const data = await response.json();
                    prepareCsvData(data);
                } else {
                    console.error('Erro ao buscar produtos');
                }
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };fetchProducts();
    }, []);
    
    const prepareCsvData = (data) => {
        const csvArray = data.map(product => ({
            ID: product.id,
            Nome: product.name,
            Preço: product.price,
            Estoque: product.stock,
            Quantidade: product.quantity,
            Descrição: product.description
        }));
        setCsvData(csvArray);
    };

    const handleExport = () => {
        const csv = Papa.unparse(csvData);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'relatorio_produtos.csv');
    };

    return (
        <div>
            <h2>Exportar relatório em CSV</h2>
            <button id={styles.btn} style={{ marginTop: '20px' }} onClick={handleExport}>Exportar CSV</button>
        </div>
    );
};

export default ExportarArquivo;