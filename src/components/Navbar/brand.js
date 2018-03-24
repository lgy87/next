/*
 * Guangyao Li
 * 2018/03/22
 * lgy87@foxmail.com
 */
import Item from "./item"
import {mapProps} from "recompose"

export default
mapProps(props => ({
  ...props,
  className: "navbar-brand mr-2",
}))(Item)