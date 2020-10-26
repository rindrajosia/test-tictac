const modalError = () => {
  document.body.innerHTML = `<div id="myModal" class="alert alert-danger modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <span  id ="close" class="close">&times;</span>
        <h4 id="alert-modal-title" class="modal-title"></h4>
      </div>
        <div id="alert-modal-body" class="modal-body">
            <p id = "modalBody" class="text-center"></p>
        </div>
      </div>
    </div>
    </div>`;
};
export default modalError;
