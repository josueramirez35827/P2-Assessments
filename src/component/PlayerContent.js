
function PlayerContent() {
      return (
         <button onClick={() => {this.props.clickHandler(this.props.id, this.props.name)}} style={{color: this.props.active? 'red': 'blue'}}>{this.props.name}
         </button>
      );
}

export default PlayerContent;