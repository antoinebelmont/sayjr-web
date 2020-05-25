import React from "react";
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

const Actions = props => {
    return (
        <div className="td-actions">
            <a
                type="button"
                rel="tooltip"
                data-placement="left"
                title=""
                className="btn btn-info btn-simple btn-icon"
                data-original-title="View Service"
                href={`/service/detail/${props}`}
            >
                <i className="fa fa-address-book"></i>
            </a>
            <a
                type="button"
                rel="tooltip"
                data-placement="left"
                title=""
                className="btn btn-success btn-simple btn-icon"
                data-original-title="Edit Post"
                href={`/service/edit/${props}`}
            >
                <i className="fa fa-edit"></i>
            </a>
            <button
                onClick={()=>{confirmAlert(options(props))}}
                type="button"
                rel="tooltip"
                data-placement="left"
                title=""
                className="btn btn-danger btn-simple btn-icon "
                data-original-title="Remove Post"
            >
                <i className="fa fa-times"></i>
            </button>
        </div>
    );
};

const options = props =>{return {
    title: 'Eliminar servicio',
    message: 'Seguro que desea eliminar el servicio?',
    buttons: [
      {
        label: 'Si',
        onClick: () => window.location = `/service/delete/${props}`
      },
      {
        label: 'Cancelar',
        onClick: () => close()
      }
    ]
  }};
export default Actions;
