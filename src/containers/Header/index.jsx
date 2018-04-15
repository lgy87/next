/*
 * Guangyao Li
 * 2018/03/21
 * lgy87@foxmail.com
 */
import Navbar from "components/Navbar"
import {Column} from "components/Layout"
import Text from "components/Loading"
import Select from "components/Form/Select"
import Input from "components/Form/Input"
import Checkbox from "components/Form/Checkbox"

let checked = true
const {Section, Brand} = Navbar
export default props => {
  return (
    <Column col-12 ml-auto>
    <Navbar>
      <Section>
        <Checkbox label="i love you" checked={checked} name="ok" onChange={e => {
          console.log(e.target.checked)
          checked = ! e.target.checked
        }} />
        <Select
          options={[
            {value: "lgy", text: "LGY"},
            {value: "jwn", text: "JWN"},
            {value: "hll", text: "HLL"},
            {value: "dd", text: "DouDou"},
          ]}
        />
        <Brand
          href="/"
          text="GZQ"
        />
      </Section>
      <Section>
      <div className="input-group input-inline">
      <input className="form-input" type="text" placeholder="search" />
      <button className="btn btn-primary input-group-btn">Search</button>
    </div>
      </Section>
    </Navbar>
    </Column>
  )
}
