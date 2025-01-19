import React, { useState } from 'react';
import './Multas.css';

const Multas = () => {
    const [form, setForm] = useState({
        cantidad: '',
        departamento: '',
        torre: '',
        motivo: ''
    });

    const [pagos, setPagos] = useState([
        { cantidad: '500', departamento: 'Ventas', torre: 'A', motivo: 'Retraso', estado: 'Pendiente' },
        { cantidad: '300', departamento: 'Marketing', torre: 'B', motivo: 'Inasistencia', estado: 'Realizado' },
        { cantidad: '700', departamento: 'TI', torre: 'C', motivo: 'Daños', estado: 'Pendiente' },
        { cantidad: '400', departamento: 'Recursos Humanos', torre: 'D', motivo: 'Tardanza', estado: 'Realizado' },
        { cantidad: '600', departamento: 'Finanzas', torre: 'E', motivo: 'Error en reporte', estado: 'Pendiente' },
        { cantidad: '450', departamento: 'Logística', torre: 'F', motivo: 'Retraso en entrega', estado: 'Pendiente' },
        { cantidad: '350', departamento: 'Operaciones', torre: 'G', motivo: 'Ausencia', estado: 'Realizado' },
        { cantidad: '800', departamento: 'Producción', torre: 'H', motivo: 'Equipo dañado', estado: 'Pendiente' },
        { cantidad: '250', departamento: 'Compras', torre: 'I', motivo: 'Entrega tardía', estado: 'Realizado' },
        { cantidad: '500', departamento: 'Ventas', torre: 'J', motivo: 'Error en proceso', estado: 'Pendiente' },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPagos([...pagos, { ...form, estado: 'Pendiente' }]);
        setForm({
            cantidad: '',
            departamento: '',
            torre: '',
            motivo: ''
        });
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(pagos.length / itemsPerPage)) setCurrentPage(currentPage + 1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = pagos.slice(startIndex, endIndex);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '80px', gap: '50px' }}>
            <form className='form-container' onSubmit={handleSubmit}>
                <h2 className='multas-title'>Registrar Multa</h2>
                <div className='form-group'>
                    <label>Cantidad:</label>
                    <input style={{ width: '100%', backgroundColor: 'white' }}
                        type="number"
                        name="cantidad"
                        value={form.cantidad}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Departamento:</label>
                    <input style={{ width: '100%', backgroundColor: 'white' }}
                        type="text"
                        name="departamento"
                        value={form.departamento}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Torre:</label>
                    <input style={{ width: '100%', backgroundColor: 'white' }}
                        type="text"
                        name="torre"
                        value={form.torre}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Motivo:</label>
                    <input style={{ width: '100%', height: '100px', backgroundColor: 'white' }}
                        type="text"
                        name="motivo"
                        value={form.motivo}
                        onChange={handleChange}
                    />
                </div>
                <button className='submit-button' type="submit">Crear Multa</button>
            </form>
            <div className='table-container'>
                <h2 className='multas-title'>Historial de Multas</h2>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Departamento</th>
                            <th>Torre</th>
                            <th>Motivo</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((pago, index) => (
                            <tr key={index}>
                                <td>{pago.cantidad}</td>
                                <td>{pago.departamento}</td>
                                <td>{pago.torre}</td>
                                <td>{pago.motivo}</td>
                                <td>{pago.estado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='pagination-container'>
                    <button className='pagination-button' onClick={handlePrevPage} disabled={currentPage === 1}>
                        Anterior
                    </button>
                    <span className='pagination-info'>Página {currentPage} de {Math.ceil(pagos.length / itemsPerPage)}</span>
                    <button className='pagination-button' onClick={handleNextPage} disabled={currentPage === Math.ceil(pagos.length / itemsPerPage)}>
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Multas;
