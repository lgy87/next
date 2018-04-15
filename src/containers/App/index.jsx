/*
 * Guangyao Li
 * 2018/03/21
 * lgy87@foxmail.com
 */
import r from "ramda"
import Icon from "components/Icon/icon"
import {hot} from "react-hot-loader"
import {Container, Columns, Column} from "components/Layout"
import Header from "containers/Header"
import Input, {Group} from "components/Form/Input"
import withIcon from "HOCs/withIcon"
import Text from "components/Text"
const B = props => <button {...props} />
const InputWithEmoji = withIcon({
  name: "arrow-right",
})(Input)
const InputWithLoading = withIcon({
  name: "loading",
  position: "right",
  size: "lg",
})(Input)

const Ico = withIcon({name: "loading"})(Icon)
export default props => {
  return (
    <Container>
      <Columns>
        <Column col-6>
          <Text weight="bold" text="i love you" direction="right" />
          <Input placeholder="i love you" />
          <InputWithEmoji placeholder="i love you" />
          <InputWithLoading placeholder="i love you" />
        </Column>
      </Columns>
    </Container>
  )
}
/*
import {provideState, update, injectState} from "freactal"

const wrapComponentWithState = provideState({
  initialState: () => ({ thing: "val" }),
  effects: {
    setThing: (effects, newVal) => state => Object.assign({}, state, { thing: newVal })
  }
});

const Child = injectState(({state, effects}) => {
  const onClick = () => effects.setThing("llll")

  return (
    <>
      {"our 'thing' value is: " + state.thing}
      <button onClick={onClick}>click</button>
    </>
  )
})
export default
hot(module)(wrapComponentWithState(Child))
*/
