export function Header() {
  return (<div>
    <div className="modal-header">
      <h4 className="modal-title">Modal Heading</h4>
      <button type="button" className="btn-close"
        data-bs-dismiss="modal"></button>
    </div>
  </div>)
}
export function Body() {
  return (<div>
    <div className="modal-body">
      Modal body..
    </div>
  </div>)
}
export function Footer() {
  return (<div>
    <div className="modal-footer">
      <button type="button" className="btn btn-danger"
        data-bs-dismiss="modal">Close</button>
    </div>
  </div>)
}