/*
 * Guangyao Li
 * 2018/03/20
 * lgy87@foxmail.com
 */
import rc from "recompose"
import thread from "utils/thread"
import createFormElement from "../createFormElement"

const Label = 
  createFormElement({
    tag: "label",
  })

export default
rc.withProps(
  thread(["children", "text"]),
)(Label)


