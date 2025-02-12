import { handleSubmitCommentAction, handleDeleteCommentAction, handleEditCommentAction } from './actions.js';
import { getSubmitButton, getDeleteCommentIdFromEvent, getEditCommentIdFromEvent } from "./domUtils.js";

export function bindSubmitCommentAction() {
    const submitButton = getSubmitButton();

    submitButton.addEventListener('click', () => {
        handleSubmitCommentAction();
    })
}

export function bindDeleteActionToDeleteCommentButtons() {
    document.body.addEventListener( 'click', function ( event ) {
        
        const deleteButtonId = getDeleteCommentIdFromEvent(event);
        const isClickedItemADeleteButton = !!deleteButtonId;
        
        if(isClickedItemADeleteButton) {
            handleDeleteCommentAction(deleteButtonId);
        };
        
        event.preventDefault();
    });
}

export function bindEditActionToEditCommentButtons() {
    document.body.addEventListener( 'click', function ( event ) {
       
        const editButtonId = getEditCommentIdFromEvent(event);
        const isClickedItemAnEditButton = !!deleteButtonId;
        
        if(isClickedItemAnEditButton) {
            handleEditCommentAction(editButtonId);
        };
        
        event.preventDefault();
    });
}
