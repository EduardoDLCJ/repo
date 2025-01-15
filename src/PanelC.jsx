import React from 'react';
import { Bar } from 'react-chartjs-2';

const PanelC = () => {
    const payments = [
        { id: 1, name: 'Payment 1', amount: 100 },
        { id: 2, name: 'Payment 2', amount: 200 },
        { id: 3, name: 'Payment 3', amount: 300 },
        { id: 4, name: 'Payment 4', amount: 400 },
    ];

    const data = {
        labels: payments.map(payment => payment.name),
        datasets: [
            {
                label: 'Ganancias',
                data: payments.map(payment => payment.amount),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, padding: '20px' }}>
                <h2>Lista de Pagos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map(payment => (
                            <tr key={payment.id}>
                                <td>{payment.id}</td>
                                <td>{payment.name}</td>
                                <td>{payment.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ flex: 1, padding: '20px' }}>
                <h2>Gráfica de Ganancias</h2>
                <Bar data={data} />
            </div>
        </div>
    );
};

export default PanelC;