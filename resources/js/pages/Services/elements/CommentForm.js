import React from 'react';

const validate = values => {};

const CommentForm = ({handleSubmit,onInputChange}) => (
    <div className="row">
        <div className='col-md-3'></div>
        <div className="col-md-6">
            <div className="card">
                <div className="header">
                    <h4>Agregar comentario</h4>
                </div>
                <form className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="content">
                        <div className="form-group">
                            <div className="col-sm-9">
                            <textarea
                                    className={"form-control"}
                                    name="description"
                                    required={true}
                                    onKeyUp={onInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="footer text-center">
                        <button type="submit" className="btn btn-info btn-fill">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className='col-md-3'></div>
    </div>
)
export default CommentForm;