import React, {Component} from 'react';
import AddButton from "../AddButton";
import modalClose from "../../images/modal-close.svg";
import "./Modal.scss";

class Modal extends Component {
  state = {
    modalOpen: false,
    modalClass: "modal",
    overlayClass: "overlay",
  };
  
  handleModalClick() {
    this.setState(({modalOpen}) => ({
      modalOpen: !modalOpen
    }));
  };
  
  render() {
    const {modalOpen, modalClass, overlayClass} = this.state;
    const {children, title} = this.props;
    
    return (
      <>
        <AddButton title={title} onClick={() => this.handleModalClick()}/>
        <div className={`${modalOpen ? `${overlayClass} ${overlayClass}--active` : `${overlayClass}`}`}/>
        <div className={`${modalOpen ? `${modalClass} ${modalClass}--active` : `${modalClass}`}`}>
          <input type="image" src={modalClose} alt="close-icon" onClick={() => this.handleModalClick()} className="modal__close"/>
          <div className="modal__container">
            {children}
          </div>
        </div>
      </>
    )
  }
}

export default Modal;