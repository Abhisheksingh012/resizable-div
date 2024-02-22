import "./css/App.css";
import Resizable from "./component/resizable";

function App() {
  return (
    // <div className="App">
    //   <Resizable direction="vertical">
    //     <div className="row-1">
    //     <div className="innerDiv">div1</div>
    //     <div className="innerDiv">div3</div>
    //     </div>
    //   </Resizable>
    //   <div className="row-2">div 2</div>
    // </div>
    <div class="container">
      <Resizable direction="vertical">
        <div class="row top">
          <Resizable direction="horizontal">
            <div class="column" style={{backgroundColor: "#FF2E63",height:'100%'}}>
            </div>
            </Resizable>
            <div class="column" style={{backgroundColor: "#252A34",height:'100%'}}>
            
            </div>
        </div>
        </Resizable>
        <div class="row bottom" style={{backgroundColor: "#08D9D6"}}>
        </div>
    </div>
  );
}

export default App;
