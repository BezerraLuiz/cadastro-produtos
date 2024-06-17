import React from 'react';

const FiltragemCategoria = ({ categorias, categoriaSelecionada, onCategoriaChange }) => {
    return (
        <div>
            <label htmlFor="categoria">Filtrar por Categoria:</label>
            <select id="categoria" value={categoriaSelecionada} onChange={(e) => onCategoriaChange(e.target.value)}>
                <option value="">Todas</option>
                {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>
                        {categoria}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FiltragemCategoria;