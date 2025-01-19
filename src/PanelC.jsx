import React, { useState } from 'react';
import './Inicio.css';
import './PanelC.css';

const BarChart = ({ data }) => {
    const max = Math.max(...data);
    const width = 500;
    const height = 300;
    const barWidth = width / data.length;

    return (
        <svg width={width} height={height + 20} className="bar-chart">
            {data.map((value, index) => {
                const barHeight = (value / max) * height;
                return (
                    <g key={index}>
                        <rect
                            x={index * barWidth}
                            y={height - barHeight}
                            width={barWidth - 20}
                            height={barHeight}
                            fill="#007bff"
                            className="bar"
                        />
                        <text
                            x={index * barWidth + (barWidth - 20) / 2}
                            y={height + 15}
                            textAnchor="middle"
                            fontSize="12"
                            fill="#000"
                        >
                            {value}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
};

const PanelC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const pagos = [
        { id: 1, nombre: 'Eduardo', apellido: 'DLCJ', concepto: 'Pago A', monto: 200000, estado: 'Pendiente' },
        { id: 2, nombre: 'Ana', apellido: 'Gomez', concepto: 'Pago B', monto: 150000, estado: 'Realizado' },
        { id: 3, nombre: 'Carlos', apellido: 'Perez', concepto: 'Pago C', monto: 100000, estado: 'Pendiente' },
        { id: 4, nombre: 'Luis', apellido: 'Martinez', concepto: 'Pago D', monto: 250000, estado: 'Realizado' },
        { id: 5, nombre: 'Maria', apellido: 'Lopez', concepto: 'Pago E', monto: 300000, estado: 'Pendiente' },
        { id: 6, nombre: 'Jose', apellido: 'Garcia', concepto: 'Pago F', monto: 120000, estado: 'Realizado' },
        { id: 7, nombre: 'Laura', apellido: 'Rodriguez', concepto: 'Pago G', monto: 220000, estado: 'Pendiente' },
        { id: 8, nombre: 'Miguel', apellido: 'Hernandez', concepto: 'Pago H', monto: 180000, estado: 'Realizado' },
        { id: 9, nombre: 'Sofia', apellido: 'Gonzalez', concepto: 'Pago I', monto: 170000, estado: 'Pendiente' },
        { id: 10, nombre: 'David', apellido: 'Ramirez', concepto: 'Pago J', monto: 190000, estado: 'Realizado' },
    ];

    const totalPages = Math.ceil(pagos.length / itemsPerPage);
    const displayedPagos = pagos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const ganancias = [50000, 75000, 60000, 85000, 90000];

    return (
        <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'row', gap: '100px'  }}>
            <div className="inicio-containerP tabla-container">
                <h2 className="section-title">Historial de pagos</h2>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Concepto</th>
                            <th>Monto</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedPagos.map((pago) => (
                            <tr key={pago.id}>
                                <td>{pago.id}</td>
                                <td>{pago.nombre}</td>
                                <td>{pago.apellido}</td>
                                <td>{pago.concepto}</td>
                                <td>${pago.monto.toLocaleString()}</td>
                                <td>{pago.estado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="pagination-button"
                    >
                        Anterior
                    </button>
                    <span>Página {currentPage} de {totalPages}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="pagination-button"
                    >
                        Siguiente
                    </button>
                </div>
            </div>

            {/* Gráfica de ganancias */}
            <div className="inicio-containerP grafica-container">
                <h2 className="section-title">Ganancias Mensuales</h2>
                <BarChart data={ganancias} />
            </div>
        </div>
    );
};

export default PanelC;
