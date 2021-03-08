import React from "react";
import { Accordion, Panel } from "react-bootstrap";

const CommentsList = ({ comments }) => (
    <div className="card">
        <div className="header">
            <h4 className="title">Comentarios</h4>
            <p className="category"></p>
        </div>
        <div className="content">
            <div className="panel-group" id="accordion">
                <Accordion>
                    {comments.map((obj, index) => (
                        <Panel
                            id={index}
                            header={
                                <span>
                                    {obj.user_id} el {obj.created_at}
                                    <b className="caret"></b>
                                </span>
                            }
                            eventKey={obj.id}
                        >
                            {obj.comment}
                        </Panel>
                    ))}
                </Accordion>
            </div>
        </div>
    </div>
);

export default CommentsList;
