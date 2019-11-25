import React from 'react';

const Appointed = ({appointedServices}) =>(
    <div className="card col-md-6">
    <div className="header">
      <h4 className="title">Servicios agendados</h4>
      <p className="category">Servicios con cita establecida</p>
    </div>
    <div className='content table-responsive table-full-width'>
        <table className='table table-hover table-striped'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Servicio</th>
                    <th>Técnico</th>
                    <th>Cita</th>
                </tr>
            </thead>
            <tbody>
                {appointedServices.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.attendant}</td>
                        <td>{item.service_date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>
)

export default Appointed;