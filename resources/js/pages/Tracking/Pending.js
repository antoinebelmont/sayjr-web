import React from 'react';

const PendingTable = ({pendingServices}) =>(
    <div className="card col-md-6">
    <div className="header">
      <h4 className="title">Servicios pendientes</h4>
      <p className="category">Servicios que aún no se asigna técnico y agenda cita</p>
    </div>
    <div className='content table-responsive table-full-width'>
        <table className='table table-hover table-striped'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Servicio</th>
                    <th>Primer Contacto</th>
                    <th>Recibe</th>
                </tr>
            </thead>
            <tbody>
                {pendingServices.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td><a href={`/service/detail/${item.id}`}>{item.title}</a></td>
                        <td>{item.first_contact_date}</td>
                        <td>{item.receptor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>
)

export default PendingTable;