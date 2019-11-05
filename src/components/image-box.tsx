import * as React from "react";
import { Modal, ModalBody, ModalFooter, Button, ModalHeader } from "reactstrap";
import * as styles from "./image-box.module.scss";

export interface ImageBoxProps {
  src: string;
  alt?: string;
  className?: string;
  showCaption?: boolean;
}

export interface ImageBoxState {
  isModalOpen: boolean;
}

export class ImageBox extends React.Component<ImageBoxProps, ImageBoxState> {
  constructor(props: ImageBoxProps) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  public toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  public render() {
    return (
      <>
        <figure>
          <img
            src={this.props.src}
            alt={this.props.alt}
            className={`${styles.imageBox} ${this.props.className}`}
            onClick={this.toggleModal}
          />
          {this.props.showCaption === false ? null : (
            <figcaption className={`text-center ${styles.imgCaption}`}>
              {this.props.alt}
            </figcaption>
          )}
        </figure>
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          centered={true}
          fade={false}
          className={styles.modal}
        >
          <ModalHeader toggle={this.toggleModal} charCode="X">
            {this.props.alt}
          </ModalHeader>
          <ModalBody className="text-center">
            <img
              src={this.props.src}
              alt={this.props.alt}
              className={this.props.className}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
