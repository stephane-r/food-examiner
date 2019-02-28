import React from "react";
import { Modal, ModalHeader, ModalFooter } from "reactstrap";
import { connect } from "react-redux";

import Recipes from "./Recipes";
import {
  toggleRecipeModal
} from "../../../actions/recipesActions";
import "./index.css";

class RecipesModal extends React.Component {

  render() {
    return (
      <div>
        <Modal
          size={"lg"}
          isOpen={this.props.modalIsOpen}
          toggle={this.props.toggleModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggleModal}>Recipes</ModalHeader>
          <Recipes />
          <ModalFooter>
            <div style={{ marginRight: "auto" }}>Recipes from recipe puppy</div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { modalIsOpen: state.recipes.modalIsOpen };
};

export default connect(
  mapStateToProps,
  { toggleModal: toggleRecipeModal }
)(RecipesModal);
