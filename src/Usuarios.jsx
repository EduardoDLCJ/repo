import React, { useState } from 'react';
import './Usuarios.css';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([
        { id: 1, nombre: 'Juan', apellido: 'Perez', telefono: '123456789', departamento: 'Ventas', torre: 'A', rol: 'Admin', permiso: 'Full' },
        { id: 2, nombre: 'Ana', apellido: 'Gomez', telefono: '987654321', departamento: 'Marketing', torre: 'B', rol: 'User', permiso: 'Read' },
        { id: 3, nombre: 'Luis', apellido: 'Martinez', telefono: '456123789', departamento: 'IT', torre: 'C', rol: 'User', permiso: 'Write' },
        { id: 4, nombre: 'Maria', apellido: 'Lopez', telefono: '321654987', departamento: 'HR', torre: 'D', rol: 'Admin', permiso: 'Full' },
        { id: 5, nombre: 'Carlos', apellido: 'Garcia', telefono: '789456123', departamento: 'Finance', torre: 'E', rol: 'User', permiso: 'Read' },
        { id: 6, nombre: 'Pedro', apellido: 'Sanchez', telefono: '111222333', departamento: 'Logistics', torre: 'F', rol: 'User', permiso: 'Read' },
        { id: 7, nombre: 'Lucia', apellido: 'Ramirez', telefono: '444555666', departamento: 'Sales', torre: 'G', rol: 'Admin', permiso: 'Full' },
        { id: 8, nombre: 'Miguel', apellido: 'Fernandez', telefono: '777888999', departamento: 'Support', torre: 'H', rol: 'User', permiso: 'Write' },
        { id: 9, nombre: 'Sofia', apellido: 'Torres', telefono: '000111222', departamento: 'Development', torre: 'I', rol: 'User', permiso: 'Read' },
        { id: 10, nombre: 'Jorge', apellido: 'Diaz', telefono: '333444555', departamento: 'QA', torre: 'J', rol: 'Admin', permiso: 'Full' },
        { id: 11, nombre: 'Elena', apellido: 'Vega', telefono: '666777888', departamento: 'Design', torre: 'K', rol: 'User', permiso: 'Write' },
        { id: 12, nombre: 'Raul', apellido: 'Mendoza', telefono: '999000111', departamento: 'Operations', torre: 'L', rol: 'User', permiso: 'Read' },
        { id: 13, nombre: 'Patricia', apellido: 'Ortega', telefono: '222333444', departamento: 'Legal', torre: 'M', rol: 'Admin', permiso: 'Full' },
        { id: 14, nombre: 'Andres', apellido: 'Castro', telefono: '555666777', departamento: 'Procurement', torre: 'N', rol: 'User', permiso: 'Write' },
        { id: 15, nombre: 'Laura', apellido: 'Rojas', telefono: '888999000', departamento: 'R&D', torre: 'O', rol: 'User', permiso: 'Read' }
    ]);


    const [filtros, setFiltros] = useState({ nombre: '', departamento: '', torre: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleFiltroChange = (e) => {
        const { name, value } = e.target;
        setFiltros({ ...filtros, [name]: value });
    };

    const filteredUsuarios = usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(filtros.nombre.toLowerCase()) &&
        usuario.departamento.toLowerCase().includes(filtros.departamento.toLowerCase()) &&
        usuario.torre.toLowerCase().includes(filtros.torre.toLowerCase())
    );

    const totalPages = Math.ceil(filteredUsuarios.length / itemsPerPage);
    const currentData = filteredUsuarios.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='inicio-containerUsuarios' style={{marginTop: '100px'}}>
            <h1 className='usuarios-title' style={{color: 'black'}}>CRUD de Usuarios</h1>
            <div className='usuarios-filtros'>
                <input style={{backgroundColor: 'white'}}
                    type="text"
                    name="nombre"
                    placeholder="Filtrar por nombre"
                    value={filtros.nombre}
                    onChange={handleFiltroChange}
                    className='filtro-input'
                />
                <input style={{backgroundColor: 'white'}}
                    type="text"
                    name="departamento"
                    placeholder="Filtrar por departamento"
                    value={filtros.departamento}
                    onChange={handleFiltroChange}
                    className='filtro-input'
                />
                <input style={{backgroundColor: 'white'}}
                    type="text"
                    name="torre"
                    placeholder="Filtrar por torre"
                    value={filtros.torre}
                    onChange={handleFiltroChange}
                    className='filtro-input'
                />
            </div>
            <table className='usuarios-tabla'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Teléfono</th>
                        <th>Departamento</th>
                        <th>Torre</th>
                        <th>Rol</th>
                        <th>Permiso</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map(usuario => (
                        <tr  key={usuario.id}>
                            <td style={{color: 'black'}}>{usuario.id}</td>
                            <td style={{color: 'black'}}>{usuario.nombre}</td>
                            <td style={{color: 'black'}}>{usuario.apellido}</td>
                            <td style={{color: 'black'}}>{usuario.telefono}</td>
                            <td style={{color: 'black'}}>{usuario.departamento}</td>
                            <td style={{color: 'black'}}>{usuario.torre}</td>
                            <td style={{color: 'black'}}>{usuario.rol}</td>
                            <td style={{color: 'black'}}>{usuario.permiso}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Anterior
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default Usuarios;
