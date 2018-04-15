/*
 * Guangyao Li
 * 2017/2/28
 * lgy87@foxmail.com
 */
import {render} from "react-dom"
import {AppContainer} from "react-hot-loader"
import "./deps"
import App from "containers/App"

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("root"),
)
module.hot && module.hot.accept()
