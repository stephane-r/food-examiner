import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from 'react-redux';

import RecipeBox from "./RecipeBox";
import { fetchRecipes, toggleRecipeModal } from '../../../actions/recipesActions';
import "./index.css";

class RecipesModal extends React.Component {
  constructor(props) {
    super(props);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.props.toggleModal}>
          View Recipes
        </Button>
        <Modal
          size={"lg"}
          isOpen={this.props.modalIsOpen}
          toggle={this.props.toggleModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggleModal}>Recipes</ModalHeader>
          <ModalBody>
            <div className="recipes">
              {this._renderRecipes()}
            </div>
          </ModalBody>
          <ModalFooter>
            <div style={{ marginRight: "auto" }}>Recipes from recipe puppy</div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  _renderRecipes = () => {
    return this.props.recipes.map((r) => {
      return <RecipeBox recipe={r} />
    });
  };
}

const mapStateToProps = (state) => {
  return { ...state.recipes };
};

export default connect(mapStateToProps, { toggleModal: toggleRecipeModal, fetchRecipes })(RecipesModal);
