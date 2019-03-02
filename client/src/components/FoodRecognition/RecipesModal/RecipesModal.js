import React from "react";
import { Modal, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import Recipes from "./Recipes";
import { toggleRecipeModal } from "../../../actions/recipesActions";
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
          {this._renderModalHeader()}
          <Recipes />
          <ModalFooter>
            <div style={{ marginRight: "auto" }}>
              Recipes from{" "}
              <a
                href="http://www.recipepuppy.com/about/api/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recipe Puppy API
              </a>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  _renderModalHeader = () => {
    return (
      <div
        style={{
          padding: "20px",
          paddingLeft: "0px"
        }}
        className="text-white"
      >
        <div style={{ minWidth: '300px', maxWidth: '500px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px' }} className="bg-success recipe-title">
          <span style={{ marginRight: "5px" }}>
            <FontAwesomeIcon icon={faBook} />
          </span>
          Recipes related to {this.props.keyword}
          <div className="recipe-title-triangle"></div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    modalIsOpen: state.recipes.modalIsOpen,
    keyword: state.recipes.queries.keyword
  };
};

export default connect(
  mapStateToProps,
  { toggleModal: toggleRecipeModal }
)(RecipesModal);
