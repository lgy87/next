```js
<>
  <ul className="step">
    <StepItem>step 1</StepItem>
    <StepItem>step 2</StepItem>
    <StepItem tooltip={false} active>step 3</StepItem>
    <StepItem tooltip="step 4's tooltip">step 4</StepItem>
  </ul>
</>
```
```js
<>
  <ul className="step">
    <StepItem />
    <StepItem />
    <StepItem active />
    <StepItem tooltip="step 4's tooltip" />
  </ul>
</>
```