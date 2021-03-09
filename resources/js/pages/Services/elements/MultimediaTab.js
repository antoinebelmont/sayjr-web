import React, {Component} from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from "react-router-dom";
import { createMultimedia,getMultimedia } from "stores/actions/services_actions"
import Switch from "components/Switch";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import './Multimedia.css';

class MultimediaTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            service_id: props.serviceId,
            comments: '',
            is_video: false,
            images: []
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onChangeField = this.onChangeField.bind(this)
    }

    componentDidMount(){
        let self = this;
        this.props.getMultimedia(this.state.service_id).then(action =>{
            if(action.payload.status === 200){
                let images = this.formatMultimedia(action.payload.images);
                self.setState({
                    images,
                    videos: action.payload.videos
                })
            }
        })
    }
    
    formatMultimedia(images) {
        return images.map(image => {
            return {
                original: `${window.location.origin}/${image.image}`,
                thumbnail: `${window.location.origin}/${image.image}`,
                description:image.comments,
                originalClass: 'featured-slide'
            };
        });
    }

    onFormSubmit(e) {
        let self = this;
        e.preventDefault()
        this.props.createMultimedia(this.state).then(action =>{
            if(action.payload.status === 200){
                let images = this.formatMultimedia(action.payload.images);
                self.setState({
                    images,
                    videos: action.payload.videos,
                    comments:'',
                    image:'',
                    is_video:false
                })
                document.querySelector('#imageField').value = '';
                document.querySelector('#comments').value = '';
            }
        })
    }
    onChangeField(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (! files.length) 
            return;
        this.createImage(files[0]);
    }
    createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({image: e.target.result})
        };
        reader.readAsDataURL(file);
    }
    toggleIsVideo(is_video){
        let self = this;
        self.setState({
            is_video: !is_video
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">

                <div className='col-md-3'></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="header">
                            <h4>Cargar archivo Multimedia</h4>
                        </div>
                        <form className="form-horizontal"
                            onSubmit={
                                this.onFormSubmit
                        }>
                            <div className="form-group">
                                <label className="col-sm-3 control-label">
                                    Comentarios
                                </label>
                                <textarea name="comments" id="comments" cols="30" rows="5" onKeyUp={this.onChangeField} ></textarea>
                            </div>
                            {/* <div className="form-group">
                                <label className="col-sm-3 control-label">
                                    Es video
                                </label>
                                <Switch
                                            value={this.state.is_video}
                                            onChange={() =>
                                                this.toggleIsVideo(this.state.is_video)
                                            }
                                        />
                            </div> */}
                            <div className="form-group">
                                <label className="col-sm-3 control-label">
                                    Archivo
                                </label>
                                <input type="file"
                                    id='imageField'
                                    onChange={
                                        this.onChange
                                    }/>
                                <button type="submit" className="btn btn-primary">Cargar</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
                <div className="row">

                <div className='col-md-3'></div>
                    <div className="col-md-6 text-center mx-auto">

                        <ImageGallery items={this.state.images}  />
                    </div>
                </div>
            </div>

            
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapActionsToprops(dispatch) {
    return bindActionCreators(
        {
            createMultimedia,
            getMultimedia
        },
        dispatch
    );
}
export default withRouter(
    connect(mapStateToProps, mapActionsToprops)(MultimediaTab)
);
