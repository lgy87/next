/*
 * Guangyao Li
 * 2017/11/22
 * 759646703@qq.com
 */
import {shallow, mount, render} from "enzyme"

global.r       = require("ramda")
global.React   = require("react")
global.sinon   = require("sinon")
global.render  = render
global.mount   = mount
global.shallow = shallow

global.requestAnimationFrame = r.flip(setTimeout)(0)
global.log = console.log.bind(console)
