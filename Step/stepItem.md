```js
<>
  <ul className="step">
    <StepItem tooltip="step 1">step 1</StepItem>
    <StepItem tooltip="step 2" tooltipPosition="left">step 2</StepItem>
    <StepItem active>step 3</StepItem>
    <StepItem tooltip="step 4's tooltip">step 4</StepItem>
  </ul>
</>
```
```js
<>
  <ul className="step">
    <StepItem tooltipPosition="right" />
    <StepItem text="ok" />
    <StepItem active />
    <StepItem tooltip="step 4's tooltip" tooltipPosition="bottom" />
  </ul>
</>
```