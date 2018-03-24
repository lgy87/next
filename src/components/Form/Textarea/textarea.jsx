/*
 * Guangyao Li
 * 2018/03/20
 * lgy87@foxmail.com
 */
import createFormElement from "../createFormElement"
import {hot} from "react-hot-loader"

const Textarea =
createFormElement({
  tag: "textarea",
  className: "input",
})

export default hot(module)(Textarea)
