import React from 'react';
import SwitchControl from 'components/Switch';

const FieldSelector = ({onInputChange}) => (
    <div className="row">
        <div className='col-md-3'></div>
        <div className="col-md-6">
            <div className="card">
                <div className="header">
                    <h4>Agregar comentario</h4>
                </div>
                <form className="form-horizontal">
                    <div className="content">
                        <div className="form-group">
                            <div className="col-sm-9">
                            <SwitchControl
              value={0}
              onChange={value => onInputChange(value,'cosa')}
              onText="&nbsp;"
              offText="&nbsp;" />
                            <textarea
                                    className={"form-control"}
                                    name="description"
                                    id="commentForm"
                                    required={true}
                                    onKeyUp={onInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className='col-md-3'></div>
    </div>
)

export default FieldSelector;