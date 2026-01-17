import Spinner from '../../assets/spinner.gif'

function LoadingSpinner() {

  return (
    <div style={{ margin: "auto", textAlign: "center", paddingTop: "30px" }}>
      <img src={Spinner} />
    </div>
  )

}

export default LoadingSpinner